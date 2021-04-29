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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageload */ \"./src/pages/pageload.js\");\n\r\n\r\n(0,_pages_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/pageload.js":
/*!*******************************!*\
  !*** ./src/pages/pageload.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n//import home menu contact here\r\n\r\nconst pageLoad = () => {\r\n    let content = document.querySelector(\"#content\")\r\n    let tabsy = document.createElement(\"div\")\r\n    let inputhome = document.createElement('input')\r\n    let inputmenu = document.createElement('input')\r\n    let inputcontact = document.createElement('input')\r\n    let labelhome = document.createElement(\"label\")\r\n    let labelmenu = document.createElement(\"label\")\r\n    let labelcontact = document.createElement(\"label\")\r\n    let tabhome = document.createElement(\"div\")\r\n    let tabmenu = document.createElement(\"div\")\r\n    let tabcontact = document.createElement(\"div\")\r\n    let bodycontenthome = document.createElement('div')\r\n    let bodycontentmenu = document.createElement('div')\r\n    let bodycontentcontact = document.createElement('div')\r\n    content.appendChild(tabsy)\r\n\r\n\r\n    tabsy.className = \"tabsy\"\r\n    inputhome.type = \"radio\"\r\n    inputhome.id = \"tab1\"\r\n    inputhome.name = 'tab'\r\n    labelhome.className= \"tabButton\"\r\n    labelhome.htmlFor = \"tab1\"\r\n    labelhome.textContent = 'Home'\r\n    tabhome.className = 'tab'\r\n\r\n    bodycontenthome.textContent = 'home content'\r\n\r\n\r\n\r\n    tabsy.append(inputhome, labelhome, tabhome)\r\n    tabhome.append(bodycontenthome)\r\n\r\n\r\n    inputmenu.type = \"radio\"\r\n    inputmenu.id = \"tab2\"\r\n    inputmenu.name = 'tab'\r\n    labelmenu.className= \"tabButton\"\r\n    labelmenu.htmlFor = \"tab2\"\r\n    labelmenu.textContent = 'Menu'\r\n    tabmenu.className = 'tab'\r\n    bodycontentmenu.textContent = 'menu content'\r\n\r\n    tabsy.append(inputmenu, labelmenu, tabmenu)\r\n    tabmenu.append(bodycontentmenu)\r\n    \r\n    \r\n    inputcontact.type = \"radio\"\r\n    inputcontact.id = \"tab3\"\r\n    inputcontact.name = 'tab'\r\n    labelcontact.className= \"tabButton\"\r\n    labelcontact.htmlFor = \"tab3\"\r\n    labelcontact.textContent = 'Contact'\r\n    tabcontact.className = 'tab'\r\n    bodycontentcontact.textContent = 'contact content'\r\n    \r\n    tabsy.append(inputcontact, labelcontact, tabcontact)\r\n    tabcontact.append(bodycontentcontact)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/pageload.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;