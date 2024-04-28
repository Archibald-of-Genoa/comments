/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swp);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 62.5%;
  box-sizing: border-box;
}

.favorite,
select,
ul {
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
}

body {
  margin: 0 auto;
  max-width: 1440px;
}

.header {
  margin: 0 auto;
  width: 1440px;
  height: 101px;
  background-color: #d9d9d9;
  margin-bottom: 4rem;
}

.hero {
  display: flex;
  width: 1311px;
}

aside {
  width: 203px;
  height: 1302px;
  margin: 0 8.6rem 0 0;
  background-color: #d9d9d9;
}

.wrapper {
  width: 1022px;
  height: 100vh;
}

.contentMock {
  width: 1022px;
  height: 542px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto) 1fr;
  gap: 30px 48px;
}

.contentMockElement {
  height: 61px;
  background-color: #d9d9d9;
}
.contentMockElement.span {
  margin-top: 10px;
  width: 100%;
  height: auto;
  grid-column: span 2;
  background-color: #d9d9d9;
}

.comment-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  margin-bottom: 32px;
  margin-top: 4rem;
}
.comment-filters .filter-links {
  width: 60.3rem;
  margin: 0;
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 50px;
  padding: 0;
}
.comment-filters ul {
  list-style: none;
}
.comment-filters .selectList {
  display: flex;
  align-items: center;
}
.comment-filters select {
  width: 100%;
  border: none;
  background-color: #fff;
  text-decoration: underline;
  opacity: 0.4;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 20px;
}
.comment-filters select option {
  text-decoration: underline;
}
.comment-filters select:focus {
  outline: none;
}
.comment-filters .select-rotated {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.comment-filters .favoriteList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.95rem;
  width: 11.7rem;
}
.comment-filters .favoriteList .favorite {
  border: none;
  background-color: #fff;
  text-decoration: underline;
  opacity: 0.4;
  text-align: left;
}
.comment-filters .comments-link {
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  font-size: 20px;
}
.comment-filters a {
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
}

.commentsBlock {
  display: flex;
  flex-direction: column;
}

.userAvatar {
  width: 61px;
  height: 61px;
  border-radius: 50%;
  display: inline-block;
}

.newCommentBlock {
  width: 100%;
  min-height: 9.8rem;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 4rem;
}
.newCommentBlock form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93.1rem;
  gap: 30px;
}
.newCommentBlock form label {
  display: none;
}
.newCommentBlock form #comment {
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  field-sizing: content;
  overflow-y: hidden;
  padding: 20px;
  padding-left: 30px;
  text-align: start;
  outline: none;
  width: 68.8rem;
  min-height: 6.1rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  resize: none;
}
.newCommentBlock form #comment::placeholder {
  color: #000000;
  opacity: 0.4;
}

.userNameAndFormWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.userNameWrapper {
  width: 68.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.userName {
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 500;
  color: #122ac0;
}

.warning {
  font-family: Inter;
  font-size: 1.4rem;
  font-style: italic;
  color: #000;
  opacity: 0.4;
  display: none;
}

.btn {
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  width: 213px;
  height: 61px;
  border-radius: 5px;
  border: none;
  background-color: #abd873;
  cursor: pointer;
}

.btn:disabled {
  background-color: #a1a1a1;
  opacity: 0.4;
  color: #000;
  cursor: default;
}

.publishedComment {
  width: 1007px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
}
.publishedComment .publishedCommentText {
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  field-sizing: content;
  overflow-y: hidden;
  padding: 20px;
  padding-left: 0;
  text-align: justify;
  outline: none;
  border: none;
  resize: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swp\");\n\n$font-primary: Inter;\n$font-size-base: 1.6rem;\n$font-size-lg: 1.8rem;\n$font-size-md: 1.6rem;\n$font-size-sm: 1.4rem;\n\n$font-weight-reg: 400;\n$font-weight-med: 500;\n\n$primary-color: #d9d9d9;\n\n@mixin font-base {\n  font-family: $font-primary;\n  font-size: $font-size-base;\n  font-weight: $font-weight-reg;\n  color: #000;\n}\n\n@mixin font-lg {\n  font-family: $font-primary;\n  font-size: $font-size-lg;\n  font-weight: $font-weight-reg;\n  color: #000;\n}\n\n@mixin font-user {\n  font-family: $font-primary;\n  font-size: $font-size-lg;\n  font-weight: $font-weight-med;\n  color: #122ac0;\n}\n@mixin font-italic {\n  font-family: $font-primary;\n  font-size: $font-size-sm;\n  font-style: italic;\n  color: #000;\n  opacity: 0.4;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n.favorite,\nselect,\nul {\n  @include font-base;\n}\n\nbody {\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.header {\n  margin: 0 auto;\n  width: 1440px;\n  height: 101px;\n  background-color: $primary-color;\n  margin-bottom: 4rem;\n}\n\n.hero {\n  display: flex;\n  width: 1311px;\n}\n\naside {\n  width: 203px;\n  height: 1302px;\n  margin: 0 8.6rem 0 0;\n  background-color: $primary-color;\n}\n\n.wrapper {\n  width: 1022px;\n  height: 100vh;\n}\n\n.contentMock {\n  width: 1022px;\n  height: 542px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, auto) 1fr;\n  gap: 30px 48px;\n}\n\n.contentMockElement {\n  height: 61px;\n  background-color: $primary-color;\n\n  &.span {\n    margin-top: 10px;\n    width: 100%;\n    height: auto;\n    grid-column: span 2;\n    background-color: $primary-color;\n  }\n}\n\n.comment-filters {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 5.5rem;\n  margin-bottom: 32px;\n  margin-top: 4rem;\n\n  .filter-links {\n    width: 60.3rem;\n    margin: 0;\n    display: flex;\n    justify-content: start;\n    align-items: end;\n    gap: 50px;\n    padding: 0;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  .selectList {\n    display: flex;\n    align-items: center;\n  }\n\n  select {\n    width: 100%;\n    border: none;\n    background-color: #fff;\n    text-decoration: underline;\n    opacity: 0.4;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n\n    padding-right: 20px;\n\n    option {\n      text-decoration: underline;\n    }\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  .select-rotated {\n    transform: rotate(180deg);\n    -webkit-transform: rotate(180deg);\n  }\n\n  .favoriteList {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.95rem;\n    width: 11.7rem;\n\n    .favorite {\n      border: none;\n      background-color: #fff;\n      text-decoration: underline;\n      opacity: 0.4;\n      text-align: left;\n    }\n  }\n\n  .comments-link {\n    @include font-lg;\n    font-size: 20px;\n  }\n\n  a {\n    @include font-base;\n  }\n}\n\n.commentsBlock {\n  display: flex;\n  flex-direction: column;\n}\n\n.userAvatar {\n  width: 61px;\n  height: 61px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.newCommentBlock {\n  width: 100%;\n  min-height: 9.8rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 30px;\n  margin-bottom: 4rem;\n\n  form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 93.1rem;\n    gap: 30px;\n\n    label {\n      display: none;\n    }\n\n    #comment {\n      @include font-lg;\n      field-sizing: content;\n      overflow-y: hidden;\n      padding: 20px;\n      padding-left: 30px;\n      text-align: start;\n      outline: none;\n      width: 68.8rem;\n      min-height: 6.1rem;\n      border-radius: 5px;\n      border: none;\n      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n      resize: none;\n    }\n\n    #comment::placeholder {\n      color: #000000;\n      opacity: 0.4;\n    }\n  }\n}\n\n.userNameAndFormWrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: start;\n}\n\n.userNameWrapper {\n  width: 68.8rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.userName {\n  @include font-user;\n}\n\n.warning {\n  @include font-italic;\n  display: none;\n}\n\n.btn {\n  @include font-lg;\n  width: 213px;\n  height: 61px;\n  border-radius: 5px;\n  border: none;\n  background-color: #abd873;\n  cursor: pointer;\n}\n\n.btn:disabled {\n  background-color: #a1a1a1;\n  opacity: 0.4;\n  color: #000;\n  cursor: default;\n}\n\n.publishedComment {\n  width: 1007px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 30px;\n\n  .publishedCommentText {\n    @include font-lg;\n    field-sizing: content;\n    overflow-y: hidden;\n    padding: 20px;\n    padding-left: 0;\n    text-align: justify;\n    outline: none;\n    border: none;\n    resize: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin-block-start: 0;
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,gCAAgC;AAChC;EACE,2BAA2B;EAC3B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA,sEAAsE;AACtE;;EAEE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA,kEAAkE;AAClE;;EAEE,gBAAgB;AAClB;;AAEA,sCAAsC;AACtC;;EAEE,kBAAkB;AACpB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;EAEE,aAAa;AACf;;AAEA,8DAA8D;AAC9D;EACE,gBAAgB;AAClB;;AAEA,uEAAuE;AACvE;EACE,wBAAwB;AAC1B","sourcesContent":["/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Arrow.svg":
/*!******************************!*\
  !*** ./src/assets/Arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50848063708bcbff2c82.svg";

/***/ }),

