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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst person_1 = __webpack_require__(/*! ./person */ \"./src/person.ts\");\nconst nourriture_1 = __webpack_require__(/*! ./template/nourriture */ \"./src/template/nourriture.ts\");\nconst arme_1 = __webpack_require__(/*! ./template/arme */ \"./src/template/arme.ts\");\nlet frodon = new person_1.person();\nfrodon.manger(new nourriture_1.Nourriture(10));\n// Output: Je mange\nconst arme = new arme_1.Arme();\n//ici ça comppile car in vérifie que la structure sui m'interesse est respectée\n//cela s'appelle des fonctions polymorphiques\nconst arc = {\n    puissance: 20\n};\n//utilisation\n(0, arme_1.afficherPuissance)(new arme_1.Arme());\n(0, arme_1.afficherPuissance)({ puissance: 20 });\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?");

/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.person = void 0;\nclass person {\n    manger(nourriture) {\n        console.info(\"Je mange\" + nourriture.pointsDeVie + 'points de vie!');\n    }\n}\nexports.person = person;\n\n\n//# sourceURL=webpack://typescript/./src/person.ts?");

/***/ }),

/***/ "./src/template/arme.ts":
/*!******************************!*\
  !*** ./src/template/arme.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Arme = void 0;\nexports.afficherPuissance = afficherPuissance;\nclass Arme {\n    constructor() {\n        this.puissance = 10;\n        this.bouclier = 0;\n    }\n}\nexports.Arme = Arme;\n//le type n'existe pas avec le js car il est que pour tsle controle de type\n/**\n * Affiche la puissance de l'arme\n * @param arme\n */\n//ici c'est un prototypage mais pas une instance de la classe\n//export function afficherPuissance(arme: {puissance: number}){\nfunction afficherPuissance(arme) {\n    console.info(\"La puissance de l'arme est de \" + arme.puissance);\n}\n\n\n//# sourceURL=webpack://typescript/./src/template/arme.ts?");

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