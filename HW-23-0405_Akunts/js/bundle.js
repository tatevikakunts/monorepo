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

/***/ "./src/albums.js":
/*!***********************!*\
  !*** ./src/albums.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAlbums\": () => (/* binding */ getAlbums)\n/* harmony export */ });\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos */ \"./src/photos.js\");\n\r\n\r\nconst getAlbums = async (id) => {\r\n  const result = await fetch(\r\n    `https://jsonplaceholder.typicode.com/albums?userId=${id}`\r\n  );\r\n  const output = await result.json();\r\n  renderAlbums(output);\r\n  (0,_libs__WEBPACK_IMPORTED_MODULE_0__.openTab)(\"#albumsBtn\", \"#albumsTab\");\r\n  albumListener();\r\n};\r\nconst renderAlbums = (albums) => {\r\n  document.querySelector(\"#albumsTab\").innerHTML = \"\";\r\n  albums.forEach((album) => {\r\n    document.querySelector(\r\n      \"#albumsTab\"\r\n    ).innerHTML += `<div id = \"album_${album.id}\">${album.title}</div>`;\r\n  });\r\n};\r\n\r\nconst albumListener = () => {\r\n  const albums = document.querySelectorAll(\"#albumsTab > div\");\r\n  for (let item of albums) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const [, id] = event.currentTarget.id.split(\"_\");\r\n      (0,_photos__WEBPACK_IMPORTED_MODULE_1__.getPhotos)(id);\r\n    });\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/albums.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n\r\n\r\ndocument.querySelector(\"#closeBtn\").addEventListener(\"click\", () => {\r\n  document.querySelector(\"#closeBtn\").parentNode.classList.add(\"hide\");\r\n});\r\n\r\n(0,_user__WEBPACK_IMPORTED_MODULE_0__.getUsers)();\r\n(0,_user__WEBPACK_IMPORTED_MODULE_0__.getStoredUser)();\r\n\n\n//# sourceURL=webpack://hw/./src/app.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfo\": () => (/* binding */ getInfo)\n/* harmony export */ });\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n\r\nconst getInfo = async (id) => {\r\n  const result = await fetch(\r\n    `https://jsonplaceholder.typicode.com/users/${id}`\r\n  );\r\n  const output = await result.json();\r\n  renderInfo(output);\r\n  (0,_libs__WEBPACK_IMPORTED_MODULE_0__.openTab)(\"#infoBtn\", \"#infoTab\");\r\n};\r\nconst renderInfo = (user) => {\r\n  document.querySelector(\"#infoTab\").innerHTML = `<h3>${user.name}</h3>\r\n  <p><span>Username: </span>${user.username}</p>\r\n  <p><span>Email: </span>${user.email}</p>\r\n  <p><span>Address: </span>${user.address.street} ${user.address.suite} ${user.address.city}</p>\r\n  <p><span>Phone: </span>${user.phone}</p>\r\n  <p><span>Company: </span>${user.company.name}</p>`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/info.js?");

/***/ }),

/***/ "./src/libs.js":
/*!*********************!*\
  !*** ./src/libs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTabs\": () => (/* binding */ renderTabs),\n/* harmony export */   \"openTab\": () => (/* binding */ openTab)\n/* harmony export */ });\nconst renderTabs = () => {\r\n  document.querySelector(\r\n    \"#tabs\"\r\n  ).innerHTML = `<button id = \"infoBtn\" class=\"tablinks defaultOpen\">Info</button>\r\n      <button id = \"todoBtn\" class=\"tablinks\">ToDo</button>\r\n      <button id = \"postsBtn\" class=\"tablinks\">Posts</button>\r\n      <button id = \"albumsBtn\" class=\"tablinks\">Albums</button>`;\r\n};\r\nconst openTab = (tabId, tabContent) => {\r\n  document.querySelector(tabId).addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    const tabcontent = document.querySelectorAll(\".tabcontent\");\r\n    for (let i = 0; i < tabcontent.length; i++) {\r\n      tabcontent[i].style.display = \"none\";\r\n    }\r\n    document.querySelector(tabContent).style.display = \"block\";\r\n    document.querySelector(tabId).style.display = \"block\";\r\n    return tabId, tabContent;\r\n  });\r\n  document.querySelector(\".defaultOpen\").click();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/libs.js?");

/***/ }),

