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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePost", function() { return validatePost; });
var textLimit = 140;

var validate = function validate(input, rules) {
  // Execute a set of tests and if invalid, return an error message
  var rule = rules.find(function (rule) {
    return !rule.test(input);
  });
  return rule ? rule.msg : undefined;
};

var validatePost = function validatePost(text) {
  return validate(text, [{
    test: function test(x) {
      return x.length > 0;
    },
    msg: 'Your post should have some content.'
  }, {
    test: function test(x) {
      return x.length <= textLimit;
    },
    msg: "Your post shouldn't be longer than ".concat(textLimit, " characters.")
  }]);
};

/***/ }),

/***/ "./actions/post.js":
/*!*************************!*\
  !*** ./actions/post.js ***!
  \*************************/
/*! exports provided: postCreate, postsReceive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCreate", function() { return postCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsReceive", function() { return postsReceive; });
var postCreate = function postCreate(text) {
  return {
    type: 'POST:CREATE',
    text: text
  };
};
var postsReceive = function postsReceive(posts) {
  return {
    type: 'POSTS:RECEIVE',
    posts: posts
  };
};

/***/ }),

/***/ "./actions/session.js":
/*!****************************!*\
  !*** ./actions/session.js ***!
  \****************************/
/*! exports provided: sessionBegin, sessionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionBegin", function() { return sessionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionEnd", function() { return sessionEnd; });
var sessionBegin = function sessionBegin(username, password) {
  return {
    type: 'SESSION:BEGIN',
    username: username,
    password: password
  };
};
var sessionEnd = function sessionEnd() {
  return {
    type: 'SESSION:END'
  };
};

/***/ }),

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./components/main.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  max-width: 40rem;\n  width: 100%;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0 ", ";\n  min-height: 100vh;\n  text-align: center;\n  line-height: 1.5;\n  background-color: ", ";\n  color: ", ";\n  font-family: monospace;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AppPad = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.theme.padding;
}, function (props) {
  return props.theme.backgroundColor;
}, function (props) {
  return props.theme.themeColor;
});
var AppCenter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var App = function App(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppPad, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    username: props.username
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_3__["Main"], null)));
};

/***/ }),

/***/ "./components/confirmation.js":
/*!************************************!*\
  !*** ./components/confirmation.js ***!
  \************************************/
/*! exports provided: CheckBtn, XBtn, Confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBtn", function() { return CheckBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XBtn", function() { return XBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return Confirm; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  outline: none;\n  color: inherit;\n  padding: 0;\n  cursor: pointer;\n  font-size: 150%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PlainBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject());
var CheckBtn = function CheckBtn(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlainBtn, props, "\u2714");
};
var XBtn = function XBtn(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlainBtn, props, "\u2718");
};
var Confirm = function Confirm(_ref) {
  var onConfirm = _ref.onConfirm,
      onDeny = _ref.onDeny,
      confirmProps = _ref.confirmProps,
      denyProps = _ref.denyProps;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, confirmProps || onConfirm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckBtn, _extends({}, confirmProps, {
    onClick: onConfirm
  })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, denyProps || onDeny ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(XBtn, _extends({}, denyProps, {
    onClick: onDeny
  })) : null));
};

/***/ }),

/***/ "./components/entry.js":
/*!*****************************!*\
  !*** ./components/entry.js ***!
  \*****************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ "./actions/post.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ "./components/layouts.js");
/* harmony import */ var _confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation */ "./components/confirmation.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/index */ "../shared/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 3rem;\n  width: 100%;\n  margin: 0 0.5rem 0 0;\n  border: hidden;\n  outline: none;\n  font-family: inherit;\n  font-size: inherit;\n  background-color: ", ";\n  resize: vertical;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea(_templateObject(), function (props) {
  return props.theme.postColor;
});

var EntryBase =
/*#__PURE__*/
function (_Component) {
  _inherits(EntryBase, _Component);

  function EntryBase(props) {
    var _this;

    _classCallCheck(this, EntryBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryBase).call(this, props));
    _this.state = {
      text: ''
    };
    return _this;
  }

  _createClass(EntryBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var valid = Object(_shared_index__WEBPACK_IMPORTED_MODULE_6__["validatePost"])(this.state.text) === undefined;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: function onSubmit(event) {
          event.preventDefault();

          if (valid) {
            _this2.props.post(_this2.state.text);

            _this2.setState({
              text: ''
            });
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__["PostBase"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__["PostBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        autoFocus: true,
        name: "text",
        placeholder: 'Talk about something...',
        onChange: function onChange(event) {
          return _this2.setState({
            text: event.target.value
          });
        },
        value: this.state.text
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_4__["PostMedia"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_5__["Confirm"], {
        confirmProps: {
          type: 'submit'
        },
        onDeny: function onDeny(event) {
          return _this2.setState({
            text: ''
          });
        }
      }))));
    }
  }]);

  return EntryBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Only works if logged in


var Entry = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(undefined, function (dispatch) {
  return {
    post: function post(text) {
      return dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_3__["postCreate"])(text));
    }
  };
})(EntryBase);

/***/ }),

/***/ "./components/layouts.js":
/*!*******************************!*\
  !*** ./components/layouts.js ***!
  \*******************************/
