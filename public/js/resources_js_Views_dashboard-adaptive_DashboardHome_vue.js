"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_dashboard-adaptive_DashboardHome_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_adding_funds_AddingFundsDesktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/adding-funds/AddingFundsDesktop */ "./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue");
/* harmony import */ var _components_witchdraw_funds_WitchdrawFundsDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/witchdraw-funds/WitchdrawFundsDesktop */ "./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddingFundsWindowDesktop: _components_adding_funds_AddingFundsDesktop__WEBPACK_IMPORTED_MODULE_1__["default"],
    WithdrawFundsWindowDesktop: _components_witchdraw_funds_WitchdrawFundsDesktop__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      windowStatus: false,
      witchdrawWindowStatus: false,
      wallet_address: ''
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["getBalance"])),
  mounted: function mounted() {
    this.$store.dispatch("fetchBalance");
    this.getWalletAddress();
  },
  methods: {
    addFundsWindow: function addFundsWindow() {
      this.windowStatus = !this.windowStatus;
    },
    toggleWitchdrawWindow: function toggleWitchdrawWindow() {
      this.witchdrawWindowStatus = !this.witchdrawWindowStatus;
    },
    getWalletAddress: function getWalletAddress() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/balance/wallet');

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.wallet_address = data.wallet_address;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['windowStatus'],
  data: function data() {
    return {
      step: 1,
      currency: '',
      currency_count: 0,
      currency_price: 0,
      maran_count: 0,
      coinsList: [],
      maran_price: 0,
      system_wallet: '',
      payment_reference: '',
      transaction: ''
    };
  },
  methods: {
    step_next: function step_next() {
      if (this.currency_count === 0) {
        return false;
      }

      this.step += 1;

      if (this.step === 2) {
        this.getSystemWallet();
      }

      if (this.step === 2) {
        this.registerTransaction();
      }
    },
    close: function close() {
      // this.windowStatus = false
      this.$emit('addFundsWindow');
    },
    getMaranCourse: function getMaranCourse() {
      var _this = this;

      axios.get('/api/currencies/MARAN').then(function (res) {
        if (res.status === 200) {
          _this.maran_price = res.data.price;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCurrencyPrice: function getCurrencyPrice() {
      var _this2 = this;

      axios.get('/api/currencies/' + this.currency).then(function (res) {
        if (res.status === 200) {
          _this2.currency_price = res.data.price;

          _this2.calculateCurrencyCount();
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCoinsList: function getCoinsList() {
      var _this3 = this;

      axios.get('/api/currencies').then(function (res) {
        if (res.status === 200) {
          _this3.coinsList = res.data;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    calculateCurrencyCount: function calculateCurrencyCount() {
      this.maran_count = (this.currency_count * this.currency_price / this.maran_price).toFixed(2);
    },
    getSystemWallet: function getSystemWallet() {
      var _this4 = this;

      axios.get('/api/systemwallets/' + this.currency).then(function (res) {
        if (res.status === 200) {
          _this4.system_wallet = res.data.wallet;
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    registerTransaction: function registerTransaction() {
      var _this5 = this;

      // new transaction
      axios.post('/api/adding-funds/new', {
        unit: this.currency,
        // address: this.system_wallet, // system wallet getting from backend
        // payment_reference: null, // payment reference is create app in backend
        amount: this.currency_count,
        // callback_url: null, // callback url is static
        // timeout: 10, // timeout is static
        // confirmations: 3 // confirmations is static
        user_wallet: "no_wallet"
      }).then(function (res) {
        if (res.status === 200) {
          _this5.transaction = res.data;
          console.log('payment is pending');
        }
      })["catch"](function (e) {
        console.log(e);
      }); // await axios.post('/api/transactions/add', {
      //   maran_count: this.maran_count,
      //   coin_count: this.currency_count,
      //   user_wallet: this.currency_wallet
      // }).then((res) => {
      //   if(res.status === 200) {
      //     this.payment_reference = res.data.id
      //
      //     axios.post('/api/adding-funds/new', {
      //       'unit': this.currency,
      //       'address': this.currency_wallet,
      //       'payment_reference': this.payment_reference,
      //       'amount': this.currency_count
      //     }).then((res) => {
      //       if(res.status === 200) {
      //         console.log('success')
      //       }
      //     }).catch((err) => {
      //       console.log(err)
      //     })
      //   }
      // }).catch((err) => {
      //   console.log(err)
      // })
    },
    setTxHash: function setTxHash() {
      var _this6 = this;

      if (!this.transaction.tx_hash.length) {
        this.$toast.error("Введите hash ранзакции для подтверждения платежа. Без него платеж не будет зачислен.", {
          position: "bottom",
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

      axios.post("/api/adding-funds/adding-tx-hash/".concat(this.transaction.id), this.transaction).then(function (res) {
        if (res.status !== 200) {
          console.log(res);
        }

        _this6.close();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.getCoinsList();
    this.getMaranCourse();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["witchdrawWindowStatus"],
  data: function data() {
    return {
      amount: 0,
      wallet: '',
      success: false,
      comission: null,
      amount_with_comission: 0
    };
  },
  methods: {
    close: function close() {
      this.$emit("toggleWitchdrawWindow");
    },
    createOrder: function createOrder() {
      var _this = this;

      if (this.amount === 0) {
        return false;
      }

      axios.post('/api/witchdrawts/add', {
        amount: this.amount,
        wallet: this.wallet
      }).then(function (res) {
        if (res.status === 200) {
          _this.success = !_this.success;

          _this.$toast.success("Заявка на вывод успешно создана. Ожидайте поступления средств.", {
            position: "bottom",
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
      })["catch"](function (err) {
        _this.$toast.error(err.response.data.message, {
          position: "bottom",
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
      });
    },
    calculateComission: function calculateComission() {
      this.amount_with_comission = this.amount;

      if (this.comission && this.comission !== null) {
        if (this.comission.value_percent) {
          this.amount_with_comission += this.comission.value_percent * this.amount / 100;
        }

        if (this.comission.value_fixed) {
          this.amount_with_comission += this.comission.value_fixed;
        }
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/api/comission/get/witchdraw');

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this2.comission = data;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getBalance"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=template&id=43de2292":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=template&id=43de2292 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_maran_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/maran-icon.svg */ "./resources/img/maran-icon.svg");


var _hoisted_1 = {
  "class": "da-dashboard-home"
};
var _hoisted_2 = {
  key: 0,
  "class": "da-widget da-dashboard-home__wallet-info"
};
var _hoisted_3 = {
  "class": "da-widget da-dashboard-home__wallet"
};
var _hoisted_4 = {
  "class": "da-dashboard-home__wallet-token"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_maran_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "da-dashboard-home__maran-icon",
  alt: "Maran"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "da-dashboard-home__text-big"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "da-dashboard-home__text-small"
}, "Текущий баланс", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "da-dashboard-home__wallet-actions"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "da-dashboard-home__wallet-item-icon da-dashboard-home__wallet-item-icon-up"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "da-dashboard-home__wallet-item-text"
}, "Пополнить", -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_9, _hoisted_10];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "da-dashboard-home__wallet-item-icon da-dashboard-home__wallet-item-icon-draft"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "da-dashboard-home__wallet-item-text"
}, "Вывод средств", -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_12, _hoisted_13];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "da-dashboard-home__wallet-item-icon da-dashboard-home__wallet-item-icon-details"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "da-dashboard-home__wallet-item-text"
}, "Детализация", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_adding_funds_window_desktop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("adding-funds-window-desktop");

  var _component_withdraw_funds_window_desktop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("withdraw-funds-window-desktop");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.wallet_address && $data.wallet_address.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, " Ваш кошелек (MARAN): " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.wallet_address), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getBalance ? _ctx.getBalance.balance + " MARAN" : ""), 1
  /* TEXT */
  ), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "da-dashboard-home__wallet-item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addFundsWindow && $options.addFundsWindow.apply($options, arguments);
    })
  }, _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "da-dashboard-home__wallet-item",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleWitchdrawWindow && $options.toggleWitchdrawWindow.apply($options, arguments);
    })
  }, _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard-adaptive-transactions-history'
    },
    "class": "da-dashboard-home__wallet-item"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15, _hoisted_16];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" adding funds "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_adding_funds_window_desktop, {
    windowStatus: $data.windowStatus,
    onAddFundsWindow: $options.addFundsWindow
  }, null, 8
  /* PROPS */
  , ["windowStatus", "onAddFundsWindow"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_withdraw_funds_window_desktop, {
    witchdrawWindowStatus: $data.witchdrawWindowStatus,
    onToggleWitchdrawWindow: $options.toggleWitchdrawWindow
  }, null, 8
  /* PROPS */
  , ["witchdrawWindowStatus", "onToggleWitchdrawWindow"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_maran_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../img/maran-icon.svg */ "./resources/img/maran-icon.svg");


var _hoisted_1 = {
  key: 0,
  "class": "adding-funds-desktop"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adding-funds-desktop__back"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "adding-funds-desktop__window"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "aui-heading_2 adding-funds-desktop__title"
}, "Пополнить баланс", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "adding-funds-desktop__steps-text"
};
var _hoisted_6 = {
  "class": "adding-funds-desktop__group"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Выберите валюту пополнения", -1
/* HOISTED */
);

var _hoisted_8 = ["value"];
var _hoisted_9 = {
  "class": "adding-funds-desktop__row"
};
var _hoisted_10 = {
  "class": "adding-funds-desktop__group"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Сумма пополнения:", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "adding-funds-desktop__group"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Вы получите:", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "button button__standard adding-funds-desktop__button",
  type: "submit"
}, "Далее ", -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 1,
  "class": "adding-funds-desktop__step_3"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_maran_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "adding-funds-desktop__transaction-send",
  alt: "Maran"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "adding-funds-desktop__group"
};
var _hoisted_18 = {
  "class": "adding-funds-desktop__box"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "После того как вы сделаете перевод, у вас отобразится хэш транзакции. Введите его в это поле для подтверждения перевода:", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.windowStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adding-funds-desktop__close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.close && $options.close.apply($options, arguments);
    })
  }), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, "Шаг " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.step) + " / 2", 1
  /* TEXT */
  ), $data.step === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 0,
    "class": "adding-funds-desktop__step_1",
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.step_next && $options.step_next.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "ui-input",
    name: "currency",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.currency = $event;
    }),
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.getCurrencyPrice && $options.getCurrencyPrice.apply($options, arguments);
    }),
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.coinsList, function (coin) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: coin.code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.code + ' (' + coin.name + ')'), 9
    /* TEXT, PROPS */
    , _hoisted_8);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.currency]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ui-input",
    type: "number",
    min: "0",
    step: "0.0001",
    name: "wallet",
    placeholder: "Сумма пополнения",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.currency_count = $event;
    }),
    onKeyup: _cache[4] || (_cache[4] = function ($event) {
      return $options.calculateCurrencyCount();
    }),
    required: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.currency_count]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ui-input",
    type: "text",
    name: "maran_count",
    placeholder: "Сколько получите",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.maran_count = $event;
    }),
    disabled: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.maran_count]])])]), _hoisted_14], 32
  /* HYDRATE_EVENTS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("      <form class=\"adding-funds-desktop__step_2\" v-if=\"step === 2\" @submit.prevent=\"step_next\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <div class=\"adding-funds-desktop__group\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("          <p>Введите кошелек {{ currency }}, с которого будете пополнять баланс:</p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("          <input class=\"ui-input\" type=\"text\" :placeholder=\"'Ваш кошелек ' + currency\" v-model=\"currency_wallet\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                 required/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <button class=\"button button__standard adding-funds-desktop__button\" type=\"submit\">Далее"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </button>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("      </form>"), $data.step === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Для пополнения баланса на " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.maran_count) + " Maran, переведите " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currency_count + ' ' + $data.currency) + " на кошелек ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.system_wallet), 1
  /* TEXT */
  ), _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "ui-input",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.transaction.tx_hash = $event;
    }),
    placeholder: "Hash транзакции"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.transaction.tx_hash]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "button button__standard adding-funds-desktop__button",
    type: "button",
    onClick: _cache[8] || (_cache[8] = function () {
      return $options.setTxHash && $options.setTxHash.apply($options, arguments);
    })
  }, "Готово ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "withdraw-funds-desktop"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "withdraw-funds-desktop__back"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "withdraw-funds-desktop__window"
};
var _hoisted_4 = {
  key: 0
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "aui-heading_2 witchdraw-funds-desktop__heading"
}, "Заявка на вывод отправлена!", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "witchdraw-funds-desktop__success"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Средства будут зачислены в течение 48 часов. ");

