---
id: templating
title: Templating
sidebar_label: Templating
---

You need to pass a ```--template-file``` to Docster. This file can contain any [Jinja2](https://jinja.palletsprojects.com/en/2.11.x/) template. 

## Output modes

### ```stdout```
Docster will render your template once and pass it a ```docster.models.Package``` under the name ```package```. The result is written to standard output.

### ```file```
Docster will render your template once and pass it a ```docster.models.Package``` under the name ```package```. The result is written to ```--output```. If the file does not exist, it will be created. If it exists, it will be overwritten.

### ```directory```
For each module in your package, Docster will render your template once and pass it the respective ```docster.models.Module``` instance under the name ```module```. The result for each module is written to a file relative to ```--output```, resulting in the same folder structure as your project.
