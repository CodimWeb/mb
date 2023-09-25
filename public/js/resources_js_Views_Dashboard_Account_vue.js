"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Dashboard_Account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Account.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Account.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Dashboard_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Dashboard/Nav */ "./resources/js/components/Dashboard/Nav.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_window_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-window-size */ "./node_modules/vue-window-size/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      email: null,
      wallet: null
    };
  },
  methods: {
    showError: function showError(text) {
      this.$toast.error(text, {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    showSuccess: function showSuccess(text) {
      this.$toast.success(text, {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    sendVerificationEmail: function sendVerificationEmail() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/verify-email', {}).then(function (res) {
        if (res.data.success === false) {
          _this.showError("Something went wrong");
        } else {
          _this.showSuccess("Email was sent successfully");
        }

        setTimeout(function () {
          window.location.reload();
        }, 3000);
      })["catch"](function (err) {
        _this.showError("Error");

        if (err.statusCode === 401) {
          _this.showError("Please, re-auth first");
        }

        setTimeout(function () {
          window.location.reload();
        }, 3000);
      });
    },
    walletSubmit: function walletSubmit() {
      var _this2 = this;

      if (this.wallet === null || !this.wallet.length) {
        this.showError("Input your wallet address");
        return false;
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/wallet/submit', {
        wallet: this.wallet
      }).then(function (res) {
        if (res.data.success === false) {
          _this2.showError("Something went wrong");
        } else {
          _this2.showSuccess("Wallet address was added successfully");
        }

        setTimeout(function () {
          window.location.reload();
        }, 3000);
      })["catch"](function (err) {
        _this2.showError("Error");

        if (err.statusCode === 401) {
          _this2.showError("Please, re-auth first");
        }

        setTimeout(function () {
          window.location.reload();
        }, 3000);
      });
    }
  },
  components: {
    Nav: _components_Dashboard_Nav__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({
    user: function user() {
      return this.$store.getters.user;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)([])),
  mounted: function mounted() {
    if (this.user) {
      this.email = this.user.email;
      this.wallet = this.user.wallet;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Nav.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Nav.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread({
    user: function user() {
      return this.$store.getters.user;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getActualBalance"])),
  mounted: function mounted() {
    if (this.user) {
      this.$store.dispatch("fetchActualBalance");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Account.vue?vue&type=template&id=f9a7253a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Account.vue?vue&type=template&id=f9a7253a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "dashboard-main"
};
var _hoisted_2 = ["textContent"];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "block h4_medium"
}, "Email address", -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 0,
  "class": "flex-column"
};
var _hoisted_5 = ["textContent"];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " ", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "flex-row dashboard-main__actions"
};
var _hoisted_8 = {
  "class": "flex-row dashboard-main__email-container"
};
var _hoisted_9 = {
  "class": "input-auth-group"
};
var _hoisted_10 = ["textContent"];
var _hoisted_11 = ["textContent"];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " ", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "block h4_medium"
}, "Wallet address", -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 1,
  "class": "flex-column"
};
var _hoisted_15 = ["textContent"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "flex-row dashboard-main__actions"
};
var _hoisted_18 = {
  "class": "flex-row dashboard-main__wallet-container"
};
var _hoisted_19 = {
  "class": "input-auth-group"
};
var _hoisted_20 = ["textContent"];
var _hoisted_21 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "h3_semibold dashboard__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Account'))
  }, null, 8
  /* PROPS */
  , _hoisted_2), _hoisted_3, !$options.user.email_verified_at ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h-6",
    style: {
      "color": "red"
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('You Email address is not verified'))
  }, null, 8
  /* PROPS */
  , _hoisted_5)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'dashboard-main__promo-input': true,
      'input-auth--filled': $options.user.email !== null && $options.user.email !== ''
    }),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.email = $event;
    }),
    ref: "email"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-auth-name",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$refs.email.focus();
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Enter email'))
  }, null, 8
  /* PROPS */
  , _hoisted_10)]), !$options.user.email_verified_at ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "betting-button dashboard-main__email-button",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.sendVerificationEmail();
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Verify'))
  }, null, 8
  /* PROPS */
  , _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_12, _hoisted_13, !$options.user.wallet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h-6",
    style: {
      "color": "red"
    },
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Please add your wallet address'))
  }, null, 8
  /* PROPS */
  , _hoisted_15)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'dashboard-main__promo-input': true,
      'input-auth--filled': $options.user.wallet !== null && $options.user.wallet !== ''
    }),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.wallet = $event;
    }),
    ref: "wallet"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.wallet]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-auth-name",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.$refs.wallet.focus();
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Enter wallet'))
  }, null, 8
  /* PROPS */
  , _hoisted_20)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-main__wallet-button",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.walletSubmit();
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Save'))
  }, null, 8
  /* PROPS */
  , _hoisted_21)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Nav.vue?vue&type=template&id=ac3532a6":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Nav.vue?vue&type=template&id=ac3532a6 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex-column dashboard-nav"
};
var _hoisted_2 = {
  "class": "flex-column dashboard-nav__balance"
};
var _hoisted_3 = ["textContent"];
var _hoisted_4 = {
  "class": "flex-row h4_bold dashboard-nav__balance-value"
};
var _hoisted_5 = {
  "class": "flex-column dashboard-nav__menu"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-results"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-wallet"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-history"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-help"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-results"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-favorites"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  href: "https://t.me/maranbet_support",
  "class": "flex-row t1_medium dashboard-nav__item",
  target: "_blank"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-nav__icon dashboard-nav__icon-telegram"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t3_regular dashboard-nav__balance-text",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('My balance'))
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getActualBalance.display_balance), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard'
    },
    "class": "flex-row t1_medium dashboard-nav__item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Account')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-wallet'
    },
    "class": "flex-row t1_medium dashboard-nav__item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Wallet')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-history'
    },
    "class": "flex-row t1_medium dashboard-nav__item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('History')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-help'
    },
    "class": "flex-row t1_medium dashboard-nav__item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Help')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-results'
    },
    "class": "flex-row t1_medium dashboard-nav__item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Results')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-favourites'
    },
    "class": "flex-row t1_medium dashboard-nav__item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Favorites')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('header__support')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'betting'
    },
    "class": "flex-row t1_medium dashboard-nav__back",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Back to betting'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]);
}