/*! exports provided: PostBase, PostBody, PostMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBase", function() { return PostBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBody", function() { return PostBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMedia", function() { return PostMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-self: flex-center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  align-self: flex-center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  border-style: hidden;\n  border-radius: ", ";\n  padding: ", ";\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PostBase = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.theme.rounding;
}, function (props) {
  return props.theme.padding;
}, function (props) {
  return props.theme.postColor;
});
var PostBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject2());
var PostMediaFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var PostMediaBase = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject4());
var PostMedia = function PostMedia(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostMediaFlex, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostMediaBase, props));
};

/***/ }),

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ "./components/layouts.js");
/* harmony import */ var _confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmation */ "./components/confirmation.js");
/* harmony import */ var _actions_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/session */ "./actions/session.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0.5rem;\n  border: hidden;\n  outline: none;\n  font-family: inherit;\n  background-color: ", ";\n  :invalid {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject(), function (props) {
  return props.theme.postColor;
}, function (props) {
  return props.theme.errorColor;
});
var NoWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject2());

var LoginBase =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginBase, _Component);

  function LoginBase(props) {
    var _this;

    _classCallCheck(this, LoginBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginBase).call(this, props));
    _this.state = {
      username: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: function onSubmit(event) {
          event.preventDefault();

          _this2.props.onSubmit(_this2.state.username, _this2.state.password);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__["PostBase"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__["PostBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "username"
      }, "Username:\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        id: "username",
        name: "username",
        type: "text",
        required: true,
        maxLength: 32,
        pattern: "^[0-9a-zA-Z]+$",
        value: this.state.username,
        onChange: function onChange(event) {
          return _this2.setState({
            username: event.target.value
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password:\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        minLength: 6,
        maxLength: 32,
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, !this.props.error ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoWrap, null, "That username and password combination isn't on file \u2014 try again."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__["PostMedia"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_4__["Confirm"], {
        confirmProps: {
          type: 'submit'
        }
      }))));
    }
  }]);

  return LoginBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Login = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    error: state.session.error
  };
}, function (dispatch) {
  return {
    onSubmit: function onSubmit(username, password) {
      return dispatch(Object(_actions_session__WEBPACK_IMPORTED_MODULE_5__["sessionBegin"])(username, password));
    }
  };
})(LoginBase);

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ "./components/posts.js");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry */ "./components/entry.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./components/login.js");





var Main = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (store) {
  return {
    username: store.session.username
  };
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_entry__WEBPACK_IMPORTED_MODULE_3__["Entry"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_4__["Login"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_posts__WEBPACK_IMPORTED_MODULE_2__["Posts"], null));
});

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _actions_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/session */ "./actions/session.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  height: 5rem;\n  transition: transform 100ms linear;\n  :hover {\n    transform: scale(0.85);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  vertical-align: bottom;\n  align-items: flex-end;\n  max-height: 5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: right;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NavLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var NavCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var NavRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var NavBase = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject4());
var NavTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject5());
var NavUsername = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var NavImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject7());
var Nav = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    username: state.session.username
  };
}, function (dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_actions_session__WEBPACK_IMPORTED_MODULE_3__["sessionEnd"])());
    }
  };
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBase, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLeft, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavTitle, null, document.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavImg, {
    src: "/img/icon.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavRight, null, props.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavUsername, null, props.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: props.logout
  }, "Logout")) : null));
});

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: Username, PostText, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Username", function() { return Username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostText", function() { return PostText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago-react */ "../../node_modules/timeago-react/lib/timeago-react.js");
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timeago_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ "./components/layouts.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  white-space: pre-wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  text-decoration: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Username = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject(), function (props) {
  return props.own ? 'underline' : 'none';
});
var PostText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__["PostBase"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_3__["PostBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Username, {
    own: props.own
  }, props.username), "\xA0\u2014\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(timeago_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    datetime: props.date
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostText, null, props.text)));
};

/***/ }),

/***/ "./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./components/post.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    posts: state.post.posts,
    username: state.session.username
  };
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, props.posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_post__WEBPACK_IMPORTED_MODULE_2__["Post"], _extends({}, post, {
      key: post.id,
      own: post.username === props.username
    }));
  }).reverse());
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app */ "./components/app.js");
/* harmony import */ var _reducers_session_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/session.js */ "./reducers/session.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/post */ "./reducers/post.js");
/* harmony import */ var _actions_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/session */ "./actions/session.js");
/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/post */ "./actions/post.js");
/* harmony import */ var _middleware_websockets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middleware/websockets */ "./middleware/websockets.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme */ "./theme.json");
var _theme__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./theme */ "./theme.json", 1);














var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  session: _reducers_session_js__WEBPACK_IMPORTED_MODULE_6__["sessionReducer"],
  post: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["postReducer"]
}), Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(_middleware_websockets__WEBPACK_IMPORTED_MODULE_10__["websocketsMiddleware"]));
store.dispatch({
  type: 'SOCKET:INIT'
});

if (window.__PRELOADED_STATE__) {
  var username, posts;

  if (username = window.__PRELOADED_STATE__.username) {
    store.dispatch(Object(_actions_session__WEBPACK_IMPORTED_MODULE_8__["sessionBegin"])(window.__PRELOADED_STATE__.username));
  }

  if (posts = window.__PRELOADED_STATE__.posts) {
    store.dispatch(Object(_actions_post__WEBPACK_IMPORTED_MODULE_9__["postsReceive"])(posts));
  }
} // Function to render the whole application


Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
  theme: _theme__WEBPACK_IMPORTED_MODULE_11__
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_5__["App"], null))), document.getElementById('root'));

