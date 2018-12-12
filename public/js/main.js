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

/***/ "../shared/index.js":
/*!**************************!*\
  !*** ../shared/index.js ***!
  \**************************/
/*! exports provided: validatePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validatePost\", function() { return validatePost; });\nvar textLimit = 140;\n\nvar validate = function validate(input, rules) {\n  // Execute a set of tests and if invalid, return an error message\n  var rule = rules.find(function (rule) {\n    return !rule.test(input);\n  });\n  return rule ? rule.msg : undefined;\n};\n\nvar validatePost = function validatePost(text) {\n  return validate(text, [{\n    test: function test(x) {\n      return x.length > 0;\n    },\n    msg: \"Your post should have some content.\"\n  }, {\n    test: function test(x) {\n      return x.length <= textLimit;\n    },\n    msg: \"Your post shouldn't be longer than \".concat(textLimit, \" characters.\")\n  }]);\n};\n\n//# sourceURL=webpack:///../shared/index.js?");

/***/ }),

/***/ "./actions/post.js":
/*!*************************!*\
  !*** ./actions/post.js ***!
  \*************************/
/*! exports provided: postCreate, postsReceive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postCreate\", function() { return postCreate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postsReceive\", function() { return postsReceive; });\nvar postCreate = function postCreate(text) {\n  return {\n    type: 'POST:CREATE',\n    text: text\n  };\n};\nvar postsReceive = function postsReceive(posts) {\n  return {\n    type: 'POSTS:RECEIVE',\n    posts: posts\n  };\n};\n\n//# sourceURL=webpack:///./actions/post.js?");

/***/ }),

/***/ "./actions/session.js":
/*!****************************!*\
  !*** ./actions/session.js ***!
  \****************************/
/*! exports provided: sessionBegin, sessionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionBegin\", function() { return sessionBegin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionEnd\", function() { return sessionEnd; });\nvar sessionBegin = function sessionBegin(username, password) {\n  return {\n    type: 'SESSION:BEGIN',\n    username: username,\n    password: password\n  };\n};\nvar sessionEnd = function sessionEnd() {\n  return {\n    type: 'SESSION:END'\n  };\n};\n\n//# sourceURL=webpack:///./actions/session.js?");

/***/ }),

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./components/nav.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ \"./components/main.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: inline-block;\\n  max-width: 40rem;\\n  width: 100%;\\n  text-align: left;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0;\\n  padding: 0 \", \";\\n  min-height: 100vh;\\n  text-align: center;\\n  line-height: 1.5;\\n  background-color: \", \";\\n  color: \", \";\\n  font-family: monospace;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar AppPad = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), function (props) {\n  return props.theme.padding;\n}, function (props) {\n  return props.theme.backgroundColor;\n}, function (props) {\n  return props.theme.themeColor;\n});\nvar AppCenter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppPad, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    username: props.username\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_3__[\"Main\"], null)));\n};\n\n//# sourceURL=webpack:///./components/app.js?");

/***/ }),

/***/ "./components/confirmation.js":
/*!************************************!*\
  !*** ./components/confirmation.js ***!
  \************************************/
/*! exports provided: CheckBtn, XBtn, Confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckBtn\", function() { return CheckBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"XBtn\", function() { return XBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Confirm\", function() { return Confirm; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  background: none;\\n  border: none;\\n  outline: none;\\n  color: inherit;\\n  padding: 0;\\n  cursor: pointer;\\n  font-size: 150%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar PlainBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject());\nvar CheckBtn = function CheckBtn(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlainBtn, props, \"\\u2714\");\n};\nvar XBtn = function XBtn(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlainBtn, props, \"\\u2718\");\n};\nvar Confirm = function Confirm(_ref) {\n  var onConfirm = _ref.onConfirm,\n      onDeny = _ref.onDeny,\n      confirmProps = _ref.confirmProps,\n      denyProps = _ref.denyProps;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, confirmProps || onConfirm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckBtn, _extends({}, confirmProps, {\n    onClick: onConfirm\n  })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, denyProps || onDeny ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(XBtn, _extends({}, denyProps, {\n    onClick: onDeny\n  })) : null));\n};\n\n//# sourceURL=webpack:///./components/confirmation.js?");

/***/ }),

