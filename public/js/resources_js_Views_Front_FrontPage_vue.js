"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Front_FrontPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/FrontPage.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/FrontPage.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Front_BannerFront__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Front/BannerFront */ "./resources/js/components/Front/BannerFront.vue");
/* harmony import */ var _components_Front_FastStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Front/FastStart */ "./resources/js/components/Front/FastStart.vue");
/* harmony import */ var _components_Front_Disciplines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Front/Disciplines */ "./resources/js/components/Front/Disciplines.vue");
/* harmony import */ var _components_Front_Advantages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Front/Advantages */ "./resources/js/components/Front/Advantages.vue");
/* harmony import */ var _components_Front_CryptoCurrencies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Front/CryptoCurrencies */ "./resources/js/components/Front/CryptoCurrencies.vue");
/* harmony import */ var _components_Front_BuyCurrency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Front/BuyCurrency */ "./resources/js/components/Front/BuyCurrency.vue");
/* harmony import */ var _components_Front_Faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Front/Faq */ "./resources/js/components/Front/Faq.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BannerFront: _components_Front_BannerFront__WEBPACK_IMPORTED_MODULE_0__["default"],
    FastStart: _components_Front_FastStart__WEBPACK_IMPORTED_MODULE_1__["default"],
    Disciplines: _components_Front_Disciplines__WEBPACK_IMPORTED_MODULE_2__["default"],
    Advantages: _components_Front_Advantages__WEBPACK_IMPORTED_MODULE_3__["default"],
    CryptoCurrencies: _components_Front_CryptoCurrencies__WEBPACK_IMPORTED_MODULE_4__["default"],
    BuyCurrency: _components_Front_BuyCurrency__WEBPACK_IMPORTED_MODULE_5__["default"],
    Faq: _components_Front_Faq__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Advantages.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Advantages.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BannerFront.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BannerFront.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    getButtonLink: function getButtonLink() {
      var link;

      if (!this.user) {
        link = {
          name: 'register'
        };
      } else {
        link = {
          name: 'betting'
        };
      }

      return link;
    },
    getButtonText: function getButtonText() {
      var text;

      if (!this.user) {
        text = this.$t('Register');
      } else {
        text = this.$t('Back to betting');
      }

      return text;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BuyCurrency.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BuyCurrency.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      layer: 0
    };
  },
  methods: {
    changeLayer: function changeLayer(layer) {
      this.layer = layer;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/CryptoCurrencies.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/CryptoCurrencies.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_window_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-window-size */ "./node_modules/vue-window-size/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Disciplines.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Disciplines.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    getButtonLink: function getButtonLink() {
      var link;

      if (!this.user) {
        link = {
          name: 'register'
        };
      } else {
        link = {
          name: 'betting'
        };
      }

      return link;
    },
    getButtonText: function getButtonText() {
      var text;

      if (!this.user) {
        text = this.$t('Register');
      } else {
        text = this.$t('Back to betting');
      }

      return text;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Faq.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Faq.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      questions: [],
      display: true
    };
  },
  methods: {
    setQuestionsList: function setQuestionsList() {
      this.questions.filter(function (item, count) {
        if (count === 0) {
          item.open = true;
        } else {
          item.open = false;
        }
      });
    },
    openQuestion: function openQuestion(id) {
      this.questions.forEach(function (item) {
        item.open = item.id === id;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/actual/category/list/?language=".concat(this.$route.params.lang, "&category=faq")).then(function (res) {
      _this.questions = res.data;

      _this.setQuestionsList();
    })["catch"](function (err) {
      _this.display = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/FastStart.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/FastStart.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/FrontPage.vue?vue&type=template&id=279e6de3":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/FrontPage.vue?vue&type=template&id=279e6de3 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "front-page"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BannerFront = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BannerFront");

  var _component_FastStart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FastStart");

  var _component_Disciplines = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Disciplines");

  var _component_Advantages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Advantages");

  var _component_CryptoCurrencies = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CryptoCurrencies");

  var _component_BuyCurrency = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BuyCurrency");

  var _component_Faq = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Faq");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BannerFront), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FastStart), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Disciplines), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Advantages), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CryptoCurrencies), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BuyCurrency), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Faq)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Advantages.vue?vue&type=template&id=971b164e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Advantages.vue?vue&type=template&id=971b164e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_advantages_icon_advantage_01_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/advantages/icon-advantage-01.svg */ "./resources/img/advantages/icon-advantage-01.svg");
/* harmony import */ var _img_advantages_icon_advantage_02_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/advantages/icon-advantage-02.svg */ "./resources/img/advantages/icon-advantage-02.svg");
/* harmony import */ var _img_advantages_icon_advantage_03_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/advantages/icon-advantage-03.svg */ "./resources/img/advantages/icon-advantage-03.svg");
/* harmony import */ var _img_advantages_icon_advantage_04_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/advantages/icon-advantage-04.svg */ "./resources/img/advantages/icon-advantage-04.svg");
/* harmony import */ var _img_advantages_icon_advantage_05_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/advantages/icon-advantage-05.svg */ "./resources/img/advantages/icon-advantage-05.svg");
/* harmony import */ var _img_advantages_icon_advantage_06_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../img/advantages/icon-advantage-06.svg */ "./resources/img/advantages/icon-advantage-06.svg");







