import typer
from pathlib import Path

app = typer.Typer()

@app.command()
def remote(uri: str, template_path: Path, out_dir: Path):
    """Fetch a remote git repo, extract docstrings and render a template

    Args:
        uri (str): a uri from which to fetch a remote git repo
        template_path (Path): path to a template
        out_dir (Path): where to write the output to
    """
    typer.echo("Hello World")

if __name__ == "__main__":
    app()