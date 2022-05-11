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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/* let linguagem:string = 'Typescript';\nlet texto:string = `Olá ${ linguagem }`;\nlet idade:number = 20;\n\nlinguagem = '50';\n\nlet getPerfil = function (nome:string, idade:number, email:string):void{\n    console.log(nome, idade, email);\n};\n\nfunction getIdade(idade){\n    return idade + \"anos\";\n};\n\nlet retornaPerfil = (nome:string, idade:number, email:string):void => console.log(nome, idade, email);\n\n\nlet retornaPerfil = (nome:string, idade:number, email:string):void => {\n    nome = nome.toUpperCase();\n    console.log(nome, idade, email);\n};\n\ngetPerfil(\"isis\", 19, \"isismd\");\nlet idadeAnos:number = getIdade(65);\n\nconsole.log(texto,idade); */\n/*\nlet nome:string = \"Ana\";\nlet idade:number = 18;\nlet eMaior:boolean;\n\nif (idade > 17){\n    eMaior = true;\n}else{\n    eMaior = false;\n}\n\nlet lista:string[] = [\"verde\", \"azul\"];\nlet listaNumeros:Array<number> = [76, 21, 33];\n\nenum Cor {vermelho, azul, laranja};\n\nlet c: Cor = Cor.laranja;\n\nconsole.log(c);\nconsole.log(Cor[2]);\n\nlet aux:any;\naux = \"teste\";\naux = 43;\naux = [231, 33, 1];\n\nlet arrayAny:any[] = [1, \"teste\", {}];\n\nfunction listaNomes(lista:string[]):void{\n    console.log(lista);\n}\n\n */\nexports.__esModule = true;\nvar moto_class_1 = __webpack_require__(/*! ./classes/moto-class */ \"./src/classes/moto-class.ts\");\nvar veiculo_class_1 = __webpack_require__(/*! ./classes/veiculo-class */ \"./src/classes/veiculo-class.ts\");\nvar camaro = new veiculo_class_1.Veiculo('camaro');\nvar honda = new moto_class_1.Moto(\"Honda\");\nconsole.log(honda.getTitulo);\ndocument.getElementById('nomeMoto').innerHTML = honda.getTitulo();\n\n\n//# sourceURL=webpack://isis/./src/app.ts?");

/***/ }),

/***/ "./src/classes/moto-class.ts":
/*!***********************************!*\
  !*** ./src/classes/moto-class.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.Moto = void 0;\nvar veiculo_class_1 = __webpack_require__(/*! ./veiculo-class */ \"./src/classes/veiculo-class.ts\");\nvar Moto = /** @class */ (function (_super) {\n    __extends(Moto, _super);\n    function Moto() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return Moto;\n}(veiculo_class_1.Veiculo));\nexports.Moto = Moto;\n\n\n//# sourceURL=webpack://isis/./src/classes/moto-class.ts?");

/***/ }),

/***/ "./src/classes/veiculo-class.ts":
/*!**************************************!*\
  !*** ./src/classes/veiculo-class.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.Veiculo = void 0;\nvar Veiculo = /** @class */ (function () {\n    function Veiculo(titulo, rodas) {\n        if (titulo === void 0) { titulo = \"Nome Carro\"; }\n        if (rodas === void 0) { rodas = 2; }\n        this.titulo = titulo;\n        this.rodas = rodas;\n        this.titulo = titulo;\n        this.rodas = rodas;\n    }\n    Veiculo.prototype.getTitulo = function () {\n        return this.titulo;\n    };\n    Veiculo.prototype.getRodas = function () {\n        return this.rodas;\n    };\n    return Veiculo;\n}());\nexports.Veiculo = Veiculo;\n\n\n//# sourceURL=webpack://isis/./src/classes/veiculo-class.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;