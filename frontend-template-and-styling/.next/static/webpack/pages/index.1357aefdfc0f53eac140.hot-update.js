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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/krisana/Code/tests/maqe/frontend-template-and-styling/pages/index.js\";\n\n\n\nfunction Posts(data) {\n  var _this = this;\n\n  console.log(\"data\", data);\n  console.log(\"data.authors\", data.authors);\n  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"container-sm\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"main-top mb-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"MAQE Forum\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"small\", {\n        children: [\"Your current timezone is: \", timezone]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: data.posts && data.posts.map(function (item, index) {\n        var author = data.authors.filter(function (v) {\n          return v[\"id\"] == item.author_id;\n        })[0];\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"col-12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"box-post \".concat((index + 1) % 2 == 0 ? 'style2' : ''),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"box-post_header\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"box-post_avartar\",\n                style: {\n                  backgroundImage: \"url(\".concat(author.avatar_url, \")\")\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: author.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                children: [\"posted on \", moment__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format('dddd, MMMM D, YYYY, h:mm')]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"box-post_body\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                  className: \"col-sm-4\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    className: \"w-100\",\n                    src: item.image_url,\n                    alt: \"\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 32,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 31,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                  className: \"col-sm-7\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                    children: item.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 35,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: item.body\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 36,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, _this)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Posts;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0JjO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdDRDs7S0E1Q1ExQjs7QUE4Q1QsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZnVuY3Rpb24gUG9zdHMoZGF0YSkge1xuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSlcbiAgY29uc29sZS5sb2coXCJkYXRhLmF1dGhvcnNcIiwgZGF0YS5hdXRob3JzKVxuICBjb25zdCB0aW1lem9uZSA9IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRvcCBtYi0yXCI+XG4gICAgICAgIDxoMj5NQVFFIEZvcnVtPC9oMj5cbiAgICAgICAgPHNtYWxsPllvdXIgY3VycmVudCB0aW1lem9uZSBpczoge3RpbWV6b25lfTwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtkYXRhLnBvc3RzICYmIGRhdGEucG9zdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF1dGhvciA9IGRhdGEuYXV0aG9ycy5maWx0ZXIoKHYpID0+IHZbXCJpZFwiXSA9PSBpdGVtLmF1dGhvcl9pZClbMF1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJveC1wb3N0ICR7KGluZGV4ICsgMSkgJSAyID09IDAgPyAnc3R5bGUyJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXBvc3RfaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1wb3N0X2F2YXJ0YXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2F1dGhvci5hdmF0YXJfdXJsfSlgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2F1dGhvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpPnBvc3RlZCBvbiB7bW9tZW50KGl0ZW0uY3JlYXRlZF9hdCkuZm9ybWF0KCdkZGRkLCBNTU1NIEQsIFlZWVksIGg6bW0nKX08L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtcG9zdF9ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwMFwiIHNyYz17aXRlbS5pbWFnZV91cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZ2V0UG9zdHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9tYXFlLmdpdGh1Yi5pby9qc29uL3Bvc3RzLmpzb25gKVxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzLmpzb24oKVxuICBjb25zdCBnZXRBdXRob3JzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbWFxZS5naXRodWIuaW8vanNvbi9hdXRob3JzLmpzb25gKVxuICBjb25zdCBhdXRob3JzID0gYXdhaXQgZ2V0QXV0aG9ycy5qc29uKClcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBwb3N0cyxcbiAgICBhdXRob3JzXG4gIH1cblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogZGF0YSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn0iXSwibmFtZXMiOlsibW9tZW50IiwiUG9zdHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImF1dGhvcnMiLCJ0aW1lem9uZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInJlc29sdmVkT3B0aW9ucyIsInRpbWVab25lIiwicG9zdHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhdXRob3IiLCJmaWx0ZXIiLCJ2IiwiYXV0aG9yX2lkIiwiYmFja2dyb3VuZEltYWdlIiwiYXZhdGFyX3VybCIsIm5hbWUiLCJjcmVhdGVkX2F0IiwiZm9ybWF0IiwiaW1hZ2VfdXJsIiwidGl0bGUiLCJib2R5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});