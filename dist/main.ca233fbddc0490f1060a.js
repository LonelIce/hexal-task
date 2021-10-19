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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n@font-face {\n  font-family: \"MavenProRegular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n}\n\nheader {\n  width: 100%;\n  font-family: \"Lato\", sans-serif;\n  background-color: #323232;\n  height: 63px;\n  display: flex;\n  justify-content: center;\n}\nheader .content {\n  display: flex;\n  justify-content: center;\n}\nheader .content .link, header .content h1 {\n  flex-basis: 20%;\n  flex-grow: 1;\n  display: flex;\n  z-index: 102;\n  height: 74px;\n  align-items: center;\n  border-bottom: 1px solid #e4e9eb;\n}\nheader .content .link a, header .content .link a h1, header .content h1 a, header .content h1 a h1 {\n  text-decoration: none;\n  color: white;\n  font-size: 10px;\n}\nheader .content .link a.active, header .content .link a.active h1, header .content h1 a.active, header .content h1 a.active h1 {\n  color: #2eb398;\n}\nheader .content .before {\n  justify-content: flex-end;\n}\nheader .content .logo {\n  display: flex;\n  justify-content: center;\n  z-index: 102;\n  height: 74px;\n  align-items: center;\n}\nheader .content .pointy-thingy {\n  border-style: solid;\n  border-width: 51.5px 90px 0 90px;\n  border-color: #323232 transparent transparent transparent;\n  position: absolute;\n  top: 38px;\n}\n\nmain {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .portfolio {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n}\nmain .portfolio div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .portfolio .top, main .portfolio .bottom {\n  position: relative;\n  border-left: 1px solid #e4e9eb;\n  border-right: 1px solid #e4e9eb;\n  padding: 0 10px;\n}\nmain .portfolio .slide-switches {\n  position: absolute;\n  display: flex;\n  justify-content: flex-start;\n  bottom: 11px;\n  width: 100%;\n}\nmain .portfolio .slide-switches .switches {\n  margin: 0 30px;\n  padding-bottom: 11px;\n  border-bottom: 1px solid #e4e9eb;\n  flex-grow: 1;\n  justify-content: flex-start;\n}\nmain .portfolio .slide-switches .switches .switch {\n  margin-right: 3px;\n  width: 6px;\n  height: 6px;\n  background-color: #ddd2c5;\n}\nmain .portfolio .slide-switches .switches .active-switch {\n  background-color: #8b8784;\n}\nmain .profile {\n  display: flex;\n  background-color: #2eb398;\n  justify-content: center;\n  padding: 20px 0;\n  width: 100%;\n}\nmain .profile .content {\n  display: flex;\n  justify-content: center;\n}\nmain .profile .content .photo, main .profile .content .text {\n  display: flex;\n}\nmain .profile .content .photo {\n  justify-content: center;\n  align-items: center;\n  border-left: 1px solid #219d84;\n}\nmain .profile .content .text {\n  justify-content: center;\n  flex-direction: column;\n  border-right: 1px solid #219d84;\n  max-width: 580px;\n}\nmain .profile .content .text .name {\n  font-size: 28.5px;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #d7fcf5;\n  word-spacing: 3px;\n}\nmain .profile .content .text .profession {\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #20816d;\n}\nmain .profile .content .text .description {\n  font-family: \"Lato\", sans-serif;\n  color: #d7fcf5;\n  text-align: justify;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\nmain .profile .content .text .messengers {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 10px;\n}\nmain .profile .content .text .messengers button {\n  height: 24px;\n  width: 24.5px;\n  border: 0;\n}\nmain .profile .content .text .messengers button svg {\n  height: 12px;\n  width: 12px;\n}\nmain .profile .content .text .messengers button:hover {\n  background-color: #a5dbd4;\n}\nmain .profile .content .text .messengers button:active {\n  background-color: #6ccbbe;\n}\nmain .profile .content .text .icon {\n  fill: #2eb398;\n}\n\n.get-in-touch {\n  width: 100%;\n  padding: 13px 0;\n  display: flex;\n  flex-direction: column;\n  background-color: #323232;\n}\n.get-in-touch .header-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid #2b2b2b;\n  padding-top: 50px;\n}\n.get-in-touch .header-footer .heading, .get-in-touch .header-footer .subtitle {\n  font-family: \"MavenProRegular\", sans-serif;\n}\n.get-in-touch .header-footer .heading {\n  font-size: 30px;\n  color: #e0e0e0;\n  line-height: 1;\n  word-spacing: 1px;\n}\n.get-in-touch .header-footer .subtitle {\n  font-size: 18px;\n  color: #bebebe;\n}\n.get-in-touch .bot {\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  padding-top: 10px;\n  padding-bottom: 43px;\n  border-bottom: 1px solid #2b2b2b;\n}\n.get-in-touch .bot .forms form, .get-in-touch .bot .button form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 100%;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form input, .get-in-touch .bot .button form textarea {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  color: #bebebe;\n  background-color: #454545;\n  border: 0;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form input, .get-in-touch .bot .button form textarea {\n  padding: 17px 13px;\n}\n.get-in-touch .bot .forms form input, .get-in-touch .bot .button form input {\n  height: 5px;\n}\n.get-in-touch .bot .forms form textarea, .get-in-touch .bot .button form textarea {\n  padding: 10px 17px;\n  height: 130px;\n  resize: none;\n}\n.get-in-touch .bot .forms .button, .get-in-touch .bot .button .button {\n  display: flex;\n  justify-content: flex-end;\n}\n.get-in-touch .bot .forms button, .get-in-touch .bot .button button {\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  width: 90px;\n  height: 37px;\n  background-color: #2eb398;\n  color: #d7fcf5;\n  border: 0;\n}\n.get-in-touch .bot .forms button:hover, .get-in-touch .bot .button button:hover {\n  background-color: #219d84;\n}\n.get-in-touch .bot .forms button:active, .get-in-touch .bot .button button:active {\n  background-color: #20816d;\n}\n.get-in-touch .bot .info {\n  padding-left: 20px;\n  padding-top: 2px;\n  font-family: \"Lato\", sans-serif;\n  color: #bebebe;\n  text-align: justify;\n  -webkit-hyphens: auto;\n  -moz-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n.get-in-touch .bot .info span .bolder {\n  font-weight: bold;\n  color: #e0e0e0;\n}\n.get-in-touch .bot .info .contacts {\n  margin-top: 33px;\n}\n.get-in-touch .bot .info .contacts a {\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #bebebe;\n}\n.get-in-touch .bot .info .contacts a svg {\n  height: 12px;\n  width: 12px;\n  margin-right: 10px;\n}\n.get-in-touch .bot .info .contacts a svg .item {\n  fill: #2eb398;\n}\n\nfooter {\n  width: 100%;\n  height: 43px;\n  background-color: #222222;\n  font-family: \"MavenProRegular\", sans-serif;\n  color: #454545;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nfooter span {\n  padding-left: 79px;\n}\n\n@media (max-device-width: 576px) {\n  header .content, main .portfolio, .profile .content, footer span {\n    width: 320px;\n  }\n\n  header .content .logo {\n    width: 100px;\n  }\n  header .content .link .indent {\n    padding-right: 5px;\n  }\n\n  .heading, .subtitle {\n    width: 287.62px;\n  }\n\n  .forms, .button {\n    width: 160px;\n  }\n  .forms input, .forms textarea, .button input, .button textarea {\n    margin-bottom: 5px;\n  }\n\n  .info {\n    width: 120.825px;\n  }\n\n  .get-in-touch .bot .info {\n    font-size: 10px;\n    line-height: 1.4;\n  }\n\n  main .portfolio {\n    height: 300px;\n  }\n  main .portfolio .top, main .portfolio .bottom {\n    height: 31.28px;\n  }\n  main .portfolio .top {\n    bottom: 6px;\n  }\n  main .portfolio .bottom {\n    top: 6px;\n  }\n\n  .profile .photo {\n    width: 100px;\n  }\n  .profile .photo img {\n    height: 120px;\n  }\n  .profile .text {\n    font-size: 12px;\n    padding-right: 10px;\n  }\n  .profile .text .description {\n    padding-bottom: 10px;\n  }\n  .profile .text .profession {\n    font-size: 18px;\n    word-spacing: 0.01px;\n    letter-spacing: 0;\n    padding-bottom: 14px;\n  }\n\n  main .portfolio .img {\n    margin: 0 4px;\n    width: 54.675px;\n  }\n\n  main div img {\n    height: 62.5725px;\n  }\n\n  .profile .content .photo {\n    padding: 0 6px;\n  }\n}\n@media (min-device-width: 576px) {\n  header .content, main .portfolio, .profile .content, footer span {\n    width: 540px;\n  }\n\n  header .content .logo {\n    width: 139px;\n  }\n  header .content .link .indent {\n    padding-right: 24px;\n  }\n  header .content .after {\n    margin-right: 30px;\n  }\n  header .content .before {\n    margin-left: 30px;\n  }\n\n  .get-in-touch {\n    height: 500px;\n  }\n  .get-in-touch .bot .info {\n    font-size: 10px;\n    line-height: 1.5;\n  }\n\n  .heading, .subtitle {\n    width: 433.81px;\n  }\n\n  .forms, .button {\n    width: 293.625px;\n  }\n\n  .info {\n    width: 120.825px;\n  }\n\n  main .portfolio {\n    height: 450px;\n  }\n  main .portfolio .top, main .portfolio .bottom {\n    height: 52.14px;\n  }\n  main .portfolio .top {\n    bottom: 6px;\n  }\n  main .portfolio .bottom {\n    top: 6px;\n  }\n\n  main .portfolio .img {\n    margin: 0 4px;\n    width: 91.125px;\n  }\n\n  .profile .photo {\n    width: 100px;\n  }\n  .profile .text {\n    font-size: 12px;\n    line-height: 1.8;\n    padding-bottom: 39px;\n    padding-right: 20px;\n  }\n  .profile .text .profession {\n    font-size: 18px;\n    word-spacing: 0.01px;\n    letter-spacing: 0;\n    padding-bottom: 14px;\n  }\n\n  main div img {\n    height: 104.2875px;\n  }\n}\n@media (min-device-width: 768px) {\n  header .content, main .portfolio, .profile .content, footer span {\n    width: 740px;\n  }\n\n  .heading, .subtitle {\n    width: 634px;\n  }\n\n  .forms, .button {\n    width: 435px;\n  }\n\n  .info {\n    width: 179px;\n  }\n\n  .get-in-touch .bot .info {\n    font-size: 11px;\n    line-height: 1.88;\n  }\n\n  main .portfolio {\n    height: 600px;\n  }\n  main .portfolio .top, main .portfolio .bottom {\n    height: 77.25px;\n  }\n  main .portfolio .top {\n    bottom: 25px;\n  }\n  main .portfolio .bottom {\n    top: 25px;\n  }\n\n  .profile .photo {\n    width: 180px;\n  }\n\n  main .portfolio .img {\n    margin: 0 5px;\n    width: 135px;\n  }\n\n  main div img {\n    height: 154.5px;\n  }\n}\n@media (min-device-width: 992px) {\n  header .content, main .portfolio, .profile .content, footer span {\n    width: 920px;\n  }\n\n  .get-in-touch {\n    height: 538px;\n  }\n  .get-in-touch .bot .info {\n    font-size: 12px;\n  }\n\n  .heading, .subtitle {\n    width: 780px;\n  }\n\n  .forms, .button {\n    width: 580px;\n  }\n\n  .info {\n    width: 179px;\n  }\n\n  main .portfolio {\n    height: 700px;\n  }\n  main .portfolio .top, main .portfolio .bottom {\n    height: 104px;\n  }\n  main .portfolio .top {\n    bottom: 13px;\n  }\n  main .portfolio .bottom {\n    top: 13px;\n  }\n\n  main .portfolio .img {\n    margin: 0 8px;\n    width: 180px;\n  }\n\n  main div img {\n    height: 206px;\n  }\n\n  .profile .content .photo {\n    padding: 0 10px;\n  }\n}\n@media (min-device-width: 1200px) {\n  header .content, main .portfolio, .profile .content, footer span {\n    width: 1020px;\n  }\n\n  .info {\n    width: 179px;\n  }\n\n  main .portfolio {\n    height: 721px;\n  }\n  main .portfolio .top, main .portfolio .bottom {\n    height: 104px;\n  }\n\n  main .portfolio .img {\n    margin: 0 10px;\n  }\n\n  .profile .content .photo {\n    padding: 0 20px;\n  }\n  .profile .content .text .description {\n    margin-bottom: 40px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$backgroundBlack: rgb(50, 50, 50);\r\n$backgroundAcrylic: rgb(46, 179, 152);\r\n$backgroundWhite: rgb(255, 255, 255);\r\n$textProfileWhite: rgb(215, 252, 245);\r\n$textProfileGreen: rgb(32, 129, 109);\r\n$textConnectionWhite: rgb(224, 224, 224);\r\n$textConnectionGray: rgb(190, 190, 190);\r\n$backgroundInput: rgb(69, 69, 69);\r\n$backgroundFooter: rgb(34, 34, 34);\r\n$borderWhite: rgb(228, 233, 235);\r\n$switch: rgb(221, 210, 197);\r\n$switchActive: rgb(139, 135, 132);\r\n$borderGreen: rgb(33, 157, 132);\r\n$borderBlack: rgb(43, 43, 43);\r\n$link: rgb(165, 219, 212);\r\n$linkActive: rgb(108, 203, 190);\r\n$contact: rgb(46, 179, 152);\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato.ttf');\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./assets/font/Lato-Black.ttf');\r\n  font-weight: bold;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"MavenProRegular\";\r\n  src: url('./assets/font/MavenPro-Regular.ttf');\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  font-family: 'Lato', sans-serif;\r\n  background-color: $backgroundBlack;\r\n  height: 63px;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  .content {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    .link, h1 {\r\n      flex-basis: 20%;\r\n      flex-grow: 1;\r\n      display: flex;\r\n      z-index: 102;\r\n      height: 74px;\r\n      align-items: center;\r\n      border-bottom: 1px solid $borderWhite;\r\n\r\n      a, a h1 {\r\n        text-decoration: none;\r\n        color: $backgroundWhite;\r\n        font-size: 10px;\r\n      }\r\n\r\n      a.active, a.active h1 {\r\n        color: $backgroundAcrylic;\r\n      }\r\n    }\r\n\r\n    .before {\r\n      justify-content: flex-end;\r\n    }\r\n\r\n    .logo {\r\n      display: flex;\r\n      justify-content: center;\r\n      z-index: 102;\r\n      height: 74px;\r\n      align-items: center;\r\n    }\r\n\r\n    .pointy-thingy {\r\n      border-style: solid;\r\n      border-width: 51.5px 90px 0 90px;\r\n      border-color: $backgroundBlack transparent transparent transparent;\r\n      position: absolute;\r\n      top: 38px;\r\n    }\r\n  }\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  .portfolio {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position: relative;\r\n    align-items: center;\r\n\r\n    div {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n\r\n    .top, .bottom {\r\n      position: relative;\r\n      border-left: 1px solid $borderWhite;\r\n      border-right: 1px solid $borderWhite;\r\n      padding: 0 10px;\r\n    }\r\n\r\n    .slide-switches {\r\n      position: absolute;\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      bottom: 11px;\r\n      width: 100%;\r\n\r\n      .switches {\r\n        margin: 0 30px;\r\n        padding-bottom: 11px;\r\n        border-bottom: 1px solid $borderWhite;\r\n        flex-grow: 1;\r\n        justify-content: flex-start;\r\n\r\n        .switch {\r\n          margin-right: 3px;\r\n          width: 6px;\r\n          height: 6px;\r\n          background-color: $switch;\r\n        }\r\n\r\n        .active-switch {\r\n          background-color: $switchActive;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .profile {\r\n    display: flex;\r\n    background-color: $backgroundAcrylic;\r\n    justify-content: center;\r\n    padding: 20px 0;\r\n    width: 100%;\r\n\r\n    .content {\r\n      display: flex;\r\n      justify-content: center;\r\n\r\n      .photo, .text {\r\n        display: flex;\r\n      }\r\n\r\n      .photo {\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-left: 1px solid $borderGreen;\r\n      }\r\n\r\n      .text {\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        border-right: 1px solid $borderGreen;\r\n        max-width: 580px;\r\n\r\n        .name {\r\n          font-size: 28.5px;\r\n          font-family: \"MavenProRegular\", sans-serif;\r\n          color: $textProfileWhite;\r\n          word-spacing: 3px;\r\n        }\r\n\r\n        .profession {\r\n          font-family: \"MavenProRegular\", sans-serif;\r\n          color: $textProfileGreen;\r\n        }\r\n\r\n        .description {\r\n          font-family: 'Lato', sans-serif;\r\n          color: $textProfileWhite;\r\n          text-align: justify;\r\n          -webkit-hyphens: auto;\r\n          -moz-hyphens: auto;\r\n          -ms-hyphens: auto;\r\n          hyphens: auto;\r\n        }\r\n\r\n        .messengers {\r\n          display: flex;\r\n          justify-content: flex-end;\r\n          padding-bottom: 10px;\r\n\r\n          button {\r\n            height: 24px;\r\n            width: 24.5px;\r\n            border: 0;\r\n\r\n            svg {\r\n              height: 12px;\r\n              width: 12px;\r\n            }\r\n\r\n            &:hover {\r\n              background-color: $link;\r\n            }\r\n\r\n            &:active {\r\n              background-color: $linkActive;\r\n            }\r\n          }\r\n        }\r\n\r\n        .icon {\r\n          fill: $backgroundAcrylic;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.get-in-touch {\r\n  width: 100%;\r\n  padding: 13px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: $backgroundBlack;\r\n\r\n  .header-footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-top: 1px solid $borderBlack;\r\n    padding-top: 50px;\r\n\r\n    .heading, .subtitle {\r\n      font-family: \"MavenProRegular\", sans-serif;\r\n    }\r\n\r\n    .heading {\r\n      font-size: 30px;\r\n      color: $textConnectionWhite;\r\n      line-height: 1;\r\n      word-spacing: 1px;\r\n    }\r\n\r\n    .subtitle {\r\n      font-size: 18px;\r\n      color: $textConnectionGray;\r\n    }\r\n  }\r\n\r\n  .bot {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    padding-top: 10px;\r\n    padding-bottom: 43px;\r\n    border-bottom: 1px solid $borderBlack;\r\n\r\n    .forms, .button {\r\n      form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        height: 100%;\r\n\r\n        input, textarea {\r\n          font-family: 'Lato', sans-serif;\r\n          font-size: 12px;\r\n          color: $textConnectionGray;\r\n          background-color: $backgroundInput;\r\n          border: 0;\r\n        }\r\n\r\n        input, textarea {\r\n          padding: 17px 13px;\r\n        }\r\n\r\n        input {\r\n          height: 5px;\r\n        }\r\n\r\n        textarea {\r\n          padding: 10px 17px;\r\n          height: 130px;\r\n          resize: none;\r\n        }\r\n      }\r\n\r\n      .button {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n      }\r\n\r\n      button {\r\n        font-family: 'Lato', sans-serif;\r\n        font-size: 12px;\r\n        width: 90px;\r\n        height: 37px;\r\n        background-color: $backgroundAcrylic;\r\n        color: $textProfileWhite;\r\n        border: 0;\r\n\r\n        &:hover {\r\n          background-color: $borderGreen;\r\n        }\r\n\r\n        &:active {\r\n          background-color: $textProfileGreen;\r\n        }\r\n      }\r\n    }\r\n\r\n    .info {\r\n      padding-left: 20px;\r\n      padding-top: 2px;\r\n      font-family: 'Lato', sans-serif;\r\n      color: $textConnectionGray;\r\n      text-align: justify;\r\n      -webkit-hyphens: auto;\r\n      -moz-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n      hyphens: auto;\r\n\r\n      span {\r\n        .bolder {\r\n          font-weight: bold;\r\n          color: $textConnectionWhite;\r\n        }\r\n      }\r\n\r\n      .contacts {\r\n        margin-top: 33px;\r\n\r\n        a {\r\n          text-decoration: none;\r\n          display: flex;\r\n          flex-direction: row;\r\n          align-items: center;\r\n          color: $textConnectionGray;\r\n\r\n          svg {\r\n            height: 12px;\r\n            width: 12px;\r\n            margin-right: 10px;\r\n\r\n            .item {\r\n              fill: $contact;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 43px;\r\n  background-color: $backgroundFooter;\r\n  font-family: \"MavenProRegular\", sans-serif;\r\n  color: $backgroundInput;\r\n  font-size: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  span {\r\n    padding-left: 79px;\r\n  }\r\n}\r\n\r\n@media (max-device-width: 576px) {\r\n  header .content, main .portfolio, .profile .content, footer span {\r\n    width: 320px;\r\n  }\r\n\r\n  header {\r\n    .content {\r\n      .logo {\r\n        width: 100px;\r\n      }\r\n\r\n      .link {\r\n        .indent {\r\n          padding-right: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .heading, .subtitle {\r\n    width: 287.62px;\r\n  }\r\n\r\n  .forms, .button {\r\n    width: 160px;\r\n\r\n    input, textarea {\r\n      margin-bottom: 5px;\r\n    }\r\n  }\r\n\r\n  .info {\r\n    width: 120.825px;\r\n  }\r\n\r\n  .get-in-touch {\r\n    .bot {\r\n      .info {\r\n        font-size: 10px;\r\n        line-height: 1.4;\r\n      }\r\n    }\r\n  }\r\n\r\n  main .portfolio {\r\n    height: 300px;\r\n\r\n    .top, .bottom {\r\n      height: 31.28px;\r\n    }\r\n\r\n    .top {\r\n      bottom: 6px;\r\n    }\r\n\r\n    .bottom {\r\n      top: 6px;\r\n    }\r\n  }\r\n\r\n  .profile {\r\n    .photo {\r\n      width: 100px;\r\n\r\n      img {\r\n        height: 120px;\r\n      }\r\n    }\r\n\r\n    .text {\r\n      font-size: 12px;\r\n      padding-right: 10px;\r\n\r\n      .description {\r\n        padding-bottom: 10px;\r\n      }\r\n\r\n      .profession {\r\n        font-size: 18px;\r\n        word-spacing: 0.01px;\r\n        letter-spacing: 0;\r\n        padding-bottom: 14px;\r\n      }\r\n    }\r\n  }\r\n\r\n  main .portfolio .img {\r\n    margin: 0 4px;\r\n    width: 54.675px;\r\n  }\r\n\r\n  main div img {\r\n    height: 62.5725px;\r\n  }\r\n\r\n  .profile {\r\n    .content {\r\n      .photo {\r\n        padding: 0 6px;\r\n      }\r\n    }\r\n  }\r\n\r\n}\r\n\r\n@media (min-device-width: 576px) {\r\n  header .content, main .portfolio, .profile .content, footer span {\r\n    width: 540px;\r\n  }\r\n\r\n  header {\r\n    .content {\r\n      .logo {\r\n        width: 139px;\r\n      }\r\n\r\n      .link {\r\n        .indent {\r\n          padding-right: 24px;\r\n        }\r\n      }\r\n\r\n      .after {\r\n        margin-right: 30px;\r\n      }\r\n\r\n      .before {\r\n        margin-left: 30px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .get-in-touch {\r\n    height: 500px;\r\n\r\n    .bot {\r\n      .info {\r\n        font-size: 10px;\r\n        line-height: 1.5;\r\n      }\r\n    }\r\n  }\r\n\r\n  .heading, .subtitle {\r\n    width: 433.81px;\r\n  }\r\n\r\n  .forms, .button {\r\n    width: 293.625px;\r\n  }\r\n\r\n  .info {\r\n    width: 120.825px;\r\n  }\r\n\r\n  main .portfolio {\r\n    height: 450px;\r\n\r\n    .top, .bottom {\r\n      height: 52.14px;\r\n    }\r\n\r\n    .top {\r\n      bottom: 6px;\r\n    }\r\n\r\n    .bottom {\r\n      top: 6px;\r\n    }\r\n  }\r\n\r\n  main .portfolio .img {\r\n    margin: 0 4px;\r\n    width: 91.125px;\r\n  }\r\n\r\n  .profile {\r\n    .photo {\r\n      width: 100px;\r\n    }\r\n\r\n    .text {\r\n      font-size: 12px;\r\n      line-height: 1.8;\r\n      padding-bottom: 39px;\r\n      padding-right: 20px;\r\n\r\n      .profession {\r\n        font-size: 18px;\r\n        word-spacing: 0.01px;\r\n        letter-spacing: 0;\r\n        padding-bottom: 14px;\r\n      }\r\n    }\r\n  }\r\n\r\n  main div img {\r\n    height: 104.2875px;\r\n  }\r\n}\r\n\r\n@media (min-device-width: 768px) {\r\n  header .content, main .portfolio, .profile .content, footer span {\r\n    width: 740px;\r\n  }\r\n\r\n  .heading, .subtitle {\r\n    width: 634px;\r\n  }\r\n\r\n  .forms, .button {\r\n    width: 435px;\r\n  }\r\n\r\n  .info {\r\n    width: 179px;\r\n  }\r\n\r\n  .get-in-touch {\r\n    .bot {\r\n      .info {\r\n        font-size: 11px;\r\n        line-height: 1.88;\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n  main .portfolio {\r\n    height: 600px;\r\n\r\n    .top, .bottom {\r\n      height: 77.25px;\r\n    }\r\n\r\n    .top {\r\n      bottom: 25px;\r\n    }\r\n\r\n    .bottom {\r\n      top: 25px;\r\n    }\r\n  }\r\n\r\n  .profile {\r\n    .photo {\r\n      width: 180px;\r\n    }\r\n  }\r\n\r\n  main .portfolio .img {\r\n    margin: 0 5px;\r\n    width: 135px;\r\n  }\r\n\r\n  main div img {\r\n    height: 154.5px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-device-width: 992px) {\r\n  header .content, main .portfolio, .profile .content, footer span {\r\n    width: 920px;\r\n  }\r\n\r\n  .get-in-touch {\r\n    height: 538px;\r\n\r\n    .bot {\r\n      .info {\r\n        font-size: 12px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .heading, .subtitle {\r\n    width: 780px;\r\n  }\r\n\r\n  .forms, .button {\r\n    width: 580px;\r\n  }\r\n\r\n  .info {\r\n    width: 179px;\r\n  }\r\n\r\n  main .portfolio {\r\n    height: 700px;\r\n\r\n    .top, .bottom {\r\n      height: 104px;\r\n    }\r\n\r\n    .top {\r\n      bottom: 13px;\r\n    }\r\n\r\n    .bottom {\r\n      top: 13px;\r\n    }\r\n  }\r\n\r\n  main .portfolio .img {\r\n    margin: 0 8px;\r\n    width: 180px;\r\n  }\r\n\r\n  main div img {\r\n    height: 206px;\r\n  }\r\n\r\n  .profile {\r\n    .content {\r\n      .photo {\r\n        padding: 0 10px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-device-width: 1200px) {\r\n  header .content, main .portfolio, .profile .content, footer span {\r\n    width: 1020px;\r\n  }\r\n\r\n  .info {\r\n    width: 179px;\r\n  }\r\n\r\n  main .portfolio {\r\n    height: 721px;\r\n\r\n    .top, .bottom {\r\n      height: 104px;\r\n    }\r\n  }\r\n\r\n  main .portfolio .img {\r\n    margin: 0 10px;\r\n  }\r\n\r\n  .profile {\r\n    .content {\r\n      .photo {\r\n        padding: 0 20px;\r\n      }\r\n\r\n      .text {\r\n        .description {\r\n          margin-bottom: 40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLGFBQWEsYUFBYSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8s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QUFBQSxPQUFPLENBQUNHLFNBQVIsQ0FBa0JLLE1BQWxCLENBQXlCSCxTQUF6QjtBQUNIOztBQUVELElBQU1JLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixXQUExQixDQUFqQjs7MkJBQ1NwRjtBQUNMbUYsRUFBQUEsUUFBUSxDQUFDbkYsQ0FBRCxDQUFSLENBQVlxRixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQ3hDWixJQUFBQSxjQUFjLENBQUNVLFFBQVEsQ0FBQ25GLENBQUQsQ0FBVCxFQUFjLFFBQWQsQ0FBZDtBQUNILEdBRkQ7OztBQURKLEtBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21GLFFBQVEsQ0FBQzlFLE1BQTdCLEVBQXFDTCxDQUFDLEVBQXRDLEVBQTBDO0FBQUEsUUFBakNBLENBQWlDO0FBSXpDOztBQUNELElBQU1zRixRQUFRLEdBQUdOLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBakI7OzZCQUNTcEY7QUFDTHNGLEVBQUFBLFFBQVEsQ0FBQ3RGLEVBQUQsQ0FBUixDQUFZcUYsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUN4Q1osSUFBQUEsY0FBYyxDQUFDYSxRQUFRLENBQUN0RixFQUFELENBQVQsRUFBYyxlQUFkLENBQWQ7QUFDSCxHQUZEOzs7QUFESixLQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdzRixRQUFRLENBQUNqRixNQUE3QixFQUFxQ0wsRUFBQyxFQUF0QyxFQUEwQztBQUFBLFNBQWpDQSxFQUFpQztBQUl6QyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hleGFsLXRhc2svLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW98c3luY3wvLnN2ZyQiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9oZXhhbC10YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hleGFsLXRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaGV4YWwtdGFzay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oZXhhbC10YXNrLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvTGF0by50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L0xhdG8tQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC9NYXZlblByby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG4gIGhlaWdodDogNjNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaGVhZGVyIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaGVhZGVyIC5jb250ZW50IC5saW5rLCBoZWFkZXIgLmNvbnRlbnQgaDEge1xcbiAgZmxleC1iYXNpczogMjAlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHotaW5kZXg6IDEwMjtcXG4gIGhlaWdodDogNzRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTllYjtcXG59XFxuaGVhZGVyIC5jb250ZW50IC5saW5rIGEsIGhlYWRlciAuY29udGVudCAubGluayBhIGgxLCBoZWFkZXIgLmNvbnRlbnQgaDEgYSwgaGVhZGVyIC5jb250ZW50IGgxIGEgaDEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5oZWFkZXIgLmNvbnRlbnQgLmxpbmsgYS5hY3RpdmUsIGhlYWRlciAuY29udGVudCAubGluayBhLmFjdGl2ZSBoMSwgaGVhZGVyIC5jb250ZW50IGgxIGEuYWN0aXZlLCBoZWFkZXIgLmNvbnRlbnQgaDEgYS5hY3RpdmUgaDEge1xcbiAgY29sb3I6ICMyZWIzOTg7XFxufVxcbmhlYWRlciAuY29udGVudCAuYmVmb3JlIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbmhlYWRlciAuY29udGVudCAubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDI7XFxuICBoZWlnaHQ6IDc0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgLmNvbnRlbnQgLnBvaW50eS10aGluZ3kge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNTEuNXB4IDkwcHggMCA5MHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5wb3J0Zm9saW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnBvcnRmb2xpbyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAucG9ydGZvbGlvIC50b3AsIG1haW4gLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U0ZTllYjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU5ZWI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbm1haW4gLnBvcnRmb2xpbyAuc2xpZGUtc3dpdGNoZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJvdHRvbTogMTFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5tYWluIC5wb3J0Zm9saW8gLnNsaWRlLXN3aXRjaGVzIC5zd2l0Y2hlcyB7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZWI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbm1haW4gLnBvcnRmb2xpbyAuc2xpZGUtc3dpdGNoZXMgLnN3aXRjaGVzIC5zd2l0Y2gge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkMmM1O1xcbn1cXG5tYWluIC5wb3J0Zm9saW8gLnNsaWRlLXN3aXRjaGVzIC5zd2l0Y2hlcyAuYWN0aXZlLXN3aXRjaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI4Nzg0O1xcbn1cXG5tYWluIC5wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmViMzk4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnBob3RvLCBtYWluIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnBob3RvIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzIxOWQ4NDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjE5ZDg0O1xcbiAgbWF4LXdpZHRoOiA1ODBweDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAubmFtZSB7XFxuICBmb250LXNpemU6IDI4LjVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZDdmY2Y1O1xcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgLnByb2Zlc3Npb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMDgxNmQ7XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Q3ZmNmNTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxuICAtbW96LWh5cGhlbnM6IGF1dG87XFxuICAtbXMtaHlwaGVuczogYXV0bztcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcbm1haW4gLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgLm1lc3NlbmdlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAubWVzc2VuZ2VycyBidXR0b24ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0LjVweDtcXG4gIGJvcmRlcjogMDtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAubWVzc2VuZ2VycyBidXR0b24gc3ZnIHtcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IC5tZXNzZW5nZXJzIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYmQ0O1xcbn1cXG5tYWluIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IC5tZXNzZW5nZXJzIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjY2JiZTtcXG59XFxubWFpbiAucHJvZmlsZSAuY29udGVudCAudGV4dCAuaWNvbiB7XFxuICBmaWxsOiAjMmViMzk4O1xcbn1cXG5cXG4uZ2V0LWluLXRvdWNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTNweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5oZWFkZXItZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmIyYjJiO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLmhlYWRpbmcsIC5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLnN1YnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmdldC1pbi10b3VjaCAuaGVhZGVyLWZvb3RlciAuaGVhZGluZyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgd29yZC1zcGFjaW5nOiAxcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmhlYWRlci1mb290ZXIgLnN1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNDNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmIyYjJiO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0sIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIGlucHV0LCAuZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gdGV4dGFyZWEsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDU0NTtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5mb3JtcyBmb3JtIGlucHV0LCAuZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gdGV4dGFyZWEsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTdweCAxM3B4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGZvcm0gaW5wdXQsIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIGZvcm0gaW5wdXQge1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgZm9ybSB0ZXh0YXJlYSwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gZm9ybSB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4IDE3cHg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIC5idXR0b24sIC5nZXQtaW4tdG91Y2ggLmJvdCAuYnV0dG9uIC5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgYnV0dG9uLCAuZ2V0LWluLXRvdWNoIC5ib3QgLmJ1dHRvbiBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYjM5ODtcXG4gIGNvbG9yOiAjZDdmY2Y1O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmZvcm1zIGJ1dHRvbjpob3ZlciwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTlkODQ7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuZm9ybXMgYnV0dG9uOmFjdGl2ZSwgLmdldC1pbi10b3VjaCAuYm90IC5idXR0b24gYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA4MTZkO1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8ge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2JlYmViZTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxuICAtbW96LWh5cGhlbnM6IGF1dG87XFxuICAtbXMtaHlwaGVuczogYXV0bztcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyBzcGFuIC5ib2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2UwZTBlMDtcXG59XFxuLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIC5jb250YWN0cyB7XFxuICBtYXJnaW4tdG9wOiAzM3B4O1xcbn1cXG4uZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8gLmNvbnRhY3RzIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNiZWJlYmU7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyAuY29udGFjdHMgYSBzdmcge1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5nZXQtaW4tdG91Y2ggLmJvdCAuaW5mbyAuY29udGFjdHMgYSBzdmcgLml0ZW0ge1xcbiAgZmlsbDogIzJlYjM5ODtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0M3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNDU0NTQ1O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9vdGVyIHNwYW4ge1xcbiAgcGFkZGluZy1sZWZ0OiA3OXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6IDU3NnB4KSB7XFxuICBoZWFkZXIgLmNvbnRlbnQsIG1haW4gLnBvcnRmb2xpbywgLnByb2ZpbGUgLmNvbnRlbnQsIGZvb3RlciBzcGFuIHtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIC5jb250ZW50IC5sb2dvIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcbiAgaGVhZGVyIC5jb250ZW50IC5saW5rIC5pbmRlbnQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICAuaGVhZGluZywgLnN1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDI4Ny42MnB4O1xcbiAgfVxcblxcbiAgLmZvcm1zLCAuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcbiAgLmZvcm1zIGlucHV0LCAuZm9ybXMgdGV4dGFyZWEsIC5idXR0b24gaW5wdXQsIC5idXR0b24gdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIHdpZHRoOiAxMjAuODI1cHg7XFxuICB9XFxuXFxuICAuZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8ge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICB9XFxuXFxuICBtYWluIC5wb3J0Zm9saW8ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbiAgbWFpbiAucG9ydGZvbGlvIC50b3AsIG1haW4gLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gICAgaGVpZ2h0OiAzMS4yOHB4O1xcbiAgfVxcbiAgbWFpbiAucG9ydGZvbGlvIC50b3Age1xcbiAgICBib3R0b206IDZweDtcXG4gIH1cXG4gIG1haW4gLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gICAgdG9wOiA2cHg7XFxuICB9XFxuXFxuICAucHJvZmlsZSAucGhvdG8ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxuICAucHJvZmlsZSAucGhvdG8gaW1nIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gIH1cXG4gIC5wcm9maWxlIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgLnByb2ZpbGUgLnRleHQgLmRlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuICAucHJvZmlsZSAudGV4dCAucHJvZmVzc2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd29yZC1zcGFjaW5nOiAwLjAxcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXG4gIH1cXG5cXG4gIG1haW4gLnBvcnRmb2xpbyAuaW1nIHtcXG4gICAgbWFyZ2luOiAwIDRweDtcXG4gICAgd2lkdGg6IDU0LjY3NXB4O1xcbiAgfVxcblxcbiAgbWFpbiBkaXYgaW1nIHtcXG4gICAgaGVpZ2h0OiA2Mi41NzI1cHg7XFxuICB9XFxuXFxuICAucHJvZmlsZSAuY29udGVudCAucGhvdG8ge1xcbiAgICBwYWRkaW5nOiAwIDZweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA1NzZweCkge1xcbiAgaGVhZGVyIC5jb250ZW50LCBtYWluIC5wb3J0Zm9saW8sIC5wcm9maWxlIC5jb250ZW50LCBmb290ZXIgc3BhbiB7XFxuICAgIHdpZHRoOiA1NDBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAuY29udGVudCAubG9nbyB7XFxuICAgIHdpZHRoOiAxMzlweDtcXG4gIH1cXG4gIGhlYWRlciAuY29udGVudCAubGluayAuaW5kZW50IHtcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIH1cXG4gIGhlYWRlciAuY29udGVudCAuYWZ0ZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRlbnQgLmJlZm9yZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgfVxcblxcbiAgLmdldC1pbi10b3VjaCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICB9XFxuICAuZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8ge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB9XFxuXFxuICAuaGVhZGluZywgLnN1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDQzMy44MXB4O1xcbiAgfVxcblxcbiAgLmZvcm1zLCAuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI5My42MjVweDtcXG4gIH1cXG5cXG4gIC5pbmZvIHtcXG4gICAgd2lkdGg6IDEyMC44MjVweDtcXG4gIH1cXG5cXG4gIG1haW4gLnBvcnRmb2xpbyB7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICB9XFxuICBtYWluIC5wb3J0Zm9saW8gLnRvcCwgbWFpbiAucG9ydGZvbGlvIC5ib3R0b20ge1xcbiAgICBoZWlnaHQ6IDUyLjE0cHg7XFxuICB9XFxuICBtYWluIC5wb3J0Zm9saW8gLnRvcCB7XFxuICAgIGJvdHRvbTogNnB4O1xcbiAgfVxcbiAgbWFpbiAucG9ydGZvbGlvIC5ib3R0b20ge1xcbiAgICB0b3A6IDZweDtcXG4gIH1cXG5cXG4gIG1haW4gLnBvcnRmb2xpbyAuaW1nIHtcXG4gICAgbWFyZ2luOiAwIDRweDtcXG4gICAgd2lkdGg6IDkxLjEyNXB4O1xcbiAgfVxcblxcbiAgLnByb2ZpbGUgLnBob3RvIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcbiAgLnByb2ZpbGUgLnRleHQge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzOXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgfVxcbiAgLnByb2ZpbGUgLnRleHQgLnByb2Zlc3Npb24ge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdvcmQtc3BhY2luZzogMC4wMXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XFxuICB9XFxuXFxuICBtYWluIGRpdiBpbWcge1xcbiAgICBoZWlnaHQ6IDEwNC4yODc1cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogNzY4cHgpIHtcXG4gIGhlYWRlciAuY29udGVudCwgbWFpbiAucG9ydGZvbGlvLCAucHJvZmlsZSAuY29udGVudCwgZm9vdGVyIHNwYW4ge1xcbiAgICB3aWR0aDogNzQwcHg7XFxuICB9XFxuXFxuICAuaGVhZGluZywgLnN1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDYzNHB4O1xcbiAgfVxcblxcbiAgLmZvcm1zLCAuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQzNXB4O1xcbiAgfVxcblxcbiAgLmluZm8ge1xcbiAgICB3aWR0aDogMTc5cHg7XFxuICB9XFxuXFxuICAuZ2V0LWluLXRvdWNoIC5ib3QgLmluZm8ge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg4O1xcbiAgfVxcblxcbiAgbWFpbiAucG9ydGZvbGlvIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gIH1cXG4gIG1haW4gLnBvcnRmb2xpbyAudG9wLCBtYWluIC5wb3J0Zm9saW8gLmJvdHRvbSB7XFxuICAgIGhlaWdodDogNzcuMjVweDtcXG4gIH1cXG4gIG1haW4gLnBvcnRmb2xpbyAudG9wIHtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgfVxcbiAgbWFpbiAucG9ydGZvbGlvIC5ib3R0b20ge1xcbiAgICB0b3A6IDI1cHg7XFxuICB9XFxuXFxuICAucHJvZmlsZSAucGhvdG8ge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICB9XFxuXFxuICBtYWluIC5wb3J0Zm9saW8gLmltZyB7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gIH1cXG5cXG4gIG1haW4gZGl2IGltZyB7XFxuICAgIGhlaWdodDogMTU0LjVweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA5OTJweCkge1xcbiAgaGVhZGVyIC5jb250ZW50LCBtYWluIC5wb3J0Zm9saW8sIC5wcm9maWxlIC5jb250ZW50LCBmb290ZXIgc3BhbiB7XFxuICAgIHdpZHRoOiA5MjBweDtcXG4gIH1cXG5cXG4gIC5nZXQtaW4tdG91Y2gge1xcbiAgICBoZWlnaHQ6IDUzOHB4O1xcbiAgfVxcbiAgLmdldC1pbi10b3VjaCAuYm90IC5pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcbiAgLmhlYWRpbmcsIC5zdWJ0aXRsZSB7XFxuICAgIHdpZHRoOiA3ODBweDtcXG4gIH1cXG5cXG4gIC5mb3JtcywgLmJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1ODBweDtcXG4gIH1cXG5cXG4gIC5pbmZvIHtcXG4gICAgd2lkdGg6IDE3OXB4O1xcbiAgfVxcblxcbiAgbWFpbiAucG9ydGZvbGlvIHtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gIH1cXG4gIG1haW4gLnBvcnRmb2xpbyAudG9wLCBtYWluIC5wb3J0Zm9saW8gLmJvdHRvbSB7XFxuICAgIGhlaWdodDogMTA0cHg7XFxuICB9XFxuICBtYWluIC5wb3J0Zm9saW8gLnRvcCB7XFxuICAgIGJvdHRvbTogMTNweDtcXG4gIH1cXG4gIG1haW4gLnBvcnRmb2xpbyAuYm90dG9tIHtcXG4gICAgdG9wOiAxM3B4O1xcbiAgfVxcblxcbiAgbWFpbiAucG9ydGZvbGlvIC5pbWcge1xcbiAgICBtYXJnaW46IDAgOHB4O1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICB9XFxuXFxuICBtYWluIGRpdiBpbWcge1xcbiAgICBoZWlnaHQ6IDIwNnB4O1xcbiAgfVxcblxcbiAgLnByb2ZpbGUgLmNvbnRlbnQgLnBob3RvIHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xcbiAgaGVhZGVyIC5jb250ZW50LCBtYWluIC5wb3J0Zm9saW8sIC5wcm9maWxlIC5jb250ZW50LCBmb290ZXIgc3BhbiB7XFxuICAgIHdpZHRoOiAxMDIwcHg7XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIHdpZHRoOiAxNzlweDtcXG4gIH1cXG5cXG4gIG1haW4gLnBvcnRmb2xpbyB7XFxuICAgIGhlaWdodDogNzIxcHg7XFxuICB9XFxuICBtYWluIC5wb3J0Zm9saW8gLnRvcCwgbWFpbiAucG9ydGZvbGlvIC5ib3R0b20ge1xcbiAgICBoZWlnaHQ6IDEwNHB4O1xcbiAgfVxcblxcbiAgbWFpbiAucG9ydGZvbGlvIC5pbWcge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5wcm9maWxlIC5jb250ZW50IC5waG90byB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG4gIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IC5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWtCQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW9CQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQWxCRjtBQXFCQTtFQUNFLDhCQUFBO0VBQ0EsNENBQUE7QUFuQkY7QUFzQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsV0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJBN0NnQjtFQThDaEIsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXBCRjtBQXNCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQXBCSjtBQXNCSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXBCTjtBQXNCTTtFQUNFLHFCQUFBO0VBQ0EsWUEvRFU7RUFnRVYsZUFBQTtBQXBCUjtBQXVCTTtFQUNFLGNBckVZO0FBZ0RwQjtBQXlCSTtFQUNFLHlCQUFBO0FBdkJOO0FBMEJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VB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bElGOztFQXFJQTtJQUNFLGVBQUE7RUFsSUY7QUFDRjtBQXNJQTtFQUNFO0lBQ0UsWUFBQTtFQXBJRjs7RUF1SUE7SUFDRSxhQUFBO0VBcElGO0VBdUlJO0lBQ0UsZUFBQTtFQXJJTjs7RUEwSUE7SUFDRSxZQUFBO0VBdklGOztFQTBJQTtJQUNFLFlBQUE7RUF2SUY7O0VBMElBO0lBQ0UsWUFBQTtFQXZJRjs7RUEwSUE7SUFDRSxhQUFBO0VBdklGO0VBeUlFO0lBQ0UsYUFBQTtFQXZJSjtFQTBJRTtJQUNFLFlBQUE7RUF4SUo7RUEySUU7SUFDRSxTQUFBO0VBeklKOztFQTZJQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBMUlGOztFQTZJQTtJQUNFLGFBQUE7RUExSUY7O0VBK0lJO0lBQ0UsZUFBQTtFQTVJTjtBQUNGO0FBaUpBO0VBQ0U7SUFDRSxhQUFBO0VBL0lGOztFQWtKQTtJQUNFLFlBQUE7RUEvSUY7O0VBa0pBO0lBQ0UsYUFBQTtFQS9JRjtFQWlKRTtJQUNFLGFBQUE7RUEvSUo7O0VBbUpBO0lBQ0UsY0FBQTtFQWhKRjs7RUFxSkk7SUFDRSxlQUFBO0VBbEpOO0VBc0pNO0lBQ0UsbUJBQUE7RUFwSlI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFja2dyb3VuZEJsYWNrOiByZ2IoNTAsIDUwLCA1MCk7XFxyXFxuJGJhY2tncm91bmRBY3J5bGljOiByZ2IoNDYsIDE3OSwgMTUyKTtcXHJcXG4kYmFja2dyb3VuZFdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuJHRleHRQcm9maWxlV2hpdGU6IHJnYigyMTUsIDI1MiwgMjQ1KTtcXHJcXG4kdGV4dFByb2ZpbGVHcmVlbjogcmdiKDMyLCAxMjksIDEwOSk7XFxyXFxuJHRleHRDb25uZWN0aW9uV2hpdGU6IHJnYigyMjQsIDIyNCwgMjI0KTtcXHJcXG4kdGV4dENvbm5lY3Rpb25HcmF5OiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxyXFxuJGJhY2tncm91bmRJbnB1dDogcmdiKDY5LCA2OSwgNjkpO1xcclxcbiRiYWNrZ3JvdW5kRm9vdGVyOiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuJGJvcmRlcldoaXRlOiByZ2IoMjI4LCAyMzMsIDIzNSk7XFxyXFxuJHN3aXRjaDogcmdiKDIyMSwgMjEwLCAxOTcpO1xcclxcbiRzd2l0Y2hBY3RpdmU6IHJnYigxMzksIDEzNSwgMTMyKTtcXHJcXG4kYm9yZGVyR3JlZW46IHJnYigzMywgMTU3LCAxMzIpO1xcclxcbiRib3JkZXJCbGFjazogcmdiKDQzLCA0MywgNDMpO1xcclxcbiRsaW5rOiByZ2IoMTY1LCAyMTksIDIxMik7XFxyXFxuJGxpbmtBY3RpdmU6IHJnYigxMDgsIDIwMywgMTkwKTtcXHJcXG4kY29udGFjdDogcmdiKDQ2LCAxNzksIDE1Mik7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnQvTGF0by50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250L0xhdG8tQmxhY2sudHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuUHJvUmVndWxhclxcXCI7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udC9NYXZlblByby1SZWd1bGFyLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRCbGFjaztcXHJcXG4gIGhlaWdodDogNjNweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC5saW5rLCBoMSB7XFxyXFxuICAgICAgZmxleC1iYXNpczogMjAlO1xcclxcbiAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIHotaW5kZXg6IDEwMjtcXHJcXG4gICAgICBoZWlnaHQ6IDc0cHg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcldoaXRlO1xcclxcblxcclxcbiAgICAgIGEsIGEgaDEge1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kV2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGEuYWN0aXZlLCBhLmFjdGl2ZSBoMSB7XFxyXFxuICAgICAgICBjb2xvcjogJGJhY2tncm91bmRBY3J5bGljO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYmVmb3JlIHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHotaW5kZXg6IDEwMjtcXHJcXG4gICAgICBoZWlnaHQ6IDc0cHg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucG9pbnR5LXRoaW5neSB7XFxyXFxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICBib3JkZXItd2lkdGg6IDUxLjVweCA5MHB4IDAgOTBweDtcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kQmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogMzhweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgLnBvcnRmb2xpbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b3AsIC5ib3R0b20ge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXJXaGl0ZTtcXHJcXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyV2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZS1zd2l0Y2hlcyB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGJvdHRvbTogMTFweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAuc3dpdGNoZXMge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyV2hpdGU7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgICAgICAuc3dpdGNoIHtcXHJcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dpdGNoO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFjdGl2ZS1zd2l0Y2gge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dpdGNoQWN0aXZlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2ZpbGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZEFjcnlsaWM7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAucGhvdG8sIC50ZXh0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5waG90byB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXJHcmVlbjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnRleHQge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlckdyZWVuO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcXHJcXG5cXHJcXG4gICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAyOC41cHg7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0UHJvZmlsZVdoaXRlO1xcclxcbiAgICAgICAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9mZXNzaW9uIHtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICBjb2xvcjogJHRleHRQcm9maWxlR3JlZW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICBjb2xvcjogJHRleHRQcm9maWxlV2hpdGU7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgICAgICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAgICAgLW1vei1oeXBoZW5zOiBhdXRvO1xcclxcbiAgICAgICAgICAtbXMtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAgICAgaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5tZXNzZW5nZXJzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyNC41cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcblxcclxcbiAgICAgICAgICAgIHN2ZyB7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluaztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmtBY3RpdmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaWNvbiB7XFxyXFxuICAgICAgICAgIGZpbGw6ICRiYWNrZ3JvdW5kQWNyeWxpYztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdldC1pbi10b3VjaCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEzcHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRCbGFjaztcXHJcXG5cXHJcXG4gIC5oZWFkZXItZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXJCbGFjaztcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuXFxyXFxuICAgIC5oZWFkaW5nLCAuc3VidGl0bGUge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW5Qcm9SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGluZyB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dENvbm5lY3Rpb25XaGl0ZTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgICB3b3JkLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3VidGl0bGUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICBjb2xvcjogJHRleHRDb25uZWN0aW9uR3JheTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmJvdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXJCbGFjaztcXHJcXG5cXHJcXG4gICAgLmZvcm1zLCAuYnV0dG9uIHtcXHJcXG4gICAgICBmb3JtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGV4dENvbm5lY3Rpb25HcmF5O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZElucHV0O1xcclxcbiAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxN3B4IDEzcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE3cHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmJ1dHRvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzdweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQWNyeWxpYztcXHJcXG4gICAgICAgIGNvbG9yOiAkdGV4dFByb2ZpbGVXaGl0ZTtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyR3JlZW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0UHJvZmlsZUdyZWVuO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mbyB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBjb2xvcjogJHRleHRDb25uZWN0aW9uR3JheTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcXHJcXG4gICAgICAtbW96LWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxyXFxuICAgICAgaHlwaGVuczogYXV0bztcXHJcXG5cXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIC5ib2xkZXIge1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0Q29ubmVjdGlvbldoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuY29udGFjdHMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMzNweDtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkdGV4dENvbm5lY3Rpb25HcmF5O1xcclxcblxcclxcbiAgICAgICAgICBzdmcge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLml0ZW0ge1xcclxcbiAgICAgICAgICAgICAgZmlsbDogJGNvbnRhY3Q7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kRm9vdGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlblByb1JlZ3VsYXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICRiYWNrZ3JvdW5kSW5wdXQ7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNzlweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA1NzZweCkge1xcclxcbiAgaGVhZGVyIC5jb250ZW50LCBtYWluIC5wb3J0Zm9saW8sIC5wcm9maWxlIC5jb250ZW50LCBmb290ZXIgc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAubG9nbyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5saW5rIHtcXHJcXG4gICAgICAgIC5pbmRlbnQge1xcclxcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZywgLnN1YnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDI4Ny42MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1zLCAuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDE2MHB4O1xcclxcblxcclxcbiAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmluZm8ge1xcclxcbiAgICB3aWR0aDogMTIwLjgyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdldC1pbi10b3VjaCB7XFxyXFxuICAgIC5ib3Qge1xcclxcbiAgICAgIC5pbmZvIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5wb3J0Zm9saW8ge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcblxcclxcbiAgICAudG9wLCAuYm90dG9tIHtcXHJcXG4gICAgICBoZWlnaHQ6IDMxLjI4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvcCB7XFxyXFxuICAgICAgYm90dG9tOiA2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvdHRvbSB7XFxyXFxuICAgICAgdG9wOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9maWxlIHtcXHJcXG4gICAgLnBob3RvIHtcXHJcXG4gICAgICB3aWR0aDogMTAwcHg7XFxyXFxuXFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5wcm9mZXNzaW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIHdvcmQtc3BhY2luZzogMC4wMXB4O1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLnBvcnRmb2xpbyAuaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIDRweDtcXHJcXG4gICAgd2lkdGg6IDU0LjY3NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiBkaXYgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA2Mi41NzI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvZmlsZSB7XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAucGhvdG8ge1xcclxcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogNTc2cHgpIHtcXHJcXG4gIGhlYWRlciAuY29udGVudCwgbWFpbiAucG9ydGZvbGlvLCAucHJvZmlsZSAuY29udGVudCwgZm9vdGVyIHNwYW4ge1xcclxcbiAgICB3aWR0aDogNTQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgLmxvZ28ge1xcclxcbiAgICAgICAgd2lkdGg6IDEzOXB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAubGluayB7XFxyXFxuICAgICAgICAuaW5kZW50IHtcXHJcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmFmdGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmJlZm9yZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nZXQtaW4tdG91Y2gge1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcblxcclxcbiAgICAuYm90IHtcXHJcXG4gICAgICAuaW5mbyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmcsIC5zdWJ0aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA0MzMuODFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtcywgLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyOTMuNjI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5mbyB7XFxyXFxuICAgIHdpZHRoOiAxMjAuODI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5wb3J0Zm9saW8ge1xcclxcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcclxcblxcclxcbiAgICAudG9wLCAuYm90dG9tIHtcXHJcXG4gICAgICBoZWlnaHQ6IDUyLjE0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvcCB7XFxyXFxuICAgICAgYm90dG9tOiA2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvdHRvbSB7XFxyXFxuICAgICAgdG9wOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLnBvcnRmb2xpbyAuaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIDRweDtcXHJcXG4gICAgd2lkdGg6IDkxLjEyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2ZpbGUge1xcclxcbiAgICAucGhvdG8ge1xcclxcbiAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDM5cHg7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG5cXHJcXG4gICAgICAucHJvZmVzc2lvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICB3b3JkLXNwYWNpbmc6IDAuMDFweDtcXHJcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIGRpdiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwNC4yODc1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciAuY29udGVudCwgbWFpbiAucG9ydGZvbGlvLCAucHJvZmlsZSAuY29udGVudCwgZm9vdGVyIHNwYW4ge1xcclxcbiAgICB3aWR0aDogNzQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZywgLnN1YnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDYzNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1zLCAuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDQzNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmluZm8ge1xcclxcbiAgICB3aWR0aDogMTc5cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2V0LWluLXRvdWNoIHtcXHJcXG4gICAgLmJvdCB7XFxyXFxuICAgICAgLmluZm8ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICBtYWluIC5wb3J0Zm9saW8ge1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcblxcclxcbiAgICAudG9wLCAuYm90dG9tIHtcXHJcXG4gICAgICBoZWlnaHQ6IDc3LjI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvcCB7XFxyXFxuICAgICAgYm90dG9tOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ib3R0b20ge1xcclxcbiAgICAgIHRvcDogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2ZpbGUge1xcclxcbiAgICAucGhvdG8ge1xcclxcbiAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAucG9ydGZvbGlvIC5pbWcge1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICB3aWR0aDogMTM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIGRpdiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDE1NC41cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogOTkycHgpIHtcXHJcXG4gIGhlYWRlciAuY29udGVudCwgbWFpbiAucG9ydGZvbGlvLCAucHJvZmlsZSAuY29udGVudCwgZm9vdGVyIHNwYW4ge1xcclxcbiAgICB3aWR0aDogOTIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2V0LWluLXRvdWNoIHtcXHJcXG4gICAgaGVpZ2h0OiA1MzhweDtcXHJcXG5cXHJcXG4gICAgLmJvdCB7XFxyXFxuICAgICAgLmluZm8ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmcsIC5zdWJ0aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA3ODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtcywgLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA1ODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvIHtcXHJcXG4gICAgd2lkdGg6IDE3OXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiAucG9ydGZvbGlvIHtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG5cXHJcXG4gICAgLnRvcCwgLmJvdHRvbSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9wIHtcXHJcXG4gICAgICBib3R0b206IDEzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvdHRvbSB7XFxyXFxuICAgICAgdG9wOiAxM3B4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIC5wb3J0Zm9saW8gLmltZyB7XFxyXFxuICAgIG1hcmdpbjogMCA4cHg7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gZGl2IGltZyB7XFxyXFxuICAgIGhlaWdodDogMjA2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvZmlsZSB7XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAucGhvdG8ge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xcclxcbiAgaGVhZGVyIC5jb250ZW50LCBtYWluIC5wb3J0Zm9saW8sIC5wcm9maWxlIC5jb250ZW50LCBmb290ZXIgc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAxMDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5mbyB7XFxyXFxuICAgIHdpZHRoOiAxNzlweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLnBvcnRmb2xpbyB7XFxyXFxuICAgIGhlaWdodDogNzIxcHg7XFxyXFxuXFxyXFxuICAgIC50b3AsIC5ib3R0b20ge1xcclxcbiAgICAgIGhlaWdodDogMTA0cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4gLnBvcnRmb2xpbyAuaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvZmlsZSB7XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAucGhvdG8ge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAudGV4dCB7XFxyXFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL1Bvc2l0aW9uMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjEuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEwLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTAuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjExLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTEuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTIuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjEzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMTMuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb24yLnN2Z1wiLFxuXHRcIi4vUG9zaXRpb24zLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uMy5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjQuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb241LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb242LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uNi5zdmdcIixcblx0XCIuL1Bvc2l0aW9uNy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9Qb3NpdGlvbjcuc3ZnXCIsXG5cdFwiLi9Qb3NpdGlvbjguc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8vUG9zaXRpb244LnN2Z1wiLFxuXHRcIi4vUG9zaXRpb245LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL1Bvc2l0aW9uOS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltZy9wb3J0Zm9saW8gc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vYXNzZXRzL2ltZy9Mb2dvLnN2Z1wiO1xyXG5pbXBvcnQgUGhvdG8gZnJvbSBcIi4vYXNzZXRzL2ltZy9QaG90by5zdmdcIjtcclxuXHJcbmxldCBwb3J0Zm9saW9faW1nID0gW107XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwod2VicGFja0NvbnRleHQpIHtcclxuICAgIHdlYnBhY2tDb250ZXh0LmtleXMoKS5mb3JFYWNoKChpdGVtLCBpLCBhcnIpID0+IHBvcnRmb2xpb19pbWdbaV0gPSB3ZWJwYWNrQ29udGV4dChpdGVtKSk7XHJcbn1cclxuXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8vJywgdHJ1ZSwgL1xcLnN2ZyQvKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2dnbGVDbGFzcyhlbGVtZW50LCBuZXdDbGFzc05hbWUpIHtcclxuICAgIGRlbGV0ZVRvZ2dsZUNsYXNzKG5ld0NsYXNzTmFtZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3NOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IG5hdl9saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZfbGluay5sZW5ndGg7IGkrKykge1xyXG4gICAgbmF2X2xpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUb2dnbGVDbGFzcyhuYXZfbGlua1tpXSwgXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBzd2l0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dpdGNoXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHN3aXRjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzd2l0Y2hlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRvZ2dsZUNsYXNzKHN3aXRjaGVzW2ldLCBcImFjdGl2ZS1zd2l0Y2hcIik7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX3MiLCJfZSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJpc0FycmF5IiwiX2l0ZW0iLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJMb2dvIiwiUGhvdG8iLCJwb3J0Zm9saW9faW1nIiwiaW1wb3J0QWxsIiwid2VicGFja0NvbnRleHQiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYWRkVG9nZ2xlQ2xhc3MiLCJlbGVtZW50IiwibmV3Q2xhc3NOYW1lIiwiZGVsZXRlVG9nZ2xlQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJuYXZfbGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic3dpdGNoZXMiXSwic291cmNlUm9vdCI6IiJ9