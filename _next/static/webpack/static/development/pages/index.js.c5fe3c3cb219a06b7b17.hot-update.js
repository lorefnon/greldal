webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../../node_modules/dedent/dist/dedent.js":
/*!****************************************************************************!*\
  !*** C:/Users/loref/Projects/greldal-2/node_modules/dedent/dist/dedent.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dedent(strings) {

  var raw = void 0;
  if (typeof strings === "string") {
    // dedent can be used as a plain function
    raw = [strings];
  } else {
    raw = strings.raw;
  }

  // first, perform interpolation
  var result = "";
  for (var i = 0; i < raw.length; i++) {
    result += raw[i].
    // join lines when there is a suppressed newline
    replace(/\\\n[ \t]*/g, "").

    // handle escaped backticks
    replace(/\\`/g, "`");

    if (i < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
      result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
    }
  }

  // now strip indentation
  var lines = result.split("\n");
  var mindent = null;
  lines.forEach(function (l) {
    var m = l.match(/^(\s+)\S+/);
    if (m) {
      var indent = m[1].length;
      if (!mindent) {
        // this is the first indented line
        mindent = indent;
      } else {
        mindent = Math.min(mindent, indent);
      }
    }
  });

  if (mindent !== null) {
    result = lines.map(function (l) {
      return l[0] === " " ? l.slice(mindent) : l;
    }).join("\n");
  }

  // dedent eats leading and trailing whitespace too
  result = result.trim();

  // handle escaped newlines at the end to ensure they don't get stripped too
  return result.replace(/\\n/g, "\n");
}

if (true) {
  module.exports = dedent;
}


/***/ }),

/***/ "./components/CodeSnippet.js":
/*!***********************************!*\
  !*** ./components/CodeSnippet.js ***!
  \***********************************/
/*! exports provided: CodeSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return CodeSnippet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "../../node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var dedent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dedent */ "../../node_modules/dedent/dist/dedent.js");
/* harmony import */ var dedent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dedent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs/github */ "../../node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/github.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_snippets_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/snippets.json */ "../../api/snippets.json");
var _api_snippets_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../api/snippets.json */ "../../api/snippets.json", 1);
var _jsxFileName = "C:\\Users\\loref\\Projects\\greldal-2\\src\\docs\\components\\CodeSnippet.js";





var CodeSnippet = function CodeSnippet(_ref) {
  var name = _ref.name,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? "javascript" : _ref$language,
      _ref$stripTripleComme = _ref.stripTripleComment,
      stripTripleComment = _ref$stripTripleComme === void 0 ? true : _ref$stripTripleComme,
      _ref$dedent = _ref.dedent,
      dedent = _ref$dedent === void 0 ? true : _ref$dedent;
  assert(_api_snippets_json__WEBPACK_IMPORTED_MODULE_4__[name], "Snippet could not be found ".concat(name));
  var content = _api_snippets_json__WEBPACK_IMPORTED_MODULE_4__[name].content;
  if (stripTripleComment) content = content.replace(/\s\/\/\/\s/g, " ");
  if (dedent) content = dedent(content);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    language: language,
    style: react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, content);
};

/***/ }),

/***/ "./pages/index.md":
/*!************************!*\
  !*** ./pages/index.md ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/tag */ "../../node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _components_LibHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LibHeader */ "./components/LibHeader.js");
/* harmony import */ var _components_CodeSnippet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CodeSnippet */ "./components/CodeSnippet.js");

