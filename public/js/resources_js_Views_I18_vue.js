"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_I18_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/I18.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/I18.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-vue-i18n */ "./node_modules/laravel-vue-i18n/dist/index.js");
/* harmony import */ var vue_window_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-window-size */ "./node_modules/vue-window-size/dist/index.js");
/* harmony import */ var _components_Front_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Front/Header */ "./resources/js/components/Front/Header.vue");
/* harmony import */ var _components_Front_HeaderMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Front/HeaderMobile */ "./resources/js/components/Front/HeaderMobile.vue");
/* harmony import */ var _components_Front_HeaderMobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Front/HeaderMobileNav */ "./resources/js/components/Front/HeaderMobileNav.vue");
/* harmony import */ var _components_Front_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Front/Footer */ "./resources/js/components/Front/Footer.vue");
/* harmony import */ var _components_Betting_BettingHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Betting/BettingHeader */ "./resources/js/components/Betting/BettingHeader.vue");
/* harmony import */ var _components_Betting_BettingHeaderMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Betting/BettingHeaderMobile */ "./resources/js/components/Betting/BettingHeaderMobile.vue");
/* harmony import */ var _components_Betting_BettingMobileNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Betting/BettingMobileNav */ "./resources/js/components/Betting/BettingMobileNav.vue");
/* harmony import */ var _components_Auth_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Auth/Header */ "./resources/js/components/Auth/Header.vue");
/* harmony import */ var _components_Dashboard_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Dashboard/Header */ "./resources/js/components/Dashboard/Header.vue");
/* harmony import */ var _components_Dashboard_HeaderMobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Dashboard/HeaderMobile */ "./resources/js/components/Dashboard/HeaderMobile.vue");
/* harmony import */ var _components_Dashboard_NavMobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Dashboard/NavMobile */ "./resources/js/components/Dashboard/NavMobile.vue");














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BettingHeader: _components_Betting_BettingHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    BettingHeaderMobile: _components_Betting_BettingHeaderMobile__WEBPACK_IMPORTED_MODULE_7__["default"],
    BettingMobileNav: _components_Betting_BettingMobileNav__WEBPACK_IMPORTED_MODULE_8__["default"],
    LoginHeader: _components_Auth_Header__WEBPACK_IMPORTED_MODULE_9__["default"],
    Header: _components_Front_Header__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeaderMobile: _components_Front_HeaderMobile__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeaderMobileNav: _components_Front_HeaderMobileNav__WEBPACK_IMPORTED_MODULE_4__["default"],
    Footer: _components_Front_Footer__WEBPACK_IMPORTED_MODULE_5__["default"],
    DashboardHeader: _components_Dashboard_Header__WEBPACK_IMPORTED_MODULE_10__["default"],
    DashboardHeaderMobile: _components_Dashboard_HeaderMobile__WEBPACK_IMPORTED_MODULE_11__["default"],
    DashboardNavMobile: _components_Dashboard_NavMobile__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  data: function data() {
    return {
      key: 0,
      navVisible: false,
      mobileMenuIsOpen: false,
      userInfo: {
        balance: null
      },
      update_balance_var: null
    };
  },
  methods: {
    isNavVisible: function isNavVisible() {
      var _this = this;

      this.navVisible = true;
      var pages = ['login', 'register', 'recovery'];
      pages.forEach(function (item) {
        if (item === _this.$route.name) {
          _this.navVisible = false;
        }
      });
    },
    changeLoc: function changeLoc(loc) {
      (0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_0__.loadLanguageAsync)(loc);
    },
    // applyLoc(loc) {
    //   this.intervalid1 = setInterval(function () {
    //     if (isLoaded(loc)) {
    //       this.key += 1
    //       this.$forceUpdate()
    //       clearInterval(this.intervalid1)
    //     }
    //   }.bind(this), 500);
    // },
    toggleMobileMenu: function toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },
    update_balance: function update_balance() {
      var _this2 = this;

      this.update_balance_var = setInterval(function () {
        if (_this2.user) {
          _this2.$store.dispatch("fetchActualBalance");
        }
      }, 10000);
    }
  },
  mounted: function mounted() {
    this.isNavVisible();
    var url_lang = this.$route.params.lang;
    (0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_0__.loadLanguageAsync)(url_lang); // this.applyLoc(url_lang)

    this.update_balance();
  },
  unmounted: function unmounted() {
    clearInterval(this.update_balance_var);
  },
  setup: function setup() {
    var _useWindowSize = (0,vue_window_size__WEBPACK_IMPORTED_MODULE_1__.useWindowSize)(),
        width = _useWindowSize.width,
        height = _useWindowSize.height;

    return {
      windowWidth: width,
      windowHeight: height
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeader.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeader.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_window_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-window-size */ "./node_modules/vue-window-size/dist/index.js");
/* harmony import */ var _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/flags/ru.svg */ "./resources/img/flags/ru.svg");
/* harmony import */ var _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/flags/en.svg */ "./resources/img/flags/en.svg");
/* harmony import */ var _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/flags/ch.svg */ "./resources/img/flags/ch.svg");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread({
    user: function user() {
      return this.$store.getters.user;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(["getActualBalance"])),
  data: function data() {
    return {
      language: {
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      languages: [{
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        slug: "en",
        name: "EN",
        flag: _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        slug: "ch",
        name: "CH",
        flag: _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
      }],
      languagePanelIsOpen: false
    };
  },
  methods: {
    toggleLanguagePanel: function toggleLanguagePanel() {
      this.languagePanelIsOpen = !this.languagePanelIsOpen;
    },
    setLangIcon: function setLangIcon(slug) {
      var _this = this;

      this.languages.forEach(function (item) {
        if (item.slug === slug) {
          _this.language = item;
        }
      });
    },
    selectLanguage: function selectLanguage(slug) {
      this.setLangIcon(slug);
      this.toggleLanguagePanel();
      this.$emit('changeLocation', slug);
      setTimeout(function () {
        return location.reload();
      }, 500);
    }
  },
  mounted: function mounted() {
    if (this.user) {
      this.$store.dispatch("fetchActualBalance");
    }

    var url_lang = this.$route.params.lang;
    this.setLangIcon(url_lang);
  },
  setup: function setup() {
    var _useWindowSize = (0,vue_window_size__WEBPACK_IMPORTED_MODULE_0__.useWindowSize)(),
        width = _useWindowSize.width,
        height = _useWindowSize.height;

    return {
      windowWidth: width,
      windowHeight: height
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['mobileMenuIsOpen']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingMobileNav.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingMobileNav.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/flags/ru.svg */ "./resources/img/flags/ru.svg");
/* harmony import */ var _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/flags/en.svg */ "./resources/img/flags/en.svg");
/* harmony import */ var laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! laravel-vue-i18n */ "./node_modules/laravel-vue-i18n/dist/index.js");
/* harmony import */ var _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/flags/ch.svg */ "./resources/img/flags/ch.svg");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  data: function data() {
    return {
      language: {
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      languages: [{
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        slug: "en",
        name: "EN",
        flag: _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        slug: "ch",
        name: "CH",
        flag: _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
      }],
      languagePanelIsOpen: false
    };
  },
  methods: {
    toggleLanguagePanel: function toggleLanguagePanel() {
      this.languagePanelIsOpen = !this.languagePanelIsOpen;
    },
    setLangIcon: function setLangIcon(slug) {
      var _this = this;

      this.languages.forEach(function (item) {
        if (item.slug === slug) {
          _this.language = item;
        }
      });
    },
    selectLanguage: function selectLanguage(slug) {
      var _this2 = this;

      (0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_3__.loadLanguageAsync)(slug);
      this.setLangIcon(slug);
      this.toggleLanguagePanel();
      var langInterval = setInterval(function () {
        if ((0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_3__.isLoaded)(slug)) {
          _this2.$router.go(0);

          clearInterval(langInterval);
        }
      }, 200);
    },
    logout: function logout() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$store.dispatch("logout");

              case 2:
                _this3.$router.push({
                  name: "login"
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var url_lang = this.$route.params.lang;
    this.setLangIcon(url_lang);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Header.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Header.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch("logout");

              case 2:
                _this.$router.push({
                  name: "login"
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['mobileMenuIsOpen']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/NavMobile.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/NavMobile.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/flags/ru.svg */ "./resources/img/flags/ru.svg");
/* harmony import */ var _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/flags/en.svg */ "./resources/img/flags/en.svg");
/* harmony import */ var laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! laravel-vue-i18n */ "./node_modules/laravel-vue-i18n/dist/index.js");
/* harmony import */ var _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/flags/ch.svg */ "./resources/img/flags/ch.svg");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['mobileMenuIsOpen'],
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  data: function data() {
    return {
      language: {
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      languages: [{
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        slug: "en",
        name: "EN",
        flag: _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        slug: "ch",
        name: "CH",
        flag: _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
      }],
      languagePanelIsOpen: false
    };
  },
  methods: {
    toggleLanguagePanel: function toggleLanguagePanel() {
      this.languagePanelIsOpen = !this.languagePanelIsOpen;
    },
    setLangIcon: function setLangIcon(slug) {
      var _this = this;

      this.languages.forEach(function (item) {
        if (item.slug === slug) {
          _this.language = item;
        }
      });
    },
    selectLanguage: function selectLanguage(slug) {
      var _this2 = this;

      (0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_3__.loadLanguageAsync)(slug);
      this.setLangIcon(slug);
      this.toggleLanguagePanel();
      this.$emit('changeLocation', slug);
      var langInterval = setInterval(function () {
        if ((0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_3__.isLoaded)(slug)) {
          _this2.$router.go(0);

          clearInterval(langInterval);
        }
      }, 200);
    },
    logout: function logout() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$store.dispatch("logout");

              case 2:
                _this3.$router.push({
                  name: "login"
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var url_lang = this.$route.params.lang;
    this.setLangIcon(url_lang);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Footer.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Footer.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      socials: {
        vk: 'https://vk.com/',
        facebook: 'https://www.facebook.com/MaranBet-250439506864989/',
        instagram: 'https://www.instagram.com/maran_global/',
        telegram: 'https://t.me/maranbet_news'
      },
      menu_info: [{
        id: 0,
        title: this.$t('Maran Token'),
        link: {
          name: "maran-token"
        }
      }, {
        id: 1,
        title: this.$t('Promotions'),
        link: {
          name: "sales"
        }
      }, {
        id: 2,
        title: this.$t('About company'),
        link: {
          name: 'about-company'
        }
      }, {
        id: 3,
        title: this.$t('Rules of the game'),
        link: {
          name: 'info-page',
          params: {
            slug: 'rules-of-the-game'
          }
        }
      }],
      menu_documentation: [{
        "id": 0,
        "title": "SWAP",
        "link": {
          name: 'dashboard'
        }
      }, {
        "id": 1,
        "title": this.$t("Terms of Use"),
        "link": {
          name: 'info-page',
          params: {
            slug: 'terms-of-use'
          }
        }
      }, {
        "id": 2,
        "title": this.$t("Privacy Policy"),
        "link": {
          name: 'info-page',
          params: {
            slug: 'privacy-policy'
          }
        }
      } // {
      //   "id": 3,
      //   "title": "How do I get MARAN?",
      //   "link": "/get-maran-token/"
      // }
      ]
    };
  },
  mounted: function mounted() {// this.menu_info = this.$t('footer__menu-info');
    // this.menu_documentation = this.$t('footer__menu-documentation');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../img/flags/ru.svg */ "./resources/img/flags/ru.svg");
/* harmony import */ var _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/flags/en.svg */ "./resources/img/flags/en.svg");
/* harmony import */ var _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/flags/ch.svg */ "./resources/img/flags/ch.svg");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      language: {
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      languages: [{
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
      }, {
        slug: "en",
        name: "EN",
        flag: _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        slug: "ch",
        name: "CH",
        flag: _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
      }],
      languagePanelIsOpen: false
    };
  },
  methods: {
    toggleLanguagePanel: function toggleLanguagePanel() {
      this.languagePanelIsOpen = !this.languagePanelIsOpen;
    },
    setLangIcon: function setLangIcon(slug) {
      var _this = this;

      this.languages.forEach(function (item) {
        if (item.slug === slug) {
          _this.language = item;
        }
      });
    },
    selectLanguage: function selectLanguage(slug) {
      this.setLangIcon(slug);
      this.toggleLanguagePanel();
      this.$emit('changeLocation', slug);
      setTimeout(function () {
        return location.reload();
      }, 500);
    }
  },
  mounted: function mounted() {
    var url_lang = this.$route.params.lang;
    this.setLangIcon(url_lang);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobile.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobile.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_window_scroll_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/window-scroll-position */ "./resources/js/modules/window-scroll-position.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [(0,_modules_window_scroll_position__WEBPACK_IMPORTED_MODULE_0__["default"])('position')],
  props: ['mobileMenuIsOpen'],
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobileNav.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobileNav.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/flags/ru.svg */ "./resources/img/flags/ru.svg");
/* harmony import */ var _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/flags/en.svg */ "./resources/img/flags/en.svg");
/* harmony import */ var _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/flags/ch.svg */ "./resources/img/flags/ch.svg");
/* harmony import */ var laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! laravel-vue-i18n */ "./node_modules/laravel-vue-i18n/dist/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  data: function data() {
    return {
      language: {
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      languages: [{
        slug: "ru",
        name: "RU",
        flag: _img_flags_ru_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        slug: "en",
        name: "EN",
        flag: _img_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        slug: "ch",
        name: "CH",
        flag: _img_flags_ch_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
      }],
      languagePanelIsOpen: false
    };
  },
  methods: {
    toggleLanguagePanel: function toggleLanguagePanel() {
      this.languagePanelIsOpen = !this.languagePanelIsOpen;
    },
    setLangIcon: function setLangIcon(slug) {
      var _this = this;

      this.languages.forEach(function (item) {
        if (item.slug === slug) {
          _this.language = item;
        }
      });
    },
    selectLanguage: function selectLanguage(slug) {
      var _this2 = this;

      (0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_4__.loadLanguageAsync)(slug);
      this.setLangIcon(slug);
      this.toggleLanguagePanel();
      this.$emit('toggleMobileMenu');
      var langInterval = setInterval(function () {
        if ((0,laravel_vue_i18n__WEBPACK_IMPORTED_MODULE_4__.isLoaded)(slug)) {
          _this2.$router.go(0);

          clearInterval(langInterval);
        }
      }, 200);
    },
    logout: function logout() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$store.dispatch("logout");

              case 2:
                _this3.$router.push({
                  name: "login"
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var url_lang = this.$route.params.lang;
    this.setLangIcon(url_lang);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/I18.vue?vue&type=template&id=1f6460e1":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/I18.vue?vue&type=template&id=1f6460e1 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "app_layer"
};
var _hoisted_2 = {
  key: 4
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_HeaderMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HeaderMobile");

  var _component_HeaderMobileNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HeaderMobileNav");

  var _component_DashboardHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DashboardHeader");

  var _component_DashboardHeaderMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DashboardHeaderMobile");

  var _component_DashboardNavMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DashboardNavMobile");

  var _component_BettingHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BettingHeader");

  var _component_BettingHeaderMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BettingHeaderMobile");

  var _component_BettingMobileNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BettingMobileNav");

  var _component_LoginHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoginHeader");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  var _directive_body_scroll_lock = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("body-scroll-lock");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.$route.meta.header === 'landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [$setup.windowWidth >= 920 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Header, {
    key: 'Header' + $data.key,
    onChangeLocation: $options.changeLoc
  }, null, 8
  /* PROPS */
  , ["onChangeLocation"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HeaderMobile, {
    key: 'HeaderMobile' + $data.key,
    onChangeLocation: $options.changeLoc,
    mobileMenuIsOpen: $data.mobileMenuIsOpen,
    onToggleMenu: $options.toggleMobileMenu
  }, null, 8
  /* PROPS */
  , ["onChangeLocation", "mobileMenuIsOpen", "onToggleMenu"])), [[_directive_body_scroll_lock, $data.mobileMenuIsOpen]]), $data.mobileMenuIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HeaderMobileNav, {
    key: 'HeaderMobileNav' + $data.key
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  ))], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.meta.header === 'dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [$setup.windowWidth >= 1180 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DashboardHeader, {
    key: 'DashboardHeader' + $data.key
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DashboardHeaderMobile, {
    key: 'DashboardHeaderMobile' + $data.key,
    onToggleMenu: $options.toggleMobileMenu,
    mobileMenuIsOpen: $data.mobileMenuIsOpen
  }, null, 8
  /* PROPS */
  , ["onToggleMenu", "mobileMenuIsOpen"])), [[_directive_body_scroll_lock, $data.mobileMenuIsOpen]]), $data.mobileMenuIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DashboardNavMobile, {
    key: 'DashboardNavigationMobile' + $data.key
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  ))], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.meta.header === 'betting' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [$setup.windowWidth >= 920 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BettingHeader, {
    key: 'BettingHeader' + $data.key
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BettingHeaderMobile, {
    mobileMenuIsOpen: $data.mobileMenuIsOpen,
    onToggleMenu: $options.toggleMobileMenu,
    key: 'BettingHeaderMobile' + $data.key
  }, null, 8
  /* PROPS */
  , ["mobileMenuIsOpen", "onToggleMenu"])), [[_directive_body_scroll_lock, $data.mobileMenuIsOpen]]), $data.mobileMenuIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BettingMobileNav, {
    key: 'BettingMobileNav' + $data.key,
    onToggleMenu: $options.toggleMobileMenu
  }, null, 8
  /* PROPS */
  , ["onToggleMenu"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  ))], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$route.meta.header === 'auth' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LoginHeader, {
    key: 'AuthHeader' + $data.key
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), _ctx.$route.meta.header !== 'dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Footer, {
    key: 'Footer' + $data.key
  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/Header.vue?vue&type=template&id=b159f44e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/Header.vue?vue&type=template&id=b159f44e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");