/***/ }),

/***/ "./middleware/websockets.js":
/*!**********************************!*\
  !*** ./middleware/websockets.js ***!
  \**********************************/
/*! exports provided: websocketsMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "websocketsMiddleware", function() { return websocketsMiddleware; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "../../node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(); // Inbound Message from Socket server

var incomingMessages = ['SESSION:LOGIN', 'SESSION:ERROR', 'POSTS:RECEIVE', 'POST:RECEIVE', 'POST:ERROR'];
var websocketsMiddleware = function websocketsMiddleware(store) {
  return function (next) {
    return function (action) {
      var type = action.type,
          payload = _objectWithoutProperties(action, ["type"]);

      if (type === 'SOCKET:INIT') {
        // Setup the socket callbacks
        incomingMessages.forEach(function (type) {
          socket.on(type, function (payload) {
            store.dispatch(Object.assign({
              type: type
            }, payload));
          });
        });
      } else if (type === 'POST:CREATE' && payload.text !== '') {
        socket.emit('POST:CREATE', {
          text: payload.text
        });
      } else if (type === 'POSTS:REQUEST') {
        // length will be one higher than the highest index (id) or 0
        socket.emit('POSTS:REQUEST', {
          beginID: store.getState().post.posts.length
        });
      } else if (type === 'SESSION:BEGIN') {
        socket.emit('SESSION:BEGIN', {
          username: payload.username,
          password: payload.password
        });
      } else if (type === 'SESSION:END') {
        socket.emit('SESSION:END');
        next(action);
      } else {
        next(action); // let store handle other actions
      }
    };
  };
};

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayCopy = function arrayCopy(arr) {
  return Object.assign([], arr);
}; // Returns a new array containing arr[ind]


var arrayImmutableInsertObj = function arrayImmutableInsertObj(arr, ind, val) {
  var copy = arrayCopy(arr);
  copy[ind] = val;
  return copy;
}; // Returns a new array with val shallowly merged with arr[ind].


var arrayImmutableUpdateObj = function arrayImmutableUpdateObj(arr, ind, val) {
  return ind in arr ? arr.map(function (e, i) {
    return ind === i ? _objectSpread({}, e, val) : e;
  }) : arrayImmutableInsertObj(arr, ind, val);
}; // Returns a new array with val not included


var arrayImmutableDelete = function arrayImmutableDelete(arr, ind) {
  var copy = arrayCopy(arr);
  delete copy[ind];
  return copy;
};

var initialState = {
  posts: [] // sparse array indexed by id

};
var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var type = action.type,
      payload = _objectWithoutProperties(action, ["type"]);

  switch (type) {
    case 'POST:RECEIVE':
      return Object.assign({}, state, {
        posts: arrayImmutableInsertObj(state.posts, payload.id, payload)
      });

    case 'POSTS:RECEIVE':
      var idIndexed = [];

      if (payload.posts) {
        payload.posts.forEach(function (post) {
          return idIndexed[post.id] = post;
        });
        return Object.assign({}, state, {
          posts: Object.assign([], state.posts, idIndexed)
        });
      } else {
        return state;
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./reducers/session.js":
/*!*****************************!*\
  !*** ./reducers/session.js ***!
  \*****************************/
/*! exports provided: sessionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionReducer", function() { return sessionReducer; });
var initialState = {
  username: ''
};
var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SESSION:LOGIN':
      return Object.assign({}, state, {
        username: action.username
      });

    case 'SESSION:END':
      return Object.assign({}, state, {
        username: ''
      });

    case 'SESSION:ERROR':
      return Object.assign({}, state, {
        username: '',
        error: true
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./theme.json":
/*!********************!*\
  !*** ./theme.json ***!
  \********************/
