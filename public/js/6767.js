"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6767],{4590:(e,t,n)=>{n.d(t,{Z:()=>o});const o="/images/logo_darken.png?de335d67e9ad40e346be82dbd84c04f7"},6767:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(1385),r={class:"dashboard"},a={class:"app"},c={class:"dashboard-page help-page"},i={class:"dashboard__content"},l=(0,o.createElementVNode)("div",{class:"dashboard__heading"},[(0,o.createElementVNode)("h1",null,"Помощь")],-1),s=(0,o.createElementVNode)("div",{class:"widget-header"},"Часто задаваемые вопросы",-1),d={class:"widget help-page__base-questions"},u={key:0,class:"help-page__questions-list"},p=["onClick","id"],f={class:"help-page__question"},m={class:"help-page__answer"};var v=n(9611),h=n(8619),k=n(7517);const g={components:{NavBar:v.Z,LeftBar:h.Z,VerifyNotice:k.Z},data:function(){return{activeItem:0,questions:[{id:0,question:"А здесь нас ждет длинный перечень вопросов, которые могут возникнуть у пользователя",answer:"И мы ответим на любые возникшие у него вопросы"},{id:1,question:"А здесь нас ждет длинный перечень вопросов, которые могут возникнуть у пользователя",answer:"И мы ответим на любые возникшие у него вопросы"},{id:2,question:"А здесь нас ждет длинный перечень вопросов, которые могут возникнуть у пользователя",answer:"И мы ответим на любые возникшие у него вопросы"},{id:3,question:"А здесь нас ждет длинный перечень вопросов, которые могут возникнуть у пользователя",answer:"И мы ответим на любые возникшие у него вопросы"}],popularQuestions:[0,1,2]}},methods:{toggleQuestion:function(e){this.activeItem=e}},computed:{id:function(){return this.$store.getters.id},verified:function(){return this.$store.getters.verified}}};const w=(0,n(3744).Z)(g,[["render",function(e,t,n,v,h,k){var g=(0,o.resolveComponent)("LeftBar"),w=(0,o.resolveComponent)("nav-bar"),_=(0,o.resolveComponent)("VerifyNotice");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createVNode)(g),(0,o.createElementVNode)("div",a,[(0,o.createVNode)(w),k.verified?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)(_,{key:0,id:k.id},null,8,["id"])),(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",i,[l,s,(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("a",{href:"#question_2",class:"help-page__base-question-item",onClick:t[0]||(t[0]=function(e){return k.toggleQuestion(2)})}," Как подтвердить свою учетную запись ")]),h.questions?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(h.questions,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:e.id,class:(0,o.normalizeClass)({"help-page__question-container":!0,"help-page__question-container--active":h.activeItem==e.id}),onClick:function(t){return k.toggleQuestion(e.id)},id:"question_"+e.id},[(0,o.createElementVNode)("div",f,(0,o.toDisplayString)(e.question),1),(0,o.createElementVNode)("div",m,(0,o.toDisplayString)(e.answer),1)],10,p)})),128))])):(0,o.createCommentVNode)("",!0)])])])])}]])},8619:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(1385),r=n(4590),a={class:"left-bar"},c={class:"left-bar__brand-container"},i=(0,o.createElementVNode)("img",{src:r.Z,class:"left-bar__brand",alt:"MaranBet"},null,-1),l={class:"left-bar__balance-container"},s=(0,o.createElementVNode)("span",{class:"left-bar__balance-title text_14 medium"},"Баланс (MARAN)",-1),d={class:"left-bar__balance-value text_32 bold"},u=(0,o.createTextVNode)("Верификация пройдена"),p=(0,o.createTextVNode)("Верификация не пройдена"),f={class:"left-bar__navigation"},m=(0,o.createElementVNode)("i",{class:"icon icon-wallet"},null,-1),v=(0,o.createTextVNode)(" Кошелек "),h=(0,o.createElementVNode)("i",{class:"icon icon-detailing"},null,-1),k=(0,o.createTextVNode)(" Детализация "),g=(0,o.createElementVNode)("i",{class:"icon icon-profile"},null,-1),w=(0,o.createTextVNode)(" Профиль "),_=(0,o.createElementVNode)("i",{class:"icon icon-partnership"},null,-1),b=(0,o.createTextVNode)(" Партнерская программа "),N=(0,o.createElementVNode)("i",{class:"icon icon-help"},null,-1),V=(0,o.createTextVNode)(" Помощь ");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const E={data:function(){return{verification:!0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,n(8637).Se)(["getBalance"])),mounted:function(){this.$store.dispatch("fetchBalance")}};const y=(0,n(3744).Z)(E,[["render",function(e,t,n,r,B,x){var E=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("div",c,[(0,o.createVNode)(E,{to:"/"},{default:(0,o.withCtx)((function(){return[i]})),_:1})]),(0,o.createElementVNode)("div",l,[s,(0,o.createElementVNode)("span",d,(0,o.toDisplayString)(e.getBalance?e.getBalance.balance:""),1),(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)({"left-bar__verification-status":!0,text_12:!0,"left-bar__verification-status--success":B.verification,"left-bar__verification-status--danger":!B.verification})},[B.verification?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[u],64)):(0,o.createCommentVNode)("",!0),B.verification?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[p],64))],2)]),(0,o.createElementVNode)("div",f,[(0,o.createVNode)(E,{to:{name:"home"}},{default:(0,o.withCtx)((function(){return[m,v]})),_:1}),(0,o.createVNode)(E,{to:{name:"details"}},{default:(0,o.withCtx)((function(){return[h,k]})),_:1}),(0,o.createVNode)(E,{to:{name:"profile"}},{default:(0,o.withCtx)((function(){return[g,w]})),_:1}),(0,o.createVNode)(E,{to:{name:"partnership"}},{default:(0,o.withCtx)((function(){return[_,b]})),_:1}),(0,o.createVNode)(E,{to:{name:"help"}},{default:(0,o.withCtx)((function(){return[N,V]})),_:1})])])}]])},9611:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(1385);var r={class:"dashboard-navbar"},a={key:0,class:"dashboard-navbar__flex-end"},c=(0,o.createElementVNode)("i",{class:"icon icon-profile"},null,-1),i=(0,o.createElementVNode)("img",{src:"/images/chevron-right.svg?2d5d38f5442a4c3b28c8d39c9062927f",class:"chevron"},null,-1),l=[(0,o.createElementVNode)("i",{class:"icon icon-logout"},null,-1),(0,o.createTextVNode)(" Выход ")],s={key:1,class:"flex"},d=(0,o.createTextVNode)(" Вход "),u=(0,o.createTextVNode)(" Регистрация ");var p=n(7757),f=n.n(p),m=n(7751);function v(e,t,n,o,r,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(o,r)}const h={components:{CogIcon:m.IEm,LogoutIcon:m.R0g,ChevronDownIcon:m.v4q},data:function(){return{drop:!1}},computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var e,t=this;return(e=f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout");case 2:t.$router.push({name:"login"});case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function c(e){v(a,o,r,c,i,"next",e)}function i(e){v(a,o,r,c,i,"throw",e)}c(void 0)}))})()}}};const k=(0,n(3744).Z)(h,[["render",function(e,t,n,p,f,m){var v=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[m.user?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createVNode)(v,{to:{name:"profile"},class:"dashboard-navbar__buttons"},{default:(0,o.withCtx)((function(){return[c,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(m.user.email)+" ",1),i]})),_:1}),(0,o.createElementVNode)("div",{class:"dashboard-navbar__buttons",onClick:t[0]||(t[0]=function(){return m.logout&&m.logout.apply(m,arguments)})},l)])):((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[(0,o.createVNode)(v,{class:"p-4 tracking-widest flex items-center text-gray-600","active-class":"font-semibold text-gray-800",to:{name:"login"}},{default:(0,o.withCtx)((function(){return[d]})),_:1}),(0,o.createVNode)(v,{class:"p-4 tracking-widest flex items-center text-gray-600","active-class":"font-semibold text-gray-800",to:{name:"register"}},{default:(0,o.withCtx)((function(){return[u]})),_:1})]))])}]])},7517:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(1385),r={class:"email-verification-alert__container"},a={class:"widget email-verification-alert"},c=(0,o.createElementVNode)("div",{class:"email-verification-alert__text"},[(0,o.createElementVNode)("span",{class:"text_18 bold email-verification-alert__title"},"Ваш Email не верифицирован"),(0,o.createElementVNode)("span",{class:"text_14"},"Пожалуйста перейдите по ссылке в письме для завершения верификации.")],-1),i={class:"email-verification-alert__button"};const l={props:["id"],data:function(){return{sent:!1}},methods:{resend:function(){var e=this;this.$store.dispatch("verifyResend",{id:this.id}).then((function(t){e.sent=!0})).catch((function(t){e.error="Ошибка сервера, попробуйте позднее"}))}}};const s=(0,n(3744).Z)(l,[["render",function(e,t,n,l,s,d){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",a,[c,(0,o.createElementVNode)("div",i,[s.sent?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:1,onClick:t[1]||(t[1]=function(){return d.resend&&d.resend.apply(d,arguments)}),class:"py-2 px-3 bg-blue-600 text-white rounded"}," Письмо отправлено! ")):((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,onClick:t[0]||(t[0]=function(){return d.resend&&d.resend.apply(d,arguments)}),class:"button button_blue"}," Отправить повторно "))])])])}]])},7751:(e,t,n)=>{n.d(t,{v4q:()=>r,IEm:()=>a,_m8:()=>c,R0g:()=>i,tBG:()=>l,b0D:()=>s});var o=n(1385);function r(e,t){return(0,o.openBlock)(),(0,o.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])}function a(e,t){return(0,o.openBlock)(),(0,o.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}function c(e,t){return(0,o.openBlock)(),(0,o.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}function i(e,t){return(0,o.openBlock)(),(0,o.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})])}function l(e,t){return(0,o.openBlock)(),(0,o.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}function s(e,t){return(0,o.openBlock)(),(0,o.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}}}]);