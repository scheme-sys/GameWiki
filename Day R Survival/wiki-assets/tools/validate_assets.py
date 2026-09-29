"""Verify extracted Day R data, image bytes, local references and JS syntax."""

from __future__ import annotations

import base64
import hashlib
import json
import re
import shutil
import subprocess
from pathlib import Path


ASSETS = Path(__file__).resolve().parents[1]
ROOT = ASSETS.parent


def digest(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def load_assignment(filename: str, prefix: str, suffix: str) -> object:
    source = (ASSETS / "data" / filename).read_text(encoding="utf-8")
    start = source.index(prefix) + len(prefix)
    assert source.rstrip().endswith(suffix), filename
    return json.loads(source[start : source.rfind(suffix)])


def main() -> None:
    manifest = json.loads((ASSETS / "asset-manifest.json").read_text(encoding="utf-8"))
    data = load_assignment("meta.js", "Object.assign(window.DAYR_DATA, ", ");")
    for name in ("items", "monsters", "images"):
        filename = "image-index.js" if name == "images" else name + ".js"
        data[name] = load_assignment(filename, "window.DAYR_DATA." + name + " = ", ";")

    counts = {
        "items": len(data["items"]),
        "monsters": len(data["monsters"]),
        "weapons": sum(
            row.get("category") == "\u6b66\u5668" or "\u6b66\u5668" in row.get("tags", [])
            for row in data["items"]
        ),
        "images": len(data["images"]),
    }
    assert counts == manifest["counts"], (counts, manifest["counts"])
    assert len(manifest["images"]) == counts["images"]
    originals = {}
    for asset in [*manifest["images"], manifest["hero"]]:
        target = (ROOT / asset["path"]).resolve()
        assert target.is_relative_to(ASSETS.resolve()), asset["path"]
        raw = target.read_bytes()
        assert len(raw) == asset["bytes"], asset["path"]
        assert digest(raw) == asset["sha256"], asset["path"]
        if "source" in asset:
            assert data["images"][asset["source"]] == asset["path"], asset["source"]
            originals[asset["source"]] = (
                "data:" + asset["mime"] + ";base64," + base64.b64encode(raw).decode("ascii")
            )
    data["images"] = originals
    canonical = json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    assert digest(canonical.encode("utf-8")) == manifest["originalDataSha256"]

    page = (ROOT / "wiki_dayR.html").read_text(encoding="utf-8")
    references = re.findall(r'<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"', page)
    for reference in references:
        if not re.match(r"^(?:https?:|data:|#)", reference):
            assert (ROOT / reference).is_file(), reference
    assert "../assets/wiki-nav.js" in references
    assert "../assets/wiki-nav.css" in references
    assert "data:image/" not in page

    node = shutil.which("node")
    assert node, "Node.js is required to check extracted JavaScript syntax."
    scripts = sorted(ASSETS.rglob("*.js"))
    for script in scripts:
        subprocess.run([node, "--check", str(script)], check=True, capture_output=True, text=True)
    print(json.dumps({
        "status": "PASS",
        "counts": counts,
        "verifiedImageFiles": len(manifest["images"]) + 1,
        "originalDataReconstructedExactly": True,
        "javascriptSyntaxChecks": len(scripts),
        "localReferencesChecked": len(references),
    }, indent=2))


if __name__ == "__main__":
    main()