var _hoisted_1 = {
  "class": "advantages"
};
var _hoisted_2 = {
  "class": "container advantages__container"
};
var _hoisted_3 = ["textContent"];
var _hoisted_4 = {
  "class": "advantages__grid"
};
var _hoisted_5 = {
  "class": "advantages__item"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_advantages_icon_advantage_01_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "advantages__icon",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_7 = ["textContent"];
var _hoisted_8 = ["textContent"];
var _hoisted_9 = {
  "class": "advantages__item"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_advantages_icon_advantage_02_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "advantages__icon",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_11 = ["textContent"];
var _hoisted_12 = ["textContent"];
var _hoisted_13 = {
  "class": "advantages__item"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_advantages_icon_advantage_03_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "class": "advantages__icon",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_15 = ["textContent"];
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
  "class": "advantages__item"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_advantages_icon_advantage_04_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "class": "advantages__icon",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_19 = ["textContent"];
var _hoisted_20 = ["textContent"];
var _hoisted_21 = {
  "class": "advantages__item"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_advantages_icon_advantage_05_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  "class": "advantages__icon",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_23 = ["textContent"];
var _hoisted_24 = ["textContent"];
var _hoisted_25 = {
  "class": "advantages__item"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_advantages_icon_advantage_06_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  "class": "advantages__icon",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_27 = ["textContent"];
var _hoisted_28 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "h1 advantages__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold advantages__title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__title-1'))
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_regular advantages__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__description-1'))
  }, null, 8
  /* PROPS */
  , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold advantages__title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__title-2'))
  }, null, 8
  /* PROPS */
  , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_regular advantages__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__description-2'))
  }, null, 8
  /* PROPS */
  , _hoisted_12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold advantages__title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__title-3'))
  }, null, 8
  /* PROPS */
  , _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_regular advantages__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__description-3'))
  }, null, 8
  /* PROPS */
  , _hoisted_16)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold advantages__title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__title-4'))
  }, null, 8
  /* PROPS */
  , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_regular advantages__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__description-4'))
  }, null, 8
  /* PROPS */
  , _hoisted_20)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold advantages__title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__title-5'))
  }, null, 8
  /* PROPS */
  , _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_regular advantages__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__description-5'))
  }, null, 8
  /* PROPS */
  , _hoisted_24)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold advantages__title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__title-6'))
  }, null, 8
  /* PROPS */
  , _hoisted_27), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_regular advantages__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('advantages__description-6'))
  }, null, 8
  /* PROPS */
  , _hoisted_28)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BannerFront.vue?vue&type=template&id=391340fc":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BannerFront.vue?vue&type=template&id=391340fc ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "banner-front"
};
var _hoisted_2 = {
  "class": "container banner-front__container"
};
var _hoisted_3 = {
  "class": "banner-front__content"
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  "class": "fui-button__container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "h1 banner-front__heading",
    innerHTML: _ctx.$t('banner-front__heading')
  }, null, 8
  /* PROPS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "h4_regular banner-front__description",
    innerHTML: _ctx.$t('banner-front__description')
  }, null, 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: $options.getButtonLink(),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getButtonText()),
    "class": "fui-button banner-front__button"
  }, null, 8
  /* PROPS */
  , ["to", "textContent"])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BuyCurrency.vue?vue&type=template&id=0f6b6656":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BuyCurrency.vue?vue&type=template&id=0f6b6656 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_icon_buy_01_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/icon_buy_01.svg */ "./resources/img/icon_buy_01.svg");
