"""Browser-test diagnostics are opt-in; working downloads are temporary.

Set LCZ_TEST_OUTPUT to a directory to retain screenshots, reports and downloads.
Otherwise only terminal results remain after a test exits, including on failure.
"""
import atexit
import json
import os
from pathlib import Path
import sys
from tempfile import TemporaryDirectory


class TestArtifacts:
    def __init__(self, suite):
        self.suite = suite
        output = os.environ.get("LCZ_TEST_OUTPUT")
        self.output = Path(output).expanduser().resolve() if output else None
        self._temporary = None
        atexit.register(self.close)

    def path(self, filename):
        """A writable path for a download needed by an assertion."""
        if self.output is not None:
            directory = self.output
        else:
            if self._temporary is None:
                self._temporary = TemporaryDirectory(prefix=f"lcz-{self.suite}-")
                self._temporary_path = Path(self._temporary.name).resolve()
            directory = self._temporary_path
        target = directory / filename
        target.parent.mkdir(parents=True, exist_ok=True)
        return target

    def screenshot(self, page, filename, **options):
        """Skip screenshot encoding and disk writes unless explicitly requested."""
        if self.output is None:
            return None
        target = self.path(filename)
        page.screenshot(path=str(target), **options)
        return target.as_posix()

    def finish(self, report, filename="report.json", aliases=()):
        """Print the outcome, optionally retain diagnostics, and release downloads."""
        try:
            summary = {"suite": self.suite, "passed": len(report.get("passed", []))}
            for key in ("status", "failed", "failure", "errors", "missing", "external",
                        "csp", "counter_requests", "issues"):
                if report.get(key):
                    summary[key] = report[key]
            active_error = sys.exc_info()[1]
            if active_error is not None:
                summary.setdefault("failure", f"{type(active_error).__name__}: {active_error}")
            print(json.dumps(summary, ensure_ascii=False, indent=2), flush=True)
            if self.output is not None:
                encoded = json.dumps(report, ensure_ascii=False, indent=2) + "\n"
                for name in (filename, *aliases):
                    self.path(name).write_text(encoded, encoding="utf-8")
                print(f"Diagnostics: {self.output / filename}", flush=True)
        finally:
            self.close()

    def close(self):
        if self._temporary is not None:
            # Only the exact directory created for this run may be removed.
            if Path(self._temporary.name).resolve() != self._temporary_path:
                raise RuntimeError("Temporary test directory changed unexpectedly")
            self._temporary.cleanup()
            self._temporary = None
        atexit.unregister(self.close)