var _hoisted_1 = {
  "class": "auth-header"
};
var _hoisted_2 = {
  "class": "container container-fw flex-row auth-header__container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "auth-header__logo",
  alt: "Maran Bet"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M9.4714 10.8047C9.73175 10.5444 9.73175 10.1223 9.4714 9.86193L7.60948 8L9.4714 6.13807C9.73175 5.87772 9.73175 5.45561 9.4714 5.19526C9.21106 4.93491 8.78895 4.93491 8.5286 5.19526L6.19526 7.5286C5.93491 7.78894 5.93491 8.21105 6.19526 8.4714L8.5286 10.8047C8.78894 11.0651 9.21105 11.0651 9.4714 10.8047Z",
  fill: "#777E91"
})], -1
/* HOISTED */
);

function render(_ctx, _cache) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "t1_medium auth-header__back"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Go back to the main page')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeader.vue?vue&type=template&id=db02483e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeader.vue?vue&type=template&id=db02483e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");
/* harmony import */ var _img_header_logo_small_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/header__logo--small.svg */ "./resources/img/header__logo--small.svg");
/* harmony import */ var _img_currencies_maran_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/currencies/maran.svg */ "./resources/img/currencies/maran.svg");




var _hoisted_1 = {
  "class": "betting-header"
};
var _hoisted_2 = {
  "class": "container container-fw betting-header__container"
};
var _hoisted_3 = {
  key: 0,
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "betting-header__logo",
  alt: "Maran Bet"
};
var _hoisted_4 = {
  key: 1,
  src: _img_header_logo_small_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "betting-header__logo",
  alt: "Maran Bet"
};
var _hoisted_5 = {
  "class": "betting-header__menu"
};
var _hoisted_6 = {
  "class": "header__language-switcher betting-header__language-switcher"
};
var _hoisted_7 = ["src"];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10.8047 6.5286C10.5444 6.26825 10.1223 6.26825 9.86193 6.5286L8 8.39052L6.13807 6.5286C5.87772 6.26825 5.45561 6.26825 5.19526 6.5286C4.93491 6.78894 4.93491 7.21105 5.19526 7.4714L7.5286 9.80474C7.78894 10.0651 8.21105 10.0651 8.4714 9.80474L10.8047 7.4714C11.0651 7.21106 11.0651 6.78895 10.8047 6.5286Z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  key: 0,
  "class": "flex-row betting-header__user"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_currencies_maran_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "class": "betting-header__maran-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 1,
  "class": "betting-header__login-routes"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "betting-header__logo-box",
    title: "Maran Bet"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.windowWidth > 992 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_3)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_4))];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex-row t1_medium betting-header__link",
    to: {
      name: 'betting'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Sport'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex-row t1_medium betting-header__link betting-header__link--live",
    to: {
      name: 'betting-live'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('LIVE')
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex-row t1_medium betting-header__link",
    to: {
      name: 'esports'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Esports'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <router-link"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            class=\"flex-row t1_medium betting-header__link\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            to=\"#\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            v-text=\"$t('Crypto bets')\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex-row t1_medium betting-header__link",
    to: {
      name: 'maran-token'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('MARAN token'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex-row t1_medium betting-header__link",
    to: {
      name: 'results'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Results'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t2_medium header__language-selected",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleLanguagePanel && $options.toggleLanguagePanel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.language.flag,
    "class": "header__language-flag"
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.language.name) + " ", 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header__language-carret': true,
      'header__language-carret--reverse': $data.languagePanelIsOpen
    }),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _hoisted_9, 2
  /* CLASS */
  ))]), $data.languages && $data.languages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header__language-menu': true,
      'header__language-menu--open': $data.languagePanelIsOpen
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      to: {
        name: _ctx.$route.params.name,
        params: {
          lang: item.slug
        }
      },
      "class": "t2_medium header__language-item",
      key: item.slug,
      onClick: function onClick($event) {
        return $options.selectLanguage(item.slug);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.flag,
          "class": "header__language-flag"
        }, null, 8
        /* PROPS */
        , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $options.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard'
    },
    "class": "flex-row t1_medium betting-header__user-link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getActualBalance.display_balance) + " ", 1
      /* TEXT */
      ), _hoisted_12];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard'
    },
    "class": "flex-row t1_medium betting-header__user-link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    },
    "class": "t1_medium betting-header__login",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Sign in'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'register'
    },
    "class": "betting-button betting-header__register",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Register'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=template&id=11e24ce3":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=template&id=11e24ce3 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");


