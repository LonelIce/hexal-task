/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url["default"] : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/Lato.ttf */ "./src/assets/font/Lato.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/Lato-Black.ttf */ "./src/assets/font/Lato-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/MavenPro-Regular.ttf */ "./src/assets/font/MavenPro-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n@font-face {\n  font-family: \"MavenProRegular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\nbody {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  font-family: \"Lato\", sans-serif;\n  background-color: #323232;\n  height: 63px;\n  display: flex;\n  justify-content: center;\n  width: 1020px;\n}\nheader .link, header h1 {\n  flex-basis: 20%;\n  flex-grow: 1;\n  display: flex;\n  z-index: 102;\n  height: 74px;\n  align-items: center;\n  border-bottom: 1px solid #e4e9eb;\n}\nheader .link a, header .link a h1, header h1 a, header h1 a h1 {\n  text-decoration: none;\n  color: white;\n  font-size: 10px;\n}\nheader .link a.active, header .link a.active h1, header h1 a.active, header h1 a.active h1 {\n  color: #2eb398;\n}\nheader .link .indent, header h1 .indent {\n  padding-right: 24px;\n}\nheader .before {\n  justify-content: flex-end;\n  margin-left: 30px;\n}\nheader .after {\n  margin-right: 30px;\n}\nheader .logo {\n  display: flex;\n  justify-content: center;\n  flex-basis: 139px;\n  z-index: 102;\n  height: 74px;\n  align-items: center;\n}\n\n.pointy-thingy {\n  border-style: solid;\n  border-width: 51.5px 90px 0 90px;\n  border-color: #323232 transparent transparent transparent;\n  position: absolute;\n  top: 38px;\n}\n\n.portfolio {\n  display: flex;\n  flex-direction: column;\n  height: 721px;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.portfolio div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.portfolio div img {\n  height: 206px;\n  width: auto;\n}\n.portfolio .top, .portfolio .bottom {\n  position: relative;\n  height: 104px;\n  border-left: 1px solid #e4e9eb;\n  border-right: 1px solid #e4e9eb;\n  width: 820px;\n}\n.portfolio .top {\n  bottom: 13px;\n}\n.portfolio .bottom {\n  top: 13px;\n}\n.portfolio .slide-switches {\n  position: absolute;\n  width: 1020px;\n  display: flex;\n  justify-content: flex-start;\n  bottom: 11px;\n}\n.portfolio .slide-switches .switches {\n  margin: 0 30px;\n  padding-bottom: 11px;\n  border-bottom: 1px solid #e4e9eb;\n  flex-grow: 1;\n  justify-content: flex-start;\n}\n.portfolio .slide-switches .switches .switch {\n  margin-right: 3px;\n  width: 6px;\n  height: 6px;\n  background-color: #ddd2c5;\n}\n.portfolio .slide-switches .switches .active-switch {\n  background-color: #8b8784;\n}\n\n.img {\n  width: 180px;\n  margin: 0 10px;\n}\n\n.profile {\n  display: flex;\n  background-color: #2eb398;\n  height: 301px;\n  justify-content: center;\n  width: 1020px;\n  padding: 20px 0;\n}\n.profile .photo, .profile .text {\n  display: flex;\n}\n.profile .photo {\n  justify-content: center;\n  align-items: center;\n  border-left: 1px solid #219d84;\n  width: 180px;\n  padding: 0 20px;\n}\n.profile .text {\n  justify-content: center;\n  flex-direction: column;\n  padding-right: 20px;\n  width: 580px;\n  border-right: 1px solid #219d84;\n}\n.profile .text .name {\n  font-size: 28.5px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #d7fcf5;\n  word-spacing: 3px;\n}\n.profile .text .profession {\n  font-size: 18px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #20816d;\n  word-spacing: 0.01px;\n  letter-spacing: 0;\n  padding-bottom: 14px;\n}\n.profile .text .description {\n  font-size: 11.4px;\n  font-family: \"Lato\", sans-serif;\n  color: #d7fcf5;\n  line-height: 2;\n  text-align: justify;\n  word-spacing: 0.74px;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n.profile .text .messengers {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 34px;\n  margin-bottom: 9px;\n}\n.profile .text .messengers a div {\n  height: 24px;\n  width: 24.5px;\n}\n.profile .text .messengers a div svg {\n  height: 12px;\n  width: 12px;\n  margin: 6px;\n}\n.profile .text .messengers a:link div {\n  background-color: #a5dbd4;\n}\n.profile .text .messengers a:visited div {\n  background-color: #7ed0c5;\n}\n.profile .text .messengers a:hover div {\n  background-color: #6ccbbe;\n}\n.profile .text .icon {\n  fill: #2eb398;\n}\n\n.get-in-touch {\n  padding: 13px 0;\n  display: flex;\n  flex-direction: column;\n  width: 1020px;\n  height: 538px;\n  background-color: #323232;\n}\n.get-in-touch .header-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid #2b2b2b;\n  padding-top: 50px;\n}\n.get-in-touch .header-footer .heading, .get-in-touch .header-footer .subtitle {\n  font-family: \"MavenProRegular\", sans-serif;\n  width: 780px;\n}\n.get-in-touch .header-footer .heading {\n  font-size: 30px;\n  color: #e0e0e0;\n  line-height: 1;\n  word-spacing: 1px;\n}\n.get-in-touch .header-footer .subtitle {\n  font-size: 18px;\n  color: #bebebe;\n}\n.get-in-touch .bot {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  padding-top: 10px;\n  padding-bottom: 43px;\n  border-bottom: 1px solid #2b2b2b;\n}\n.get-in-touch .bot .forms, .get-in-touch .bot .button {\n  width: 580px;\n}\n.get-in-touch .bot .forms form, .get-in-touch .bot .button form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 100%;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form input, .get-in-touch .bot .button form textarea {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  background-color: #454545;\n  border: 0;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form input, .get-in-touch .bot .button form textarea {\n  padding: 17px 13px;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .button form input {\n  height: 5px;\n}\n.get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form textarea {\n  padding: 10px 17px;\n  height: 130px;\n  resize: none;\n}\n.get-in-touch .bot .forms .button, .get-in-touch .bot .button .button {\n  display: flex;\n  justify-content: flex-end;\n}\n.get-in-touch .bot .forms button, .get-in-touch .bot .button button {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  width: 90px;\n  height: 37px;\n  background-color: #2eb398;\n  color: #d7fcf5;\n  border: 0;\n}\n.get-in-touch .bot .info {\n  padding-left: 20px;\n  padding-top: 2px;\n  width: 179px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  line-height: 1.88;\n  text-align: justify;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n.get-in-touch .bot .info span .bolder {\n  font-weight: bold;\n  color: #e0e0e0;\n}\n.get-in-touch .bot .info .contacts {\n  margin-top: 33px;\n}\n.get-in-touch .bot .info .contacts a {\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #bebebe;\n}\n.get-in-touch .bot .info .contacts a svg {\n  height: 12px;\n  width: 12px;\n  margin-right: 10px;\n}\n.get-in-touch .bot .info .contacts a svg .item {\n  fill: #2eb398;\n}\n\nfooter {\n  height: 43px;\n  background-color: #222222;\n  width: 1020px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #454545;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n}\nfooter span {\n  padding-left: 38px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$base: rgb(50, 50, 50);\r\n$background_2: rgb(46, 179, 152);\r\n$background: rgb(255, 255, 255);\r\n$text-profile: rgb(215, 252, 245);\r\n$text-profile-2: rgb(32, 129, 109);\r\n$text-footer: rgb(224, 224, 224);\r\n$text-footer-2: rgb(190, 190, 190);\r\n$input: rgb(69, 69, 69);\r\n$footer: rgb(34, 34, 34);\r\n$border: rgb(228, 233, 235);\r\n$switch: rgb(221, 210, 197);\r\n$switch-active: rgb(139, 135, 132);\r\n$border-2: rgb(33, 157, 132);\r\n$border-3: rgb(43, 43, 43);\r\n$link: rgb(165, 219, 212);\r\n$link-visited: rgb(126, 208, 197);\r\n$link-active: rgb(108, 203, 190);\r\n$contact: rgb(46, 179, 152);\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato.ttf');\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato-Black.ttf');\r\n  font-weight: bold;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"MavenProRegular\";\r\n  src: url('./assets/font/MavenPro-Regular.ttf');\r\n}\r\n\r\nbody {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  font-family: 'Lato', sans-serif;\r\n  background-color: $base;\r\n  height: 63px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 1020px;\r\n\r\n  .link, h1 {\r\n    flex-basis: 20%;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    z-index: 102;\r\n    height: 74px;\r\n    align-items: center;\r\n    border-bottom: 1px solid $border;\r\n\r\n\r\n    a, a h1 {\r\n      text-decoration: none;\r\n      color: $background;\r\n      font-size: 10px;\r\n    }\r\n\r\n    a.active, a.active h1 {\r\n      color: $background_2;\r\n    }\r\n\r\n    .indent {\r\n      padding-right: 24px;\r\n    }\r\n  }\r\n\r\n  .before {\r\n    justify-content: flex-end;\r\n    margin-left: 30px;\r\n  }\r\n\r\n  .after {\r\n    margin-right: 30px;\r\n  }\r\n\r\n  .logo {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-basis: 139px;\r\n    z-index: 102;\r\n    height: 74px;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.pointy-thingy {\r\n  border-style: solid;\r\n  border-width: 51.5px 90px 0 90px;\r\n  border-color: $base transparent transparent transparent;\r\n  position: absolute;\r\n  top: 38px;\r\n}\r\n\r\n.portfolio {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 721px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n\r\n  div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    img {\r\n      height: 206px;\r\n      width: auto;\r\n    }\r\n  }\r\n\r\n  .top, .bottom {\r\n\r\n    position: relative;\r\n    height: 104px;\r\n    border-left: 1px solid $border;\r\n    border-right: 1px solid $border;\r\n    width: 820px;\r\n  }\r\n\r\n  .top {\r\n    bottom: 13px;\r\n  }\r\n\r\n  .bottom {\r\n    top: 13px;\r\n  }\r\n\r\n  .slide-switches {\r\n    position: absolute;\r\n    width: 1020px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    bottom: 11px;\r\n\r\n    .switches {\r\n      margin: 0 30px;\r\n      padding-bottom: 11px;\r\n      border-bottom: 1px solid $border;\r\n      flex-grow: 1;\r\n      justify-content: flex-start;\r\n\r\n      .switch {\r\n        margin-right: 3px;\r\n        width: 6px;\r\n        height: 6px;\r\n        background-color: $switch;\r\n      }\r\n\r\n      .active-switch {\r\n        background-color: $switch-active;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.img {\r\n  width: 180px;\r\n  margin: 0 10px;\r\n}\r\n\r\n.profile {\r\n  display: flex;\r\n  background-color: $background_2;\r\n  height: 301px;\r\n  justify-content: center;\r\n  width: 1020px;\r\n  padding: 20px 0;\r\n\r\n  .photo, .text {\r\n    display: flex;\r\n  }\r\n\r\n  .photo {\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-left: 1px solid $border-2;\r\n    width: 180px;\r\n    padding: 0 20px;\r\n  }\r\n\r\n  .text {\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding-right: 20px;\r\n    width: 580px;\r\n    border-right: 1px solid $border-2;\r\n\r\n    .name {\r\n      font-size: 28.5px;\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      color: $text-profile;\r\n      word-spacing: 3px;\r\n    }\r\n\r\n    .profession {\r\n      font-size: 18px;\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      color: $text-profile-2;\r\n      word-spacing: 0.01px;\r\n      letter-spacing: 0;\r\n      padding-bottom: 14px;\r\n    }\r\n\r\n    .description {\r\n      font-size: 11.4px;\r\n      font-family: 'Lato', sans-serif;\r\n      color: $text-profile;\r\n      line-height: 2;\r\n      text-align: justify;\r\n      word-spacing: 0.74px;\r\n      -webkit-hyphens: auto;\r\n      -moz-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n      hyphens: auto;\r\n    }\r\n\r\n    .messengers {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      margin-top: 34px;\r\n      margin-bottom: 9px;\r\n\r\n      a {\r\n        div {\r\n          height: 24px;\r\n          width: 24.5px;\r\n\r\n          svg {\r\n            height: 12px;\r\n            width: 12px;\r\n            margin: 6px;\r\n          }\r\n        }\r\n\r\n        &:link {\r\n          div {\r\n            background-color: $link;\r\n          }\r\n        }\r\n\r\n        &:visited {\r\n          div {\r\n            background-color: $link-visited;\r\n          }\r\n        }\r\n\r\n        &:hover {\r\n          div {\r\n            background-color: $link-active;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .icon {\r\n      fill: $background_2;\r\n    }\r\n  }\r\n}\r\n\r\n.get-in-touch {\r\n  padding: 13px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 1020px;\r\n  height: 538px;\r\n  background-color: $base;\r\n\r\n  .header-footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-top: 1px solid $border-3;\r\n    padding-top: 50px;\r\n\r\n    .heading, .subtitle {\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      width: 780px;\r\n    }\r\n\r\n    .heading {\r\n      font-size: 30px;\r\n      color: $text-footer;\r\n      line-height: 1;\r\n      word-spacing: 1px;\r\n\r\n    }\r\n\r\n    .subtitle {\r\n      font-size: 18px;\r\n      color: $text-footer-2;\r\n\r\n    }\r\n  }\r\n\r\n  .bot {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    padding-top: 10px;\r\n    padding-bottom: 43px;\r\n    border-bottom: 1px solid $border-3;\r\n\r\n    .forms, .button {\r\n      width: 580px;\r\n\r\n      form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        height: 100%;\r\n\r\n        input, textarea {\r\n          font-family: 'Lato', sans-serif;\r\n          font-size: 12px;\r\n          color: $text-footer-2;\r\n          background-color: $input;\r\n          border: 0;\r\n        }\r\n\r\n        input, textarea {\r\n          padding: 17px 13px;\r\n        }\r\n\r\n        input {\r\n          height: 5px;\r\n        }\r\n\r\n        textarea {\r\n          padding: 10px 17px;\r\n          height: 130px;\r\n          resize: none;\r\n        }\r\n      }\r\n\r\n      .button {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n      }\r\n\r\n      button {\r\n        font-family: 'Lato', sans-serif;\r\n        font-size: 12px;\r\n        width: 90px;\r\n        height: 37px;\r\n        background-color: $background_2;\r\n        color: $text-profile;\r\n        border: 0;\r\n      }\r\n    }\r\n\r\n    .info {\r\n      padding-left: 20px;\r\n      padding-top: 2px;\r\n      width: 179px;\r\n      font-family: 'Lato', sans-serif;\r\n      font-size: 12px;\r\n      color: $text-footer-2;\r\n      line-height: 1.88; //подгонка\r\n      text-align: justify;\r\n      -webkit-hyphens: auto;\r\n      -moz-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n      hyphens: auto;\r\n\r\n      span {\r\n        .bolder {\r\n          font-weight: bold;\r\n          color: $text-footer;\r\n        }\r\n      }\r\n\r\n      .contacts {\r\n        margin-top: 33px;\r\n\r\n        a {\r\n          text-decoration: none;\r\n          display: flex;\r\n          flex-direction: row;\r\n          align-items: center;\r\n          color: $text-footer-2;\r\n\r\n          svg {\r\n            height: 12px;\r\n            width: 12px;\r\n            margin-right: 10px;\r\n\r\n            .item {\r\n              fill: $contact;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n}\r\n\r\nfooter {\r\n  height: 43px;\r\n  background-color: $footer;\r\n  width: 1020px;\r\n  font-family: \"MavenProRegular\", sans-serif;\r\n  color: $input;\r\n  font-size: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  span {\r\n    padding-left: 38px;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/portfolio sync recursive \\.svg$":
/*!***********************************************!*\
  !*** ./src/assets/img/portfolio/ sync \.svg$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Position1.svg": "./src/assets/img/portfolio/Position1.svg",
	"./Position10.svg": "./src/assets/img/portfolio/Position10.svg",
	"./Position11.svg": "./src/assets/img/portfolio/Position11.svg",
	"./Position12.svg": "./src/assets/img/portfolio/Position12.svg",
	"./Position13.svg": "./src/assets/img/portfolio/Position13.svg",
	"./Position2.svg": "./src/assets/img/portfolio/Position2.svg",
	"./Position3.svg": "./src/assets/img/portfolio/Position3.svg",
	"./Position4.svg": "./src/assets/img/portfolio/Position4.svg",
	"./Position5.svg": "./src/assets/img/portfolio/Position5.svg",
	"./Position6.svg": "./src/assets/img/portfolio/Position6.svg",
	"./Position7.svg": "./src/assets/img/portfolio/Position7.svg",
	"./Position8.svg": "./src/assets/img/portfolio/Position8.svg",
	"./Position9.svg": "./src/assets/img/portfolio/Position9.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/img/portfolio sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/font/Lato-Black.ttf":
/*!****************************************!*\
  !*** ./src/assets/font/Lato-Black.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Lato-Black.ttf";

/***/ }),