/* harmony import */ var _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/currencies/tether.svg */ "./resources/img/currencies/tether.svg");
/* harmony import */ var _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/currencies/btc.svg */ "./resources/img/currencies/btc.svg");
/* harmony import */ var _img_icon_buy_02_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/icon_buy_02.svg */ "./resources/img/icon_buy_02.svg");





var _hoisted_1 = {
  "class": "buy-currency"
};
var _hoisted_2 = {
  "class": "container buy-currency__container"
};
var _hoisted_3 = ["textContent"];
var _hoisted_4 = {
  "class": "buy-currency__grid"
};
var _hoisted_5 = {
  "class": "flex-column buy-currency__item"
};
var _hoisted_6 = {
  key: 0,
  "class": "flex-column buy-currency__item-layer-1"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_icon_buy_01_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "buy-currency__icon",
  alt: "swap"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "h3_semibold buy-currency__item-title"
}, "Swap", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "flex-row buy-currency__target"
};
var _hoisted_10 = ["textContent"];
var _hoisted_11 = ["textContent"];
var _hoisted_12 = ["textContent"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-row buy-currency__list\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div><div class=\"flex-row buy-currency__list-item\"> +198 </div></div>", 1);

var _hoisted_14 = ["textContent"];
var _hoisted_15 = {
  key: 2,
  "class": "flex-column default-scrollbar buy-currency__item-layer-2"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div><div class=\"flex-row buy-currency__currencies-row\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div></div>", 11);

var _hoisted_27 = [_hoisted_16];
var _hoisted_28 = ["textContent"];
var _hoisted_29 = {
  "class": "flex-column buy-currency__item"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_icon_buy_02_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "class": "buy-currency__icon",
  alt: "coinsbit"
}, null, -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "h3_semibold buy-currency__item-title"
}, "Exchange Coinsbit", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "flex-row buy-currency__target"
};
var _hoisted_33 = ["textContent"];
var _hoisted_34 = ["textContent"];
var _hoisted_35 = ["textContent"];

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-row buy-currency__list\"><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_tether_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" class=\"buy-currency__coin\" alt=\"tether\"> USDT </div><div class=\"flex-row buy-currency__list-item\"><img src=\"" + _img_currencies_btc_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" class=\"buy-currency__coin\" alt=\"btc\"> BTC </div><div class=\"flex-row buy-currency__list-item\"> +198 </div></div>", 1);

var _hoisted_37 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "h1 buy-currency__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('buy-currency__heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [!$data.layer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row t2_semibold buy-currency__target-item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('for players'))
  }, null, 8
  /* PROPS */
  , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row t2_semibold buy-currency__target-item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('commission') + ' 0%')
  }, null, 8
  /* PROPS */
  , _hoisted_11)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "flex-row t1_semibold buy-currency__currencies-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Acceptable currencies for exchange'))
  }, null, 8
  /* PROPS */
  , _hoisted_12), _hoisted_13])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.layer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": "flex-row t1_semibold buy-currency__currencies-title buy-currency__currencies-title--layer-2",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Acceptable currencies for exchange'))
  }, null, 8
  /* PROPS */
  , _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.layer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, _hoisted_27)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t1_semibold buy-currency__item-show-all",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.changeLayer(!$data.layer);
    }),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.layer ? _ctx.$t('Hide all currencies') : _ctx.$t('Show all currencies'))
  }, null, 8
  /* PROPS */
  , _hoisted_28), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'dashboard'
    },
    "class": "fui-button buy-currency__button",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('buy-currency__button'))
  }, null, 8
  /* PROPS */
  , ["textContent"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row t2_semibold buy-currency__target-item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('for traders'))
  }, null, 8
  /* PROPS */
  , _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex-row t2_semibold buy-currency__target-item",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('commission') + ' 0%')
  }, null, 8
  /* PROPS */
  , _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "flex-row t1_semibold buy-currency__currencies-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Acceptable currencies for exchange'))
  }, null, 8
  /* PROPS */
  , _hoisted_35), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "fui-button buy-currency__button buy-currency__mt",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('buy-currency__button'))
  }, null, 8
  /* PROPS */
  , _hoisted_37)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/CryptoCurrencies.vue?vue&type=template&id=53ce3c81":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/CryptoCurrencies.vue?vue&type=template&id=53ce3c81 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_cryptocurrencies_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/cryptocurrencies_list.svg */ "./resources/img/cryptocurrencies_list.svg");
