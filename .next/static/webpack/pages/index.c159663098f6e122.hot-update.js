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

/***/ "./pages/Main.jsx":
/*!************************!*\
  !*** ./pages/Main.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Preview */ \"./pages/Preview.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/Aeroneeee/file-upload-nextjs/pages/Main.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\nfunction Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_6__.useDropzone)({\n    accept: {\n      'image/*': [],\n      type: 'file'\n    },\n    onDrop: function () {\n      var _onDrop = (0,_home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(acceptedFiles) {\n        return _home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setFile(Object.assign(acceptedFiles, {\n                  preview: URL.createObjectURL(acceptedFiles)\n                }));\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onDrop(_x) {\n        return _onDrop.apply(this, arguments);\n      }\n\n      return onDrop;\n    }()\n  }),\n      getRootProps = _useDropzone.getRootProps,\n      getInputProps = _useDropzone.getInputProps;\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = (0,_home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var formData, response, result;\n      return _home_Aeroneeee_file_upload_nextjs_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              // Append all files to FormData\n              formData = new FormData();\n              formData.append('file', file); // Upload to firestore\n\n              _context2.prev = 2;\n              _context2.next = 5;\n              return fetch('/api/file-upload', {\n                method: 'POST',\n                body: formData\n              });\n\n            case 5:\n              response = _context2.sent;\n\n              if (response.ok) {\n                _context2.next = 8;\n                break;\n              }\n\n              throw new Error('File upload failed');\n\n            case 8:\n              _context2.next = 10;\n              return response.json();\n\n            case 10:\n              result = _context2.sent;\n              console.log(result.message); // Handle success\n\n              _context2.next = 17;\n              break;\n\n            case 14:\n              _context2.prev = 14;\n              _context2.t0 = _context2[\"catch\"](2);\n              console.error('Upload error:', _context2.t0);\n\n            case 17:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[2, 14]]);\n    }));\n\n    return function submit() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount\n    return function () {\n      return files.forEach(function (file) {\n        return URL.revokeObjectURL(file.preview);\n      });\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n      children: \"Hello!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n      className: \"mt-2\",\n      children: \"Upload your files here\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container mt-5 mb-3\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", _objectSpread(_objectSpread({}, getRootProps({\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropzone)\n      })), {}, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", _objectSpread({}, getInputProps()), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: \"Drag 'n' drop some files here, or click to select files\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"aside\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().thumbContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Preview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          files: files\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n      type: \"button\",\n      className: \"btn btn-secondary\",\n      onClick: submit,\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Main, \"mo28R8Wex5cKNlUKbab9m8LJCvI=\", false, function () {\n  return [react_dropzone__WEBPACK_IMPORTED_MODULE_6__.useDropzone];\n});\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBRWYsK0VBQWxCO1FBQUEsdUJBQ0UsOERBQUMsZ0RBQUQ7VUFBUyxLQUFLLEVBQUVnQztRQUFoQjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVRGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpGLGVBa0JFO01BQVEsSUFBSSxFQUFDLFFBQWI7TUFBc0IsU0FBUyxFQUFDLG1CQUFoQztNQUFvRCxPQUFPLEVBQUVoQixNQUE3RDtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWxCRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXdCRDs7R0FwRVFkO1VBRWlDSDs7O0tBRmpDRztBQXNFVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluLmpzeD82ODlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9QcmV2aWV3JztcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMgfSA9IHVzZURyb3B6b25lKHtcbiAgICBhY2NlcHQ6IHtcbiAgICAgICdpbWFnZS8qJzogW10sXG4gICAgICB0eXBlOiAnZmlsZScsXG4gICAgfSxcbiAgICBvbkRyb3A6IGFzeW5jIChhY2NlcHRlZEZpbGVzKSA9PiB7XG4gICAgICBzZXRGaWxlKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oYWNjZXB0ZWRGaWxlcywge1xuICAgICAgICAgICAgcHJldmlldzogVVJMLmNyZWF0ZU9iamVjdFVSTChhY2NlcHRlZEZpbGVzKSxcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBBcHBlbmQgYWxsIGZpbGVzIHRvIEZvcm1EYXRhXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XG5cbiAgICAgIC8vIFVwbG9hZCB0byBmaXJlc3RvcmVcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZmlsZS11cGxvYWQnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbGUgdXBsb2FkIGZhaWxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQubWVzc2FnZSk7IC8vIEhhbmRsZSBzdWNjZXNzXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBNYWtlIHN1cmUgdG8gcmV2b2tlIHRoZSBkYXRhIHVyaXMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzLCB3aWxsIHJ1biBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IGZpbGVzLmZvckVhY2goKGZpbGUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZS5wcmV2aWV3KSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5IZWxsbyE8L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTJcIj5VcGxvYWQgeW91ciBmaWxlcyBoZXJlPC9oMj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNSBtYi0zXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmRyb3B6b25lLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy50aHVtYkNvbnRhaW5lcn0+XG4gICAgICAgICAgPFByZXZpZXcgZmlsZXM9e2ZpbGVzfSAvPlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17c3VibWl0fT5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURyb3B6b25lIiwic3R5bGVzIiwiUHJldmlldyIsIk1haW4iLCJmaWxlIiwic2V0RmlsZSIsImFjY2VwdCIsInR5cGUiLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJzdWJtaXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJmaWxlcyIsImZvckVhY2giLCJyZXZva2VPYmplY3RVUkwiLCJtYWluIiwidGl0bGUiLCJjbGFzc05hbWUiLCJkcm9wem9uZSIsInRodW1iQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Main.jsx\n"));

/***/ })

});