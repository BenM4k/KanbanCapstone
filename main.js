"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkanbancapstone"] = self["webpackChunkkanbancapstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  font-size: 16px;\\r\\n  padding: 0 70px;\\r\\n  background: rgb(221, 221, 221);\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  height: 60px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.video-grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  column-gap: 20px;\\r\\n  row-gap: 20px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n  .video-grid {\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 760px) and (max-width: 1149px) {\\r\\n  .video-grid {\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1150px) {\\r\\n  body {\\r\\n    padding: 0 160px;\\r\\n  }\\r\\n\\r\\n  .video-grid {\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  }\\r\\n}\\r\\n\\r\\n.video {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.video-preview {\\r\\n  height: 250px;\\r\\n  width: 100%;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  width: 100%;\\r\\n  margin-top: 10px;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.title p {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.likes-img {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 90%;\\r\\n  margin-top: 10px;\\r\\n  text-align: center;\\r\\n  border: 2px solid black;\\r\\n  padding: 5px 15px;\\r\\n  box-shadow: 3px 4px 0 0 black;\\r\\n}\\r\\n\\r\\n.comments:hover{\\r\\n  background: #fff;\\r\\n}\\r\\n/* Popup window styles */\\r\\n.popup-card {\\r\\n  border: 2px solid #000;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  overflow-x: scroll;\\r\\n  width: 75vw;\\r\\n  height: 90vh;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%) scale(1);\\r\\n  background: rgb(221, 221, 221);\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n#error-msg {\\r\\n  display: none;\\r\\n  text-align: center;\\r\\n  margin-bottom: 10px;\\r\\n  font-size: 16px;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.popup-card h2 {\\r\\n  font-size: 2rem;\\r\\n  margin: 1rem 0;\\r\\n}\\r\\n\\r\\n.popup-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  font-size: 3rem;\\r\\n  position: absolute;\\r\\n  top: 2rem;\\r\\n  right: 4rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-times:hover {\\r\\n  color: #f00;\\r\\n}\\r\\n\\r\\n.popup-thumbnail {\\r\\n  width: 80%;\\r\\n  margin-top: 3rem;\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\n.popup-thumbnail img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comments-list {\\r\\n  margin: 3rem 5rem 0 0;\\r\\n}\\r\\n\\r\\n.popup-footer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 70%;\\r\\n  margin: 2rem 0;\\r\\n}\\r\\n\\r\\n.popup-footer h3 {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 3rem;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\nform .input {\\r\\n  width: 100%;\\r\\n  margin-bottom: 1rem;\\r\\n  padding: 0.5rem;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\nform button {\\r\\n  padding: 0.5rem 1rem;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border-radius: 0.5rem;\\r\\n  cursor: pointer;\\r\\n  background-color: #fff;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\nform button:hover {\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin-top: 11rem;\\r\\n  padding: 1rem 0;\\r\\n  border-top: 3px solid #000;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanbancapstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanbancapstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_shows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shows.js */ \"./src/modules/shows.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\nconst grid = document.querySelector('.video-grid');\nconst shows = document.querySelector('.shows');\nshows.textContent = `${_modules_shows_js__WEBPACK_IMPORTED_MODULE_1__.links.length}`;\n\n_modules_shows_js__WEBPACK_IMPORTED_MODULE_1__.links.forEach((link) => {\n  (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_2__.getData)(link).then((link) => {\n    const show = {\n      id: link.id,\n      title: link.name,\n      img: link.image.original,\n    };\n\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(show, grid);\n  });\n});\n\n//# sourceURL=webpack://kanbancapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst getData = async (url) => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst postData = async (url, data) => {\n  fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then((response) => response.json())\n    .then((json) => json);\n};\n\n\n//# sourceURL=webpack://kanbancapstone/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst microverseApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Um2BR5oCOcLYd21wIEWu/';\n\nconst postComment = async (itemId, username, comment) => {\n  try {\n    const data = {\n      item_id: itemId,\n      username,\n      comment,\n    };\n\n    const response = await fetch(`${microverseApi}comments`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n\n    if (response.status === 201) {\n      return; // Return or perform any desired action upon successful creation\n    }\n\n    const responseData = await response.json();\n    throw new Error('Failed to create comment');\n  } catch (error) {\n    throw error;\n  }\n};\n\nconst postLike = async (itemId) => {\n  try {\n    const data = {\n      item_id: itemId,\n    };\n\n    const response = await fetch(`${microverseApi}likes`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n\n    if (response.status === 201) {\n      return; // Return or perform any desired action upon successful creation\n    }\n\n    const responseData = await response.json();\n    throw new Error('Failed to create like');\n  } catch (error) {\n    throw error;\n  }\n};\n\nconst getLikes = async (itemId) => {\n  try {\n    const response = await fetch(`${microverseApi}likes`);\n    const data = await response.json();\n    const likesData = data.find((item) => item.item_id === itemId);\n    return likesData;\n  } catch (error) {\n    throw error;\n  }\n};\n\nconst getComments = async (itemId) => {\n  try {\n    const response = await fetch(`${microverseApi}comments?item_id=${itemId}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw error;\n  }\n};\n\nconst displayComments = async (commentsData, p, commentList) => {\n  p.textContent = `Comments (${commentsData.length})`;\n  commentsData.forEach((comment) => {\n    const comm = document.createElement('li');\n    comm.textContent = `${comment.creation_date} - ${comment.username} : ${comment.comment}`;\n\n    commentList.appendChild(comm);\n  });\n};\n\n//# sourceURL=webpack://kanbancapstone/./src/modules/fetch.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPopup)\n/* harmony export */ });\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n\n\nasync function createPopup(show) {\n  // initialization\n  const card = document.querySelector('.popup-card');\n  const popupHeader = document.createElement('div');\n  const popupThumbnail = document.createElement('div');\n  const image = document.createElement('img');\n  const icon = document.createElement('span');\n  const title = document.createElement('h2');\n  const p = document.createElement('p');\n  const commentList = document.createElement('ul');\n  const footer = document.createElement('div');\n  const footerTitle = document.createElement('h3');\n  const form = document.createElement('form');\n  const errorMessage = document.createElement('span');\n  const name = document.createElement('input');\n  const message = document.createElement('textarea');\n  const submit = document.createElement('button');\n\n  // popup header\n\n  popupHeader.classList.add('popup-header');\n  popupThumbnail.classList.add('popup-thumbnail');\n  image.classList.add('popup-img');\n  icon.classList.add('fas');\n  icon.classList.add('fa-times');\n\n  image.src = `${show.img}`;\n  image.alt = `${show.title}`;\n\n  popupThumbnail.appendChild(image);\n  popupHeader.appendChild(popupThumbnail);\n  popupHeader.appendChild(icon);\n\n  // popup footer\n  footer.classList.add('popup-footer');\n  errorMessage.classList.add('error-msg');\n  name.type = 'text';\n  name.placeholder = 'Your name';\n  name.classList.add('input');\n  name.id = 'name';\n  name.required = true;\n\n  message.cols = '20';\n  message.rows = '6';\n  message.placeholder = 'Your message...';\n  message.classList.add('input');\n  message.id = 'message';\n  message.required = true;\n\n  submit.type = 'submit';\n  submit.id = 'add-btn';\n\n  errorMessage.textContent = 'Please enter your name and message!!';\n  errorMessage.style.display = 'none';\n  footerTitle.textContent = 'Add a comment';\n  submit.textContent = 'Comments';\n\n  form.appendChild(errorMessage);\n  form.appendChild(name);\n  form.appendChild(message);\n  form.appendChild(submit);\n\n  footer.appendChild(footerTitle);\n  footer.appendChild(form);\n\n  // comment list\n\n  const commentsData = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(show.title.trim().split(' ').join(''));\n  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(commentsData, p, commentList);\n\n  // popup\n  // card.classList.add('popup-card');\n\n  title.textContent = `${show.title}`;\n\n  card.appendChild(popupHeader);\n  card.appendChild(title);\n  card.appendChild(p);\n  card.appendChild(commentList);\n  card.appendChild(footer);\n\n  card.style.display = 'flex';\n\n  icon.addEventListener('click', () => {\n    card.style.display = 'none';\n    card.textContent = '';\n  });\n\n  submit.addEventListener('click', async (e) => {\n    e.preventDefault();\n    if (name.value !== '' && message.value !== '') {\n      await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(show.title.split(' ').join(''), name.value, message.value);\n      name.value = '';\n      message.value = '';\n\n      const commentsData = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(show.title.trim().split(' ').join(''));\n      commentList.textContent = '';\n      (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(commentsData, p, commentList);\n    } else {\n      errorMessage.style.color = 'red';\n      errorMessage.style.marginBottom = '10px';\n      errorMessage.style.display = 'block';\n    }\n  });\n}\n\n//# sourceURL=webpack://kanbancapstone/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n\n\n\nasync function render(show, container) {\n  const list = document.createElement('li');\n  const img = document.createElement('img');\n  const div = document.createElement('div');\n  const p = document.createElement('p');\n  const likes = document.createElement('div');\n  const likesImg = document.createElement('i');\n  const likesNbr = document.createElement('span');\n  const comments = document.createElement('p');\n\n  list.classList.add('video');\n  img.classList.add('video-preview');\n  div.classList.add('title');\n  likes.classList.add('likes');\n  likesImg.classList.add('likes-img');\n  likesNbr.classList.add('likes-number');\n  comments.classList.add('comments');\n\n  img.src = `${show.img}`;\n  p.innerText = `${show.title}`;\n  likesImg.classList.add(\"fa\");\n  likesImg.classList.add(\"fa-heart-o\");\n  likesImg.classList.add(\"fa-2x\");\n  comments.innerText = 'Comments';\n\n  likes.appendChild(likesImg);\n  likes.appendChild(likesNbr);\n\n  div.appendChild(p);\n  div.appendChild(likes);\n\n  list.appendChild(img);\n  list.appendChild(div);\n  list.appendChild(comments);\n\n  comments.addEventListener('click', () => {\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(show);\n  });\n\n  container.appendChild(list);\n\n  const likesData = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)(show.title.split(' ').join(''));\n\n  if (likesData.item_id === show.title.split(' ').join('')) {\n    likesNbr.textContent = likesData.likes;\n  }\n\n  likesImg.addEventListener('click', async () => {\n    await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(show.title.split(' ').join(''));\n    const likesData = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)(show.title.split(' ').join(''));\n\n    if (likesData.item_id === show.title.split(' ').join('')) {\n      likesNbr.textContent = likesData.likes;\n    }\n  });\n}\n\n//# sourceURL=webpack://kanbancapstone/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/shows.js":
/*!******************************!*\
  !*** ./src/modules/shows.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments),\n/* harmony export */   \"links\": () => (/* binding */ links)\n/* harmony export */ });\nconst links = [\n  'https://api.tvmaze.com/singlesearch/shows?q=the+boys',\n  'https://api.tvmaze.com/singlesearch/shows?q=breaking+bad',\n  'https://api.tvmaze.com/singlesearch/shows?q=power',\n  'https://api.tvmaze.com/singlesearch/shows?q=witcher',\n  'https://api.tvmaze.com/singlesearch/shows?q=supernatural',\n  'https://api.tvmaze.com/singlesearch/shows?q=flash',\n];\n\nconst comments = [];\n\n//# sourceURL=webpack://kanbancapstone/./src/modules/shows.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);