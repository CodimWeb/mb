"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[779],{2150:(t,e,n)=>{n.d(e,{Z:()=>o});const o="/images/logo.png?48191adc53d9651278215d0efa6cd642"},3779:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var o=n(1385),i={class:"category-page__heading"},r={class:"category-page"},c={class:"category-page__main-content"},a={class:"category-page__right-bar"};var s=n(2565),l=n(3518),u=n(2205);const d={components:{HeaderFront:s.Z,CategoryComponent:l.Z,BetsComponent:u.Z},data:function(){return{auth:!0}},computed:{user:function(){return this.$store.getters.user}},updated:function(){console.log(this.$route.params.category)}};const _=(0,n(3744).Z)(d,[["render",function(t,e,n,s,l,u){var d=(0,o.up)("header-front"),_=(0,o.up)("category-component"),p=(0,o.up)("bets-component");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(d),(0,o._)("div",i,[(0,o._)("h1",null,"Категория "+(0,o.zw)(this.$route.params.category),1)]),(0,o._)("div",r,[(0,o._)("div",c,[(0,o.Wm)(_)]),(0,o._)("div",a,[(0,o.Wm)(p)])])],64)}]])},2205:(t,e,n)=>{n.d(e,{Z:()=>z});var o=n(1385),i={class:"bets-component"},r={class:"bets-component__tabs"},c={class:"bets-component__tabs-content"},a={key:0,class:(0,o.C_)({"bets-component__tab-content":!0,"bets-component__tab-content-coupons":!0})},s={class:"bets-component__list-coupons"},l=["onClick"],u={class:"bets-component__list-coupons-item-row"},d=(0,o._)("span",null," - ",-1),_={class:"bets-component__list-coupons-item-row bets-component__list-coupons-item-row-justify"},p={class:"bets-component__bottom-content"},b={class:"bets-component__bottom-row"},g=(0,o._)("span",null,"Сумма ставки",-1),f={class:"bets-component__bottom-row"},v=(0,o._)("span",null,"Итоговый коэффициент",-1),y={class:"bets-component__bottom-row"},m=(0,o._)("span",null,"Возможный выигрыш",-1),w=(0,o.Uk)("Зарегистрироваться"),h={key:1,class:(0,o.C_)({"bets-component__tab-content":!0,"bets-component__tab-content-coupons":!0})};var k=n(8637);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){D(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const j={computed:(0,k.Se)(["couponsList"]),data:function(){return{tab:"coupons",user_bet:0,total_rate:0,total_prize:0}},methods:O(O(O({},(0,k.OI)(["removeCoupon"])),(0,k.nv)(["fetchCoupons"])),{},{setTab:function(t){this.tab=t},recount:function(){var t=this;this.total_rate=0,this.couponsList.forEach((function(e){t.total_rate+=parseFloat(e.rate)})),this.total_rate=this.total_rate.toFixed(2),this.total_prize=(this.user_bet*this.total_rate).toFixed(2)}}),mounted:function(){this.$store.dispatch("fetchCoupons")}};const z=(0,n(3744).Z)(j,[["render",function(t,e,n,k,C,O){var D=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",r,[(0,o._)("div",{onClick:e[0]||(e[0]=function(t){return O.setTab("coupons")}),class:(0,o.C_)({"bets-component__tab-control":!0,"bets-component__tab-control--active":"coupons"==C.tab})}," Купон ставок ",2),(0,o._)("div",{onClick:e[1]||(e[1]=function(t){return O.setTab("bets")}),class:(0,o.C_)({"bets-component__tab-control":!0,"bets-component__tab-control--active":"bets"==C.tab})}," Открытые ставки ",2)]),(0,o._)("div",c,["coupons"==C.tab?((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.couponsList,(function(e){return(0,o.wg)(),(0,o.iD)("div",{class:"bets-component__list-coupons-item",key:e.id},[(0,o._)("div",{class:"close",onClick:function(n){t.removeCoupon(e.id),O.recount()}},null,8,l),(0,o._)("div",u,[(0,o._)("span",null,(0,o.zw)(e.condidate_1),1),d,(0,o._)("span",null,(0,o.zw)(e.condidate_2),1)]),(0,o._)("div",_,[(0,o._)("span",null,"П"+(0,o.zw)(e.selected),1),(0,o._)("span",null,(0,o.zw)(e.rate),1)])])})),128))]),(0,o._)("div",p,[(0,o._)("div",b,[g,(0,o.wy)((0,o._)("input",{type:"number",step:"1",min:"0","onUpdate:modelValue":e[2]||(e[2]=function(t){return C.user_bet=t}),onChange:e[3]||(e[3]=function(t){return O.recount()})},null,544),[[o.nr,C.user_bet]])]),(0,o._)("div",f,[v,(0,o._)("span",null,(0,o.zw)(C.total_rate),1)]),(0,o._)("div",y,[m,(0,o._)("span",null,(0,o.zw)(C.total_prize),1)])]),(0,o.Wm)(D,{class:"button",to:{name:"register"}},{default:(0,o.w5)((function(){return[w]})),_:1})])):(0,o.kq)("",!0),"bets"==C.tab?((0,o.wg)(),(0,o.iD)("div",h," Действующие ставки, этот блок появится после того как будет написан Back-End ")):(0,o.kq)("",!0)])])}]])},3518:(t,e,n)=>{n.d(e,{Z:()=>C});var o=n(1385),i={class:"category-bets"},r={class:"category-bets__sub-categories"},c={class:"category-bets__sub-categories-list"},a=["onClick"],s={class:"category-bets__headline"},l={key:0,class:"category-bets__events"},u=["onClick"],d={key:0,class:"category-bets__bets-list"},_=["onClick"],p={class:"grid"},b=(0,o._)("div",null,[(0,o._)("small",null,"Ничья")],-1),g=["onClick"],f={class:"place_a_bet"},v=["onClick"];var y=n(8637);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const k={computed:(0,y.Se)(["getCategoryEvents","getCategoryEventsBySubcategory"]),data:function(){return{subcategory_data:[{id:0,slug:"all",icon:"all-icon",title:"Все"},{id:1,slug:"football",icon:"football-icon",title:"Футбол"},{id:2,slug:"tennis",icon:"tennis-icon",title:"Теннис"},{id:3,slug:"basketball",icon:"basketball-icon",title:"Баскетбол"},{id:4,slug:"hockey",icon:"hockey-icon",title:"Хоккей"},{id:5,slug:"volleyball",icon:"volleyball-icon",title:"Волейбол"},{id:6,slug:"pingpong",icon:"pingpong-icon",title:"Настольный теннис"},{id:7,slug:"handball",icon:"handball-icon",title:"Гандбол"}],subcategory:null}},methods:w(w(w({},(0,y.nv)(["fetchCategoryEvents"])),(0,y.OI)(["filterBySubcategory","toggleEvent","addCoupon"])),{},{toggleCategory:function(t){this.subcategory=t,this.filterBySubcategory({subcategory_id:this.subcategory})},setDefaultSubcategory:function(){this.subcategory=0}}),mounted:function(){this.$store.dispatch("fetchCategoryEvents"),this.setDefaultSubcategory()}};const C=(0,n(3744).Z)(k,[["render",function(t,e,n,y,m,w){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",r,[(0,o._)("ul",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.subcategory_data,(function(t){return(0,o.wg)(),(0,o.iD)("li",{key:t.id,onClick:function(e){return w.toggleCategory(t.id)},class:(0,o.C_)({"category-bets__sub-category--active":t.id==m.subcategory})},[(0,o._)("i",{class:(0,o.C_)(t.icon)},null,2),(0,o.Uk)(" "+(0,o.zw)(t.title),1)],10,a)})),128))])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.getCategoryEvents,(function(e){return(0,o.wg)(),(0,o.iD)("div",{class:(0,o.C_)({"category-bets__head":!0}),key:e.id},[(0,o._)("div",s,(0,o.zw)(e.title),1),e.events?((0,o.wg)(),(0,o.iD)("div",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.events,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("div",{class:(0,o.C_)({"category-bets__single-event":!0,"category-bets__single-event--active":e.is_open}),onClick:function(n){return t.toggleEvent(e.id)}},[(0,o.Uk)((0,o.zw)(e.title)+" ",1),(0,o._)("i",{class:(0,o.C_)({carret:!0,"carret-down":!e.is_open,"carret-up":e.is_open})},null,2)],10,u),e.is_open?((0,o.wg)(),(0,o.iD)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.bets,(function(e){return(0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("div",null,[(0,o._)("div",{class:"star",role:"button",onClick:function(n){return t.addToFavorite({id:e.id})}},null,8,_)]),(0,o._)("div",null,(0,o.zw)(e.date),1),(0,o._)("div",null,(0,o.zw)(e.condidate_1)+" / "+(0,o.zw)(e.condidate_2),1),(0,o._)("div",null,(0,o.zw)(e.time),1),(0,o._)("div",null,[(0,o._)("div",p,[(0,o._)("div",null,[(0,o._)("small",null,(0,o.zw)(e.condidate_1),1)]),b,(0,o._)("div",null,[(0,o._)("small",null,(0,o.zw)(e.condidate_2),1)]),(0,o._)("div",{class:"place_a_bet",onClick:function(n){return t.addCoupon({id:e.id,condidate_1:e.condidate_1,condidate_2:e.condidate_2,selected:1,rate:e.condidate_1_rate})}},(0,o.zw)(e.condidate_1_rate),9,g),(0,o._)("div",f,(0,o.zw)(e.no_condidate_rate?e.no_condidate_rate:" - "),1),(0,o._)("div",{class:"place_a_bet",onClick:function(n){return t.addCoupon({id:e.id,condidate_1:e.condidate_1,condidate_2:e.condidate_2,selected:2,rate:e.condidate_2_rate})}},(0,o.zw)(e.condidate_2_rate),9,v)])])])})),128))])):(0,o.kq)("",!0)])})),128))])):(0,o.kq)("",!0)])})),128))])}]])},2565:(t,e,n)=>{n.d(e,{Z:()=>y});var o=n(1385),i=n(2150),r={class:"front-header"},c={class:"front-header__brand"},a=(0,o._)("img",{src:i.Z,alt:"MaranBet"},null,-1),s={class:"front-header__menu"},l={key:0,class:"front-header__list"},u={key:0,class:"front-header__auth"},d={key:1,class:"front-header__auth"},_=(0,o.Uk)("Регистрация"),p=(0,o.Uk)("Войти");var b=n(7757),g=n.n(b);function f(t,e,n,o,i,r,c){try{var a=t[r](c),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(o,i)}const v={data:function(){return{menu:[{id:99,title:"Главная",link:"/"},{id:0,title:"Спорт",link:"/category/sport/"},{id:1,title:"Live",link:"/category/live/"},{id:2,title:"Кибер спорт",link:"/category/cyber-sports/"},{id:3,title:"Крипто ставки",link:"/category/crypto-bets/"},{id:4,title:"Эксклюзивные пари",link:"/category/exclusive-bets/"},{id:5,title:"MARAN токен",link:"/maran-token/"},{id:6,title:"Результаты",link:"/results/"}]}},computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var t,e=this;return(t=g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push({name:"login"});case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var r=t.apply(e,n);function c(t){f(r,o,i,c,a,"next",t)}function a(t){f(r,o,i,c,a,"throw",t)}c(void 0)}))})()}}};const y=(0,n(3744).Z)(v,[["render",function(t,e,n,i,b,g){var f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",r,[(0,o._)("div",c,[(0,o.Wm)(f,{to:"/"},{default:(0,o.w5)((function(){return[a]})),_:1})]),(0,o._)("div",s,[this.menu.length?((0,o.wg)(),(0,o.iD)("ul",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.menu,(function(t){return(0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Wm)(f,{to:t.link},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,o.zw)(t.title),1)]})),_:2},1032,["to"])])})),128))])):(0,o.kq)("",!0)]),g.user?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(f,{to:{name:"home"}},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,o.zw)(g.user.name),1)]})),_:1}),(0,o._)("span",{onClick:e[0]||(e[0]=function(){return g.logout&&g.logout.apply(g,arguments)})}," Выход ")])):((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(f,{to:{name:"register"}},{default:(0,o.w5)((function(){return[_]})),_:1}),(0,o.Wm)(f,{to:{name:"login"}},{default:(0,o.w5)((function(){return[p]})),_:1})]))])}]])}}]);