"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Dashboard_Wallet_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Wallet.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Wallet.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Dashboard_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Dashboard/Nav */ "./resources/js/components/Dashboard/Nav.vue");
/* harmony import */ var _components_Dashboard_AddFunds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Dashboard/AddFunds */ "./resources/js/components/Dashboard/AddFunds.vue");
/* harmony import */ var _components_Dashboard_WithdrawFunds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Dashboard/WithdrawFunds */ "./resources/js/components/Dashboard/WithdrawFunds.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-window-size */ "./node_modules/vue-window-size/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      addFundsIsOpen: false,
      withdrawFundsIsOpen: false,
      promo_code: null,
      coin_summ: 0
    };
  },
  methods: {
    toggleAddFunds: function toggleAddFunds() {
      this.addFundsIsOpen = !this.addFundsIsOpen;
    },
    toggleWithdrawFunds: function toggleWithdrawFunds() {
      if (this.showBalance === 0) {
        this.showError(this.$t('Top up your balance to perform this operation'));
        return false;
      }

      this.withdrawFundsIsOpen = !this.withdrawFundsIsOpen;
    },
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
    promoSubmit: function promoSubmit() {
      var _this = this;

      if (this.promo_code === null || !this.promo_code.length) {
        this.showError("Input your promo code");
        return false;
      }

      axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/actual/promo-code/submit', {
        code: this.promo_code
      }).then(function (res) {
        if (res.data.success === false) {
          _this.showError("You cannot use this promo code");
        } else {
          _this.showSuccess("Promo code successfully applied");

          _this.promo_code = null;

          _this.$store.dispatch("fetchActualBalance");
        }
      })["catch"](function (err) {
        _this.showError("You cannot use this promo code");

        if (err.statusCode === 401) {
          _this.showError("Please, re-auth first");
        }
      });
    },
    addFunds: function addFunds() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/actual/adding-funds/new-payment', {
        summ: this.$refs.coin_summ.value
      }).then(function (res) {
        _this2.$refs.coin_summ.value = '';
      })["catch"](function (err) {
        console.log(err);
      });
    },
    withdraw: function withdraw() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/actual/withdraw-funds/new', {
        summ: this.$refs.coin_summ.value
      }).then(function (res) {
        _this3.$refs.coin_summ.value = '';
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  components: {
    Nav: _components_Dashboard_Nav__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddFunds: _components_Dashboard_AddFunds__WEBPACK_IMPORTED_MODULE_1__["default"],
    WithdrawFunds: _components_Dashboard_WithdrawFunds__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({
    user: function user() {
      return this.$store.getters.user;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["getActualBalance"])),
  mounted: function mounted() {
    if (this.user) {
      this.$store.dispatch("fetchActualBalance");
    }
  },
  setup: function setup() {
    var _useWindowSize = (0,vue_window_size__WEBPACK_IMPORTED_MODULE_3__.useWindowSize)(),
        width = _useWindowSize.width,
        height = _useWindowSize.height;

    return {
      windowWidth: width,
      windowHeight: height
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/AddFunds.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/AddFunds.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      step: 1,
      coinCode: '',
      coinWallet: '',
      coinsList: [],
      isCoinsListVisible: false,
      maran_amount: null,
      coin_amount: null,
      tx_hash: '',
      maran_price: null,
      coin_price: null,
      transaction: null,
      filled: {
        coin_field: false,
        maran_field: false,
        tx: false
      },
      success: false
    };
  },
  methods: {
    nextStep: function nextStep() {
      if (this.step === 1) {
        if (this.maran_amount < 1 || this.coin_amount <= 0 || this.coinCode === '') {
          this.showError("Заполните поля");
          return false;
        }
      }

      if (this.step === 2) {
        if (this.tx_hash === null) {
          this.showError("Введите hash ранзакции для подтверждения платежа. Без него платеж не будет зачислен.");
          return false;
        } else {
          this.createTransaction();
        }
      }

      this.step += 1;
    },
    backStep: function backStep() {
      this.step -= 1;
    },
    getCoinsList: function getCoinsList() {
      var _this = this;

      axios.get('/api/actual/adding-funds/coins/list').then(function (res) {
        _this.coinsList = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getMaranCourse: function getMaranCourse() {
      var _this2 = this;

      axios.get('/api/actual/adding-funds/coins/price/MARAN').then(function (res) {
        if (res.status === 200) {
          _this2.maran_price = res.data.price;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCurrencyPrice: function getCurrencyPrice() {
      var _this3 = this;

      axios.get("/api/actual/adding-funds/coins/price/".concat(this.coinCode)).then(function (res) {
        _this3.coin_price = res.data.price;

        _this3.calculateCurrencyCount();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    calculateCurrencyCount: function calculateCurrencyCount() {
      this.maran_amount = (this.coin_amount * this.coin_price / this.maran_price).toFixed(2);
    },
    setCoin: function setCoin(coinCode) {
      var _this4 = this;

      this.coinCode = coinCode;
      this.filled.maran_field = true;
      this.toggleCoinsList();
      this.getCurrencyPrice();
      this.$refs.coin_amount.focus(); // wallet

      this.coinsList.forEach(function (coin) {
        if (coin.code === _this4.coinCode) {
          _this4.coinWallet = coin.wallet;
        }
      });
    },
    toggleCoinsList: function toggleCoinsList() {
      this.isCoinsListVisible = !this.isCoinsListVisible;
    },
    checkConverterFields: function checkConverterFields() {
      if (this.coin_amount > 0) {
        this.filled.coin_field = true;
        this.filled.maran_field = true;
      }

      if (this.coin_amount < 0) {
        this.coin_amount = null;
        this.maran_amount = null;
      }

      this.calculateCurrencyCount();
    },
    checkTxField: function checkTxField() {
      this.filled.tx = this.tx_hash.length > 5;
    },
    copyWallet: function copyWallet() {
      this.$refs.clone.focus();
      document.execCommand('copy');
      this.showMessage(this.$t('The contract address has been copied'));
    },
    createTransaction: function createTransaction() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/actual/adding-funds/new-payment', {
                  unit: _this5.coinCode,
                  amount: _this5.coin_amount,
                  tx_hash: _this5.tx_hash
                }).then(function (res) {
                  _this5.success = true;
                })["catch"](function (err) {
                  console.log(err);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showMessage: function showMessage(text) {
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
    }
  },
  mounted: function mounted() {
    this.getCoinsList();
    this.getMaranCourse();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      amount: null,
      wallet: '',
      filled: {
        amount: false,
        wallet: false
      },
      success: false
    };
  },
  methods: {
    checkFilled: function checkFilled(field) {
      if (field === 'wallet') {
        this.filled.wallet = this.wallet.length;
      }

      if (field === 'amount') {
        this.filled.amount = this.amount >= 1;

        if (this.amount < 1) {
          this.amount = null;
          this.showError(this.$t('The minimum withdrawal amount is 1 MARAN'));
        }
      }
    },
    sendOrder: function sendOrder() {
      var _this = this;

      if (!this.filled.amount || !this.filled.wallet) {
        this.showError($t('Check that the fields are filled in correctly'));
        return false;
      }

      axios.post("/api/actual/withdraw-funds/new", {
        sum: this.amount,
        wallet: this.wallet
      }).then(function (res) {
        _this.success = !_this.success;

        _this.$store.dispatch("fetchActualBalance");
      })["catch"](function (err) {
        _this.showError($t('An error occurred while submitting the form'));
      });
    },
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Wallet.vue?vue&type=template&id=b3cc119a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Wallet.vue?vue&type=template&id=b3cc119a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = {
  "class": "flex-row dashboard-main__actions"
};
var _hoisted_4 = {
  "class": "dashboard-main__balance"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-main__balance-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex-column dashboard-main__balance-content"
};
var _hoisted_7 = ["textContent"];
var _hoisted_8 = ["textContent"];
var _hoisted_9 = {
  key: 0,
  "class": "flex-row dashboard-main__buttons"
};
var _hoisted_10 = {
  "class": "wallet-summ"
};
var _hoisted_11 = {
  placeholder: "Enter amount",
  "class": /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
    'input-auth': true,
    'wallet-summ__input': true
  }),
  ref: "coin_summ",
  type: "number",
  min: "0"
};
var _hoisted_12 = ["textContent"];
var _hoisted_13 = ["textContent"];
var _hoisted_14 = {
  key: 0,
  "class": "flex-column dashboard-main__mobile-buttons"
};
var _hoisted_15 = {
  "class": "dashboard-main__mobile-buttons-grid-2"
};
var _hoisted_16 = {
  "class": "wallet-summ"
};
var _hoisted_17 = {
  placeholder: "Enter amount",
  "class": /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
    'input-auth': true,
    'wallet-summ__input': true
  }),
  ref: "coin_summ",
  type: "number",
  min: "0"
};
var _hoisted_18 = ["textContent"];
var _hoisted_19 = ["textContent"];
var _hoisted_20 = {
  "class": "flex-column dashboard-main__promo"
};
var _hoisted_21 = ["textContent"];
var _hoisted_22 = {
  "class": "flex-row dashboard-main__promo-container"
};
var _hoisted_23 = {
  "class": "input-auth-group"
};
var _hoisted_24 = ["textContent"];
var _hoisted_25 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "h3_semibold dashboard__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Wallet'))
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t2_regular dashboard-main__balance-text",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Current balance'))
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "h3_semibold dashboard-main__balance-value",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getActualBalance.display_balance + ' MARAN')
  }, null, 8
  /* PROPS */
  , _hoisted_8)])]), $setup.windowWidth > 576 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\n            class=\"betting-button dashboard-main__button dashboard-main__button-add\"\n            v-text=\"$t('Add funds')\"\n            @click=\"toggleAddFunds\"/>\n        <button\n            class=\"betting-button dashboard-main__button dashboard-main__button-withdraw\"\n            v-text=\"$t('Withdraw')\"\n            @click=\"toggleWithdrawFunds\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_11, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-main__button dashboard-main__button-add",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add funds')),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addFunds && $options.addFunds.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-main__button dashboard-main__button-withdraw",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Withdraw')),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.withdraw && $options.withdraw.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-history'
    },
    "class": "betting-button dashboard-main__button dashboard-main__button-detalisation",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Details'))
  }, null, 8
  /* PROPS */
  , ["textContent"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $setup.windowWidth <= 576 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\n            class=\"betting-button dashboard-main__button dashboard-main__button-add\"\n            v-text=\"$t('Add funds')\"\n            @click=\"toggleAddFunds\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\n            class=\"betting-button dashboard-main__button dashboard-main__button-withdraw\"\n            v-text=\"$t('Withdraw')\"\n            @click=\"toggleWithdrawFunds\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_17, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-main__button dashboard-main__button-add",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add funds')),
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.addFunds && $options.addFunds.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-main__button dashboard-main__button-withdraw",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Withdraw')),
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.withdraw && $options.withdraw.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_19)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-history'
    },
    "class": "betting-button dashboard-main__button dashboard-main__button-detalisation",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Details'))
  }, null, 8
  /* PROPS */
  , ["textContent"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" promo "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_medium dashboard-main__promo-heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Promotions'))
  }, null, 8
  /* PROPS */
  , _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'dashboard-main__promo-input': true,
      'input-auth--filled': $data.promo_code !== null && $data.promo_code !== ''
    }),
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.promo_code = $event;
    }),
    ref: "promo_code"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.promo_code]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-auth-name",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.$refs.promo_code.focus();
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Enter a promo code'))
  }, null, 8
  /* PROPS */
  , _hoisted_24)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-main__promo-button",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.promoSubmit && $options.promoSubmit.apply($options, arguments);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Submit'))
  }, null, 8
  /* PROPS */
  , _hoisted_25)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" popups "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <AddFunds v-if=\"addFundsIsOpen\" @toggle-add-funds=\"toggleAddFunds\"/>\n    <WithdrawFunds v-if=\"withdrawFundsIsOpen\" @toggle-withdraw=\"toggleWithdrawFunds\"/> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/AddFunds.vue?vue&type=template&id=31338113":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/AddFunds.vue?vue&type=template&id=31338113 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_converter_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/converter-icon.svg */ "./resources/img/converter-icon.svg");
