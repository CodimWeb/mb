"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Front_MaranToken_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/MaranToken.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/MaranToken.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    copyWalletAddress: function copyWalletAddress() {
      this.$refs.clone.focus();
      document.execCommand('copy');
      this.showMessage(this.$t('The contract address has been copied'));
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/MaranToken.vue?vue&type=template&id=72a83c9a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/MaranToken.vue?vue&type=template&id=72a83c9a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_maran_token_page_icon_01_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/maran-token-page/icon-01.svg */ "./resources/img/maran-token-page/icon-01.svg");
/* harmony import */ var _img_maran_token_page_icon_02_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/maran-token-page/icon-02.svg */ "./resources/img/maran-token-page/icon-02.svg");
/* harmony import */ var _img_maran_token_page_icon_03_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/maran-token-page/icon-03.svg */ "./resources/img/maran-token-page/icon-03.svg");
/* harmony import */ var _img_maran_token_page_icon_04_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/maran-token-page/icon-04.svg */ "./resources/img/maran-token-page/icon-04.svg");
/* harmony import */ var _img_currencies_maran_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/currencies/maran.svg */ "./resources/img/currencies/maran.svg");






var _hoisted_1 = {
  "class": "flex-column maran-token-page"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "maran-token-page__banner"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container maran-token-page__container"
};
var _hoisted_4 = {
  "class": "flex-column maran-token-page__content"
};
var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["textContent"];
var _hoisted_7 = {
  "class": "maran-token-page__grid"
};
var _hoisted_8 = {
  "class": "flex-column maran-token-page__grid-item"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_maran_token_page_icon_01_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  "class": "maran-token-page__item-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  "class": "flex-column maran-token-page__grid-item"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_maran_token_page_icon_02_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "class": "maran-token-page__item-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = ["innerHTML"];
var _hoisted_14 = {
  "class": "flex-column maran-token-page__grid-item"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_maran_token_page_icon_03_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "class": "maran-token-page__item-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = ["innerHTML"];
var _hoisted_17 = {
  "class": "flex-column maran-token-page__grid-item"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_maran_token_page_icon_04_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "class": "maran-token-page__item-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = ["innerHTML"];
var _hoisted_20 = {
  "class": "flex-column maran-token-page__info"
};
var _hoisted_21 = {
  "class": "maran-token-page__info-grid"
};
var _hoisted_22 = {
  "class": "flex-column maran-token-page__info-item"
};
var _hoisted_23 = ["textContent"];

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "h3_semibold maran-token-page__info-description"
}, "MARAN", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "flex-column maran-token-page__info-item"
};
var _hoisted_26 = ["textContent"];

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "flex-row h3_semibold maran-token-page__info-description"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _img_currencies_maran_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  "class": "maran-token-page__info-icon",
  alt: "MARAN"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" MARAN ")], -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "flex-column maran-token-page__info-item"
};
var _hoisted_29 = ["textContent"];

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "h3_semibold maran-token-page__info-description"
}, "ERC-20", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "flex-column maran-token-page__info-item"
};
var _hoisted_32 = ["textContent"];

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "h3_semibold maran-token-page__info-description"
}, "100 000 000 000", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "maran-token-page__info-contract"
};
var _hoisted_35 = {
  "class": "flex-column maran-token-page__info-contract-container"
};
var _hoisted_36 = ["textContent"];

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "h3_semibold maran-token-page__info-contract-row"
}, "0x5f9123d661459af6f398b6f1566f53222612541e", -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "maran-token-page__info-buttons"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://etherscan.io/address/0x5f9123d661459af6f398b6f1566f53222612541e",
  "class": "maran-token-page__info-button maran-token-page__info-button-link",
  target: "_blank"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "h1 maran-token-page__heading",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('maran-token-page__heading'))
  }, null, 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "h3_semibold maran-token-page__description",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('maran-token-page__description'))
  }, null, 8
  /* PROPS */
  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t1_regular maran-token-page__item-description",
    innerHTML: _ctx.$t('maran-token-page__item-description-1')
  }, null, 8
  /* PROPS */
  , _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t1_regular maran-token-page__item-description",
    innerHTML: _ctx.$t('maran-token-page__item-description-2')
  }, null, 8
  /* PROPS */
  , _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t1_regular maran-token-page__item-description",
    innerHTML: _ctx.$t('maran-token-page__item-description-3')
  }, null, 8
  /* PROPS */
  , _hoisted_16)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "t1_regular maran-token-page__item-description",
    innerHTML: _ctx.$t('maran-token-page__item-description-4')
  }, null, 8
  /* PROPS */
  , _hoisted_19)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t2_regular maran-token-page__info-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Title'))
  }, null, 8
  /* PROPS */
  , _hoisted_23), _hoisted_24]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t2_regular maran-token-page__info-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Designation'))
  }, null, 8
  /* PROPS */
  , _hoisted_26), _hoisted_27]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t2_regular maran-token-page__info-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Token Type'))
  }, null, 8
  /* PROPS */
  , _hoisted_29), _hoisted_30]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t2_regular maran-token-page__info-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Total volume of the offer'))
  }, null, 8
  /* PROPS */
  , _hoisted_32), _hoisted_33])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "t2_regular maran-token-page__info-title",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Contract address'))
  }, null, 8
  /* PROPS */
  , _hoisted_36), _hoisted_37]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "maran-token-page__info-button maran-token-page__info-button-copy",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.copyWalletAddress();
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: "0x5f9123d661459af6f398b6f1566f53222612541e",
    onFocus: _cache[0] || (_cache[0] = function ($event) {
      return $event.target.select();
    }),
    ref: "clone",
    "class": "hidden_input"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  )]), _hoisted_39])])])])])]);
}

