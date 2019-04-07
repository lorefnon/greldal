(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RaWv:function(e,a,n){"use strict";var t=n("j/s1").a.div.withConfig({displayName:"NotificationBanner",componentId:"sc-1xeyqo5-0"})(["background:#e15506;padding:20px;color:#ffd0b6;border-radius:5px;text-align:left;& + &{margin-top:10px;}"]);a.a=t},b8zT:function(e,a,n){"use strict";n.r(a);var t=n("wk2l"),o=n("ERkP"),r=n.n(o),p=n("yTr/"),i=n("RaWv");a.default=function(e){var a=e.components;Object(t.a)(e,["components"]);return r.a.createElement(p.MDXTag,{name:"wrapper",components:a},r.a.createElement(i.a,null,"⚠️ This document is not an introduction for beginners. If you are new to GRelDAL it is strongly recommended that you first go through the Quick Start section and the guides first."),r.a.createElement(p.MDXTag,{name:"h1",components:a,props:{id:"architecture-overview"}},r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#architecture-overview","aria-hidden":"true"}},r.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Architecture Overview"),r.a.createElement(p.MDXTag,{name:"p",components:a},"This post describes the architecture of GRelDAL at a high level. The primary intended audience are the potential contributors. For lower level specifics, readers are encouraged to read the source."),r.a.createElement(p.MDXTag,{name:"p",components:a},"It is also advisable to go through the terminology section of the API Overview before going through the content below."),r.a.createElement(p.MDXTag,{name:"p",components:a},"There are four primary concepts around which GRelDAL is built:"),r.a.createElement(p.MDXTag,{name:"ol",components:a},r.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Mapped Data Sources"),r.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Mapped Operations"),r.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Operation Resolvers"),r.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Operation Presets")),r.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"mapped-data-sources"}},r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#mapped-data-sources","aria-hidden":"true"}},r.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Mapped data sources"),r.a.createElement(p.MDXTag,{name:"p",components:a},"Mapped data sources represent a source in a relational database (usually a table, or a view, sometimes a joined table) which can serve as our primary source of truth."),r.a.createElement(p.MDXTag,{name:"p",components:a},"It is the responsibility of a ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"MappedDataSource")," instance to talk to the data source it represents. In many cases the actual data structure we expose to the application layer (referred here as Entities) differs from the table schema of the data source and in these cases it is the responsibility of the mapped data source to transparently convert between these representations and shield the application from having to know about the table schema."),r.a.createElement(p.MDXTag,{name:"p",components:a},"Unlike ORMs, GRelDAL recommends usage of plain old javascript objects as entities."),r.a.createElement(p.MDXTag,{name:"p",components:a},"A ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"MappedDataSource")," instance can be constructed by calling the ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"mapDataSource")," function, which accepts a mapping configuration.\nThis mapping configuration determines:"),r.a.createElement(p.MDXTag,{name:"ol",components:a},r.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"How the columns (in the source) are mapped to fields (of the entity)."),r.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"What other data sources this data source can be associated with, and how can these associations be loaded.")),r.a.createElement(p.MDXTag,{name:"p",components:a},'Data sources can "cooperate" (by transforming a shared query builder) when the operation spans over multiple data sources - eg. when performing operations on join tables.'),r.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"mapped-operations"}},r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#mapped-operations","aria-hidden":"true"}},r.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Mapped Operations"),r.a.createElement(p.MDXTag,{name:"p",components:a},"Operations generalize the concepts of Queries and mutations in GraphQL."),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"Operation // Abstract interface for an operation mapSchema can handle (1)\n   ^\n   |\n   |_ MappedOperation // Base class for GRelDAL aware operations\n         ^\n         |\n         |_ MappedSingleSourceOperation    // Base class for operations that operates on a single primary source\n         |     ^\n         |     |_ MappedSingleSourceQueryOperation\n         |     |_ MappedSingleSourceInsertionOperation\n         |     |_ MappedSingleSourceUpdateOperation\n         |     |_ MappedSingleSourceDeletionOperation\n         |\n         |_ MappedMultiSourceOperation    // Base class for operations that operate on multiple sources\n               ^\n               |_ MappedMultiSourceUnionQueryOperation\n")),r.a.createElement(p.MDXTag,{name:"p",components:a},"Operations delegate the actual resolution to an associated operation resolver. All the information that the resolver may need are encapsulated in the ResolverContext DTO which is instantiated by the Operation implementation. "),r.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"operation-resolvers"}},r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#operation-resolvers","aria-hidden":"true"}},r.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Operation Resolvers"),r.a.createElement(p.MDXTag,{name:"p",components:a},"Operation resolvers implement the actual logic for resolving the operations. All the ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"MappedOperation")," implementations defined by GRelDAL are associated with corresponding default resolvers, however they can be overriden through operation mapping configuration."),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"Operation                                                                                                      OperationResolver\n   ^                                                                                                                          ^\n   |                                                                                                                          |\n   |_ MappedOperation                                                                          SourceAwareOperationResolver___|\n         ^                                                                                                         ^\n         |                                                                                                         |\n         |_ MappedSingleSourceOperation                                                                            |\n         |     ^                                                                                                   |\n         |     |_ MappedSingleSourceQueryOperation ------ (defaults to)->     SingleSourceQueryOperationResolver __|\n         |     |_ MappedSingleSourceInsertionOperation -- (defaults to)-> SingleSourceInsertionOperationResolver __|\n         |     |_ MappedSingleSourceUpdateOperation ----- (defaults to)->    SingleSourceUpdateOperationResolver __|\n         |     |_ MappedSingleSourceDeletionOperation --- (defaults to)->  SingleSourceDeletionOperationResolver __|\n         |                                                                                                         |\n         |_ MappedMultiSourceOperation                                                                             |\n               ^                                                                                                   |\n               |_ MappedMultiSourceUnionQueryOperation -- (defaults to)-> MultiSourceUnionQueryOperationResolver __|\n")),r.a.createElement(p.MDXTag,{name:"p",components:a},'Query resolvers can also "delegate" through "side-loading" - this is a better alternative to hierarchical resolution in GraphQL that often results in N+1 query patterns because side-loading supports batch resolution and resolved results are automatically mapped and associated to parent entities.'),r.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"operation-presets"}},r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#operation-presets","aria-hidden":"true"}},r.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Operation Presets"),r.a.createElement(p.MDXTag,{name:"p",components:a},"Operation presets are pre-configured operation for common use cases (CRUD operations)."),r.a.createElement(p.MDXTag,{name:"p",components:a},"Despite being pre-configured presets afford a great deal of flexibility because it accomodates custom transformation of mapping through interceptors."),r.a.createElement(p.MDXTag,{name:"h1",components:a,props:{id:"operation-resolution-process"}},r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#operation-resolution-process","aria-hidden":"true"}},r.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Operation resolution process"),r.a.createElement(p.MDXTag,{name:"p",components:a},"GRelDAL is designed to work with graphql.js - the reference implementation of GraphQL provided by facebook."),r.a.createElement(p.MDXTag,{name:"p",components:a},r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"mapSchema")," function constructs a graphql.js compatible schema from a collection of GRelDAL operations. Every operation has a fieldConfig getter that returns a graphql.js compatible fieldConfig. Application can associate interceptors for the fieldConfig which can transform how an operation is mapped to a query/mutation field."),r.a.createElement(p.MDXTag,{name:"p",components:a},"Most of the GraphQL types are derived from the DataSource mapping configuration."),r.a.createElement(p.MDXTag,{name:"p",components:a},"Resolution of a typical GraphQL Query looks something like this:"),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"              ___\n               |                                         Parsing of GraphQL DSL\n               |                                             |\n               |                                             |\nIn graphql.js -|                                             V\n               |                                         Identify fieldConfig using query/mutation name\n               |                                             |\n               |                                             V\n               |                                         Invoke fieldConfig.resolve\n               |                                             |\n              _|_                  ___                       V\n               |                    |                    Initialize ResolverContext (1)\n               |                    |                        |\n               |                    |                        V\n               |                    |                    Locate OperationResolver implementation\n               |                 In |                        |\n               |    MappedOperation |                        V\n               |                    |                    Initialize OperationResolver with resolverContext\n               |                    |                        |\n               |                    |                        V\n               |                   -+-                   Invoke OperationResolver#resolve\n               |                    |                        |\n               |                    |                        V\n               |                    |                    Invoke dataSource methods to construct SQL query\n           In  |                In  |                        |\n      GRelDAL  | OperationResolver  |_                       V\n               |                    |                    Invoke Knex to construct SQL query\n               |                    |                        |\n               |                    |                        V\n               |                    | In                 Use configured data source connector to run SQL\n               |                    | MappedDataSource       |\n               |                    |                        |\n               |                    |                        V\n               |                    |                    Transform response to format expected in the GraphQL Query\n               |                    |                        |\n               |                    |                        V\n              _|_                  _|_                   Return response\nIn graphql.js  |                                             |\n               |                                             V\n              _|_                                        Recursively visit and validate response\n")))}},xfLP:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/architecture-overview",function(){var e=n("b8zT");return{page:e.default||e}}])}},[["xfLP",1,0]]]);