/* harmony import */ var _img_add_funds_success_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/add-funds-success.svg */ "./resources/img/add-funds-success.svg");



var _hoisted_1 = {
  "class": "dashboard-add-funds"
};
var _hoisted_2 = {
  "class": "flex-column dashboard-add-funds__window"
};
var _hoisted_3 = ["textContent"];
var _hoisted_4 = {
  key: 1,
  "class": "flex-column dashboard-add-funds__step"
};
var _hoisted_5 = {
  key: 0,
  "class": "dashboard-add-funds__dropdown"
};
var _hoisted_6 = ["src", "alt"];
var _hoisted_7 = {
  key: 0,
  "class": "flex-column dashboard-add-funds__dropdown-list"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = ["src", "alt"];
var _hoisted_10 = {
  "class": "dashboard-add-funds__converter"
};
var _hoisted_11 = {
  "class": "flex-column dashboard-add-funds__converter-column"
};
var _hoisted_12 = {
  "class": "input-auth-group dashboard-add-funds__converter-input-group"
};
var _hoisted_13 = ["textContent"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-column dashboard-add-funds__converter-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_converter_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: "Converter",
  "class": "dashboard-add-funds__converter-icon"
})], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex-column dashboard-add-funds__converter-column"
};
var _hoisted_16 = {
  "class": "input-auth-group dashboard-add-funds__converter-input-group"
};
var _hoisted_17 = ["textContent"];
var _hoisted_18 = {
  "class": "flex-row dashboard-add-funds__button-row"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-add-funds__progress dashboard-add-funds__progress--half"
}, "1/2", -1
/* HOISTED */
);

