/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/post.js":
/*!*************************!*\
  !*** ./actions/post.js ***!
  \*************************/
/*! exports provided: postCreate, postVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postCreate\", function() { return postCreate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postVote\", function() { return postVote; });\nvar postCreate = function postCreate(username, text) {\n  return {\n    type: 'POST:CREATE',\n    username: username,\n    text: text,\n    id: id,\n    votes: votes,\n    userDidVote: userDidVote\n  };\n};\nvar postVote = function postVote(username, id) {\n  var vote = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  return {\n    type: 'POST:VOTE',\n    username: username,\n    id: id,\n    vote: vote\n  };\n};\n\n//# sourceURL=webpack:///./actions/post.js?");

/***/ }),

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts */ \"./components/posts.js\");\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session */ \"./components/session.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav */ \"./components/nav.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: inline-block;\\n  max-width: 40rem;\\n  width: 100%;\\n  text-align: left;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0;\\n  padding: 0 \", \";\\n  min-height: 100vh;\\n  text-align: center;\\n  line-height: 1.5;\\n  background-color: \", \";\\n  color: \", \";\\n  font-family: monospace;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\nvar AppPad = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.theme.padding;\n}, function (props) {\n  return props.theme.backgroundColor;\n}, function (props) {\n  return props.theme.themeColor;\n});\nvar AppCenter = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\nvar App = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (state) {\n  return {\n    posts: state.post.posts,\n    username: state.session.username\n  };\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppPad, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_6__[\"Nav\"], {\n    username: props.username\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_posts__WEBPACK_IMPORTED_MODULE_4__[\"Posts\"], {\n        posts: props.posts\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/login\",\n    render: function render() {\n      console.log(\"login\");\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_session__WEBPACK_IMPORTED_MODULE_5__[\"Login\"], null);\n    }\n  }))));\n});\n\n//# sourceURL=webpack:///./components/app.js?");

/***/ }),

/***/ "./components/layouts.js":
/*!*******************************!*\
  !*** ./components/layouts.js ***!
  \*******************************/
/*! exports provided: PostBase, PostBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostBase\", function() { return PostBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostBody\", function() { return PostBody; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  align-self: flex-center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: flex-start;\\n  border-style: hidden;\\n  border-radius: \", \";\\n  padding: \", \";\\n  margin-top: 0.5rem;\\n  margin-bottom: 0.5rem;\\n  background-color: \", \"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar PostBase = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject(), function (props) {\n  return props.theme.rounding;\n}, function (props) {\n  return props.theme.padding;\n}, function (props) {\n  return props.theme.postColor;\n});\nvar PostBody = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(_templateObject2());\n\n//# sourceURL=webpack:///./components/layouts.js?");

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 5rem;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-bottom: 0;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  vertical-align: bottom;\\n  align-items: flex-end;\\n  max-height: 5rem;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  text-align: right;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  text-align: left;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar NavLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nvar NavCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nvar NavRight = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\nvar NavBase = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header(_templateObject4());\nvar NavTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1(_templateObject5());\nvar NavImg = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img(_templateObject6());\nvar Nav = function Nav(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBase, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLeft, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavTitle, null, document.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavImg, {\n    src: \"/icon.png\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavRight, null, !props.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\"\n  }, \"Log In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/signup\"\n  }, \"Sign up\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/logout\"\n  }, \"Log Out\")));\n};\n\n//# sourceURL=webpack:///./components/nav.js?");

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timeago-react */ \"../../node_modules/timeago-react/lib/timeago-react.js\");\n/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timeago_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ \"./components/layouts.js\");\n/* harmony import */ var _votes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./votes */ \"./components/votes.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  white-space: pre-wrap;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  font-weight: bold;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\nvar Username = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject());\nvar PostText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nvar Post = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(undefined, function (dispatch) {\n  return _actions_post__WEBPACK_IMPORTED_MODULE_6__;\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__[\"PostBase\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_votes__WEBPACK_IMPORTED_MODULE_5__[\"Votes\"], {\n    votes: props.votes,\n    onDownvote: function onDownvote() {\n      return props.postVote(props.username, props.id, -1);\n    },\n    onUpvote: function onUpvote() {\n      return props.postVote(props.username, props.id, 1);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__[\"PostBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Username, null, props.username), \"\\xA0\\u2014\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(timeago_react__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    datetime: props.date\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostText, null, props.text)));\n});\n\n//# sourceURL=webpack:///./components/post.js?");

