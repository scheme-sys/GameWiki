"""Validate the public Craft player catalog, original icons and local runtime."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess

from generate_lazy import verify_generated

ASSETS = Path(__file__).resolve().parents[1]
ROOT = ASSETS.parent
ARTICLE_FIELDS = {
    "baseArticleId", "baseHardCost", "baseResourceCost", "description",
    "descriptionLocalizationFallback", "femaleIcon", "icon", "iconMissingReason",
    "iconResourceId", "id", "itemRankId", "localizationMissing", "mailboxEligible",
    "mailboxQuantityAdjustable", "mailboxQuantityMode", "primary", "quality",
    "qualityId", "qualityStorageId", "slotIds", "slotStorageIds", "slots",
    "stackStorageId", "stackType", "stackTypeId", "title", "titleLocalizationFallback",
    "type", "typeId", "typeStorageId", "wikiGroup", "wikiGroupId", "workbenchId",
}
PRIVATE_KEYS = {"raw", "$ref", "class", "titleKey", "descriptionKey", "mailboxPolicy", "mailboxExclusionReason"}
PRIVATE_TEXT = re.compile(r"function\s*\(proto=|\b\w+StorageData\b|\bCAB-[a-f0-9]+\b|\.(?:bundle|bun|lu|lua|cs)(?:\b|$)", re.I)


def digest(raw: bytes) -> str:
    return hashlib.sha256(raw).hexdigest()


def manifest_bytes(path: Path) -> tuple[str, bytes]:
    """Text checkout line endings are not content; original image bytes are."""
    raw = path.read_bytes()
    if path.suffix.lower() in {".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".svg"}:
        return "binary", raw
    text = raw.decode("utf-8").replace("\r\n", "\n").replace("\r", "\n")
    return "utf8-lf", text.encode("utf-8")


def assert_public_data(value: object, location: str = "data") -> None:
    if isinstance(value, dict):
        assert not (set(value) & PRIVATE_KEYS), (location, "private source fields")
        for key, child in value.items():
            assert_public_data(child, location + "." + key)
    elif isinstance(value, list):
        for index, child in enumerate(value):
            assert_public_data(child, location + "[" + str(index) + "]")
    elif isinstance(value, str):
        assert not PRIVATE_TEXT.search(value), (location, "private source text")


def main() -> None:
    source = (ASSETS / "wiki-data.js").read_text(encoding="utf-8")
    prefix = "window.COS_WIKI_DATA="
    data = json.JSONDecoder().raw_decode(source[source.index(prefix) + len(prefix):])[0]
    manifest = json.loads((ROOT / "package-validation.json").read_text(encoding="utf-8"))
    provenance = json.loads((ASSETS / "provenance.json").read_text(encoding="utf-8"))
    assert manifest["schema"] == "craft-player-package-v3"
    generated_count = verify_generated(ASSETS)
    assert_public_data(data)
    assert_public_data(provenance)
    for article in data["articles"]:
        assert set(article) == ARTICLE_FIELDS, (article["id"], "unexpected or missing fields")
        for field in ("icon", "femaleIcon"):
            if article[field]:
                target = (ROOT / article[field]).resolve()
                assert target.is_relative_to((ASSETS / "icons").resolve()), article[field]
                assert target.is_file(), article[field]
    canonical = json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    assert digest(canonical.encode("utf-8")) == provenance["playerDataSha256"]
    assert len(data["articles"]) == provenance["counts"]["articles"] == 3843
    assert len(data["currencies"]) == provenance["counts"]["currencies"] == 4
    for icon in provenance["icons"].values():
        assert digest((ROOT / icon["file"]).read_bytes()) == icon["sha256"], icon["file"]
    expected = {row["path"] for row in manifest["files"]}
    actual = {path.relative_to(ROOT).as_posix() for path in ROOT.rglob("*")
              if path.is_file() and path.name != "package-validation.json"
              and path.suffix != ".pyc" and "__pycache__" not in path.parts}
    assert expected == actual, ("package file list changed", sorted(expected ^ actual))
    for row in manifest["files"]:
        target = (ROOT / row["path"]).resolve()
        assert target.is_relative_to(ROOT.resolve()), row["path"]
        mode, content = manifest_bytes(target)
        assert row["hashMode"] == mode, row["path"]
        assert len(content) == row["bytes"] and digest(content) == row["sha256"], row["path"]
    assert not (ASSETS / "mailbox-article-whitelist.json").exists()
    assert not (ASSETS / "VALIDATION.json").exists()
    page = (ROOT / "wiki.html").read_text(encoding="utf-8")
    references = re.findall(r'<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"', page)
    for reference in references:
        if not re.match(r"^(?:https?:|data:|#)", reference):
            assert (ROOT / reference).is_file(), reference
    node = shutil.which("node")
    assert node, "Node.js is required for JavaScript syntax checks."
    for script in ASSETS.rglob("*.js"):
        subprocess.run([node, "--check", str(script)], check=True, capture_output=True, text=True)
    print(json.dumps({"status": "PASS", "articles": len(data["articles"]),
                      "imageFiles": provenance["counts"]["imageFiles"],
                      "playerDataVerified": True, "privateSourceFieldsAbsent": True,
                      "packageFilesVerified": len(expected), "lazyResourcesVerified": generated_count}, indent=2))


if __name__ == "__main__":
    main()