/***/ "./src/assets/heart.svg":
/*!******************************!*\
  !*** ./src/assets/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ad6ffe7917e8cecd4cd.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _assets_Arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/Arrow.svg */ "./src/assets/Arrow.svg");
/* harmony import */ var _assets_heart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/heart.svg */ "./src/assets/heart.svg");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




document.addEventListener("DOMContentLoaded", function () {
    var contentMock = document.querySelector(".contentMock");
    var contentMockCount = 9;
    var commentsBlock = (document.querySelector(".commentsBlock"));
    var arrow = document.getElementById("arrow");
    var heart = document.getElementById("heart");
    var textarea = (document.getElementById("comment"));
    var warning = document.querySelector(".warning");
    var sendBtn = document.querySelector(".send-btn");
    var comment = (document.getElementById("comment"));
    var commentForm = (document.getElementById("commentForm"));
    var select = document.getElementById("comment-sort");
    var publishedComment = (document.querySelector(".publishedComment"));
    if (arrow) {
        arrow.src = _assets_Arrow_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
    if (heart) {
        heart.src = _assets_heart_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var newPublishedComment = document.createElement("div");
        newPublishedComment.innerHTML = "\n    <div class=\"publishedComment\">\n    <img class=\"userAvatar\" alt=\"\u0410\u0432\u0430\u0442\u0430\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\" />\n    <div class=\"userNameAndFormWrapper\">\n    <div class=\"userNameAndFormWrapper\">\n    <div class=\"userNameWrapper\">\n    <span class=\"userName\"></span>\n    \n    <div class=\"warning\">\u041C\u0430\u043A\u0441. 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432</div>\n    </div>\n    <div class=\"publishedCommentText\"></div>\n    </div>\n    </div>\n    </div>\n    ";
        commentsBlock.appendChild(newPublishedComment);
        var publishedCommentText = (document.querySelector(".publishedCommentText"));
        var commentText = comment.value;
        if (commentText.trim() === "")
            return;
        publishedCommentText.textContent = commentText;
        comment.value = "";
    });
    textarea.addEventListener("input", function () {
        var messageLength = textarea.value.length;
        if (messageLength >= 1000) {
            sendBtn.disabled = true;
            warning.style.display = "block";
        }
        else {
            warning.style.display = "none";
            sendBtn.disabled = false;
        }
    });
    var toggleArrowRotation = function () { return arrow.classList.toggle("select-rotated"); };
    select.addEventListener("mousedown", toggleArrowRotation);
    select.addEventListener("mouseup", toggleArrowRotation);
    for (var i = 0; i < contentMockCount; i++) {
        var subcontent = document.createElement("div");
        subcontent.classList.add("contentMockElement");
        if (i === contentMockCount - 1) {
            subcontent.classList.add("span");
        }
        contentMock.appendChild(subcontent);
    }
});
function randomUserData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, userAvatarImage_1, userAvatar, userLogin_1, userName, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://randomuser.me/api/")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    userAvatarImage_1 = data.results[0].picture.large;
                    userAvatar = document.querySelectorAll(".userAvatar");
                    userAvatar.forEach(function (avatar) {
                        if (avatar) {
                            avatar.src = userAvatarImage_1;
                        }
                    });
                    userLogin_1 = data.results[0].login.username;
                    userName = document.querySelectorAll(".userName");
                    userName.forEach(function (uName) {
                        if (uName) {
                            uName.textContent = userLogin_1;
                        }
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Ошибка при получении данных", error_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
randomUserData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YWMxMzU5OGM5YWI2ODVlOGRhMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxpQkFBaUI7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlGQUF5RixXQUFXLFdBQVcsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFVO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0IsOENBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRDQUE0QztBQUM1QztBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZW50cy8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jb21tZW50cy8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL2NvbW1lbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZW50cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvbW1lbnRzLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vY29tbWVudHMvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL2NvbW1lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvbW1lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb21tZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb21tZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb21tZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvbW1lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29tbWVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29tbWVudHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29tbWVudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbW1lbnRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29tbWVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb21tZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbW1lbnRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvbW1lbnRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb21tZW50cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3cCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mYXZvcml0ZSxcbnNlbGVjdCxcbnVsIHtcbiAgZm9udC1mYW1pbHk6IEludGVyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiAxMDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLmhlcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTMxMXB4O1xufVxuXG5hc2lkZSB7XG4gIHdpZHRoOiAyMDNweDtcbiAgaGVpZ2h0OiAxMzAycHg7XG4gIG1hcmdpbjogMCA4LjZyZW0gMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDIycHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZW50TW9jayB7XG4gIHdpZHRoOiAxMDIycHg7XG4gIGhlaWdodDogNTQycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pIDFmcjtcbiAgZ2FwOiAzMHB4IDQ4cHg7XG59XG5cbi5jb250ZW50TW9ja0VsZW1lbnQge1xuICBoZWlnaHQ6IDYxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG59XG4uY29udGVudE1vY2tFbGVtZW50LnNwYW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xufVxuXG4uY29tbWVudC1maWx0ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1LjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG4uY29tbWVudC1maWx0ZXJzIC5maWx0ZXItbGlua3Mge1xuICB3aWR0aDogNjAuM3JlbTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBnYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29tbWVudC1maWx0ZXJzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5jb21tZW50LWZpbHRlcnMgLnNlbGVjdExpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbW1lbnQtZmlsdGVycyBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgb3BhY2l0eTogMC40O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5jb21tZW50LWZpbHRlcnMgc2VsZWN0IG9wdGlvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmNvbW1lbnQtZmlsdGVycyBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNvbW1lbnQtZmlsdGVycyAuc2VsZWN0LXJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uY29tbWVudC1maWx0ZXJzIC5mYXZvcml0ZUxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC45NXJlbTtcbiAgd2lkdGg6IDExLjdyZW07XG59XG4uY29tbWVudC1maWx0ZXJzIC5mYXZvcml0ZUxpc3QgLmZhdm9yaXRlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgb3BhY2l0eTogMC40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbW1lbnQtZmlsdGVycyAuY29tbWVudHMtbGluayB7XG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29tbWVudC1maWx0ZXJzIGEge1xuICBmb250LWZhbWlseTogSW50ZXI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmNvbW1lbnRzQmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udXNlckF2YXRhciB7XG4gIHdpZHRoOiA2MXB4O1xuICBoZWlnaHQ6IDYxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmV3Q29tbWVudEJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDkuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4ubmV3Q29tbWVudEJsb2NrIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5My4xcmVtO1xuICBnYXA6IDMwcHg7XG59XG4ubmV3Q29tbWVudEJsb2NrIGZvcm0gbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5ld0NvbW1lbnRCbG9jayBmb3JtICNjb21tZW50IHtcbiAgZm9udC1mYW1pbHk6IEludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZpZWxkLXNpemluZzogY29udGVudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjguOHJlbTtcbiAgbWluLWhlaWdodDogNi4xcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5uZXdDb21tZW50QmxvY2sgZm9ybSAjY29tbWVudDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4udXNlck5hbWVBbmRGb3JtV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4udXNlck5hbWVXcmFwcGVyIHtcbiAgd2lkdGg6IDY4LjhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXJOYW1lIHtcbiAgZm9udC1mYW1pbHk6IEludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMxMjJhYzA7XG59XG5cbi53YXJuaW5nIHtcbiAgZm9udC1mYW1pbHk6IEludGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6IEludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAyMTNweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZDg3MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcbiAgb3BhY2l0eTogMC40O1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ucHVibGlzaGVkQ29tbWVudCB7XG4gIHdpZHRoOiAxMDA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cbi5wdWJsaXNoZWRDb21tZW50IC5wdWJsaXNoZWRDb21tZW50VGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmaWVsZC1zaXppbmc6IGNvbnRlbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF5Q0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBdkNGOztBQTBDQTs7O0VBaENFLGtCQVphO0VBYWIs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a0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQTROQSxhQUFBO0FBckNGOztBQXdDQTtFQWhQRSxrQkFuQmE7RUFvQmIsaUJBbEJhO0VBbUJiLGdCQWZnQjtFQWdCaEIsV0FBQTtFQStPQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWxDRjs7QUFxQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBbENGO0FBb0NFO0VBeFFBLGtCQW5CYTtFQW9CYixpQkFsQmE7RUFtQmIsZ0JBZmdCO0VBZ0JoQixXQUFBO0VBdVFFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBL0JKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3cFxcXCIpO1xcblxcbiRmb250LXByaW1hcnk6IEludGVyO1xcbiRmb250LXNpemUtYmFzZTogMS42cmVtO1xcbiRmb250LXNpemUtbGc6IDEuOHJlbTtcXG4kZm9udC1zaXplLW1kOiAxLjZyZW07XFxuJGZvbnQtc2l6ZS1zbTogMS40cmVtO1xcblxcbiRmb250LXdlaWdodC1yZWc6IDQwMDtcXG4kZm9udC13ZWlnaHQtbWVkOiA1MDA7XFxuXFxuJHByaW1hcnktY29sb3I6ICNkOWQ5ZDk7XFxuXFxuQG1peGluIGZvbnQtYmFzZSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1yZWc7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuQG1peGluIGZvbnQtbGcge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XFxuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZztcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5AbWl4aW4gZm9udC11c2VyIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWQ7XFxuICBjb2xvcjogIzEyMmFjMDtcXG59XFxuQG1peGluIGZvbnQtaXRhbGljIHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mYXZvcml0ZSxcXG5zZWxlY3QsXFxudWwge1xcbiAgQGluY2x1ZGUgZm9udC1iYXNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTQ0MHB4O1xcbiAgaGVpZ2h0OiAxMDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMzExcHg7XFxufVxcblxcbmFzaWRlIHtcXG4gIHdpZHRoOiAyMDNweDtcXG4gIGhlaWdodDogMTMwMnB4O1xcbiAgbWFyZ2luOiAwIDguNnJlbSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMjJweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50TW9jayB7XFxuICB3aWR0aDogMTAyMnB4O1xcbiAgaGVpZ2h0OiA1NDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0bykgMWZyO1xcbiAgZ2FwOiAzMHB4IDQ4cHg7XFxufVxcblxcbi5jb250ZW50TW9ja0VsZW1lbnQge1xcbiAgaGVpZ2h0OiA2MXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuXFxuICAmLnNwYW4ge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIH1cXG59XFxuXFxuLmNvbW1lbnQtZmlsdGVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1LjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG5cXG4gIC5maWx0ZXItbGlua3Mge1xcbiAgICB3aWR0aDogNjAuM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuXFxuICAuc2VsZWN0TGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG5cXG4gICAgb3B0aW9uIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcblxcbiAgICAmOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2VsZWN0LXJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuXFxuICAuZmF2b3JpdGVMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuOTVyZW07XFxuICAgIHdpZHRoOiAxMS43cmVtO1xcblxcbiAgICAuZmF2b3JpdGUge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuICB9XFxuXFxuICAuY29tbWVudHMtbGluayB7XFxuICAgIEBpbmNsdWRlIGZvbnQtbGc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIGEge1xcbiAgICBAaW5jbHVkZSBmb250LWJhc2U7XFxuICB9XFxufVxcblxcbi5jb21tZW50c0Jsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udXNlckF2YXRhciB7XFxuICB3aWR0aDogNjFweDtcXG4gIGhlaWdodDogNjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm5ld0NvbW1lbnRCbG9jayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDkuOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcblxcbiAgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkzLjFyZW07XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgbGFiZWwge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NvbW1lbnQge1xcbiAgICAgIEBpbmNsdWRlIGZvbnQtbGc7XFxuICAgICAgZmllbGQtc2l6aW5nOiBjb250ZW50O1xcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHdpZHRoOiA2OC44cmVtO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDYuMXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjY29tbWVudDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udXNlck5hbWVBbmRGb3JtV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLnVzZXJOYW1lV3JhcHBlciB7XFxuICB3aWR0aDogNjguOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udXNlck5hbWUge1xcbiAgQGluY2x1ZGUgZm9udC11c2VyO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBAaW5jbHVkZSBmb250LWl0YWxpYztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgQGluY2x1ZGUgZm9udC1sZztcXG4gIHdpZHRoOiAyMTNweDtcXG4gIGhlaWdodDogNjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmQ4NzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucHVibGlzaGVkQ29tbWVudCB7XFxuICB3aWR0aDogMTAwN3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgLnB1Ymxpc2hlZENvbW1lbnRUZXh0IHtcXG4gICAgQGluY2x1ZGUgZm9udC1sZztcXG4gICAgZmllbGQtc2l6aW5nOiBjb250ZW50O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUHJldmVudCBmb250IHNpemUgaW5mbGF0aW9uICovXG5odG1sIHtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBpbiBmYXZvdXIgb2YgYmV0dGVyIGNvbnRyb2wgaW4gYXV0aG9yZWQgQ1NTICovXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgcCxcbmZpZ3VyZSwgYmxvY2txdW90ZSwgZGwsIGRkIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cbnVsW3JvbGU9J2xpc3QnXSxcbm9sW3JvbGU9J2xpc3QnXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBTZXQgc2hvcnRlciBsaW5lIGhlaWdodHMgb24gaGVhZGluZ3MgYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzICovXG5oMSwgaDIsIGgzLCBoNCxcbmJ1dHRvbiwgaW5wdXQsIGxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuLyogQmFsYW5jZSB0ZXh0IHdyYXBwaW5nIG9uIGhlYWRpbmdzICovXG5oMSwgaDIsXG5oMywgaDQge1xuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsIGJ1dHRvbixcbnRleHRhcmVhLCBzZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiBNYWtlIHN1cmUgdGV4dGFyZWFzIHdpdGhvdXQgYSByb3dzIGF0dHJpYnV0ZSBhcmUgbm90IHRpbnkgKi9cbnRleHRhcmVhOm5vdChbcm93c10pIHtcbiAgbWluLWhlaWdodDogMTBlbTtcbn1cblxuLyogQW55dGhpbmcgdGhhdCBoYXMgYmVlbiBhbmNob3JlZCB0byBzaG91bGQgaGF2ZSBleHRyYSBzY3JvbGwgbWFyZ2luICovXG46dGFyZ2V0IHtcbiAgc2Nyb2xsLW1hcmdpbi1ibG9jazogNWV4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQSxzRUFBc0U7QUFDdEU7O0VBRUUscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSxrRUFBa0U7QUFDbEU7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLHNDQUFzQztBQUN0Qzs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOztFQUVFLGFBQWE7QUFDZjs7QUFFQSw4REFBOEQ7QUFDOUQ7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsdUVBQXVFO0FBQ3ZFO0VBQ0Usd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBQcmV2ZW50IGZvbnQgc2l6ZSBpbmZsYXRpb24gKi9cXG5odG1sIHtcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBpbiBmYXZvdXIgb2YgYmV0dGVyIGNvbnRyb2wgaW4gYXV0aG9yZWQgQ1NTICovXFxuYm9keSwgaDEsIGgyLCBoMywgaDQsIHAsXFxuZmlndXJlLCBibG9ja3F1b3RlLCBkbCwgZGQge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBTZXQgc2hvcnRlciBsaW5lIGhlaWdodHMgb24gaGVhZGluZ3MgYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzICovXFxuaDEsIGgyLCBoMywgaDQsXFxuYnV0dG9uLCBpbnB1dCwgbGFiZWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuLyogQmFsYW5jZSB0ZXh0IHdyYXBwaW5nIG9uIGhlYWRpbmdzICovXFxuaDEsIGgyLFxcbmgzLCBoNCB7XFxuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCwgYnV0dG9uLFxcbnRleHRhcmVhLCBzZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogTWFrZSBzdXJlIHRleHRhcmVhcyB3aXRob3V0IGEgcm93cyBhdHRyaWJ1dGUgYXJlIG5vdCB0aW55ICovXFxudGV4dGFyZWE6bm90KFtyb3dzXSkge1xcbiAgbWluLWhlaWdodDogMTBlbTtcXG59XFxuXFxuLyogQW55dGhpbmcgdGhhdCBoYXMgYmVlbiBhbmNob3JlZCB0byBzaG91bGQgaGF2ZSBleHRyYSBzY3JvbGwgbWFyZ2luICovXFxuOnRhcmdldCB7XFxuICBzY3JvbGwtbWFyZ2luLWJsb2NrOiA1ZXg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgYXJyb3dJbWFnZSBmcm9tIFwiQC9hc3NldHMvQXJyb3cuc3ZnXCI7XG5pbXBvcnQgaGVhcnRJbWFnZSBmcm9tIFwiQC9hc3NldHMvaGVhcnQuc3ZnXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRlbnRNb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50TW9ja1wiKTtcbiAgICB2YXIgY29udGVudE1vY2tDb3VudCA9IDk7XG4gICAgdmFyIGNvbW1lbnRzQmxvY2sgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21tZW50c0Jsb2NrXCIpKTtcbiAgICB2YXIgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFycm93XCIpO1xuICAgIHZhciBoZWFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhcnRcIik7XG4gICAgdmFyIHRleHRhcmVhID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKSk7XG4gICAgdmFyIHdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndhcm5pbmdcIik7XG4gICAgdmFyIHNlbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbmQtYnRuXCIpO1xuICAgIHZhciBjb21tZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKSk7XG4gICAgdmFyIGNvbW1lbnRGb3JtID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudEZvcm1cIikpO1xuICAgIHZhciBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnQtc29ydFwiKTtcbiAgICB2YXIgcHVibGlzaGVkQ29tbWVudCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnB1Ymxpc2hlZENvbW1lbnRcIikpO1xuICAgIGlmIChhcnJvdykge1xuICAgICAgICBhcnJvdy5zcmMgPSBhcnJvd0ltYWdlO1xuICAgIH1cbiAgICBpZiAoaGVhcnQpIHtcbiAgICAgICAgaGVhcnQuc3JjID0gaGVhcnRJbWFnZTtcbiAgICB9XG4gICAgY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5ld1B1Ymxpc2hlZENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdQdWJsaXNoZWRDb21tZW50LmlubmVySFRNTCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInB1Ymxpc2hlZENvbW1lbnRcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJ1c2VyQXZhdGFyXFxcIiBhbHQ9XFxcIlxcdTA0MTBcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDMwXFx1MDQ0MCBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NEZcXFwiIC8+XFxuICAgIDxkaXYgY2xhc3M9XFxcInVzZXJOYW1lQW5kRm9ybVdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyTmFtZUFuZEZvcm1XcmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidXNlck5hbWVXcmFwcGVyXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInVzZXJOYW1lXFxcIj48L3NwYW4+XFxuICAgIFxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3YXJuaW5nXFxcIj5cXHUwNDFDXFx1MDQzMFxcdTA0M0FcXHUwNDQxLiAxMCBcXHUwNDQxXFx1MDQzOFxcdTA0M0NcXHUwNDMyXFx1MDQzRVxcdTA0M0JcXHUwNDNFXFx1MDQzMjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHVibGlzaGVkQ29tbWVudFRleHRcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICBcIjtcbiAgICAgICAgY29tbWVudHNCbG9jay5hcHBlbmRDaGlsZChuZXdQdWJsaXNoZWRDb21tZW50KTtcbiAgICAgICAgdmFyIHB1Ymxpc2hlZENvbW1lbnRUZXh0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHVibGlzaGVkQ29tbWVudFRleHRcIikpO1xuICAgICAgICB2YXIgY29tbWVudFRleHQgPSBjb21tZW50LnZhbHVlO1xuICAgICAgICBpZiAoY29tbWVudFRleHQudHJpbSgpID09PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwdWJsaXNoZWRDb21tZW50VGV4dC50ZXh0Q29udGVudCA9IGNvbW1lbnRUZXh0O1xuICAgICAgICBjb21tZW50LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWVzc2FnZUxlbmd0aCA9IHRleHRhcmVhLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgaWYgKG1lc3NhZ2VMZW5ndGggPj0gMTAwMCkge1xuICAgICAgICAgICAgc2VuZEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHNlbmRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB0b2dnbGVBcnJvd1JvdGF0aW9uID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdC1yb3RhdGVkXCIpOyB9O1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRvZ2dsZUFycm93Um90YXRpb24pO1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0b2dnbGVBcnJvd1JvdGF0aW9uKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnRNb2NrQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgc3ViY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN1YmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRNb2NrRWxlbWVudFwiKTtcbiAgICAgICAgaWYgKGkgPT09IGNvbnRlbnRNb2NrQ291bnQgLSAxKSB7XG4gICAgICAgICAgICBzdWJjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzcGFuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnRNb2NrLmFwcGVuZENoaWxkKHN1YmNvbnRlbnQpO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gcmFuZG9tVXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UsIGRhdGEsIHVzZXJBdmF0YXJJbWFnZV8xLCB1c2VyQXZhdGFyLCB1c2VyTG9naW5fMSwgdXNlck5hbWUsIGVycm9yXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9cIildO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhUVFAgZXJyb3IhIHN0YXR1czogXCIuY29uY2F0KHJlc3BvbnNlLnN0YXR1cykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyQXZhdGFySW1hZ2VfMSA9IGRhdGEucmVzdWx0c1swXS5waWN0dXJlLmxhcmdlO1xuICAgICAgICAgICAgICAgICAgICB1c2VyQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51c2VyQXZhdGFyXCIpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyQXZhdGFyLmZvckVhY2goZnVuY3Rpb24gKGF2YXRhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YXRhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhci5zcmMgPSB1c2VyQXZhdGFySW1hZ2VfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJMb2dpbl8xID0gZGF0YS5yZXN1bHRzWzBdLmxvZ2luLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXNlck5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLmZvckVhY2goZnVuY3Rpb24gKHVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1TmFtZS50ZXh0Q29udGVudCA9IHVzZXJMb2dpbl8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0LTQsNC90L3Ri9GFXCIsIGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbnVsbF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxucmFuZG9tVXNlckRhdGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==