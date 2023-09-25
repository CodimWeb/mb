"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{3071:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(1385),r={class:"admin-dashboard"},o={class:"admin-dashboard__left-bar"},d={class:"admin-dashboard__content"},c={class:"admin-dashboard__logout"};var i=a(7757),l=a.n(i);var s={class:"admin-dashboard-left-bar"},u=(0,n.createElementVNode)("img",{src:"/images/admin-logo.svg?989e1073413bd0658af3730849207eeb",class:"admin-dashboard-left-bar__logo",alt:"MaranBet"},null,-1),m={class:"admin-dashboard-left-bar__menu"},b=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__home.svg?b32fc73db29bb1ebbbfac0196066388b"},null,-1),f=(0,n.createTextVNode)(" Статистика "),h=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__categories.svg?4e8e16825f81b0695db7d5aca8e2b824"},null,-1),g=(0,n.createTextVNode)(" Категории "),N=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__subcategories.svg?0868ebb57e0cc657354acfa97bfa892d"},null,-1),V=(0,n.createTextVNode)(" Подкатегории "),v=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__events.svg?babdae7467fada897becd1b2b0535f19"},null,-1),_=(0,n.createTextVNode)(" События "),E=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__games.svg?8077ccbb0c6b68054f352b660a1363e3"},null,-1),p=(0,n.createTextVNode)(" Игры "),x=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__menu.svg?7edaf4ad5946ea3393e57c88b23ad6db"},null,-1),w=(0,n.createTextVNode)(" Управление меню "),C=(0,n.createElementVNode)("img",{src:"/images/admin-dashboard-icon__results.svg?3e615ff2b230e5c46201337449b0b48e"},null,-1),k=(0,n.createTextVNode)(" Результаты матчей ");var B=a(3744);const T={};function $(e,t,a,n,r,o,d){try{var c=e[o](d),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(n,r)}const y={components:{LeftBar:(0,B.Z)(T,[["render",function(e,t){var a=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createVNode)(a,{to:"/"},{default:(0,n.withCtx)((function(){return[u]})),_:1}),(0,n.createElementVNode)("ul",m,[(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-dashboard-home"}},{default:(0,n.withCtx)((function(){return[b,f]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-categories"}},{default:(0,n.withCtx)((function(){return[h,g]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-subcategories"}},{default:(0,n.withCtx)((function(){return[N,V]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-events"}},{default:(0,n.withCtx)((function(){return[v,_]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-games"}},{default:(0,n.withCtx)((function(){return[E,p]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-menu"}},{default:(0,n.withCtx)((function(){return[x,w]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)(a,{to:{name:"admin-result-list"}},{default:(0,n.withCtx)((function(){return[C,k]})),_:1})])])])}]])},computed:{user:function(){return this.$store.getters.user}},mounted:function(){5!==this.user.role&&this.$router.push({name:"home"})},methods:{logout:function(){var e,t=this;return(e=l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout");case 2:t.$router.push({name:"login"});case 3:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function d(e){$(o,n,r,d,c,"next",e)}function c(e){$(o,n,r,d,c,"throw",e)}d(void 0)}))})()}}},L=(0,B.Z)(y,[["render",function(e,t,a,i,l,s){var u=(0,n.resolveComponent)("LeftBar"),m=(0,n.resolveComponent)("router-view");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",o,[(0,n.createVNode)(u)]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("a",{href:"#",class:"admin-dashboard__logout-link",onClick:t[0]||(t[0]=(0,n.withModifiers)((function(){return s.logout&&s.logout.apply(s,arguments)}),["prevent"]))},"Выход")]),(0,n.createVNode)(m)])])}]])}}]);