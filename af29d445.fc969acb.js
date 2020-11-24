(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{62:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return n})),o.d(t,"default",(function(){return l}));var d=o(2),r=o(6),s=(o(0),o(75)),c={id:"docster",title:"docster",slug:"/docster"},i={unversionedId:"docster",id:"docster",isDocsHomePage:!1,title:"docster",description:"docster.helpers",source:"@site/docs/docster.md",slug:"/docster",permalink:"/docster/docster",version:"current",sidebar:"docs",previous:{title:"Templating",permalink:"/docster/templating"}},n=[{value:"docster.helpers.resolve_module_name",id:"docsterhelpersresolve_module_name",children:[]},{value:"docster.helpers.resolve_doc_file_path",id:"docsterhelpersresolve_doc_file_path",children:[]},{value:"docster.helpers.find_modules",id:"docsterhelpersfind_modules",children:[]},{value:"docster.main.process_package",id:"docstermainprocess_package",children:[]},{value:"docster.main.remote",id:"docstermainremote",children:[]},{value:"docster.main.local",id:"docstermainlocal",children:[]},{value:"docster.visitor.DocstringVisitor",id:"docstervisitordocstringvisitor",children:[{value:"docster.visitor.DocstringVisitor.qual_name",id:"docstervisitordocstringvisitorqual_name",children:[]},{value:"docster.visitor.DocstringVisitor.visit_Module",id:"docstervisitordocstringvisitorvisit_module",children:[]},{value:"docster.visitor.DocstringVisitor.visit_ClassDef",id:"docstervisitordocstringvisitorvisit_classdef",children:[]},{value:"docster.visitor.DocstringVisitor.visit_AsyncFunctionDef",id:"docstervisitordocstringvisitorvisit_asyncfunctiondef",children:[]},{value:"docster.visitor.DocstringVisitor.visit_FunctionDef",id:"docstervisitordocstringvisitorvisit_functiondef",children:[]}]},{value:"docster.visitor.parse",id:"docstervisitorparse",children:[]},{value:"docster.models.Node",id:"docstermodelsnode",children:[]},{value:"docster.models.FuncDef",id:"docstermodelsfuncdef",children:[{value:"docster.models.FuncDef.signature",id:"docstermodelsfuncdefsignature",children:[]}]},{value:"docster.models.ClassDef",id:"docstermodelsclassdef",children:[{value:"docster.models.ClassDef.methods",id:"docstermodelsclassdefmethods",children:[]},{value:"docster.models.ClassDef.constructor",id:"docstermodelsclassdefconstructor",children:[]}]},{value:"docster.models.Module",id:"docstermodelsmodule",children:[{value:"docster.models.Module.classes",id:"docstermodelsmoduleclasses",children:[]},{value:"docster.models.Module.functions",id:"docstermodelsmodulefunctions",children:[]}]},{value:"docster.models.Package",id:"docstermodelspackage",children:[{value:"docster.models.Package.modules",id:"docstermodelspackagemodules",children:[]},{value:"docster.models.Package.render",id:"docstermodelspackagerender",children:[]},{value:"docster.models.Package.render_modules",id:"docstermodelspackagerender_modules",children:[]}]},{value:"docster.models.OutputMode",id:"docstermodelsoutputmode",children:[{value:"docster.models.OutputMode.apply",id:"docstermodelsoutputmodeapply",children:[]}]}],a={rightToc:n};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(d.a)({},a,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"docsterhelpers"},"docster.helpers"),Object(s.b)("h2",{id:"docsterhelpersresolve_module_name"},"docster.helpers.resolve_module_name"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),'Performs path arithmetics to determine a qualified module name\n\nArgs:\n    module_path (Path): path to the module whose qual name to resolve\n    base_dir (Path): path to the package root\n\nReturns:\n    str: qualified module name, i.e. "root.foo.bar" for "root/foo/bar"\n')),Object(s.b)("h2",{id:"docsterhelpersresolve_doc_file_path"},"docster.helpers.resolve_doc_file_path"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),'Return the absolute path to a rendered doc file\n\nArgs:\n    module_name (str): the module name, i.e. "networkx.drawing.layout"\n    out_dir (Path): the output directory, i.e. Path("/build")\n    file_extension (str): the desired file extension, i.e. ".md"\n\nReturns:\n    Path: path to the rendered doc file,\n        i.e. Path("/build/networkx/drawing/layout.md").resolve()\n')),Object(s.b)("h2",{id:"docsterhelpersfind_modules"},"docster.helpers.find_modules"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Recursively find all modules in a directory \n")),Object(s.b)("h1",{id:"docster"},"docster"),Object(s.b)("h1",{id:"docstermain"},"docster.main"),Object(s.b)("h2",{id:"docstermainprocess_package"},"docster.main.process_package"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"None\n")),Object(s.b)("h2",{id:"docstermainremote"},"docster.main.remote"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Fetch a remote git repo, extract docstrings and render a template\n")),Object(s.b)("h2",{id:"docstermainlocal"},"docster.main.local"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Extract docstrings from a local package and render a template\n")),Object(s.b)("h1",{id:"docstervisitor"},"docster.visitor"),Object(s.b)("h2",{id:"docstervisitordocstringvisitor"},"docster.visitor.DocstringVisitor"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Traverses the AST und extracts docstring and metadata from modules, classes and callables\n")),Object(s.b)("h3",{id:"docstervisitordocstringvisitorqual_name"},"docster.visitor.DocstringVisitor.qual_name"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"")),Object(s.b)("h3",{id:"docstervisitordocstringvisitorvisit_module"},"docster.visitor.DocstringVisitor.visit_Module"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Extract docstring and metadata from an ast.Module node\n")),Object(s.b)("h3",{id:"docstervisitordocstringvisitorvisit_classdef"},"docster.visitor.DocstringVisitor.visit_ClassDef"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Extract docstring and metadata from an ast.ClassDef node\n")),Object(s.b)("h3",{id:"docstervisitordocstringvisitorvisit_asyncfunctiondef"},"docster.visitor.DocstringVisitor.visit_AsyncFunctionDef"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Extract docstring and metadata from an ast.AsyncFunctionDef node\n")),Object(s.b)("h3",{id:"docstervisitordocstringvisitorvisit_functiondef"},"docster.visitor.DocstringVisitor.visit_FunctionDef"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Extract docstring and metadata from an ast.FunctionDef node\n")),Object(s.b)("h2",{id:"docstervisitorparse"},"docster.visitor.parse"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Extract structured docstrings from a module\n\nArgs:\n    module (Path): path to a python module, i.e. dash/dash.py\n    module_name (str): name of the module, i.e. dash.dash\n\nReturns:\n    Module: a docster.models.Module containing structured docstrings\n")),Object(s.b)("h1",{id:"docstermodels"},"docster.models"),Object(s.b)("h2",{id:"docstermodelsnode"},"docster.models.Node"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Documentation for an AST node\n")),Object(s.b)("h2",{id:"docstermodelsfuncdef"},"docster.models.FuncDef"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Documentation for a function or method definition\n")),Object(s.b)("h3",{id:"docstermodelsfuncdefsignature"},"docster.models.FuncDef.signature"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Get the function or method signature as a string\n")),Object(s.b)("h2",{id:"docstermodelsclassdef"},"docster.models.ClassDef"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Representation of docstrings for a class\n")),Object(s.b)("h3",{id:"docstermodelsclassdefmethods"},"docster.models.ClassDef.methods"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Get non-private and non-dunder  methods of a class\n\nReturns:\n    List[FuncDef]: A list of docster.models.FuncDef objects\n")),Object(s.b)("h3",{id:"docstermodelsclassdefconstructor"},"docster.models.ClassDef.constructor"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"The __init__ method of the class, if one is explicitely defined\n")),Object(s.b)("h2",{id:"docstermodelsmodule"},"docster.models.Module"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Representation of docstrings and metadata contained in a module\n")),Object(s.b)("h3",{id:"docstermodelsmoduleclasses"},"docster.models.Module.classes"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"List of public classes in the module\n")),Object(s.b)("h3",{id:"docstermodelsmodulefunctions"},"docster.models.Module.functions"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"List of public functions in the module\n")),Object(s.b)("h2",{id:"docstermodelspackage"},"docster.models.Package"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Representation of docstrings and metadata contained in a Package\n")),Object(s.b)("h3",{id:"docstermodelspackagemodules"},"docster.models.Package.modules"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"List of public modules in the package\n")),Object(s.b)("h3",{id:"docstermodelspackagerender"},"docster.models.Package.render"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Render a template with the package\n")),Object(s.b)("h3",{id:"docstermodelspackagerender_modules"},"docster.models.Package.render_modules"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Render a template for each module\n")),Object(s.b)("h2",{id:"docstermodelsoutputmode"},"docster.models.OutputMode"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"How and where to render and write documentation\nOutputMode.file: render documentation for the entire package in a singe file.\n    The template receives a Package instance\nOutputMode.stdout: same as OutputModel.file, but write to standard output instead\nOutputMode.directory: render documentation in one file per module, where the\n    package structure is preserved\n")),Object(s.b)("h3",{id:"docstermodelsoutputmodeapply"},"docster.models.OutputMode.apply"),Object(s.b)("pre",null,Object(s.b)("code",Object(d.a)({parentName:"pre"},{}),"Render and write documentation according to the output mode\n\nArgs:\n    package (Package): [description]\n    output (Path): [description]\n    template_file (Path): [description]\n")))}l.isMDXComponent=!0}}]);