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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n@font-face {\n  font-family: \"MavenProRegular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\nbody {\n  font-family: \"Lato\", sans-serif;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  padding-top: 9px;\n  font-family: \"Lato\", sans-serif;\n  background-color: #323232;\n  height: 54px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1020px;\n}\nheader .link {\n  flex-basis: 20%;\n  flex-grow: 1;\n  display: flex;\n  z-index: 102;\n}\nheader .link a {\n  text-decoration: none;\n  color: white;\n  font-size: 10px;\n}\nheader .link a.active {\n  color: #2eb398;\n}\nheader .link .indent {\n  padding-right: 24px;\n}\nheader .before {\n  justify-content: flex-end;\n}\nheader .after {\n  justify-content: flex-start;\n}\nheader .logo {\n  display: flex;\n  justify-content: center;\n  flex-basis: 139px;\n  z-index: 102;\n}\n\n.pointy-thingy {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 51.5px 90px 0 90px;\n  border-color: #323232 transparent transparent transparent;\n  position: absolute;\n  top: 38px;\n  z-index: 101;\n}\n\n.portfolio {\n  display: flex;\n  flex-direction: column;\n  height: 721px;\n  justify-content: center;\n}\n.portfolio div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.portfolio .top {\n  position: relative;\n  top: 38.5px;\n}\n.portfolio .bottom {\n  position: relative;\n  bottom: 38px;\n}\n\n.img {\n  width: 180px;\n  height: 206px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.profile {\n  display: flex;\n  flex-direction: row;\n  background-color: #2eb398;\n  height: 341px;\n  align-items: center;\n  justify-content: center;\n  width: 1020px;\n}\n.profile .img {\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.profile .text {\n  display: flex;\n  flex-direction: column;\n  width: 580px;\n  height: 206px;\n  margin-right: 20px;\n}\n.profile .text .name {\n  font-size: 28.5px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #d7fcf5;\n  line-height: 0.7;\n}\n.profile .text .profession {\n  font-size: 18px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #20816d;\n  line-height: 2.15;\n}\n.profile .text .description {\n  font-size: 11.5px;\n  font-family: \"Lato\", sans-serif;\n  color: #d7fcf5;\n  line-height: 2.1;\n  letter-spacing: 0.058px;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n.profile .text .messengers {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n  flex-grow: 1;\n}\n.profile .text .messengers a div {\n  height: 24px;\n  width: 24.5px;\n  background-color: #d7fcf5;\n}\n.profile .text .messengers a div svg {\n  height: 12px;\n  width: 12px;\n  margin: 6px;\n}\n.profile .text .messengers a:visited div {\n  background-color: #78f5dd;\n}\n.profile .text .messengers a:hover div {\n  background-color: #a8f8e9;\n}\n.profile .text .messengers a:active div {\n  background-color: #49f1d1;\n}\n.profile .text .icon {\n  fill: #2eb398;\n}\n\n.get-in-touch {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 1020px;\n  height: 564px;\n  background-color: #323232;\n}\n.get-in-touch .button {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  width: 700px;\n}\n.get-in-touch button {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  margin-top: 8px;\n  width: 90px;\n  height: 37px;\n  background-color: #2eb398;\n  color: #d7fcf5;\n  border: 0;\n}\n.get-in-touch .header-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.get-in-touch .header-footer .heading, .get-in-touch .header-footer .subtitle {\n  font-family: \"MavenProRegular\", sans-serif;\n  width: 780px;\n}\n.get-in-touch .header-footer .heading {\n  font-size: 30px;\n  color: #e0e0e0;\n  line-height: 1;\n}\n.get-in-touch .header-footer .subtitle {\n  font-size: 18px;\n  color: #bebebe;\n  padding-bottom: 10px;\n}\n.get-in-touch .bot {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.get-in-touch .bot .forms {\n  width: 580px;\n}\n.get-in-touch .bot .forms form {\n  display: flex;\n  flex-direction: column;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  background-color: #454545;\n  margin-bottom: 8px;\n  border: 0;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea {\n  margin-top: 8px;\n  padding: 16px;\n}\n.get-in-touch .bot .forms form input {\n  height: 6px;\n}\n.get-in-touch .bot .forms form textarea {\n  height: 118px;\n}\n.get-in-touch .bot .info {\n  padding-left: 20px;\n  width: 180px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  line-height: 1.9;\n  text-align: justify;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n  display: flex;\n  flex-direction: column;\n}\n.get-in-touch .bot .info .text, .get-in-touch .bot .info .contacts {\n  flex-basis: 50%;\n}\n.get-in-touch .bot .info span .bolder {\n  font-weight: bold;\n  color: #e0e0e0;\n}\n.get-in-touch .bot .info .contacts div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.get-in-touch .bot .info .contacts div svg {\n  height: 12px;\n  width: 12px;\n  margin-right: 10px;\n}\n.get-in-touch .bot .info .contacts div svg .item {\n  fill: #20816d;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$base: rgb(50, 50, 50);\r\n$background_2: rgb(46, 179, 152);\r\n$background: rgb(255, 255, 255);\r\n$text-profile: rgb(215, 252, 245);\r\n$text-profile-2: rgb(32, 129, 109);\r\n$text-footer: rgb(224, 224, 224);\r\n$text-footer-2: rgb(190, 190, 190);\r\n$input: rgb(69, 69, 69);\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato.ttf');\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato-Black.ttf');\r\n  font-weight: bold;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"MavenProRegular\";\r\n  src: url('./assets/font/MavenPro-Regular.ttf');\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  padding-top: 9px;\r\n  font-family: 'Lato', sans-serif;\r\n  background-color: $base;\r\n  height: 54px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 1020px;\r\n\r\n  .link {\r\n    flex-basis: 20%;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    z-index: 102;\r\n\r\n    a {\r\n      text-decoration: none;\r\n      color: $background;\r\n      font-size: 10px;\r\n    }\r\n\r\n    a.active {\r\n      color: $background_2;\r\n    }\r\n\r\n    .indent {\r\n      padding-right: 24px;\r\n    }\r\n  }\r\n\r\n  .before {\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .after {\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .logo {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-basis: 139px;\r\n    z-index: 102;\r\n  }\r\n}\r\n\r\n.pointy-thingy {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 51.5px 90px 0 90px;\r\n  border-color: $base transparent transparent transparent;\r\n  position: absolute;\r\n  top: 38px;\r\n  z-index: 101;\r\n}\r\n\r\n.portfolio {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 721px;\r\n  justify-content: center;\r\n\r\n  div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n\r\n  .top {\r\n    position: relative;\r\n    top: 38.5px;\r\n  }\r\n\r\n  .bottom {\r\n    position: relative;\r\n    bottom: 38px;\r\n  }\r\n\r\n}\r\n\r\n.img {\r\n  width: 180px;\r\n  height: 206px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.profile {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: $background_2;\r\n  height: 341px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 1020px;\r\n\r\n  .img {\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 580px;\r\n    height: 206px;\r\n    margin-right: 20px;\r\n\r\n    .name {\r\n      font-size: 28.5px;\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      color: $text-profile;\r\n      line-height: 0.7;\r\n    }\r\n\r\n    .profession {\r\n      font-size: 18px;\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      color: $text-profile-2;\r\n      line-height: 2.15;\r\n    }\r\n\r\n    .description {\r\n      font-size: 11.5px;\r\n      font-family: 'Lato', sans-serif;\r\n      color: $text-profile;\r\n      line-height: 2.1;\r\n      letter-spacing: 0.058px;\r\n      -webkit-hyphens: auto;\r\n      -moz-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n      hyphens: auto;\r\n    }\r\n\r\n    .messengers {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: flex-end;\r\n      align-items: flex-end;\r\n      flex-grow: 1;\r\n\r\n      a {\r\n        div {\r\n          height: 24px;\r\n          width: 24.5px;\r\n          background-color: $text-profile;\r\n\r\n          svg {\r\n            height: 12px;\r\n            width: 12px;\r\n            margin: 6px;\r\n          }\r\n        }\r\n\r\n        &:visited {\r\n          div {\r\n            background-color: darken($text-profile, 20);\r\n          }\r\n        }\r\n\r\n        &:hover {\r\n          div {\r\n            background-color: darken($text-profile, 10);\r\n          }\r\n        }\r\n\r\n        &:active {//один из селекторов плохо работает\r\n          div {\r\n            background-color: darken($text-profile, 30);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .icon {\r\n      fill: $background_2;\r\n    }\r\n  }\r\n}\r\n\r\n.get-in-touch {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 1020px;\r\n  height: 564px;\r\n  background-color: $base;\r\n\r\n  .button {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    width: 700px; // не коректно как-то получается\r\n  }\r\n\r\n  button {\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 12px;\r\n    margin-top: 8px;\r\n    width: 90px;\r\n    height: 37px;\r\n    background-color: $background_2;\r\n    color: $text-profile;\r\n    border: 0;\r\n  }\r\n\r\n  .header-footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    .heading, .subtitle {\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      width: 780px;\r\n    }\r\n\r\n    .heading {\r\n      font-size: 30px;\r\n      color: $text-footer;\r\n      line-height: 1;\r\n    }\r\n\r\n    .subtitle {\r\n      font-size: 18px;\r\n      color: $text-footer-2;\r\n      padding-bottom: 10px;\r\n    }\r\n  }\r\n\r\n  .bot {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n\r\n    .forms {\r\n      width: 580px;\r\n\r\n      form {\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        input, textarea {\r\n          font-family: 'Lato', sans-serif;\r\n          font-size: 12px;\r\n          color: $text-footer-2;\r\n          background-color: $input;\r\n          margin-bottom: 8px;\r\n          border: 0;\r\n        }\r\n\r\n        input, textarea {\r\n          margin-top: 8px;\r\n          padding: 16px;\r\n        }\r\n\r\n        input {\r\n          height: 6px;\r\n        }\r\n\r\n        textarea {\r\n          height: 118px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .info {\r\n      padding-left: 20px;\r\n      width: 180px;\r\n      font-family: 'Lato', sans-serif;\r\n      font-size: 12px;\r\n      color: $text-footer-2;\r\n      line-height: 1.9;\r\n      text-align: justify;\r\n      -webkit-hyphens: auto;\r\n      -moz-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n      hyphens: auto;\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      .text, .contacts {\r\n        flex-basis: 50%;\r\n      }\r\n\r\n      span {\r\n        .bolder {\r\n          font-weight: bold;\r\n          color: $text-footer;\r\n        }\r\n      }\r\n\r\n      .contacts {\r\n        div {\r\n          display: flex;\r\n          flex-direction: row;\r\n          align-items: center;\r\n\r\n          svg {\r\n            height: 12px;\r\n            width: 12px;\r\n            margin-right: 10px;\r\n\r\n            .item {\r\n              fill: $text-profile-2;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n}"],"sourceRoot":""}]);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMzZiNzFkYzdkMTYwM2MxODM2Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxzQkFBVixFQUFrQztBQUNqRCxNQUFJQyxJQUFJLEdBQUcsRUFBWCxDQURpRCxDQUNsQzs7QUFFZkEsRUFBQUEsSUFBSSxDQUFDQyxRQUFMLEdBQWdCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEMsV0FBTyxLQUFLQyxHQUFMLENBQVMsVUFBVUMsSUFBVixFQUFnQjtBQUM5QixVQUFJQyxPQUFPLEdBQUdMLHNCQUFzQixDQUFDSSxJQUFELENBQXBDOztBQUVBLFVBQUlBLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYLGVBQU8sVUFBVUUsTUFBVixDQUFpQkYsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NFLE1BQWhDLENBQXVDRCxPQUF2QyxFQUFnRCxHQUFoRCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNELEtBUk0sRUFRSkUsSUFSSSxDQVFDLEVBUkQsQ0FBUDtBQVNELEdBVkQsQ0FIaUQsQ0FhOUM7QUFDSDs7O0FBR0FOLEVBQUFBLElBQUksQ0FBQ08sQ0FBTCxHQUFTLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxNQUEvQixFQUF1QztBQUM5QyxRQUFJLE9BQU9GLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0I7QUFDQUEsTUFBQUEsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELEVBQU9BLE9BQVAsRUFBZ0IsRUFBaEIsQ0FBRCxDQUFWO0FBQ0Q7O0FBRUQsUUFBSUcsc0JBQXNCLEdBQUcsRUFBN0I7O0FBRUEsUUFBSUQsTUFBSixFQUFZO0FBQ1YsV0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtLLE1BQXpCLEVBQWlDTCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDO0FBQ0EsWUFBSU0sRUFBRSxHQUFHLEtBQUtOLENBQUwsRUFBUSxDQUFSLENBQVQ7O0FBRUEsWUFBSU0sRUFBRSxJQUFJLElBQVYsRUFBZ0I7QUFDZEYsVUFBQUEsc0JBQXNCLENBQUNFLEVBQUQsQ0FBdEIsR0FBNkIsSUFBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHTixPQUFPLENBQUNJLE1BQTlCLEVBQXNDRSxFQUFFLEVBQXhDLEVBQTRDO0FBQzFDLFVBQUlYLElBQUksR0FBRyxHQUFHRSxNQUFILENBQVVHLE9BQU8sQ0FBQ00sRUFBRCxDQUFqQixDQUFYOztBQUVBLFVBQUlKLE1BQU0sSUFBSUMsc0JBQXNCLENBQUNSLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBcEMsRUFBK0M7QUFDN0M7QUFDQTtBQUNEOztBQUVELFVBQUlNLFVBQUosRUFBZ0I7QUFDZCxZQUFJLENBQUNOLElBQUksQ0FBQyxDQUFELENBQVQsRUFBYztBQUNaQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVNLFVBQVY7QUFDRCxTQUZELE1BRU87QUFDTE4sVUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEdBQUdFLE1BQUgsQ0FBVUksVUFBVixFQUFzQixPQUF0QixFQUErQkosTUFBL0IsQ0FBc0NGLElBQUksQ0FBQyxDQUFELENBQTFDLENBQVY7QUFDRDtBQUNGOztBQUVESCxNQUFBQSxJQUFJLENBQUNlLElBQUwsQ0FBVVosSUFBVjtBQUNEO0FBQ0YsR0FyQ0Q7O0FBdUNBLFNBQU9ILElBQVA7QUFDRCxDQXpERDs7Ozs7Ozs7Ozs7QUNSYTs7QUFFYixTQUFTZ0IsY0FBVCxDQUF3QkMsR0FBeEIsRUFBNkJWLENBQTdCLEVBQWdDO0FBQUUsU0FBT1csZUFBZSxDQUFDRCxHQUFELENBQWYsSUFBd0JFLHFCQUFxQixDQUFDRixHQUFELEVBQU1WLENBQU4sQ0FBN0MsSUFBeURhLDJCQUEyQixDQUFDSCxHQUFELEVBQU1WLENBQU4sQ0FBcEYsSUFBZ0djLGdCQUFnQixFQUF2SDtBQUE0SDs7QUFFOUosU0FBU0EsZ0JBQVQsR0FBNEI7QUFBRSxRQUFNLElBQUlDLFNBQUosQ0FBYywySUFBZCxDQUFOO0FBQW1LOztBQUVqTSxTQUFTRiwyQkFBVCxDQUFxQ0csQ0FBckMsRUFBd0NDLE1BQXhDLEVBQWdEO0FBQUUsTUFBSSxDQUFDRCxDQUFMLEVBQVE7QUFBUSxNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQixPQUFPRSxpQkFBaUIsQ0FBQ0YsQ0FBRCxFQUFJQyxNQUFKLENBQXhCO0FBQXFDLE1BQUlFLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCM0IsUUFBakIsQ0FBMEI0QixJQUExQixDQUErQk4sQ0FBL0IsRUFBa0NPLEtBQWxDLENBQXdDLENBQXhDLEVBQTJDLENBQUMsQ0FBNUMsQ0FBUjtBQUF3RCxNQUFJSixDQUFDLEtBQUssUUFBTixJQUFrQkgsQ0FBQyxDQUFDUSxXQUF4QixFQUFxQ0wsQ0FBQyxHQUFHSCxDQUFDLENBQUNRLFdBQUYsQ0FBY0MsSUFBbEI7QUFBd0IsTUFBSU4sQ0FBQyxLQUFLLEtBQU4sSUFBZUEsQ0FBQyxLQUFLLEtBQXpCLEVBQWdDLE9BQU9PLEtBQUssQ0FBQ0MsSUFBTixDQUFXWCxDQUFYLENBQVA7QUFBc0IsTUFBSUcsQ0FBQyxLQUFLLFdBQU4sSUFBcUIsMkNBQTJDUyxJQUEzQyxDQUFnRFQsQ0FBaEQsQ0FBekIsRUFBNkUsT0FBT0QsaUJBQWlCLENBQUNGLENBQUQsRUFBSUMsTUFBSixDQUF4QjtBQUFzQzs7QUFFaGEsU0FBU0MsaUJBQVQsQ0FBMkJSLEdBQTNCLEVBQWdDbUIsR0FBaEMsRUFBcUM7QUFBRSxNQUFJQSxHQUFHLElBQUksSUFBUCxJQUFlQSxHQUFHLEdBQUduQixHQUFHLENBQUNMLE1BQTdCLEVBQXFDd0IsR0FBRyxHQUFHbkIsR0FBRyxDQUFDTCxNQUFWOztBQUFrQixPQUFLLElBQUlMLENBQUMsR0FBRyxDQUFSLEVBQVc4QixJQUFJLEdBQUcsSUFBSUosS0FBSixDQUFVRyxHQUFWLENBQXZCLEVBQXVDN0IsQ0FBQyxHQUFHNkIsR0FBM0MsRUFBZ0Q3QixDQUFDLEVBQWpELEVBQXFEO0FBQUU4QixJQUFBQSxJQUFJLENBQUM5QixDQUFELENBQUosR0FBVVUsR0FBRyxDQUFDVixDQUFELENBQWI7QUFBbUI7O0FBQUMsU0FBTzhCLElBQVA7QUFBYzs7QUFFdkwsU0FBU2xCLHFCQUFULENBQStCRixHQUEvQixFQUFvQ1YsQ0FBcEMsRUFBdUM7QUFBRSxNQUFJTyxFQUFFLEdBQUdHLEdBQUcsSUFBSSxJQUFQLEdBQWMsSUFBZCxHQUFxQixPQUFPcUIsTUFBUCxLQUFrQixXQUFsQixJQUFpQ3JCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQ0MsUUFBUixDQUFwQyxJQUF5RHRCLEdBQUcsQ0FBQyxZQUFELENBQTFGOztBQUEwRyxNQUFJSCxFQUFFLElBQUksSUFBVixFQUFnQjtBQUFRLE1BQUkwQixJQUFJLEdBQUcsRUFBWDtBQUFlLE1BQUlDLEVBQUUsR0FBRyxJQUFUO0FBQWUsTUFBSUMsRUFBRSxHQUFHLEtBQVQ7O0FBQWdCLE1BQUlDLEVBQUosRUFBUUMsRUFBUjs7QUFBWSxNQUFJO0FBQUUsU0FBSzlCLEVBQUUsR0FBR0EsRUFBRSxDQUFDZSxJQUFILENBQVFaLEdBQVIsQ0FBVixFQUF3QixFQUFFd0IsRUFBRSxHQUFHLENBQUNFLEVBQUUsR0FBRzdCLEVBQUUsQ0FBQytCLElBQUgsRUFBTixFQUFpQkMsSUFBeEIsQ0FBeEIsRUFBdURMLEVBQUUsR0FBRyxJQUE1RCxFQUFrRTtBQUFFRCxNQUFBQSxJQUFJLENBQUN6QixJQUFMLENBQVU0QixFQUFFLENBQUNJLEtBQWI7O0FBQXFCLFVBQUl4QyxDQUFDLElBQUlpQyxJQUFJLENBQUM1QixNQUFMLEtBQWdCTCxDQUF6QixFQUE0QjtBQUFRO0FBQUUsR0FBckksQ0FBc0ksT0FBT3lDLEdBQVAsRUFBWTtBQUFFTixJQUFBQSxFQUFFLEdBQUcsSUFBTDtBQUFXRSxJQUFBQSxFQUFFLEdBQUdJLEdBQUw7QUFBVyxHQUExSyxTQUFtTDtBQUFFLFFBQUk7QUFBRSxVQUFJLENBQUNQLEVBQUQsSUFBTzNCLEVBQUUsQ0FBQyxRQUFELENBQUYsSUFBZ0IsSUFBM0IsRUFBaUNBLEVBQUUsQ0FBQyxRQUFELENBQUY7QUFBaUIsS0FBeEQsU0FBaUU7QUFBRSxVQUFJNEIsRUFBSixFQUFRLE1BQU1FLEVBQU47QUFBVztBQUFFOztBQUFDLFNBQU9KLElBQVA7QUFBYzs7QUFFamdCLFNBQVN0QixlQUFULENBQXlCRCxHQUF6QixFQUE4QjtBQUFFLE1BQUlnQixLQUFLLENBQUNnQixPQUFOLENBQWNoQyxHQUFkLENBQUosRUFBd0IsT0FBT0EsR0FBUDtBQUFhOztBQUVyRXBCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTQyxzQkFBVCxDQUFnQ0ksSUFBaEMsRUFBc0M7QUFDckQsTUFBSStDLEtBQUssR0FBR2xDLGNBQWMsQ0FBQ2IsSUFBRCxFQUFPLENBQVAsQ0FBMUI7QUFBQSxNQUNJQyxPQUFPLEdBQUc4QyxLQUFLLENBQUMsQ0FBRCxDQURuQjtBQUFBLE1BRUlDLFVBQVUsR0FBR0QsS0FBSyxDQUFDLENBQUQsQ0FGdEI7O0FBSUEsTUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsV0FBTy9DLE9BQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9nRCxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixVQUFmLENBQUQsQ0FBbkIsQ0FBVCxDQUFqQjtBQUNBLFFBQUlPLElBQUksR0FBRywrREFBK0RyRCxNQUEvRCxDQUFzRWdELE1BQXRFLENBQVg7QUFDQSxRQUFJTSxhQUFhLEdBQUcsT0FBT3RELE1BQVAsQ0FBY3FELElBQWQsRUFBb0IsS0FBcEIsQ0FBcEI7QUFDQSxRQUFJRSxVQUFVLEdBQUdULFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQjNELEdBQW5CLENBQXVCLFVBQVU0RCxNQUFWLEVBQWtCO0FBQ3hELGFBQU8saUJBQWlCekQsTUFBakIsQ0FBd0I4QyxVQUFVLENBQUNZLFVBQVgsSUFBeUIsRUFBakQsRUFBcUQxRCxNQUFyRCxDQUE0RHlELE1BQTVELEVBQW9FLEtBQXBFLENBQVA7QUFDRCxLQUZnQixDQUFqQjtBQUdBLFdBQU8sQ0FBQzFELE9BQUQsRUFBVUMsTUFBVixDQUFpQnVELFVBQWpCLEVBQTZCdkQsTUFBN0IsQ0FBb0MsQ0FBQ3NELGFBQUQsQ0FBcEMsRUFBcURyRCxJQUFyRCxDQUEwRCxJQUExRCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxDQUFDRixPQUFELEVBQVVFLElBQVYsQ0FBZSxJQUFmLENBQVA7QUFDRCxDQXJCRDs7Ozs7Ozs7Ozs7QUNkYTs7QUFFYlQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVrRSxHQUFWLEVBQWVDLE9BQWYsRUFBd0I7QUFDdkMsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjtBQUNBQSxJQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNEOztBQUVELE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ1IsV0FBT0EsR0FBUDtBQUNELEdBUnNDLENBUXJDOzs7QUFHRkEsRUFBQUEsR0FBRyxHQUFHRSxNQUFNLENBQUNGLEdBQUcsQ0FBQ0csVUFBSixHQUFpQkgsR0FBRyxXQUFwQixHQUErQkEsR0FBaEMsQ0FBWixDQVh1QyxDQVdXOztBQUVsRCxNQUFJLGVBQWU3QixJQUFmLENBQW9CNkIsR0FBcEIsQ0FBSixFQUE4QjtBQUM1QjtBQUNBQSxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2xDLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLENBQU47QUFDRDs7QUFFRCxNQUFJbUMsT0FBTyxDQUFDRyxJQUFaLEVBQWtCO0FBQ2hCO0FBQ0FKLElBQUFBLEdBQUcsSUFBSUMsT0FBTyxDQUFDRyxJQUFmO0FBQ0QsR0FyQnNDLENBcUJyQztBQUNGOzs7QUFHQSxNQUFJLG9CQUFvQmpDLElBQXBCLENBQXlCNkIsR0FBekIsS0FBaUNDLE9BQU8sQ0FBQ0ksVUFBN0MsRUFBeUQ7QUFDdkQsV0FBTyxLQUFLaEUsTUFBTCxDQUFZMkQsR0FBRyxDQUFDTSxPQUFKLENBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QkEsT0FBekIsQ0FBaUMsS0FBakMsRUFBd0MsS0FBeEMsQ0FBWixFQUE0RCxJQUE1RCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT04sR0FBUDtBQUNELENBOUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2hHLDRDQUE0Qyx5SEFBeUM7QUFDckYsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsMEJBQTBCLHlEQUF5RCx3QkFBd0IsR0FBRyxjQUFjLDBCQUEwQix5REFBeUQsc0JBQXNCLEdBQUcsY0FBYyxxQ0FBcUMseURBQXlELEdBQUcsUUFBUSxzQ0FBc0MsbUJBQW1CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsWUFBWSxxQkFBcUIsc0NBQXNDLDhCQUE4QixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixpQkFBaUIsa0JBQWtCLGlCQUFpQixHQUFHLGtCQUFrQiwwQkFBMEIsaUJBQWlCLG9CQUFvQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsa0JBQWtCLDhCQUE4QixHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixzQkFBc0IsaUJBQWlCLEdBQUcsb0JBQW9CLGFBQWEsY0FBYyx3QkFBd0IscUNBQXFDLDhEQUE4RCx1QkFBdUIsY0FBYyxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixrQkFBa0IsNEJBQTRCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsbUJBQW1CLHVCQUF1QixnQkFBZ0IsR0FBRyxzQkFBc0IsdUJBQXVCLGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLGtCQUFrQix1QkFBdUIsc0JBQXNCLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLDhCQUE4QixrQkFBa0Isd0JBQXdCLDRCQUE0QixrQkFBa0IsR0FBRyxpQkFBaUIsdUJBQXVCLHNCQUFzQixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsdUJBQXVCLEdBQUcsd0JBQXdCLHNCQUFzQixpREFBaUQsbUJBQW1CLHFCQUFxQixHQUFHLDhCQUE4QixvQkFBb0IsaURBQWlELG1CQUFtQixzQkFBc0IsR0FBRywrQkFBK0Isc0JBQXNCLHNDQUFzQyxtQkFBbUIscUJBQXFCLDRCQUE0QiwwQkFBMEIsdUJBQXVCLHNCQUFzQixrQkFBa0IsR0FBRyw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLGlCQUFpQixHQUFHLG9DQUFvQyxpQkFBaUIsa0JBQWtCLDhCQUE4QixHQUFHLHdDQUF3QyxpQkFBaUIsZ0JBQWdCLGdCQUFnQixHQUFHLDRDQUE0Qyw4QkFBOEIsR0FBRywwQ0FBMEMsOEJBQThCLEdBQUcsMkNBQTJDLDhCQUE4QixHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsa0JBQWtCLGtCQUFrQiw4QkFBOEIsR0FBRyx5QkFBeUIsa0JBQWtCLDBCQUEwQiw4QkFBOEIsaUJBQWlCLEdBQUcsd0JBQXdCLHNDQUFzQyxvQkFBb0Isb0JBQW9CLGdCQUFnQixpQkFBaUIsOEJBQThCLG1CQUFtQixjQUFjLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsaUZBQWlGLGlEQUFpRCxpQkFBaUIsR0FBRyx5Q0FBeUMsb0JBQW9CLG1CQUFtQixtQkFBbUIsR0FBRywwQ0FBMEMsb0JBQW9CLG1CQUFtQix5QkFBeUIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyw2QkFBNkIsaUJBQWlCLEdBQUcsa0NBQWtDLGtCQUFrQiwyQkFBMkIsR0FBRyxpRkFBaUYsc0NBQXNDLG9CQUFvQixtQkFBbUIsOEJBQThCLHVCQUF1QixjQUFjLEdBQUcsaUZBQWlGLG9CQUFvQixrQkFBa0IsR0FBRyx3Q0FBd0MsZ0JBQWdCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLDRCQUE0Qix1QkFBdUIsaUJBQWlCLHNDQUFzQyxvQkFBb0IsbUJBQW1CLHFCQUFxQix3QkFBd0IsMEJBQTBCLHVCQUF1QixzQkFBc0Isa0JBQWtCLGtCQUFrQiwyQkFBMkIsR0FBRyxzRUFBc0Usb0JBQW9CLEdBQUcseUNBQXlDLHNCQUFzQixtQkFBbUIsR0FBRywwQ0FBMEMsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyw4Q0FBOEMsaUJBQWlCLGdCQUFnQix1QkFBdUIsR0FBRyxvREFBb0Qsa0JBQWtCLEdBQUcsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsYUFBYSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsa0RBQWtELHFDQUFxQyxvQ0FBb0Msc0NBQXNDLHVDQUF1QyxxQ0FBcUMsdUNBQXVDLDRCQUE0QixnQkFB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LEdBQW1Cb0UsQ0FBQyxDQUFDRyxDQUFELENBQW5DO0FBQUEsR0FBakI7QUFDSDs7QUFDREosU0FBUyxDQUFDSyx3RUFBRCxDQUFUOztBQUdBLFNBQVNFLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxZQUFqQyxFQUErQztBQUMzQ0MsRUFBQUEsaUJBQWlCLENBQUNELFlBQUQsQ0FBakI7QUFDQUQsRUFBQUEsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQkgsWUFBdEI7QUFDSDs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQkcsU0FBM0IsRUFBc0M7QUFDbEMsTUFBTUwsT0FBTyxHQUFHTSxRQUFRLENBQUNDLGFBQVQsWUFBMkJGLFNBQTNCLEVBQWhCO0FBQ0FMLEVBQUFBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkssTUFBbEIsQ0FBeUJILFNBQXpCO0FBQ0g7O0FBRUQsSUFBTUksUUFBUSxHQUFHSCxRQUFRLENBQUNJLGdCQUFULENBQTBCLFdBQTFCLENBQWpCOzsyQkFDU3JGO0FBQ0xvRixFQUFBQSxRQUFRLENBQUNwRixDQUFELENBQVIsQ0FBWXNGLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDeENaLElBQUFBLGNBQWMsQ0FBQ1UsUUFBUSxDQUFDcEYsQ0FBRCxDQUFULEVBQWMsUUFBZCxDQUFkO0FBQ0gsR0FGRDs7O0FBREosS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0YsUUFBUSxDQUFDL0UsTUFBN0IsRUFBcUNMLENBQUMsRUFBdEMsRUFBMEM7QUFBQSxRQUFqQ0EsQ0FBaUM7QUFJekMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvfHN5bmN8Ly5zdmckIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L0xhdG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC9MYXRvLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvTWF2ZW5Qcm8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nLXRvcDogOXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMjBweDtcXG59XFxuaGVhZGVyIC5saW5rIHtcXG4gIGZsZXgtYmFzaXM6IDIwJTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAxMDI7XFxufVxcbmhlYWRlciAubGluayBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuaGVhZGVyIC5saW5rIGEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjMmViMzk4O1xcbn1cXG5oZWFkZXIgLmxpbmsgLmluZGVudCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG5oZWFkZXIgLmJlZm9yZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5oZWFkZXIgLmFmdGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuaGVhZGVyIC5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtYmFzaXM6IDEzOXB4O1xcbiAgei1pbmRleDogMTAyO1xcbn1cXG5cXG4ucG9pbnR5LXRoaW5neSB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDUxLjVweCA5MHB4IDAgOTBweDtcXG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzhweDtcXG4gIHotaW5kZXg6IDEwMTtcXG59XFxuXFxuLnBvcnRmb2xpbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNzIxcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBvcnRmb2xpbyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBvcnRmb2xpbyAudG9wIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMzguNXB4O1xcbn1cXG4ucG9ydGZvbGlvIC5ib3R0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAzOHB4O1xcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogMjA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmViMzk4O1xcbiAgaGVpZ2h0OiAzNDFweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDIwcHg7XFxufVxcbi5wcm9maWxlIC5pbWcge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5wcm9maWxlIC50ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDU4MHB4O1xcbiAgaGVpZ2h0OiAyMDZweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm5hbWUge1xcbiAgZm9udC1zaXplOiAyOC41cHg7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Q3ZmNmNTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc7XFxufVxcbi5wcm9maWxlIC50ZXh0IC5wcm9mZXNzaW9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjA4MTZkO1xcbiAgbGluZS1oZWlnaHQ6IDIuMTU7XFxufVxcbi5wcm9maWxlIC50ZXh0IC5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDExLjVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Q3ZmNmNTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjE7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNThweDtcXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcXG4gIC1tb3otaHlwaGVuczogYXV0bztcXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xcbiAgaHlwaGVuczogYXV0bztcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4ucHJvZmlsZSAudGV4dCAubWVzc2VuZ2VycyBhIGRpdiB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjQuNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZmNmNTtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMgYSBkaXYgc3ZnIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgbWFyZ2luOiA2cHg7XFxufVxcbi5wcm9maWxlIC50ZXh0IC5tZXNzZW5nZXJzIGE6dmlzaXRlZCBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4ZjVkZDtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMgYTpob3ZlciBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZjhlOTtcXG59XFxuLnByb2ZpbGUgLnRleHQgLm1lc3NlbmdlcnMgYTphY3RpdmUgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWYxZDE7XFxufVxcbi5wcm9maWxlIC50ZXh0IC5pY29uIHtcXG4gIGZpbGw6ICMyZWIzOTg7XFxufVxcblxcbi5nZXQtaW4tdG91Y2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDIwcHg7XFxuICBoZWlnaHQ6IDU2NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG59XFxuLmdldC1pbi10b3VjaCAuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDcwMHB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDM3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmViMzk4O1xcbiAgY29sb3I6ICNkN2ZjZjU7XFxuICBib3JkZXI6IDA7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIC5oZWFkaW5nLCAuZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIC5zdWJ0aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogNzgwcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLmdldC1pbi10b3VjaCAuaGVhZGVyLWZvb3RlciAuc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICNiZWJlYmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMge1xcbiAgd2lkdGg6IDU4MHB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSBpbnB1dCwgLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI2JlYmViZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQ1NDU7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBib3JkZXI6IDA7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSBpbnB1dCwgLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSBpbnB1dCB7XFxuICBoZWlnaHQ6IDZweDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTE4cHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICB3aWR0aDogMTgwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNiZWJlYmU7XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcXG4gIC1tb3otaHlwaGVuczogYXV0bztcXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xcbiAgaHlwaGVuczogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gLnRleHQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyAuY29udGFjdHMge1xcbiAgZmxleC1iYXNpczogNTAlO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gc3BhbiAuYm9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyAuY29udGFjdHMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIC5jb250YWN0cyBkaXYgc3ZnIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gLmNvbnRhY3RzIGRpdiBzdmcgLml0ZW0ge1xcbiAgZmlsbDogIzIwODE2ZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGlu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Q0k7RUFDRSxlQUFBO0VBQ0EsY0F4UFE7RUF5UFIsY0FBQTtBQTVDTjtBQStDSTtFQUNFLGVBQUE7RUFDQSxjQTdQVTtFQThQVixvQkFBQTtBQTdDTjtBQWlERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBL0NKO0FBaURJO0VBQ0UsWUFBQTtBQS9DTjtBQWlETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQS9DUjtBQWlEUTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBalJNO0VBa1JOLHlCQWpSRjtFQWtSRSxrQkFBQTtFQUNBLFNBQUE7QUEvQ1Y7QUFrRFE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQWhEVjtBQW1EUTtFQUNFLFdBQUE7QUFqRFY7QUFvRFE7RUFDRSxhQUFBO0FBbERWO0FBdURJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0EzU1U7RUE0U1YsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFyRE47QUF1RE07RUFDRSxlQUFBO0FBckRSO0FBeURRO0VBQ0UsaUJBQUE7RUFDQSxjQTdUSTtBQXNRZDtBQTREUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBMURWO0FBNERVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTFEWjtBQTREWTtFQUNFLGFBOVVHO0FBb1JqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZTogcmdiKDUwLCA1MCwgNTApO1xcclxcbiRiYWNrZ3JvdW5kXzI6IHJnYig0NiwgMTc5LCAxNTIpO1xcclxcbiRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuJHRleHQtcHJvZmlsZTogcmdiKDIxNSwgMjUyLCAyNDUpO1xcclxcbiR0ZXh0LXByb2ZpbGUtMjogcmdiKDMyLCAxMjksIDEwOSk7XFxyXFxuJHRleHQtZm9vdGVyOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxyXFxuJHRleHQtZm9vdGVyLTI6IHJnYigxOTAsIDE5MCwgMTkwKTtcXHJcXG4kaW5wdXQ6IHJnYig2OSwgNjksIDY5KTtcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udC9MYXRvLnR0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnQvTGF0by1CbGFjay50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250L01hdmVuUHJvLVJlZ3VsYXIudHRmJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDlweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZTtcXHJcXG4gIGhlaWdodDogNTRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAyMHB4O1xcclxcblxcclxcbiAgLmxpbmsge1xcclxcbiAgICBmbGV4LWJhc2lzOiAyMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgei1pbmRleDogMTAyO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhLmFjdGl2ZSB7XFxyXFxuICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kXzI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluZGVudCB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmJlZm9yZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWZ0ZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWJhc2lzOiAxMzlweDtcXHJcXG4gICAgei1pbmRleDogMTAyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnR5LXRoaW5neSB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDUxLjVweCA5MHB4IDAgOTBweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogJGJhc2UgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDM4cHg7XFxyXFxuICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcblxcclxcbi5wb3J0Zm9saW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDcyMXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3Age1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMzguNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvdHRvbSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAzOHB4O1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogMjA2cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF8yO1xcclxcbiAgaGVpZ2h0OiAzNDFweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDIwcHg7XFxyXFxuXFxyXFxuICAuaW1nIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDU4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwNnB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuXFxyXFxuICAgIC5uYW1lIHtcXHJcXG4gICAgICBmb250LXNpemU6IDI4LjVweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0LXByb2ZpbGU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDAuNztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZmVzc2lvbiB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtcHJvZmlsZS0yO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjE1O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMS41cHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtcHJvZmlsZTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMi4xO1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1OHB4O1xcclxcbiAgICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAtbW96LWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgaHlwaGVuczogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVzc2VuZ2VycyB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDI0LjVweDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtcHJvZmlsZTtcXHJcXG5cXHJcXG4gICAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6dmlzaXRlZCB7XFxyXFxuICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0ZXh0LXByb2ZpbGUsIDIwKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR0ZXh0LXByb2ZpbGUsIDEwKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjphY3RpdmUgey8v0L7QtNC40L0g0LjQtyDRgdC10LvQtdC60YLQvtGA0L7QsiDQv9C70L7RhdC+INGA0LDQsdC+0YLQsNC10YJcXHJcXG4gICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRleHQtcHJvZmlsZSwgMzApO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pY29uIHtcXHJcXG4gICAgICBmaWxsOiAkYmFja2dyb3VuZF8yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5nZXQtaW4tdG91Y2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDIwcHg7XFxyXFxuICBoZWlnaHQ6IDU2NHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2U7XFxyXFxuXFxyXFxuICAuYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogNzAwcHg7IC8vINC90LUg0LrQvtGA0LXQutGC0L3QviDQutCw0Lot0YLQviDQv9C+0LvRg9GH0LDQtdGC0YHRj1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM3cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kXzI7XFxyXFxuICAgIGNvbG9yOiAkdGV4dC1wcm9maWxlO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC5oZWFkaW5nLCAuc3VidGl0bGUge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICB3aWR0aDogNzgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRpbmcge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtZm9vdGVyO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdWJ0aXRsZSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dC1mb290ZXItMjtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmJvdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAuZm9ybXMge1xcclxcbiAgICAgIHdpZHRoOiA1ODBweDtcXHJcXG5cXHJcXG4gICAgICBmb3JtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgICBjb2xvcjogJHRleHQtZm9vdGVyLTI7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDExOHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mbyB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtZm9vdGVyLTI7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuOTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAtbW96LWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgaHlwaGVuczogYXV0bztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgLnRleHQsIC5jb250YWN0cyB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgLmJvbGRlciB7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICBjb2xvcjogJHRleHQtZm9vdGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuY29udGFjdHMge1xcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIC5pdGVtIHtcXHJcXG4gICAgICAgICAgICAgIGZpbGw6ICR0ZXh0LXByb2ZpbGUtMjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9Qb3NpdGlvbjEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb24xLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24xMC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjEwLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24xMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjExLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24xMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjEyLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24xMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjEzLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24yLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMi5zdmdcIixcblx0XCIuL1Bvc2l0aW9uMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjMuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb240LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb241LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uNS5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjYuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjcuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb243LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb244LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uOC5zdmdcIixcblx0XCIuL1Bvc2l0aW9uOS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjkuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvIHN5bmMgcmVjdXJzaXZlIFxcXFwuc3ZnJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL2ltZy9Mb2dvLnN2ZydcclxuaW1wb3J0IFBob3RvIGZyb20gJy4vYXNzZXRzL2ltZy9QaG90by5zdmcnXHJcbmxldCBwb3J0Zm9saW9faW1nID0gW107XHJcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgICByLmtleXMoKS5mb3JFYWNoKChzLCBpLCBhcnIpID0+IHBvcnRmb2xpb19pbWdbaV0gPSByKHMpKTtcclxufVxyXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvLycsIHRydWUsIC9cXC5zdmckLykpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZ2dsZUNsYXNzKGVsZW1lbnQsIG5ld0NsYXNzTmFtZSkge1xyXG4gICAgZGVsZXRlVG9nZ2xlQ2xhc3MobmV3Q2xhc3NOYW1lKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdDbGFzc05hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxufVxyXG5cclxuY29uc3QgbmF2X2xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IG5hdl9saW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBuYXZfbGlua1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRvZ2dsZUNsYXNzKG5hdl9saW5rW2ldLCBcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9zIiwiX2UiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXJyIiwiaXNBcnJheSIsIl9pdGVtIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiTG9nbyIsIlBob3RvIiwicG9ydGZvbGlvX2ltZyIsImltcG9ydEFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInMiLCJyZXF1aXJlIiwiY29udGV4dCIsImFkZFRvZ2dsZUNsYXNzIiwiZWxlbWVudCIsIm5ld0NsYXNzTmFtZSIsImRlbGV0ZVRvZ2dsZUNsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwibmF2X2xpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=