/***/ }),

/***/ "./resources/img/maran-token-page/icon-01.svg":
/*!****************************************************!*\
  !*** ./resources/img/maran-token-page/icon-01.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-01.svg?2ccbac904192e89647a183ae6bb41375");

/***/ }),

/***/ "./resources/img/maran-token-page/icon-02.svg":
/*!****************************************************!*\
  !*** ./resources/img/maran-token-page/icon-02.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-02.svg?8a41a5a0c7709c38dc729c79e13d5015");

/***/ }),

/***/ "./resources/img/maran-token-page/icon-03.svg":
/*!****************************************************!*\
  !*** ./resources/img/maran-token-page/icon-03.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-03.svg?ffa3b470e65a1390e89ba878b40113a5");

/***/ }),

/***/ "./resources/img/maran-token-page/icon-04.svg":
/*!****************************************************!*\
  !*** ./resources/img/maran-token-page/icon-04.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-04.svg?e684077e4bdb350f709a84fc2a5d65fd");

/***/ }),

/***/ "./resources/js/Views/Front/MaranToken.vue":
/*!*************************************************!*\
  !*** ./resources/js/Views/Front/MaranToken.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MaranToken_vue_vue_type_template_id_72a83c9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaranToken.vue?vue&type=template&id=72a83c9a */ "./resources/js/Views/Front/MaranToken.vue?vue&type=template&id=72a83c9a");
/* harmony import */ var _MaranToken_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaranToken.vue?vue&type=script&lang=js */ "./resources/js/Views/Front/MaranToken.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_maranbeth_maranbeth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MaranToken_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MaranToken_vue_vue_type_template_id_72a83c9a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Front/MaranToken.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Front/MaranToken.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Views/Front/MaranToken.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MaranToken_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MaranToken_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MaranToken.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/MaranToken.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Front/MaranToken.vue?vue&type=template&id=72a83c9a":
/*!*******************************************************************************!*\
  !*** ./resources/js/Views/Front/MaranToken.vue?vue&type=template&id=72a83c9a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MaranToken_vue_vue_type_template_id_72a83c9a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MaranToken_vue_vue_type_template_id_72a83c9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MaranToken.vue?vue&type=template&id=72a83c9a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Front/MaranToken.vue?vue&type=template&id=72a83c9a");


/***/ })

}]);