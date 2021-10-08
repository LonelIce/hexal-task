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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n@font-face {\n  font-family: \"MavenProRegular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n}\n\nheader {\n  width: 100%;\n  font-family: \"Lato\", sans-serif;\n  background-color: #323232;\n  height: 63px;\n  display: flex;\n  justify-content: center;\n}\nheader .content {\n  width: 1020px;\n  display: flex;\n  justify-content: center;\n}\nheader .content .link, header .content h1 {\n  flex-basis: 20%;\n  flex-grow: 1;\n  display: flex;\n  z-index: 102;\n  height: 74px;\n  align-items: center;\n  border-bottom: 1px solid #e4e9eb;\n}\nheader .content .link a, header .content .link a h1, header .content h1 a, header .content h1 a h1 {\n  text-decoration: none;\n  color: white;\n  font-size: 10px;\n}\nheader .content .link a.active, header .content .link a.active h1, header .content h1 a.active, header .content h1 a.active h1 {\n  color: #2eb398;\n}\nheader .content .link .indent, header .content h1 .indent {\n  padding-right: 24px;\n}\nheader .content .before {\n  justify-content: flex-end;\n  margin-left: 30px;\n}\nheader .content .after {\n  margin-right: 30px;\n}\nheader .content .logo {\n  display: flex;\n  justify-content: center;\n  flex-basis: 139px;\n  z-index: 102;\n  height: 74px;\n  align-items: center;\n}\nheader .content .pointy-thingy {\n  border-style: solid;\n  border-width: 51.5px 90px 0 90px;\n  border-color: #323232 transparent transparent transparent;\n  position: absolute;\n  top: 38px;\n}\n\nmain {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .portfolio {\n  max-width: 1020px;\n  display: flex;\n  flex-direction: column;\n  height: 721px;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n}\nmain .portfolio div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .portfolio div img {\n  height: 206px;\n  width: auto;\n}\nmain .portfolio .top, main .portfolio .bottom {\n  position: relative;\n  height: 104px;\n  border-left: 1px solid #e4e9eb;\n  border-right: 1px solid #e4e9eb;\n  padding: 0 10px;\n}\nmain .portfolio .top {\n  bottom: 13px;\n}\nmain .portfolio .bottom {\n  top: 13px;\n}\nmain .portfolio .slide-switches {\n  position: absolute;\n  display: flex;\n  justify-content: flex-start;\n  bottom: 11px;\n  max-width: 1020px;\n}\nmain .portfolio .slide-switches .switches {\n  margin: 0 30px;\n  padding-bottom: 11px;\n  border-bottom: 1px solid #e4e9eb;\n  flex-grow: 1;\n  justify-content: flex-start;\n}\nmain .portfolio .slide-switches .switches .switch {\n  margin-right: 3px;\n  width: 6px;\n  height: 6px;\n  background-color: #ddd2c5;\n}\nmain .portfolio .slide-switches .switches .active-switch {\n  background-color: #8b8784;\n}\nmain .img {\n  width: 180px;\n  margin: 0 10px;\n}\nmain .profile {\n  display: flex;\n  background-color: #2eb398;\n  height: 301px;\n  justify-content: center;\n  padding: 20px 0;\n  width: 100%;\n}\nmain .profile .content {\n  max-width: 1020px;\n  display: flex;\n  justify-content: center;\n}\nmain .profile .content .photo, main .profile .content .text {\n  display: flex;\n}\nmain .profile .content .photo {\n  justify-content: center;\n  align-items: center;\n  border-left: 1px solid #219d84;\n  max-width: 180px;\n  padding: 0 20px;\n}\nmain .profile .content .text {\n  justify-content: center;\n  flex-direction: column;\n  padding-right: 20px;\n  border-right: 1px solid #219d84;\n  max-width: 580px;\n}\nmain .profile .content .text .name {\n  font-size: 28.5px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #d7fcf5;\n  word-spacing: 3px;\n}\nmain .profile .content .text .profession {\n  font-size: 18px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #20816d;\n  word-spacing: 0.01px;\n  letter-spacing: 0;\n  padding-bottom: 14px;\n}\nmain .profile .content .text .description {\n  font-size: 12px;\n  font-family: \"Lato\", sans-serif;\n  color: #d7fcf5;\n  line-height: 1.8;\n  text-align: justify;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n  padding-bottom: 39px;\n}\nmain .profile .content .text .messengers {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 10px;\n}\nmain .profile .content .text .messengers button {\n  height: 24px;\n  width: 24.5px;\n  border: 0;\n}\nmain .profile .content .text .messengers button svg {\n  height: 12px;\n  width: 12px;\n}\nmain .profile .content .text .messengers button:hover {\n  background-color: #a5dbd4;\n}\nmain .profile .content .text .messengers button:active {\n  background-color: #6ccbbe;\n}\nmain .profile .content .text .icon {\n  fill: #2eb398;\n}\n\n.get-in-touch {\n  width: 100%;\n  padding: 13px 0;\n  display: flex;\n  flex-direction: column;\n  height: 538px;\n  background-color: #323232;\n}\n.get-in-touch .header-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid #2b2b2b;\n  padding-top: 50px;\n}\n.get-in-touch .header-footer .heading, .get-in-touch .header-footer .subtitle {\n  font-family: \"MavenProRegular\", sans-serif;\n  width: 780px;\n}\n.get-in-touch .header-footer .heading {\n  font-size: 30px;\n  color: #e0e0e0;\n  line-height: 1;\n  word-spacing: 1px;\n}\n.get-in-touch .header-footer .subtitle {\n  font-size: 18px;\n  color: #bebebe;\n}\n.get-in-touch .bot {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  padding-top: 10px;\n  padding-bottom: 43px;\n  border-bottom: 1px solid #2b2b2b;\n}\n.get-in-touch .bot .forms, .get-in-touch .bot .button {\n  width: 580px;\n}\n.get-in-touch .bot .forms form, .get-in-touch .bot .button form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 100%;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form input, .get-in-touch .bot .button form textarea {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  background-color: #454545;\n  border: 0;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form input, .get-in-touch .bot .button form textarea {\n  padding: 17px 13px;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .button form input {\n  height: 5px;\n}\n.get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form textarea {\n  padding: 10px 17px;\n  height: 130px;\n  resize: none;\n}\n.get-in-touch .bot .forms .button, .get-in-touch .bot .button .button {\n  display: flex;\n  justify-content: flex-end;\n}\n.get-in-touch .bot .forms button, .get-in-touch .bot .button button {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  width: 90px;\n  height: 37px;\n  background-color: #2eb398;\n  color: #d7fcf5;\n  border: 0;\n}\n.get-in-touch .bot .info {\n  padding-left: 20px;\n  padding-top: 2px;\n  width: 179px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  line-height: 1.88;\n  text-align: justify;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n.get-in-touch .bot .info span .bolder {\n  font-weight: bold;\n  color: #e0e0e0;\n}\n.get-in-touch .bot .info .contacts {\n  margin-top: 33px;\n}\n.get-in-touch .bot .info .contacts a {\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #bebebe;\n}\n.get-in-touch .bot .info .contacts a svg {\n  height: 12px;\n  width: 12px;\n  margin-right: 10px;\n}\n.get-in-touch .bot .info .contacts a svg .item {\n  fill: #2eb398;\n}\n\nfooter {\n  width: 100%;\n  height: 43px;\n  background-color: #222222;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #454545;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nfooter span {\n  padding-left: 79px;\n  width: 1020px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$backgroundBlack: rgb(50, 50, 50);\r\n$backgroundAcrylic: rgb(46, 179, 152);\r\n$backgroundWhite: rgb(255, 255, 255);\r\n$textProfileWhite: rgb(215, 252, 245);\r\n$textProfileGreen: rgb(32, 129, 109);\r\n$textConnectionWhite: rgb(224, 224, 224);\r\n$textConnectionGray: rgb(190, 190, 190);\r\n$backgroundInput: rgb(69, 69, 69);\r\n$backgroundFooter: rgb(34, 34, 34);\r\n$borderWhite: rgb(228, 233, 235);\r\n$switch: rgb(221, 210, 197);\r\n$switchActive: rgb(139, 135, 132);\r\n$borderGreen: rgb(33, 157, 132);\r\n$borderBlack: rgb(43, 43, 43);\r\n$link: rgb(165, 219, 212);\r\n$linkActive: rgb(108, 203, 190);\r\n$contact: rgb(46, 179, 152);\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato.ttf');\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato-Black.ttf');\r\n  font-weight: bold;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"MavenProRegular\";\r\n  src: url('./assets/font/MavenPro-Regular.ttf');\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  font-family: 'Lato', sans-serif;\r\n  background-color: $backgroundBlack;\r\n  height: 63px;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  .content {\r\n    width: 1020px;\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    .link, h1 {\r\n      flex-basis: 20%;\r\n      flex-grow: 1;\r\n      display: flex;\r\n      z-index: 102;\r\n      height: 74px;\r\n      align-items: center;\r\n      border-bottom: 1px solid $borderWhite;\r\n\r\n      a, a h1 {\r\n        text-decoration: none;\r\n        color: $backgroundWhite;\r\n        font-size: 10px;\r\n      }\r\n\r\n      a.active, a.active h1 {\r\n        color: $backgroundAcrylic;\r\n      }\r\n\r\n      .indent {\r\n        padding-right: 24px;\r\n      }\r\n    }\r\n\r\n    .before {\r\n      justify-content: flex-end;\r\n      margin-left: 30px;\r\n    }\r\n\r\n    .after {\r\n      margin-right: 30px;\r\n    }\r\n\r\n    .logo {\r\n      display: flex;\r\n      justify-content: center;\r\n      flex-basis: 139px;\r\n      z-index: 102;\r\n      height: 74px;\r\n      align-items: center;\r\n    }\r\n\r\n    .pointy-thingy {\r\n      border-style: solid;\r\n      border-width: 51.5px 90px 0 90px;\r\n      border-color: $backgroundBlack transparent transparent transparent;\r\n      position: absolute;\r\n      top: 38px;\r\n    }\r\n  }\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  .portfolio {\r\n    max-width: 1020px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 721px;\r\n    justify-content: center;\r\n    position: relative;\r\n    align-items: center;\r\n\r\n    div {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      img {\r\n        height: 206px;\r\n        width: auto;\r\n      }\r\n    }\r\n\r\n    .top, .bottom {\r\n      position: relative;\r\n      height: 104px;\r\n      border-left: 1px solid $borderWhite;\r\n      border-right: 1px solid $borderWhite;\r\n      padding: 0 10px;\r\n    }\r\n\r\n    .top {\r\n      bottom: 13px;\r\n    }\r\n\r\n    .bottom {\r\n      top: 13px;\r\n    }\r\n\r\n    .slide-switches {\r\n      position: absolute;\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      bottom: 11px;\r\n      max-width: 1020px;\r\n\r\n      .switches {\r\n        margin: 0 30px;\r\n        padding-bottom: 11px;\r\n        border-bottom: 1px solid $borderWhite;\r\n        flex-grow: 1;\r\n        justify-content: flex-start;\r\n\r\n        .switch {\r\n          margin-right: 3px;\r\n          width: 6px;\r\n          height: 6px;\r\n          background-color: $switch;\r\n        }\r\n\r\n        .active-switch {\r\n          background-color: $switchActive;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .img {\r\n    width: 180px;\r\n    margin: 0 10px;\r\n  }\r\n\r\n  .profile {\r\n    display: flex;\r\n    background-color: $backgroundAcrylic;\r\n    height: 301px;\r\n    justify-content: center;\r\n    padding: 20px 0;\r\n    width: 100%;\r\n\r\n    .content {\r\n      max-width: 1020px;\r\n      display: flex;\r\n      justify-content: center;\r\n\r\n      .photo, .text {\r\n        display: flex;\r\n      }\r\n\r\n      .photo {\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-left: 1px solid $borderGreen;\r\n        max-width: 180px;\r\n        padding: 0 20px;\r\n      }\r\n\r\n      .text {\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        padding-right: 20px;\r\n        border-right: 1px solid $borderGreen;\r\n        max-width: 580px;\r\n\r\n        .name {\r\n          font-size: 28.5px;\r\n          font-family: \"MavenProRegular\", sans-serif;\r\n          color: $textProfileWhite;\r\n          word-spacing: 3px;\r\n        }\r\n\r\n        .profession {\r\n          font-size: 18px;\r\n          font-family: \"MavenProRegular\", sans-serif;\r\n          color: $textProfileGreen;\r\n          word-spacing: 0.01px;\r\n          letter-spacing: 0;\r\n          padding-bottom: 14px;\r\n        }\r\n\r\n        .description {\r\n          font-size: 12px;\r\n          font-family: 'Lato', sans-serif;\r\n          color: $textProfileWhite;\r\n          line-height: 1.8;\r\n          text-align: justify;\r\n          -webkit-hyphens: auto;\r\n          -moz-hyphens: auto;\r\n          -ms-hyphens: auto;\r\n          hyphens: auto;\r\n          padding-bottom: 39px;\r\n        }\r\n\r\n        .messengers {\r\n          display: flex;\r\n          justify-content: flex-end;\r\n          padding-bottom: 10px;\r\n\r\n          button {\r\n            height: 24px;\r\n            width: 24.5px;\r\n            border: 0;\r\n\r\n            svg {\r\n              height: 12px;\r\n              width: 12px;\r\n            }\r\n\r\n            &:hover {\r\n              background-color: $link;\r\n            }\r\n\r\n            &:active {\r\n              background-color: $linkActive;\r\n            }\r\n          }\r\n        }\r\n\r\n        .icon {\r\n          fill: $backgroundAcrylic;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n.get-in-touch {\r\n  width: 100%;\r\n  padding: 13px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 538px;\r\n  background-color: $backgroundBlack;\r\n\r\n  .header-footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-top: 1px solid $borderBlack;\r\n    padding-top: 50px;\r\n\r\n    .heading, .subtitle {\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n      width: 780px;\r\n    }\r\n\r\n    .heading {\r\n      font-size: 30px;\r\n      color: $textConnectionWhite;\r\n      line-height: 1;\r\n      word-spacing: 1px;\r\n    }\r\n\r\n    .subtitle {\r\n      font-size: 18px;\r\n      color: $textConnectionGray;\r\n    }\r\n  }\r\n\r\n  .bot {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    padding-top: 10px;\r\n    padding-bottom: 43px;\r\n    border-bottom: 1px solid $borderBlack;\r\n\r\n    .forms, .button {\r\n      width: 580px;\r\n\r\n      form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        height: 100%;\r\n\r\n        input, textarea {\r\n          font-family: 'Lato', sans-serif;\r\n          font-size: 12px;\r\n          color: $textConnectionGray;\r\n          background-color: $backgroundInput;\r\n          border: 0;\r\n        }\r\n\r\n        input, textarea {\r\n          padding: 17px 13px;\r\n        }\r\n\r\n        input {\r\n          height: 5px;\r\n        }\r\n\r\n        textarea {\r\n          padding: 10px 17px;\r\n          height: 130px;\r\n          resize: none;\r\n        }\r\n      }\r\n\r\n      .button {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n      }\r\n\r\n      button {\r\n        font-family: 'Lato', sans-serif;\r\n        font-size: 12px;\r\n        width: 90px;\r\n        height: 37px;\r\n        background-color: $backgroundAcrylic;\r\n        color: $textProfileWhite;\r\n        border: 0;\r\n      }\r\n    }\r\n\r\n    .info {\r\n      padding-left: 20px;\r\n      padding-top: 2px;\r\n      width: 179px;\r\n      font-family: 'Lato', sans-serif;\r\n      font-size: 12px;\r\n      color: $textConnectionGray;\r\n      line-height: 1.88;\r\n      text-align: justify;\r\n      -webkit-hyphens: auto;\r\n      -moz-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n      hyphens: auto;\r\n\r\n      span {\r\n        .bolder {\r\n          font-weight: bold;\r\n          color: $textConnectionWhite;\r\n        }\r\n      }\r\n\r\n      .contacts {\r\n        margin-top: 33px;\r\n\r\n        a {\r\n          text-decoration: none;\r\n          display: flex;\r\n          flex-direction: row;\r\n          align-items: center;\r\n          color: $textConnectionGray;\r\n\r\n          svg {\r\n            height: 12px;\r\n            width: 12px;\r\n            margin-right: 10px;\r\n\r\n            .item {\r\n              fill: $contact;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 43px;\r\n  background-color: $backgroundFooter;\r\n  font-family: \"MavenProRegular\", sans-serif;\r\n  color: $backgroundInput;\r\n  font-size: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  span {\r\n    padding-left: 79px;\r\n    width: 1020px;\r\n  }\r\n}"],"sourceRoot":""}]);
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
module.exports = __webpack_require__.p + "src/assets/font/Lato-Black.ttf";