var _hoisted_1 = {
  "class": "betting-header-mobile"
};
var _hoisted_2 = {
  "class": "container container-fw betting-header-mobile__container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "betting-header-mobile__logo",
  alt: "Maran Bet"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "betting-header-mobile__box",
    title: "Maran Bet"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    },
    "class": "betting-header-mobile__auth-icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'betting-header-mobile__burger-icon': true,
      'betting-header-mobile__burger-icon--active': $props.mobileMenuIsOpen
    }),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('toggleMenu');
    })
  }, null, 2
  /* CLASS */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingMobileNav.vue?vue&type=template&id=68e1507d":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingMobileNav.vue?vue&type=template&id=68e1507d ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "betting-mobile-nav"
};
var _hoisted_2 = {
  "class": "container container-fw betting-mobile-nav__container"
};
var _hoisted_3 = {
  key: 0,
  "class": "flex-column"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "betting-mobile-nav__divider"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["textContent"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "betting-mobile-nav__divider"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = ["src", "alt"];
var _hoisted_9 = {
  key: 0,
  "class": "betting-mobile-nav__language-panel"
};
var _hoisted_10 = {
  "class": "container container-fw betting-mobile-nav__container"
};
var _hoisted_11 = {
  key: 0,
  "class": "betting-mobile-nav__language-item"
};
var _hoisted_12 = ["src", "alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [!$data.languagePanelIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "h3_medium betting-mobile-nav__item",
    to: {
      name: 'betting'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Sport'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "h3_medium betting-mobile-nav__item",
    to: {
      name: 'betting-live'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('LIVE')
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "h3_medium betting-mobile-nav__item",
    to: {
      name: 'betting-category',
      params: {
        category: 'sports',
        subcategory: 'esports'
      }
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Esports'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("      <router-link"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("          class=\"h3_medium betting-mobile-nav__item\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("          :to=\"{ name: 'betting-category', params: { category: 'sports', subcategory: 'crypto' } }\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("          v-text=\"$t('Crypto bets')\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "h3_medium betting-mobile-nav__item",
    to: {
      name: 'maran-token'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('MARAN token'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "h3_medium betting-mobile-nav__item",
    to: {
      name: 'results'
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Results'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" logout button "), $options.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: "#",
    "class": "h3_medium_m header-mobile-nav__item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Logout'))
  }, null, 8
  /* PROPS */
  , _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "https://t.me/maranbet_support",
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__support')),
    target: "_blank"
  }, null, 8
  /* PROPS */
  , _hoisted_6), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "h3_medium flex-row betting-mobile-nav__language-switcher-btn",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleLanguagePanel && $options.toggleLanguagePanel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.language.flag,
    "class": "betting-mobile-nav__language-flag",
    alt: $data.language.name
  }, null, 8
  /* PROPS */
  , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.language.name), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.languagePanelIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$data.languages && $data.languages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      to: {
        'name': _ctx.$route.params.name,
        params: {
          lang: item.slug
        }
      },
      key: item.slug,
      "class": "h3_medium betting-mobile-nav__item",
      onClick: function onClick($event) {
        return $options.selectLanguage(item.slug);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.flag,
          "class": "betting-mobile-nav__language-flag",
          alt: item.name
        }, null, 8
        /* PROPS */
        , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Header.vue?vue&type=template&id=1bd484f3":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Header.vue?vue&type=template&id=1bd484f3 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");


var _hoisted_1 = {
  "class": "dashboard-header"
};
var _hoisted_2 = {
  "class": "container container-fw flex-row dashboard-header__container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "betting-header__logo",
  alt: "Maran Bet"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex-row dashboard-header__buttons"
};
var _hoisted_5 = {
  "class": "flex-row t1_medium dashboard-header__button-user"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "betting-header__logo-box",
    title: "Maran Bet"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "flex-row t1_medium dashboard-header__button-exit",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    })
  }, " Выйти ")])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=template&id=3cc56075":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=template&id=3cc56075 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");