var _jsxFileName = "C:\\Users\\loref\\Projects\\greldal-2\\src\\docs\\pages\\index.md";





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LibHeader__WEBPACK_IMPORTED_MODULE_4__["LibHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      margin: "2rem 0",
      fontWeight: 100,
      color: "slategray"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "GRelDAL is a micro-framework for exposing your relational datastore as a GraphQL API powered by Node.js"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "The project is hosted on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/gql-dal/greldal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "GitHub"), ", and has a growing ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://travis-ci.org/gql-dal/greldal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "test suite"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "GRelDAL is available for use under the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/gql-dal/greldal/blob/master/LICENSE"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "MIT software license"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "You can report bugs on the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/gql-dal/greldal/issues"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "GitHub issues page"), ". We also have a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://spectrum.chat/greldal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Spectrum community"), " for general discussion."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h1",
    components: components,
    props: {
      "id": "motive--goals"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h1",
    props: {
      "href": "#motive--goals",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), "Motive / Goals"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://graphql.org/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "GraphQL"), " is a powerful solution for making your server side data available to clients through a flexible and bandwidth efficient API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "However, if your primary data source is a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "relational database"), " then mapping GraphQL queries to efficient database queries can be arduous. With naive hierarchical resolution of resolvers it is very easy to end up with inefficient data access patterns and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://stackoverflow.com/questions/97197/what-is-the-n1-select-query-issue"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "N+1 queries"), ". Caching strategies, dataloader etc. partly mitigate the problem but the fact remains that you are not taking the full advantage of the capabilities of your powerful datastore."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "GRelDAL is a simple ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "low level"), " library that gives you a declaritive API to map your relational data sources to GraphQL APIs. It is data store agnostic thanks to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://knexjs.org"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Knex"), ", the underlying data access library that supports all common databases. Currently MySQL, PostgreSQL and SQLite are well tested."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "When you generate your GraphQL API through GRelDAL, you can choose exactly how:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Your database table schema maps to GraphQL types."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Your GraphQL queries are mapped to SQL queries, including:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "ul",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "which tables can be joined under which circumstances"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "when batched queries can be performed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "when related rows can be fetched in advance in bulk, etc.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "GRelDAL puts you on the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "driver's seat"), ", gives you complete control and takes care of a lot of hairy mapping and reverse-mapping logic for you, allowing you to take full advantage of your database engine. It is assumed that you (or your team) has deep understanding of the capabilities your datastore and want to ensure that only efficient queries are allowed and the possibility of a client inadvertantly triggering complex inefficient database operations is minimized."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h1",
    components: components,
    props: {
      "id": "installation"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h1",
    props: {
      "href": "#installation",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), "Installation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-sh",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "// Using npm:\nnpm install --save greldal\n\n// Using yarn:\nyarn add greldal")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h1",
    components: components,
    props: {
      "id": "quick-start"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h1",
    props: {
      "href": "#quick-start",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), "Quick Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    props: {
      "id": "what-you-already-need-to-know-"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h2",
    props: {
      "href": "#what-you-already-need-to-know-",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), "What you already need to know ?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "In order to use GRelDAL you need to have a basic understanding of GraphQL. We don't cover GraphQL features in the docs here, but many great resources are available online, a particularly good example being ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.howtographql.com/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "How to GraphQL"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "You also need to have a good grasp over Javascript. Most examples here use ES6 features. If terms like harmony imports, arrow functions, destructuring sound unfamiliar, you may want to start out by reading ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://exploringjs.com/impatient-js/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Javascript for impatient programmers"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://exploringjs.com/es6/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Exploring ES6"), ", both authored by Dr. Axel Rauschmayer."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://typescriptlang.org"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "TypeScript"), " is not required, but recommended for larger projects. GRelDAL itself is written in TypeScript and comes with type definitions. We take a pragmatic stance towards ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "type-safety",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Type Safety")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    props: {
      "id": "basic-usage"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h2",
    props: {
      "href": "#basic-usage",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), "Basic Usage"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Using GRelDAL involves two steps:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "ol",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Defining data sources mappers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Defining operations on these data sources"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Generating a GraphQL Schema from these operations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Exposing this schema through a HTTP Server")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "defining-a-data-source-mapper"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h3",
    props: {
      "href": "#defining-a-data-source-mapper",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), "Defining a data source mapper"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CodeSnippet__WEBPACK_IMPORTED_MODULE_5__["CodeSnippet"], {
    name: "mapDataSource_user_simple.content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "```ts import ", (types, mapDataSource), " from \"greldal\";", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "const users = mapDataSource({\nname: \"User\",\ndescription: \"users\",\nfields: {\nid: {\ntype: types.string,\nto: GraphQLID,\n},\nname: {\ntype: types.string,\n},\n},\n});"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "metaString": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "This defines a `User` data source having two fields: `id` and `name`. This essentially maps a `users` table (having two columns `id` and `name`) in database to a `GraphQLOutput` type with two fields `id` (`GraphQLID`) and `string` (`GraphQLString`).\n\nNote that the above configuration practically has zero duplication of information. We didn't have to specify the name of table this data source was linked to (it was inferred as plural of 'User'). Also, because our column names and field names are same we didn't have to specify them twice. When we have equivalent types available in typescript and GraphQL (eg. `string` and `GraphQLString`) we don't have to specify the type mapping either. GRelDAL leverages [convention-over-configuration](https://en.wikipedia.org/wiki/Convention_over_configuration) to minimize the development effort.\n\nHowever, when you need, GRelDAL gives you complete control over the mapping. The guide on\n<Link>Mapping Data Sources</Link>\ncovers this in more detail, but just to get a sense of what is happening here, the above config is equivalent to:\n\n```ts\nconst users = mapDataSource({\n    name: {\n        mapped: \"User\",\n        stored: \"users\",\n    },\n    fields: {\n        id: {\n            sourceColumn: \"id\",\n            type: types.string,\n            to: {\n                input: GraphQLID,\n                output: GraphQLID,\n            },\n        },\n        name: {\n            sourceColumn: \"name\",\n            type: types.string,\n            to: {\n                input: GraphQLString,\n                output: GraphQLString,\n            },\n        },\n    },\n});\n")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "defining-operations"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h3",
    props: {
      "href": "#defining-operations",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), "Defining operations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Once we have data sources, we can define operations on these data sources."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-ts",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "import"), " { operationPresets } ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "from"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "\"greldal\""), ";\n\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "const"), " findManyUsers = operationPresets.query.findManyOperation(users);")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "GRelDAL comes with some operation presets. These operation presets make it trivial to perform CRUD operations on data sources with minimal code."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "The above line of code defines a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "findMany"), " operation on the users data source."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "The section on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Mapping Operations"), " covers more ground on defining custom operations and reusing operations."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "generating-graphql-schema"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h3",
    props: {
      "href": "#generating-graphql-schema",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), "Generating GraphQL Schema"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Once we have operations, we can expose them to the GraphQL API by mapping them to a schema:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-ts",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "import"), " { mapSchema } ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "from"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "\"greldal\""), ";\n\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "const"), " generatedSchema = mapSchema([findManyUsers]);")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "The ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "generatedSchema"), " here is a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://graphql.org/graphql-js/type/#graphqlschema"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "GraphQLSchema"), " instance which ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://graphql.org/graphql-js"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "graphql-js"), " can use for resoluton of operations."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "In this case, the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "findMany"), " operation on users table can be invoked like this:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-ts",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "import"), " { graphql } ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "from"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\"graphql\""), ";\n\ngraphql(\n    generatedSchema,\n    ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "`findManyUsers(where: {name: \"John\"}) {\n        id,\n        name\n    }\n    `"), ",\n);")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "exposing-graphql-api"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h3",
    props: {
      "href": "#exposing-graphql-api",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), "Exposing GraphQL API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "While the ability to query the generated schema directly is useful in itself, most likely you are building a web application and you would like to expose this GraphQL schema through an API over HTTP."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "There are popular libraries already available for this, and this step is the same as what you would do when building any GraphQL API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "For example, if we are using ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://expressjs.com/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "express"), " as our web framework, we can use the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/graphql/express-graphql"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "express-graphql"), " package to expose our GraphQL API."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-ts",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "import"), " express ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "from"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "\"express\""), ";\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "import"), " graphqlHTTP ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "from"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\"express-graphql\""), ";\n\n", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-keyword"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "const"), " app = express();\n\napp.use(\n    ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "\"/graphql\""), ",\n    graphqlHTTP({\n        schema: generatedSchema,\n        graphiql: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-literal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "true"), "\n    }),\n);\n\napp.listen(", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-number"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "4000"), ");")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Now if we visit ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://localhost:4000"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "localhost:4000")), " in a browser, we will see a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/graphql/graphiql"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "graphiql"), " interface which we can use to query our data source. We can also use any client side library like ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/apollographql/react-apollo"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "react-apollo"), " to interact with this API. No GRelDAL specific code is required on the client side."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    props: {
      "id": "where-to-go-next-"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "h3",
    props: {
      "href": "#where-to-go-next-",
      "aria-hidden": "true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "a",
    props: {
      "className": "icon icon-link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), "Where to go next ?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "GRelDAL ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "guides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "guides"), " cover most important features and going through the guides will enable you hit the ground running building real world applications in no time."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "You can also checkout the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "api",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "API Documentation (WIP)"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/gql-dal/greldal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Source Code"), "."));
});

/***/ })

})
//# sourceMappingURL=index.js.c5fe3c3cb219a06b7b17.hot-update.js.map