var _hoisted_8 = {
  key: 0
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" За вывод средств взымается комиссия в размере: ");

var _hoisted_11 = ["textContent"];
var _hoisted_12 = ["textContent"];
var _hoisted_13 = ["textContent"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "aui-heading_2 witchdraw-funds-desktop__heading"
}, "Вывод средств", -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 0,
  "class": "witchdraw-funds-desktop__comission-alert"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" За вывод средств взымается комиссия в размере: ");

var _hoisted_17 = ["textContent"];
var _hoisted_18 = ["textContent"];
var _hoisted_19 = ["textContent"];
var _hoisted_20 = {
  "class": "withdraw-funds-desktop__group"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Сумма для вывода: ");

var _hoisted_22 = ["textContent"];
var _hoisted_23 = {
  "class": "withdraw-funds-desktop__group"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Кошелек для вывода (MARAN):", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "button button__standard withdraw-funds-desktop__button"
}, "Вывести средства", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.witchdrawWindowStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "withdraw-funds-desktop__close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.close && $options.close.apply($options, arguments);
    })
  }), $data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [_hoisted_7, $data.comission && $data.comission !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, [_hoisted_9, _hoisted_10, $data.comission.value_percent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comission.value_percent + '%')
  }, null, 8
  /* PROPS */
  , _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.comission.value_percent && $data.comission.value_fixed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.и)
  }, null, 8
  /* PROPS */
  , _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.comission.value_fixed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 2,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comission.value_fixed + 'MARAN')
  }, null, 8
  /* PROPS */
  , _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 1,
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.createOrder();
    }, ["prevent"]))
  }, [_hoisted_14, $data.comission && $data.comission !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, [_hoisted_16, $data.comission.value_percent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comission.value_percent + '%')
  }, null, 8
  /* PROPS */
  , _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.comission.value_percent && $data.comission.value_fixed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.и)
  }, null, 8
  /* PROPS */
  , _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.comission.value_fixed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 2,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.comission.value_fixed + 'MARAN')
  }, null, 8
  /* PROPS */
  , _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_21, $data.amount_with_comission ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('(c комиссией: ' + $data.amount_with_comission + ' MARAN)')
  }, null, 8
  /* PROPS */
  , _hoisted_22)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "ui-input",
    placeholder: "Сумма для вывода",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.amount = $event;
    }),
    min: "0",
    max: "getBalance",
    step: "0.01",
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.calculateComission && $options.calculateComission.apply($options, arguments);
    }),
    required: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.amount]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "ui-input",
    placeholder: "Кошелек MARAN",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.wallet = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.wallet]])]), _hoisted_25], 32
  /* HYDRATE_EVENTS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/img/maran-icon.svg":
/*!**************************************!*\
  !*** ./resources/img/maran-icon.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/maran-icon.svg?99167ba1b33fbab8cefc527e9d367dba");

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/DashboardHome.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/DashboardHome.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardHome_vue_vue_type_template_id_43de2292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardHome.vue?vue&type=template&id=43de2292 */ "./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=template&id=43de2292");
/* harmony import */ var _DashboardHome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardHome.vue?vue&type=script&lang=js */ "./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_maran_new_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_maran_new_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DashboardHome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardHome_vue_vue_type_template_id_43de2292__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/dashboard-adaptive/DashboardHome.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddingFundsDesktop_vue_vue_type_template_id_3f7b99d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4 */ "./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4");
/* harmony import */ var _AddingFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddingFundsDesktop.vue?vue&type=script&lang=js */ "./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_maran_new_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_maran_new_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddingFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddingFundsDesktop_vue_vue_type_template_id_3f7b99d4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WitchdrawFundsDesktop_vue_vue_type_template_id_16d2772e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e */ "./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e");
/* harmony import */ var _WitchdrawFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WitchdrawFundsDesktop.vue?vue&type=script&lang=js */ "./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_maran_new_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_maran_new_loc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WitchdrawFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WitchdrawFundsDesktop_vue_vue_type_template_id_16d2772e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardHome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardHome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardHome.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddingFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddingFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddingFundsDesktop.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WitchdrawFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WitchdrawFundsDesktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WitchdrawFundsDesktop.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=template&id=43de2292":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=template&id=43de2292 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardHome_vue_vue_type_template_id_43de2292__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardHome_vue_vue_type_template_id_43de2292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardHome.vue?vue&type=template&id=43de2292 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/DashboardHome.vue?vue&type=template&id=43de2292");


/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4 ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddingFundsDesktop_vue_vue_type_template_id_3f7b99d4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddingFundsDesktop_vue_vue_type_template_id_3f7b99d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/adding-funds/AddingFundsDesktop.vue?vue&type=template&id=3f7b99d4");


/***/ }),

/***/ "./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WitchdrawFundsDesktop_vue_vue_type_template_id_16d2772e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WitchdrawFundsDesktop_vue_vue_type_template_id_16d2772e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/dashboard-adaptive/components/witchdraw-funds/WitchdrawFundsDesktop.vue?vue&type=template&id=16d2772e");


/***/ })

}]);