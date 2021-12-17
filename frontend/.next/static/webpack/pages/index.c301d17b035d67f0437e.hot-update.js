"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApollo\": function() { return /* binding */ withApollo; }\n/* harmony export */ });\n/* harmony import */ var _workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _excluded = [\"apolloClient\", \"apolloState\"];\nvar _jsxFileName = \"/workspace/v34-bears-team-09/frontend/lib/apollo.js\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction withApollo(PageComponent) {\n  var _this = this;\n\n  var WithApollo = function WithApollo(_ref) {\n    var apolloClient = _ref.apolloClient,\n        apolloState = _ref.apolloState,\n        pageProps = (0,_workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, _excluded);\n\n    var client = apolloClient || initApolloClient(apolloState);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {\n      client: client,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageComponent, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this);\n  };\n\n  WithApollo.getInitialProps = /*#__PURE__*/function () {\n    var _ref2 = (0,_workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(ctx) {\n      var AppTree, apolloClient, pageProps, _yield$import, getDataFromTree, apolloState;\n\n      return _workspace_v34_bears_team_09_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              AppTree = ctx.AppTree;\n              apolloClient = ctx.apolloClient = initApolloClient();\n              pageProps = {};\n\n              if (!PageComponent.getInitialProps) {\n                _context.next = 7;\n                break;\n              }\n\n              _context.next = 6;\n              return PageComponent.getInitialProps(ctx);\n\n            case 6:\n              pageProps = _context.sent;\n\n            case 7:\n              if (true) {\n                _context.next = 22;\n                break;\n              }\n\n              if (!(ctx.res && ctx.res.finished)) {\n                _context.next = 10;\n                break;\n              }\n\n              return _context.abrupt(\"return\", pageProps);\n\n            case 10:\n              _context.prev = 10;\n              _context.next = 13;\n              return __webpack_require__.e(/*! import() */ \"node_modules_apollo_client_react_ssr_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! @apollo/client/react/ssr */ \"./node_modules/@apollo/client/react/ssr/index.js\"));\n\n            case 13:\n              _yield$import = _context.sent;\n              getDataFromTree = _yield$import.getDataFromTree;\n              _context.next = 17;\n              return getDataFromTree( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(AppTree, {\n                pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {\n                  apolloClient: apolloClient\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 11\n              }, _this));\n\n            case 17:\n              _context.next = 22;\n              break;\n\n            case 19:\n              _context.prev = 19;\n              _context.t0 = _context[\"catch\"](10);\n              console.error(_context.t0);\n\n            case 22:\n              apolloState = apolloClient.cache.extract();\n              return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, pageProps), {}, {\n                apolloState: apolloState\n              }));\n\n            case 24:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[10, 19]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return WithApollo;\n}\n\nvar initApolloClient = function initApolloClient() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var ssrMode = false;\n  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache().restore(initialState);\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({\n    ssrMode: ssrMode,\n    uri: \"https://3000-moccasin-salmon-p0eyuuot.ws-eu18.gitpod.io/api/graphql\",\n    cache: cache\n  });\n  return client;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPLFNBQVNHLFVBQVQsQ0FBb0JDLGFBQXBCLEVBQW1DO0FBQUE7O0FBQ3hDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWlEO0FBQUEsUUFBOUNDLFlBQThDLFFBQTlDQSxZQUE4QztBQUFBLFFBQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxRQUFoQkMsU0FBZ0I7O0FBQ2xFLFFBQU1DLE1BQU0sR0FBR0gsWUFBWSxJQUFJSSxnQkFBZ0IsQ0FBQ0gsV0FBRCxDQUEvQztBQUNBLHdCQUNFLDhEQUFDLDBEQUFEO0FBQWdCLFlBQU0sRUFBRUUsTUFBeEI7QUFBQSw2QkFDRSw4REFBQyxhQUFELG9CQUFtQkQsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBUEQ7O0FBU0FILEVBQUFBLFVBQVUsQ0FBQ00sZUFBWDtBQUFBLDhSQUE2QixpQkFBT0MsR0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxjQUFBQSxPQURtQixHQUNQRCxHQURPLENBQ25CQyxPQURtQjtBQUVyQlAsY0FBQUEsWUFGcUIsR0FFTE0sR0FBRyxDQUFDTixZQUFKLEdBQW1CSSxnQkFBZ0IsRUFGOUI7QUFJdkJGLGNBQUFBLFNBSnVCLEdBSVgsRUFKVzs7QUFBQSxtQkFLdkJKLGFBQWEsQ0FBQ08sZUFMUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQU1QUCxhQUFhLENBQUNPLGVBQWQsQ0FBOEJDLEdBQTlCLENBTk87O0FBQUE7QUFNekJKLGNBQUFBLFNBTnlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBVXJCSSxHQUFHLENBQUNFLEdBQUosSUFBV0YsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFFBVkU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBV2hCUCxTQVhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFlVyw4TkFmWDs7QUFBQTtBQUFBO0FBZWZRLGNBQUFBLGVBZmUsaUJBZWZBLGVBZmU7QUFBQTtBQUFBLHFCQWdCakJBLGVBQWUsZUFDbkIsOERBQUMsT0FBRDtBQUNFLHlCQUFTLGtDQUNKUixTQURJO0FBRVBGLGtCQUFBQSxZQUFZLEVBQVpBO0FBRk87QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURtQixDQWhCRTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBeUJ2QlcsY0FBQUEsT0FBTyxDQUFDQyxLQUFSOztBQXpCdUI7QUE2QnJCWCxjQUFBQSxXQTdCcUIsR0E2QlBELFlBQVksQ0FBQ2EsS0FBYixDQUFtQkMsT0FBbkIsRUE3Qk87QUFBQSwrRUFnQ3RCWixTQWhDc0I7QUFpQ3pCRCxnQkFBQUEsV0FBVyxFQUFYQTtBQWpDeUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0NBLFNBQU9GLFVBQVA7QUFDRDs7QUFFRCxJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQXVCO0FBQUEsTUFBdEJXLFlBQXNCLHVFQUFQLEVBQU87QUFDOUMsTUFBTUMsT0FBTyxRQUFiO0FBQ0EsTUFBTUgsS0FBSyxHQUFHLElBQUlqQix5REFBSixHQUFvQnFCLE9BQXBCLENBQTRCRixZQUE1QixDQUFkO0FBQ0EsTUFBTVosTUFBTSxHQUFHLElBQUlULHdEQUFKLENBQWlCO0FBQzlCc0IsSUFBQUEsT0FBTyxFQUFQQSxPQUQ4QjtBQUU5QkUsSUFBQUEsR0FBRyxFQUFFLHFFQUZ5QjtBQUc5QkwsSUFBQUEsS0FBSyxFQUFMQTtBQUg4QixHQUFqQixDQUFmO0FBS0EsU0FBT1YsTUFBUDtBQUNELENBVEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Fwb2xsby5qcz8wN2ZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvUHJvdmlkZXIsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcG9sbG8oUGFnZUNvbXBvbmVudCkge1xuICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhcG9sbG9DbGllbnQgfHwgaW5pdEFwb2xsb0NsaWVudChhcG9sbG9TdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgIDxQYWdlQ29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICk7XG4gIH07XG5cbiAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBBcHBUcmVlIH0gPSBjdHg7XG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gKGN0eC5hcG9sbG9DbGllbnQgPSBpbml0QXBvbGxvQ2xpZW50KCkpO1xuXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICAgIGlmIChQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKGN0eC5yZXMgJiYgY3R4LnJlcy5maW5pc2hlZCkge1xuICAgICAgICByZXR1cm4gcGFnZVByb3BzO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGdldERhdGFGcm9tVHJlZSB9ID0gYXdhaXQgaW1wb3J0KFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIpO1xuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoXG4gICAgICAgICAgPEFwcFRyZWVcbiAgICAgICAgICAgIHBhZ2VQcm9wcz17e1xuICAgICAgICAgICAgICAuLi5wYWdlUHJvcHMsXG4gICAgICAgICAgICAgIGFwb2xsb0NsaWVudCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGFnZVByb3BzLFxuICAgICAgYXBvbGxvU3RhdGUsXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIFdpdGhBcG9sbG87XG59XG5cbmNvbnN0IGluaXRBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgY29uc3Qgc3NyTW9kZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGUsXG4gICAgdXJpOiBcImh0dHBzOi8vMzAwMC1tb2NjYXNpbi1zYWxtb24tcDBleXV1b3Qud3MtZXUxOC5naXRwb2QuaW8vYXBpL2dyYXBocWxcIixcbiAgICBjYWNoZSxcbiAgfSk7XG4gIHJldHVybiBjbGllbnQ7XG59O1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJQYWdlQ29tcG9uZW50IiwiV2l0aEFwb2xsbyIsImFwb2xsb0NsaWVudCIsImFwb2xsb1N0YXRlIiwicGFnZVByb3BzIiwiY2xpZW50IiwiaW5pdEFwb2xsb0NsaWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIkFwcFRyZWUiLCJyZXMiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsImNvbnNvbGUiLCJlcnJvciIsImNhY2hlIiwiZXh0cmFjdCIsImluaXRpYWxTdGF0ZSIsInNzck1vZGUiLCJyZXN0b3JlIiwidXJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/apollo.js\n");

/***/ })

});