var _hoisted_20 = ["textContent"];
var _hoisted_21 = {
  key: 2,
  "class": "dashboard-add-funds__step"
};
var _hoisted_22 = {
  "class": "dashboard-add-funds__checking"
};
var _hoisted_23 = {
  "class": "flex-column dashboard-add-funds__checking-column"
};
var _hoisted_24 = ["textContent"];
var _hoisted_25 = {
  "class": "flex-row t1_regular dashboard-add-funds__col-info"
};
var _hoisted_26 = ["src", "alt"];
var _hoisted_27 = {
  "class": "flex-column dashboard-add-funds__checking-column"
};
var _hoisted_28 = ["textContent"];
var _hoisted_29 = {
  "class": "flex-row t1_regular dashboard-add-funds__col-info"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/coins/MARAN.png",
  alt: "MARAN",
  "class": "dashboard-add-funds__dropdown-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "t1_regular dashboard-add-funds__hash-text"
};
var _hoisted_32 = ["textContent"];
var _hoisted_33 = {
  "class": "dashboard-add-funds-hash-input-container"
};
var _hoisted_34 = {
  "class": "input-auth-group dashboard-add-funds-hash-input-group"
};
var _hoisted_35 = ["textContent"];
var _hoisted_36 = {
  "class": "flex-row dashboard-add-funds__button-row"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dashboard-add-funds__progress"
}, "2/2", -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "flex-row"
};
var _hoisted_39 = ["textContent"];
var _hoisted_40 = ["textContent"];
var _hoisted_41 = {
  key: 3,
  "class": "flex-column dashboard-add-funds__success"
};
var _hoisted_42 = ["textContent"];
var _hoisted_43 = ["textContent"];
var _hoisted_44 = ["alt"];
var _hoisted_45 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dashboard-add-funds__overlay",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('toggleAddFunds');
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dashboard-add-funds__close",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('toggleAddFunds');
    })
  }), !$data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": "h4_bold dashboard-add-funds__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Top up your balance'))
  }, null, 8
  /* PROPS */
  , _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.step === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [$data.coinsList.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'flex-row dashboard-add-funds__dropdown-selected': true,
      'dashboard-add-funds__dropdown-selected--active': $data.isCoinsListVisible
    }),
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.toggleCoinsList && $options.toggleCoinsList.apply($options, arguments);
    })
  }, [this.coinCode.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: '/coins/' + $data.coinCode + '.png',
    alt: $data.coinCode,
    "class": "dashboard-add-funds__dropdown-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.coinCode === '' ? _ctx.$t('Select the deposit coin') : this.coinCode), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), $data.isCoinsListVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.coinsList, function (coin) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: coin.code,
      onClick: function onClick($event) {
        return $options.setCoin(coin.code);
      },
      "class": "flex-row dashboard-add-funds__dropdown-item"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: '/coins/' + coin.code + '.png',
      alt: $data.coinCode,
      "class": "dashboard-add-funds__dropdown-icon"
    }, null, 8
    /* PROPS */
    , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.code + ' (' + coin.name + ')'), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_8);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'input-auth--filled': $data.filled.coin_field
    }),
    ref: "coin_amount",
    type: "number",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.coin_amount = $event;
    }),
    min: "0",
    onFocusout: _cache[4] || (_cache[4] = function () {
      return $options.checkConverterFields && $options.checkConverterFields.apply($options, arguments);
    }),
    onKeyup: _cache[5] || (_cache[5] = function () {
      return $options.calculateCurrencyCount && $options.calculateCurrencyCount.apply($options, arguments);
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.coin_amount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "input-auth-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Deposit amount')),
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.$refs.coin_amount.focus();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_13)])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'input-auth--filled': $data.filled.maran_field
    }),
    ref: "maran_amount",
    type: "number",
    disabled: "",
    min: "0",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.maran_amount = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.maran_amount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "input-auth-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('You will receive')),
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.$refs.maran_amount.focus();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_17)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Next')),
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.nextStep && $options.nextStep.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_20)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.step === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_semibold dashboard-add-funds__col-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Deposit amount') + " (".concat($data.coinCode, ")"))
  }, null, 8
  /* PROPS */
  , _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: '/coins/' + $data.coinCode + '.png',
    alt: $data.coinCode,
    "class": "dashboard-add-funds__dropdown-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_26), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.coin_amount + ' ' + $data.coinCode), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_semibold dashboard-add-funds__col-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Deposit amount') + ' (MARAN)')
  }, null, 8
  /* PROPS */
  , _hoisted_28), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.maran_amount + ' MARAN'), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('To top up the balance on') + ' ' + $data.maran_amount + ' MARAN, ' + _ctx.$t('transfer') + ' ' + $data.coin_amount + ' ' + $data.coinCode + ' ' + _ctx.$t('to the wallet') + ' ' + $data.coinWallet) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dashboard-add-funds__copy-icon",
    onClick: _cache[10] || (_cache[10] = function () {
      return $options.copyWallet && $options.copyWallet.apply($options, arguments);
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "dashboard-add-funds__wallet-hidden",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.coinWallet = $event;
    }),
    onFocus: _cache[12] || (_cache[12] = function ($event) {
      return $event.target.select();
    }),
    ref: "clone"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.coinWallet]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t1_semibold dashboard-add-funds__hash-text",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('After you make the transfer, you will see the hash of the transaction. Enter it in the field to confirm the transfer'))
  }, null, 8
  /* PROPS */
  , _hoisted_32), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.tx_hash = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'input-auth--filled': $data.filled.tx
    }),
    ref: "tx_hash",
    onFocusout: _cache[14] || (_cache[14] = function () {
      return $options.checkTxField && $options.checkTxField.apply($options, arguments);
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.tx_hash]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "input-auth-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Hash of the transaction')),
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return _ctx.$refs.tx_hash.focus();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_35)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_semibold dashboard-add-funds__button-back",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Back')),
    onClick: _cache[16] || (_cache[16] = function () {
      return $options.backStep && $options.backStep.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_39), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-add-funds__button-send",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Send')),
    onClick: _cache[17] || (_cache[17] = function () {
      return $options.nextStep && $options.nextStep.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_40)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row h3_medium dashboard-add-funds__success-heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('The request has been sent'))
  }, null, 8
  /* PROPS */
  , _hoisted_42), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row t1_regular dashboard-add-funds__success-message",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('The balance will be replenished within 3 hours'))
  }, null, 8
  /* PROPS */
  , _hoisted_43), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_add_funds_success_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    "class": "dashboard-add-funds__success-image",
    alt: _ctx.$t('The request has been sent')
  }, null, 8
  /* PROPS */
  , _hoisted_44), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-add-funds__success-button",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return _ctx.$emit('toggleAddFunds');
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Close'))
  }, null, 8
  /* PROPS */
  , _hoisted_45)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=template&id=375ddfee":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=template&id=375ddfee ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_withdraw_funds_success_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/withdraw-funds-success.svg */ "./resources/img/withdraw-funds-success.svg");


