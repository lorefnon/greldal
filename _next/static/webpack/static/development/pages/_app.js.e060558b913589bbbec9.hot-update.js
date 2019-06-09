webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/PageLayout.js":
/*!**********************************!*\
  !*** ./components/PageLayout.js ***!
  \**********************************/
/*! exports provided: PageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayout", function() { return PageLayout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-media */ "../../node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/page.css */ "./styles/page.css");
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_page_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! normalize.css/normalize.css */ "../../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highlight.js/styles/github.css */ "../../node_modules/highlight.js/styles/github.css");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/host/Users/loref/Projects/greldal/src/docs/components/PageLayout.js";







var PageLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PageLayout, _React$Component);

  function PageLayout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      show: false,
      showDrawer: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "containerRef", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleDrawer", function () {
      _this.setState({
        showDrawer: !_this.state.showDrawer
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        show: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.children !== prevProps.children) {
        var current = this.containerRef.current;
        if (!current) return;
        current.scrollTop = 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.show) return this.renderWideLayout();
      var _this$props = this.props,
          sidebar = _this$props.sidebar,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_9__["default"], {
        query: "(max-width: 1000px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, function (matches) {
        if (matches) {
          return _this2.renderCompactLayout();
        } else {
          return _this2.renderWideLayout();
        }
      });
    }
  }, {
    key: "renderCompactLayout",
    value: function renderCompactLayout() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          sidebar = _this$props2.sidebar;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CompactLayoutContainer, {
        ref: this.containerRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppHeader.Action, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppHeader.Action.Control, {
        onClick: this.toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u2630")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppHeader.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "GRelDAL")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileContentContainer, {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.showDrawer ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarContainer"], {
        onClick: this.toggleDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_10__["Sidebar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, sidebar)) : children));
    }
  }, {
    key: "renderWideLayout",
    value: function renderWideLayout() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          sidebar = _this$props3.sidebar;
      var show = this.state.show;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: show ? "block" : "none"
        },
        ref: this.containerRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_10__["FixedSidebarContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_10__["Sidebar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, sidebar)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DesktopContentContainer, {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, children));
    }
  }]);

  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
var CompactLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "PageLayout__CompactLayoutContainer",
  componentId: "ct4rbe-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;"]);
var AppHeader = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "PageLayout__AppHeader",
  componentId: "ct4rbe-1"
})(["background:#53942b;line-height:1rem;border-bottom:2px solid #8a8a8a;display:flex;flex-direction:row;position:sticky;top:0;"]);
AppHeader.Action = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "PageLayout__Action",
  componentId: "ct4rbe-2"
})(["flex-grow:0;flex-shrink:0;flex-basis:3rem;padding:0.4rem;"]);
AppHeader.Action.Control = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "PageLayout__Control",
  componentId: "ct4rbe-3"
})(["padding:0.6rem;line-height:1rem;display:block;border:1px solid #5d8c3e;box-shadow:none;background:#94d668;font-size:1.6rem;color:#60ac32;font-weight:bold;"]);
AppHeader.Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "PageLayout__Title",
  componentId: "ct4rbe-4"
})(["flex-grow:1;flex-shrink:1;text-align:center;font-size:1.6rem;line-height:3rem;color:#bfe896;font-weight:bold;line-height:50px;"]);
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "PageLayout__ContentContainer",
  componentId: "ct4rbe-5"
})(["pre:not(.CodeMirror-line){padding:0 !important;}h1{margin:2.8rem 0;}h2,h3,h4,h5,h6{margin:1.8rem 0;}p,ol,ul{margin:1.8rem 0;}pre:not(.CodeMirror-line) > code{border-left:4px solid #ddd;display:block;margin:0;padding:5px;}pre:not(.CodeMirror-line){max-width:calc(100% - 40px);overflow-x:auto;border:1px solid #ddd;background:#f8f8f8;}a,a:visited,a:hover,a:active{color:#0261cd;font-weight:bold;text-decoration:none;}"]);
var DesktopContentContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(ContentContainer).withConfig({
  displayName: "PageLayout__DesktopContentContainer",
  componentId: "ct4rbe-6"
})(["max-width:700px;margin:40px 100px 50px 400px;"]);
var MobileContentContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(ContentContainer).withConfig({
  displayName: "PageLayout__MobileContentContainer",
  componentId: "ct4rbe-7"
})(["width:calc(100% - 40px);padding:20px;overflow-x:hidden;"]);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: Sidebar, SidebarContainer, FixedSidebarContainer, SectionHeader, Bolt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainer", function() { return SidebarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSidebarContainer", function() { return FixedSidebarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeader", function() { return SectionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bolt", function() { return Bolt; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _components_LibInfoBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LibInfoBanner */ "./components/LibInfoBanner.js");
/* harmony import */ var _components_DynamicTableOfContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DynamicTableOfContents */ "./components/DynamicTableOfContents.js");

var _jsxFileName = "/host/Users/loref/Projects/greldal/src/docs/components/Sidebar.js";





var Sidebar = function Sidebar(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LibInfoBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "api",
    highlighted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["TrailingIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u2BC8"), "API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "#quick-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), "Quick Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "playground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), "Playground (New)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "faqs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "Frequently Asked Questions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "guides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Guides")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "mapping-data-sources",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "Mapping Data Sources"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "mapping-operations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), "Mapping Operations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "mapping-associations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "Mapping Associations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "subscriptions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "Subscriptions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "best-practices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "Best Practices"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Additional Topics"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "type-safety",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), "Type Safety"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "comparision-with-alternatives",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "Comparision With Alternatives"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "architecture-overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bolt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), "Architecture Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DynamicTableOfContents__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), children);
};
var SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-1bydltt-0"
})(["background:#fff;padding:10px 30px 30px 30px;a,a:visited{display:block;color:#000;font-weight:700;margin-top:5px;text-decoration:none;}h1,h2,h3,h4,h5,h6{font-size:0.75rem !important;font-weight:600;}"]);
var FixedSidebarContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(SidebarContainer).withConfig({
  displayName: "Sidebar__FixedSidebarContainer",
  componentId: "sc-1bydltt-1"
})(["position:fixed;top:0;left:0;bottom:0;width:300px;overflow-y:auto;overflow-x:auto;border-right:1px solid #bbb;box-shadow:0 0 20px #ccc;border-top:4px solid #8dd35f;"]);
var SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Sidebar__SectionHeader",
  componentId: "sc-1bydltt-2"
})(["background:#dee9d8;padding:5px 10px;text-transform:uppercase;border-radius:4px;color:gray;font-size:0.75rem;margin:1.6rem 0;"]);
var Bolt = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "\u26A1");
}).withConfig({
  displayName: "Sidebar__Bolt",
  componentId: "sc-1bydltt-3"
})(["margin-right:5px;"]);

/***/ })

})
//# sourceMappingURL=_app.js.e060558b913589bbbec9.hot-update.js.map