/***/ "./src/assets/font/Lato.ttf":
/*!**********************************!*\
  !*** ./src/assets/font/Lato.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Lato.ttf";

/***/ }),

/***/ "./src/assets/font/MavenPro-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/font/MavenPro-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "MavenPro-Regular.ttf";

/***/ }),

/***/ "./src/assets/img/Logo.svg":
/*!*********************************!*\
  !*** ./src/assets/img/Logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Logo.svg";

/***/ }),

/***/ "./src/assets/img/Photo.svg":
/*!**********************************!*\
  !*** ./src/assets/img/Photo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Photo.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position1.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position1.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position1.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position10.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position10.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position10.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position11.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position11.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position11.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position12.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position12.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position12.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position13.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position13.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position13.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position2.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position2.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position2.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position3.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position3.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position3.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position4.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position4.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position4.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position5.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position5.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position5.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position6.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position6.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position6.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position7.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position7.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position7.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position8.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position8.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position8.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position9.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position9.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Position9.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _assets_img_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/Logo.svg */ "./src/assets/img/Logo.svg");
/* harmony import */ var _assets_img_Photo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/Photo.svg */ "./src/assets/img/Photo.svg");



var portfolio_img = [];

function importAll(r) {
  r.keys().forEach(function (s, i, arr) {
    return portfolio_img[i] = r(s);
  });
}

