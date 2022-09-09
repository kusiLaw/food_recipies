/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&family=Ubuntu:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\n  min-width: 32rem;\\n  font-size: 1.6rem;\\n}\\n\\n/* reset settings for all browser */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nnav {\\n  position: relative;\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: center;\\n  padding: 2rem 5%;\\n  font-weight: 500;\\n  font-size: 2rem;\\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\\n}\\n\\n.logo {\\n  font-weight: 1000;\\n  padding: 0.5rem;\\n  border-radius: 600px;\\n  cursor: pointer;\\n}\\n\\na,\\na:hover,\\na:visited {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.nav-item {\\n  width: 50%;\\n  display: flex;\\n}\\n\\n.nav-item.mobile {\\n  display: flex;\\n  flex-direction: column;\\n  position: absolute;\\n  background-color: rgba(56, 58, 89, 0.9);\\n  z-index: 20;\\n  right: 0;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\n.nav-list {\\n  display: none;\\n  align-content: center;\\n  list-style-type: none;\\n  width: 100%;\\n  justify-content: flex-end;\\n}\\n\\n.nav-list span {\\n  font-size: small;\\n  background-color: pink;\\n  border-radius: 300px;\\n  padding: 3px;\\n  color: white;\\n  align-self: flex-end;\\n}\\n\\n.nav-list li:not(:last-child) {\\n  margin-right: 20%;\\n}\\n\\n.nav-list.mobile {\\n  flex-direction: column;\\n  margin-top: 2.5rem;\\n  align-items: flex-start;\\n  justify-content: center;\\n}\\n\\n.nav-list.mobile li {\\n  align-items: flex-start;\\n  justify-content: center;\\n  padding: 1rem;\\n}\\n\\n.nav-list.mobile a,\\n#toggle-close {\\n  color: rgb(255, 121, 198);\\n}\\n\\n#toggle-close {\\n  display: none;\\n  font-size: 3rem;\\n  background-color: transparent;\\n  border: none;\\n  align-self: flex-end;\\n  padding: 1.5rem 8%;\\n}\\n\\n.menu-btn {\\n  display: inline-block;\\n  background-color: white;\\n  width: 4rem;\\n  height: auto;\\n  border: none;\\n  font-size: 2.5rem;\\n}\\n\\nmain {\\n  padding: 5rem;\\n  position: relative;\\n}\\n\\n.food-title {\\n  padding: 2rem;\\n}\\n\\nh2 {\\n  font-style: italic;\\n  text-align: center;\\n}\\n\\nul {\\n  display: flex;\\n  list-style-type: none;\\n}\\n\\nmain ul {\\n  flex-grow: 1;\\n  flex-wrap: wrap;\\n  gap: 5%;\\n}\\n\\n.food-list-items {\\n  padding: 2rem;\\n  width: 29rem;\\n  margin-bottom: 5rem;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\\n}\\n\\n.list-header {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n  height: auto;\\n\\n  /* border-radius: 300px;\\n border: 1px solid gray; */\\n}\\n\\n.food-img {\\n  width: 90%;\\n  height: auto;\\n}\\n\\n.list-body {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\n.list-names-likes {\\n  display: flex;\\n  padding: 0.5rem 0;\\n  justify-content: space-between;\\n}\\n\\n.like {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n}\\n\\n.like span {\\n  margin-right: 0.5rem;\\n}\\n\\n#like-img {\\n  background-color: transparent;\\n  border: none;\\n  width: 100%;\\n  height: auto;\\n}\\n\\nfooter i {\\n  color: #ffff;\\n  margin-right: 0.5rem;\\n}\\n\\n#like-img i {\\n  font-size: 2.5rem;\\n  color: red;\\n}\\n\\n.list-buttons {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 2rem;\\n}\\n\\n.list-buttons button {\\n  width: 80%;\\n  border-radius: 300px;\\n  padding: 0.2rem;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  nav {\\n    padding: 2rem 10%;\\n  }\\n\\n  .nav-list {\\n    display: flex;\\n  }\\n\\n  .menu-btn {\\n    display: none;\\n  }\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: space-between;\\n  color: #ffff;\\n  background-color: black;\\n}\\n\\n.author-card {\\n  display: flex;\\n  justify-content: center;\\n  padding: 2rem;\\n  align-content: center;\\n  gap: 20%;\\n  width: 100%;\\n}\\n\\n.rights {\\n  width: 50%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.authors {\\n  width: 50%;\\n}\\n\\nstrong {\\n  color: #fff;\\n}\\n\\n.popup {\\n  display: flex;\\n  flex-direction: column;\\n  position: fixed;\\n  background-color: rgb(30, 32, 25);\\n  z-index: 20;\\n  right: 25%;\\n  padding: 2%;\\n  color: #fff;\\n  top: 0;\\n  width: 50%;\\n  height: 90vh;\\n  margin-top: 2%;\\n}\\n\\n.pop-header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  height: 35%;\\n}\\n\\n.pop-header img {\\n  height: 100%;\\n  width: auto;\\n}\\n\\n.pop-header button {\\n  align-self: flex-start;\\n  justify-self: flex-end;\\n  position: absolute;\\n  top: 1rem;\\n  right: 1rem;\\n  width: 2rem;\\n  font-size: 2rem;\\n  color: #fff;\\n  border: none;\\n  background-color: transparent;\\n}\\n\\n.pop-body {\\n  margin-top: 1rem;\\n}\\n\\n.pop-name {\\n  font-size: 2rem;\\n}\\n\\n.pop-comment {\\n  margin-top: 1rem;\\n  border: 2px grey solid;\\n  overflow-y: scroll;\\n  height: 90px;\\n}\\n\\np {\\n  margin-bottom: 0;\\n}\\n\\n.pop-comment p:nth-child(even) {\\n  background-color: grey;\\n}\\n\\n.pop-comment p:nth-child(odd) {\\n  padding: 1px;\\n}\\n\\n.pop-button {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n}\\n\\ninput {\\n  margin-top: 2rem;\\n  height: 3rem;\\n  border-radius: 1rem;\\n  padding: 1rem;\\n}\\n\\ninput::placeholder {\\n  padding: 1rem;\\n  font-style: italic;\\n}\\n\\nmain h2 {\\n  font-weight: 1000;\\n}\\n\\n.pop-button button {\\n  width: 30%;\\n  margin-top: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_generate_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/generate_list.js */ \"./src/module/generate_list.js\");\n/* harmony import */ var _module_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/api.js */ \"./src/module/api.js\");\n/* harmony import */ var _module_popuplist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/popuplist.js */ \"./src/module/popuplist.js\");\n/* harmony import */ var _module_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/likes.js */ \"./src/module/likes.js\");\n/* harmony import */ var _module_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/comments.js */ \"./src/module/comments.js\");\n/* harmony import */ var _module_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/counter.js */ \"./src/module/counter.js\");\n\n\n\n\n\n\n\nconst menu = document.getElementById('toggle-menu');\nconst toggleClose = document.getElementById('toggle-close');\nconst ulLists = document.getElementById('lists');\nconst listContainer = document.getElementById('list-dynamic');\nconst recipes = document.getElementById('recipes');\nconst error = document.getElementById('server-error');\nconst pageCount = document.getElementById('page-counter');\n\nconst mainContainer = document.getElementById('main-container');\n\nconst api = new _module_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst loadList = async () => {\n  try {\n    const data = await api.getRecipes('recipe');\n    const likes = await api.getRecipes('likes', '');\n    recipes.innerHTML = '';\n    recipes.appendChild((0,_module_generate_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n    (0,_module_likes_js__WEBPACK_IMPORTED_MODULE_3__.setLikes)(likes);\n    (0,_module_counter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pageCount, data);\n  } catch (e) {\n    error.innerHTML = 'Server not responding';\n  }\n};\n\nconst loadpop = async (targetId) => {\n  try {\n    const data = await api.getRecipes('popup', targetId);\n    mainContainer.prepend((0,_module_popuplist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data));\n  } catch (e) {\n    error.innerHTML = 'Server not responding';\n  }\n};\n\nwindow.onload = () => {\n  loadList();\n};\n\nmenu.onclick = () => {\n  listContainer.classList.add('mobile');\n  ulLists.classList.add('mobile');\n  ulLists.style.display = 'flex';\n  toggleClose.style.display = 'flex';\n  menu.style.display = 'none';\n};\n\ntoggleClose.onclick = () => {\n  listContainer.classList.remove('mobile');\n  ulLists.classList.remove('mobile');\n  ulLists.style.display = 'none';\n  toggleClose.style.display = 'none';\n  menu.style.display = 'flex';\n};\n\nrecipes.addEventListener('click', (e) => {\n  if (/love-+\\w/gi.test(e.target.id)) {\n    const id = e.target.id.split('-')[1];\n    (0,_module_likes_js__WEBPACK_IMPORTED_MODULE_3__.updateLike)(id);\n    api.addLike(id);\n  }\n\n  if (/com-+\\w/gi.test(e.target.id)) {\n    const id = e.target.id.split('-')[1];\n    loadpop(id);\n    // e.preventDefault();\n    // mav\n    api.getRecipes('getcomments', id).then((result) => {\n      (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id, result);\n    });\n  }\n});\n\ndocument.getElementById('main-container').onclick = (e) => {\n  if (e.target.id === 'pop-close' || e.target.id === 'i-close') {\n    document.getElementById('id-popup').remove();\n  }\n\n  if (/btn-+\\w/gi.test(e.target.id)) {\n    const id = e.target.id.split('-')[1];\n    const name = document.getElementById(`name-${id}`).value;\n    const message = document.getElementById(`comment-${id}`).value;\n    if (name !== '' && message !== '') {\n      api.addComment(id, name, message).then(() => {\n        api.getRecipes('getcomments', id).then((result) => {\n          (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id, result);\n        });\n      });\n    }\n  }\n};\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/main.js?");

/***/ }),

