"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46],{9046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(1385),o={class:"d"},a={class:"dashboard"},i={key:0,class:"dashboard__left-bar"},s={class:"dashboard__content"};var d=n(1293),c=n(1713);const l={data:function(){return{key:0}},components:{Nav:d.Z},setup:function(){var e=(0,c.i)();return{windowWidth:e.width,windowHeight:e.height}}};const u=(0,n(3744).Z)(l,[["render",function(e,t,n,d,c,l){var u=(0,r.resolveComponent)("Nav"),h=(0,r.resolveComponent)("router-view");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[d.windowWidth>1180?((0,r.openBlock)(),(0,r.createBlock)(u,{key:0})):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",a,[d.windowWidth>1180?((0,r.openBlock)(),(0,r.createElementBlock)("div",i)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",s,[(0,r.createVNode)(h)])])])}]])},1293:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(1385),o={class:"flex-column dashboard-nav"},a={class:"flex-column dashboard-nav__balance"},i=["textContent"],s={class:"flex-row h4_bold dashboard-nav__balance-value"},d={class:"flex-column dashboard-nav__menu"},c=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-results"},null,-1),l=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-wallet"},null,-1),u=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-history"},null,-1),h=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-help"},null,-1),_=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-results"},null,-1),b=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-favorites"},null,-1),v={href:"https://t.me/maranbet_support",class:"flex-row t1_medium dashboard-nav__item",target:"_blank"},p=(0,r.createElementVNode)("div",{class:"dashboard-nav__icon dashboard-nav__icon-telegram"},null,-1);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w={computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({user:function(){return this.$store.getters.user}},(0,n(8637).Se)(["getActualBalance"])),mounted:function(){this.user&&this.$store.dispatch("fetchActualBalance")}};const y=(0,n(3744).Z)(w,[["render",function(e,t,n,f,m,w){var y=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("span",{class:"t3_regular dashboard-nav__balance-text",textContent:(0,r.toDisplayString)(e.$t("My balance"))},null,8,i),(0,r.createElementVNode)("span",s,(0,r.toDisplayString)(e.getActualBalance.display_balance),1)]),(0,r.createElementVNode)("div",d,[(0,r.createVNode)(y,{to:{name:"dashboard"},class:"flex-row t1_medium dashboard-nav__item"},{default:(0,r.withCtx)((function(){return[c,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("Account")),1)]})),_:1}),(0,r.createVNode)(y,{to:{name:"dashboard-wallet"},class:"flex-row t1_medium dashboard-nav__item"},{default:(0,r.withCtx)((function(){return[l,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("Wallet")),1)]})),_:1}),(0,r.createVNode)(y,{to:{name:"dashboard-history"},class:"flex-row t1_medium dashboard-nav__item"},{default:(0,r.withCtx)((function(){return[u,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("History")),1)]})),_:1}),(0,r.createVNode)(y,{to:{name:"dashboard-help"},class:"flex-row t1_medium dashboard-nav__item"},{default:(0,r.withCtx)((function(){return[h,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("Help")),1)]})),_:1}),(0,r.createVNode)(y,{to:{name:"dashboard-results"},class:"flex-row t1_medium dashboard-nav__item"},{default:(0,r.withCtx)((function(){return[_,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("Results")),1)]})),_:1}),(0,r.createVNode)(y,{to:{name:"dashboard-favourites"},class:"flex-row t1_medium dashboard-nav__item"},{default:(0,r.withCtx)((function(){return[b,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("Favorites")),1)]})),_:1}),(0,r.createElementVNode)("a",v,[p,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.$t("header__support")),1)])]),(0,r.createVNode)(y,{to:{name:"betting"},class:"flex-row t1_medium dashboard-nav__back",textContent:(0,r.toDisplayString)(e.$t("Back to betting"))},null,8,["textContent"])])}]])},1713:(e,t,n)=>{var r,o=n(1385),a=n(9332),i="undefined"!=typeof window,s=function(e){return null!=e?e:i?window.innerWidth:0},d=function(e){return null!=e?e:i?window.innerHeight:0},c=function(e){var t=0,n=e(),r=o.reactive({width:s(void 0),height:d(void 0)});return n.addObserver("composition-api",(function(e){var t=e.width,n=e.height;r.width=t,r.height=n})),function(){return 0===t&&n.subscribe().dispatch(),++t,o.onUnmounted((function(){0===(t=Math.max(t-1,0))&&n.unsubscribe()})),{width:o.computed((function(){return r.width})),height:o.computed((function(){return r.height}))}}}((function(){return r||(r=new a.WindowResizeSubject),r}));t.i=c},9332:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._observers=new Map,this._subscribed=!1;var t=(null!=e?e:{}).delay,n=void 0===t?33:t;this._delay=n,this._handler=this._handleResize.bind(this)}return e.prototype.addObserver=function(e,t){return this._observers.set(e,t),t(this._getEvent()),this},e.prototype.deleteObserver=function(e){return this._observers.delete(e),this},e.prototype.deleteObservers=function(){return this._observers.clear(),this},e.prototype.notifyObservers=function(e){return this._observers.forEach((function(t){t(e)})),this},e.prototype.subscribe=function(){return"undefined"==typeof window||this._subscribed||(window.addEventListener("resize",this._handler),window.addEventListener("orientationchange",this._handler),this._subscribed=!0),this},e.prototype.unsubscribe=function(){return this._subscribed?(window.removeEventListener("resize",this._handler),window.removeEventListener("orientationchange",this._handler),this._subscribed=!1,this):this},e.prototype.setDelay=function(e){return this._delay=e,this},e.prototype.hasObserver=function(){return this._observers.size>0},e.prototype.dispatch=function(){return this._dispatch(),this},e.prototype._getEvent=function(){return"undefined"==typeof window?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight}},e.prototype._dispatch=function(){var e=this._getEvent();this.notifyObservers(e)},e.prototype._handleResize=function(){var e=this;clearTimeout(this._timer),this._timer=setTimeout((function(){e._dispatch()}),this._delay)},e}();t.WindowResizeSubject=n}}]);