/***/ }),

/***/ "./resources/js/Views/Dashboard/Account.vue":
/*!**************************************************!*\
  !*** ./resources/js/Views/Dashboard/Account.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Account_vue_vue_type_template_id_f9a7253a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=f9a7253a */ "./resources/js/Views/Dashboard/Account.vue?vue&type=template&id=f9a7253a");
/* harmony import */ var _Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js */ "./resources/js/Views/Dashboard/Account.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Account_vue_vue_type_template_id_f9a7253a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Dashboard/Account.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Dashboard/Nav.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Dashboard/Nav.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_ac3532a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=ac3532a6 */ "./resources/js/components/Dashboard/Nav.vue?vue&type=template&id=ac3532a6");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/Nav.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_vue_vue_type_template_id_ac3532a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dashboard/Nav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Dashboard/Account.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Views/Dashboard/Account.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Account.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Account.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dashboard/Nav.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Nav.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Nav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Dashboard/Account.vue?vue&type=template&id=f9a7253a":
/*!********************************************************************************!*\
  !*** ./resources/js/Views/Dashboard/Account.vue?vue&type=template&id=f9a7253a ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Account_vue_vue_type_template_id_f9a7253a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Account_vue_vue_type_template_id_f9a7253a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Account.vue?vue&type=template&id=f9a7253a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Account.vue?vue&type=template&id=f9a7253a");


/***/ }),

/***/ "./resources/js/components/Dashboard/Nav.vue?vue&type=template&id=ac3532a6":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Nav.vue?vue&type=template&id=ac3532a6 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_ac3532a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_ac3532a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=template&id=ac3532a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/Nav.vue?vue&type=template&id=ac3532a6");


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