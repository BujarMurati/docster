---
id: docster
title: docster
slug: /docster
---


# docster.visitor




## docster.visitor.DocstringVisitor
```
Traverses the AST und extracts docstring and metadata from modules, classes and callables
```

### docster.visitor.DocstringVisitor.__init__
```

```

### docster.visitor.DocstringVisitor.qual_name
```

```

### docster.visitor.DocstringVisitor.visit_Module
```
Extract docstring and metadata from an ast.Module node
```

### docster.visitor.DocstringVisitor.visit_ClassDef
```
Extract docstring and metadata from an ast.ClassDef node
```

### docster.visitor.DocstringVisitor._visit_callable
```
Extract docstring and metadata from any callable AST node
```

### docster.visitor.DocstringVisitor.visit_AsyncFunctionDef
```
Extract docstring and metadata from an ast.AsyncFunctionDef node
```

### docster.visitor.DocstringVisitor.visit_FunctionDef
```
Extract docstring and metadata from an ast.FunctionDef node
```

### docster.visitor.DocstringVisitor._parse_docstring
```

```




## docster.visitor.parse
```
Extract structured docstrings from a module

Args:
    module (Path): path to a python module, i.e. dash/dash.py
    module_name (str): name of the module, i.e. dash.dash

Returns:
    Module: a docster.models.Module containing structured docstrings
```


# docster.helpers






## docster.helpers.resolve_module_name
```
Performs path arithmetics to determine a qualified module name

Args:
    module_path (Path): path to the module whose qual name to resolve
    base_dir (Path): path to the package root

Returns:
    str: qualified module name, i.e. "root.foo.bar" for "root/foo/bar"
```

## docster.helpers.resolve_doc_file_path
```
Return the absolute path to a rendered doc file

Args:
    module_name (str): the module name, i.e. "networkx.drawing.layout"
    out_dir (Path): the output directory, i.e. Path("/build")
    file_extension (str): the desired file extension, i.e. ".md"

Returns:
    Path: path to the rendered doc file,
        i.e. Path("/build/networkx/drawing/layout.md").resolve()
```

## docster.helpers._list_files
```
Recursively list files in a dir and its sub dirs 
```

## docster.helpers.find_modules
```
Recursively find all modules in a directory 
```


# docster.main






## docster.main.process_package
```
None
```

## docster.main.remote
```
Fetch a remote git repo, extract docstrings and render a template

Args:
    uri (str): a uri from which to fetch a remote git repo
    template_path (Path): path to a template
    out_dir (Path): where to write the output to
    package_root (Path): the relative path to the package root inside the repo
    mode: (OutputMode, optional): Output mode, one of "file" | "directory" | "stdout".
        For "file" and "stdout" the template receives a Package object and is written to
        "output" or echoed standardoutput. For "directory", the template receives one
        Module object per module and is written to one file per module, with the output
        directory structure mimicking the package structure. Defaults to "stdout"
```

## docster.main.local
```
Extract docstrings from a local package and render a template

Args:
    dir (Path, optional): path to the package. Defaults to ".".
    template_path (Path, optional): jinja2 template. Defaults to "template.md".
    output (Path, optional): where to write rendered templates. Defaults to "/build".
    mode: (OutputMode, optional): Output mode, one of "file" | "directory" | "stdout".
        For "file" and "stdout" the template receives a Package object and is written to
        "output" or echoed standardoutput. For "directory", the template receives one
        Module object per module and is written to one file per module, with the output
        directory structure mimicking the package structure. Defaults to "stdout"
```


# docster.models




## docster.models.Node
```
Documentation for an AST node
```


## docster.models.FuncDef
```
Documentation for a function or method definition
```


## docster.models.ClassDef
```
Representation of docstrings 
```


## docster.models.Module
```
Representation of docstrings and metadata contained in a module
```


## docster.models.Package
```
Representation of docstrings and metadata contained in a Package
```

### docster.models.Package.render
```
Render a template with the package
```

### docster.models.Package.render_modules
```
Render a template for each module
```


## docster.models.OutputMode
```
How and where to render and write documentation
OutputMode.file: render documentation for the entire package in a singe file.
    The template receives a Package instance
OutputMode.stdout: same as OutputModel.file, but write to standard output instead
OutputMode.directory: render documentation in one file per module, where the
    package structure is preserved
```

### docster.models.OutputMode._write_to_stdout
```

```

### docster.models.OutputMode._write_to_file
```

```

### docster.models.OutputMode._write_to_dir
```

```

### docster.models.OutputMode.apply
```
Render and write documentation according to the output mode

Args:
    package (Package): [description]
    output (Path): [description]
    template_file (Path): [description]
```





# docster.__init__