/*! exports provided: themeColor, backgroundColor, postColor, dimColor, errorColor, rounding, padding, votesWidth, maxLength, default */
/***/ (function(module) {

module.exports = {"themeColor":"#3e305a","backgroundColor":"#d8c3ff","postColor":"#fff","dimColor":"#ccc","errorColor":"#ed6a9a","rounding":"1rem","padding":"1rem","votesWidth":"2em","maxLength":20};

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9zZXNzaW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvd2Vic29ja2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJ0ZXh0TGltaXQiLCJ2YWxpZGF0ZSIsImlucHV0IiwicnVsZXMiLCJydWxlIiwiZmluZCIsInRlc3QiLCJtc2ciLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZVBvc3QiLCJ0ZXh0IiwieCIsImxlbmd0aCIsInBvc3RDcmVhdGUiLCJ0eXBlIiwicG9zdHNSZWNlaXZlIiwicG9zdHMiLCJzZXNzaW9uQmVnaW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic2Vzc2lvbkVuZCIsIkFwcFBhZCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWVDb2xvciIsIkFwcENlbnRlciIsIkFwcCIsIlBsYWluQnRuIiwiYnV0dG9uIiwiQ2hlY2tCdG4iLCJYQnRuIiwiQ29uZmlybSIsIm9uQ29uZmlybSIsIm9uRGVueSIsImNvbmZpcm1Qcm9wcyIsImRlbnlQcm9wcyIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJwb3N0Q29sb3IiLCJFbnRyeUJhc2UiLCJzdGF0ZSIsInZhbGlkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50IiwiRW50cnkiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJQb3N0QmFzZSIsInJvdW5kaW5nIiwiUG9zdEJvZHkiLCJzcGFuIiwiUG9zdE1lZGlhRmxleCIsIlBvc3RNZWRpYUJhc2UiLCJQb3N0TWVkaWEiLCJJbnB1dCIsImVycm9yQ29sb3IiLCJOb1dyYXAiLCJMb2dpbkJhc2UiLCJvblN1Ym1pdCIsImVycm9yIiwiTG9naW4iLCJzZXNzaW9uIiwiTWFpbiIsInN0b3JlIiwiTmF2TGVmdCIsIk5hdkNlbnRlciIsIk5hdlJpZ2h0IiwiTmF2QmFzZSIsImhlYWRlciIsIk5hdlRpdGxlIiwiaDEiLCJOYXZVc2VybmFtZSIsIk5hdkltZyIsImltZyIsIk5hdiIsImxvZ291dCIsImRvY3VtZW50IiwidGl0bGUiLCJVc2VybmFtZSIsIm93biIsIlBvc3RUZXh0IiwiUG9zdCIsImRhdGUiLCJQb3N0cyIsIm1hcCIsImlkIiwicmV2ZXJzZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwic2Vzc2lvblJlZHVjZXIiLCJwb3N0UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsIndlYnNvY2tldHNNaWRkbGV3YXJlIiwid2luZG93IiwiX19QUkVMT0FERURfU1RBVEVfXyIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwic29ja2V0IiwiaW8iLCJpbmNvbWluZ01lc3NhZ2VzIiwibmV4dCIsImFjdGlvbiIsInBheWxvYWQiLCJmb3JFYWNoIiwib24iLCJPYmplY3QiLCJhc3NpZ24iLCJlbWl0IiwiYmVnaW5JRCIsImdldFN0YXRlIiwiYXJyYXlDb3B5IiwiYXJyIiwiYXJyYXlJbW11dGFibGVJbnNlcnRPYmoiLCJpbmQiLCJ2YWwiLCJjb3B5IiwiYXJyYXlJbW11dGFibGVVcGRhdGVPYmoiLCJlIiwiaSIsImFycmF5SW1tdXRhYmxlRGVsZXRlIiwiaW5pdGlhbFN0YXRlIiwiaWRJbmRleGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtB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LE9BTEQsTUFLTztBQUNMLGVBQU90RixLQUFQO0FBQ0Q7O0FBQ0g7QUFDRSxhQUFPQSxLQUFQO0FBaEJKO0FBa0JELENBcEJNLEM7Ozs7Ozs7Ozs7OztBQ3pCUDtBQUFBO0FBQUEsSUFBTXFGLFlBQVksR0FBRztBQUNuQi9HLFVBQVEsRUFBRTtBQURTLENBQXJCO0FBSU8sSUFBTWdGLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBa0M7QUFBQSxNQUFqQ3RELEtBQWlDLHVFQUF6QnFGLFlBQXlCO0FBQUEsTUFBWG5CLE1BQVc7O0FBQzlELFVBQVFBLE1BQU0sQ0FBQ2hHLElBQWY7QUFDRSxTQUFLLGVBQUw7QUFDRSxhQUFPb0csTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQnZFLEtBQWxCLEVBQXlCO0FBQUMxQixnQkFBUSxFQUFFNEYsTUFBTSxDQUFDNUY7QUFBbEIsT0FBekIsQ0FBUDs7QUFDRixTQUFLLGFBQUw7QUFDRSxhQUFPZ0csTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQnZFLEtBQWxCLEVBQXlCO0FBQUMxQixnQkFBUSxFQUFFO0FBQVgsT0FBekIsQ0FBUDs7QUFDRixTQUFLLGVBQUw7QUFDRSxhQUFPZ0csTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQnZFLEtBQWxCLEVBQXlCO0FBQUMxQixnQkFBUSxFQUFFLEVBQVg7QUFBZWtELGFBQUssRUFBRTtBQUF0QixPQUF6QixDQUFQOztBQUNGO0FBQ0UsYUFBT3hCLEtBQVA7QUFSSjtBQVVELENBWE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImNvbnN0IHRleHRMaW1pdCA9IDE0MDtcblxuY29uc3QgdmFsaWRhdGUgPSAoaW5wdXQsIHJ1bGVzKSA9PiB7XG4gIC8vIEV4ZWN1dGUgYSBzZXQgb2YgdGVzdHMgYW5kIGlmIGludmFsaWQsIHJldHVybiBhbiBlcnJvciBtZXNzYWdlXG4gIGNvbnN0IHJ1bGUgPSBydWxlcy5maW5kKHJ1bGUgPT4gIXJ1bGUudGVzdChpbnB1dCkpO1xuICByZXR1cm4gcnVsZSA/IHJ1bGUubXNnIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUG9zdCA9IHRleHQgPT4ge1xuICByZXR1cm4gdmFsaWRhdGUodGV4dCwgW1xuICAgIHt0ZXN0OiB4ID0+IHgubGVuZ3RoID4gMCwgbXNnOiAnWW91ciBwb3N0IHNob3VsZCBoYXZlIHNvbWUgY29udGVudC4nfSxcbiAgICB7dGVzdDogeCA9PiB4Lmxlbmd0aCA8PSB0ZXh0TGltaXQsIG1zZzogYFlvdXIgcG9zdCBzaG91bGRuJ3QgYmUgbG9uZ2VyIHRoYW4gJHt0ZXh0TGltaXR9IGNoYXJhY3RlcnMuYH1cbiAgXSk7XG59O1xuXG4iLCJleHBvcnQgY29uc3QgcG9zdENyZWF0ZSA9IHRleHQgPT4gKHtcbiAgdHlwZTogJ1BPU1Q6Q1JFQVRFJyxcbiAgdGV4dDogdGV4dFxufSk7XG5cbmV4cG9ydCBjb25zdCBwb3N0c1JlY2VpdmUgPSBwb3N0cyA9PiAoe1xuICB0eXBlOiAnUE9TVFM6UkVDRUlWRScsXG4gIHBvc3RzOiBwb3N0c1xufSk7XG5cbiIsImV4cG9ydCBjb25zdCBzZXNzaW9uQmVnaW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiAoe1xuICB0eXBlOiAnU0VTU0lPTjpCRUdJTicsXG4gIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgcGFzc3dvcmQ6IHBhc3N3b3JkXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25FbmQgPSAoKSA9PiAoe1xuICB0eXBlOiAnU0VTU0lPTjpFTkQnXG59KTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge05hdn0gZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHtNYWlufSBmcm9tICcuL21haW4nO1xuXG5cbmNvbnN0IEFwcFBhZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmRDb2xvcn07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRoZW1lQ29sb3J9O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuYDtcbmNvbnN0IEFwcENlbnRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQXBwID0gcHJvcHMgPT4gKFxuICA8QXBwUGFkPlxuICAgIDxBcHBDZW50ZXI+XG4gICAgICA8TmF2IHVzZXJuYW1lPXtwcm9wcy51c2VybmFtZX0vPlxuICAgICAgPE1haW4vPlxuICAgIDwvQXBwQ2VudGVyPlxuICA8L0FwcFBhZD5cbik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBsYWluQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1MCU7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tCdG4gPSBwcm9wcyA9PiAoXG4gIDxQbGFpbkJ0biB7Li4ucHJvcHN9PlxuICAgICYjMTAwMDQ7XG4gIDwvUGxhaW5CdG4+XG4pO1xuXG5leHBvcnQgY29uc3QgWEJ0biA9IHByb3BzID0+IChcbiAgPFBsYWluQnRuIHsuLi5wcm9wc30+XG4gICAgJiMxMDAwODtcbiAgPC9QbGFpbkJ0bj5cbik7XG5cbmV4cG9ydCBjb25zdCBDb25maXJtID0gKHtvbkNvbmZpcm0sIG9uRGVueSwgY29uZmlybVByb3BzLCBkZW55UHJvcHN9KSA9PiAoXG4gIDw+XG4gICAgPGRpdj5cbiAgICAgIHtjb25maXJtUHJvcHMgfHwgb25Db25maXJtID8gPENoZWNrQnRuIHsuLi5jb25maXJtUHJvcHN9IG9uQ2xpY2s9e29uQ29uZmlybX0vPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIHtkZW55UHJvcHMgfHwgb25EZW55ID8gPFhCdG4gey4uLmRlbnlQcm9wc30gb25DbGljaz17b25EZW55fS8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtwb3N0Q3JlYXRlfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3QnO1xuaW1wb3J0IHtQb3N0QmFzZSwgUG9zdEJvZHksIFBvc3RNZWRpYX0gZnJvbSAnLi9sYXlvdXRzJztcbmltcG9ydCB7Q29uZmlybX0gZnJvbSAnLi9jb25maXJtYXRpb24nO1xuaW1wb3J0IHt2YWxpZGF0ZVBvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICBtaW4taGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDA7XG4gIGJvcmRlcjogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBvc3RDb2xvcn07XG4gIHJlc2l6ZTogdmVydGljYWw7XG5gO1xuXG5jbGFzcyBFbnRyeUJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3RleHQ6ICcnfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlUG9zdCh0aGlzLnN0YXRlLnRleHQpID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIHRoaXMucHJvcHMucG9zdCh0aGlzLnN0YXRlLnRleHQpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6ICcnfSk7XG4gICAgICAgIH1cbiAgICAgIH19PlxuICAgICAgICA8UG9zdEJhc2U+XG4gICAgICAgICAgPFBvc3RCb2R5PlxuICAgICAgICAgICAgPFRleHRBcmVhIGF1dG9Gb2N1cyBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydUYWxrIGFib3V0IHNvbWV0aGluZy4uLid9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3RleHQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfSB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fS8+XG4gICAgICAgICAgPC9Qb3N0Qm9keT5cbiAgICAgICAgICA8UG9zdE1lZGlhPlxuICAgICAgICAgICAgPENvbmZpcm0gY29uZmlybVByb3BzPXt7dHlwZTogJ3N1Ym1pdCd9fSBvbkRlbnk9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3RleHQ6ICcnfSl9Lz5cbiAgICAgICAgICA8L1Bvc3RNZWRpYT5cbiAgICAgICAgPC9Qb3N0QmFzZT5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbi8vIE9ubHkgd29ya3MgaWYgbG9nZ2VkIGluXG5leHBvcnQgY29uc3QgRW50cnkgPSBjb25uZWN0KFxuICB1bmRlZmluZWQsXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgcG9zdDogdGV4dCA9PiBkaXNwYXRjaChwb3N0Q3JlYXRlKHRleHQpKVxuICB9KVxuKShcbiAgRW50cnlCYXNlXG4pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgUG9zdEJhc2UgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucm91bmRpbmd9O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wb3N0Q29sb3J9XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdEJvZHkgPSBzdHlsZWQuc3BhbmBcbiAgZmxleDogMTtcbiAgYWxpZ24tc2VsZjogZmxleC1jZW50ZXI7XG5gO1xuXG5jb25zdCBQb3N0TWVkaWFGbGV4ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1jZW50ZXI7XG5gO1xuXG5jb25zdCBQb3N0TWVkaWFCYXNlID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBvc3RNZWRpYSA9IHByb3BzID0+IChcbiAgPFBvc3RNZWRpYUZsZXg+XG4gICAgPFBvc3RNZWRpYUJhc2Ugey4uLnByb3BzfS8+XG4gIDwvUG9zdE1lZGlhRmxleD5cbik7XG5cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7UG9zdEJhc2UsIFBvc3RCb2R5LCBQb3N0TWVkaWF9IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQge0NvbmZpcm19IGZyb20gJy4vY29uZmlybWF0aW9uJztcbmltcG9ydCB7c2Vzc2lvbkJlZ2lufSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24nO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlcjogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wb3N0Q29sb3J9O1xuICA6aW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgfVxuYDtcblxuY29uc3QgTm9XcmFwID0gc3R5bGVkLnNwYW5gXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5jbGFzcyBMb2dpbkJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3VzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2V2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgIH19PlxuICAgICAgICA8UG9zdEJhc2U+XG4gICAgICAgICAgPFBvc3RCb2R5PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPE5vV3JhcD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6Jm5ic3A7PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbWF4TGVuZ3RoPXszMn0gcGF0dGVybj1cIl5bMC05YS16QS1aXSskXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cbiAgICAgICAgICAgICAgPC9Ob1dyYXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxOb1dyYXA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOiZuYnNwOzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBtaW5MZW5ndGg9ezZ9IG1heExlbmd0aD17MzJ9XG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgICAgICAgIDwvTm9XcmFwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZXJyb3IgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgPE5vV3JhcD5cbiAgICAgICAgICAgICAgICAgICAgVGhhdCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgY29tYmluYXRpb24gaXNuJ3Qgb24gZmlsZSAmbWRhc2g7IHRyeSBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgIDwvTm9XcmFwPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Qb3N0Qm9keT5cbiAgICAgICAgICA8UG9zdE1lZGlhPlxuICAgICAgICAgICAgPENvbmZpcm0gY29uZmlybVByb3BzPXt7dHlwZTogJ3N1Ym1pdCd9fS8+XG4gICAgICAgICAgPC9Qb3N0TWVkaWE+XG4gICAgICAgIDwvUG9zdEJhc2U+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTG9naW4gPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGVycm9yOiBzdGF0ZS5zZXNzaW9uLmVycm9yXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIG9uU3VibWl0OiAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChzZXNzaW9uQmVnaW4odXNlcm5hbWUsIHBhc3N3b3JkKSlcbiAgfSlcbikoTG9naW5CYXNlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7UG9zdHN9IGZyb20gJy4vcG9zdHMnO1xuaW1wb3J0IHtFbnRyeX0gZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQge0xvZ2lufSBmcm9tICcuL2xvZ2luJztcblxuZXhwb3J0IGNvbnN0IE1haW4gPSBjb25uZWN0KFxuICBzdG9yZSA9PiAoe1xuICAgIHVzZXJuYW1lOiBzdG9yZS5zZXNzaW9uLnVzZXJuYW1lXG4gIH0pXG4pKHByb3BzID0+IChcbiAgPD5cbiAgICB7XG4gICAgICBwcm9wcy51c2VybmFtZSA/IDxFbnRyeS8+IDogPExvZ2luLz5cbiAgICB9XG4gICAgPFBvc3RzLz5cbiAgPC8+XG4pKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7c2Vzc2lvbkVuZH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uJztcblxuY29uc3QgTmF2TGVmdCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gO1xuY29uc3QgTmF2Q2VudGVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcbmNvbnN0IE5hdlJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5gO1xuY29uc3QgTmF2QmFzZSA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWF4LWhlaWdodDogNXJlbTtcbmA7XG5jb25zdCBOYXZUaXRsZSA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5jb25zdCBOYXZVc2VybmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmNvbnN0IE5hdkltZyA9IHN0eWxlZC5pbWdgXG4gIGhlaWdodDogNXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGxpbmVhcjtcbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB1c2VybmFtZTogc3RhdGUuc2Vzc2lvbi51c2VybmFtZVxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBsb2dvdXQ6ICgpID0+IGRpc3BhdGNoKHNlc3Npb25FbmQoKSlcbiAgfSlcbikocHJvcHMgPT4gKFxuICA8TmF2QmFzZT5cbiAgICA8TmF2TGVmdD5cbiAgICAgIDxOYXZUaXRsZT57ZG9jdW1lbnQudGl0bGV9PC9OYXZUaXRsZT5cbiAgICA8L05hdkxlZnQ+XG4gICAgPE5hdkNlbnRlcj5cbiAgICAgIDxOYXZJbWcgc3JjPVwiL2ltZy9pY29uLnBuZ1wiLz5cbiAgICA8L05hdkNlbnRlcj5cbiAgICA8TmF2UmlnaHQ+XG4gICAgICB7XG4gICAgICAgIHByb3BzLnVzZXJuYW1lXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TmF2VXNlcm5hbWU+e3Byb3BzLnVzZXJuYW1lfTwvTmF2VXNlcm5hbWU+XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLmxvZ291dH0+TG9nb3V0PC9hPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvTmF2UmlnaHQ+XG4gIDwvTmF2QmFzZT5cbikpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUaW1lQWdvIGZyb20gJ3RpbWVhZ28tcmVhY3QnO1xuaW1wb3J0IHtQb3N0QmFzZSwgUG9zdEJvZHl9IGZyb20gJy4vbGF5b3V0cyc7XG5cbmV4cG9ydCBjb25zdCBVc2VybmFtZSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiAke3Byb3BzID0+IHByb3BzLm93biA/ICd1bmRlcmxpbmUnIDogJ25vbmUnfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0VGV4dCA9IHN0eWxlZC5kaXZgXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0ID0gcHJvcHMgPT4gKFxuICA8UG9zdEJhc2U+XG4gICAgPFBvc3RCb2R5PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFVzZXJuYW1lIG93bj17cHJvcHMub3dufT57cHJvcHMudXNlcm5hbWV9PC9Vc2VybmFtZT5cbiAgICAgICAgJm5ic3A7Jm1kYXNoOyZuYnNwO1xuICAgICAgICA8VGltZUFnbyBkYXRldGltZT17cHJvcHMuZGF0ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8UG9zdFRleHQ+e3Byb3BzLnRleHR9PC9Qb3N0VGV4dD5cbiAgICA8L1Bvc3RCb2R5PlxuICA8L1Bvc3RCYXNlPlxuKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuL3Bvc3QnO1xuXG5leHBvcnQgY29uc3QgUG9zdHMgPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHBvc3RzOiBzdGF0ZS5wb3N0LnBvc3RzLFxuICAgIHVzZXJuYW1lOiBzdGF0ZS5zZXNzaW9uLnVzZXJuYW1lXG4gIH0pXG4pKFxuICBwcm9wcyA9PiAoXG4gICAgPG1haW4+XG4gICAgICB7cHJvcHMucG9zdHMubWFwKHBvc3QgPT4gPFBvc3Qgey4uLnBvc3R9IGtleT17cG9zdC5pZH0gb3duPXtwb3N0LnVzZXJuYW1lID09PSBwcm9wcy51c2VybmFtZX0vPikucmV2ZXJzZSgpfVxuICAgIDwvbWFpbj5cbiAgKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtBcHB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IHtzZXNzaW9uUmVkdWNlcn0gZnJvbSAnLi9yZWR1Y2Vycy9zZXNzaW9uLmpzJztcbmltcG9ydCB7cG9zdFJlZHVjZXJ9IGZyb20gJy4vcmVkdWNlcnMvcG9zdCc7XG5pbXBvcnQge3Nlc3Npb25CZWdpbn0gZnJvbSAnLi9hY3Rpb25zL3Nlc3Npb24nO1xuaW1wb3J0IHtwb3N0c1JlY2VpdmV9IGZyb20gJy4vYWN0aW9ucy9wb3N0JztcbmltcG9ydCB7d2Vic29ja2V0c01pZGRsZXdhcmV9IGZyb20gJy4vbWlkZGxld2FyZS93ZWJzb2NrZXRzJztcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxuICAgIHBvc3Q6IHBvc3RSZWR1Y2VyXG4gIH0pLFxuICBhcHBseU1pZGRsZXdhcmUod2Vic29ja2V0c01pZGRsZXdhcmUpXG4pO1xuXG5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1NPQ0tFVDpJTklUJ30pO1xuXG5pZiAod2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18pIHtcbiAgbGV0IHVzZXJuYW1lLCBwb3N0cztcbiAgaWYgKHVzZXJuYW1lID0gd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18udXNlcm5hbWUpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChzZXNzaW9uQmVnaW4od2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18udXNlcm5hbWUpKTtcbiAgfVxuICBpZiAocG9zdHMgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXy5wb3N0cykge1xuICAgIHN0b3JlLmRpc3BhdGNoKHBvc3RzUmVjZWl2ZShwb3N0cykpO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgd2hvbGUgYXBwbGljYXRpb25cbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxBcHAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3Qgc29ja2V0ID0gaW8oKTtcblxuLy8gSW5ib3VuZCBNZXNzYWdlIGZyb20gU29ja2V0IHNlcnZlclxuY29uc3QgaW5jb21pbmdNZXNzYWdlcyA9IFtcbiAgJ1NFU1NJT046TE9HSU4nLFxuICAnU0VTU0lPTjpFUlJPUicsXG4gICdQT1NUUzpSRUNFSVZFJyxcbiAgJ1BPU1Q6UkVDRUlWRScsXG4gICdQT1NUOkVSUk9SJ1xuXTtcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldHNNaWRkbGV3YXJlID0gc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICBjb25zdCB7dHlwZSwgLi4ucGF5bG9hZH0gPSBhY3Rpb247XG4gIGlmICh0eXBlID09PSAnU09DS0VUOklOSVQnKSB7XG4gICAgLy8gU2V0dXAgdGhlIHNvY2tldCBjYWxsYmFja3NcbiAgICBpbmNvbWluZ01lc3NhZ2VzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICBzb2NrZXQub24odHlwZSwgcGF5bG9hZCA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKE9iamVjdC5hc3NpZ24oe3R5cGU6IHR5cGV9LCBwYXlsb2FkKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnUE9TVDpDUkVBVEUnICYmIHBheWxvYWQudGV4dCAhPT0gJycpIHtcbiAgICBzb2NrZXQuZW1pdCgnUE9TVDpDUkVBVEUnLCB7dGV4dDogcGF5bG9hZC50ZXh0fSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1BPU1RTOlJFUVVFU1QnKSB7XG4gICAgLy8gbGVuZ3RoIHdpbGwgYmUgb25lIGhpZ2hlciB0aGFuIHRoZSBoaWdoZXN0IGluZGV4IChpZCkgb3IgMFxuICAgIHNvY2tldC5lbWl0KCdQT1NUUzpSRVFVRVNUJywge2JlZ2luSUQ6IHN0b3JlLmdldFN0YXRlKCkucG9zdC5wb3N0cy5sZW5ndGh9KTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnU0VTU0lPTjpCRUdJTicpIHtcbiAgICBzb2NrZXQuZW1pdCgnU0VTU0lPTjpCRUdJTicsIHt1c2VybmFtZTogcGF5bG9hZC51c2VybmFtZSwgcGFzc3dvcmQ6IHBheWxvYWQucGFzc3dvcmR9KTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnU0VTU0lPTjpFTkQnKSB7XG4gICAgc29ja2V0LmVtaXQoJ1NFU1NJT046RU5EJyk7XG4gICAgbmV4dChhY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIG5leHQoYWN0aW9uKTsgLy8gbGV0IHN0b3JlIGhhbmRsZSBvdGhlciBhY3Rpb25zXG4gIH1cbn07IiwiY29uc3QgYXJyYXlDb3B5ID0gYXJyID0+IE9iamVjdC5hc3NpZ24oW10sIGFycik7XG5cbi8vIFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyBhcnJbaW5kXVxuY29uc3QgYXJyYXlJbW11dGFibGVJbnNlcnRPYmogPSAoYXJyLCBpbmQsIHZhbCkgPT4ge1xuICBsZXQgY29weSA9IGFycmF5Q29weShhcnIpO1xuICBjb3B5W2luZF0gPSB2YWw7XG4gIHJldHVybiBjb3B5O1xufTtcbi8vIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB2YWwgc2hhbGxvd2x5IG1lcmdlZCB3aXRoIGFycltpbmRdLlxuY29uc3QgYXJyYXlJbW11dGFibGVVcGRhdGVPYmogPSAoYXJyLCBpbmQsIHZhbCkgPT4gKFxuICBpbmQgaW4gYXJyXG4gICAgPyAoYXJyLm1hcCgoZSwgaSkgPT4gaW5kID09PSBpID8gey4uLmUsIC4uLnZhbH0gOiBlKSlcbiAgICA6IGFycmF5SW1tdXRhYmxlSW5zZXJ0T2JqKGFyciwgaW5kLCB2YWwpXG4pO1xuLy8gUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHZhbCBub3QgaW5jbHVkZWRcbmNvbnN0IGFycmF5SW1tdXRhYmxlRGVsZXRlID0gKGFyciwgaW5kKSA9PiB7XG4gIGxldCBjb3B5ID0gYXJyYXlDb3B5KGFycik7XG4gIGRlbGV0ZSBjb3B5W2luZF07XG4gIHJldHVybiBjb3B5O1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwb3N0czogW10gLy8gc3BhcnNlIGFycmF5IGluZGV4ZWQgYnkgaWRcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHt0eXBlLCAuLi5wYXlsb2FkfSA9IGFjdGlvbjtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnUE9TVDpSRUNFSVZFJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBwb3N0czogYXJyYXlJbW11dGFibGVJbnNlcnRPYmooc3RhdGUucG9zdHMsIHBheWxvYWQuaWQsIHBheWxvYWQpXG4gICAgICB9KTtcbiAgICBjYXNlICdQT1NUUzpSRUNFSVZFJzpcbiAgICAgIGNvbnN0IGlkSW5kZXhlZCA9IFtdO1xuICAgICAgaWYgKHBheWxvYWQucG9zdHMpIHtcbiAgICAgICAgcGF5bG9hZC5wb3N0cy5mb3JFYWNoKHBvc3QgPT4gaWRJbmRleGVkW3Bvc3QuaWRdID0gcG9zdCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIHBvc3RzOiBPYmplY3QuYXNzaWduKFtdLCBzdGF0ZS5wb3N0cywgaWRJbmRleGVkKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogJydcbn07XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVNTSU9OOkxPR0lOJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3VzZXJuYW1lOiBhY3Rpb24udXNlcm5hbWV9KTtcbiAgICBjYXNlICdTRVNTSU9OOkVORCc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt1c2VybmFtZTogJyd9KTtcbiAgICBjYXNlICdTRVNTSU9OOkVSUk9SJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3VzZXJuYW1lOiAnJywgZXJyb3I6IHRydWV9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=