var _hoisted_1 = {
  "class": "header-mobile"
};
var _hoisted_2 = {
  "class": "container container-fw flex-row header-mobile__container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "header-mobile__logo",
  alt: "Maran Bet"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header-mobile__menu': true,
      'header-mobile__menu--active': $props.mobileMenuIsOpen
    }),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('toggleMenu');
    })
  }, null, 2
  /* CLASS */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/NavMobile.vue?vue&type=template&id=6f9ee2a2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/NavMobile.vue?vue&type=template&id=6f9ee2a2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex-column dashboard-nav-mobile"
};
var _hoisted_2 = {
  "class": "container container-fw dashboard-nav-mobile__container"
};
var _hoisted_3 = {
  "class": "flex-column dashboard-nav-mobile__list"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "betting-mobile-nav__divider"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["textContent"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "betting-mobile-nav__divider"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = ["src", "alt"];
var _hoisted_9 = {
  key: 0,
  "class": "betting-mobile-nav__language-panel"
};
var _hoisted_10 = {
  "class": "container container-fw betting-mobile-nav__container"
};
var _hoisted_11 = {
  key: 0,
  "class": "betting-mobile-nav__language-item"
};
var _hoisted_12 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard'
    },
    "class": "flex-row h3_medium_m dashboard-nav-mobile__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Account'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-wallet'
    },
    "class": "flex-row h3_medium_m dashboard-nav-mobile__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Wallet'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-history'
    },
    "class": "flex-row h3_medium_m dashboard-nav-mobile__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('History'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-help'
    },
    "class": "flex-row h3_medium_m dashboard-nav-mobile__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Help'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-results'
    },
    "class": "flex-row h3_medium_m dashboard-nav-mobile__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Results'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" logout button "), $options.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: "#",
    "class": "h3_medium_m header-mobile-nav__item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Logout'))
  }, null, 8
  /* PROPS */
  , _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "https://t.me/maranbet_support",
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__support')),
    target: "_blank"
  }, null, 8
  /* PROPS */
  , _hoisted_6), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row h3_medium_m dashboard-nav-mobile__language-switcher",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleLanguagePanel && $options.toggleLanguagePanel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.language.flag,
    "class": "dashboard-nav-mobile__language-flag",
    alt: $data.language.name
  }, null, 8
  /* PROPS */
  , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.language.name), 1
  /* TEXT */
  )]), $data.languagePanelIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$data.languages && $data.languages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      to: {
        name: _ctx.$route.params.name,
        params: {
          lang: item.slug
        }
      },
      key: item.slug,
      "class": "flex-row h3_medium_m betting-mobile-nav__item",
      onClick: function onClick($event) {
        return $options.selectLanguage(item.slug);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.flag,
          "class": "betting-mobile-nav__language-flag",
          alt: ""
        }, null, 8
        /* PROPS */
        , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Footer.vue?vue&type=template&id=58106fcc":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Footer.vue?vue&type=template&id=58106fcc ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_google_play_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/google-play.svg */ "./resources/img/google-play.svg");