/* harmony import */ var _img_cryptocurrencies_list_mobile_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/cryptocurrencies_list--mobile.svg */ "./resources/img/cryptocurrencies_list--mobile.svg");
/* harmony import */ var _img_cryptocurrencies_screen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/cryptocurrencies_screen.png */ "./resources/img/cryptocurrencies_screen.png");




var _hoisted_1 = {
  "class": "cryptocurrencies"
};
var _hoisted_2 = {
  "class": "container cryptocurrencies__container"
};
var _hoisted_3 = ["textContent"];
var _hoisted_4 = {
  key: 0,
  src: _img_cryptocurrencies_list_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "cryptocurrencies__screen cryptocurrencies__list",
  alt: ""
};
var _hoisted_5 = {
  key: 1,
  src: _img_cryptocurrencies_list_mobile_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "cryptocurrencies__screen cryptocurrencies__list",
  alt: ""
};
var _hoisted_6 = ["alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "h1 cryptocurrencies__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('cryptocurrencies__heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_3), $setup.windowWidth > 768 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_5)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _img_cryptocurrencies_screen_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: _ctx.$t('cryptocurrencies__heading'),
    "class": "cryptocurrencies__screen cryptocurrencies__screen-img"
  }, null, 8
  /* PROPS */
  , _hoisted_6)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Disciplines.vue?vue&type=template&id=5cd972bc":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Disciplines.vue?vue&type=template&id=5cd972bc ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_disciplines_discipline_01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/disciplines/discipline-01.png */ "./resources/img/disciplines/discipline-01.png");
/* harmony import */ var _img_disciplines_discipline_02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/disciplines/discipline-02.png */ "./resources/img/disciplines/discipline-02.png");
/* harmony import */ var _img_disciplines_discipline_03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/disciplines/discipline-03.png */ "./resources/img/disciplines/discipline-03.png");
/* harmony import */ var _img_disciplines_discipline_04_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/disciplines/discipline-04.png */ "./resources/img/disciplines/discipline-04.png");
/* harmony import */ var _img_disciplines_discipline_05_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/disciplines/discipline-05.png */ "./resources/img/disciplines/discipline-05.png");






var _hoisted_1 = {
  "class": "disciplines"
};
var _hoisted_2 = {
  "class": "container disciplines__container"
};
var _hoisted_3 = {
  "class": "disciplines__content"
};
var _hoisted_4 = ["textContent"];
var _hoisted_5 = ["textContent"];
var _hoisted_6 = {
  "class": "fui-button__container disciplines__button"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"disciplines__gallery\"><div class=\"disciplines__image disciplines__image-01\"><img src=\"" + _img_disciplines_discipline_01_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div><div class=\"disciplines__image disciplines__image-02\"><img src=\"" + _img_disciplines_discipline_02_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"\"></div><div class=\"disciplines__image disciplines__image-03\"><img src=\"" + _img_disciplines_discipline_03_png__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" alt=\"\"></div><div class=\"disciplines__image disciplines__image-04\"><img src=\"" + _img_disciplines_discipline_04_png__WEBPACK_IMPORTED_MODULE_4__["default"] + "\" alt=\"\"></div><div class=\"disciplines__image disciplines__image-05\"><img src=\"" + _img_disciplines_discipline_05_png__WEBPACK_IMPORTED_MODULE_5__["default"] + "\" alt=\"\"></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "h1 disciplines__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('disciplines__heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h4_regular disciplines__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('disciplines__description'))
  }, null, 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "fui-button disciplines__button-b",
    to: $options.getButtonLink(),
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getButtonText())
  }, null, 8
  /* PROPS */
  , ["to", "textContent"])])]), _hoisted_7])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Faq.vue?vue&type=template&id=e4119796":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Faq.vue?vue&type=template&id=e4119796 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_faq_coin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/faq-coin.png */ "./resources/img/faq-coin.png");