/***/ "./components/entry.js":
/*!*****************************!*\
  !*** ./components/entry.js ***!
  \*****************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entry\", function() { return Entry; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ \"./components/layouts.js\");\n/* harmony import */ var _confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation */ \"./components/confirmation.js\");\n/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/index */ \"../shared/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  min-height: 3rem;\\n  width: 100%;\\n  margin: 0.5rem;\\n  border: hidden;\\n  outline: none;\\n  font-family: inherit;\\n  background-color: \", \";\\n  resize: vertical;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea(_templateObject(), function (props) {\n  return props.theme.postColor;\n});\n\nvar EntryBase =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(EntryBase, _Component);\n\n  function EntryBase(props) {\n    var _this;\n\n    _classCallCheck(this, EntryBase);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryBase).call(this, props));\n    _this.state = {\n      text: ''\n    };\n    return _this;\n  }\n\n  _createClass(EntryBase, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var valid = Object(_shared_index__WEBPACK_IMPORTED_MODULE_6__[\"validatePost\"])(this.state.text) === undefined;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: function onSubmit(event) {\n          event.preventDefault();\n\n          if (valid) {\n            _this2.props.post(_this2.state.text);\n\n            _this2.setState({\n              text: ''\n            });\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__[\"PostBase\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__[\"PostBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {\n        autoFocus: true,\n        name: \"text\",\n        placeholder: 'Talk about something...',\n        onChange: function onChange(event) {\n          return _this2.setState({\n            text: event.target.value\n          });\n        },\n        value: this.state.text\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__[\"PostMedia\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_5__[\"Confirm\"], {\n        confirmProps: {\n          type: 'submit'\n        },\n        onDeny: function onDeny(event) {\n          return _this2.setState({\n            text: ''\n          });\n        }\n      }))));\n    }\n  }]);\n\n  return EntryBase;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // Only works if logged in\n\n\nvar Entry = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(undefined, function (dispatch) {\n  return {\n    post: function post(text) {\n      return dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_3__[\"postCreate\"])(text));\n    }\n  };\n})(EntryBase);\n\n//# sourceURL=webpack:///./components/entry.js?");

/***/ }),

/***/ "./components/layouts.js":
/*!*******************************!*\
  !*** ./components/layouts.js ***!
  \*******************************/
/*! exports provided: PostBase, PostBody, PostMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostBase\", function() { return PostBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostBody\", function() { return PostBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostMedia\", function() { return PostMedia; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  display: inline-block;\\n  vertical-align: middle;\\n  text-align: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-self: flex-center;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  align-self: flex-center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: flex-start;\\n  border-style: hidden;\\n  border-radius: \", \";\\n  padding: \", \";\\n  margin-top: 0.5rem;\\n  margin-bottom: 0.5rem;\\n  background-color: \", \"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar PostBase = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), function (props) {\n  return props.theme.rounding;\n}, function (props) {\n  return props.theme.padding;\n}, function (props) {\n  return props.theme.postColor;\n});\nvar PostBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject2());\nvar PostMediaFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar PostMediaBase = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject4());\nvar PostMedia = function PostMedia(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostMediaFlex, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostMediaBase, props));\n};\n\n//# sourceURL=webpack:///./components/layouts.js?");

/***/ }),

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ \"./components/layouts.js\");\n/* harmony import */ var _confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmation */ \"./components/confirmation.js\");\n/* harmony import */ var _actions_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/session */ \"./actions/session.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  white-space: nowrap;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0.5rem;\\n  border: hidden;\\n  outline: none;\\n  font-family: inherit;\\n  background-color: \", \";\\n  :invalid {\\n    background-color: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject(), function (props) {\n  return props.theme.postColor;\n}, function (props) {\n  return props.theme.errorColor;\n});\nvar NoWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject2());\n\nvar LoginBase =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LoginBase, _Component);\n\n  function LoginBase(props) {\n    var _this;\n\n    _classCallCheck(this, LoginBase);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginBase).call(this, props));\n    _this.state = {\n      username: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(LoginBase, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: function onSubmit(event) {\n          event.preventDefault();\n\n          _this2.props.onSubmit(_this2.state.username, _this2.state.password);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostBase\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"username\"\n      }, \"Username:\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {\n        id: \"username\",\n        name: \"username\",\n        type: \"text\",\n        required: true,\n        maxLength: 32,\n        pattern: \"^[0-9a-zA-Z]+$\",\n        value: this.state.username,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            username: event.target.value\n          });\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"password\"\n      }, \"Password:\\xA0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {\n        id: \"password\",\n        name: \"password\",\n        type: \"password\",\n        required: true,\n        minLength: 6,\n        maxLength: 32,\n        value: this.state.password,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            password: event.target.value\n          });\n        }\n      })), !this.props.error ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoWrap, null, \"That username and password combination isn't on file \\u2014 try again.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostMedia\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_4__[\"Confirm\"], {\n        confirmProps: {\n          type: 'submit'\n        }\n      }))));\n    }\n  }]);\n\n  return LoginBase;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Login = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    error: state.session.error\n  };\n}, function (dispatch) {\n  return {\n    onSubmit: function onSubmit(username, password) {\n      return dispatch(Object(_actions_session__WEBPACK_IMPORTED_MODULE_5__[\"sessionBegin\"])(username, password));\n    }\n  };\n})(LoginBase);\n\n//# sourceURL=webpack:///./components/login.js?");

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ \"./components/posts.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry */ \"./components/entry.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ \"./components/login.js\");\n\n\n\n\n\nvar Main = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (store) {\n  return {\n    username: store.session.username\n  };\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_entry__WEBPACK_IMPORTED_MODULE_3__[\"Entry\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_4__[\"Login\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_posts__WEBPACK_IMPORTED_MODULE_2__[\"Posts\"], null));\n});\n\n//# sourceURL=webpack:///./components/main.js?");

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _actions_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/session */ \"./actions/session.js\");\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 5rem;\\n  transition: transform 100ms linear;\\n  :hover {\\n    transform: scale(0.85);\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  font-weight: bold;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-bottom: 0;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  vertical-align: bottom;\\n  align-items: flex-end;\\n  max-height: 5rem;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  text-align: right;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  flex: 1;\\n  text-align: left;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar NavLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nvar NavCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nvar NavRight = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\nvar NavBase = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header(_templateObject4());\nvar NavTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1(_templateObject5());\nvar NavUsername = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\nvar NavImg = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img(_templateObject7());\nvar Nav = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    username: state.session.username\n  };\n}, function (dispatch) {\n  return {\n    logout: function logout() {\n      return dispatch(Object(_actions_session__WEBPACK_IMPORTED_MODULE_3__[\"sessionEnd\"])());\n    }\n  };\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBase, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLeft, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavTitle, null, document.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavImg, {\n    src: \"/icon.png\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavRight, null, props.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavUsername, null, props.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    onClick: props.logout\n  }, \"Logout\")) : null));\n});\n\n//# sourceURL=webpack:///./components/nav.js?");

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: Username, PostText, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Username\", function() { return Username; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostText\", function() { return PostText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago-react */ \"../../node_modules/timeago-react/lib/timeago-react.js\");\n/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timeago_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ \"./components/layouts.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  white-space: pre-wrap;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  font-weight: bold;\\n  text-decoration: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Username = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject(), function (props) {\n  return props.own ? \"underline\" : \"none\";\n});\nvar PostText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar Post = function Post(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostBase\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"PostBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Username, {\n    own: props.own\n  }, props.username), \"\\xA0\\u2014\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(timeago_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    datetime: props.date\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostText, null, props.text)));\n};\n\n//# sourceURL=webpack:///./components/post.js?");