var _hoisted_1 = {
  "class": "dashboard-withdraw-funds"
};
var _hoisted_2 = {
  "class": "flex-column dashboard-withdraw-funds__window"
};
var _hoisted_3 = {
  key: 0,
  "class": "flex-column dashboard-withdraw-funds__success"
};
var _hoisted_4 = ["textContent"];
var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["alt"];
var _hoisted_7 = ["textContent"];
var _hoisted_8 = {
  key: 1,
  "class": "flex-column dashboard-withdraw-funds__step"
};
var _hoisted_9 = ["textContent"];
var _hoisted_10 = {
  "class": "input-auth-group dashboard-withdraw-funds__input-group"
};
var _hoisted_11 = ["textContent"];
var _hoisted_12 = {
  "class": "input-auth-group dashboard-withdraw-funds__input-group"
};
var _hoisted_13 = ["textContent"];
var _hoisted_14 = {
  "class": "flex-row dashboard-withdraw-funds__submit-row"
};
var _hoisted_15 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dashboard-withdraw-funds__overlay",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('toggleWithdraw');
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dashboard-withdraw-funds__close",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('toggleWithdraw');
    })
  }), $data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row h3_medium dashboard-withdraw-funds__success-heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('The withdrawal request has been sent'))
  }, null, 8
  /* PROPS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row t1_regular dashboard-withdraw-funds__success-text",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('The funds will be transferred to your wallet within one business day'))
  }, null, 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_withdraw_funds_success_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: _ctx.$t('The withdrawal request has been sent'),
    "class": "dashboard-withdraw-funds__success-image"
  }, null, 8
  /* PROPS */
  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-withdraw-funds__success-button",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Close')),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('toggleWithdraw');
    })
  }, null, 8
  /* PROPS */
  , _hoisted_7)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_bold dashboard-withdraw-funds__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Withdrawal of funds'))
  }, null, 8
  /* PROPS */
  , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'input-auth--filled': $data.filled.amount
    }),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.amount = $event;
    }),
    ref: "amount",
    min: "1",
    step: "0.01",
    onFocusout: _cache[4] || (_cache[4] = function ($event) {
      return $options.checkFilled('amount');
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.amount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "input-auth-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Withdrawal amount') + ' (MARAN)'),
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.$refs.amount.focus();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_11)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-auth': true,
      'input-auth--filled': $data.filled.wallet
    }),
    ref: "wallet",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.wallet = $event;
    }),
    onFocusout: _cache[7] || (_cache[7] = function ($event) {
      return $options.checkFilled('wallet');
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.wallet]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "input-auth-name",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Wallet for withdrawal') + ' (MARAN)'),
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.$refs.wallet.focus();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "betting-button dashboard-withdraw-funds__submit-button",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Withdraw funds')),
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.sendOrder && $options.sendOrder.apply($options, arguments);
    })
  }, null, 8
  /* PROPS */
  , _hoisted_15)])]))])]);
}

