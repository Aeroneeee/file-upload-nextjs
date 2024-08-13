"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/file-upload";
exports.ids = ["pages/api/file-upload"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("firebase/storage");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/file-upload.js":
/*!**********************************!*\
  !*** ./pages/api/file-upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst {\n  getApps,\n  initializeApp\n} = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n\nconst {\n  getStorage,\n  ref,\n  uploadBytes\n} = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n\nconst {\n  IncomingForm\n} = __webpack_require__(/*! formidable */ \"formidable\");\n\nconst {\n  readFileSync\n} = __webpack_require__(/*! node:fs */ \"node:fs\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst firebaseConfig = {\n  apiKey: process.env.API_KEY,\n  authDomain: process.env.AUTH_DOMAIN,\n  projectId: process.env.PROJECT_ID,\n  storageBucket: process.env.STORAGE_BUCKET,\n  messagingSenderId: process.env.SENDER_ID,\n  appId: process.env.APP_ID\n};\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      error: 'Method Not Allowed'\n    });\n  }\n\n  const firebaseApps = getApps();\n\n  if (!firebaseApps.length) {\n    initializeApp(firebaseConfig);\n  }\n\n  const form = new IncomingForm();\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(500).json({\n        error: 'Failed to parse the form.'\n      });\n    }\n\n    const file = files?.file && files.file.length && files?.file[0];\n\n    if (!file) {\n      return res.status(400).json({\n        error: 'No file uploaded.'\n      });\n    }\n\n    try {\n      const storage = getStorage();\n      const fileUploadRef = ref(storage, `images/${path.basename(file.filepath)}`);\n      const fileBuffer = readFileSync(file.filepath);\n      await uploadBytes(fileUploadRef, fileBuffer);\n      res.status(200).json({\n        message: 'File uploaded successfully!'\n      });\n    } catch (uploadError) {\n      console.error('Upload Error: ', uploadError);\n      res.status(500).json({\n        error: 'Failed to upload the file.'\n      });\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQjtRQUFFZSxPQUFPLEVBQUU7TUFBWCxDQUFyQjtJQUNELENBUEQsQ0FPRSxPQUFPQyxXQUFQLEVBQW9CO01BQ3BCQyxPQUFPLENBQUNoQixLQUFSLENBQWMsZ0JBQWQsRUFBZ0NlLFdBQWhDO01BQ0FuQixHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtRQUFFQyxLQUFLLEVBQUU7TUFBVCxDQUFyQjtJQUNEO0VBQ0YsQ0FyQkQ7QUFzQkQsQ0FqQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FwaS9maWxlLXVwbG9hZC5qcz83ZjM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCB7IGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSA9IHJlcXVpcmUoJ2ZpcmViYXNlL2FwcCcpO1xuY29uc3QgeyBnZXRTdG9yYWdlLCByZWYsIHVwbG9hZEJ5dGVzfSA9IHJlcXVpcmUoJ2ZpcmViYXNlL3N0b3JhZ2UnKTtcbmNvbnN0IHsgSW5jb21pbmdGb3JtIH0gPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG5jb25zdCB7IHJlYWRGaWxlU3luYyB9ID0gcmVxdWlyZSgnbm9kZTpmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5BUFBfSUQsXG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xuICB9XG5cbiAgY29uc3QgZmlyZWJhc2VBcHBzID0gZ2V0QXBwcygpO1xuICBpZiAoIWZpcmViYXNlQXBwcy5sZW5ndGgpIHtcbiAgICBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKCk7XG4gIGZvcm0ucGFyc2UocmVxLCBhc3luYyAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcGFyc2UgdGhlIGZvcm0uJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gZmlsZXM/LmZpbGUgJiYgZmlsZXMuZmlsZS5sZW5ndGggJiYgZmlsZXM/LmZpbGVbMF07XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcbiAgICAgIGNvbnN0IGZpbGVVcGxvYWRSZWYgPSByZWYoc3RvcmFnZSwgYGltYWdlcy8ke3BhdGguYmFzZW5hbWUoZmlsZS5maWxlcGF0aCl9YCk7XG4gICAgICBjb25zdCBmaWxlQnVmZmVyID0gcmVhZEZpbGVTeW5jKGZpbGUuZmlsZXBhdGgpO1xuICAgICAgYXdhaXQgdXBsb2FkQnl0ZXMoZmlsZVVwbG9hZFJlZiwgZmlsZUJ1ZmZlcik7XG4gICAgICBcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScgfSk7XG4gICAgfSBjYXRjaCAodXBsb2FkRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBFcnJvcjogJywgdXBsb2FkRXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGxvYWQgdGhlIGZpbGUuJyB9KTtcbiAgICB9XG4gIH0pO1xufTsiXSwibmFtZXMiOlsiZ2V0QXBwcyIsImluaXRpYWxpemVBcHAiLCJyZXF1aXJlIiwiZ2V0U3RvcmFnZSIsInJlZiIsInVwbG9hZEJ5dGVzIiwiSW5jb21pbmdGb3JtIiwicmVhZEZpbGVTeW5jIiwicGF0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiLCJhdXRoRG9tYWluIiwiQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJQUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlNUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJTRU5ERVJfSUQiLCJhcHBJZCIsIkFQUF9JRCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmaXJlYmFzZUFwcHMiLCJsZW5ndGgiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGUiLCJzdG9yYWdlIiwiZmlsZVVwbG9hZFJlZiIsImJhc2VuYW1lIiwiZmlsZXBhdGgiLCJmaWxlQnVmZmVyIiwibWVzc2FnZSIsInVwbG9hZEVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/file-upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/file-upload.js"));
module.exports = __webpack_exports__;

})();