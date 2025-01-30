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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst person_1 = __webpack_require__(/*! ./person */ \"./src/person.ts\");\nconst nourriture_1 = __webpack_require__(/*! ./template/nourriture */ \"./src/template/nourriture.ts\");\nlet frodon = new person_1.person();\nfrodon.manger(new nourriture_1.Nourriture(10));\n// Output: Je mange\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?");

/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.person = void 0;\nclass person {\n    manger(nourriture) {\n        console.info(\"Je mange\" + nourriture.pointsDeVie + 'points de vie!');\n    }\n}\nexports.person = person;\n\n\n//# sourceURL=webpack://typescript/./src/person.ts?");

/***/ }),

/***/ "./src/template/nourriture.ts":
/*!************************************!*\
  !*** ./src/template/nourriture.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Nourriture = void 0;\nclass Nourriture {\n    constructor(pv) {\n        this.pv = 0;\n        this.pointsDeVie = pv;\n    }\n    get pointsDeVie() {\n        return this.pv;\n    }\n    set pointsDeVie(value) {\n        this.pv = value;\n    }\n}\nexports.Nourriture = Nourriture;\n\n\n//# sourceURL=webpack://typescript/./src/template/nourriture.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;