/***/ }),

/***/ "./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Posts\", function() { return Posts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./components/post.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar Posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    posts: state.post.posts\n  };\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, props.posts.map(function (post) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_2__[\"Post\"], _extends({}, post, {\n      key: post.id\n    }));\n  }).reverse());\n});\n\n//# sourceURL=webpack:///./components/posts.js?");

/***/ }),

/***/ "./components/session.js":
/*!*******************************!*\
  !*** ./components/session.js ***!
  \*******************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ \"./components/layouts.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  \\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  border: none;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject());\nvar Submit = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject2());\nvar Login = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(undefined, function (dispatch) {\n  onSubmit: dispatch();\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostBase\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: props.onSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username:\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {\n    id: \"username\",\n    name: \"username\",\n    type: \"text\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password:\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {\n    id: \"password\",\n    name: \"password\",\n    type: \"password\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \"Submit\")))));\n});\n\n//# sourceURL=webpack:///./components/session.js?");

/***/ }),

/***/ "./components/votes.js":
/*!*****************************!*\
  !*** ./components/votes.js ***!
  \*****************************/
/*! exports provided: Votes */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from /Users/Josh/WebstormProjects/talkie/node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/Josh/WebstormProjects/talkie/src/client/components/votes.js: Unexpected token (27:28)\\n\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mconst\\u001b[39m \\u001b[33mVotes\\u001b[39m \\u001b[33m=\\u001b[39m connect(\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m  state \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 27 | \\u001b[39m    votes\\u001b[33m:\\u001b[39m state\\u001b[33m.\\u001b[39mpost\\u001b[33m.\\u001b[39mposts[]\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m)(({onUpvote\\u001b[33m,\\u001b[39m onDownvote\\u001b[33m,\\u001b[39m votes\\u001b[33m,\\u001b[39m userDidVote} \\u001b[33m=\\u001b[39m {userDidVote\\u001b[33m:\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m,\\u001b[39m votes\\u001b[33m:\\u001b[39m \\u001b[35m0\\u001b[39m}) \\u001b[33m=>\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 30 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mVotesFlex\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at _class.raise (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:4028:15)\\n    at _class.unexpected (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5359:16)\\n    at _class.parseExprAtom (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6518:20)\\n    at _class.parseExprAtom (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:3724:52)\\n    at _class.parseExprSubscripts (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6081:21)\\n    at _class.parseMaybeUnary (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6060:21)\\n    at _class.parseExprOps (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5945:21)\\n    at _class.parseMaybeConditional (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5917:21)\\n    at _class.parseMaybeAssign (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5864:21)\\n    at _class.parseExpression (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5817:21)\\n    at _class.parseSubscript (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6165:31)\\n    at _class.parseSubscripts (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6101:19)\\n    at _class.parseExprSubscripts (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6091:17)\\n    at _class.parseMaybeUnary (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6060:21)\\n    at _class.parseExprOps (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5945:21)\\n    at _class.parseMaybeConditional (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5917:21)\\n    at _class.parseMaybeAssign (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5864:21)\\n    at _class.parseExpression (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:5817:21)\\n    at _class.parseStatementContent (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:7592:21)\\n    at _class.parseStatement (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:7478:17)\\n    at _class.parseLabeledStatement (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:8002:22)\\n    at _class.parseStatementContent (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:7595:19)\\n    at _class.parseStatement (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:7478:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:8046:23)\\n    at _class.parseBlockBody (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:8033:10)\\n    at _class.parseBlock (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:8022:10)\\n    at _class.parseFunctionBody (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:7130:24)\\n    at _class.parseArrowExpression (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:7083:10)\\n    at _class.parseExprAtom (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:6397:18)\\n    at _class.parseExprAtom (/Users/Josh/WebstormProjects/talkie/node_modules/@babel/parser/lib/index.js:3724:52)\");\n\n//# sourceURL=webpack:///./components/votes.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"../../node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app */ \"./components/app.js\");\n/* harmony import */ var _reducers_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/session */ \"./reducers/session.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _middleware_websockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middleware/websockets */ \"./middleware/websockets.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme */ \"./theme.json\");\nvar _theme__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./theme */ \"./theme.json\", 1);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  session: _reducers_session__WEBPACK_IMPORTED_MODULE_7__[\"sessionReducer\"],\n  post: _reducers_post__WEBPACK_IMPORTED_MODULE_8__[\"postReducer\"]\n}), Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"])(_middleware_websockets__WEBPACK_IMPORTED_MODULE_9__[\"websocketsMiddleware\"])); // Function to render the whole application\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"ThemeProvider\"], {\n  theme: _theme__WEBPACK_IMPORTED_MODULE_10__\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_6__[\"App\"], null)))), document.getElementById('root'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middleware/websockets.js":
/*!**********************************!*\
  !*** ./middleware/websockets.js ***!
  \**********************************/
/*! exports provided: websocketsMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"websocketsMiddleware\", function() { return websocketsMiddleware; });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"../../node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(); // Inbound Message from Socket server\n\nvar incomingMessages = [\"SESSION:LOGIN\", \"SESSION:LOGOUT\", \"POSTS:RECEIVE\", \"POST:RECEIVE\"];\nvar websocketsMiddleware = function websocketsMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      incomingMessages.forEach(function (type) {\n        socket.on(type, function (payload) {\n          var obj = Object.assign({\n            type: type\n          }, payload);\n          store.dispatch(obj);\n        });\n      });\n\n      if (action.type === \"POST:SEND\" && action.text !== \"\") {\n        socket.emit(\"POST:SEND\", {\n          text: action.text\n        });\n      } else if (action.type === \"SESSION:START\") {\n        // empty\n        socket.emit(\"SESSION:SEND\", {\n          username: action.username,\n          password: action.password\n        });\n      }\n    };\n  };\n};\n\n//# sourceURL=webpack:///./middleware/websockets.js?");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postReducer\", function() { return postReducer; });\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"../../node_modules/immutable/dist/immutable.es.js\");\n\nvar initialState = {\n  posts: Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"Map\"])()\n};\nvar postReducer = function postReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"POST:CREATE\":\n      return Object.assign({}, state, {\n        posts: state.posts.set(action.id, {\n          id: action.id,\n          username: action.username,\n          votes: action.votes,\n          userDidVote: action.userDidVote,\n          text: action.text\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "./reducers/session.js":
/*!*****************************!*\
  !*** ./reducers/session.js ***!
  \*****************************/
/*! exports provided: sessionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionReducer\", function() { return sessionReducer; });\nvar initialState = {\n  username: \"\"\n};\nvar sessionReducer = function sessionReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"SESSION:LOGIN\":\n      return Object.assign({}, state, {\n        username: action.username\n      });\n\n    case \"SESSION:LOGOUT\":\n      return Object.assign({}, state, {\n        username: \"\"\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./reducers/session.js?");

/***/ }),

/***/ "./theme.json":
/*!********************!*\
  !*** ./theme.json ***!
  \********************/
/*! exports provided: themeColor, backgroundColor, postColor, dimColor, rounding, padding, votesWidth, maxLength, default */
/***/ (function(module) {

eval("module.exports = {\"themeColor\":\"#3e305a\",\"backgroundColor\":\"#d8c3ff\",\"postColor\":\"#FFF\",\"dimColor\":\"#CCC\",\"rounding\":\"1rem\",\"padding\":\"1rem\",\"votesWidth\":\"2em\",\"maxLength\":20};\n\n//# sourceURL=webpack:///./theme.json?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///ws_(ignored)?");

/***/ })

/******/ });