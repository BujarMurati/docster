import ast


class DocstringVisitor(ast.NodeVisitor):
    def __init__(self, module_name: str):
        self.stack = [module_name]

    @property
    def qual_name(self):
        return ".".join(self.stack)

    def generic_visit(self, node: ast.AST):
        for child in ast.iter_child_nodes(node):
            self.visit(child)

    def visit_Module(self, module: ast.Module):
        pass

    def visit_ClassDef(self, class_def: ast.ClassDef):
        pass

    def visit_FunctionDef(self, func_def: ast.FunctionDef):
        pass