/***/ }),

/***/ "./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Posts\", function() { return Posts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./components/post.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar Posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    posts: state.post.posts,\n    username: state.session.username\n  };\n})(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, props.posts.map(function (post) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_2__[\"Post\"], _extends({}, post, {\n      key: post.id,\n      own: post.username === props.username\n    }));\n  }).reverse());\n});\n\n//# sourceURL=webpack:///./components/posts.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"../../node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app */ \"./components/app.js\");\n/* harmony import */ var _reducers_session_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/session.js */ \"./reducers/session.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _actions_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/session */ \"./actions/session.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/post */ \"./actions/post.js\");\n/* harmony import */ var _middleware_websockets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middleware/websockets */ \"./middleware/websockets.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme */ \"./theme.json\");\nvar _theme__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./theme */ \"./theme.json\", 1);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"combineReducers\"])({\n  session: _reducers_session_js__WEBPACK_IMPORTED_MODULE_6__[\"sessionReducer\"],\n  post: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[\"postReducer\"]\n}), Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(_middleware_websockets__WEBPACK_IMPORTED_MODULE_10__[\"websocketsMiddleware\"]));\n\nif (window.__PRELOADED_STATE__) {\n  var username, posts;\n\n  if (username = window.__PRELOADED_STATE__.username) {\n    store.dispatch(Object(_actions_session__WEBPACK_IMPORTED_MODULE_8__[\"sessionBegin\"])(window.__PRELOADED_STATE__.username));\n  }\n\n  if (posts = window.__PRELOADED_STATE__.posts) {\n    store.dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_9__[\"postsReceive\"])(posts));\n  }\n}\n\nstore.dispatch({\n  type: 'SOCKET:INIT'\n}); // Function to render the whole application\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], {\n  theme: _theme__WEBPACK_IMPORTED_MODULE_11__\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_5__[\"App\"], null))), document.getElementById('root'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middleware/websockets.js":
/*!**********************************!*\
  !*** ./middleware/websockets.js ***!
  \**********************************/