/***/ }),

/***/ "./src/assets/font/Lato.ttf":
/*!**********************************!*\
  !*** ./src/assets/font/Lato.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/font/Lato.ttf";

/***/ }),

/***/ "./src/assets/font/MavenPro-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/font/MavenPro-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/font/MavenPro-Regular.ttf";

/***/ }),

/***/ "./src/assets/img/Logo.svg":
/*!*********************************!*\
  !*** ./src/assets/img/Logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/Logo.svg";

/***/ }),

/***/ "./src/assets/img/Photo.svg":
/*!**********************************!*\
  !*** ./src/assets/img/Photo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/Photo.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position1.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position1.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position1.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position10.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position10.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position10.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position11.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position11.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position11.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position12.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position12.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position12.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position13.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/portfolio/Position13.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position13.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position2.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position2.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position2.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position3.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position3.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position3.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position4.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position4.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position4.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position5.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position5.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position5.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position6.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position6.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position6.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position7.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position7.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position7.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position8.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position8.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position8.svg";

/***/ }),

/***/ "./src/assets/img/portfolio/Position9.svg":
/*!************************************************!*\
  !*** ./src/assets/img/portfolio/Position9.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/img/portfolio/Position9.svg";

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

function importAll(webpackContext) {
  webpackContext.keys().forEach(function (item, i, arr) {
    return portfolio_img[i] = webpackContext(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsYUFBYSxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxhQUFhLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxV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RixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQ3hDWixJQUFBQSxjQUFjLENBQUNVLFFBQVEsQ0FBQ25GLENBQUQsQ0FBVCxFQUFjLFFBQWQsQ0FBZDtBQUNILEdBRkQ7OztBQURKLEtBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21GLFFBQVEsQ0FBQzlFLE1BQTdCLEVBQXFDTCxDQUFDLEVBQXRDLEVBQTBDO0FBQUEsUUFBakNBLENBQWlDO0FBSXpDOztBQUNELElBQU1zRixRQUFRLEdBQUdOLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBakI7OzZCQUNTcEY7QUFDTHNGLEVBQUFBLFFBQVEsQ0FBQ3RGLEVBQUQsQ0FBUixDQUFZcUYsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUN4Q1osSUFBQUEsY0FBYyxDQUFDYSxRQUFRLENBQUN0RixFQUFELENBQVQsRUFBYyxlQUFkLENBQWQ7QUFDSCxHQUZEOzs7QUFESixLQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdzRixRQUFRLENBQUNqRixNQUE3QixFQUFxQ0wsRUFBQyxFQUF0QyxFQUEwQztBQUFBLFNBQWpDQSxFQUFpQztBQUl6QyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW98c3luY3wvLnN2ZyQiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvTGF0by50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L0xhdG8tQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC9NYXZlblByby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG4gIGhlaWdodDogNjNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaGVhZGVyIC5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmhlYWRlciAuY29udGVudCAubGluaywgaGVhZGVyIC5jb250ZW50IGgxIHtcXG4gIGZsZXgtYmFzaXM6IDIwJTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAxMDI7XFxuICBoZWlnaHQ6IDc0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZWI7XFxufVxcbmhlYWRlciAuY29udGVudCAubGluayBhLCBoZWFkZXIgLmNvbnRlbnQgLmxpbmsgYSBoMSwgaGVhZGVyIC5jb250ZW50IGgxIGEsIGhlYWRlciAuY29udGVudCBoMSBhIGgxIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuaGVhZGVyIC5jb250ZW50IC5saW5rIGEuYWN0aXZlLCBoZWFkZXIgLmNvbnRlbnQgLmxpbmsgYS5hY3RpdmUgaDEsIGhlYWRlciAuY29udGVudCBoMSBhLmFjdGl2ZSwgaGVhZGVyIC5jb250ZW50IGgxIGEuYWN0aXZlIGgxIHtcXG4gIGNvbG9yOiAjMmViMzk4O1xcbn1cXG5oZWFkZXIgLmNvbnRlbnQgLmxpbmsgLmluZGVudCwgaGVhZGVyIC5jb250ZW50IGgxIC5pbmRlbnQge1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG59XFxuaGVhZGVyIC5jb250ZW50IC5iZWZvcmUge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5oZWFkZXIgLmNvbnRlbnQgLmFmdGVyIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuaGVhZGVyIC5jb250ZW50IC5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtYmFzaXM6IDEzOXB4O1xcbiAgei1pbmRleDogMTAyO1xcbiAgaGVpZ2h0OiA3NHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIC5jb250ZW50IC5wb2ludHktdGhpbmd5IHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDUxLjVweCA5MHB4IDAgOTBweDtcXG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzhweDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAucG9ydGZvbGlvIHtcXG4gIG1heC13aWR0aDogMTAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDcyMXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5wb3J0Zm9saW8gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnBvcnRmb2xpbyBkaXYgaW1nIHtcXG4gIGhlaWdodDogMjA2cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxubWFpbiAucG9ydGZvbGlvIC50b3AsIG1haW4gLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTA0cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNGU5ZWI7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTRlOWViO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5tYWluIC5wb3J0Zm9saW8gLnRvcCB7XFxuICBib3R0b206IDEzcHg7XFxufVxcbm1haW4gLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gIHRvcDogMTNweDtcXG59XFxubWFpbiAucG9ydGZvbGlvIC5zbGlkZS1zd2l0Y2hlcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYm90dG9tOiAxMXB4O1xcbiAgbWF4LXdpZHRoOiAxMDIwcHg7XFxufVxcbm1haW4gLnBvcnRmb2xpbyAuc2xpZGUtc3dpdGNoZXMgLnN3aXRjaGVzIHtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTllYjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxubWFpbiAucG9ydGZvbGlvIC5zbGlkZS1zd2l0Y2hlcyAuc3dpdGNoZXMgLnN3aXRjaCB7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQyYzU7XFxufVxcbm1haW4gLnBvcnRmb2xpbyAuc2xpZGUtc3dpdGNoZXMgLnN3aXRjaGVzIC5hY3RpdmUtc3dpdGNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Yjg3ODQ7XFxufVxcbm1haW4gLmltZyB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxubWFpbiAucHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYjM5ODtcXG4gIGhlaWdodDogMzAxcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IHtcXG4gIG1heC13aWR0aDogMTAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC5waG90bywgbWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC5waG90byB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyMTlkODQ7XFxuICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjE5ZDg0O1xcbiAgbWF4LXdpZHRoOiA1ODBweDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAubmFtZSB7XFxuICBmb250LXNpemU6IDI4LjVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZDdmY2Y1O1xcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgLnByb2Zlc3Npb24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMDgxNmQ7XFxuICB3b3JkLXNwYWNpbmc6IDAuMDFweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Q3ZmNmNTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xcbiAgLW1zLWh5cGhlbnM6IGF1dG87XFxuICBoeXBoZW5zOiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDM5cHg7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgLm1lc3NlbmdlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAubWVzc2VuZ2VycyBidXR0b24ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0LjVweDtcXG4gIGJvcmRlcjogMDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAubWVzc2VuZ2VycyBidXR0b24gc3ZnIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IC5tZXNzZW5nZXJzIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYmQ0O1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IC5tZXNzZW5nZXJzIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjY2JiZTtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAuaWNvbiB7XFxuICBmaWxsOiAjMmViMzk4O1xcbn1cXG5cXG4uZ2V0LWluLXRvdWNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTNweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUzOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG59XFxuLmdldC1pbi10b3VjaCAuaGVhZGVyLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzJiMmIyYjtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIC5oZWFkaW5nLCAuZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIC5zdWJ0aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogNzgwcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHdvcmQtc3BhY2luZzogMXB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIC5zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2JlYmViZTtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJiMmIyYjtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcywgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24ge1xcbiAgd2lkdGg6IDU4MHB4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0sIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIGlucHV0LCAuZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gdGV4dGFyZWEsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDU0NTtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIGlucHV0LCAuZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gdGV4dGFyZWEsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTdweCAxM3B4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gaW5wdXQge1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSB0ZXh0YXJlYSwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4IDE3cHg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIC5idXR0b24sIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIC5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgYnV0dG9uLCAuZ2V0LWluLXRvdWNoIC5ib3QgLmJ1dHRvbiBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYjM5ODtcXG4gIGNvbG9yOiAjZDdmY2Y1O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8ge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG4gIHdpZHRoOiAxNzlweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI2JlYmViZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcXG4gIC1tb3otaHlwaGVuczogYXV0bztcXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xcbiAgaHlwaGVuczogYXV0bztcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIHNwYW4gLmJvbGRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gLmNvbnRhY3RzIHtcXG4gIG1hcmdpbi10b3A6IDMzcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyAuY29udGFjdHMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2JlYmViZTtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIC5jb250YWN0cyBhIHN2ZyB7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIC5jb250YWN0cyBhIHN2ZyAuaXRlbSB7XFxuICBmaWxsOiAjMmViMzk4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM0NTQ1NDU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb290ZXIgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDc5cHg7XFxuICB3aWR0aDogMTAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQkE7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUFqQkY7QUFvQkE7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUFsQkY7QUFxQkE7RUFDRSw4QkFBQTtFQUNBLDRDQUFBO0FBbkJGO0FBc0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBcEJGOztBQXVCQTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQTdDZ0I7RUE4Q2hCLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFwQkY7QUFzQkU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBcEJKO0FBc0JJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNB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Q0EsY0ExWmdCO0VBMlpoQixlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE1RUY7QUE4RUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUE1RUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhY2tncm91bmRCbGFjazogcmdiKDUwLCA1MCwgNTApO1xcclxcbiRiYWNrZ3JvdW5kQWNyeWxpYzogcmdiKDQ2LCAxNzksIDE1Mik7XFxyXFxuJGJhY2tncm91bmRXaGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiR0ZXh0UHJvZmlsZVdoaXRlOiByZ2IoMjE1LCAyNTIsIDI0NSk7XFxyXFxuJHRleHRQcm9maWxlR3JlZW46IHJnYigzMiwgMTI5LCAxMDkpO1xcclxcbiR0ZXh0Q29ubmVjdGlvbldoaXRlOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxyXFxuJHRleHRDb25uZWN0aW9uR3JheTogcmdiKDE5MCwgMTkwLCAxOTApO1xcclxcbiRiYWNrZ3JvdW5kSW5wdXQ6IHJnYig2OSwgNjksIDY5KTtcXHJcXG4kYmFja2dyb3VuZEZvb3RlcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiRib3JkZXJXaGl0ZTogcmdiKDIyOCwgMjMzLCAyMzUpO1xcclxcbiRzd2l0Y2g6IHJnYigyMjEsIDIxMCwgMTk3KTtcXHJcXG4kc3dpdGNoQWN0aXZlOiByZ2IoMTM5LCAxMzUsIDEzMik7XFxyXFxuJGJvcmRlckdyZWVuOiByZ2IoMzMsIDE1NywgMTMyKTtcXHJcXG4kYm9yZGVyQmxhY2s6IHJnYig0MywgNDMsIDQzKTtcXHJcXG4kbGluazogcmdiKDE2NSwgMjE5LCAyMTIpO1xcclxcbiRsaW5rQWN0aXZlOiByZ2IoMTA4LCAyMDMsIDE5MCk7XFxyXFxuJGNvbnRhY3Q6IHJnYig0NiwgMTc5LCAxNTIpO1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250L0xhdG8udHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udC9MYXRvLUJsYWNrLnR0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnQvTWF2ZW5Qcm8tUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQmxhY2s7XFxyXFxuICBoZWlnaHQ6IDYzcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAuY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAubGluaywgaDEge1xcclxcbiAgICAgIGZsZXgtYmFzaXM6IDIwJTtcXHJcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICB6LWluZGV4OiAxMDI7XFxyXFxuICAgICAgaGVpZ2h0OiA3NHB4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJXaGl0ZTtcXHJcXG5cXHJcXG4gICAgICBhLCBhIGgxIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZFdoaXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBhLmFjdGl2ZSwgYS5hY3RpdmUgaDEge1xcclxcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kQWNyeWxpYztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmluZGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYmVmb3JlIHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZnRlciB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGZsZXgtYmFzaXM6IDEzOXB4O1xcclxcbiAgICAgIHotaW5kZXg6IDEwMjtcXHJcXG4gICAgICBoZWlnaHQ6IDc0cHg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucG9pbnR5LXRoaW5neSB7XFxyXFxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICBib3JkZXItd2lkdGg6IDUxLjVweCA5MHB4IDAgOTBweDtcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kQmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogMzhweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgLnBvcnRmb2xpbyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDcyMXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBkaXYge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMDZweDtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9wLCAuYm90dG9tIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDRweDtcXHJcXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXJXaGl0ZTtcXHJcXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyV2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b3Age1xcclxcbiAgICAgIGJvdHRvbTogMTNweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm90dG9tIHtcXHJcXG4gICAgICB0b3A6IDEzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWRlLXN3aXRjaGVzIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgYm90dG9tOiAxMXB4O1xcclxcbiAgICAgIG1heC13aWR0aDogMTAyMHB4O1xcclxcblxcclxcbiAgICAgIC5zd2l0Y2hlcyB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJXaGl0ZTtcXHJcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgICAgIC5zd2l0Y2gge1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDZweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2l0Y2g7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWN0aXZlLXN3aXRjaCB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2l0Y2hBY3RpdmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9maWxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRBY3J5bGljO1xcclxcbiAgICBoZWlnaHQ6IDMwMXB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgIG1heC13aWR0aDogMTAyMHB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgLnBob3RvLCAudGV4dCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAucGhvdG8ge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyR3JlZW47XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAudGV4dCB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlckdyZWVuO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAyOC41cHg7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0UHJvZmlsZVdoaXRlO1xcclxcbiAgICAgICAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9mZXNzaW9uIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGV4dFByb2ZpbGVHcmVlbjtcXHJcXG4gICAgICAgICAgd29yZC1zcGFjaW5nOiAwLjAxcHg7XFxyXFxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0UHJvZmlsZVdoaXRlO1xcclxcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgICAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgICAgIC1tb3otaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgICAgIGh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzOXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm1lc3NlbmdlcnMge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI0LjVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3ZnIHtcXHJcXG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5rO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlua0FjdGl2ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pY29uIHtcXHJcXG4gICAgICAgICAgZmlsbDogJGJhY2tncm91bmRBY3J5bGljO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ2V0LWluLXRvdWNoIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTNweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDUzOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRCbGFjaztcXHJcXG5cXHJcXG4gIC5oZWFkZXItZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXJCbGFjaztcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuXFxyXFxuICAgIC5oZWFkaW5nLCAuc3VidGl0bGUge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICB3aWR0aDogNzgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRpbmcge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICBjb2xvcjogJHRleHRDb25uZWN0aW9uV2hpdGU7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1YnRpdGxlIHtcXHJcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgY29sb3I6ICR0ZXh0Q29ubmVjdGlvbkdyYXk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyQmxhY2s7XFxyXFxuXFxyXFxuICAgIC5mb3JtcywgLmJ1dHRvbiB7XFxyXFxuICAgICAgd2lkdGg6IDU4MHB4O1xcclxcblxcclxcbiAgICAgIGZvcm0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0Q29ubmVjdGlvbkdyYXk7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kSW5wdXQ7XFxyXFxuICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDE3cHggMTNweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTdweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gICAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYnV0dG9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBidXR0b24ge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRBY3J5bGljO1xcclxcbiAgICAgICAgY29sb3I6ICR0ZXh0UHJvZmlsZVdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mbyB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgICAgd2lkdGg6IDE3OXB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dENvbm5lY3Rpb25HcmF5O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg4O1xcclxcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcclxcbiAgICAgIC1tb3otaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAtbXMtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICBoeXBoZW5zOiBhdXRvO1xcclxcblxcclxcbiAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgLmJvbGRlciB7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICBjb2xvcjogJHRleHRDb25uZWN0aW9uV2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5jb250YWN0cyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzM3B4O1xcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0Q29ubmVjdGlvbkdyYXk7XFxyXFxuXFxyXFxuICAgICAgICAgIHN2ZyB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuaXRlbSB7XFxyXFxuICAgICAgICAgICAgICBmaWxsOiAkY29udGFjdDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0M3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRGb290ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogJGJhY2tncm91bmRJbnB1dDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA3OXB4O1xcclxcbiAgICB3aWR0aDogMTAyMHB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL1Bvc2l0aW9uMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjEuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEwLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTAuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjExLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTEuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTIuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTMuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb24yLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24zLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMy5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjQuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb241LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb242LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uNi5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjcuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjguc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb244LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb245LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uOS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8gc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vYXNzZXRzL2ltZy9Mb2dvLnN2Z1wiO1xyXG5pbXBvcnQgUGhvdG8gZnJvbSBcIi4vYXNzZXRzL2ltZy9QaG90by5zdmdcIjtcclxuXHJcbmxldCBwb3J0Zm9saW9faW1nID0gW107XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwod2VicGFja0NvbnRleHQpIHtcclxuICAgIHdlYnBhY2tDb250ZXh0LmtleXMoKS5mb3JFYWNoKChpdGVtLCBpLCBhcnIpID0+IHBvcnRmb2xpb19pbWdbaV0gPSB3ZWJwYWNrQ29udGV4dChpdGVtKSk7XHJcbn1cclxuXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8vJywgdHJ1ZSwgL1xcLnN2ZyQvKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2dnbGVDbGFzcyhlbGVtZW50LCBuZXdDbGFzc05hbWUpIHtcclxuICAgIGRlbGV0ZVRvZ2dsZUNsYXNzKG5ld0NsYXNzTmFtZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3NOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IG5hdl9saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZfbGluay5sZW5ndGg7IGkrKykge1xyXG4gICAgbmF2X2xpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUb2dnbGVDbGFzcyhuYXZfbGlua1tpXSwgXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBzd2l0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dpdGNoXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHN3aXRjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzd2l0Y2hlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRvZ2dsZUNsYXNzKHN3aXRjaGVzW2ldLCBcImFjdGl2ZS1zd2l0Y2hcIik7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsIl9pIiwicHVzaCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIlR5cGVFcnJvciIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsImlzQXJyYXkiLCJfaXRlbSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsIkxvZ28iLCJQaG90byIsInBvcnRmb2xpb19pbWciLCJpbXBvcnRBbGwiLCJ3ZWJwYWNrQ29udGV4dCIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsImNvbnRleHQiLCJhZGRUb2dnbGVDbGFzcyIsImVsZW1lbnQiLCJuZXdDbGFzc05hbWUiLCJkZWxldGVUb2dnbGVDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsIm5hdl9saW5rIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd2l0Y2hlcyJdLCJzb3VyY2VSb290IjoiIn0=