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

/***/ "./src/accessData.js":
/*!***************************!*\
  !*** ./src/accessData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeTaskStatus: () => (/* binding */ changeTaskStatus),\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\nfunction removeTask(e,tasksList) {\n    document.getElementById(e.parentNode.parentNode.parentNode.parentNode.id).remove();\n    tasksList.splice(e.parentNode.parentNode.parentNode.parentNode.id,1);\n}\n\nfunction changeTaskStatus(e,tasksList) {\n    let node = e.parentNode.parentNode;\n    if(tasksList[node.id]['finished'] == 'no') {\n        tasksList[node.id]['finished'] = 'yes'\n        node.getElementsByClassName('taskIcon')[0].setAttribute('src','icons/check_circle_icon.svg');\n    } else {\n        tasksList[node.id]['finished'] = 'no'\n        node.getElementsByClassName('taskIcon')[0].setAttribute('src','icons/blank_check_circle_icon.svg');\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/accessData.js?");

/***/ }),

/***/ "./src/drawObjects.js":
/*!****************************!*\
  !*** ./src/drawObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addClasses: () => (/* binding */ addClasses),\n/* harmony export */   drawList: () => (/* binding */ drawList),\n/* harmony export */   removeClasses: () => (/* binding */ removeClasses)\n/* harmony export */ });\n/* harmony import */ var _accessData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessData */ \"./src/accessData.js\");\n\n\nconst section = document.getElementById('addPopout');\nconst overlay = document.getElementById('overlay');\nlet main = document.getElementById('list-items');\nfunction drawList(tasksList) {\n    main.innerText = '';\n    for (let index = 0; index < tasksList.length; index++) {\n        let listItem = document.createElement('div');\n        listItem.classList.add('list-item')\n        listItem.id = tasksList[index]['id'];\n        main.appendChild(listItem);\n\n        let sidebarWrapper = document.createElement('div');\n        sidebarWrapper.style = 'margin-top: 8px;'\n        listItem.appendChild(sidebarWrapper);\n\n        let checkIcon = document.createElement('img');\n        checkIcon.setAttribute('src','icons/blank_check_circle_icon.svg');\n        checkIcon.classList.add('taskIcon');\n        sidebarWrapper.appendChild(checkIcon);\n\n        let textWrapper = document.createElement('div');\n        textWrapper.style = 'display: flex; flex-direction: column; flex: 1;'\n        listItem.appendChild(textWrapper);\n\n        let topWrapper = document.createElement('div');\n        topWrapper.classList.add('topWrapper')\n        textWrapper.appendChild(topWrapper);\n\n        let titleWrapper = document.createElement('div');\n        topWrapper.appendChild(titleWrapper);\n\n        let titleParagraph = document.createElement('p');\n        titleParagraph.innerText = tasksList[index]['title'];\n        titleParagraph.style = 'font-weight: 700; font-size: 45px;'\n        titleWrapper.appendChild(titleParagraph);\n\n        let iconsWrapper = document.createElement('div');\n        iconsWrapper.classList.add('iconsWrapper');\n        topWrapper.appendChild(iconsWrapper);\n\n        let trashIcon = document.createElement('img');\n        trashIcon.setAttribute('src','icons/trash_sharp_icon.svg')\n        trashIcon.classList.add('trash');\n        trashIcon.style = 'height: 30px;'\n        iconsWrapper.appendChild(trashIcon);\n\n        let descriptionParagraph = document.createElement('p');\n        descriptionParagraph.innerText = tasksList[index]['description'];\n        textWrapper.appendChild(descriptionParagraph);\n\n        let dueDateParagraph = document.createElement('p');\n        dueDateParagraph.innerText = tasksList[index]['dueDate'];\n        dueDateParagraph.style = 'font-size: 13px; padding-top: 3px;'\n        textWrapper.appendChild(dueDateParagraph);\n    }\n    Array.from(document.getElementsByClassName('trash')).forEach(element => {\n        element.addEventListener('click', () => {\n            (0,_accessData__WEBPACK_IMPORTED_MODULE_0__.removeTask)(element, tasksList);\n        });\n    });\n    Array.from(document.getElementsByClassName('taskIcon')).forEach(element => {\n        element.addEventListener('click', () => {\n            (0,_accessData__WEBPACK_IMPORTED_MODULE_0__.changeTaskStatus)(element, tasksList);\n        });\n    });\n}\n\nfunction addClasses() {\n    section.classList.add('active');\n    overlay.classList.add('active');\n}\n\nfunction removeClasses() {\n    event.preventDefault();\n    section.classList.remove('active');\n    overlay.classList.remove('active');\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/drawObjects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawObjects */ \"./src/drawObjects.js\");\n\n\nconst tasksList = [];\nlet counter = 0;\nconst addButton = document.getElementById('addButton');\nconst closeButton = document.getElementById('closeButton');\nconst submitButton = document.getElementById('submit');\naddButton.addEventListener('click', _drawObjects__WEBPACK_IMPORTED_MODULE_0__.addClasses)\ncloseButton.addEventListener('click', _drawObjects__WEBPACK_IMPORTED_MODULE_0__.removeClasses)\n\nclass Task {\n    constructor(title,description,dueDate,priority,finished,id) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.finished = finished;\n        this.id = counter++;\n    }\n\n}\n\nsubmitButton.addEventListener('click', () => {\n    event.preventDefault();\n    let title = document.getElementById('title').value;\n    let description = document.getElementById('description').value;\n    let dueDate = document.getElementById('dueDate').value;\n    dueDate = dueDate.replace('T',' ');\n    let priority = document.getElementById('priority');\n    if(priority.checked) { priority = 'checked'; } else { priority = 'unchecked';}\n    verifyData(title,description,dueDate,priority);\n})\n\nfunction verifyData(title,description,dueDate,priority) {\n    if(title == '' || description == '' || dueDate == '') {\n        return false;\n    } else {\n        let task = new Task(title,description,dueDate,priority,\"no\");\n        tasksList.push(task);\n        (0,_drawObjects__WEBPACK_IMPORTED_MODULE_0__.removeClasses)();\n        (0,_drawObjects__WEBPACK_IMPORTED_MODULE_0__.drawList)(tasksList);\n    }\n}\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

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