/* harmony import */ var _img_app_store_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/app-store.svg */ "./resources/img/app-store.svg");



var _hoisted_1 = {
  "class": "footer"
};
var _hoisted_2 = {
  "class": "footer__column"
};
var _hoisted_3 = ["textContent"];

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"footer__apps\"><div class=\"footer__app-icon\"><img src=\"" + _img_google_play_svg__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"Google Play\"></div><div class=\"footer__app-icon\"><img src=\"" + _img_app_store_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"App Store\"></div></div>", 1);

var _hoisted_5 = {
  "class": "footer__copy t1_regular"
};
var _hoisted_6 = {
  "class": "footer__column"
};
var _hoisted_7 = ["textContent"];
var _hoisted_8 = {
  key: 0,
  "class": "footer__menu"
};
var _hoisted_9 = {
  "class": "footer__column"
};
var _hoisted_10 = ["textContent"];
var _hoisted_11 = {
  key: 0,
  "class": "footer__menu"
};
var _hoisted_12 = {
  "class": "footer__column"
};
var _hoisted_13 = ["textContent"];
var _hoisted_14 = {
  "class": "footer__socials"
};
var _hoisted_15 = ["href"];
var _hoisted_16 = ["href"];
var _hoisted_17 = ["href"];
var _hoisted_18 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'container': true,
      'container-fw': this.$route.name !== 'landing',
      'footer__container': true
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_bold footer__column-heading footer__app-heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('footer__app-heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_3), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, "© MARAN Global INC. " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date().getFullYear()), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_bold footer__column-heading footer__column-heading-info",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('footer__column-heading-info'))
  }, null, 8
  /* PROPS */
  , _hoisted_7), $data.menu_info && $data.menu_info.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.menu_info, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      "class": "t1_regular footer__menu-item",
      key: item.id,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title),
      to: item.link
    }, null, 8
    /* PROPS */
    , ["textContent", "to"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_bold footer__column-heading footer__column-heading-docs",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('footer__column-heading-docs'))
  }, null, 8
  /* PROPS */
  , _hoisted_10), $data.menu_documentation && $data.menu_documentation.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.menu_documentation, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      "class": "t1_regular footer__menu-item",
      key: item.id,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title),
      to: item.link
    }, null, 8
    /* PROPS */
    , ["textContent", "to"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_bold footer__column-heading footer__column-heading-socials",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('footer__column-heading-socials'))
  }, null, 8
  /* PROPS */
  , _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.socials.vk,
    target: "blank",
    "class": "fui-social fui-vk footer__social-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.socials.facebook,
    target: "blank",
    "class": "fui-social fui-facebook footer__social-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.socials.instagram,
    target: "blank",
    "class": "fui-social fui-instagram footer__social-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.socials.telegram,
    target: "blank",
    "class": "fui-social fui-telegram footer__social-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_18)])])], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Header.vue?vue&type=template&id=7942d3be":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Header.vue?vue&type=template&id=7942d3be ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_coinsbit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__coinsbit.svg */ "./resources/img/header__coinsbit.svg");
/* harmony import */ var _img_support_header_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/support-header-icon.svg */ "./resources/img/support-header-icon.svg");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");




