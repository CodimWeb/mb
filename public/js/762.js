"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[762],{2150:(t,e,n)=>{n.d(e,{Z:()=>a});const a="/images/logo.png?48191adc53d9651278215d0efa6cd642"},7762:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var a=n(1385),s=(0,a.uE)('<div class="token-page"><div class="token-page__banner"><h1>Maran Token</h1></div><div class="token-page__info"><span class="text_32 bold">MARAN - это нативный токен платформы MaranBet</span><span class="text_24">Он работает по стандарту ERC-20 блокчейна Ethereum.</span><span class="text_24">Основное применение - возможность участия в онлайн ставках.</span><span class="text_24">Вы также можете инвестировать в токен MARAN в качестве долгосрочной перспективы или же торговать им на биржах для получения дополнительного заработка.</span></div><div class="token-page__data"><div class="token-page__grid-3-columns"><div class="token-page__row"><span class="text_12">Название</span><span class="text_24 bold">MARAN</span></div><div class="token-page__row"><span class="text_12">Обозначение</span><span class="text_24 bold">MARAN</span></div><div class="token-page__row"><span class="text_12">Тип токена</span><span class="text_24 bold">ERC-20</span></div></div><div class="token-page__row"><span class="text_12">Общий объем предложения</span><span class="text_24 bold">100 000 000 000</span></div><div class="token-page__row"><span class="text_12">Адрес контракта</span><span class="text_24 bold">0x5f9123d661459af6f398b6f1566f53222612541e</span></div></div></div>',1);const r={components:{HeaderFront:n(2565).Z},data:function(){return{test:!0}}};const o=(0,n(3744).Z)(r,[["render",function(t,e,n,r,o,i){var l=(0,a.up)("header-front");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),s],64)}]])},2565:(t,e,n)=>{n.d(e,{Z:()=>h});var a=n(1385),s=n(2150),r={class:"front-header"},o={class:"front-header__brand"},i=(0,a._)("img",{src:s.Z,alt:"MaranBet"},null,-1),l={class:"front-header__menu"},c={key:0,class:"front-header__list"},u={key:0,class:"front-header__auth"},d={key:1,class:"front-header__auth"},p=(0,a.Uk)("Регистрация"),_=(0,a.Uk)("Войти");var f=n(7757),v=n.n(f);function k(t,e,n,a,s,r,o){try{var i=t[r](o),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(a,s)}const g={data:function(){return{menu:[{id:99,title:"Главная",link:"/"},{id:0,title:"Спорт",link:"/category/sport/"},{id:1,title:"Live",link:"/category/live/"},{id:2,title:"Кибер спорт",link:"/category/cyber-sports/"},{id:3,title:"Крипто ставки",link:"/category/crypto-bets/"},{id:4,title:"Эксклюзивные пари",link:"/category/exclusive-bets/"},{id:5,title:"MARAN токен",link:"/maran-token/"},{id:6,title:"Результаты",link:"/results/"}]}},computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var t,e=this;return(t=v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push({name:"login"});case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,s){var r=t.apply(e,n);function o(t){k(r,a,s,o,i,"next",t)}function i(t){k(r,a,s,o,i,"throw",t)}o(void 0)}))})()}}};const h=(0,n(3744).Z)(g,[["render",function(t,e,n,s,f,v){var k=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",r,[(0,a._)("div",o,[(0,a.Wm)(k,{to:"/"},{default:(0,a.w5)((function(){return[i]})),_:1})]),(0,a._)("div",l,[this.menu.length?((0,a.wg)(),(0,a.iD)("ul",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.menu,(function(t){return(0,a.wg)(),(0,a.iD)("li",{key:t.id},[(0,a.Wm)(k,{to:t.link},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,a.zw)(t.title),1)]})),_:2},1032,["to"])])})),128))])):(0,a.kq)("",!0)]),v.user?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(k,{to:{name:"home"}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,a.zw)(v.user.name),1)]})),_:1}),(0,a._)("span",{onClick:e[0]||(e[0]=function(){return v.logout&&v.logout.apply(v,arguments)})}," Выход ")])):((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(k,{to:{name:"register"}},{default:(0,a.w5)((function(){return[p]})),_:1}),(0,a.Wm)(k,{to:{name:"login"}},{default:(0,a.w5)((function(){return[_]})),_:1})]))])}]])}}]);