/***/ }),

/***/ "./resources/img/add-funds-success.svg":
/*!*********************************************!*\
  !*** ./resources/img/add-funds-success.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/add-funds-success.svg?0cd0bc888943cd557212aa816717f228");

/***/ }),

/***/ "./resources/img/converter-icon.svg":
/*!******************************************!*\
  !*** ./resources/img/converter-icon.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/converter-icon.svg?96b5b73836a7638cfa27589f881bb268");

/***/ }),

/***/ "./resources/img/withdraw-funds-success.svg":
/*!**************************************************!*\
  !*** ./resources/img/withdraw-funds-success.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/withdraw-funds-success.svg?a15761f39cdb8c710145afff8872f165");

/***/ }),

/***/ "./resources/js/Views/Dashboard/Wallet.vue":
/*!*************************************************!*\
  !*** ./resources/js/Views/Dashboard/Wallet.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wallet_vue_vue_type_template_id_b3cc119a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wallet.vue?vue&type=template&id=b3cc119a */ "./resources/js/Views/Dashboard/Wallet.vue?vue&type=template&id=b3cc119a");
/* harmony import */ var _Wallet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wallet.vue?vue&type=script&lang=js */ "./resources/js/Views/Dashboard/Wallet.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Wallet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Wallet_vue_vue_type_template_id_b3cc119a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Dashboard/Wallet.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Dashboard/AddFunds.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Dashboard/AddFunds.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddFunds_vue_vue_type_template_id_31338113__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFunds.vue?vue&type=template&id=31338113 */ "./resources/js/components/Dashboard/AddFunds.vue?vue&type=template&id=31338113");
/* harmony import */ var _AddFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFunds.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/AddFunds.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddFunds_vue_vue_type_template_id_31338113__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dashboard/AddFunds.vue"]])
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