var _hoisted_1 = {
  "class": "header"
};
var _hoisted_2 = {
  "class": "header__row header__small-row"
};
var _hoisted_3 = {
  "class": "container header__small-row-container"
};
var _hoisted_4 = {
  "class": "header__language-switcher"
};
var _hoisted_5 = ["src"];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10.8047 6.5286C10.5444 6.26825 10.1223 6.26825 9.86193 6.5286L8 8.39052L6.13807 6.5286C5.87772 6.26825 5.45561 6.26825 5.19526 6.5286C4.93491 6.78894 4.93491 7.21105 5.19526 7.4714L7.5286 9.80474C7.78894 10.0651 8.21105 10.0651 8.4714 9.80474L10.8047 7.4714C11.0651 7.21106 11.0651 6.78895 10.8047 6.5286Z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  "class": "t2_medium header__additional-links"
};
var _hoisted_10 = {
  href: "https://coinsbit.io/",
  "class": "header__additional-link header__exchange",
  target: "_blank"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_coinsbit_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "header__additional-link-icon",
  alt: "CoinsBit"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  href: "https://t.me/maranbet_support",
  "class": "header__additional-link header__support",
  target: "_blank"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_support_header_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "header__additional-link-icon",
  alt: "Telegram"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "header__row header__big-row"
};
var _hoisted_15 = {
  "class": "container header__big-row-container"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "class": "header__logo",
  alt: "Maran Bet"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "header__nav-menu"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t2_medium header__language-selected",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleLanguagePanel && $options.toggleLanguagePanel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.language.flag,
    "class": "header__language-flag"
  }, null, 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.language.name) + " ", 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header__language-carret': true,
      'header__language-carret--reverse': $data.languagePanelIsOpen
    }),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _hoisted_7, 2
  /* CLASS */
  ))]), $data.languages && $data.languages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header__language-menu': true,
      'header__language-menu--open': $data.languagePanelIsOpen
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      to: {
        name: _ctx.$route.params.name,
        params: {
          lang: item.slug
        }
      },
      "class": "t2_medium header__language-item",
      key: item.slug,
      onClick: function onClick($event) {
        return $options.selectLanguage(item.slug);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.flag,
          "class": "header__language-flag"
        }, null, 8
        /* PROPS */
        , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__exchange')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__support')), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'front-page'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "t1_medium header__nav-link header__nav-link-bets",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-bets'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'maran-token'
    },
    "class": "t1_medium header__nav-link header__nav-link-token",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-token'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'about-company'
    },
    "class": "t1_medium header__nav-link header__nav-link-about-company",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-about-company'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'sales'
    },
    "class": "t1_medium header__nav-link header__nav-link-sales",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-sales'))
  }, null, 8
  /* PROPS */
  , ["textContent"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    },
    "class": "fui-button__small header__cabinet-link",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__cabinet-link'))
  }, null, 8
  /* PROPS */
  , ["textContent"])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobile.vue?vue&type=template&id=68522b00":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobile.vue?vue&type=template&id=68522b00 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/header__logo.svg */ "./resources/img/header__logo.svg");


var _hoisted_1 = {
  "class": "container flex-row header-mobile__container"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "header-mobile__logo",
  alt: "Maran Bet"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex-row header-mobile__buttons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header-mobile': true,
      'header-mobile__scrolled': _ctx.position[1] > 0
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'landing'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard'
    },
    "class": "header-mobile__profile-btn"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('toggleMenu');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'header-mobile__menu-btn': true,
      'header-mobile__menu-btn--active': $props.mobileMenuIsOpen
    })
  }, null, 2
  /* CLASS */
  )])])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobileNav.vue?vue&type=template&id=6ae278b3":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobileNav.vue?vue&type=template&id=6ae278b3 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "header-mobile-nav"
};
var _hoisted_2 = {
  key: 0,
  "class": "container container-fw flex-column header-mobile-nav__menu"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "betting-mobile-nav__divider"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = ["textContent"];
var _hoisted_5 = ["textContent"];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "betting-mobile-nav__divider"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 1,
  "class": "container container-fw header-mobile-nav__language-container"
};
var _hoisted_8 = {
  "class": "header-mobile-nav__languages-list"
};
var _hoisted_9 = ["src", "alt"];
var _hoisted_10 = {
  "class": "container container-fw header-mobile-nav__language-select-container"
};
var _hoisted_11 = ["src", "alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [!$data.languagePanelIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-bets'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'maran-token'
    },
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-token'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'about-company'
    },
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-about-company'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'sales'
    },
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__nav-link-sales'))
  }, null, 8
  /* PROPS */
  , ["textContent"]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" logout button "), $options.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: "#",
    "class": "h3_medium_m header-mobile-nav__item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Logout'))
  }, null, 8
  /* PROPS */
  , _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "https://t.me/maranbet_support",
    "class": "h3_medium_m header-mobile-nav__item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__support')),
    target: "_blank"
  }, null, 8
  /* PROPS */
  , _hoisted_5), _hoisted_6])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      to: {
        'name': _ctx.$route.params.name,
        params: {
          lang: item.slug
        }
      },
      key: item.slug,
      "class": "h3_medium betting-mobile-nav__item",
      onClick: function onClick($event) {
        return $options.selectLanguage(item.slug);
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.flag,
          alt: $data.language.name,
          "class": "betting-mobile-nav__language-flag"
        }, null, 8
        /* PROPS */
        , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [!$data.languagePanelIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "flex-row h3_medium_m header-mobile-nav__language-select",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleLanguagePanel && $options.toggleLanguagePanel.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.language.flag,
    alt: $data.language.name,
    "class": "betting-mobile-nav__language-flag"
  }, null, 8
  /* PROPS */
  , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.language.name), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./resources/js/modules/window-scroll-position.js":
/*!********************************************************!*\
  !*** ./resources/js/modules/window-scroll-position.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ windowScrollPosition)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function windowScrollPosition(propertyName) {
  return {
    data: function data() {
      return _defineProperty({}, propertyName, [0, 0]);
    },
    created: function created() {
      var _this = this;

      // Only execute this code on the client side, server sticks to [0, 0]
      if (!this.$isServer) {
        this._scrollListener = function () {
          // window.pageX/YOffset is equivalent to window.scrollX/Y, but works in IE
          // We round values because high-DPI devies can provide some really nasty subpixel values
          _this[propertyName] = [Math.round(window.pageXOffset), Math.round(window.pageYOffset)];
        }; // Call listener once to detect initial position


        this._scrollListener(); // When scrolling, update the position


        window.addEventListener('scroll', this._scrollListener);
      }
    },
    beforeDestroy: function beforeDestroy() {
      // Detach the listener when the component is gone
      window.removeEventListener('scroll', this._scrollListener);
    }
  };
}

/***/ }),

/***/ "./resources/img/app-store.svg":
/*!*************************************!*\
  !*** ./resources/img/app-store.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/app-store.svg?377b50024a07b68af668c092eca24ca6");

/***/ }),

/***/ "./resources/img/flags/ch.svg":
/*!************************************!*\
  !*** ./resources/img/flags/ch.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/ch.svg?0562e9d382bf751fe5bb037d7712006c");

/***/ }),

/***/ "./resources/img/flags/en.svg":
/*!************************************!*\
  !*** ./resources/img/flags/en.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/en.svg?d1db161d8abedb69e76db39c02ec6025");

/***/ }),

/***/ "./resources/img/flags/ru.svg":
/*!************************************!*\
  !*** ./resources/img/flags/ru.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/ru.svg?664e7b076eb492ccfc4127760dd745aa");

/***/ }),

/***/ "./resources/img/google-play.svg":
/*!***************************************!*\
  !*** ./resources/img/google-play.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/google-play.svg?ea078106c973e5c44d3732a9c9ca80f2");

/***/ }),

