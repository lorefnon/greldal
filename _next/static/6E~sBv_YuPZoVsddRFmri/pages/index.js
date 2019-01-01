(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{34:function(e,a){e.exports="/greldal/_next/static/images/81342499647d5509de6dd828ff74969e.png"},594:function(e,a,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(620),{page:e.exports.default}})},620:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(1),s=n(4),p=n(34),m=n.n(p),c=n(3),l=function(){return o.a.createElement(u,null,o.a.createElement(i,{src:m.a})," ",o.a.createElement(g,null,o.a.createElement(h,null,"GRelDAL")," ",o.a.createElement(d,null,"(",o.a.createElement("strong",null,"G"),"raphQL ⇋ ",o.a.createElement("strong",null,"Rel"),"ational DB) ",o.a.createElement("strong",null,"D"),"ata ",o.a.createElement("strong",null,"A"),"ccess"," ",o.a.createElement("strong",null,"L"),"ayer")))},i=c.a.img.withConfig({displayName:"LibHeader__Img",componentId:"e4nzz9-0"})(["height:100px;width:100px;"]),g=c.a.div.withConfig({displayName:"LibHeader__HeaderText",componentId:"e4nzz9-1"})(["padding-top:20px;padding-left:10px;"]),h=c.a.h1.withConfig({displayName:"LibHeader__PrimaryHeader",componentId:"e4nzz9-2"})(["line-height:25px;margin:0;color:#e535ab;font-size:2.5rem;margin-left:5px;"]),d=c.a.h2.withConfig({displayName:"LibHeader__SecondaryHeader",componentId:"e4nzz9-3"})(["color:#ddd;font-size:1.8rem;text-overflow:initial;white-space:nowrap;strong{color:#acacac;}"]),u=c.a.div.withConfig({displayName:"LibHeader__Container",componentId:"e4nzz9-4"})(["display:flex;flex-direction:row;border-bottom:1px solid #ddd;padding-bottom:2rem;max-width:1000px;"]);function D(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}a.default=function(e){var a=e.components;D(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(l,null),o.a.createElement("div",{style:{fontSize:"1.5rem",lineHeight:"2.5rem",margin:"2rem 0",fontWeight:100,color:"slategray"}},"GRelDAL is a micro-framework to expose your relational datastore as a GraphQL API powered by Node.js"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The project is hosted on ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/gql-dal/greldal"}},"GitHub"),", and has a growing ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://travis-ci.org/gql-dal/greldal"}},"test suite"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"GRelDAL is available for use under the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/gql-dal/greldal/blob/master/LICENSE"}},"MIT software license"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can report bugs on the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/gql-dal/greldal/issues"}},"GitHub issues page"),". We also have a ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://spectrum.chat/greldal"}},"Spectrum community")," for general discussion."),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"motive--goals"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#motive--goals","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Motive / Goals"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://graphql.org/"}},"GraphQL")," is a powerful solution for making your server side data available to clients through a flexible and bandwidth efficient API."),o.a.createElement(r.MDXTag,{name:"p",components:a},"However, if your primary data source is a ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"relational database")," then mapping GraphQL queries to efficient database queries can be arduous. With naive hierarchical resolution of resolvers it is very easy to end up with inefficient data access patterns and ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://stackoverflow.com/questions/97197/what-is-the-n1-select-query-issue"}},"N+1 queries"),". Caching strategies, dataloader etc. partly mitigate the problem but the fact remains that you are not taking the full advantage of the capabilities of your powerful datastore."),o.a.createElement(r.MDXTag,{name:"p",components:a},"GRelDAL is a simple ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"low level")," library that gives you a declaritive API to map your relational data sources to GraphQL APIs. It is data store agnostic thanks to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://knexjs.org"}},"Knex"),", the underlying data access library that supports all common databases. Currently MySQL, PostgreSQL and SQLite are well tested."),o.a.createElement(r.MDXTag,{name:"p",components:a},"When you generate your GraphQL API through GRelDAL, you can choose exactly how:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Your database table schema maps to GraphQL types."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Your GraphQL queries are mapped to SQL queries, including:"),o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"which tables can be joined under which circumstances"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"when batched queries can be performed"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"when related rows can be fetched in advance in bulk, etc.")))),o.a.createElement(r.MDXTag,{name:"p",components:a},"GRelDAL puts you on the ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"driver's seat"),", gives you complete control and takes care of a lot of hairy mapping and reverse-mapping logic for you, allowing you to take full advantage of your database engine. It is assumed that you (or your team) has deep understanding of the capabilities your datastore and want to ensure that only efficient queries are allowed and the possibility of a client inadvertantly triggering complex inefficient database operations is minimized."),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"installation"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#installation","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Installation"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"// Using npm:\nnpm install --save greldal\n\n// Using yarn:\nyarn add greldal")),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"quick-start"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#quick-start","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Quick Start"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"what-you-already-need-to-know-"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#what-you-already-need-to-know-","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"What you already need to know ?"),o.a.createElement(r.MDXTag,{name:"p",components:a},"In order to use GRelDAL you need to have a basic understanding of GraphQL. We don't cover GraphQL features in the docs here, but many great resources are available online, a particularly good example being ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.howtographql.com/"}},"How to GraphQL"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"You also need to have a good grasp over Javascript. Most examples here use ES6 features. If terms like harmony imports, arrow functions, destructuring sound unfamiliar, you may want to start out by reading ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://exploringjs.com/impatient-js/"}},"Javascript for impatient programmers")," and ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://exploringjs.com/es6/"}},"Exploring ES6"),", both authored by Dr. Axel Rauschmayer."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://typescriptlang.org"}},"TypeScript")," is not required, but recommended for larger projects. GRelDAL itself is written in TypeScript and comes with type definitions. We take a pragmatic stance towards ",o.a.createElement(s.a,{href:"type-safety"},"Type Safety")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"basic-usage"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#basic-usage","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Basic Usage"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Using GRelDAL involves two steps:"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Defining data sources mappers"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Defining operations on these data sources"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Generating a GraphQL Schema from these operations"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Exposing this schema through a HTTP Server")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"defining-a-data-source-mapper"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#defining-a-data-source-mapper","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Defining a data source mapper"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { types, mapDataSource } ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"greldal"'),";\n\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," users = mapDataSource({\n    name: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"User"'),",\n    description: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"users"'),",\n    fields: {\n        id: {\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"type"),": types.string,\n            to: GraphQLID,\n        },\n        name: {\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"type"),": types.string,\n        },\n    },\n});")),o.a.createElement(r.MDXTag,{name:"p",components:a},"This defines a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"User")," data source having two fields: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"id")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"name"),". This essentially maps a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"users")," table (having two columns ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"id")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"name"),") in database to a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLOutput")," type with two fields ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"id")," (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLID"),") and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"string")," (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLString"),")."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note that the above configuration practically has zero duplication of information. We didn't have to specify the name of table this data source was linked to (it was inferred as plural of 'User'). Also, because our column names and field names are same we didn't have to specify them twice. When we have equivalent types available in typescript and GraphQL (eg. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"string")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQLString"),") we don't have to specify the type mapping either. GRelDAL leverages ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Convention_over_configuration"}},"convention-over-configuration")," to minimize the development effort."),o.a.createElement(r.MDXTag,{name:"p",components:a},"However, when you need, GRelDAL gives you complete control over the mapping. The guide on"),o.a.createElement(s.a,null,"Mapping Data Sources"),"covers this in more detail, but just to get a sense of what is happening here, the above config is equivalent to:",o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," users = mapDataSource({\n    name: {\n        mapped: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"User"'),",\n        stored: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"users"'),",\n    },\n    fields: {\n        id: {\n            sourceColumn: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"id"'),",\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"type"),": types.string,\n            to: {\n                input: GraphQLID,\n                output: GraphQLID,\n            },\n        },\n        name: {\n            sourceColumn: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"name"'),",\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"type"),": types.string,\n            to: {\n                input: GraphQLString,\n                output: GraphQLString,\n            },\n        },\n    },\n});")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"defining-operations"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#defining-operations","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Defining operations"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once we have data sources, we can define operations on these data sources."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { operationPresets } ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"greldal"'),";\n\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," findManyUsers = operationPresets.query.findManyOperation(users);")),o.a.createElement(r.MDXTag,{name:"p",components:a},"GRelDAL comes with some operation presets. These operation presets make it trivial to perform CRUD operations on data sources with minimal code."),o.a.createElement(r.MDXTag,{name:"p",components:a},"The above line of code defines a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"findMany")," operation on the users data source."),o.a.createElement(r.MDXTag,{name:"p",components:a},"The section on ",o.a.createElement(s.a,null,"Mapping Operations")," covers more ground on defining custom operations and reusing operations."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"generating-graphql-schema"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#generating-graphql-schema","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Generating GraphQL Schema"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once we have operations, we can expose them to the GraphQL API by mapping them to a schema:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { mapSchema } ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"greldal"'),";\n\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," generatedSchema = mapSchema([findManyUsers]);")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"generatedSchema")," here is a ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://graphql.org/graphql-js/type/#graphqlschema"}},"GraphQLSchema")," instance which ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://graphql.org/graphql-js"}},"graphql-js")," can use for resoluton of operations."),o.a.createElement(r.MDXTag,{name:"p",components:a},"In this case, the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"findMany")," operation on users table can be invoked like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { graphql } ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"graphql"'),";\n\ngraphql(\n    generatedSchema,\n    ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'`findManyUsers(where: {name: "John"}) {\n        id,\n        name\n    }\n    `'),",\n);")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"exposing-graphql-api"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#exposing-graphql-api","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Exposing GraphQL API"),o.a.createElement(r.MDXTag,{name:"p",components:a},"While the ability to query the generated schema directly is useful in itself, most likely you are building a web application and you would like to expose this GraphQL schema through an API over HTTP."),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are popular libraries already available for this, and this step is the same as what you would do when building any GraphQL API."),o.a.createElement(r.MDXTag,{name:"p",components:a},"For example, if we are using ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://expressjs.com/"}},"express")," as our web framework, we can use the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/graphql/express-graphql"}},"express-graphql")," package to expose our GraphQL API."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-ts",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," express ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"express"'),";\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," graphqlHTTP ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"express-graphql"'),";\n\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," app = express();\n\napp.use(\n    ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"/graphql"'),",\n    graphqlHTTP({\n        schema: generatedSchema,\n        graphiql: ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"true"),"\n    }),\n);\n\napp.listen(",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"4000"),");")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Now if we visit ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:4000"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"localhost:4000"))," in a browser, we will see a ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/graphql/graphiql"}},"graphiql")," interface which we can use to query our data source. We can also use any client side library like ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/apollographql/react-apollo"}},"react-apollo")," to interact with this API. No GRelDAL specific code is required on the client side."),o.a.createElement(s.b,null,"Mapping Operations"))}}},[[594,1,0]]]);