importAll(__webpack_require__("./src/assets/img/portfolio sync recursive \\.svg$"));

function addToggleClass(element, newClassName) {
  deleteToggleClass(newClassName);
  element.classList.add(newClassName);
}

function deleteToggleClass(className) {
  var element = document.querySelector(".".concat(className));
  element.classList.remove(className);
}

var nav_link = document.querySelectorAll(".nav-link");

var _loop = function _loop(i) {
  nav_link[i].addEventListener("click", function () {
    addToggleClass(nav_link[i], "active");
  });
};

for (var i = 0; i < nav_link.length; i++) {
  _loop(i);
}

var switches = document.querySelectorAll(".switch");

var _loop2 = function _loop2(_i) {
  switches[_i].addEventListener("click", function () {
    addToggleClass(switches[_i], "active-switch");
  });
};

for (var _i = 0; _i < switches.length; _i++) {
  _loop2(_i);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVks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UUFBUSxHQUFHTixRQUFRLENBQUNJLGdCQUFULENBQTBCLFNBQTFCLENBQWpCOzs2QkFDU3JGO0FBQ0x1RixFQUFBQSxRQUFRLENBQUN2RixFQUFELENBQVIsQ0FBWXNGLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDeENaLElBQUFBLGNBQWMsQ0FBQ2EsUUFBUSxDQUFDdkYsRUFBRCxDQUFULEVBQWMsZUFBZCxDQUFkO0FBQ0gsR0FGRDs7O0FBREosS0FBSyxJQUFJQSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHdUYsUUFBUSxDQUFDbEYsTUFBN0IsRUFBcUNMLEVBQUMsRUFBdEMsRUFBMEM7QUFBQSxTQUFqQ0EsRUFBaUM7QUFJekMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvfHN5bmN8Ly5zdmckIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L0xhdG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC9MYXRvLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvTWF2ZW5Qcm8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcbiAgaGVpZ2h0OiA2M3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMjBweDtcXG59XFxuaGVhZGVyIC5saW5rLCBoZWFkZXIgaDEge1xcbiAgZmxleC1iYXNpczogMjAlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHotaW5kZXg6IDEwMjtcXG4gIGhlaWdodDogNzRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTllYjtcXG59XFxuaGVhZGVyIC5saW5rIGEsIGhlYWRlciAubGluayBhIGgxLCBoZWFkZXIgaDEgYSwgaGVhZGVyIGgxIGEgaDEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5oZWFkZXIgLmxpbmsgYS5hY3RpdmUsIGhlYWRlciAubGluayBhLmFjdGl2ZSBoMSwgaGVhZGVyIGgxIGEuYWN0aXZlLCBoZWFkZXIgaDEgYS5hY3RpdmUgaDEge1xcbiAgY29sb3I6ICMyZWIzOTg7XFxufVxcbmhlYWRlciAubGluayAuaW5kZW50LCBoZWFkZXIgaDEgLmluZGVudCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG5oZWFkZXIgLmJlZm9yZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbmhlYWRlciAuYWZ0ZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5oZWFkZXIgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1iYXNpczogMTM5cHg7XFxuICB6LWluZGV4OiAxMDI7XFxuICBoZWlnaHQ6IDc0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9pbnR5LXRoaW5neSB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiA1MS41cHggOTBweCAwIDkwcHg7XFxuICBib3JkZXItY29sb3I6ICMzMjMyMzIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM4cHg7XFxufVxcblxcbi5wb3J0Zm9saW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDcyMXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucG9ydGZvbGlvIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9ydGZvbGlvIGRpdiBpbWcge1xcbiAgaGVpZ2h0OiAyMDZweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ucG9ydGZvbGlvIC50b3AsIC5wb3J0Zm9saW8gLmJvdHRvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwNHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTRlOWViO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U0ZTllYjtcXG4gIHdpZHRoOiA4MjBweDtcXG59XFxuLnBvcnRmb2xpbyAudG9wIHtcXG4gIGJvdHRvbTogMTNweDtcXG59XFxuLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gIHRvcDogMTNweDtcXG59XFxuLnBvcnRmb2xpbyAuc2xpZGUtc3dpdGNoZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3R0b206IDExcHg7XFxufVxcbi5wb3J0Zm9saW8gLnNsaWRlLXN3aXRjaGVzIC5zd2l0Y2hlcyB7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZWI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5wb3J0Zm9saW8gLnNsaWRlLXN3aXRjaGVzIC5zd2l0Y2hlcyAuc3dpdGNoIHtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDJjNTtcXG59XFxuLnBvcnRmb2xpbyAuc2xpZGUtc3dpdGNoZXMgLnN3aXRjaGVzIC5hY3RpdmUtc3dpdGNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Yjg3ODQ7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmViMzk4O1xcbiAgaGVpZ2h0OiAzMDFweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMjBweDtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuLnByb2ZpbGUgLnBob3RvLCAucHJvZmlsZSAudGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvZmlsZSAucGhvdG8ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjE5ZDg0O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG4ucHJvZmlsZSAudGV4dCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDU4MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIxOWQ4NDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm5hbWUge1xcbiAgZm9udC1zaXplOiAyOC41cHg7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Q3ZmNmNTtcXG4gIHdvcmQtc3BhY2luZzogM3B4O1xcbn1cXG4ucHJvZmlsZSAudGV4dCAucHJvZmVzc2lvbiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzIwODE2ZDtcXG4gIHdvcmQtc3BhY2luZzogMC4wMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTEuNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZDdmY2Y1O1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgd29yZC1zcGFjaW5nOiAwLjc0cHg7XFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxuICAtbW96LWh5cGhlbnM6IGF1dG87XFxuICAtbXMtaHlwaGVuczogYXV0bztcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcbi5wcm9maWxlIC50ZXh0IC5tZXNzZW5nZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMzRweDtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMgYSBkaXYge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0LjVweDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMgYSBkaXYgc3ZnIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgbWFyZ2luOiA2cHg7XFxufVxcbi5wcm9maWxlIC50ZXh0IC5tZXNzZW5nZXJzIGE6bGluayBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZGJkNDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMgYTp2aXNpdGVkIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VkMGM1O1xcbn1cXG4ucHJvZmlsZSAudGV4dCAubWVzc2VuZ2VycyBhOmhvdmVyIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNjYmJlO1xcbn1cXG4ucHJvZmlsZSAudGV4dCAuaWNvbiB7XFxuICBmaWxsOiAjMmViMzk4O1xcbn1cXG5cXG4uZ2V0LWluLXRvdWNoIHtcXG4gIHBhZGRpbmc6IDEzcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMjBweDtcXG4gIGhlaWdodDogNTM4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmIyYjJiO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLmhlYWRpbmcsIC5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLnN1YnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiA3ODBweDtcXG59XFxuLmdldC1pbi10b3VjaCAuaGVhZGVyLWZvb3RlciAuaGVhZGluZyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgd29yZC1zcGFjaW5nOiAxcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLnN1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNDNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmIyYjJiO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zLCAuZ2V0LWluLXRvdWNoIC5ib3QgLmJ1dHRvbiB7XFxuICB3aWR0aDogNTgwcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSB0ZXh0YXJlYSwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSBpbnB1dCwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNiZWJlYmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0NTQ1O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSB0ZXh0YXJlYSwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSBpbnB1dCwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxN3B4IDEzcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSBpbnB1dCwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSBpbnB1dCB7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIHRleHRhcmVhLCAuZ2V0LWluLXRvdWNoIC5ib3QgLmJ1dHRvbiBmb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHggMTdweDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgLmJ1dHRvbiwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBidXR0b24sIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDM3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmViMzk4O1xcbiAgY29sb3I6ICNkN2ZjZjU7XFxuICBib3JkZXI6IDA7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMnB4O1xcbiAgd2lkdGg6IDE3OXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbiAgbGluZS1oZWlnaHQ6IDEuODg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xcbiAgLW1zLWh5cGhlbnM6IGF1dG87XFxuICBoeXBoZW5zOiBhdXRvO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gc3BhbiAuYm9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyAuY29udGFjdHMge1xcbiAgbWFyZ2luLXRvcDogMzNweDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIC5jb250YWN0cyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gLmNvbnRhY3RzIGEgc3ZnIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gLmNvbnRhY3RzIGEgc3ZnIC5pdGVtIHtcXG4gIGZpbGw6ICMyZWIzOTg7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDQzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgd2lkdGg6IDEwMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNDU0NTQ1O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvb3RlciBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogMzhweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0JBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBakJGO0FBb0JBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FBbEJGO0FBcUJBO0VBQ0UsOEJBQUE7RUFDQSw0Q0FBQTtBQW5CRjtBQXNCQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSwrQkFBQTtFQUNBLHlCQTVDSztFQTZDTCxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQXBCRjtBQXNCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXBCSjtBQXVCSTtFQUNFLHFCQUFBO0VBQ0EsWUE1RE87RUE2RFAsZUFBQTtBQXJCTjtBQXdCSTtFQUNFLGNBbEVTO0FBNENmO0FBeUJJO0VBQ0UsbUJBQUE7QUF2Qk47QUEyQkU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBekJKO0FBNEJFO0VBQ0Usa0JBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUEzQko7O0FBK0JBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBNUJGOztBQStCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE1QkY7QUE4QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTVCSjtBQThCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBNUJOO0FBZ0NFO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUEvQko7QUFrQ0U7RUFDRSxZQUFBO0FBaENKO0FBbUNFO0VBQ0UsU0FBQTtBQWpDSjtBQW9DRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFsQ0o7QUFvQ0k7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQWxDTjtBQW9DTTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFsSkM7QUFnSFQ7QUFxQ007RUFDRSx5QkFySlE7QUFrSGhCOztBQXlDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBdENGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSx5QkE1S2E7RUE2S2IsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxhQUFBO0FBdENKO0FBeUNFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF2Q0o7QUEwQ0U7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUF4Q0o7QUEwQ0k7RUFDRSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0F0TVM7RUF1TVQsaUJBQUE7QUF4Q047QUEyQ0k7RUFDRSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQTVNVztFQTZNWCxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF6Q047QUE0Q0k7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0F0TlM7RUF1TlQsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBMUNOO0FBNkNJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTNDTjtBQThDUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBNUNWO0FBOENVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBNUNaO0FBaURVO0VBQ0UseUJBek9MO0FBMExQO0FBb0RVO0VBQ0UseUJBOU9HO0FBNExmO0FBdURVO0VBQ0UseUJBblBFO0FBOExkO0FBMkRJO0VBQ0UsYUF6UVM7QUFnTmY7O0FBOERBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBclJLO0FBME5QO0FBNkRFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBM0RKO0FBNkRJO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FBM0ROO0FBOERJO0VBQ0UsZUFBQTtFQUNBLGNBaFNRO0VBaVNSLGNBQUE7RUFDQSxpQkFBQTtBQTVETjtBQWdFSTtFQUNFLGVBQUE7RUFDQSxjQXZTVTtBQXlPaEI7QUFtRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBakVKO0FBbUVJO0VBQ0UsWUFBQTtBQWpFTjtBQW1FTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQWpFUjtBQW1FUTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBaFVNO0VBaVVOLHlCQWhVRjtFQWlVRSxTQUFBO0FBakVWO0FBb0VRO0VBQ0Usa0JBQUE7QUFsRVY7QUFxRVE7RUFDRSxXQUFBO0FBbkVWO0FBc0VRO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQXBFVjtBQXdFTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQXRFUjtBQXlFTTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBbldPO0VBb1dQLGNBbFdPO0VBbVdQLFNBQUE7QUF2RVI7QUEyRUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBMVdVO0VBMldWLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBekVOO0FBNEVRO0VBQ0UsaUJBQUE7RUFDQSxjQXRYSTtBQTRTZDtBQThFTTtFQUNFLGdCQUFBO0FBNUVSO0FBOEVRO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBallNO0FBcVRoQjtBQThFVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUE1RVo7QUE4RVk7RUFDRSxhQTlYSjtBQWtUVjs7QUFzRkE7RUFDRSxZQUFBO0VBQ0EseUJBblpPO0VBb1pQLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBdlpNO0VBd1pOLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFuRkY7QUFxRkU7RUFDRSxrQkFBQTtBQW5GSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZTogcmdiKDUwLCA1MCwgNTApO1xcclxcbiRiYWNrZ3JvdW5kXzI6IHJnYig0NiwgMTc5LCAxNTIpO1xcclxcbiRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuJHRleHQtcHJvZmlsZTogcmdiKDIxNSwgMjUyLCAyNDUpO1xcclxcbiR0ZXh0LXByb2ZpbGUtMjogcmdiKDMyLCAxMjksIDEwOSk7XFxyXFxuJHRleHQtZm9vdGVyOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxyXFxuJHRleHQtZm9vdGVyLTI6IHJnYigxOTAsIDE5MCwgMTkwKTtcXHJcXG4kaW5wdXQ6IHJnYig2OSwgNjksIDY5KTtcXHJcXG4kZm9vdGVyOiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuJGJvcmRlcjogcmdiKDIyOCwgMjMzLCAyMzUpO1xcclxcbiRzd2l0Y2g6IHJnYigyMjEsIDIxMCwgMTk3KTtcXHJcXG4kc3dpdGNoLWFjdGl2ZTogcmdiKDEzOSwgMTM1LCAxMzIpO1xcclxcbiRib3JkZXItMjogcmdiKDMzLCAxNTcsIDEzMik7XFxyXFxuJGJvcmRlci0zOiByZ2IoNDMsIDQzLCA0Myk7XFxyXFxuJGxpbms6IHJnYigxNjUsIDIxOSwgMjEyKTtcXHJcXG4kbGluay12aXNpdGVkOiByZ2IoMTI2LCAyMDgsIDE5Nyk7XFxyXFxuJGxpbmstYWN0aXZlOiByZ2IoMTA4LCAyMDMsIDE5MCk7XFxyXFxuJGNvbnRhY3Q6IHJnYig0NiwgMTc5LCAxNTIpO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250L0xhdG8udHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udC9MYXRvLUJsYWNrLnR0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnQvTWF2ZW5Qcm8tUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZTtcXHJcXG4gIGhlaWdodDogNjNweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDIwcHg7XFxyXFxuXFxyXFxuICAubGluaywgaDEge1xcclxcbiAgICBmbGV4LWJhc2lzOiAyMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgei1pbmRleDogMTAyO1xcclxcbiAgICBoZWlnaHQ6IDc0cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xcclxcblxcclxcblxcclxcbiAgICBhLCBhIGgxIHtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhLmFjdGl2ZSwgYS5hY3RpdmUgaDEge1xcclxcbiAgICAgIGNvbG9yOiAkYmFja2dyb3VuZF8yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmRlbnQge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iZWZvcmUge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZnRlciB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDEzOXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDI7XFxyXFxuICAgIGhlaWdodDogNzRweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50eS10aGluZ3kge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogNTEuNXB4IDkwcHggMCA5MHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAkYmFzZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcnRmb2xpbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogNzIxcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBoZWlnaHQ6IDIwNnB4O1xcclxcbiAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wLCAuYm90dG9tIHtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwNHB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXI7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXI7XFxyXFxuICAgIHdpZHRoOiA4MjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3Age1xcclxcbiAgICBib3R0b206IDEzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm90dG9tIHtcXHJcXG4gICAgdG9wOiAxM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlLXN3aXRjaGVzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvdHRvbTogMTFweDtcXHJcXG5cXHJcXG4gICAgLnN3aXRjaGVzIHtcXHJcXG4gICAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjtcXHJcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICAgIC5zd2l0Y2gge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxyXFxuICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dpdGNoO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYWN0aXZlLXN3aXRjaCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dpdGNoLWFjdGl2ZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kXzI7XFxyXFxuICBoZWlnaHQ6IDMwMXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcblxcclxcbiAgLnBob3RvLCAudGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGhvdG8ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyLTI7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRleHQge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDU4MHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLTI7XFxyXFxuXFxyXFxuICAgIC5uYW1lIHtcXHJcXG4gICAgICBmb250LXNpemU6IDI4LjVweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0LXByb2ZpbGU7XFxyXFxuICAgICAgd29yZC1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2Zlc3Npb24ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0LXByb2ZpbGUtMjtcXHJcXG4gICAgICB3b3JkLXNwYWNpbmc6IDAuMDFweDtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTEuNHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0LXByb2ZpbGU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgICB3b3JkLXNwYWNpbmc6IDAuNzRweDtcXHJcXG4gICAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgLW1vei1oeXBoZW5zOiBhdXRvO1xcclxcbiAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xcclxcbiAgICAgIGh5cGhlbnM6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lc3NlbmdlcnMge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzNHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDI0LjVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6bGluayB7XFxyXFxuICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbms7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6dmlzaXRlZCB7XFxyXFxuICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmstdmlzaXRlZDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmstYWN0aXZlO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pY29uIHtcXHJcXG4gICAgICBmaWxsOiAkYmFja2dyb3VuZF8yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5nZXQtaW4tdG91Y2gge1xcclxcbiAgcGFkZGluZzogMTNweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAyMHB4O1xcclxcbiAgaGVpZ2h0OiA1MzhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlO1xcclxcblxcclxcbiAgLmhlYWRlci1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci0zO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG5cXHJcXG4gICAgLmhlYWRpbmcsIC5zdWJ0aXRsZSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIHdpZHRoOiA3ODBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGluZyB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dC1mb290ZXI7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1YnRpdGxlIHtcXHJcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0LWZvb3Rlci0yO1xcclxcblxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm90IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0M3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci0zO1xcclxcblxcclxcbiAgICAuZm9ybXMsIC5idXR0b24ge1xcclxcbiAgICAgIHdpZHRoOiA1ODBweDtcXHJcXG5cXHJcXG4gICAgICBmb3JtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGV4dC1mb290ZXItMjtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0O1xcclxcbiAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxN3B4IDEzcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE3cHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmJ1dHRvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzdweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kXzI7XFxyXFxuICAgICAgICBjb2xvcjogJHRleHQtcHJvZmlsZTtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluZm8ge1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbiAgICAgIHdpZHRoOiAxNzlweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtZm9vdGVyLTI7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuODg7IC8v0L/QvtC00LPQvtC90LrQsFxcclxcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcclxcbiAgICAgIC1tb3otaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAtbXMtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICBoeXBoZW5zOiBhdXRvO1xcclxcblxcclxcbiAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgLmJvbGRlciB7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICBjb2xvcjogJHRleHQtZm9vdGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuY29udGFjdHMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMzNweDtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGV4dC1mb290ZXItMjtcXHJcXG5cXHJcXG4gICAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIC5pdGVtIHtcXHJcXG4gICAgICAgICAgICAgIGZpbGw6ICRjb250YWN0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiA0M3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3RlcjtcXHJcXG4gIHdpZHRoOiAxMDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogJGlucHV0O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL1Bvc2l0aW9uMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjEuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEwLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTAuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjExLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTEuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTIuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTMuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb24yLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24zLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMy5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjQuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb241LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb242LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uNi5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjcuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjguc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb244LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb245LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uOS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8gc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9hc3NldHMvaW1nL0xvZ28uc3ZnJ1xyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi9hc3NldHMvaW1nL1Bob3RvLnN2ZydcclxuXHJcbmxldCBwb3J0Zm9saW9faW1nID0gW107XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gICAgci5rZXlzKCkuZm9yRWFjaCgocywgaSwgYXJyKSA9PiBwb3J0Zm9saW9faW1nW2ldID0gcihzKSk7XHJcbn1cclxuXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8vJywgdHJ1ZSwgL1xcLnN2ZyQvKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2dnbGVDbGFzcyhlbGVtZW50LCBuZXdDbGFzc05hbWUpIHtcclxuICAgIGRlbGV0ZVRvZ2dsZUNsYXNzKG5ld0NsYXNzTmFtZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3NOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IG5hdl9saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZfbGluay5sZW5ndGg7IGkrKykge1xyXG4gICAgbmF2X2xpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUb2dnbGVDbGFzcyhuYXZfbGlua1tpXSwgXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBzd2l0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dpdGNoXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHN3aXRjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzd2l0Y2hlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRvZ2dsZUNsYXNzKHN3aXRjaGVzW2ldLCBcImFjdGl2ZS1zd2l0Y2hcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9zIiwiX2UiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXJyIiwiaXNBcnJheSIsIl9pdGVtIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiTG9nbyIsIlBob3RvIiwicG9ydGZvbGlvX2ltZyIsImltcG9ydEFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInMiLCJyZXF1aXJlIiwiY29udGV4dCIsImFkZFRvZ2dsZUNsYXNzIiwiZWxlbWVudCIsIm5ld0NsYXNzTmFtZSIsImRlbGV0ZVRvZ2dsZUNsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwibmF2X2xpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN3aXRjaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==