/***/ "./resources/img/header__coinsbit.svg":
/*!********************************************!*\
  !*** ./resources/img/header__coinsbit.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/header__coinsbit.svg?8f96e499307072191c934e3a5986ff6d");

/***/ }),

/***/ "./resources/img/header__logo--small.svg":
/*!***********************************************!*\
  !*** ./resources/img/header__logo--small.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/header__logo--small.svg?ee44eaad8ce0f28ab92bc866ad2dd1f8");

/***/ }),

/***/ "./resources/img/header__logo.svg":
/*!****************************************!*\
  !*** ./resources/img/header__logo.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/header__logo.svg?617393193fa0f845be4e9226199c0871");

/***/ }),

/***/ "./resources/img/support-header-icon.svg":
/*!***********************************************!*\
  !*** ./resources/img/support-header-icon.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/support-header-icon.svg?76ef7d679320d62100036b38e48a6c9b");

/***/ }),

/***/ "./resources/js/Views/I18.vue":
/*!************************************!*\
  !*** ./resources/js/Views/I18.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _I18_vue_vue_type_template_id_1f6460e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./I18.vue?vue&type=template&id=1f6460e1 */ "./resources/js/Views/I18.vue?vue&type=template&id=1f6460e1");
/* harmony import */ var _I18_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18.vue?vue&type=script&lang=js */ "./resources/js/Views/I18.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_I18_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_I18_vue_vue_type_template_id_1f6460e1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/I18.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Auth/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Auth/Header.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_b159f44e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=b159f44e */ "./resources/js/components/Auth/Header.vue?vue&type=template&id=b159f44e");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Header_vue_vue_type_template_id_b159f44e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Auth/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Betting/BettingHeader.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Betting/BettingHeader.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BettingHeader_vue_vue_type_template_id_db02483e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BettingHeader.vue?vue&type=template&id=db02483e */ "./resources/js/components/Betting/BettingHeader.vue?vue&type=template&id=db02483e");
/* harmony import */ var _BettingHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BettingHeader.vue?vue&type=script&lang=js */ "./resources/js/components/Betting/BettingHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BettingHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BettingHeader_vue_vue_type_template_id_db02483e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Betting/BettingHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Betting/BettingHeaderMobile.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Betting/BettingHeaderMobile.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BettingHeaderMobile_vue_vue_type_template_id_11e24ce3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BettingHeaderMobile.vue?vue&type=template&id=11e24ce3 */ "./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=template&id=11e24ce3");
/* harmony import */ var _BettingHeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BettingHeaderMobile.vue?vue&type=script&lang=js */ "./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BettingHeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BettingHeaderMobile_vue_vue_type_template_id_11e24ce3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Betting/BettingHeaderMobile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Betting/BettingMobileNav.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Betting/BettingMobileNav.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BettingMobileNav_vue_vue_type_template_id_68e1507d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BettingMobileNav.vue?vue&type=template&id=68e1507d */ "./resources/js/components/Betting/BettingMobileNav.vue?vue&type=template&id=68e1507d");
/* harmony import */ var _BettingMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BettingMobileNav.vue?vue&type=script&lang=js */ "./resources/js/components/Betting/BettingMobileNav.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BettingMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BettingMobileNav_vue_vue_type_template_id_68e1507d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Betting/BettingMobileNav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Dashboard/Header.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Dashboard/Header.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_1bd484f3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1bd484f3 */ "./resources/js/components/Dashboard/Header.vue?vue&type=template&id=1bd484f3");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_1bd484f3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dashboard/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Dashboard/HeaderMobile.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Dashboard/HeaderMobile.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderMobile_vue_vue_type_template_id_3cc56075__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=template&id=3cc56075 */ "./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=template&id=3cc56075");
/* harmony import */ var _HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeaderMobile_vue_vue_type_template_id_3cc56075__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dashboard/HeaderMobile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Dashboard/NavMobile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/NavMobile.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavMobile_vue_vue_type_template_id_6f9ee2a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavMobile.vue?vue&type=template&id=6f9ee2a2 */ "./resources/js/components/Dashboard/NavMobile.vue?vue&type=template&id=6f9ee2a2");
/* harmony import */ var _NavMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMobile.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/NavMobile.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavMobile_vue_vue_type_template_id_6f9ee2a2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dashboard/NavMobile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/Footer.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Front/Footer.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_58106fcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=58106fcc */ "./resources/js/components/Front/Footer.vue?vue&type=template&id=58106fcc");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/components/Front/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_58106fcc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/Header.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Front/Header.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_7942d3be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=7942d3be */ "./resources/js/components/Front/Header.vue?vue&type=template&id=7942d3be");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/components/Front/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_7942d3be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/HeaderMobile.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Front/HeaderMobile.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderMobile_vue_vue_type_template_id_68522b00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=template&id=68522b00 */ "./resources/js/components/Front/HeaderMobile.vue?vue&type=template&id=68522b00");
/* harmony import */ var _HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=script&lang=js */ "./resources/js/components/Front/HeaderMobile.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeaderMobile_vue_vue_type_template_id_68522b00__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/HeaderMobile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/HeaderMobileNav.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Front/HeaderMobileNav.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderMobileNav_vue_vue_type_template_id_6ae278b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMobileNav.vue?vue&type=template&id=6ae278b3 */ "./resources/js/components/Front/HeaderMobileNav.vue?vue&type=template&id=6ae278b3");
/* harmony import */ var _HeaderMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMobileNav.vue?vue&type=script&lang=js */ "./resources/js/components/Front/HeaderMobileNav.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeaderMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeaderMobileNav_vue_vue_type_template_id_6ae278b3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/HeaderMobileNav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/I18.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./resources/js/Views/I18.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_I18_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_I18_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./I18.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/I18.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Betting/BettingHeader.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Betting/BettingHeader.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BettingHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BettingHeaderMobile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Betting/BettingMobileNav.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Betting/BettingMobileNav.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BettingMobileNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingMobileNav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dashboard/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeaderMobile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dashboard/NavMobile.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/NavMobile.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavMobile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/NavMobile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/Footer.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Front/Footer.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/Header.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Front/Header.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/HeaderMobile.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Front/HeaderMobile.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeaderMobile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/HeaderMobileNav.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Front/HeaderMobileNav.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobileNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeaderMobileNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobileNav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/I18.vue?vue&type=template&id=1f6460e1":
/*!******************************************************************!*\
  !*** ./resources/js/Views/I18.vue?vue&type=template&id=1f6460e1 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_I18_vue_vue_type_template_id_1f6460e1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_I18_vue_vue_type_template_id_1f6460e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./I18.vue?vue&type=template&id=1f6460e1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/I18.vue?vue&type=template&id=1f6460e1");


/***/ }),