/*! exports provided: websocketsMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"websocketsMiddleware\", function() { return websocketsMiddleware; });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"../../node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(); // Inbound Message from Socket server\n\nvar incomingMessages = ['SESSION:LOGIN', 'SESSION:ERROR', 'POSTS:RECEIVE', 'POST:RECEIVE', 'POST:ERROR'];\nvar websocketsMiddleware = function websocketsMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      var type = action.type,\n          payload = _objectWithoutProperties(action, [\"type\"]);\n\n      console.log(\"Dispatching \".concat(type, \" with payload \").concat(JSON.stringify(payload)));\n\n      if (type === 'SOCKET:INIT') {\n        // Setup the socket callbacks\n        incomingMessages.forEach(function (type) {\n          socket.on(type, function (payload) {\n            store.dispatch(Object.assign({\n              type: type\n            }, payload));\n          });\n        });\n      } else if (type === 'POST:CREATE' && payload.text !== '') {\n        socket.emit('POST:CREATE', {\n          text: payload.text\n        });\n      } else if (type === 'POSTS:REQUEST') {\n        // length will be one higher than the highest index (id) or 0\n        socket.emit('POSTS:REQUEST', {\n          beginIO: store.getState().post.posts.length\n        });\n      } else if (type === 'SESSION:BEGIN') {\n        socket.emit('SESSION:BEGIN', {\n          username: payload.username,\n          password: payload.password\n        });\n      } else if (type === 'SESSION:END') {\n        socket.emit('SESSION:END');\n        next(action);\n      } else {\n        next(action); // let store handle other actions\n      }\n    };\n  };\n};\n\n//# sourceURL=webpack:///./middleware/websockets.js?");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postReducer\", function() { return postReducer; });\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar arrayCopy = function arrayCopy(arr) {\n  return Object.assign([], arr);\n}; // Returns a new array containing arr[ind]\n\n\nvar arrayImmutableInsertObj = function arrayImmutableInsertObj(arr, ind, val) {\n  var copy = arrayCopy(arr);\n  copy[ind] = val;\n  return copy;\n}; // Returns a new array with val shallowly merged with arr[ind].\n\n\nvar arrayImmutableUpdateObj = function arrayImmutableUpdateObj(arr, ind, val) {\n  return ind in arr ? arr.map(function (e, i) {\n    return ind === i ? _objectSpread({}, e, val) : e;\n  }) : arrayImmutableInsertObj(arr, ind, val);\n}; // Returns a new array with val not included\n\n\nvar arrayImmutableDelete = function arrayImmutableDelete(arr, ind) {\n  var copy = arrayCopy(arr);\n  delete copy[ind];\n  return copy;\n};\n\nvar initialState = {\n  posts: [] // sparse array indexed by id\n\n};\nvar postReducer = function postReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  var type = action.type,\n      payload = _objectWithoutProperties(action, [\"type\"]);\n\n  switch (type) {\n    case 'POST:RECEIVE':\n      return Object.assign({}, state, {\n        posts: arrayImmutableInsertObj(state.posts, payload.id, payload)\n      });\n\n    case 'POSTS:RECEIVE':\n      var idIndexed = [];\n\n      if (payload.posts) {\n        payload.posts.forEach(function (post) {\n          return idIndexed[post.id] = post;\n        });\n        console.log(idIndexed);\n        return Object.assign({}, state, {\n          posts: Object.assign([], state.posts, idIndexed)\n        });\n      } else {\n        return state;\n      }\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "./reducers/session.js":
/*!*****************************!*\
  !*** ./reducers/session.js ***!
  \*****************************/
/*! exports provided: sessionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionReducer\", function() { return sessionReducer; });\nvar initialState = {\n  username: \"\"\n};\nvar sessionReducer = function sessionReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"SESSION:LOGIN\":\n      return Object.assign({}, state, {\n        username: action.username\n      });\n\n    case \"SESSION:END\":\n      return Object.assign({}, state, {\n        username: \"\"\n      });\n\n    case \"SESSION:ERROR\":\n      return Object.assign({}, state, {\n        username: \"\",\n        error: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./reducers/session.js?");

/***/ }),

/***/ "./theme.json":
/*!********************!*\
  !*** ./theme.json ***!
  \********************/
/*! exports provided: themeColor, backgroundColor, postColor, dimColor, errorColor, rounding, padding, votesWidth, maxLength, default */
/***/ (function(module) {

eval("module.exports = {\"themeColor\":\"#3e305a\",\"backgroundColor\":\"#d8c3ff\",\"postColor\":\"#fff\",\"dimColor\":\"#ccc\",\"errorColor\":\"#ed6a9a\",\"rounding\":\"1rem\",\"padding\":\"1rem\",\"votesWidth\":\"2em\",\"maxLength\":20};\n\n//# sourceURL=webpack:///./theme.json?");

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