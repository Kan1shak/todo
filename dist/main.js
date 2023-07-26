/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    user-select: none;
}

:root {
    --bold-title: 32px;
    --normal-title: 24px;
    --small-title: 18px;
    --para-text: 14px;
}

h2 {
    font-size: var(--normal-title);
}

h4{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--small-title);
}

p {
    font-size: var(--para-text);
}
.task-container > p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: fit-content;
}

button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #00000000;
    background-color: #ffffff;
    color: #000000;
    transition: all 0.2s ease-in-out;
}

button:hover {
    background-color: #f1f1f1;
    border: 1px solid #000000;
}   

.container {
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
    display: grid;
    grid-template-columns:1fr 3fr;
}

.sidebar {
    background-color: aliceblue;
    padding: 30px;
    overflow: auto;
}

.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-content {
    padding: 30px;
    overflow: auto;
}

.proj-title,.folder-title {
    font-weight: 600;
    padding: 1rem 1.5rem;
    background-color: #ffffff;
    margin-bottom: 5px;
    border-radius: 5px;
    border: 1px solid #00000000;
    transition: all 0.2s ease-in-out;
}

.proj-title:hover, .folder-title:hover {
    background-color: #f1f1f1;
    border: 1px solid #000000;
}

.proj-title.selected, .folder-title.selected {
    background-color: #cac8c8;
}

[class *= "-container"] {
    margin-top: 2rem;
}

.add-proj-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
}

.add-proj-content form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.add-proj-content input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #00000000;
}

.add-proj-content input:first-child {
    margin-top: 1rem;
}

.add-proj-content input:hover {
    border: 1px solid #000000;
    background-color: #f1f1f1;
}

.add-proj-content input:focus {
    outline: none;
    border: 1px solid #000000;
}

.add-proj-content form > button {
    margin-top: 1rem;
    background-color: #000000;
    color: #ffffff;
    margin-left: 1rem;
}

.add-proj-heading button {
    color: #520b0b;
    background-color: #fbc7c7;
    font-weight: 900;
}

.add-proj-heading button:hover {
    background-color: #ffcccc;
    border: 1px solid #ffffff00;
    box-shadow: 0px 0px 0px 2px #ff5757;
}

.add-proj-heading button:focus {
    outline: none;
}

.form-selected {
    transform: translate(-50%, -50%) scale(1) !important;
    z-index: 100;
}

.add-task-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    width: auto;
    transition: all 0.2s ease-in-out;
}

.add-task-content form > button {
    margin-top: 1rem;
    background-color: #000000;
    color: #ffffff;
}

.add-task-content form > button:hover {
    background-color: #f1f1f1;
    border: 1px solid #000000;
    color: #000000;
}

.add-task-content form > button:focus {
    outline: none;
}

.add-task-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.add-task-heading button {
    color: #520b0b;
    background-color: #fbc7c7;
    font-weight: 900;
}

.add-task-heading button:hover {
    background-color: #ffcccc;
    border: 1px solid #ffffff00;
    box-shadow: 0px 0px 0px 2px #ff5757;
}

.add-task-content input,textarea {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #3e3e3e;
    resize: none;
}

.add-task-content input:hover,textarea:hover {
    border: 1px solid #000000;
    background-color: #f1f1f1;
}

.add-task-content input:focus,textarea:focus {
    outline: none;
    border: 1px solid #000000;
}

.add-task-content form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.251);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    transition: all 0.2s ease-in-out;
}

.overlay.active {
    display: block;
}

.task-item {
    padding: 1rem 1.5rem;
    background-color: #ffffff;
    margin-bottom: 5px;
    border-radius: 5px;
    border: 1px solid #00000000;
    transition: all 0.2s ease-in-out;
    position: relative;
    text-overflow: ellipsis;
}

.task-status {
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    scale: 3.0;
}

.task-item.high .task-status {
    accent-color: #ff0000;
}

.task-item.medium .task-status {
    accent-color: #ffcc00;
}

.task-item.low .task-status {
    accent-color: #00ff00;
}

.task-desc {
    font-size: 14px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-right: 2rem;
}

.task-desc.expanded {
    color: #333;
    overflow: visible;
    display: -webkit-box;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
  }

.done {
    text-decoration: line-through;
    color: #999;
}

.task-item.done {
    border-left: 7px solid #0026ff;
}

.low {
    border-left: 7px solid #00ff00;
}

.medium {
    border-left: 7px solid #ffcc00;
}

.high {
    border-left: 7px solid #ff0000;
}

.proj-heading {
    margin-top: 2rem;
}

.task-buttons {
    margin-top: 1rem;
    display:none;
}

.task-buttons button {
    margin-left: 0.5rem;
    border: 1px solid #a3a3a3;
}

.task-buttons.unhidden {
    display: flex;
    justify-content: flex-start;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    user-select: none;\n}\n\n:root {\n    --bold-title: 32px;\n    --normal-title: 24px;\n    --small-title: 18px;\n    --para-text: 14px;\n}\n\nh2 {\n    font-size: var(--normal-title);\n}\n\nh4{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: var(--small-title);\n}\n\np {\n    font-size: var(--para-text);\n}\n.task-container > p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: fit-content;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.2s ease-in-out;\n}\n\nbutton:hover {\n    background-color: #f1f1f1;\n    border: 1px solid #000000;\n}   \n\n.container {\n    width: 100%;\n    height: 100vh;\n    background-color: #f1f1f1;\n    display: grid;\n    grid-template-columns:1fr 3fr;\n}\n\n.sidebar {\n    background-color: aliceblue;\n    padding: 30px;\n    overflow: auto;\n}\n\n.heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main-content {\n    padding: 30px;\n    overflow: auto;\n}\n\n.proj-title,.folder-title {\n    font-weight: 600;\n    padding: 1rem 1.5rem;\n    background-color: #ffffff;\n    margin-bottom: 5px;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n    transition: all 0.2s ease-in-out;\n}\n\n.proj-title:hover, .folder-title:hover {\n    background-color: #f1f1f1;\n    border: 1px solid #000000;\n}\n\n.proj-title.selected, .folder-title.selected {\n    background-color: #cac8c8;\n}\n\n[class *= \"-container\"] {\n    margin-top: 2rem;\n}\n\n.add-proj-content {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: #ffffff;\n    padding: 2rem;\n    border-radius: 10px;\n    transition: all 0.2s ease-in-out;\n}\n\n.add-proj-content form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.add-proj-content input {\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n}\n\n.add-proj-content input:first-child {\n    margin-top: 1rem;\n}\n\n.add-proj-content input:hover {\n    border: 1px solid #000000;\n    background-color: #f1f1f1;\n}\n\n.add-proj-content input:focus {\n    outline: none;\n    border: 1px solid #000000;\n}\n\n.add-proj-content form > button {\n    margin-top: 1rem;\n    background-color: #000000;\n    color: #ffffff;\n    margin-left: 1rem;\n}\n\n.add-proj-heading button {\n    color: #520b0b;\n    background-color: #fbc7c7;\n    font-weight: 900;\n}\n\n.add-proj-heading button:hover {\n    background-color: #ffcccc;\n    border: 1px solid #ffffff00;\n    box-shadow: 0px 0px 0px 2px #ff5757;\n}\n\n.add-proj-heading button:focus {\n    outline: none;\n}\n\n.form-selected {\n    transform: translate(-50%, -50%) scale(1) !important;\n    z-index: 100;\n}\n\n.add-task-content {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: #ffffff;\n    padding: 2rem;\n    border-radius: 10px;\n    width: auto;\n    transition: all 0.2s ease-in-out;\n}\n\n.add-task-content form > button {\n    margin-top: 1rem;\n    background-color: #000000;\n    color: #ffffff;\n}\n\n.add-task-content form > button:hover {\n    background-color: #f1f1f1;\n    border: 1px solid #000000;\n    color: #000000;\n}\n\n.add-task-content form > button:focus {\n    outline: none;\n}\n\n.add-task-heading {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n\n.add-task-heading button {\n    color: #520b0b;\n    background-color: #fbc7c7;\n    font-weight: 900;\n}\n\n.add-task-heading button:hover {\n    background-color: #ffcccc;\n    border: 1px solid #ffffff00;\n    box-shadow: 0px 0px 0px 2px #ff5757;\n}\n\n.add-task-content input,textarea {\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid #3e3e3e;\n    resize: none;\n}\n\n.add-task-content input:hover,textarea:hover {\n    border: 1px solid #000000;\n    background-color: #f1f1f1;\n}\n\n.add-task-content input:focus,textarea:focus {\n    outline: none;\n    border: 1px solid #000000;\n}\n\n.add-task-content form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.251);\n    -webkit-backdrop-filter: blur(5px);\n    backdrop-filter: blur(5px);\n    transition: all 0.2s ease-in-out;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.task-item {\n    padding: 1rem 1.5rem;\n    background-color: #ffffff;\n    margin-bottom: 5px;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n    transition: all 0.2s ease-in-out;\n    position: relative;\n    text-overflow: ellipsis;\n}\n\n.task-status {\n    position: absolute;\n    right: 1.5rem;\n    bottom: 1.5rem;\n    scale: 3.0;\n}\n\n.task-item.high .task-status {\n    accent-color: #ff0000;\n}\n\n.task-item.medium .task-status {\n    accent-color: #ffcc00;\n}\n\n.task-item.low .task-status {\n    accent-color: #00ff00;\n}\n\n.task-desc {\n    font-size: 14px;\n    color: #999;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    margin-right: 2rem;\n}\n\n.task-desc.expanded {\n    color: #333;\n    overflow: visible;\n    display: -webkit-box;\n    -webkit-line-clamp: unset;\n    -webkit-box-orient: unset;\n  }\n\n.done {\n    text-decoration: line-through;\n    color: #999;\n}\n\n.task-item.done {\n    border-left: 7px solid #0026ff;\n}\n\n.low {\n    border-left: 7px solid #00ff00;\n}\n\n.medium {\n    border-left: 7px solid #ffcc00;\n}\n\n.high {\n    border-left: 7px solid #ff0000;\n}\n\n.proj-heading {\n    margin-top: 2rem;\n}\n\n.task-buttons {\n    margin-top: 1rem;\n    display:none;\n}\n\n.task-buttons button {\n    margin-left: 0.5rem;\n    border: 1px solid #a3a3a3;\n}\n\n.task-buttons.unhidden {\n    display: flex;\n    justify-content: flex-start;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/toast.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/toast.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.toast-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
}

