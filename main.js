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
    font-size: 16px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    user-select: none;\n}\n\n:root {\n    --bold-title: 32px;\n    --normal-title: 24px;\n    --small-title: 18px;\n    --para-text: 14px;\n}\n\nh2 {\n    font-size: var(--normal-title);\n}\n\nh4{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: var(--small-title);\n}\n\np {\n    font-size: var(--para-text);\n}\n.task-container > p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: fit-content;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.2s ease-in-out;\n}\n\nbutton:hover {\n    background-color: #f1f1f1;\n    border: 1px solid #000000;\n}   \n\n.container {\n    width: 100%;\n    height: 100vh;\n    background-color: #f1f1f1;\n    display: grid;\n    grid-template-columns:1fr 3fr;\n}\n\n.sidebar {\n    background-color: aliceblue;\n    padding: 30px;\n    overflow: auto;\n}\n\n.heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main-content {\n    padding: 30px;\n    overflow: auto;\n}\n\n.proj-title,.folder-title {\n    font-weight: 600;\n    padding: 1rem 1.5rem;\n    background-color: #ffffff;\n    margin-bottom: 5px;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n    transition: all 0.2s ease-in-out;\n}\n\n.proj-title:hover, .folder-title:hover {\n    background-color: #f1f1f1;\n    border: 1px solid #000000;\n}\n\n.proj-title.selected, .folder-title.selected {\n    background-color: #cac8c8;\n}\n\n[class *= \"-container\"] {\n    margin-top: 2rem;\n}\n\n.add-proj-content {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: #ffffff;\n    padding: 2rem;\n    border-radius: 10px;\n    transition: all 0.2s ease-in-out;\n}\n\n.add-proj-content form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.add-proj-content input {\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n}\n\n.add-proj-content input:first-child {\n    margin-top: 1rem;\n}\n\n.add-proj-content input:hover {\n    border: 1px solid #000000;\n    background-color: #f1f1f1;\n}\n\n.add-proj-content input:focus {\n    outline: none;\n    border: 1px solid #000000;\n}\n\n.add-proj-content form > button {\n    margin-top: 1rem;\n    background-color: #000000;\n    color: #ffffff;\n    margin-left: 1rem;\n}\n\n.add-proj-heading button {\n    color: #520b0b;\n    background-color: #fbc7c7;\n    font-weight: 900;\n}\n\n.add-proj-heading button:hover {\n    background-color: #ffcccc;\n    border: 1px solid #ffffff00;\n    box-shadow: 0px 0px 0px 2px #ff5757;\n}\n\n.add-proj-heading button:focus {\n    outline: none;\n}\n\n.form-selected {\n    transform: translate(-50%, -50%) scale(1) !important;\n    z-index: 100;\n}\n\n.add-task-content {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: #ffffff;\n    padding: 2rem;\n    border-radius: 10px;\n    width: auto;\n    transition: all 0.2s ease-in-out;\n}\n\n.add-task-content form > button {\n    margin-top: 1rem;\n    background-color: #000000;\n    color: #ffffff;\n}\n\n.add-task-content form > button:hover {\n    background-color: #f1f1f1;\n    border: 1px solid #000000;\n    color: #000000;\n}\n\n.add-task-content form > button:focus {\n    outline: none;\n}\n\n.add-task-heading {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n\n.add-task-heading button {\n    color: #520b0b;\n    background-color: #fbc7c7;\n    font-weight: 900;\n}\n\n.add-task-heading button:hover {\n    background-color: #ffcccc;\n    border: 1px solid #ffffff00;\n    box-shadow: 0px 0px 0px 2px #ff5757;\n}\n\n.add-task-content input,textarea {\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    border: 1px solid #3e3e3e;\n    resize: none;\n}\n\n.add-task-content input:hover,textarea:hover {\n    border: 1px solid #000000;\n    background-color: #f1f1f1;\n}\n\n.add-task-content input:focus,textarea:focus {\n    outline: none;\n    border: 1px solid #000000;\n}\n\n.add-task-content form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.251);\n    -webkit-backdrop-filter: blur(5px);\n    backdrop-filter: blur(5px);\n    transition: all 0.2s ease-in-out;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.task-item {\n    padding: 1rem 1.5rem;\n    background-color: #ffffff;\n    margin-bottom: 5px;\n    border-radius: 5px;\n    border: 1px solid #00000000;\n    transition: all 0.2s ease-in-out;\n    position: relative;\n    text-overflow: ellipsis;\n}\n\n.task-status {\n    position: absolute;\n    right: 1.5rem;\n    bottom: 1.5rem;\n    scale: 3.0;\n}\n\n.task-item.high .task-status {\n    accent-color: #ff0000;\n}\n\n.task-item.medium .task-status {\n    accent-color: #ffcc00;\n}\n\n.task-item.low .task-status {\n    accent-color: #00ff00;\n}\n\n.task-desc {\n    font-size: 14px;\n    color: #999;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    margin-right: 2rem;\n}\n\n.task-desc.expanded {\n    font-size: 16px;\n    color: #333;\n    overflow: visible;\n    display: -webkit-box;\n    -webkit-line-clamp: unset;\n    -webkit-box-orient: unset;\n  }\n\n.done {\n    text-decoration: line-through;\n    color: #999;\n}\n\n.task-item.done {\n    border-left: 7px solid #0026ff;\n}\n\n.low {\n    border-left: 7px solid #00ff00;\n}\n\n.medium {\n    border-left: 7px solid #ffcc00;\n}\n\n.high {\n    border-left: 7px solid #ff0000;\n}\n\n.proj-heading {\n    margin-top: 2rem;\n}\n\n.task-buttons {\n    margin-top: 1rem;\n    display:none;\n}\n\n.task-buttons button {\n    margin-left: 0.5rem;\n    border: 1px solid #a3a3a3;\n}\n\n.task-buttons.unhidden {\n    display: flex;\n    justify-content: flex-start;\n}"],"sourceRoot":""}]);
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

    // Return an object with the available functions and data
    return { getProjects, addProject, removeProject, getFolders, findTask };
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
// Importing the required styles and functions from other modules




// Creating a ProjectsList object using the ProjectHolder factory function
const ProjectsList = (0,_dataHolder_js__WEBPACK_IMPORTED_MODULE_2__.ProjectHolder)();

// Calling the function to set up event listeners for buttons and forms
(0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.fireEventListeners)();

// Calling the functions to update the display of projects and folders upon page load
(0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.updateProject)();
(0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__.updateFolders)();

// Exporting the ProjectsList object to be used in other modules



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFh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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvYXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvYXN0LmNzcz8yMDZjIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYXRhSG9sZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvYXN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAgIC0tYm9sZC10aXRsZTogMzJweDtcbiAgICAtLW5vcm1hbC10aXRsZTogMjRweDtcbiAgICAtLXNtYWxsLXRpdGxlOiAxOHB4O1xuICAgIC0tcGFyYS10ZXh0OiAxNHB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtdGl0bGUpO1xufVxuXG5oNHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC10aXRsZSk7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYS10ZXh0KTtcbn1cbi50YXNrLWNvbnRhaW5lciA+IHAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn0gICBcblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAzZnI7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcm9qLXRpdGxlLC5mb2xkZXItdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnByb2otdGl0bGU6aG92ZXIsIC5mb2xkZXItdGl0bGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLnByb2otdGl0bGUuc2VsZWN0ZWQsIC5mb2xkZXItdGl0bGUuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWM4Yzg7XG59XG5cbltjbGFzcyAqPSBcIi1jb250YWluZXJcIl0ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5hZGQtcHJvai1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkLXByb2otY29udGVudCBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5hZGQtcHJvai1jb250ZW50IGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDAwO1xufVxuXG4uYWRkLXByb2otY29udGVudCBpbnB1dDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQ6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmFkZC1wcm9qLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uYWRkLXByb2otaGVhZGluZyBidXR0b24ge1xuICAgIGNvbG9yOiAjNTIwYjBiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmM3Yzc7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmFkZC1wcm9qLWhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYwMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggI2ZmNTc1Nztcbn1cblxuLmFkZC1wcm9qLWhlYWRpbmcgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1zZWxlY3RlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5hZGQtdGFzay1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkLXRhc2stY29udGVudCBmb3JtID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hZGQtdGFzay1jb250ZW50IGZvcm0gPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmFkZC10YXNrLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFkZC10YXNrLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hZGQtdGFzay1oZWFkaW5nIGJ1dHRvbiB7XG4gICAgY29sb3I6ICM1MjBiMGI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYzdjNztcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uYWRkLXRhc2staGVhZGluZyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjZmY1NzU3O1xufVxuXG4uYWRkLXRhc2stY29udGVudCBpbnB1dCx0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZTNlM2U7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uYWRkLXRhc2stY29udGVudCBpbnB1dDpob3Zlcix0ZXh0YXJlYTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uYWRkLXRhc2stY29udGVudCBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uYWRkLXRhc2stY29udGVudCBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjc1cmVtO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNTEpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzay1zdGF0dXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMS41cmVtO1xuICAgIGJvdHRvbTogMS41cmVtO1xuICAgIHNjYWxlOiAzLjA7XG59XG5cbi50YXNrLWl0ZW0uaGlnaCAudGFzay1zdGF0dXMge1xuICAgIGFjY2VudC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLnRhc2staXRlbS5tZWRpdW0gLnRhc2stc3RhdHVzIHtcbiAgICBhY2NlbnQtY29sb3I6ICNmZmNjMDA7XG59XG5cbi50YXNrLWl0ZW0ubG93IC50YXNrLXN0YXR1cyB7XG4gICAgYWNjZW50LWNvbG9yOiAjMDBmZjAwO1xufVxuXG4udGFzay1kZXNjIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi50YXNrLWRlc2MuZXhwYW5kZWQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHVuc2V0O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdW5zZXQ7XG4gIH1cblxuLmRvbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG4udGFzay1pdGVtLmRvbmUge1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMjZmZjtcbn1cblxuLmxvdyB7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDBmZjAwO1xufVxuXG4ubWVkaXVtIHtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmZmNjMDA7XG59XG5cbi5oaWdoIHtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmZjAwMDA7XG59XG5cbi5wcm9qLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YXNrLWJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4udGFzay1idXR0b25zIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xufVxuXG4udGFzay1idXR0b25zLnVuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFF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SUFDcEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjs7QUFFRjtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJvbGQtdGl0bGU6IDMycHg7XFxuICAgIC0tbm9ybWFsLXRpdGxlOiAyNHB4O1xcbiAgICAtLXNtYWxsLXRpdGxlOiAxOHB4O1xcbiAgICAtLXBhcmEtdGV4dDogMTRweDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLW5vcm1hbC10aXRsZSk7XFxufVxcblxcbmg0e1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC10aXRsZSk7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IHZhcigtLXBhcmEtdGV4dCk7XFxufVxcbi50YXNrLWNvbnRhaW5lciA+IHAge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59ICAgXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDNmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvai10aXRsZSwuZm9sZGVyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvai10aXRsZTpob3ZlciwgLmZvbGRlci10aXRsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxufVxcblxcbi5wcm9qLXRpdGxlLnNlbGVjdGVkLCAuZm9sZGVyLXRpdGxlLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhYzhjODtcXG59XFxuXFxuW2NsYXNzICo9IFxcXCItY29udGFpbmVyXFxcIl0ge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uYWRkLXByb2otY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLXByb2otY29udGVudCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXByb2otY29udGVudCBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcXG59XFxuXFxuLmFkZC1wcm9qLWNvbnRlbnQgaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXByb2otY29udGVudCBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5hZGQtcHJvai1jb250ZW50IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuXFxuLmFkZC1wcm9qLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qLWhlYWRpbmcgYnV0dG9uIHtcXG4gICAgY29sb3I6ICM1MjBiMGI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmM3Yzc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5hZGQtcHJvai1oZWFkaW5nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNmZjU3NTc7XFxufVxcblxcbi5hZGQtcHJvai1oZWFkaW5nIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXNlbGVjdGVkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgIWltcG9ydGFudDtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRlbnQgZm9ybSA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5hZGQtdGFzay1jb250ZW50IGZvcm0gPiBidXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2staGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWhlYWRpbmcgYnV0dG9uIHtcXG4gICAgY29sb3I6ICM1MjBiMGI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmM3Yzc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5hZGQtdGFzay1oZWFkaW5nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNmZjU3NTc7XFxufVxcblxcbi5hZGQtdGFzay1jb250ZW50IGlucHV0LHRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlM2UzZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCBpbnB1dDpob3Zlcix0ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5hZGQtdGFzay1jb250ZW50IGlucHV0OmZvY3VzLHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRlbnQgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1MSk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50YXNrLXN0YXR1cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEuNXJlbTtcXG4gICAgYm90dG9tOiAxLjVyZW07XFxuICAgIHNjYWxlOiAzLjA7XFxufVxcblxcbi50YXNrLWl0ZW0uaGlnaCAudGFzay1zdGF0dXMge1xcbiAgICBhY2NlbnQtY29sb3I6ICNmZjAwMDA7XFxufVxcblxcbi50YXNrLWl0ZW0ubWVkaXVtIC50YXNrLXN0YXR1cyB7XFxuICAgIGFjY2VudC1jb2xvcjogI2ZmY2MwMDtcXG59XFxuXFxuLnRhc2staXRlbS5sb3cgLnRhc2stc3RhdHVzIHtcXG4gICAgYWNjZW50LWNvbG9yOiAjMDBmZjAwO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLnRhc2stZGVzYy5leHBhbmRlZCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiB1bnNldDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB1bnNldDtcXG4gIH1cXG5cXG4uZG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLnRhc2staXRlbS5kb25lIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAyNmZmO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDBmZjAwO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZmZjYzAwO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmMDAwMDtcXG59XFxuXFxuLnByb2otaGVhZGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi50YXNrLWJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi50YXNrLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXG59XFxuXFxuLnRhc2stYnV0dG9ucy51bmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudG9hc3QtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAycmVtO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLnRvYXN0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2FzdCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9hc3QudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbn1cblxuLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM5MDkwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZXJyb3I6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLinZdcIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NmQ1ODY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zdWNjZXNzOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pyFXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmZmO1xuICAgIGNvbG9yOiAjMTMwNzNlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjMTMwNzNlO1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMC40cmVtICsgMnB4KTtcbn1cblxuLmluZm86OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLihLnvuI9cIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2RjYjE7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi53YXJuaW5nOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pqg77iPXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9hc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvYXN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAycmVtO1xcbiAgICByaWdodDogMnJlbTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4udG9hc3Qge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9hc3QgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgICBjb2xvcjogIzJiMmIyYjtcXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9hc3QudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM5MDkwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmVycm9yOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4p2XXFxcIjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZDU4NjtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5zdWNjZXNzOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pyFXFxcIjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZmZjtcXG4gICAgY29sb3I6ICMxMzA3M2U7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjMTMwNzNlO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDAuNHJlbSArIDJweCk7XFxufVxcblxcbi5pbmZvOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4oS577iPXFxcIjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi53YXJuaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGNiMTtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi53YXJuaW5nOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pqg77iPXFxcIjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvYXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9hc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBBIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgUHJvamVjdEhvbGRlciBvYmplY3QgdG8gbWFuYWdlIHByb2plY3RzIGFuZCB0YXNrc1xuZnVuY3Rpb24gUHJvamVjdEhvbGRlcigpe1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnZXQgdGFza3MgY2F0ZWdvcml6ZWQgaW50byBcIkdlbmVyYWxcIiwgXCJIaWdoIFByaW9yaXR5XCIsIGFuZCBcIkNvbXBsZXRlZFwiXG4gICAgY29uc3QgZ2V0Rm9sZGVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgR2VuZXJhbCA9IFtdO1xuICAgICAgICBjb25zdCBIaWdoUHJpb3JpdHkgPSBbXTtcbiAgICAgICAgY29uc3QgQ29tcGxldGVkID0gW107XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwcm9qZWN0cyBhbmQgdGhlaXIgdGFza3MgdG8gY2F0ZWdvcml6ZSB0aGVtXG4gICAgICAgIGdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnSGlnaCcgJiYgIXRhc2suc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgSGlnaFByaW9yaXR5LnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWwucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGNhdGVnb3JpemVkIHRhc2tzXG4gICAgICAgIHJldHVybiB7IEdlbmVyYWwsIFwiSGlnaCBQcmlvcml0eVwiOiBIaWdoUHJpb3JpdHksIENvbXBsZXRlZCB9O1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGZpbmQgYSB0YXNrIGJ5IGl0cyB0aXRsZSBhbmQgcmV0dXJuIGJvdGggdGhlIHRhc2sgYW5kIGl0cyBwYXJlbnQgcHJvamVjdFxuICAgIGNvbnN0IGZpbmRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgICAgIGxldCBmb3VuZFRhc2sgPSBudWxsO1xuICAgICAgICBsZXQgZm91bmRQcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHByb2plY3RzIGFuZCB0aGVpciB0YXNrcyB0byBmaW5kIHRoZSBtYXRjaGluZyB0YXNrXG4gICAgICAgIGdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09PSB0YXNrTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kVGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIHRoZSBmb3VuZCB0YXNrIGFuZCBpdHMgcGFyZW50IHByb2plY3RcbiAgICAgICAgcmV0dXJuIFtmb3VuZFRhc2ssIGZvdW5kUHJvamVjdF07XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBsaXN0IG9mIHByb2plY3RzXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBwcm9qZWN0IHRvIHRoZSBwcm9qZWN0cyBsaXN0XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lLCBjYXRlZ29yeSA9ICdHZW5lcmFsJykgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUsIGNhdGVnb3J5KSk7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0cyBsaXN0XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIGF2YWlsYWJsZSBmdW5jdGlvbnMgYW5kIGRhdGFcbiAgICByZXR1cm4geyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0Rm9sZGVycywgZmluZFRhc2sgfTtcbn07XG5cbi8vIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSBQcm9qZWN0IG9iamVjdHNcbmZ1bmN0aW9uIFByb2plY3QobmFtZSwgY2F0ZWdvcnkpe1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMudGFza3MgPSBbXTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgICB0aGlzLmFkZFRhc2sgPSAodGl0bGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgc3RhdHVzID0gZmFsc2UpID0+IHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHN0YXR1cykpO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhIHRhc2sgZnJvbSB0aGUgcHJvamVjdFxuICAgIHRoaXMucmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBsaXN0IG9mIHRhc2tzIGluIHRoZSBwcm9qZWN0XG4gICAgdGhpcy5nZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxufVxuXG4vLyBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBjcmVhdGUgVGFzayBvYmplY3RzXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHN0YXR1cyl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG59XG5cbi8vIEV4cG9ydCB0aGUgUHJvamVjdEhvbGRlciwgUHJvamVjdCwgYW5kIFRhc2sgZnVuY3Rpb25zIHRvIGJlIHVzZWQgaW4gb3RoZXIgbW9kdWxlc1xuZXhwb3J0IHsgUHJvamVjdEhvbGRlciwgUHJvamVjdCwgVGFzayB9OyIsIi8vIEltcG9ydCB0aGUgcmVxdWlyZWQgZnVuY3Rpb25zIGZyb20gb3RoZXIgbW9kdWxlc1xuaW1wb3J0IHsgZGVwbG95VG9hc3QgfSBmcm9tICcuL3RvYXN0LmpzJztcbmltcG9ydCB7UHJvamVjdHNMaXN0fSBmcm9tICcuL2luZGV4LmpzJztcblxuLy8gRE9NIGVsZW1lbnRzXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG5jb25zdCBwcm9qZWN0QWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qJyk7XG5jb25zdCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG5jb25zdCBwcm9qRGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2otY29udGVudCcpO1xuY29uc3QgdGFza0RpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWNvbnRlbnQnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xuXG4vLyBWYXJpYWJsZXMgdG8ga2VlcCB0cmFjayBvZiBzZWxlY3RlZCBwcm9qZWN0LCB0YXNrLCBmb2xkZXIsIGFuZCBpdGVtIHR5cGUgKHByb2plY3Qgb3IgZm9sZGVyKVxubGV0IHNlbGVjdGVkUHJvaiA9IC0xO1xubGV0IHNlbGVjdGVkVGFzayA9IG51bGw7XG5sZXQgc2VsZWN0ZWRGb2xkZXIgPSBudWxsO1xubGV0IHNlbGVjdGVkSXRlbVR5cGUgPSAncHJvamVjdCc7XG5cbi8vIEV2ZW50IGhhbmRsZXIgdG8gc2VsZWN0IGEgcHJvamVjdCBvciBmb2xkZXJcbmNvbnN0IHNlbGVjdFByb2ogPSAoZSkgPT4ge1xuICAgIC8vIGRlLXNlbGVjdGluZyB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBwcm9qZWN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJykuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgaWYgKHByb2ouY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKXtcbiAgICAgICAgICAgIHByb2ouY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vICBDaGVjayBpZiB0aGVyZSBhcmUgYW55IHByb2plY3RzXG4gICAgaWYgKFByb2plY3RzTGlzdC5nZXRQcm9qZWN0cygpWzBdICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIFxuICAgIC8vICBDaGVjayBpZiB0aGUgc2VsZWN0ZWQgZWxlbWVudCBpcyBhIGZvbGRlciBvciBhIHByb2plY3QgYW5kIHVwZGF0ZSB0aGUgdGFza3MgZm9yIHRoZSBzZWxlY3RlZCBpdGVtIHR5cGVcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2xkZXItdGl0bGUnKSl7XG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGUgPSAnZm9sZGVyJztcbiAgICAgICAgc2VsZWN0ZWRGb2xkZXIgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgdXBkYXRlVGFza3MoUHJvamVjdHNMaXN0LmdldEZvbGRlcnMoKVtzZWxlY3RlZEZvbGRlcl0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtVHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgc2VsZWN0ZWRQcm9qID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgdXBkYXRlVGFza3MoUHJvamVjdHNMaXN0LmdldFByb2plY3RzKClbc2VsZWN0ZWRQcm9qXSk7XG4gICAgfVxufVxuXG4vLyBFdmVudCBoYW5kbGVyIHRvIGRlbGV0ZSBhIHRhc2tcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGxldCB0YXNrLHByb2plY3Q7XG4gICAgW3Rhc2sscHJvamVjdF0gPSBQcm9qZWN0c0xpc3QuZmluZFRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAvLyAgVXBkYXRlIHRoZSB0YXNrcyBkaXNwbGF5IGZvciB0aGUgY3VycmVudCBwcm9qZWN0IG9yIGZvbGRlclxuICAgIHVwZGF0ZVRhc2tzKGdldEN1cnJlbnRQcm9qKCkpO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHByb2plY3RzIGxpc3QgZGlzcGxheVxuY29uc3QgdXBkYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gUHJvamVjdHNMaXN0LmdldFByb2plY3RzKCk7XG4gICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHByb2plY3QsaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgcHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2otdGl0bGUnKTtcbiAgICAgICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qKTtcbiAgICAgICAgcHJvalRpdGxlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIHByb2plY3QgaW5kZXggYW5kIHVwZGF0ZSB0YXNrcyBmb3IgdGhlIGZpcnN0IHByb2plY3QgYnkgZGVmYXVsdFxuICAgICAgICBzZWxlY3RlZFByb2ogPSBpbmRleDtcbiAgICAgICAgdXBkYXRlVGFza3MoUHJvamVjdHNMaXN0LmdldFByb2plY3RzKClbc2VsZWN0ZWRQcm9qXSk7XG4gICAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGFza3MgZGlzcGxheSBmb3IgYSBwcm9qZWN0IG9yIGZvbGRlclxuY29uc3QgdXBkYXRlVGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHdoZXJlID0gc2VsZWN0ZWRJdGVtVHlwZTtcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgbGV0IGN1cnJlbnRUYXNrcztcbiAgICBpZiAod2hlcmUgPT09ICdmb2xkZXInKXtcbiAgICAgICAgY3VycmVudFRhc2tzID0gcHJvamVjdDtcbiAgICAgICAgLy8gRGlzcGxheSBhIHRvYXN0IG1lc3NhZ2UgaWYgdGhlcmUgYXJlIG5vIHRhc2tzIGluIHRoZSBmb2xkZXJcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXBsb3lUb2FzdCgnTm8gdGFza3MgaW4gdGhpcyBmb2xkZXIhJywnaW5mbycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3aGVyZSA9PT0gJ3Byb2plY3QnKXtcbiAgICAgICAgY3VycmVudFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICAgIH1cbiAgICBjdXJyZW50VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgLy8gY3JlYXRpbmcgdGFzayBpdGVtXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICB0YXNrSXRlbS5kYXRhc2V0LmluZGV4ID0gY3VycmVudFRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIC8vIGNyZWF0aW5nIHRhc2sgdGl0bGVcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgLy8gY3JlYXRpbmcgdGFzayBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSAgdGFzay5kZXNjcmlwdGlvbiAgPT09ICcnID8gXCJObyBkZXNjcmlwdGlvbiBwcm92aWRlZC5cIiA6IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1zdGF0dXMnKSl7XG4gICAgICAgICAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICB0YXNrQnV0dG9ucy5jbGFzc0xpc3QudG9nZ2xlKCd1bmhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZGl2IGZvciB0YXNrIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b25zJyk7XG4gICAgICAgIC8vIGNyZWF0aW5nIHRhc2sgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgdGFza0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0Jyk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICB0YXNrRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb3BlblRhc2tEaWFsb2d1ZShQcm9qZWN0c0xpc3QuZmluZFRhc2sodGFza1RpdGxlLnRleHRDb250ZW50KVswXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjcmVhdGUgdGFzayBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScpO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNyZWF0aW5nIHRhc2sgc3RhdHVzIGNoZWNrYm94XG4gICAgICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrU3RhdHVzLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzJyk7XG4gICAgICAgIGlmICh0YXNrLnN0YXR1cyl7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbm90LWRvbmUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGRpbmcgdGFzayBldmVudCBsaXN0ZW5lciB0byBzd2l0Y2ggc3RhdHVzXG4gICAgICAgIHRhc2tTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPSAhdGFzay5zdGF0dXM7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgICAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgICAgICAgICAgdXBkYXRlVGFza3MoZ2V0Q3VycmVudFByb2ooKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgdGFza1N0YXR1cy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrU3RhdHVzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICAgICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0dGluZyB0YXNrIHByaW9yaXR5XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gYWRkaW5nIGFsbCB0byB0YXNrIGl0ZW1cbiAgICAgICAgY2hlY2tTdGF0dXMoKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcbiAgICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0VkaXRCdXR0b24pO1xuICAgICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcbn1cblxuLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgcHJvamVjdCBkaWFsb2d1ZVxuY29uc3Qgb3BlblByb2pEaWFsb2d1ZSA9ICgpID0+IHtcbiAgICBwcm9qRGlhbG9ndWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3RlZCcpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBwcm9qZWN0IGRpYWxvZ3VlXG5jb25zdCBjbG9zZVByb2pEaWFsb2d1ZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1uYW1lJyk7XG4gICAgY29uc3QgcHJvakNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otY2F0ZWdvcnknKTtcbiAgICBwcm9qRGlhbG9ndWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3RlZCcpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcHJvalRpdGxlLnZhbHVlID0gJyc7XG4gICAgcHJvakNhdGVnb3J5LnZhbHVlID0gJyc7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIHRhc2sgZGlhbG9ndWVcbmNvbnN0IG9wZW5UYXNrRGlhbG9ndWUgPSAodGFzaykgPT4ge1xuICAgIGlmICh0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG5cbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgdGFza0Rlc2MudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgICAgIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gICAgfVxuICAgIHRhc2tEaWFsb2d1ZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdGVkJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIHRhc2sgZGlhbG9ndWVcbmNvbnN0IGNsb3NlVGFza0RpYWxvZ3VlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICB0YXNrRGlhbG9ndWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3RlZCcpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdGFza1RpdGxlLnZhbHVlID0gJyc7XG4gICAgdGFza1ByaW9yaXR5LnZhbHVlID0gJ01lZGl1bSc7XG4gICAgdGFza0Rlc2MudmFsdWUgPSAnJztcbiAgICBzZWxlY3RlZFRhc2sgPSBudWxsO1xufVxuXG4vLyBGdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgcHJvamVjdCBvciBmb2xkZXIgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGl0ZW0gdHlwZVxuY29uc3QgZ2V0Q3VycmVudFByb2ogPSAoKSA9PiB7XG4gICAgbGV0IHByb2o7XG4gICAgaWYgKHNlbGVjdGVkSXRlbVR5cGUgPT09ICdwcm9qZWN0Jyl7XG4gICAgICAgIHByb2ogPSBQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdHMoKVtzZWxlY3RlZFByb2pdO1xuICAgIH0gaWYgKHNlbGVjdGVkSXRlbVR5cGUgPT09ICdmb2xkZXInKSB7XG4gICAgICAgIHByb2ogPSBQcm9qZWN0c0xpc3QuZ2V0Rm9sZGVycygpW3NlbGVjdGVkRm9sZGVyXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2o7XG59XG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGZvbGRlcnMgbGlzdCBkaXNwbGF5XG5jb25zdCB1cGRhdGVGb2xkZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlcnMgPSBQcm9qZWN0c0xpc3QuZ2V0Rm9sZGVycygpO1xuICAgIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXItY29udGFpbmVyJyk7XG4gICAgZm9sZGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBmb2xkZXIgaW4gZm9sZGVycykge1xuICAgICAgICBjb25zdCBmb2xkZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvbGRlckl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgZm9sZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBmb2xkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdmb2xkZXItdGl0bGUnKTtcbiAgICAgICAgZm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBmb2xkZXI7XG4gICAgICAgIGZvbGRlclRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJvaik7XG4gICAgICAgIGZvbGRlckl0ZW0uYXBwZW5kQ2hpbGQoZm9sZGVyVGl0bGUpO1xuICAgICAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9sZGVySXRlbSk7XG4gICAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBmaXJlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvcGVuUHJvakRpYWxvZ3VlKCk7XG4gICAgICAgIHNlbGVjdGVkSXRlbVR5cGUgPSAncHJvamVjdCc7XG4gICAgfSk7XG4gICAgLy8gZXZlbnQgbGlzdG5lciBmb3IgcHJvaiBmb3JtXG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1mb3JtJyk7XG4gICAgcHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgIC8vIFByZXZlbnRpbmcgcGFnZSByZWZyZXNoXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1jYXRlZ29yeScpLnZhbHVlO1xuICAgICAgICBQcm9qZWN0c0xpc3QuYWRkUHJvamVjdChwcm9qVGl0bGUsIHByb2pDYXRlZ29yeSA9PT0gJycgPyAnR2VuZXJhbCcgOiBwcm9qQ2F0ZWdvcnkpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0KCk7XG4gICAgICAgIGNsb3NlUHJvakRpYWxvZ3VlKCk7XG4gICAgICAgIGNvbnN0IGxhc3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XFxcIiR7c2VsZWN0ZWRQcm9qfVxcXCJdYCk7XG4gICAgICAgIGxhc3RQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGRlcGxveVRvYXN0KCdQcm9qZWN0IGFkZGVkIScsJ3N1Y2Nlc3MnKTtcbiAgICAgICAgc2VsZWN0UHJvaih7dGFyZ2V0Omxhc3RQcm9qZWN0fSk7XG4gICAgfSlcbiAgICAvLyBldmVudCBsaXN0bmVyIGZvciBjbG9zaW5nIHByb2ogZm9ybVxuICAgIGNvbnN0IGNsb3NlUHJvakJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qJyk7XG4gICAgY2xvc2VQcm9qQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQcm9qRGlhbG9ndWUoKSk7XG4gICAgLy8gZXZlbnQgbGlzdG5lciBmb3IgY2xvc2luZyBmb3JtcyB3aGVuIGNsaWNrIG91dHNpZGUgZm9ybVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5Jykpe1xuICAgICAgICAgICAgY2xvc2VQcm9qRGlhbG9ndWUoKTtcbiAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ3VlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFByb2ogIT0gLTEgJiYgc2VsZWN0ZWRQcm9qICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtVHlwZSA9PT0gJ3Byb2plY3QnKXtcbiAgICAgICAgICAgICAgICBvcGVuVGFza0RpYWxvZ3VlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXBsb3lUb2FzdCgnWW91IGNhbiBvbmx5IGFkZCB0YXNrcyBpbiBhIHByb2plY3QhJywnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlcGxveVRvYXN0KCdZb3UgbmVlZCB0byBtYWtlIGEgcHJvamVjdCBmaXJzdCEnLCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHRhc2sgZm9ybVxuICAgIGNvbnN0IHRhc2tGb3JtID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGlmIChzZWxlY3RlZFRhc2spe1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLnRpdGxlID0gdGFza1RpdGxlO1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2M7XG4gICAgICAgICAgICB1cGRhdGVUYXNrcyhnZXRDdXJyZW50UHJvaigpKTtcbiAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ3VlKCk7XG4gICAgICAgICAgICBkZXBsb3lUb2FzdCgnVGFzayBlZGl0ZWQhJywnc3VjY2VzcycpO1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFByb2plY3RzTGlzdC5nZXRQcm9qZWN0cygpW3NlbGVjdGVkUHJval0uYWRkVGFzayh0YXNrVGl0bGUsIHRhc2tQcmlvcml0eSwgdGFza0Rlc2MpO1xuICAgICAgICAgICAgdXBkYXRlVGFza3MoUHJvamVjdHNMaXN0LmdldFByb2plY3RzKClbc2VsZWN0ZWRQcm9qXSk7XG4gICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2d1ZSgpO1xuICAgICAgICAgICAgZGVwbG95VG9hc3QoJ1Rhc2sgYWRkZWQhJywnc3VjY2VzcycpOyAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIGV2ZW50IGxpc3RuZXIgZm9yIGNsb3NpbmcgdGFzayBmb3JtXG4gICAgY29uc3QgY2xvc2VUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXRhc2snKTtcbiAgICBjbG9zZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVRhc2tEaWFsb2d1ZSgpKTtcbn1cbi8vIEV4cG9ydCB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9ucyB0byBiZSB1c2VkIGluIHRoZSBpbmRleC5qc1xuZXhwb3J0IHsgIHVwZGF0ZVByb2plY3QsIHVwZGF0ZUZvbGRlcnMsIGZpcmVFdmVudExpc3RlbmVycyB9OyIsIi8vIEltcG9ydGluZyB0aGUgcmVxdWlyZWQgc3R5bGVzIGFuZCBmdW5jdGlvbnMgZnJvbSBvdGhlciBtb2R1bGVzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHVwZGF0ZVByb2plY3QsIHVwZGF0ZUZvbGRlcnMsIGZpcmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgUHJvamVjdEhvbGRlciB9IGZyb20gJy4vZGF0YUhvbGRlci5qcyc7XG5cbi8vIENyZWF0aW5nIGEgUHJvamVjdHNMaXN0IG9iamVjdCB1c2luZyB0aGUgUHJvamVjdEhvbGRlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBQcm9qZWN0c0xpc3QgPSBQcm9qZWN0SG9sZGVyKCk7XG5cbi8vIENhbGxpbmcgdGhlIGZ1bmN0aW9uIHRvIHNldCB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1dHRvbnMgYW5kIGZvcm1zXG5maXJlRXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8gQ2FsbGluZyB0aGUgZnVuY3Rpb25zIHRvIHVwZGF0ZSB0aGUgZGlzcGxheSBvZiBwcm9qZWN0cyBhbmQgZm9sZGVycyB1cG9uIHBhZ2UgbG9hZFxudXBkYXRlUHJvamVjdCgpO1xudXBkYXRlRm9sZGVycygpO1xuXG4vLyBFeHBvcnRpbmcgdGhlIFByb2plY3RzTGlzdCBvYmplY3QgdG8gYmUgdXNlZCBpbiBvdGhlciBtb2R1bGVzXG5leHBvcnQgeyBQcm9qZWN0c0xpc3QgfTtcbiIsIi8vIEltcG9ydGluZyB0aGUgcmVxdWlyZWQgc3R5bGVzIGZvciB0aGUgdG9hc3QgbWVzc2FnZXNcbmltcG9ydCAnLi90b2FzdC5jc3MnO1xuXG4vLyBUb2FzdCBDb25zdHJ1Y3RvciBmdW5jdGlvblxuZnVuY3Rpb24gVG9hc3QoY29udGVudCwgdHlwZSwgY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8vIENyZWF0aW5nIHRoZSB0b2FzdCBlbGVtZW50XG4gICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2FzdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgdG9hc3RDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvYXN0Q2xvc2UudGV4dENvbnRlbnQgPSAneCc7XG4gICAgdG9hc3QuYXBwZW5kQ2hpbGQodG9hc3RDb250ZW50KTtcbiAgICB0b2FzdC5hcHBlbmRDaGlsZCh0b2FzdENsb3NlKTtcbiAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCd0b2FzdCcpO1xuICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQodHlwZSk7XG4gICAgdG9hc3RDb250ZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLm5vZGUgPSB0b2FzdDtcblxuICAgIC8vIFNob3cgdGhlIHRvYXN0IG1lc3NhZ2VcbiAgICB0aGlzLnNob3cgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2FzdCk7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHRvYXN0IG1lc3NhZ2VcbiAgICB0aGlzLnJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoZSB0b2FzdCBtZXNzYWdlIHdoZW4gY2xvc2UgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICB0b2FzdENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmUpO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc2xlZXAgZm9yIGEgZ2l2ZW4gZHVyYXRpb25cbmNvbnN0IHNsZWVwID0gKG1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IHRoZSB0b2FzdCBtZXNzYWdlXG5jb25zdCBkZXBsb3lUb2FzdCA9IChjb250ZW50LCB0eXBlKSA9PiB7XG4gICAgLy8gR2V0IHRoZSB0b2FzdCBjb250YWluZXIsIGFuZCBpZiBpdHMgbm90IHByZXNlbnQsIGNyZWF0ZSBpdFxuICAgIGxldCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC1jb250YWluZXInKTtcbiAgICBpZiAoIXRvYXN0Q29udGFpbmVyKSB7XG4gICAgICAgIHRvYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvYXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgVG9hc3QgaW5zdGFuY2UgYW5kIHNob3cgaXRcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChjb250ZW50LCB0eXBlLCB0b2FzdENvbnRhaW5lcik7XG4gICAgdG9hc3Quc2hvdygpO1xuXG4gICAgLy8gU2V0IGEgdGltZXIgdG8gcmVtb3ZlIHRoZSB0b2FzdCBhZnRlciAzIHNlY29uZHNcbiAgICBzbGVlcCgzMDAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gRmFkZSBvdXQgdGhlIHRvYXN0XG4gICAgICAgIHRvYXN0LnJlbW92ZSgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uIHRvIGZpbmlzaCBiZWZvcmUgcmVtb3ZpbmcgdGhlIHRvYXN0IGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgICAgIHNsZWVwKDI1MCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5ub2RlLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRvYXN0IGNvbnRhaW5lciBpcyBlbXB0eSwgYW5kIGlmIHNvLCByZW1vdmUgaXQgZnJvbSB0aGUgRE9NXG4gICAgICAgIHNsZWVwKDMwMDApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRvYXN0Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICB0b2FzdENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIEV4cG9ydGluZyB0aGUgZnVuY3Rpb24gdG8gbWFrZSBpdCBhdmFpbGFibGUgaW4gb3RoZXIgbW9kdWxlc1xuZXhwb3J0IHsgZGVwbG95VG9hc3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==