/* harmony import */ var _img_egg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/egg.png */ "./resources/img/egg.png");



var _hoisted_1 = {
  key: 0,
  "class": "faq"
};
var _hoisted_2 = {
  "class": "container faq__container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "h1 faq__heading"
}, "FAQ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "faq__grid"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "faq__picture-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_faq_coin_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "faq__coin",
  alt: "BTC"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_egg_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "faq__picture",
  alt: "Maran"
})], -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "faq__content-box"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  "class": "faq__question-row"
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.display ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, $data.questions.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.questions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "faq__question-box",
      onClick: function onClick($event) {
        return $options.openQuestion(item.id);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "h3_medium faq__question-title",
      innerHTML: item.title
    }, null, 8
    /* PROPS */
    , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'faq__question-icon': true,
        'faq__question-icon--active': item.open
      })
    }, null, 2
    /* CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        't1_regular': true,
        'faq__question-request': true,
        'faq__question-request--active': item.open
      }),
      innerHTML: item.content
    }, null, 10
    /* CLASS, PROPS */
    , _hoisted_10)], 8
    /* PROPS */
    , _hoisted_7);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/FastStart.vue?vue&type=template&id=23155576":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/FastStart.vue?vue&type=template&id=23155576 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_front_front_page_fast_start_video_screen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/front/front-page__fast-start-video-screen.png */ "./resources/img/front/front-page__fast-start-video-screen.png");


var _hoisted_1 = {
  "class": "fast-start"
};
var _hoisted_2 = {
  "class": "container fast-start__container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fast-start__video"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fast-start__video-container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_front_front_page_fast_start_video_screen_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "fast-start__video-container-image",
  alt: ""
})])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "fast-start__content"
};
var _hoisted_5 = ["textContent"];
var _hoisted_6 = {
  key: 0,
  "class": "fast-start__list"
};
var _hoisted_7 = {
  "class": "fast-start__item"
};
var _hoisted_8 = {
  "class": "fast-start__item-number"
};
var _hoisted_9 = ["textContent"];
var _hoisted_10 = {
  "class": "fast-start__item-content"
};
var _hoisted_11 = ["textContent"];
var _hoisted_12 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "h1 fast-start__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('fast-start__heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_5), _ctx.$t('fast-start__list') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$t('fast-start__list'), function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "h4_bold fast-start__item-number-box",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.number)
    }, null, 8
    /* PROPS */
    , _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "h4_medium fast-start__item-title",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title)
    }, null, 8
    /* PROPS */
    , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "t1_regular fast-start__item-description",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.content)
    }, null, 8
    /* PROPS */
    , _hoisted_12)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
}

/***/ }),

/***/ "./resources/img/advantages/icon-advantage-01.svg":
/*!********************************************************!*\
  !*** ./resources/img/advantages/icon-advantage-01.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-advantage-01.svg?2e1666d0f48f66dccffe42bdbd826971");

/***/ }),

/***/ "./resources/img/advantages/icon-advantage-02.svg":
/*!********************************************************!*\
  !*** ./resources/img/advantages/icon-advantage-02.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-advantage-02.svg?0e2d105a2c72e0b505dcdf73d4dd803a");

/***/ }),

/***/ "./resources/img/advantages/icon-advantage-03.svg":
/*!********************************************************!*\
  !*** ./resources/img/advantages/icon-advantage-03.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-advantage-03.svg?5ca775691ad2aca3cc9a6203d4368549");

/***/ }),

/***/ "./resources/img/advantages/icon-advantage-04.svg":
/*!********************************************************!*\
  !*** ./resources/img/advantages/icon-advantage-04.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-advantage-04.svg?bccc5e9ca3e84eb6e2f04264dbf6049a");

/***/ }),

