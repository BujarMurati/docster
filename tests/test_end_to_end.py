from pathlib import Path

from typer.testing import CliRunner

from docster.main import app

runner = CliRunner()


def test_remote(tmp_path: Path):
    result = runner.invoke(
        app,
        [
            "remote",
            "https://github.com/plotly/dash.git",
            "--output-dir",
            str(tmp_path),
            "--package-root",
            "dash",
        ],
        catch_exceptions=False,
    )
    print(result.stdout)
    assert result.exit_code == 0


def test_local(tmp_path: Path):
    result = runner.invoke(
        app, ["local", "docster", "--output-dir", str(tmp_path)], catch_exceptions=False
    )
    print(result.stdout)
    assert result.exit_code == 0
