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

/***/ "./src/pages/img/al-pastor-menu.jpg":
/*!******************************************!*\
  !*** ./src/pages/img/al-pastor-menu.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"247d6ca698d4c926bbbdef98a0d567cf.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/pages/img/al-pastor-menu.jpg?");

/***/ }),

/***/ "./src/pages/img/al-pastor.jpg":
/*!*************************************!*\
  !*** ./src/pages/img/al-pastor.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"87544ffb6da1a2e65ef00cae6c50035d.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/pages/img/al-pastor.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageload */ \"./src/pages/pageload.js\");\n\r\n\r\n(0,_pages_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactLoad\": () => (/* binding */ contactLoad)\n/* harmony export */ });\nconst contactLoad = () => {\r\n    let contentbody = document.querySelector(\".contentbody\")\r\n    let contactus = document.createElement('div')\r\n    let info = document.createElement('div')\r\n\r\n    contactus.className = 'intro'\r\n    info.className = 'info'\r\n\r\n    contactus.textContent = \"Contact Us\"\r\n    info.textContent = \"info@mehicotaco.com\"\r\n\r\n    contentbody.append(contactus, info)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLoad\": () => (/* binding */ homeLoad)\n/* harmony export */ });\n/* harmony import */ var _img_al_pastor_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/al-pastor.jpg */ \"./src/pages/img/al-pastor.jpg\");\n\r\n\r\nconst homeLoad = () => {\r\n    let contentbody = document.querySelector(\".contentbody\")\r\n    let homeimg = document.createElement('img')\r\n    let intro = document.createElement('div')\r\n    let para = document.createElement('div')\r\n\r\n    homeimg.className = 'homeimg'\r\n    intro.className = 'intro'\r\n    para.className = 'para'\r\n\r\n    intro.textContent = \"Taco from Mehico\"\r\n    para.textContent = \"Get your authentic taco from us\"\r\n    // homeimg.setAttribute('src', './img/al-pastor.jpg')\r\n    homeimg.src = _img_al_pastor_jpg__WEBPACK_IMPORTED_MODULE_0__.default\r\n    contentbody.append(homeimg, intro, para)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _img_al_pastor_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/al-pastor-menu.jpg */ \"./src/pages/img/al-pastor-menu.jpg\");\n\r\n\r\nconst menuLoad = () => {\r\n    let contentbody = document.querySelector(\".contentbody\")\r\n    let menuimg = document.createElement('img')\r\n    let menu = document.createElement('div')\r\n    let description = document.createElement('div')\r\n\r\n    menuimg.className = 'homeimg'\r\n    menu.className = 'intro'\r\n    description.className = 'para'\r\n\r\n    menuimg.src = _img_al_pastor_menu_jpg__WEBPACK_IMPORTED_MODULE_0__.default\r\n    menu.textContent = \"Al Pastor\"\r\n    description.textContent = \"We got the one and only Al Pastor from Mehico\"\r\n\r\n    contentbody.append(menuimg, menu, description)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/pageload.js":
/*!*******************************!*\
  !*** ./src/pages/pageload.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/pages/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/pages/contact.js\");\n//import home menu contact here\r\n\r\n\r\n\r\n\r\nconst pageLoad = () => {\r\n    let content = document.querySelector(\"#content\")\r\n    let title = document.createElement('div')\r\n    let tabsy = document.createElement(\"div\")\r\n    let contentbody = document.createElement(\"div\")\r\n    let inputhome = document.createElement('input')\r\n    let inputmenu = document.createElement('input')\r\n    let inputcontact = document.createElement('input')\r\n    let labelhome = document.createElement(\"label\")\r\n    let labelmenu = document.createElement(\"label\")\r\n    let labelcontact = document.createElement(\"label\")\r\n    let tabhome = document.createElement(\"div\")\r\n    let tabmenu = document.createElement(\"div\")\r\n    let tabcontact = document.createElement(\"div\")\r\n    // let bodycontenthome = document.createElement('div')\r\n    // let bodycontentmenu = document.createElement('div')\r\n    // let bodycontentcontact = document.createElement('div')\r\n\r\n\r\n\r\n\r\n    title.className = 'title'\r\n    title.textContent = \"Mehico Taco\"\r\n    contentbody.className = 'contentbody'\r\n    \r\n    content.append(title, tabsy, contentbody)\r\n\r\n\r\n\r\n    tabsy.className = \"tabsy\"\r\n    inputhome.type = \"radio\"\r\n    inputhome.id = \"tab1\"\r\n    inputhome.name = 'tab'\r\n    inputhome.checked = true\r\n    labelhome.className= \"tabButton\"\r\n    labelhome.htmlFor = \"tab1\"\r\n    labelhome.textContent = 'Home'\r\n    tabhome.className = 'tab'\r\n    // bodycontenthome.className = 'content'\r\n    //bodycontenthome.textContent = 'home content'\r\n\r\n\r\n\r\n    tabsy.append(inputhome, labelhome, tabhome)\r\n    // tabhome.append(bodycontenthome)\r\n\r\n\r\n\r\n    inputmenu.type = \"radio\"\r\n    inputmenu.id = \"tab2\"\r\n    inputmenu.name = 'tab'\r\n    labelmenu.className= \"tabButton\"\r\n    labelmenu.htmlFor = \"tab2\"\r\n    labelmenu.textContent = 'Menu'\r\n    tabmenu.className = 'tab'\r\n    // bodycontentmenu.textContent = 'menu content'\r\n    // bodycontentmenu.className = 'content'\r\n\r\n    tabsy.append(inputmenu, labelmenu, tabmenu)\r\n    // tabmenu.append(bodycontentmenu)\r\n    \r\n    \r\n    inputcontact.type = \"radio\"\r\n    inputcontact.id = \"tab3\"\r\n    inputcontact.name = 'tab'\r\n    labelcontact.className= \"tabButton\"\r\n    labelcontact.htmlFor = \"tab3\"\r\n    labelcontact.textContent = 'Contact'\r\n    tabcontact.className = 'tab'\r\n    // bodycontentcontact.textContent = 'contact content'\r\n    // bodycontentcontact.className = 'content'\r\n\r\n    tabsy.append(inputcontact, labelcontact, tabcontact)\r\n    // tabcontact.append(bodycontentcontact)\r\n\r\n\r\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.homeLoad)()\r\n    labelhome.addEventListener(\"click\", function() {\r\n        contentbody.innerHTML = \"\"\r\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.homeLoad)()}\r\n        \r\n        )//not done yet\r\n    labelmenu.addEventListener(\"click\", function() {\r\n        contentbody.innerHTML = \"\"\r\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad)()})\r\n    labelcontact.addEventListener(\"click\", function() {\r\n        contentbody.innerHTML = \"\"\r\n        ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactLoad)()})\r\n    \r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/pageload.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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