.toast {
    transform: translate(0, 100%);
    background-color: #000000;
    color: #ffffff;
    padding: 1rem;
    border-radius: 5px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toast button {
    background-color: #00000000;
    color: #2b2b2b;
    border: 0px solid #ffffff;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    margin-left: 0.2rem;
    cursor: pointer;
    font-weight: bold;
}

.toast.visible {
    opacity: 1;
    transform: translate(0, 0);
}

.error {
    background-color: #e39090;
    color: #ffffff;
}

.error::before {
    content: "❗";
    margin-right: 0.5rem;
}

.success {
    background-color: #86d586;
    color: #000000;
}

.success::before {
    content: "✅";
    margin-right: 0.5rem;
}

.info {
    background-color: #efefff;
    color: #13073e;
    box-shadow: 0px 0px 0px 2px #13073e;
    margin-top: calc(0.4rem + 2px);
}

.info::before {
    content: "ℹ️";
    margin-right: 0.5rem;
}

.warning {
    background-color: #e3dcb1;
    color: #000000;
}

.warning::before {
    content: "⚠️";
    margin-right: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/toast.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,qBAAqB;IACrB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,cAAc;IACd,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB","sourcesContent":[".toast-container {\n    position: fixed;\n    bottom: 2rem;\n    right: 2rem;\n    z-index: 100;\n}\n\n.toast {\n    transform: translate(0, 100%);\n    background-color: #000000;\n    color: #ffffff;\n    padding: 1rem;\n    border-radius: 5px;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n    margin-bottom: 0.4rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.toast button {\n    background-color: #00000000;\n    color: #2b2b2b;\n    border: 0px solid #ffffff;\n    padding: 0.2rem 0.5rem;\n    border-radius: 5px;\n    margin-left: 0.2rem;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.toast.visible {\n    opacity: 1;\n    transform: translate(0, 0);\n}\n\n.error {\n    background-color: #e39090;\n    color: #ffffff;\n}\n\n.error::before {\n    content: \"❗\";\n    margin-right: 0.5rem;\n}\n\n.success {\n    background-color: #86d586;\n    color: #000000;\n}\n\n.success::before {\n    content: \"✅\";\n    margin-right: 0.5rem;\n}\n\n.info {\n    background-color: #efefff;\n    color: #13073e;\n    box-shadow: 0px 0px 0px 2px #13073e;\n    margin-top: calc(0.4rem + 2px);\n}\n\n.info::before {\n    content: \"ℹ️\";\n    margin-right: 0.5rem;\n}\n\n.warning {\n    background-color: #e3dcb1;\n    color: #000000;\n}\n\n.warning::before {\n    content: \"⚠️\";\n    margin-right: 0.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/toast.css":
/*!***********************!*\
  !*** ./src/toast.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./toast.css */ "./node_modules/css-loader/dist/cjs.js!./src/toast.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dataHolder.js":
/*!***************************!*\
  !*** ./src/dataHolder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectHolder: () => (/* binding */ ProjectHolder),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
// A factory function that creates a ProjectHolder object to manage projects and tasks
function ProjectHolder(){
    const projects = [];

    // Function to get tasks categorized into "General", "High Priority", and "Completed"
    const getFolders = () => {
        const General = [];
        const HighPriority = [];
        const Completed = [];

        // Loop through all projects and their tasks to categorize them
        getProjects().forEach(project => {
            project.getTasks().forEach(task => {
                if (task.priority === 'High' && !task.status){
                    HighPriority.push(task);
                }
                if (task.status){
                    Completed.push(task);
                } else {
                    General.push(task);
                }
            });
        });

        // Return an object containing categorized tasks
        return { General, "High Priority": HighPriority, Completed };
    }

    // Function to find a task by its title and return both the task and its parent project
    const findTask = (taskName) => {
        let foundTask = null;
        let foundProject = null;

        // Loop through all projects and their tasks to find the matching task
        getProjects().forEach(project => {
            project.getTasks().forEach(task => {
                if (task.title === taskName){
                    foundTask = task;
                    foundProject = project;
                }
            });
        });

        // Return an array containing the found task and its parent project
        return [foundTask, foundProject];
    }

    // Function to get the list of projects
    const getProjects = () => projects;

    // Function to add a new project to the projects list
    const addProject = (name, category = 'General') => {
        projects.push(new Project(name, category));
    }

    // Function to remove a project from the projects list
    const removeProject = (project) => {
        const index = projects.indexOf(project);
        projects.splice(index, 1);
    }

    const addProjectLocalStorage = (project) => {
        projects.push(project);
    }

    // Return an object with the available functions and data
    return { getProjects, addProject, removeProject, getFolders, findTask, addProjectLocalStorage };
};

// Constructor function to create Project objects
function Project(name, category){
    this.name = name;
    this.category = category;
    this.tasks = [];

    // Function to add a task to the project
    this.addTask = (title, priority, description, status = false) => {
        this.tasks.push(new Task(title, priority, description, status));
    }

    // Function to remove a task from the project
    this.removeTask = (task) => {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    // Function to get the list of tasks in the project
    this.getTasks = () => {
        return this.tasks;
    }
    
    this.addTaskLocalStorage = (task) => {
        this.tasks.push(task);
    }
}

// Constructor function to create Task objects
function Task(title, priority, description, status){
    this.title = title;
    this.priority = priority;
    this.description = description;
    this.status = status;
}

// Export the ProjectHolder, Project, and Task functions to be used in other modules


/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fireEventListeners: () => (/* binding */ fireEventListeners),
/* harmony export */   updateFolders: () => (/* binding */ updateFolders),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.js */ "./src/toast.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
// Import the required functions from other modules




// DOM elements
const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container');
const projectAddButton = document.getElementById('add-proj');
const taskAddButton = document.getElementById('add-task');
const projDialogue = document.querySelector('.add-proj-content');
const taskDialogue = document.querySelector('.add-task-content');
const overlay = document.querySelector('#overlay');

// Variables to keep track of selected project, task, folder, and item type (project or folder)
let selectedProj = -1;
let selectedTask = null;
let selectedFolder = null;
let selectedItemType = 'project';

// Event handler to select a project or folder
const selectProj = (e) => {
    // de-selecting the previously selected project
    document.querySelectorAll('.selected').forEach(proj => {
        if (proj.classList.contains('selected')){
            proj.classList.remove('selected');
            return;
        }
    });
    //  Check if there are any projects
    if (_index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects()[0] != undefined){
        e.target.classList.add('selected');
    }
    
    //  Check if the selected element is a folder or a project and update the tasks for the selected item type
    if (e.target.classList.contains('folder-title')){
        selectedItemType = 'folder';
        selectedFolder = e.target.textContent;
        updateTasks(_index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getFolders()[selectedFolder]);
    }
    else {
        selectedItemType = 'project';
        selectedProj = e.target.dataset.index;
        updateTasks(_index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects()[selectedProj]);
    }
}

// Event handler to delete a task
const deleteTask = (e) => {
    let task,project;
    [task,project] = _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.findTask(e.target.parentElement.parentElement.firstChild.textContent);
    project.removeTask(task);
    //  Update the tasks display for the current project or folder
    updateTasks(getCurrentProj());
}

// Function to update the projects list display
const updateProject = () => {
    projectContainer.textContent = '';
    const currentProjects = _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects();
    currentProjects.forEach((project,index) => {
        const projTitle = document.createElement('h4');
        projTitle.classList.add('proj-title');
        projTitle.textContent = project.name;
        projTitle.addEventListener('click', selectProj);
        projTitle.dataset.index = index;
        projectContainer.appendChild(projTitle);
        // Set the selected project index and update tasks for the first project by default
        selectedProj = index;
        updateTasks(_index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects()[selectedProj]);
    });
}

// Function to update the tasks display for a project or folder
const updateTasks = (project) => {
    const where = selectedItemType;
    taskContainer.textContent = '';
    let currentTasks;
    if (where === 'folder'){
        currentTasks = project;
        // Display a toast message if there are no tasks in the folder
        if (currentTasks[0] === undefined) {
            (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.deployToast)('No tasks in this folder!','info');
        }
    }
    if (where === 'project'){
        currentTasks = project.getTasks();
    }
    currentTasks.forEach(task => {
        // creating task item
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = currentTasks.indexOf(task);
        // creating task title
        const taskTitle = document.createElement('h4');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        // creating task description
        const taskDesc = document.createElement('p');
        taskDesc.textContent =  task.description  === '' ? "No description provided." : task.description;
        taskDesc.classList.add('task-desc');
        taskItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('task-status')){
                taskDesc.classList.toggle('expanded');
                taskButtons.classList.toggle('unhidden');
            }
        });
        // div for task buttons
        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');
        // creating task edit button
        const taskEditButton = document.createElement('button');
        taskEditButton.classList.add('task-edit');
        taskEditButton.textContent = 'Edit';
        taskEditButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openTaskDialogue(_index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.findTask(taskTitle.textContent)[0]);
        });
        // create task delete button
        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('task-delete');
        taskDeleteButton.textContent = 'Delete';
        taskDeleteButton.addEventListener('click', (e)=> {
            e.stopPropagation();
            deleteTask(e);
        });
        // creating task status checkbox
        const taskStatus = document.createElement('input');
        taskStatus.type = 'checkbox';
        taskStatus.classList.add('task-status');
        if (task.status){
            taskStatus.checked = true;
            taskStatus.classList.add('done');
        }
        else {
            taskStatus.checked = false;
            taskStatus.classList.add('not-done');
        }
        // adding task event listener to switch status
        taskStatus.addEventListener('click', (e) => {
            task.status = !task.status;
            taskTitle.classList.toggle('done');
            taskDesc.classList.toggle('done');
            taskItem.classList.toggle('done');
            updateTasks(getCurrentProj());
        });
        const checkStatus = () => {
            if (task.status){
                taskStatus.checked = true;
                taskTitle.classList.add('done');
                taskDesc.classList.add('done');
                taskItem.classList.add('done');
            }
            else {
                taskStatus.checked = false;
                taskTitle.classList.remove('done');
                taskDesc.classList.remove('done');
                taskItem.classList.remove('done');
            }
        }
        // setting task priority
        taskItem.classList.add(task.priority.toLowerCase());
        // adding all to task item
        checkStatus();
        taskItem.appendChild(taskTitle);
        taskItem.appendChild(taskDesc);
        taskItem.appendChild(taskStatus);
        taskButtons.appendChild(taskEditButton);
        taskButtons.appendChild(taskDeleteButton);
        taskItem.appendChild(taskButtons);
        taskContainer.append(taskItem);
    })
    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storeProjects)();
}