/***/ "./src/photos.js":
/*!***********************!*\
  !*** ./src/photos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhotos\": () => (/* binding */ getPhotos)\n/* harmony export */ });\nconst getPhotos = async (id) => {\r\n  const result = await fetch(\r\n    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`\r\n  );\r\n  const output = await result.json();\r\n  renderPhotos(output);\r\n};\r\nconst renderPhotos = (photos) => {\r\n  document.querySelector(\"#photos\").innerHTML = \"\";\r\n  photos.forEach((photo) => {\r\n    document.querySelector(\r\n      \"#photos\"\r\n    ).innerHTML += `<img src = \"${photo.thumbnailUrl}\">`;\r\n  });\r\n  document.querySelector(\"#photos\").parentNode.classList.remove(\"hide\");\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/photos.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n\r\nconst getPosts = async (id) => {\r\n  const result = await fetch(\r\n    `https://jsonplaceholder.typicode.com/posts?userId=${id}`\r\n  );\r\n  const posts = await result.json();\r\n  renderPosts(posts);\r\n  (0,_libs__WEBPACK_IMPORTED_MODULE_0__.openTab)(\"#postsBtn\", \"#postsTab\");\r\n};\r\nconst getComments = async (id) => {\r\n  const result = await fetch(\r\n    `https://jsonplaceholder.typicode.com/comments?postId=${id}`\r\n  );\r\n  const output = await result.json();\r\n  return countComments(output);\r\n};\r\n\r\nconst countComments = (comments) => {\r\n  return comments.length;\r\n};\r\nconst renderPosts = (posts) => {\r\n  document.querySelector(\"#postsTab\").innerHTML = \"\";\r\n  posts.forEach(async (post) => {\r\n    let addComments = await getComments(post.id);\r\n\r\n    document.querySelector(\r\n      \"#postsTab\"\r\n    ).innerHTML += `<p id = \"post_${post.id}\">${post.title} (${addComments})</p>`;\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/posts.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodos\": () => (/* binding */ getTodos)\n/* harmony export */ });\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n\r\nconst getTodos = async (id) => {\r\n  const result = await fetch(\r\n    `https://jsonplaceholder.typicode.com/todos?userId=${id}`\r\n  );\r\n  const output = await result.json();\r\n  renderTodos(output);\r\n  (0,_libs__WEBPACK_IMPORTED_MODULE_0__.openTab)(\"#todoBtn\", \"#todosTab\");\r\n};\r\nconst renderTodos = (todos) => {\r\n  document.querySelector(\"#todosTab\").innerHTML = \"\";\r\n  todos.forEach((todo) => {\r\n    document.querySelector(\"#todosTab\").innerHTML += `<div>${todo.title}\r\n    </div>`;\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/todo.js?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers),\n/* harmony export */   \"getStoredUser\": () => (/* binding */ getStoredUser)\n/* harmony export */ });\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs */ \"./src/libs.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts */ \"./src/posts.js\");\n/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albums */ \"./src/albums.js\");\n\r\n\r\n\r\n\r\n\r\nconst getStoredUser = () => {\r\n  if (localStorage.userId) {\r\n    let currentUserId = JSON.parse(localStorage.getItem(\"userId\"));\r\n    window.addEventListener(\"load\", (event) => {\r\n      (0,_libs__WEBPACK_IMPORTED_MODULE_1__.renderTabs)();\r\n      (0,_info__WEBPACK_IMPORTED_MODULE_0__.getInfo)(currentUserId);\r\n      (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getTodos)(currentUserId);\r\n      (0,_posts__WEBPACK_IMPORTED_MODULE_3__.getPosts)(currentUserId);\r\n      (0,_albums__WEBPACK_IMPORTED_MODULE_4__.getAlbums)(currentUserId);\r\n    });\r\n  }\r\n};\r\nconst getUsers = async () => {\r\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\r\n  const data = await response.json();\r\n  renderUsers(data);\r\n  usersListener();\r\n};\r\nconst renderUsers = (userList) => {\r\n  userList.forEach((user) => {\r\n    document.querySelector(\r\n      \"#users\"\r\n    ).innerHTML += `<div id = \"user_${user.id}\">${user.username}</div>`;\r\n  });\r\n};\r\nconst usersListener = () => {\r\n  const names = document.querySelectorAll(\"#users div\");\r\n  for (let item of names) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const [, id] = event.target.id.split(\"_\");\r\n      storeUser(id);\r\n      (0,_libs__WEBPACK_IMPORTED_MODULE_1__.renderTabs)();\r\n      (0,_info__WEBPACK_IMPORTED_MODULE_0__.getInfo)(id);\r\n      (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getTodos)(id);\r\n      (0,_posts__WEBPACK_IMPORTED_MODULE_3__.getPosts)(id);\r\n      (0,_albums__WEBPACK_IMPORTED_MODULE_4__.getAlbums)(id);\r\n    });\r\n  }\r\n};\r\nconst storeUser = (id) => {\r\n  localStorage.setItem(\"userId\", JSON.stringify(id));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw/./src/user.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;