(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{606:function(e,a,t){__NEXT_REGISTER_PAGE("/type-safety",function(){return e.exports=t(607),{page:e.exports.default}})},607:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(1);t(3);function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}a.default=function(e){var a=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"type-safety"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#type-safety","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Type Safety"),o.a.createElement(r.MDXTag,{name:"p",components:a},"GRelDAL is written in TypeScript and comes with type definitions. However having type definitions and being type safe are two different things."),o.a.createElement(r.MDXTag,{name:"p",components:a},"GRelDAL attempts to balance a compromise between type-safety and ease of use. If enforcement of type-safety causes the APIs to significantly depart from\nidomatic JavaScript or TypeScript conventions we are usually willing to compromise on type-safety."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Having said that, we do make a sincere attempt to ensure that as many bugs are caught at the compile time as opposed to run time and your contributions to make this better are very much appreciated."),o.a.createElement(r.MDXTag,{name:"p",components:a},"In addition, if the error checking has to happen at runtime we try to fail-fast with clear error messages up-front."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"runtime-type-validators"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#runtime-type-validators","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Runtime Type Validators"),o.a.createElement(r.MDXTag,{name:"p",components:a},"In the introduction section, we saw that stores are defined like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { types, mapDataSource } ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"greldal"'),";\n\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," users = mapDataSource({\n    name: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"User"'),",\n    description: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"users"'),",\n    fields: {\n        id: {\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"type"),": types.string,\n            to: GraphQLID,\n        },\n        name: {\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"type"),": types.string,\n        },\n    },\n});")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The type specifications (eg. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"types.string"),") in the mapping above are referred to as runtime types, and they validate the type of arguments at runtime.\nThey are not implemented inside GRelDAL - rather, we use ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/gcanti/io-ts"}},"io-ts"),", an excellent library by ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://mobile.twitter.com/GiulioCanti"}},"Giulio Canti"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"You may wonder that given GraphQL already does validation of types at boundaries, why bother with this at all."),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are two reasons:"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"We can extract out static types from these runtime types. This enables us to write type-safe code, when using TypeScript, without ever having to define any additional types. We can simply derive the types of the entities from the data source mapping itself and if you use incorrect fields or arguments, your code will fail to compile.")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Runtime types are composable and support ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/gcanti/io-ts#refinements"}},"refinements"),", so you can embed generic validation logic in the runtime types and share them across field mappings & argument mappings across multiple stores and operations."))),o.a.createElement(r.MDXTag,{name:"p",components:a},"We not only extract static types from runtime types, we also derive GraphQL types from them - so you have to specify only the runtime types for most cases.\nIn some cases automatic type derivations are not possible and you may need to specify the GraphQL types separately - as is the case with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLID")," in the snippet above.\nThe inferred GraphQL type would have been ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLString")," but because we have specified ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLID")," it would take precedence."))}}},[[606,1,0]]]);