// Function to open the project dialogue
const openProjDialogue = () => {
    projDialogue.classList.add('form-selected');
    overlay.classList.add('active');
}

// Function to close the project dialogue
const closeProjDialogue = () => {
    const projTitle = document.querySelector('#proj-name');
    const projCategory = document.querySelector('#proj-category');
    projDialogue.classList.remove('form-selected');
    overlay.classList.remove('active');
    projTitle.value = '';
    projCategory.value = '';
}

// Function to open the task dialogue
const openTaskDialogue = (task) => {
    if (task){
        const taskTitle = document.querySelector('#task-name');
        const taskPriority = document.querySelector('#task-priority');
        const taskDesc = document.querySelector('#task-description');
        const addTaskButton = document.querySelector('#add-task-btn');

        taskTitle.value = task.title;
        taskPriority.value = task.priority;
        taskDesc.value = task.description;
        addTaskButton.textContent = 'Edit Task';
        selectedTask = task;
    }
    taskDialogue.classList.add('form-selected');
    overlay.classList.add('active');
}

// Function to close the task dialogue
const closeTaskDialogue = () => {
    const taskTitle = document.querySelector('#task-name');
    const taskPriority = document.querySelector('#task-priority');
    const taskDesc = document.querySelector('#task-description');
    taskDialogue.classList.remove('form-selected');
    overlay.classList.remove('active');
    taskTitle.value = '';
    taskPriority.value = 'Medium';
    taskDesc.value = '';
    selectedTask = null;
}

// Function to get the current project or folder based on the selected item type
const getCurrentProj = () => {
    let proj;
    if (selectedItemType === 'project'){
        proj = _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects()[selectedProj];
    } if (selectedItemType === 'folder') {
        proj = _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getFolders()[selectedFolder];
    }
    return proj;
}
// Function to update the folders list display
const updateFolders = () => {
    const folders = _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getFolders();
    const folderContainer = document.querySelector('.folder-container');
    folderContainer.textContent = '';
    for (const folder in folders) {
        const folderItem = document.createElement('div');
        folderItem.classList.add('folder-item');
        const folderTitle = document.createElement('h4');
        folderTitle.classList.add('folder-title');
        folderTitle.textContent = folder;
        folderTitle.addEventListener('click', selectProj);
        folderItem.appendChild(folderTitle);
        folderContainer.appendChild(folderItem);
    }
};

