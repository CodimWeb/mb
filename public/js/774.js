"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[774],{4590:(t,e,n)=>{n.d(e,{Z:()=>r});const r="/images/logo_darken.png?de335d67e9ad40e346be82dbd84c04f7"},6821:(t,e,n)=>{n.d(e,{Z:()=>r});const r="/images/refill.svg?4630980f6dd0f6246dcebeb2cedeb63f"},7331:(t,e,n)=>{n.d(e,{Z:()=>r});const r="/images/transaction.svg?d6758c6f4076b3956a83724a9c5119c4"},6157:(t,e,n)=>{n.d(e,{Z:()=>r});const r="/images/withdrawal.svg?8ef5ff4f26941aa620d198f033870462"},5774:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var r=n(1385),i=n(6821),a=n(7331),o=n(6157),s={class:"dashboard"},d={class:"app"},c=(0,r.uE)('<div class="dashboard-page details-page"><div class="dashboard__content"><div class="dashboard__heading"><h1>Детализация</h1></div><div class="details-page__desktop-table"><div class="widget-header">История операций</div><div class="widget widget-table"><table><thead><tr><td>Тип операции</td><td>Дата</td><td>Сумма</td><td>Транзакция</td><td>Курс</td></tr></thead><tbody><tr><td><img src="'+i.Z+'" class="widget-table__operation-icon"> Пополнение </td><td>14.01.2022</td><td>+0.00001 USDT</td><td> 0xc0ffee2547....4979 <img src="'+a.Z+'" class="widget-table__transaction-icon"> 0xc0ffee0014....1458 </td><td>52 000 USDT / BTC</td></tr><tr><td><img src="'+o.Z+'" class="widget-table__operation-icon"> Вывод средств </td><td>10.01.2022</td><td>-0.00001 USDT</td><td> 0xc0ffee2547....4979 <img src="'+a.Z+'" class="widget-table__transaction-icon"> 0xc0ffee0014....1458 </td><td>52 000 USDT / BTC</td></tr><tr><td><img src="'+i.Z+'" class="widget-table__operation-icon"> Пополнение </td><td>14.01.2022</td><td>+0.00001 USDT</td><td> 0xc0ffee2547....4979 <img src="'+a.Z+'" class="widget-table__transaction-icon"> 0xc0ffee0014....1458 </td><td>52 000 USDT / BTC</td></tr><tr><td><img src="'+i.Z+'" class="widget-table__operation-icon"> Пополнение </td><td>14.01.2022</td><td>+0.00001 USDT</td><td> 0xc0ffee2547....4979 <img src="'+a.Z+'" class="widget-table__transaction-icon"> 0xc0ffee0014....1458 </td><td>52 000 USDT / BTC</td></tr></tbody></table></div></div></div></div>',1);var l=n(9611),u=n(5040),f=n(7517);const v={components:{NavBar:l.Z,LeftBar:u.Z,VerifyNotice:f.Z},data:function(){return{test:!0}},computed:{id:function(){return this.$store.getters.id},verified:function(){return this.$store.getters.verified}}};const g=(0,n(3744).Z)(v,[["render",function(t,e,n,i,a,o){var l=(0,r.up)("LeftBar"),u=(0,r.up)("nav-bar"),f=(0,r.up)("VerifyNotice");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(l),(0,r._)("div",d,[(0,r.Wm)(u),o.verified?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(f,{key:0,id:o.id},null,8,["id"])),c])])}]])},5040:(t,e,n)=>{n.d(e,{Z:()=>D});var r=n(1385),i=n(4590),a={class:"left-bar"},o={class:"left-bar__brand-container"},s=(0,r._)("img",{src:i.Z,class:"left-bar__brand",alt:"MaranBet"},null,-1),d={class:"left-bar__balance-container"},c=(0,r._)("span",{class:"left-bar__balance-title text_14 medium"},"Баланс (MARAN)",-1),l=(0,r._)("span",{class:"left-bar__balance-value text_32 bold"},"250000",-1),u=(0,r.Uk)("Верификация пройдена"),f=(0,r.Uk)("Верификация не пройдена"),v={class:"left-bar__navigation"},g=(0,r._)("i",{class:"icon icon-wallet"},null,-1),_=(0,r.Uk)(" Кошелек "),w=(0,r._)("i",{class:"icon icon-detailing"},null,-1),p=(0,r.Uk)(" Детализация "),m=(0,r._)("i",{class:"icon icon-profile"},null,-1),h=(0,r.Uk)(" Профиль "),b=(0,r._)("i",{class:"icon icon-partnership"},null,-1),k=(0,r.Uk)(" Партнерская программа "),x=(0,r._)("i",{class:"icon icon-help"},null,-1),Z=(0,r.Uk)(" Помощь ");const y={data:function(){return{verification:!0}}};const D=(0,n(3744).Z)(y,[["render",function(t,e,n,i,y,D){var U=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",o,[(0,r.Wm)(U,{to:"/"},{default:(0,r.w5)((function(){return[s]})),_:1})]),(0,r._)("div",d,[c,l,(0,r._)("span",{class:(0,r.C_)({"left-bar__verification-status":!0,text_12:!0,"left-bar__verification-status--success":y.verification,"left-bar__verification-status--danger":!y.verification})},[y.verification?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[u],64)):(0,r.kq)("",!0),y.verification?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[f],64))],2)]),(0,r._)("div",v,[(0,r.Wm)(U,{to:{name:"home"}},{default:(0,r.w5)((function(){return[g,_]})),_:1}),(0,r.Wm)(U,{to:{name:"details"}},{default:(0,r.w5)((function(){return[w,p]})),_:1}),(0,r.Wm)(U,{to:{name:"profile"}},{default:(0,r.w5)((function(){return[m,h]})),_:1}),(0,r.Wm)(U,{to:{name:"partnership"}},{default:(0,r.w5)((function(){return[b,k]})),_:1}),(0,r.Wm)(U,{to:{name:"help"}},{default:(0,r.w5)((function(){return[x,Z]})),_:1})])])}]])},9611:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(1385);var i={class:"dashboard-navbar"},a={key:0,class:"dashboard-navbar__flex-end"},o=(0,r._)("i",{class:"icon icon-profile"},null,-1),s=(0,r._)("img",{src:"/images/chevron-right.svg?2d5d38f5442a4c3b28c8d39c9062927f",class:"chevron"},null,-1),d=[(0,r._)("i",{class:"icon icon-logout"},null,-1),(0,r.Uk)(" Выход ")],c={key:1,class:"flex"},l=(0,r.Uk)(" Вход "),u=(0,r.Uk)(" Регистрация ");var f=n(7757),v=n.n(f),g=n(7751);function _(t,e,n,r,i,a,o){try{var s=t[a](o),d=s.value}catch(t){return void n(t)}s.done?e(d):Promise.resolve(d).then(r,i)}const w={components:{CogIcon:g.IEm,LogoutIcon:g.R0g,ChevronDownIcon:g.v4q},data:function(){return{drop:!1}},computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var t,e=this;return(t=v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push({name:"login"});case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){_(a,r,i,o,s,"next",t)}function s(t){_(a,r,i,o,s,"throw",t)}o(void 0)}))})()}}};const p=(0,n(3744).Z)(w,[["render",function(t,e,n,f,v,g){var _=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[g.user?((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(_,{to:{name:"profile"},class:"dashboard-navbar__buttons"},{default:(0,r.w5)((function(){return[o,(0,r.Uk)(" "+(0,r.zw)(g.user.email)+" ",1),s]})),_:1}),(0,r._)("div",{class:"dashboard-navbar__buttons",onClick:e[0]||(e[0]=function(){return g.logout&&g.logout.apply(g,arguments)})},d)])):((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(_,{class:"p-4 tracking-widest flex items-center text-gray-600","active-class":"font-semibold text-gray-800",to:{name:"login"}},{default:(0,r.w5)((function(){return[l]})),_:1}),(0,r.Wm)(_,{class:"p-4 tracking-widest flex items-center text-gray-600","active-class":"font-semibold text-gray-800",to:{name:"register"}},{default:(0,r.w5)((function(){return[u]})),_:1})]))])}]])},7517:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(1385),i={class:"email-verification-alert__container"},a={class:"widget email-verification-alert"},o=(0,r._)("div",{class:"email-verification-alert__text"},[(0,r._)("span",{class:"text_18 bold email-verification-alert__title"},"Ваш Email не верифицирован"),(0,r._)("span",{class:"text_14"},"Пожалуйста перейдите по ссылке в письме для завершения верификации.")],-1),s={class:"email-verification-alert__button"};const d={props:["id"],data:function(){return{sent:!1}},methods:{resend:function(){var t=this;this.$store.dispatch("verifyResend",{id:this.id}).then((function(e){t.sent=!0})).catch((function(e){t.error="Ошибка сервера, попробуйте позднее"}))}}};const c=(0,n(3744).Z)(d,[["render",function(t,e,n,d,c,l){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",a,[o,(0,r._)("div",s,[c.sent?((0,r.wg)(),(0,r.iD)("div",{key:1,onClick:e[1]||(e[1]=function(){return l.resend&&l.resend.apply(l,arguments)}),class:"py-2 px-3 bg-blue-600 text-white rounded"}," Письмо отправлено! ")):((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:e[0]||(e[0]=function(){return l.resend&&l.resend.apply(l,arguments)}),class:"button button_blue"}," Отправить повторно "))])])])}]])},7751:(t,e,n)=>{n.d(e,{v4q:()=>i,IEm:()=>a,_m8:()=>o,R0g:()=>s,tBG:()=>d,b0D:()=>c});var r=n(1385);function i(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])}function a(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}function o(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}function s(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})])}function d(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}function c(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}}}]);