/***/ "./resources/img/advantages/icon-advantage-05.svg":
/*!********************************************************!*\
  !*** ./resources/img/advantages/icon-advantage-05.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-advantage-05.svg?573627c57e6a90744410665eca3c14d7");

/***/ }),

/***/ "./resources/img/advantages/icon-advantage-06.svg":
/*!********************************************************!*\
  !*** ./resources/img/advantages/icon-advantage-06.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-advantage-06.svg?7ca3abb36e32d64861c0a669b935b6f0");

/***/ }),

/***/ "./resources/img/cryptocurrencies_list--mobile.svg":
/*!*********************************************************!*\
  !*** ./resources/img/cryptocurrencies_list--mobile.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/cryptocurrencies_list--mobile.svg?ae70820d31f2d8297903b27d0b222555");

/***/ }),

/***/ "./resources/img/cryptocurrencies_list.svg":
/*!*************************************************!*\
  !*** ./resources/img/cryptocurrencies_list.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/cryptocurrencies_list.svg?576bb8caec2861dbb624801ca6cc084f");

/***/ }),

/***/ "./resources/img/cryptocurrencies_screen.png":
/*!***************************************************!*\
  !*** ./resources/img/cryptocurrencies_screen.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/cryptocurrencies_screen.png?98c530aef3d76d96056dde614a9e2e77");

/***/ }),

/***/ "./resources/img/currencies/btc.svg":
/*!******************************************!*\
  !*** ./resources/img/currencies/btc.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/btc.svg?2f660ed99e7b3afc885daed6bdd95159");

/***/ }),

/***/ "./resources/img/currencies/tether.svg":
/*!*********************************************!*\
  !*** ./resources/img/currencies/tether.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/tether.svg?900fb1535795b96da8ed127b5d9f5723");

/***/ }),

/***/ "./resources/img/disciplines/discipline-01.png":
/*!*****************************************************!*\
  !*** ./resources/img/disciplines/discipline-01.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/discipline-01.png?f9fed0eceae0b53527420296a0d8e8d1");

/***/ }),

/***/ "./resources/img/disciplines/discipline-02.png":
/*!*****************************************************!*\
  !*** ./resources/img/disciplines/discipline-02.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/discipline-02.png?0c9eefb117e91fb964ac65e2721a7f3e");

/***/ }),

/***/ "./resources/img/disciplines/discipline-03.png":
/*!*****************************************************!*\
  !*** ./resources/img/disciplines/discipline-03.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/discipline-03.png?4275b9b8275e70ad27aaad823f155080");

/***/ }),

/***/ "./resources/img/disciplines/discipline-04.png":
/*!*****************************************************!*\
  !*** ./resources/img/disciplines/discipline-04.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/discipline-04.png?21a4b35c7b9c0fbe97ca6d16cef61cf7");

/***/ }),

/***/ "./resources/img/disciplines/discipline-05.png":
/*!*****************************************************!*\
  !*** ./resources/img/disciplines/discipline-05.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/discipline-05.png?b5aa7e118c034aa0825035ae76031eb9");

/***/ }),

/***/ "./resources/img/egg.png":
/*!*******************************!*\
  !*** ./resources/img/egg.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/egg.png?53fd535833ac1b38053b165ca129719c");

/***/ }),

/***/ "./resources/img/faq-coin.png":
/*!************************************!*\
  !*** ./resources/img/faq-coin.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/faq-coin.png?30a513005f791c4c49078188b3d9f42a");

/***/ }),

/***/ "./resources/img/front/front-page__fast-start-video-screen.png":
/*!*********************************************************************!*\
  !*** ./resources/img/front/front-page__fast-start-video-screen.png ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/front-page__fast-start-video-screen.png?d98b8967cfdd0e7592d44b70b140e3fb");

/***/ }),

/***/ "./resources/img/icon_buy_01.svg":
/*!***************************************!*\
  !*** ./resources/img/icon_buy_01.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon_buy_01.svg?ea64355a9ecb461cc6547f83b432dbff");

/***/ }),

/***/ "./resources/img/icon_buy_02.svg":
/*!***************************************!*\
  !*** ./resources/img/icon_buy_02.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon_buy_02.svg?ccbd44cca14ec85c7559b2fa0c326df8");

/***/ }),