// Function to handle all the event listeners
const fireEventListeners = () => {
    projectAddButton.addEventListener('click', () =>{
        openProjDialogue();
        selectedItemType = 'project';
    });
    // event listner for proj form
    const projForm = document.getElementById('proj-form');
    projForm.addEventListener('submit', (e)=>{
        // Preventing page refresh
        e.preventDefault();
        const projTitle = document.querySelector('#proj-name').value;
        const projCategory = document.querySelector('#proj-category').value;
        _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.addProject(projTitle, projCategory === '' ? 'General' : projCategory);
        updateProject();
        closeProjDialogue();
        const lastProject = document.querySelector(`[data-index=\"${selectedProj}\"]`);
        lastProject.classList.add('selected');
        (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.deployToast)('Project added!','success');
        selectProj({target:lastProject});
    })
    // event listner for closing proj form
    const closeProjButton = document.getElementById('close-proj');
    closeProjButton.addEventListener('click', () => closeProjDialogue());
    // event listner for closing forms when click outside form
    document.body.addEventListener('click', (e)=>{
        if(e.target.classList.contains('overlay')){
            closeProjDialogue();
            closeTaskDialogue();
        }
    });

    taskAddButton.addEventListener('click', () => {
        if (selectedProj != -1 && selectedProj != undefined){
            if (selectedItemType === 'project'){
                openTaskDialogue();
            }
            else {
                (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.deployToast)('You can only add tasks in a project!','error');
            }
        }
        else {
            (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.deployToast)('You need to make a project first!','error');
        }
    });
    // event listener for task form
    const taskForm =  document.getElementById('task-form');
    taskForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        const taskTitle = document.querySelector('#task-name').value;
        const taskPriority = document.querySelector('#task-priority').value;
        const taskDesc = document.querySelector('#task-description').value;
        if (selectedTask){
            selectedTask.title = taskTitle;
            selectedTask.priority = taskPriority;
            selectedTask.description = taskDesc;
            updateTasks(getCurrentProj());
            closeTaskDialogue();
            (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.deployToast)('Task edited!','success');
            selectedTask = null;
        }
        else {
            _index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects()[selectedProj].addTask(taskTitle, taskPriority, taskDesc);
            updateTasks(_index_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsList.getProjects()[selectedProj]);
            closeTaskDialogue();
            (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.deployToast)('Task added!','success');  
        }
    })
    // event listner for closing task form
    const closeTaskButton = document.getElementById('close-task');
    closeTaskButton.addEventListener('click', () => closeTaskDialogue());
}
// Export the necessary functions to be used in the index.js


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsList: () => (/* binding */ ProjectsList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");
/* harmony import */ var _dataHolder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataHolder.js */ "./src/dataHolder.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
// Importing the required styles and functions from other modules




// Creating a ProjectsList object using the ProjectHolder factory function
const ProjectsList = (0,_dataHolder_js__WEBPACK_IMPORTED_MODULE_2__.ProjectHolder)();

// Calling the function to set up event listeners for buttons and forms
(0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.fireEventListeners)();

// Calling the function to retrieve projects from local storage
(0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.retrieveProjects)();

// Calling the functions to update the display of projects and folders upon page load
(0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.updateProject)();
(0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.updateFolders)();

// Exporting the ProjectsList object to be used in other modules



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveProjects: () => (/* binding */ retrieveProjects),
/* harmony export */   storeProjects: () => (/* binding */ storeProjects)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _dataHolder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataHolder.js */ "./src/dataHolder.js");


const storeProjects = () => {
    localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsList.getProjects()));
}

//retrieve projects from local storage and store it in the project holder
function retrieveProjects(){
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (projects) {
        projects.forEach(project => {
            const newProject = new _dataHolder_js__WEBPACK_IMPORTED_MODULE_1__.Project(project.name, project.category);
            //add tasks to this project
            project.tasks.forEach(task => {
                const newTask = new _dataHolder_js__WEBPACK_IMPORTED_MODULE_1__.Task(task.title, task.priority, task.description, task.status);
                newProject.addTaskLocalStorage(newTask);
            });
            _index_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsList.addProjectLocalStorage(newProject);
        });
    }
}



/***/ }),

/***/ "./src/toast.js":
/*!**********************!*\
  !*** ./src/toast.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deployToast: () => (/* binding */ deployToast)
/* harmony export */ });
/* harmony import */ var _toast_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.css */ "./src/toast.css");
// Importing the required styles for the toast messages


// Toast Constructor function
function Toast(content, type, container) {
    this.content = content;
    this.type = type;
    // Creating the toast element
    const toast = document.createElement('div');
    const toastContent = document.createElement('span');
    const toastClose = document.createElement('button');
    toastClose.textContent = 'x';
    toast.appendChild(toastContent);
    toast.appendChild(toastClose);
    toast.classList.add('toast');
    toast.classList.add(type);
    toastContent.textContent = content;
    this.node = toast;

    // Show the toast message
    this.show = () => {
        container.appendChild(toast);
        toast.classList.add('visible');
    }

    // Remove the toast message
    this.remove = () => {
        toast.classList.remove('visible');
    }

    // Event listener to close the toast message when close button is clicked
    toastClose.addEventListener('click', this.remove);
}

// Helper function to sleep for a given duration
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to display the toast message
const deployToast = (content, type) => {
    // Get the toast container, and if its not present, create it
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.classList.add('toast-container');
        document.body.appendChild(toastContainer);
    }

    // Create a new Toast instance and show it
    const toast = new Toast(content, type, toastContainer);
    toast.show();

    // Set a timer to remove the toast after 3 seconds
    sleep(3000).then(() => {
        // Fade out the toast
        toast.remove();
        // Wait for the fade-out animation to finish before removing the toast element from the DOM
        sleep(250).then(() => {
            toast.node.remove();
        });
        // Check if the toast container is empty, and if so, remove it from the DOM
        sleep(3000).then(() => {
            if (toastContainer.childElementCount == 0) {
                toastContainer.remove();
            }
        });
    });
}