/***/ "./resources/js/components/Dashboard/WithdrawFunds.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Dashboard/WithdrawFunds.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WithdrawFunds_vue_vue_type_template_id_375ddfee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WithdrawFunds.vue?vue&type=template&id=375ddfee */ "./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=template&id=375ddfee");
/* harmony import */ var _WithdrawFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WithdrawFunds.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WithdrawFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WithdrawFunds_vue_vue_type_template_id_375ddfee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dashboard/WithdrawFunds.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Dashboard/Wallet.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Views/Dashboard/Wallet.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wallet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wallet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Wallet.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Wallet.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dashboard/AddFunds.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/AddFunds.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddFunds.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/AddFunds.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithdrawFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithdrawFunds_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WithdrawFunds.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Dashboard/Wallet.vue?vue&type=template&id=b3cc119a":
/*!*******************************************************************************!*\
  !*** ./resources/js/Views/Dashboard/Wallet.vue?vue&type=template&id=b3cc119a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wallet_vue_vue_type_template_id_b3cc119a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Wallet_vue_vue_type_template_id_b3cc119a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Wallet.vue?vue&type=template&id=b3cc119a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Dashboard/Wallet.vue?vue&type=template&id=b3cc119a");


/***/ }),

/***/ "./resources/js/components/Dashboard/AddFunds.vue?vue&type=template&id=31338113":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/AddFunds.vue?vue&type=template&id=31338113 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFunds_vue_vue_type_template_id_31338113__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFunds_vue_vue_type_template_id_31338113__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddFunds.vue?vue&type=template&id=31338113 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/AddFunds.vue?vue&type=template&id=31338113");


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

/***/ "./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=template&id=375ddfee":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=template&id=375ddfee ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithdrawFunds_vue_vue_type_template_id_375ddfee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithdrawFunds_vue_vue_type_template_id_375ddfee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WithdrawFunds.vue?vue&type=template&id=375ddfee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dashboard/WithdrawFunds.vue?vue&type=template&id=375ddfee");


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