"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[307],{5307:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(1385);var o={class:"dashboard"},a={class:"app"},c=(0,r.createStaticVNode)('<div class="dashboard-page add-funds"><div class="dashboard__content"><div class="dashboard__heading"><h1>Пополнение баланса</h1></div><div class="add-funds__fields-group"><p class="add-funds__fields-group-description text_18">Вы можете пополнить баланс 2 способами:</p><div class="aui-col-2"><div class="add-funds__group-exchange"><p>Биржи</p><div class="add-funds__container"><div class="add-funds__container-row text_16">Купите токены MARAN на одной из бирж, где представлен токен и переведите токены по адресу ниже</div><div class="add-funds__container-row text_16">0x8f9239100B934e76C5be943A09512a2D3eEc5dB5</div><div class="add-funds__container-row"><p class="add-funds__fields-group-description">QR code адреса:</p><img src="/images/exchange_qr_code.svg?67f0dede71c93a078e88cfaf7a19989b" class="add-funds__qr" alt="QR code"></div></div></div><div class="add-funds__group-swap"><p>SWAP</p><div class="add-funds__container"><p class="text_16">Поменяйте ваши криптоактивы на токен MARAN при помощи функции SWAP на сайте или в мобильном приложении</p><button class="dui__button">Воспользоваться SWAP</button></div></div></div></div></div></div>',1);var i=n(9611),l=n(2179),s=n(7517);const d={components:{NavBar:i.Z,LeftBar:l.Z,VerifyNotice:s.Z},data:function(){return{}},computed:{id:function(){return this.$store.getters.id},verified:function(){return this.$store.getters.verified}}};const u=(0,n(3744).Z)(d,[["render",function(e,t,n,i,l,s){var d=(0,r.resolveComponent)("LeftBar"),u=(0,r.resolveComponent)("nav-bar"),f=(0,r.resolveComponent)("VerifyNotice");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createVNode)(d),(0,r.createElementVNode)("div",a,[(0,r.createVNode)(u),s.verified?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)(f,{key:0,id:s.id},null,8,["id"])),c])])}]])},2179:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(1385);var o={class:"left-bar"},a={class:"left-bar__brand-container"},c=(0,r.createElementVNode)("img",{src:"/images/logo_darken.png?de335d67e9ad40e346be82dbd84c04f7",class:"left-bar__brand",alt:"MaranBet"},null,-1),i={class:"left-bar__balance-container"},l=(0,r.createElementVNode)("span",{class:"left-bar__balance-title text_14 medium"},"Баланс (MARAN)",-1),s={class:"left-bar__balance-value text_32 bold"},d=(0,r.createTextVNode)("Верификация пройдена"),u=(0,r.createTextVNode)("Верификация не пройдена"),f={class:"left-bar__navigation"},v=(0,r.createElementVNode)("i",{class:"icon icon-wallet"},null,-1),p=(0,r.createTextVNode)(" Кошелек "),m=(0,r.createElementVNode)("i",{class:"icon icon-detailing"},null,-1),h=(0,r.createTextVNode)(" Детализация "),_=(0,r.createElementVNode)("i",{class:"icon icon-profile"},null,-1),k=(0,r.createTextVNode)(" Профиль "),g=(0,r.createElementVNode)("i",{class:"icon icon-partnership"},null,-1),b=(0,r.createTextVNode)(" Партнерская программа "),w=(0,r.createElementVNode)("i",{class:"icon icon-help"},null,-1),N=(0,r.createTextVNode)(" Помощь ");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B={data:function(){return{verification:!0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,n(8637).Se)(["getBalance"])),mounted:function(){this.$store.dispatch("fetchBalance")}};const E=(0,n(3744).Z)(B,[["render",function(e,t,n,x,V,B){var E=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",a,[(0,r.createVNode)(E,{to:"/"},{default:(0,r.withCtx)((function(){return[c]})),_:1})]),(0,r.createElementVNode)("div",i,[l,(0,r.createElementVNode)("span",s,(0,r.toDisplayString)(e.getBalance?e.getBalance.balance:""),1),(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)({"left-bar__verification-status":!0,text_12:!0,"left-bar__verification-status--success":V.verification,"left-bar__verification-status--danger":!V.verification})},[V.verification?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[d],64)):(0,r.createCommentVNode)("",!0),V.verification?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:1},[u],64))],2)]),(0,r.createElementVNode)("div",f,[(0,r.createVNode)(E,{to:{name:"home"}},{default:(0,r.withCtx)((function(){return[v,p]})),_:1}),(0,r.createVNode)(E,{to:{name:"details"}},{default:(0,r.withCtx)((function(){return[m,h]})),_:1}),(0,r.createVNode)(E,{to:{name:"profile"}},{default:(0,r.withCtx)((function(){return[_,k]})),_:1}),(0,r.createVNode)(E,{to:{name:"partnership"}},{default:(0,r.withCtx)((function(){return[g,b]})),_:1}),(0,r.createVNode)(E,{to:{name:"help"}},{default:(0,r.withCtx)((function(){return[w,N]})),_:1})])])}]])},9611:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(1385);var o={class:"dashboard-navbar"},a={key:0,class:"dashboard-navbar__flex-end"},c=(0,r.createElementVNode)("i",{class:"icon icon-profile"},null,-1),i=(0,r.createElementVNode)("img",{src:"/images/chevron-right.svg?2d5d38f5442a4c3b28c8d39c9062927f",class:"chevron"},null,-1),l=[(0,r.createElementVNode)("i",{class:"icon icon-logout"},null,-1),(0,r.createTextVNode)(" Выход ")],s={key:1,class:"flex"},d=(0,r.createTextVNode)(" Вход "),u=(0,r.createTextVNode)(" Регистрация ");var f=n(7757),v=n.n(f),p=n(7751);function m(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}const h={components:{CogIcon:p.IEm,LogoutIcon:p.R0g,ChevronDownIcon:p.v4q},data:function(){return{drop:!1}},computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var e,t=this;return(e=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout");case 2:t.$router.push({name:"login"});case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){m(a,r,o,c,i,"next",e)}function i(e){m(a,r,o,c,i,"throw",e)}c(void 0)}))})()}}};const _=(0,n(3744).Z)(h,[["render",function(e,t,n,f,v,p){var m=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[p.user?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createVNode)(m,{to:{name:"profile"},class:"dashboard-navbar__buttons"},{default:(0,r.withCtx)((function(){return[c,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(p.user.email)+" ",1),i]})),_:1}),(0,r.createElementVNode)("div",{class:"dashboard-navbar__buttons",onClick:t[0]||(t[0]=function(){return p.logout&&p.logout.apply(p,arguments)})},l)])):((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createVNode)(m,{class:"p-4 tracking-widest flex items-center text-gray-600","active-class":"font-semibold text-gray-800",to:{name:"login"}},{default:(0,r.withCtx)((function(){return[d]})),_:1}),(0,r.createVNode)(m,{class:"p-4 tracking-widest flex items-center text-gray-600","active-class":"font-semibold text-gray-800",to:{name:"register"}},{default:(0,r.withCtx)((function(){return[u]})),_:1})]))])}]])},7517:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1385),o={class:"email-verification-alert__container"},a={class:"widget email-verification-alert"},c=(0,r.createElementVNode)("div",{class:"email-verification-alert__text"},[(0,r.createElementVNode)("span",{class:"text_18 bold email-verification-alert__title"},"Ваш Email не верифицирован"),(0,r.createElementVNode)("span",{class:"text_14"},"Пожалуйста перейдите по ссылке в письме для завершения верификации.")],-1),i={class:"email-verification-alert__button"};const l={props:["id"],data:function(){return{sent:!1}},methods:{resend:function(){var e=this;this.$store.dispatch("verifyResend",{id:this.id}).then((function(t){e.sent=!0})).catch((function(t){e.error="Ошибка сервера, попробуйте позднее"}))}}};const s=(0,n(3744).Z)(l,[["render",function(e,t,n,l,s,d){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",a,[c,(0,r.createElementVNode)("div",i,[s.sent?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:1,onClick:t[1]||(t[1]=function(){return d.resend&&d.resend.apply(d,arguments)}),class:"py-2 px-3 bg-blue-600 text-white rounded"}," Письмо отправлено! ")):((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:0,onClick:t[0]||(t[0]=function(){return d.resend&&d.resend.apply(d,arguments)}),class:"button button_blue"}," Отправить повторно "))])])])}]])},7751:(e,t,n)=>{n.d(t,{v4q:()=>o,IEm:()=>a,_m8:()=>c,R0g:()=>i,tBG:()=>l,b0D:()=>s});var r=n(1385);function o(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])}function a(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}function c(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}function i(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})])}function l(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}function s(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}}}]);