// Exporting the function to make it available in other modules


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9hc3QuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9hc3QuY3NzPzIwNmMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGFIb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvYXN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAgIC0tYm9sZC10aXRsZTogMzJweDtcbiAgICAtLW5vcm1hbC10aXRsZTogMjRweDtcbiAgICAtLXNtYWxsLXRpdGxlOiAxOHB4O1xuICAgIC0tcGFyYS10ZXh0OiAxNHB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtdGl0bGUpO1xufVxuXG5oNHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC10aXRsZSk7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYS10ZXh0KTtcbn1cbi50YXNrLWNvbnRhaW5lciA+IHAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn0gICBcblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAzZnI7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcm9qLXRpdGxlLC5mb2xkZXItdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnByb2otdGl0bGU6aG92ZXIsIC5mb2xkZXItdGl0bGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLnByb2otdGl0bGUuc2VsZWN0ZWQsIC5mb2xkZXItdGl0bGUuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWM4Yzg7XG59XG5cbltjbGFzcyAqPSBcIi1jb250YWluZXJcIl0ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5hZGQtcHJvai1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkLXByb2otY29udGVudCBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5hZGQtcHJvai1jb250ZW50IGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDAwO1xufVxuXG4uYWRkLXByb2otY29udGVudCBpbnB1dDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQ6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmFkZC1wcm9qLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uYWRkLXByb2otaGVhZGluZyBidXR0b24ge1xuICAgIGNvbG9yOiAjNTIwYjBiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmM3Yzc7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmFkZC1wcm9qLWhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYwMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggI2ZmNTc1Nztcbn1cblxuLmFkZC1wcm9qLWhlYWRpbmcgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1zZWxlY3RlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5hZGQtdGFzay1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkLXRhc2stY29udGVudCBmb3JtID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hZGQtdGFzay1jb250ZW50IGZvcm0gPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmFkZC10YXNrLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFkZC10YXNrLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hZGQtdGFzay1oZWFkaW5nIGJ1dHRvbiB7XG4gICAgY29sb3I6ICM1MjBiMGI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYzdjNztcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uYWRkLXRhc2staGVhZGluZyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjZmY1NzU3O1xufVxuXG4uYWRkLXRhc2stY29udGVudCBpbnB1dCx0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZTNlM2U7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uYWRkLXRhc2stY29udGVudCBpbnB1dDpob3Zlcix0ZXh0YXJlYTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uYWRkLXRhc2stY29udGVudCBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uYWRkLXRhc2stY29udGVudCBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjc1cmVtO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNTEpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzay1zdGF0dXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMS41cmVtO1xuICAgIGJvdHRvbTogMS41cmVtO1xuICAgIHNjYWxlOiAzLjA7XG59XG5cbi50YXNrLWl0ZW0uaGlnaCAudGFzay1zdGF0dXMge1xuICAgIGFjY2VudC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLnRhc2staXRlbS5tZWRpdW0gLnRhc2stc3RhdHVzIHtcbiAgICBhY2NlbnQtY29sb3I6ICNmZmNjMDA7XG59XG5cbi50YXNrLWl0ZW0ubG93IC50YXNrLXN0YXR1cyB7XG4gICAgYWNjZW50LWNvbG9yOiAjMDBmZjAwO1xufVxuXG4udGFzay1kZXNjIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi50YXNrLWRlc2MuZXhwYW5kZWQge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogdW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB1bnNldDtcbiAgfVxuXG4uZG9uZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi50YXNrLWl0ZW0uZG9uZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAyNmZmO1xufVxuXG4ubG93IHtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMGZmMDA7XG59XG5cbi5tZWRpdW0ge1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmY2MwMDtcbn1cblxuLmhpZ2gge1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmMDAwMDtcbn1cblxuLnByb2otaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhc2stYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbi50YXNrLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XG59XG5cbi50YXNrLWJ1dHRvbnMudW5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHlCQUF5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LGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7O0FBRUY7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ib2xkLXRpdGxlOiAzMnB4O1xcbiAgICAtLW5vcm1hbC10aXRsZTogMjRweDtcXG4gICAgLS1zbWFsbC10aXRsZTogMThweDtcXG4gICAgLS1wYXJhLXRleHQ6IDE0cHg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtdGl0bGUpO1xcbn1cXG5cXG5oNHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtdGl0bGUpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1wYXJhLXRleHQpO1xcbn1cXG4udGFzay1jb250YWluZXIgPiBwIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxufSAgIFxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAzZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2otdGl0bGUsLmZvbGRlci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2otdGl0bGU6aG92ZXIsIC5mb2xkZXItdGl0bGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbn1cXG5cXG4ucHJvai10aXRsZS5zZWxlY3RlZCwgLmZvbGRlci10aXRsZS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWM4Yzg7XFxufVxcblxcbltjbGFzcyAqPSBcXFwiLWNvbnRhaW5lclxcXCJdIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmFkZC1wcm9qLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1wcm9qLWNvbnRlbnQgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDA7XFxufVxcblxcbi5hZGQtcHJvai1jb250ZW50IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uYWRkLXByb2otY29udGVudCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxufVxcblxcbi5hZGQtcHJvai1jb250ZW50IGZvcm0gPiBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5hZGQtcHJvai1oZWFkaW5nIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjNTIwYjBiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjN2M3O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkLXByb2otaGVhZGluZyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjZmY1NzU3O1xcbn1cXG5cXG4uYWRkLXByb2otaGVhZGluZyBidXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS1zZWxlY3RlZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpICFpbXBvcnRhbnQ7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtdGFzay1jb250ZW50IGZvcm0gPiBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCBmb3JtID4gYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5hZGQtdGFzay1oZWFkaW5nIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjNTIwYjBiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjN2M3O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkLXRhc2staGVhZGluZyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjZmY1NzU3O1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCBpbnB1dCx0ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZTNlM2U7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRlbnQgaW5wdXQ6aG92ZXIsdGV4dGFyZWE6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxufVxcblxcbi5hZGQtdGFzay1jb250ZW50IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNTEpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGFzay1zdGF0dXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxLjVyZW07XFxuICAgIGJvdHRvbTogMS41cmVtO1xcbiAgICBzY2FsZTogMy4wO1xcbn1cXG5cXG4udGFzay1pdGVtLmhpZ2ggLnRhc2stc3RhdHVzIHtcXG4gICAgYWNjZW50LWNvbG9yOiAjZmYwMDAwO1xcbn1cXG5cXG4udGFzay1pdGVtLm1lZGl1bSAudGFzay1zdGF0dXMge1xcbiAgICBhY2NlbnQtY29sb3I6ICNmZmNjMDA7XFxufVxcblxcbi50YXNrLWl0ZW0ubG93IC50YXNrLXN0YXR1cyB7XFxuICAgIGFjY2VudC1jb2xvcjogIzAwZmYwMDtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM5OTk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbi50YXNrLWRlc2MuZXhwYW5kZWQge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHVuc2V0O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHVuc2V0O1xcbiAgfVxcblxcbi5kb25lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4udGFzay1pdGVtLmRvbmUge1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDI2ZmY7XFxufVxcblxcbi5sb3cge1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMGZmMDA7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmZmNjMDA7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZmYwMDAwO1xcbn1cXG5cXG4ucHJvai1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLnRhc2stYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLnRhc2stYnV0dG9ucyBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcbn1cXG5cXG4udGFzay1idXR0b25zLnVuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b2FzdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDJyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4udG9hc3Qge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvYXN0IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICAgIGNvbG9yOiAjMmIyYjJiO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNmZmZmZmY7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b2FzdC52aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xufVxuXG4uZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzkwOTA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5lcnJvcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKdl1wiO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZDU4NjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnN1Y2Nlc3M6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLinIVcIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZmY7XG4gICAgY29sb3I6ICMxMzA3M2U7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICMxMzA3M2U7XG4gICAgbWFyZ2luLXRvcDogY2FsYygwLjRyZW0gKyAycHgpO1xufVxuXG4uaW5mbzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKEue+4j1wiO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGNiMTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLndhcm5pbmc6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLimqDvuI9cIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2FzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9hc3QtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDJyZW07XFxuICAgIHJpZ2h0OiAycmVtO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi50b2FzdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2FzdCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICAgIGNvbG9yOiAjMmIyYjJiO1xcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2FzdC52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzkwOTA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZXJyb3I6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinZdcXFwiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZkNTg2O1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnN1Y2Nlc3M6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinIVcXFwiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmZmO1xcbiAgICBjb2xvcjogIzEzMDczZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICMxMzA3M2U7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoMC40cmVtICsgMnB4KTtcXG59XFxuXFxuLmluZm86OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLihLnvuI9cXFwiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkY2IxO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLndhcm5pbmc6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLimqDvuI9cXFwiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9hc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2FzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBQcm9qZWN0SG9sZGVyIG9iamVjdCB0byBtYW5hZ2UgcHJvamVjdHMgYW5kIHRhc2tzXG5mdW5jdGlvbiBQcm9qZWN0SG9sZGVyKCl7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGdldCB0YXNrcyBjYXRlZ29yaXplZCBpbnRvIFwiR2VuZXJhbFwiLCBcIkhpZ2ggUHJpb3JpdHlcIiwgYW5kIFwiQ29tcGxldGVkXCJcbiAgICBjb25zdCBnZXRGb2xkZXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBHZW5lcmFsID0gW107XG4gICAgICAgIGNvbnN0IEhpZ2hQcmlvcml0eSA9IFtdO1xuICAgICAgICBjb25zdCBDb21wbGV0ZWQgPSBbXTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHByb2plY3RzIGFuZCB0aGVpciB0YXNrcyB0byBjYXRlZ29yaXplIHRoZW1cbiAgICAgICAgZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdIaWdoJyAmJiAhdGFzay5zdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICBIaWdoUHJpb3JpdHkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVkLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgY2F0ZWdvcml6ZWQgdGFza3NcbiAgICAgICAgcmV0dXJuIHsgR2VuZXJhbCwgXCJIaWdoIFByaW9yaXR5XCI6IEhpZ2hQcmlvcml0eSwgQ29tcGxldGVkIH07XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gZmluZCBhIHRhc2sgYnkgaXRzIHRpdGxlIGFuZCByZXR1cm4gYm90aCB0aGUgdGFzayBhbmQgaXRzIHBhcmVudCBwcm9qZWN0XG4gICAgY29uc3QgZmluZFRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICAgICAgbGV0IGZvdW5kVGFzayA9IG51bGw7XG4gICAgICAgIGxldCBmb3VuZFByb2plY3QgPSBudWxsO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgcHJvamVjdHMgYW5kIHRoZWlyIHRhc2tzIHRvIGZpbmQgdGhlIG1hdGNoaW5nIHRhc2tcbiAgICAgICAgZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRhc2tOYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRUYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGZvdW5kIHRhc2sgYW5kIGl0cyBwYXJlbnQgcHJvamVjdFxuICAgICAgICByZXR1cm4gW2ZvdW5kVGFzaywgZm91bmRQcm9qZWN0XTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IHByb2plY3QgdG8gdGhlIHByb2plY3RzIGxpc3RcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUsIGNhdGVnb3J5ID0gJ0dlbmVyYWwnKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZSwgY2F0ZWdvcnkpKTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IGZyb20gdGhlIHByb2plY3RzIGxpc3RcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RMb2NhbFN0b3JhZ2UgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgYXZhaWxhYmxlIGZ1bmN0aW9ucyBhbmQgZGF0YVxuICAgIHJldHVybiB7IGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRGb2xkZXJzLCBmaW5kVGFzaywgYWRkUHJvamVjdExvY2FsU3RvcmFnZSB9O1xufTtcblxuLy8gQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIFByb2plY3Qgb2JqZWN0c1xuZnVuY3Rpb24gUHJvamVjdChuYW1lLCBjYXRlZ29yeSl7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgdGFzayB0byB0aGUgcHJvamVjdFxuICAgIHRoaXMuYWRkVGFzayA9ICh0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBzdGF0dXMgPSBmYWxzZSkgPT4ge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sodGl0bGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgc3RhdHVzKSk7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIGEgdGFzayBmcm9tIHRoZSBwcm9qZWN0XG4gICAgdGhpcy5yZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGxpc3Qgb2YgdGFza3MgaW4gdGhlIHByb2plY3RcbiAgICB0aGlzLmdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hZGRUYXNrTG9jYWxTdG9yYWdlID0gKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuLy8gQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gY3JlYXRlIFRhc2sgb2JqZWN0c1xuZnVuY3Rpb24gVGFzayh0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBzdGF0dXMpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xufVxuXG4vLyBFeHBvcnQgdGhlIFByb2plY3RIb2xkZXIsIFByb2plY3QsIGFuZCBUYXNrIGZ1bmN0aW9ucyB0byBiZSB1c2VkIGluIG90aGVyIG1vZHVsZXNcbmV4cG9ydCB7IFByb2plY3RIb2xkZXIsIFByb2plY3QsIFRhc2sgfTsiLCIvLyBJbXBvcnQgdGhlIHJlcXVpcmVkIGZ1bmN0aW9ucyBmcm9tIG90aGVyIG1vZHVsZXNcbmltcG9ydCB7IGRlcGxveVRvYXN0IH0gZnJvbSAnLi90b2FzdC5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0c0xpc3QgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHN0b3JlUHJvamVjdHMgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG4vLyBET00gZWxlbWVudHNcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbmNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2onKTtcbmNvbnN0IHRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKTtcbmNvbnN0IHByb2pEaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvai1jb250ZW50Jyk7XG5jb25zdCB0YXNrRGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stY29udGVudCcpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG5cbi8vIFZhcmlhYmxlcyB0byBrZWVwIHRyYWNrIG9mIHNlbGVjdGVkIHByb2plY3QsIHRhc2ssIGZvbGRlciwgYW5kIGl0ZW0gdHlwZSAocHJvamVjdCBvciBmb2xkZXIpXG5sZXQgc2VsZWN0ZWRQcm9qID0gLTE7XG5sZXQgc2VsZWN0ZWRUYXNrID0gbnVsbDtcbmxldCBzZWxlY3RlZEZvbGRlciA9IG51bGw7XG5sZXQgc2VsZWN0ZWRJdGVtVHlwZSA9ICdwcm9qZWN0JztcblxuLy8gRXZlbnQgaGFuZGxlciB0byBzZWxlY3QgYSBwcm9qZWN0IG9yIGZvbGRlclxuY29uc3Qgc2VsZWN0UHJvaiA9IChlKSA9PiB7XG4gICAgLy8gZGUtc2VsZWN0aW5nIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHByb2plY3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKS5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgICBpZiAocHJvai5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpe1xuICAgICAgICAgICAgcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJvamVjdHNcbiAgICBpZiAoUHJvamVjdHNMaXN0LmdldFByb2plY3RzKClbMF0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgXG4gICAgLy8gIENoZWNrIGlmIHRoZSBzZWxlY3RlZCBlbGVtZW50IGlzIGEgZm9sZGVyIG9yIGEgcHJvamVjdCBhbmQgdXBkYXRlIHRoZSB0YXNrcyBmb3IgdGhlIHNlbGVjdGVkIGl0ZW0gdHlwZVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbGRlci10aXRsZScpKXtcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZSA9ICdmb2xkZXInO1xuICAgICAgICBzZWxlY3RlZEZvbGRlciA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICB1cGRhdGVUYXNrcyhQcm9qZWN0c0xpc3QuZ2V0Rm9sZGVycygpW3NlbGVjdGVkRm9sZGVyXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEl0ZW1UeXBlID0gJ3Byb2plY3QnO1xuICAgICAgICBzZWxlY3RlZFByb2ogPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICB1cGRhdGVUYXNrcyhQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdHMoKVtzZWxlY3RlZFByb2pdKTtcbiAgICB9XG59XG5cbi8vIEV2ZW50IGhhbmRsZXIgdG8gZGVsZXRlIGEgdGFza1xuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgbGV0IHRhc2sscHJvamVjdDtcbiAgICBbdGFzayxwcm9qZWN0XSA9IFByb2plY3RzTGlzdC5maW5kVGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgcHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgIC8vICBVcGRhdGUgdGhlIHRhc2tzIGRpc3BsYXkgZm9yIHRoZSBjdXJyZW50IHByb2plY3Qgb3IgZm9sZGVyXG4gICAgdXBkYXRlVGFza3MoZ2V0Q3VycmVudFByb2ooKSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcHJvamVjdHMgbGlzdCBkaXNwbGF5XG5jb25zdCB1cGRhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdHMoKTtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCxpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBwcm9qVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvai10aXRsZScpO1xuICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2pUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByb2opO1xuICAgICAgICBwcm9qVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgcHJvamVjdCBpbmRleCBhbmQgdXBkYXRlIHRhc2tzIGZvciB0aGUgZmlyc3QgcHJvamVjdCBieSBkZWZhdWx0XG4gICAgICAgIHNlbGVjdGVkUHJvaiA9IGluZGV4O1xuICAgICAgICB1cGRhdGVUYXNrcyhQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdHMoKVtzZWxlY3RlZFByb2pdKTtcbiAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0YXNrcyBkaXNwbGF5IGZvciBhIHByb2plY3Qgb3IgZm9sZGVyXG5jb25zdCB1cGRhdGVUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgd2hlcmUgPSBzZWxlY3RlZEl0ZW1UeXBlO1xuICAgIHRhc2tDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBsZXQgY3VycmVudFRhc2tzO1xuICAgIGlmICh3aGVyZSA9PT0gJ2ZvbGRlcicpe1xuICAgICAgICBjdXJyZW50VGFza3MgPSBwcm9qZWN0O1xuICAgICAgICAvLyBEaXNwbGF5IGEgdG9hc3QgbWVzc2FnZSBpZiB0aGVyZSBhcmUgbm8gdGFza3MgaW4gdGhlIGZvbGRlclxuICAgICAgICBpZiAoY3VycmVudFRhc2tzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcGxveVRvYXN0KCdObyB0YXNrcyBpbiB0aGlzIGZvbGRlciEnLCdpbmZvJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdoZXJlID09PSAncHJvamVjdCcpe1xuICAgICAgICBjdXJyZW50VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gICAgfVxuICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAvLyBjcmVhdGluZyB0YXNrIGl0ZW1cbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIHRhc2tJdGVtLmRhdGFzZXQuaW5kZXggPSBjdXJyZW50VGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgLy8gY3JlYXRpbmcgdGFzayB0aXRsZVxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAvLyBjcmVhdGluZyB0YXNrIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9ICB0YXNrLmRlc2NyaXB0aW9uICA9PT0gJycgPyBcIk5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkLlwiIDogdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgICAgIHRhc2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXN0YXR1cycpKXtcbiAgICAgICAgICAgICAgICB0YXNrRGVzYy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tCdXR0b25zLmNsYXNzTGlzdC50b2dnbGUoJ3VuaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkaXYgZm9yIHRhc2sgYnV0dG9uc1xuICAgICAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbnMnKTtcbiAgICAgICAgLy8gY3JlYXRpbmcgdGFzayBlZGl0IGJ1dHRvblxuICAgICAgICBjb25zdCB0YXNrRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQnKTtcbiAgICAgICAgdGFza0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBvcGVuVGFza0RpYWxvZ3VlKFByb2plY3RzTGlzdC5maW5kVGFzayh0YXNrVGl0bGUudGV4dENvbnRlbnQpWzBdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNyZWF0ZSB0YXNrIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJyk7XG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBkZWxldGVUYXNrKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY3JlYXRpbmcgdGFzayBzdGF0dXMgY2hlY2tib3hcbiAgICAgICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tTdGF0dXMudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMnKTtcbiAgICAgICAgaWYgKHRhc2suc3RhdHVzKXtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCdub3QtZG9uZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZGluZyB0YXNrIGV2ZW50IGxpc3RlbmVyIHRvIHN3aXRjaCBzdGF0dXNcbiAgICAgICAgdGFza1N0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnN0YXR1cyA9ICF0YXNrLnN0YXR1cztcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgICAgICAgICB0YXNrRGVzYy5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrcyhnZXRDdXJyZW50UHJvaigpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tTdGF0dXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzZXR0aW5nIHRhc2sgcHJpb3JpdHlcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyBhZGRpbmcgYWxsIHRvIHRhc2sgaXRlbVxuICAgICAgICBjaGVja1N0YXR1cygpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuICAgICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ1dHRvbik7XG4gICAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdXR0b24pO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KVxuICAgIHN0b3JlUHJvamVjdHMoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgcHJvamVjdCBkaWFsb2d1ZVxuY29uc3Qgb3BlblByb2pEaWFsb2d1ZSA9ICgpID0+IHtcbiAgICBwcm9qRGlhbG9ndWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3RlZCcpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBwcm9qZWN0IGRpYWxvZ3VlXG5jb25zdCBjbG9zZVByb2pEaWFsb2d1ZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1uYW1lJyk7XG4gICAgY29uc3QgcHJvakNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otY2F0ZWdvcnknKTtcbiAgICBwcm9qRGlhbG9ndWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3RlZCcpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcHJvalRpdGxlLnZhbHVlID0gJyc7XG4gICAgcHJvakNhdGVnb3J5LnZhbHVlID0gJyc7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIHRhc2sgZGlhbG9ndWVcbmNvbnN0IG9wZW5UYXNrRGlhbG9ndWUgPSAodGFzaykgPT4ge1xuICAgIGlmICh0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG5cbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgdGFza0Rlc2MudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgICAgIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gICAgfVxuICAgIHRhc2tEaWFsb2d1ZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdGVkJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIHRhc2sgZGlhbG9ndWVcbmNvbnN0IGNsb3NlVGFza0RpYWxvZ3VlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGlhbG9ndWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3RlZCcpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdGFza1RpdGxlLnZhbHVlID0gJyc7XG4gICAgdGFza1ByaW9yaXR5LnZhbHVlID0gJ01lZGl1bSc7XG4gICAgdGFza0Rlc2MudmFsdWUgPSAnJztcbiAgICBzZWxlY3RlZFRhc2sgPSBudWxsO1xufVxuXG4vLyBGdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgcHJvamVjdCBvciBmb2xkZXIgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGl0ZW0gdHlwZVxuY29uc3QgZ2V0Q3VycmVudFByb2ogPSAoKSA9PiB7XG4gICAgbGV0IHByb2o7XG4gICAgaWYgKHNlbGVjdGVkSXRlbVR5cGUgPT09ICdwcm9qZWN0Jyl7XG4gICAgICAgIHByb2ogPSBQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdHMoKVtzZWxlY3RlZFByb2pdO1xuICAgIH0gaWYgKHNlbGVjdGVkSXRlbVR5cGUgPT09ICdmb2xkZXInKSB7XG4gICAgICAgIHByb2ogPSBQcm9qZWN0c0xpc3QuZ2V0Rm9sZGVycygpW3NlbGVjdGVkRm9sZGVyXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2o7XG59XG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGZvbGRlcnMgbGlzdCBkaXNwbGF5XG5jb25zdCB1cGRhdGVGb2xkZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlcnMgPSBQcm9qZWN0c0xpc3QuZ2V0Rm9sZGVycygpO1xuICAgIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXItY29udGFpbmVyJyk7XG4gICAgZm9sZGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBmb2xkZXIgaW4gZm9sZGVycykge1xuICAgICAgICBjb25zdCBmb2xkZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvbGRlckl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgZm9sZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBmb2xkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdmb2xkZXItdGl0bGUnKTtcbiAgICAgICAgZm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBmb2xkZXI7XG4gICAgICAgIGZvbGRlclRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJvaik7XG4gICAgICAgIGZvbGRlckl0ZW0uYXBwZW5kQ2hpbGQoZm9sZGVyVGl0bGUpO1xuICAgICAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9sZGVySXRlbSk7XG4gICAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBmaXJlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvcGVuUHJvakRpYWxvZ3VlKCk7XG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGUgPSAncHJvamVjdCc7XG4gICAgfSk7XG4gICAgLy8gZXZlbnQgbGlzdG5lciBmb3IgcHJvaiBmb3JtXG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1mb3JtJyk7XG4gICAgcHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgIC8vIFByZXZlbnRpbmcgcGFnZSByZWZyZXNoXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1jYXRlZ29yeScpLnZhbHVlO1xuICAgICAgICBQcm9qZWN0c0xpc3QuYWRkUHJvamVjdChwcm9qVGl0bGUsIHByb2pDYXRlZ29yeSA9PT0gJycgPyAnR2VuZXJhbCcgOiBwcm9qQ2F0ZWdvcnkpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0KCk7XG4gICAgICAgIGNsb3NlUHJvakRpYWxvZ3VlKCk7XG4gICAgICAgIGNvbnN0IGxhc3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XFxcIiR7c2VsZWN0ZWRQcm9qfVxcXCJdYCk7XG4gICAgICAgIGxhc3RQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGRlcGxveVRvYXN0KCdQcm9qZWN0IGFkZGVkIScsJ3N1Y2Nlc3MnKTtcbiAgICAgICAgc2VsZWN0UHJvaih7dGFyZ2V0Omxhc3RQcm9qZWN0fSk7XG4gICAgfSlcbiAgICAvLyBldmVudCBsaXN0bmVyIGZvciBjbG9zaW5nIHByb2ogZm9ybVxuICAgIGNvbnN0IGNsb3NlUHJvakJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qJyk7XG4gICAgY2xvc2VQcm9qQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQcm9qRGlhbG9ndWUoKSk7XG4gICAgLy8gZXZlbnQgbGlzdG5lciBmb3IgY2xvc2luZyBmb3JtcyB3aGVuIGNsaWNrIG91dHNpZGUgZm9ybVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5Jykpe1xuICAgICAgICAgICAgY2xvc2VQcm9qRGlhbG9ndWUoKTtcbiAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ3VlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFByb2ogIT0gLTEgJiYgc2VsZWN0ZWRQcm9qICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtVHlwZSA9PT0gJ3Byb2plY3QnKXtcbiAgICAgICAgICAgICAgICBvcGVuVGFza0RpYWxvZ3VlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXBsb3lUb2FzdCgnWW91IGNhbiBvbmx5IGFkZCB0YXNrcyBpbiBhIHByb2plY3QhJywnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlcGxveVRvYXN0KCdZb3UgbmVlZCB0byBtYWtlIGEgcHJvamVjdCBmaXJzdCEnLCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHRhc2sgZm9ybVxuICAgIGNvbnN0IHRhc2tGb3JtID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGlmIChzZWxlY3RlZFRhc2spe1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLnRpdGxlID0gdGFza1RpdGxlO1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2M7XG4gICAgICAgICAgICB1cGRhdGVUYXNrcyhnZXRDdXJyZW50UHJvaigpKTtcbiAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ3VlKCk7XG4gICAgICAgICAgICBkZXBsb3lUb2FzdCgnVGFzayBlZGl0ZWQhJywnc3VjY2VzcycpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFByb2plY3RzTGlzdC5nZXRQcm9qZWN0cygpW3NlbGVjdGVkUHJval0uYWRkVGFzayh0YXNrVGl0bGUsIHRhc2tQcmlvcml0eSwgdGFza0Rlc2MpO1xuICAgICAgICAgICAgdXBkYXRlVGFza3MoUHJvamVjdHNMaXN0LmdldFByb2plY3RzKClbc2VsZWN0ZWRQcm9qXSk7XG4gICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2d1ZSgpO1xuICAgICAgICAgICAgZGVwbG95VG9hc3QoJ1Rhc2sgYWRkZWQhJywnc3VjY2VzcycpOyAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIGV2ZW50IGxpc3RuZXIgZm9yIGNsb3NpbmcgdGFzayBmb3JtXG4gICAgY29uc3QgY2xvc2VUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXRhc2snKTtcbiAgICBjbG9zZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVRhc2tEaWFsb2d1ZSgpKTtcbn1cbi8vIEV4cG9ydCB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9ucyB0byBiZSB1c2VkIGluIHRoZSBpbmRleC5qc1xuZXhwb3J0IHsgIHVwZGF0ZVByb2plY3QsIHVwZGF0ZUZvbGRlcnMsIGZpcmVFdmVudExpc3RlbmVycyB9OyIsIi8vIEltcG9ydGluZyB0aGUgcmVxdWlyZWQgc3R5bGVzIGFuZCBmdW5jdGlvbnMgZnJvbSBvdGhlciBtb2R1bGVzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHVwZGF0ZVByb2plY3QsIHVwZGF0ZUZvbGRlcnMsIGZpcmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgUHJvamVjdEhvbGRlciB9IGZyb20gJy4vZGF0YUhvbGRlci5qcyc7XG5pbXBvcnQgeyByZXRyaWV2ZVByb2plY3RzIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbi8vIENyZWF0aW5nIGEgUHJvamVjdHNMaXN0IG9iamVjdCB1c2luZyB0aGUgUHJvamVjdEhvbGRlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBQcm9qZWN0c0xpc3QgPSBQcm9qZWN0SG9sZGVyKCk7XG5cbi8vIENhbGxpbmcgdGhlIGZ1bmN0aW9uIHRvIHNldCB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1dHRvbnMgYW5kIGZvcm1zXG5maXJlRXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8gQ2FsbGluZyB0aGUgZnVuY3Rpb24gdG8gcmV0cmlldmUgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG5yZXRyaWV2ZVByb2plY3RzKCk7XG5cbi8vIENhbGxpbmcgdGhlIGZ1bmN0aW9ucyB0byB1cGRhdGUgdGhlIGRpc3BsYXkgb2YgcHJvamVjdHMgYW5kIGZvbGRlcnMgdXBvbiBwYWdlIGxvYWRcbnVwZGF0ZVByb2plY3QoKTtcbnVwZGF0ZUZvbGRlcnMoKTtcblxuLy8gRXhwb3J0aW5nIHRoZSBQcm9qZWN0c0xpc3Qgb2JqZWN0IHRvIGJlIHVzZWQgaW4gb3RoZXIgbW9kdWxlc1xuZXhwb3J0IHsgUHJvamVjdHNMaXN0IH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0c0xpc3QgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tICcuL2RhdGFIb2xkZXIuanMnO1xuY29uc3Qgc3RvcmVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdHMoKSkpO1xufVxuXG4vL3JldHJpZXZlIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgc3RvcmUgaXQgaW4gdGhlIHByb2plY3QgaG9sZGVyXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgLy9hZGQgdGFza3MgdG8gdGhpcyBwcm9qZWN0XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2sudGl0bGUsIHRhc2sucHJpb3JpdHksIHRhc2suZGVzY3JpcHRpb24sIHRhc2suc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRhc2tMb2NhbFN0b3JhZ2UobmV3VGFzayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFByb2plY3RzTGlzdC5hZGRQcm9qZWN0TG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHN0b3JlUHJvamVjdHMsIHJldHJpZXZlUHJvamVjdHMgfTsiLCIvLyBJbXBvcnRpbmcgdGhlIHJlcXVpcmVkIHN0eWxlcyBmb3IgdGhlIHRvYXN0IG1lc3NhZ2VzXG5pbXBvcnQgJy4vdG9hc3QuY3NzJztcblxuLy8gVG9hc3QgQ29uc3RydWN0b3IgZnVuY3Rpb25cbmZ1bmN0aW9uIFRvYXN0KGNvbnRlbnQsIHR5cGUsIGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAvLyBDcmVhdGluZyB0aGUgdG9hc3QgZWxlbWVudFxuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9hc3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHRvYXN0Q2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2FzdENsb3NlLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIHRvYXN0LmFwcGVuZENoaWxkKHRvYXN0Q29udGVudCk7XG4gICAgdG9hc3QuYXBwZW5kQ2hpbGQodG9hc3RDbG9zZSk7XG4gICAgdG9hc3QuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcbiAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKHR5cGUpO1xuICAgIHRvYXN0Q29udGVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5ub2RlID0gdG9hc3Q7XG5cbiAgICAvLyBTaG93IHRoZSB0b2FzdCBtZXNzYWdlXG4gICAgdGhpcy5zaG93ID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9hc3QpO1xuICAgICAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBtZXNzYWdlXG4gICAgdGhpcy5yZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgdG9hc3QgbWVzc2FnZSB3aGVuIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgdG9hc3RDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlKTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHNsZWVwIGZvciBhIGdpdmVuIGR1cmF0aW9uXG5jb25zdCBzbGVlcCA9IChtcykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgdG9hc3QgbWVzc2FnZVxuY29uc3QgZGVwbG95VG9hc3QgPSAoY29udGVudCwgdHlwZSkgPT4ge1xuICAgIC8vIEdldCB0aGUgdG9hc3QgY29udGFpbmVyLCBhbmQgaWYgaXRzIG5vdCBwcmVzZW50LCBjcmVhdGUgaXRcbiAgICBsZXQgdG9hc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtY29udGFpbmVyJyk7XG4gICAgaWYgKCF0b2FzdENvbnRhaW5lcikge1xuICAgICAgICB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2FzdC1jb250YWluZXInKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2FzdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IFRvYXN0IGluc3RhbmNlIGFuZCBzaG93IGl0XG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3QoY29udGVudCwgdHlwZSwgdG9hc3RDb250YWluZXIpO1xuICAgIHRvYXN0LnNob3coKTtcblxuICAgIC8vIFNldCBhIHRpbWVyIHRvIHJlbW92ZSB0aGUgdG9hc3QgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgc2xlZXAoMzAwMCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIEZhZGUgb3V0IHRoZSB0b2FzdFxuICAgICAgICB0b2FzdC5yZW1vdmUoKTtcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbiB0byBmaW5pc2ggYmVmb3JlIHJlbW92aW5nIHRoZSB0b2FzdCBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgICAgICBzbGVlcCgyNTApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdG9hc3Qubm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0b2FzdCBjb250YWluZXIgaXMgZW1wdHksIGFuZCBpZiBzbywgcmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICAgICAgICBzbGVlcCgzMDAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b2FzdENvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBFeHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGluIG90aGVyIG1vZHVsZXNcbmV4cG9ydCB7IGRlcGxveVRvYXN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=