/***/ "./resources/js/Views/Front/FrontPage.vue":
/*!************************************************!*\
  !*** ./resources/js/Views/Front/FrontPage.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FrontPage_vue_vue_type_template_id_279e6de3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontPage.vue?vue&type=template&id=279e6de3 */ "./resources/js/Views/Front/FrontPage.vue?vue&type=template&id=279e6de3");
/* harmony import */ var _FrontPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontPage.vue?vue&type=script&lang=js */ "./resources/js/Views/Front/FrontPage.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FrontPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FrontPage_vue_vue_type_template_id_279e6de3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Front/FrontPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/Advantages.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Front/Advantages.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Advantages_vue_vue_type_template_id_971b164e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advantages.vue?vue&type=template&id=971b164e */ "./resources/js/components/Front/Advantages.vue?vue&type=template&id=971b164e");
/* harmony import */ var _Advantages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advantages.vue?vue&type=script&lang=js */ "./resources/js/components/Front/Advantages.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Advantages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Advantages_vue_vue_type_template_id_971b164e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/Advantages.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/BannerFront.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Front/BannerFront.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BannerFront_vue_vue_type_template_id_391340fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BannerFront.vue?vue&type=template&id=391340fc */ "./resources/js/components/Front/BannerFront.vue?vue&type=template&id=391340fc");
/* harmony import */ var _BannerFront_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BannerFront.vue?vue&type=script&lang=js */ "./resources/js/components/Front/BannerFront.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BannerFront_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BannerFront_vue_vue_type_template_id_391340fc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/BannerFront.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/BuyCurrency.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Front/BuyCurrency.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuyCurrency_vue_vue_type_template_id_0f6b6656__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuyCurrency.vue?vue&type=template&id=0f6b6656 */ "./resources/js/components/Front/BuyCurrency.vue?vue&type=template&id=0f6b6656");
/* harmony import */ var _BuyCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuyCurrency.vue?vue&type=script&lang=js */ "./resources/js/components/Front/BuyCurrency.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BuyCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BuyCurrency_vue_vue_type_template_id_0f6b6656__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/BuyCurrency.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/CryptoCurrencies.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Front/CryptoCurrencies.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CryptoCurrencies_vue_vue_type_template_id_53ce3c81__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CryptoCurrencies.vue?vue&type=template&id=53ce3c81 */ "./resources/js/components/Front/CryptoCurrencies.vue?vue&type=template&id=53ce3c81");
/* harmony import */ var _CryptoCurrencies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CryptoCurrencies.vue?vue&type=script&lang=js */ "./resources/js/components/Front/CryptoCurrencies.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CryptoCurrencies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CryptoCurrencies_vue_vue_type_template_id_53ce3c81__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/CryptoCurrencies.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/Disciplines.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Front/Disciplines.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Disciplines_vue_vue_type_template_id_5cd972bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disciplines.vue?vue&type=template&id=5cd972bc */ "./resources/js/components/Front/Disciplines.vue?vue&type=template&id=5cd972bc");
/* harmony import */ var _Disciplines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Disciplines.vue?vue&type=script&lang=js */ "./resources/js/components/Front/Disciplines.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Disciplines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Disciplines_vue_vue_type_template_id_5cd972bc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/Disciplines.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/Faq.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Front/Faq.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Faq_vue_vue_type_template_id_e4119796__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=e4119796 */ "./resources/js/components/Front/Faq.vue?vue&type=template&id=e4119796");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js */ "./resources/js/components/Front/Faq.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Faq_vue_vue_type_template_id_e4119796__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/Faq.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Front/FastStart.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Front/FastStart.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FastStart_vue_vue_type_template_id_23155576__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FastStart.vue?vue&type=template&id=23155576 */ "./resources/js/components/Front/FastStart.vue?vue&type=template&id=23155576");
/* harmony import */ var _FastStart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FastStart.vue?vue&type=script&lang=js */ "./resources/js/components/Front/FastStart.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FastStart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FastStart_vue_vue_type_template_id_23155576__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Front/FastStart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Front/FrontPage.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Views/Front/FrontPage.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrontPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrontPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FrontPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/FrontPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/Advantages.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Front/Advantages.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advantages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advantages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Advantages.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Advantages.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/BannerFront.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Front/BannerFront.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BannerFront_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BannerFront_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BannerFront.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BannerFront.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/BuyCurrency.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Front/BuyCurrency.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuyCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuyCurrency_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuyCurrency.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BuyCurrency.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/CryptoCurrencies.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Front/CryptoCurrencies.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoCurrencies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoCurrencies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CryptoCurrencies.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/CryptoCurrencies.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/Disciplines.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Front/Disciplines.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Disciplines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Disciplines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Disciplines.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Disciplines.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/Faq.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Front/Faq.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Faq.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Faq.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Front/FastStart.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Front/FastStart.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FastStart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FastStart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FastStart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/FastStart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Front/FrontPage.vue?vue&type=template&id=279e6de3":
/*!******************************************************************************!*\
  !*** ./resources/js/Views/Front/FrontPage.vue?vue&type=template&id=279e6de3 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrontPage_vue_vue_type_template_id_279e6de3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrontPage_vue_vue_type_template_id_279e6de3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FrontPage.vue?vue&type=template&id=279e6de3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/FrontPage.vue?vue&type=template&id=279e6de3");


/***/ }),

