"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7949],{762:(e,t,n)=>{n.d(t,{Z:()=>r});const r="/images/edit-icon.svg?44d43abec10e21e5bd93a6bc6b422f72"},7949:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(1385),a=n(762),o={class:"admin-dashboard__100 admin-events-list"},l={class:"admin-dashboard__heading"},i=(0,r.createElementVNode)("h1",null,"Все события",-1),c=(0,r.createTextVNode)("Создать событие"),s={class:"aui-col-3"},u=(0,r.createElementVNode)("div",{class:"aui-form-group"},null,-1),d={class:"aui-form-group"},m=(0,r.createElementVNode)("p",null,"Фильтр по категории",-1),g=(0,r.createElementVNode)("option",{value:"0"},"Не выбрано",-1),v=["value"],f={class:"aui-form-group"},p=(0,r.createElementVNode)("p",null,"Фильтр по подкатегории",-1),E=(0,r.createElementVNode)("option",{value:"0"},"Не выбрано",-1),y=["value"],b={class:"admin-table"},V=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("td",null,"ID"),(0,r.createElementVNode)("td",null,"Название"),(0,r.createElementVNode)("td",null,"Активность"),(0,r.createElementVNode)("td")])],-1),h=["textContent"],N=["textContent"],k=["textContent"],x=(0,r.createElementVNode)("img",{src:a.Z,alt:"Редактировать"},null,-1),B=(0,r.createTextVNode)(" Редактировать "),_={key:1},C=[(0,r.createElementVNode)("td",{colspan:"4"}," Нет событий для отображения ",-1)];var S=n(7757),w=n.n(S);function D(e,t,n,r,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){D(o,r,a,l,i,"next",e)}function i(e){D(o,r,a,l,i,"throw",e)}l(void 0)}))}}const L={data:function(){return{events:[],events_original:[],subcategories:[],subcategories_original:[],categories:[],filters:{category:0,subcategory:0}}},mounted:function(){var e=this;return F(w().mark((function t(){var n,r,a,o;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/admin/event/list");case 2:return n=t.sent,r=n.data,e.events_original=r,e.events=r,t.next=8,axios.get("/api/admin/category/list");case 8:return a=t.sent,r=a.data,e.categories=r,t.next=13,axios.get("/api/admin/sub-category/list");case 13:o=t.sent,r=o.data,e.subcategories_original=r,e.subcategories=r;case 17:case"end":return t.stop()}}),t)})))()},methods:{removeEvent:function(e){var t=this;return F(w().mark((function n(){var r,a;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,axios.post("/api/admin/event/remove/"+e);case 2:r=n.sent,a=r.data,t.events=a;case 5:case"end":return n.stop()}}),n)})))()},filterBySubcategory:function(){var e=this;this.events=this.events_original.filter((function(t){return t.subcategory_id===e.filters.subcategory}))},filterSubcategories:function(){var e=this;this.subcategories=this.subcategories_original.filter((function(t){return t.category_id===e.filters.category}))}}};const Z=(0,n(3744).Z)(L,[["render",function(e,t,n,a,S,w){var D=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[i,(0,r.createVNode)(D,{to:{name:"admin-event-create"},class:"aui-button"},{default:(0,r.withCtx)((function(){return[c]})),_:1})]),(0,r.createElementVNode)("div",s,[u,(0,r.createElementVNode)("div",d,[m,(0,r.withDirectives)((0,r.createElementVNode)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return S.filters.category=e}),class:"aui-select aui-select_small",onChange:t[1]||(t[1]=function(){return w.filterSubcategories&&w.filterSubcategories.apply(w,arguments)})},[g,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(S.categories,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{key:e.id,value:e.id},(0,r.toDisplayString)(e.title),9,v)})),128))],544),[[r.vModelSelect,S.filters.category]])]),(0,r.createElementVNode)("div",f,[p,(0,r.withDirectives)((0,r.createElementVNode)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.filters.subcategory=e}),class:"aui-select aui-select_small",onChange:t[3]||(t[3]=function(){return w.filterBySubcategory&&w.filterBySubcategory.apply(w,arguments)})},[E,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(S.subcategories,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{key:e.id,value:e.id},(0,r.toDisplayString)(e.title),9,y)})),128))],544),[[r.vModelSelect,S.filters.subcategory]])])]),(0,r.createElementVNode)("table",b,[V,(0,r.createElementVNode)("tbody",null,[S.events.length?((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,{key:0},(0,r.renderList)(S.events,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:e.id},[(0,r.createElementVNode)("td",{textContent:(0,r.toDisplayString)(e.id)},null,8,h),(0,r.createElementVNode)("td",{textContent:(0,r.toDisplayString)(e.title)},null,8,N),(0,r.createElementVNode)("td",{textContent:(0,r.toDisplayString)(e.active?"Активно":"Не активно")},null,8,k),(0,r.createElementVNode)("td",null,[(0,r.createVNode)(D,{to:{name:"admin-event-edit",params:{id:e.id}},class:"aui-btn-edit"},{default:(0,r.withCtx)((function(){return[x,B]})),_:2},1032,["to"])])])})),128)):((0,r.openBlock)(),(0,r.createElementBlock)("tr",_,C))])])])}]])}}]);