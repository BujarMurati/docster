(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),o=(n(0),n(75)),r={id:"templating",title:"Templating",sidebar_label:"Templating"},c={unversionedId:"templating",id:"templating",isDocsHomePage:!1,title:"Templating",description:"You need to pass a `--template-file` to Docster. This file can contain any Jinja2 template.",source:"@site/docs/templating.md",slug:"/templating",permalink:"/docster/templating",version:"current",sidebar_label:"Templating",sidebar:"docs",previous:{title:"Docster",permalink:"/docster/"},next:{title:"docster",permalink:"/docster/docster"}},d=[{value:"Output modes",id:"output-modes",children:[{value:"<code>stdout</code>",id:"stdout",children:[]},{value:"<code>file</code>",id:"file",children:[]},{value:"<code>directory</code>",id:"directory",children:[]}]}],l={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You need to pass a ",Object(o.b)("inlineCode",{parentName:"p"},"--template-file")," to Docster. This file can contain any ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://jinja.palletsprojects.com/en/2.11.x/"}),"Jinja2")," template. "),Object(o.b)("h2",{id:"output-modes"},"Output modes"),Object(o.b)("h3",{id:"stdout"},Object(o.b)("inlineCode",{parentName:"h3"},"stdout")),Object(o.b)("p",null,"Docster will render your template once and pass it a ",Object(o.b)("inlineCode",{parentName:"p"},"docster.models.Package")," under the name ",Object(o.b)("inlineCode",{parentName:"p"},"package"),". The result is written to standard output."),Object(o.b)("h3",{id:"file"},Object(o.b)("inlineCode",{parentName:"h3"},"file")),Object(o.b)("p",null,"Docster will render your template once and pass it a ",Object(o.b)("inlineCode",{parentName:"p"},"docster.models.Package")," under the name ",Object(o.b)("inlineCode",{parentName:"p"},"package"),". The result is written to ",Object(o.b)("inlineCode",{parentName:"p"},"--output"),". If the file does not exist, it will be created. If it exists, it will be overwritten."),Object(o.b)("h3",{id:"directory"},Object(o.b)("inlineCode",{parentName:"h3"},"directory")),Object(o.b)("p",null,"For each module in your package, Docster will render your template once and pass it the respective ",Object(o.b)("inlineCode",{parentName:"p"},"docster.models.Module")," instance under the name ",Object(o.b)("inlineCode",{parentName:"p"},"module"),". The result for each module is written to a file relative to ",Object(o.b)("inlineCode",{parentName:"p"},"--output"),", resulting in the same folder structure as your project."))}p.isMDXComponent=!0}}]);