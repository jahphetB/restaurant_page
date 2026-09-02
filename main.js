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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Shared colors and fonts */\n:root {\n    --background: #f6f3ec;\n    --surface: #fffdf8;\n    --forest: #193b32;\n    --forest-dark: #102820;\n    --gold: #b59560;\n    --text: #253a32;\n    --muted: #69756d;\n    --border: #ded8cb;\n\n    --heading-font: Georgia, \"Times New Roman\", serif;\n    --body-font: Arial, Helvetica, sans-serif;\n}\n\n/* Base styles */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    color: var(--text);\n    font-family: var(--body-font);\n    line-height: 1.6;\n}\n\n/* Navigation */\nbody > header {\n    width: min(1180px, calc(100% - 48px));\n    margin: 0 auto;\n    padding: 24px 0;\n    border-bottom: 1px solid var(--border);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 12px;\n}\n\nnav button {\n    padding: 12px 26px;\n    border: 1px solid transparent;\n    border-radius: 999px;\n    background-color: transparent;\n    color: var(--forest);\n    font: inherit;\n    font-size: 0.8rem;\n    font-weight: 600;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition:\n        background-color 180ms ease,\n        color 180ms ease,\n        box-shadow 180ms ease,\n        transform 180ms ease;\n}\n\nnav button:hover {\n    background-color: var(--forest);\n    color: var(--surface);\n    box-shadow: 0 6px 16px rgb(16 40 32 / 15%);\n    transform: translateY(-2px);\n}\n\nnav button:active {\n    transform: translateY(0);\n}\n\nnav button:focus-visible {\n    outline: 3px solid var(--gold);\n    outline-offset: 4px;\n}\n\n/* Main content area */\n#content {\n    width: min(1180px, calc(100% - 48px));\n    margin: 40px auto 64px;\n}\n\n/* Home page */\n.home-page {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n        \"heading image\"\n        \"description image\";\n    column-gap: 48px;\n    row-gap: 24px;\n    padding: 48px;\n    border: 1px solid rgb(181 149 96 / 35%);\n    border-radius: 24px;\n    background-color: var(--forest-dark);\n    color: var(--surface);\n    box-shadow: 0 24px 60px rgb(16 40 32 / 14%);\n}\n\n.home-page h3 {\n    grid-area: heading;\n    align-self: end;\n    font-family: var(--heading-font);\n    font-size: clamp(3rem, 6vw, 5.5rem);\n    font-weight: 400;\n    line-height: 1.05;\n    letter-spacing: -0.04em;\n}\n\n.home-page h3::after {\n    content: \"\";\n    display: block;\n    width: 64px;\n    height: 2px;\n    margin-top: 28px;\n    background-color: var(--gold);\n}\n\n.home-page p {\n    grid-area: description;\n    align-self: start;\n    max-width: 36ch;\n    color: #d5ddd5;\n    font-size: 1.05rem;\n    line-height: 1.9;\n}\n\n.home-page img {\n    grid-area: image;\n    display: block;\n    width: 100%;\n    height: 500px;\n    object-fit: cover;\n    border: 1px solid rgb(255 253 248 / 15%);\n    border-radius: 200px 200px 16px 16px;\n    box-shadow: 0 16px 32px rgb(0 0 0 / 20%);\n}\n\n/* Shared Menu and Contact styling */\n.menu-page,\n.contact-page {\n    min-height: 440px;\n    padding: clamp(28px, 6vw, 72px);\n    border: 1px solid var(--border);\n    border-top: 4px solid var(--gold);\n    border-radius: 16px;\n    background-color: var(--surface);\n    box-shadow: 0 16px 40px rgb(37 58 50 / 7%);\n}\n\n.menu-page h2,\n.contact-page h2 {\n    margin-bottom: 16px;\n    color: var(--forest);\n    font-family: var(--heading-font);\n    font-size: clamp(2.5rem, 5vw, 4rem);\n    font-weight: 400;\n    line-height: 1.15;\n}\n\n.page-intro {\n    max-width: 65ch;\n    margin-bottom: 40px;\n    color: var(--muted);\n    font-size: 1rem;\n    line-height: 1.8;\n}\n\n/* Menu and Contact grids */\n.menu-categories,\n.contact-grid {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 40px;\n}\n\n/* Menu categories */\n.menu-category {\n    padding-top: 20px;\n    border-top: 2px solid var(--gold);\n}\n\n.menu-category h3,\n.contact-card h3 {\n    margin-bottom: 18px;\n    color: var(--forest);\n    font-family: var(--heading-font);\n    font-size: 1.7rem;\n    font-weight: 400;\n    line-height: 1.2;\n}\n\n/* Individual menu items */\n.menu-item {\n    padding: 20px 0;\n    border-bottom: 1px solid var(--border);\n}\n\n.menu-item:last-child {\n    border-bottom: none;\n}\n\n.menu-item-top {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    gap: 16px;\n}\n\n.menu-item h4 {\n    font-size: 1rem;\n    font-weight: 600;\n    line-height: 1.5;\n}\n\n.menu-item .price {\n    flex-shrink: 0;\n    color: var(--forest);\n    font-size: 1rem;\n    font-weight: 600;\n    font-variant-numeric: tabular-nums;\n}\n\n.menu-item p {\n    margin-top: 8px;\n    color: var(--muted);\n    font-size: 0.92rem;\n    line-height: 1.7;\n}\n\n/* Contact information cards */\n.contact-card {\n    padding: 28px;\n    border: 1px solid var(--border);\n    border-radius: 12px;\n    background-color: var(--background);\n}\n\n.contact-card p {\n    color: var(--text);\n    font-size: 0.95rem;\n    line-height: 1.8;\n    overflow-wrap: anywhere;\n}\n\n.contact-card p + p {\n    margin-top: 10px;\n}\n\n/* Tablets and smaller screens */\n@media (max-width: 760px) {\n    body > header,\n    #content {\n        width: calc(100% - 32px);\n    }\n\n    #content {\n        margin-top: 24px;\n    }\n\n    .home-page {\n        grid-template-columns: 1fr;\n        grid-template-areas:\n            \"heading\"\n            \"image\"\n            \"description\";\n        gap: 28px;\n        padding: 28px;\n    }\n\n    .home-page h3 {\n        font-size: clamp(2.8rem, 10vw, 4rem);\n    }\n\n    .home-page img {\n        height: 360px;\n    }\n\n    .home-page p {\n        max-width: none;\n    }\n\n    .menu-categories,\n    .contact-grid {\n        grid-template-columns: 1fr;\n        gap: 28px;\n    }\n\n    .contact-card {\n        padding: 24px;\n    }\n}\n\n/* Small phones */\n@media (max-width: 420px) {\n    nav {\n        gap: 4px;\n    }\n\n    nav button {\n        padding: 10px 16px;\n        font-size: 0.75rem;\n    }\n\n    .home-page {\n        padding: 24px;\n    }\n\n    .home-page img {\n        height: 280px;\n    }\n}\n\n/* Respect reduced-motion preferences */\n@media (prefers-reduced-motion: reduce) {\n    nav button {\n        transition: none;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/food.jpeg"
/*!***********************!*\
  !*** ./src/food.jpeg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"60cf4df1ef6541d3f0c6.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/food.jpeg?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nconst contactSections = [\n    {\n        title: \"Visit Us\",\n        lines: [\n            \"Saffron & Stone\",\n            \"128 Olive Lane\",\n            \"Willowbrook, Oregon\",\n        ],\n    },\n    {\n        title: \"Opening Hours\",\n        lines: [\n            \"Monday: Closed\",\n            \"Tuesday–Thursday: 5:00 PM–10:00 PM\",\n            \"Friday–Saturday: 5:00 PM–11:00 PM\",\n            \"Sunday: 4:00 PM–9:00 PM\",\n        ],\n    },\n    {\n        title: \"Reservations & Inquiries\",\n        lines: [\n            \"Phone: (503) 555-0148\",\n            \"Email: hello@saffronandstone.example\",\n            \"Call or email to request a table. For parties of six or more, please contact us in advance.\",\n        ],\n    },\n    {\n        title: \"Plan Your Visit\",\n        lines: [\n            \"Complimentary parking is available behind the restaurant.\",\n            \"Our step-free entrance is on Olive Lane.\",\n            \"Please let our team know about dietary requirements when booking.\",\n        ],\n    },\n];\n\nfunction loadContact() {\n    const content = document.querySelector(\"#content\");\n\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"contact-page\");\n\n    const heading = document.createElement(\"h2\");\n    heading.textContent = \"Come Join Us\";\n\n    const introduction = document.createElement(\"p\");\n    introduction.classList.add(\"page-intro\");\n    introduction.textContent =\n        \"A quiet dinner, a special occasion, or an evening with friends. We look forward to welcoming you.\";\n\n    const contactGrid = document.createElement(\"div\");\n    contactGrid.classList.add(\"contact-grid\");\n\n    contactSections.forEach((section) => {\n        const card = document.createElement(\"section\");\n        card.classList.add(\"contact-card\");\n\n        const cardHeading = document.createElement(\"h3\");\n        cardHeading.textContent = section.title;\n        card.appendChild(cardHeading);\n\n        section.lines.forEach((line) => {\n            const paragraph = document.createElement(\"p\");\n            paragraph.textContent = line;\n            card.appendChild(paragraph);\n        });\n\n        contactGrid.appendChild(card);\n    });\n\n    contact.appendChild(heading);\n    contact.appendChild(introduction);\n    contact.appendChild(contactGrid);\n\n    content.appendChild(contact);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _food_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpeg */ \"./src/food.jpeg\");\n\n\nfunction loadHome() {\n    const content = document.querySelector(\"#content\");\n\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home-page\");\n\n    const header = document.createElement(\"h3\");\n    header.textContent = \"Saffron & Stone\";\n\n    const image = document.createElement(\"img\");\n    image.src = _food_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"res food\";\n\n    const bottom = document.createElement(\"p\");\n    bottom.textContent = \"Seasonal dishes, thoughtful details, and warm hospitality. Make yourself at home at our table.\";\n\n    home.appendChild(header);\n    home.appendChild(image);\n    home.appendChild(bottom);\n\n    content.appendChild(home);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nconst homeButton = document.querySelector(\"#home-btn\");\nconst menuButton = document.querySelector(\"#menu-btn\");\nconst contactButton = document.querySelector(\"#contact-btn\");\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nhomeButton.addEventListener(\"click\", () => {\n    content.innerHTML = \"\";\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenuButton.addEventListener(\"click\", () => {\n    content.innerHTML = \"\";\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\ncontactButton.addEventListener(\"click\", () => {\n    content.innerHTML = \"\";\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst menuSections = [\n    {\n        title: \"Appetizers\",\n        items: [\n            {\n                name: \"Tomato Bruschetta\",\n                description: \"Grilled sourdough, cherry tomatoes, fresh basil, garlic, and extra virgin olive oil.\",\n                price: \"$12\",\n            },\n            {\n                name: \"Burrata & Peaches\",\n                description: \"Creamy burrata, grilled peaches, arugula, toasted almonds, and balsamic glaze.\",\n                price: \"$16\",\n            },\n            {\n                name: \"Crispy Calamari\",\n                description: \"Lightly fried calamari, lemon, parsley, and house-made garlic aioli.\",\n                price: \"$15\",\n            },\n        ],\n    },\n    {\n        title: \"Main Courses\",\n        items: [\n            {\n                name: \"Herb-Roasted Chicken\",\n                description: \"Rosemary chicken, buttery mashed potatoes, seasonal vegetables, and pan jus.\",\n                price: \"$28\",\n            },\n            {\n                name: \"Wild Mushroom Risotto\",\n                description: \"Arborio rice, roasted mushrooms, Parmesan, fresh thyme, and truffle oil.\",\n                price: \"$26\",\n            },\n            {\n                name: \"Grilled Atlantic Salmon\",\n                description: \"Salmon fillet, lemon couscous, asparagus, and a citrus butter sauce.\",\n                price: \"$32\",\n            },\n        ],\n    },\n    {\n        title: \"Desserts\",\n        items: [\n            {\n                name: \"Classic Tiramisu\",\n                description: \"Espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa.\",\n                price: \"$11\",\n            },\n            {\n                name: \"Lemon Tart\",\n                description: \"Buttery pastry, fresh lemon curd, vanilla cream, and seasonal berries.\",\n                price: \"$10\",\n            },\n            {\n                name: \"Chocolate Mousse\",\n                description: \"Dark chocolate mousse, whipped cream, and shaved chocolate.\",\n                price: \"$10\",\n            },\n        ],\n    },\n    {\n        title: \"Drinks\",\n        items: [\n            {\n                name: \"Rosemary Lemonade\",\n                description: \"Fresh lemon juice, rosemary syrup, sparkling water, and ice.\",\n                price: \"$7\",\n            },\n            {\n                name: \"Peach Iced Tea\",\n                description: \"Freshly brewed black tea, peach purée, and mint.\",\n                price: \"$6\",\n            },\n            {\n                name: \"Vanilla Latte\",\n                description: \"Double espresso, steamed milk, and vanilla syrup.\",\n                price: \"$6\",\n            },\n        ],\n    },\n];\n\nfunction loadMenu() {\n    const content = document.querySelector(\"#content\");\n\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu-page\");\n\n    const heading = document.createElement(\"h2\");\n    heading.textContent = \"Our Menu\";\n\n    const introduction = document.createElement(\"p\");\n    introduction.classList.add(\"page-intro\");\n    introduction.textContent =\n        \"Something to share, something to savor. Explore our kitchen’s favorites, from the first bite to the last sip.\";\n\n    const categories = document.createElement(\"div\");\n    categories.classList.add(\"menu-categories\");\n\n    menuSections.forEach((section) => {\n        const category = document.createElement(\"section\");\n        category.classList.add(\"menu-category\");\n\n        const categoryHeading = document.createElement(\"h3\");\n        categoryHeading.textContent = section.title;\n        category.appendChild(categoryHeading);\n\n        section.items.forEach((item) => {\n            const dish = document.createElement(\"article\");\n            dish.classList.add(\"menu-item\");\n\n            const dishTop = document.createElement(\"div\");\n            dishTop.classList.add(\"menu-item-top\");\n\n            const name = document.createElement(\"h4\");\n            name.textContent = item.name;\n\n            const price = document.createElement(\"span\");\n            price.classList.add(\"price\");\n            price.textContent = item.price;\n\n            const description = document.createElement(\"p\");\n            description.textContent = item.description;\n\n            dishTop.appendChild(name);\n            dishTop.appendChild(price);\n\n            dish.appendChild(dishTop);\n            dish.appendChild(description);\n\n            category.appendChild(dish);\n        });\n\n        categories.appendChild(category);\n    });\n\n    menu.appendChild(heading);\n    menu.appendChild(introduction);\n    menu.appendChild(categories);\n\n    content.appendChild(menu);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;