/***/ "./resources/js/components/Auth/Header.vue?vue&type=template&id=b159f44e":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Auth/Header.vue?vue&type=template&id=b159f44e ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_b159f44e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_b159f44e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=b159f44e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Auth/Header.vue?vue&type=template&id=b159f44e");


/***/ }),

/***/ "./resources/js/components/Betting/BettingHeader.vue?vue&type=template&id=db02483e":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Betting/BettingHeader.vue?vue&type=template&id=db02483e ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeader_vue_vue_type_template_id_db02483e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeader_vue_vue_type_template_id_db02483e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BettingHeader.vue?vue&type=template&id=db02483e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeader.vue?vue&type=template&id=db02483e");


/***/ }),

/***/ "./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=template&id=11e24ce3":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=template&id=11e24ce3 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeaderMobile_vue_vue_type_template_id_11e24ce3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingHeaderMobile_vue_vue_type_template_id_11e24ce3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BettingHeaderMobile.vue?vue&type=template&id=11e24ce3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingHeaderMobile.vue?vue&type=template&id=11e24ce3");


/***/ }),

/***/ "./resources/js/components/Betting/BettingMobileNav.vue?vue&type=template&id=68e1507d":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Betting/BettingMobileNav.vue?vue&type=template&id=68e1507d ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingMobileNav_vue_vue_type_template_id_68e1507d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BettingMobileNav_vue_vue_type_template_id_68e1507d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BettingMobileNav.vue?vue&type=template&id=68e1507d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Betting/BettingMobileNav.vue?vue&type=template&id=68e1507d");


/***/ }),

/***/ "./resources/js/components/Dashboard/Header.vue?vue&type=template&id=1bd484f3":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Header.vue?vue&type=template&id=1bd484f3 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_1bd484f3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_1bd484f3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=1bd484f3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Header.vue?vue&type=template&id=1bd484f3");


/***/ }),

/***/ "./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=template&id=3cc56075":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=template&id=3cc56075 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_template_id_3cc56075__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_template_id_3cc56075__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeaderMobile.vue?vue&type=template&id=3cc56075 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/HeaderMobile.vue?vue&type=template&id=3cc56075");


/***/ }),

/***/ "./resources/js/components/Dashboard/NavMobile.vue?vue&type=template&id=6f9ee2a2":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/NavMobile.vue?vue&type=template&id=6f9ee2a2 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavMobile_vue_vue_type_template_id_6f9ee2a2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavMobile_vue_vue_type_template_id_6f9ee2a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavMobile.vue?vue&type=template&id=6f9ee2a2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/NavMobile.vue?vue&type=template&id=6f9ee2a2");


/***/ }),

/***/ "./resources/js/components/Front/Footer.vue?vue&type=template&id=58106fcc":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Front/Footer.vue?vue&type=template&id=58106fcc ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_58106fcc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_58106fcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=58106fcc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Footer.vue?vue&type=template&id=58106fcc");


/***/ }),

/***/ "./resources/js/components/Front/Header.vue?vue&type=template&id=7942d3be":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Front/Header.vue?vue&type=template&id=7942d3be ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_7942d3be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_7942d3be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=7942d3be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Header.vue?vue&type=template&id=7942d3be");


/***/ }),

/***/ "./resources/js/components/Front/HeaderMobile.vue?vue&type=template&id=68522b00":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Front/HeaderMobile.vue?vue&type=template&id=68522b00 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_template_id_68522b00__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobile_vue_vue_type_template_id_68522b00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeaderMobile.vue?vue&type=template&id=68522b00 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobile.vue?vue&type=template&id=68522b00");


/***/ }),

/***/ "./resources/js/components/Front/HeaderMobileNav.vue?vue&type=template&id=6ae278b3":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Front/HeaderMobileNav.vue?vue&type=template&id=6ae278b3 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobileNav_vue_vue_type_template_id_6ae278b3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeaderMobileNav_vue_vue_type_template_id_6ae278b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeaderMobileNav.vue?vue&type=template&id=6ae278b3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/HeaderMobileNav.vue?vue&type=template&id=6ae278b3");


/***/ }),

/***/ "./node_modules/vue-window-size/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-window-size/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));var e,i=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"),n=__webpack_require__(/*! window-resize-subject */ "./node_modules/window-resize-subject/dist/index.common.js"),t="undefined"!=typeof window,u=function(e){return null!=e?e:t?window.innerWidth:0},r=function(e){return null!=e?e:t?window.innerHeight:0},o=function(e){var n,t=0,o=e(),d=i.reactive({width:u(null==n?void 0:n.width),height:r(null==n?void 0:n.height)});o.addObserver("composition-api",(function(e){var i=e.width,n=e.height;d.width=i,d.height=n}));return function(){return 0===t&&o.subscribe().dispatch(),++t,i.onUnmounted((function(){0===(t=Math.max(t-1,0))&&o.unsubscribe()})),{width:i.computed((function(){return d.width})),height:i.computed((function(){return d.height}))}}}((function(){return e||(e=new n.WindowResizeSubject),e}));exports.useWindowSize=o;


/***/ }),

/***/ "./node_modules/window-resize-subject/dist/index.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/window-resize-subject/dist/index.common.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));var e=function(){function e(e){this._observers=new Map,this._subscribed=!1;var t=(null!=e?e:{}).delay,i=void 0===t?33:t;this._delay=i,this._handler=this._handleResize.bind(this)}return e.prototype.addObserver=function(e,t){return this._observers.set(e,t),t(this._getEvent()),this},e.prototype.deleteObserver=function(e){return this._observers.delete(e),this},e.prototype.deleteObservers=function(){return this._observers.clear(),this},e.prototype.notifyObservers=function(e){return this._observers.forEach((function(t){t(e)})),this},e.prototype.subscribe=function(){return"undefined"==typeof window||this._subscribed||(window.addEventListener("resize",this._handler),window.addEventListener("orientationchange",this._handler),this._subscribed=!0),this},e.prototype.unsubscribe=function(){return this._subscribed?(window.removeEventListener("resize",this._handler),window.removeEventListener("orientationchange",this._handler),this._subscribed=!1,this):this},e.prototype.setDelay=function(e){return this._delay=e,this},e.prototype.hasObserver=function(){return this._observers.size>0},e.prototype.dispatch=function(){return this._dispatch(),this},e.prototype._getEvent=function(){return"undefined"==typeof window?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight}},e.prototype._dispatch=function(){var e=this._getEvent();this.notifyObservers(e)},e.prototype._handleResize=function(){var e=this;clearTimeout(this._timer),this._timer=setTimeout((function(){e._dispatch()}),this._delay)},e}();exports.WindowResizeSubject=e;


/***/ })

}]);