/***/ "./src/module/api.js":
/*!***************************!*\
  !*** ./src/module/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Api {\n  url = {\n    recipe: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',\n    popup: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',\n    likes:\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/likes/',\n    comments:\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/comments/',\n    getcomments:\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/comments?item_id=',\n  };\n\n  newScore = async (object) => {\n    await fetch(this.url, {\n      method: 'POST',\n      body: JSON.stringify({\n        ...object,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n  };\n\n  addComment = async (idMeal, name, message) => {\n    await fetch(this.url.comments, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: idMeal,\n        username: name,\n        comment: message,\n      }),\n    });\n  };\n\n  addLike = async (idMeal) => {\n    await fetch(this.url.likes, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: idMeal,\n      }),\n    });\n  };\n\n  getRecipes = async (preferredLink, key = 'Canadian') => {\n    try {\n      const response = await fetch(this.url[preferredLink].concat(key));\n      const results = await response.json();\n      return results;\n    } catch (e) {\n      return e;\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/api.js?");

/***/ }),

/***/ "./src/module/comments.js":
/*!********************************!*\
  !*** ./src/module/comments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayComment = (id, comments) => {\n  if (comments.length > 0) {\n    const listContainer = document.getElementById(`comlist-${id}`);\n    const comtitle = document.getElementById(`comtitle-${id}`);\n    comtitle.innerHTML = '';\n    comtitle.innerText = `Comment (${comments.length})`;\n\n    listContainer.innerHTML = '';\n    // '${array[0].idMeal}';\n    for (let i = 0; i < comments.length; i += 1) {\n      listContainer.innerHTML += `\n <p>${comments[i].creation_date} ${comments[i].username} : ${comments[i].comment} </p>\n `;\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/comments.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = (element, array) => {\n  array = array.meals || array;\n  if (array !== undefined) {\n    const counter = array.length;\n    element.innerText = '';\n    element.innerText = `(${counter})`;\n    return counter;\n  }\n  return 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/generate_list.js":
/*!*************************************!*\
  !*** ./src/module/generate_list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateList = (array) => {\n  array = array.meals; // array of objects\n\n  const ul = document.createElement('ul');\n  ul.setAttribute('class', 'food-list');\n  ul.id = 'id-recipe';\n\n  for (let i = 0; i < array.length; i += 1) {\n    ul.innerHTML += `<li class=\"food-list-items\" id = 'li-${array[i].idMeal}'>\n    <div class=\"list-header\"><img  class=\"food-img\" src=\"${array[i].strMealThumb}\" alt=\"food\"></div>\n    <div class=\"list-body\">\n     <div class=\"list-names-likes\">\n      <p class=\"food-name\">${array[i].strMeal}</p>\n      <div class=\"like\">\n      <button type='button' id='like-img'><i id='love-${array[i].idMeal}' class=\"fa-solid fa-heart\"></i></button>\n       <p><span id='like-${array[i].idMeal}'>0</span>likes</p>\n      </div>\n     </div>\n     <div class=\"list-buttons\">\n      <button type=\"button\" id = 'com-${array[i].idMeal}'>Comments</button>\n      <button type=\"button\" id = 'res-${array[i].idMeal}' >Reservation</button>\n     </div>\n    </div>\n   </li>`;\n  }\n  return ul;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateList);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/generate_list.js?");

/***/ }),