/***/ "./resources/js/components/Front/Advantages.vue?vue&type=template&id=971b164e":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Front/Advantages.vue?vue&type=template&id=971b164e ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advantages_vue_vue_type_template_id_971b164e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Advantages_vue_vue_type_template_id_971b164e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Advantages.vue?vue&type=template&id=971b164e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Advantages.vue?vue&type=template&id=971b164e");


/***/ }),

/***/ "./resources/js/components/Front/BannerFront.vue?vue&type=template&id=391340fc":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Front/BannerFront.vue?vue&type=template&id=391340fc ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BannerFront_vue_vue_type_template_id_391340fc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BannerFront_vue_vue_type_template_id_391340fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BannerFront.vue?vue&type=template&id=391340fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BannerFront.vue?vue&type=template&id=391340fc");


/***/ }),

/***/ "./resources/js/components/Front/BuyCurrency.vue?vue&type=template&id=0f6b6656":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Front/BuyCurrency.vue?vue&type=template&id=0f6b6656 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuyCurrency_vue_vue_type_template_id_0f6b6656__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuyCurrency_vue_vue_type_template_id_0f6b6656__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuyCurrency.vue?vue&type=template&id=0f6b6656 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/BuyCurrency.vue?vue&type=template&id=0f6b6656");


/***/ }),

/***/ "./resources/js/components/Front/CryptoCurrencies.vue?vue&type=template&id=53ce3c81":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Front/CryptoCurrencies.vue?vue&type=template&id=53ce3c81 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoCurrencies_vue_vue_type_template_id_53ce3c81__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoCurrencies_vue_vue_type_template_id_53ce3c81__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CryptoCurrencies.vue?vue&type=template&id=53ce3c81 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/CryptoCurrencies.vue?vue&type=template&id=53ce3c81");


/***/ }),

/***/ "./resources/js/components/Front/Disciplines.vue?vue&type=template&id=5cd972bc":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Front/Disciplines.vue?vue&type=template&id=5cd972bc ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Disciplines_vue_vue_type_template_id_5cd972bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Disciplines_vue_vue_type_template_id_5cd972bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Disciplines.vue?vue&type=template&id=5cd972bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Disciplines.vue?vue&type=template&id=5cd972bc");


/***/ }),

/***/ "./resources/js/components/Front/Faq.vue?vue&type=template&id=e4119796":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Front/Faq.vue?vue&type=template&id=e4119796 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_template_id_e4119796__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_template_id_e4119796__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Faq.vue?vue&type=template&id=e4119796 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/Faq.vue?vue&type=template&id=e4119796");


/***/ }),

/***/ "./resources/js/components/Front/FastStart.vue?vue&type=template&id=23155576":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Front/FastStart.vue?vue&type=template&id=23155576 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FastStart_vue_vue_type_template_id_23155576__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FastStart_vue_vue_type_template_id_23155576__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FastStart.vue?vue&type=template&id=23155576 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Front/FastStart.vue?vue&type=template&id=23155576");


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