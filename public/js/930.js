"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[930],{3930:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(1385);var o={key:0,class:"sales-category"},l={class:"container sales-category__container"},s=["textContent"],c={key:0,class:"flex-column sales-category__catalog"},r={class:"sales-category__item"},i={class:"sales-category__preview"},m=["alt"],d={class:"flex-column sales-category__content"},g=["textContent"],u=["textContent"],p=["textContent"];const y={data:function(){return{promotions:[],display:!0}},methods:{getData:function(){var e=this;axios.get("/api/actual/category/list/?language=".concat(this.$route.params.lang,"&category=promotions")).then((function(t){e.promotions=t.data})).catch((function(t){e.display=!1}))}},mounted:function(){this.getData()}};const _=(0,a(3744).Z)(y,[["render",function(e,t,a,y,_,k){var v=(0,n.resolveComponent)("router-link");return _.display?((0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("h1",{class:"h2 sales-category__heading",textContent:(0,n.toDisplayString)(e.$t("Promotions"))},null,8,s),_.promotions.length?((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(_.promotions,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("img",{src:"/images/1.png?af6eb5a89b58ad5d6d79a885972f5c9a",alt:t.title},null,8,m)]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",{class:"t3_regular sales-category__item-date",textContent:(0,n.toDisplayString)("c 14.07.2021 до 31.08.2021")},null,8,g),(0,n.createElementVNode)("div",{class:"h3_semibold sales-category__item-title",textContent:(0,n.toDisplayString)(t.title)},null,8,u),(0,n.createElementVNode)("div",{class:"t1_regular sales-category__item-description",textContent:(0,n.toDisplayString)(t.excerpt)},null,8,p),(0,n.createVNode)(v,{to:{name:"sales-item",params:{slug:t.slug}},class:"betting-button",textContent:(0,n.toDisplayString)(e.$t("More"))},null,8,["to","textContent"])])])})),256))])):(0,n.createCommentVNode)("",!0)])])):(0,n.createCommentVNode)("",!0)}]])}}]);