/***/ "./src/module/likes.js":
/*!*****************************!*\
  !*** ./src/module/likes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLikes\": () => (/* binding */ setLikes),\n/* harmony export */   \"updateLike\": () => (/* binding */ updateLike)\n/* harmony export */ });\nconst setLikes = (data) => {\n  // set all likes\n  let element;\n  for (let i = 0; i < data.length; i += 1) {\n    element = document.getElementById(`like-${data[i].item_id}`);\n    element.innerHTML = '';\n    element.innerHTML = `${data[i].likes}`;\n  }\n};\n\nconst updateLike = (targetId) => {\n  // update card like upon click\n  const element = document.getElementById(`like-${targetId}`);\n  element.innerHTML = parseInt(element.innerHTML, 10) + 1;\n};\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/likes.js?");

/***/ }),

/***/ "./src/module/popuplist.js":
/*!*********************************!*\
  !*** ./src/module/popuplist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popup = (array) => {\n  array = array.meals;\n  // return\n  const div = document.createElement('div');\n  div.className = 'popup';\n  div.id = 'id-popup';\n  div.innerHTML += `\n <div class=\"pop-header\" id=\"pop\">\n  <img src=\"${array[0].strMealThumb}\" alt=\"\">\n  <button type=\"button\"  id=\"pop-close\"><i id=\"i-close\" class=\"fa-solid fa-xmark\"></i></button>\n </div>\n <div class=\"pop-body\">\n  <h2 class=\"pop-name\">${array[0].strMeal}</h2>\n  <div class=\"pop-details\"><p>${array[0].strArea} ${array[0].strCategory} </p></div>\n  <p id=\"comtitle-${array[0].idMeal}\">Comment (0)</p>\n  <div class=\"pop-comment\" id=\"comlist-${array[0].idMeal}\"></div>\n  <div class=\"pop-button\">\n   <input type=\"text\" placeholder=\"Your Name\" name=\"name\" id=\"name-${array[0].idMeal}\">\n   <input type=\"text-area\" placeholder=\"Your Comment\" name=\"\" id=\"comment-${array[0].idMeal}\">\n   <button id=\"btn-${array[0].idMeal}\" type=\"button\" name=\"submit\">Submit</button>\n  </div>\n </div>\n`;\n  return div;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/module/popuplist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;