"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[714],{5714:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var o=r(1385),n={class:"admin-dashboard__100 admin-categories-list"},a=(0,o.createElementVNode)("div",{class:"admin-dashboard__heading"},[(0,o.createElementVNode)("h1",null,"Создать подкатегорию")],-1),c={class:"aui-form-group"},l=(0,o.createElementVNode)("p",null,"Название",-1),s={class:"aui-form-group"},i=(0,o.createElementVNode)("p",null,"Slug",-1),u={class:"aui-form-group"},d=(0,o.createElementVNode)("p",null,"Иконка:",-1),m={key:0,class:"aui-form-group"},p=(0,o.createElementVNode)("p",null,"Выберите категорию:",-1),g=["value","textContent"],v={class:"aui-form-group"},f=(0,o.createElementVNode)("label",{for:"active-category"}," Включить подкатегорию ",-1),h=(0,o.createElementVNode)("div",{class:"aui-form-group"},[(0,o.createElementVNode)("button",{type:"submit",class:"aui-button aui-button__100"},"Создать")],-1);var y=r(7757),k=r.n(y);function E(e,t,r,o,n,a,c){try{var l=e[a](c),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(o,n)}function V(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function c(e){E(a,o,n,c,l,"next",e)}function l(e){E(a,o,n,c,l,"throw",e)}c(void 0)}))}}const b={components:{Errors:r(7634).Z},data:function(){return{subcategory:{title:"",slug:"",category_id:0,icon:"",active:1},categories:[],errors:{message:"",list:[]}}},methods:{create:function(){var e=this;return V(k().mark((function t(){var r,o,n;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.errors.list=[],t.prev=1,t.next=4,axios.post("/api/admin/subcategory/create",e.subcategory);case 4:r=t.sent,e.subcategory=r.data,e.$router.push({path:"/admin/subcategories"}),t.next=15;break;case 9:t.prev=9,t.t0=t.catch(1),o=t.t0.response.data.errors,n=t.t0.response.data.message,o&&(e.errors.list=o),n&&n.length&&(e.errors.message=n);case 15:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},mounted:function(){var e=this;return V(k().mark((function t(){var r,o;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/admin/category/list");case 2:r=t.sent,o=r.data,e.categories=o;case 5:case"end":return t.stop()}}),t)})))()}};const N=(0,r(3744).Z)(b,[["render",function(e,t,r,y,k,E){var V=(0,o.resolveComponent)("Errors");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[a,(0,o.createVNode)(V,{errors:k.errors},null,8,["errors"]),(0,o.createElementVNode)("form",{method:"post",onSubmit:t[5]||(t[5]=(0,o.withModifiers)((function(){return E.create&&E.create.apply(E,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",c,[l,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[0]||(t[0]=function(e){return k.subcategory.title=e}),placeholder:"Название подкатегории"},null,512),[[o.vModelText,k.subcategory.title]])]),(0,o.createElementVNode)("div",s,[i,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[1]||(t[1]=function(e){return k.subcategory.slug=e}),placeholder:"Slug"},null,512),[[o.vModelText,k.subcategory.slug]])]),(0,o.createElementVNode)("div",u,[d,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[2]||(t[2]=function(e){return k.subcategory.icon=e}),placeholder:"Иконка"},null,512),[[o.vModelText,k.subcategory.icon]])]),k.categories.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",m,[p,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return k.subcategory.category_id=e}),class:"aui-select"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(k.categories,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{key:e.id,value:e.id,textContent:(0,o.toDisplayString)(e.title)},null,8,g)})),128))],512),[[o.vModelSelect,k.subcategory.category_id]])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",v,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"checkbox",class:"aui-checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return k.subcategory.active=e}),id:"active-category"},null,512),[[o.vModelCheckbox,k.subcategory.active]]),f]),h],32)])}]])},7634:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(1385),n={key:0},a={key:0,class:"aui-errors"},c={key:0},l={key:1};const s={props:["errors"],mounted:function(){}};const i=(0,r(3744).Z)(s,[["render",function(e,t,r,s,i,u){return r.errors?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[r.errors.message.length||r.errors.list.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[r.errors.message.length?((0,o.openBlock)(),(0,o.createElementBlock)("p",c,(0,o.toDisplayString)(r.errors.message),1)):(0,o.createCommentVNode)("",!0),r.errors.list?((0,o.openBlock)(),(0,o.createElementBlock)("ul",l,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.errors.list,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",null,(0,o.toDisplayString)(e[0]),1)})),256))])):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0)}]])}}]);