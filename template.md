---
id: {{ package.name }}
title: {{ package.name }}
slug: {{ "/" + package.name}}
---

{% for module in package.modules %}
# {{ module.qualified_name }}

{% if module.raw_docstring %}
```
{{module.raw_docstring or ""}}
```
{% endif %}

{% for class_ in module.classes %}
## {{class_.qualified_name}}
```
{{ class_.raw_docstring or "" }}
```
{% for method in class_.methods %}
### {{method.qualified_name}}
```
{{method.raw_docstring or ""}}
```
{% endfor %}
{% endfor %}

{% for function in module.functions %}
## {{function.qualified_name}}
```
{{ function.raw_docstring }}
```
{% endfor %}
{% endfor %}