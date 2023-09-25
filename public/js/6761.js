"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6761],{6761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var n=r(1385),o={class:"admin-dashboard__100 admin-event-create"},a=(0,n.createElementVNode)("div",{class:"admin-dashboard__heading"},[(0,n.createElementVNode)("h1",null,"Создание события")],-1),s={class:"aui-form-group"},c=(0,n.createElementVNode)("p",null,"Название события",-1),l={class:"aui-form-group"},i=(0,n.createElementVNode)("p",null,"Slug события",-1),u={class:"aui-form-group"},d=(0,n.createElementVNode)("p",null,"Выберите подкатегорию события:",-1),m=["value"],p={class:"aui-form-group"},v=(0,n.createElementVNode)("label",{for:"event-active"},"Включить событие",-1),g=(0,n.createElementVNode)("button",{type:"submit",class:"aui-button"},"Создать",-1);var h=r(7757),f=r.n(h);function k(e,t,r,n,o,a,s){try{var c=e[a](s),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){k(a,n,o,s,c,"next",e)}function c(e){k(a,n,o,s,c,"throw",e)}s(void 0)}))}}const E={components:{Errors:r(7634).Z},data:function(){return{event:{title:"",slug:"",subcategory_id:0,active:!0},subcategories:[],errors:{message:"",list:[]}}},methods:{create:function(){var e=this;return b(f().mark((function t(){var r,n,o,a;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.errors.list=[],t.prev=1,t.next=4,axios.post("/api/admin/event/create",e.event);case 4:r=t.sent,n=r.data,e.event={data:n},e.$toast.success("Событие успешно создано",{position:"bottom",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1}),e.$router.push({path:"/admin/events"}),t.next=18;break;case 11:t.prev=11,t.t0=t.catch(1),o=t.t0.response.data.errors,a=t.t0.response.data.message,o&&(e.errors.list=o,console.log(e.errors.list)),a&&a.length&&(e.errors.message=a),e.$toast.error("Ошибка при создании события",{position:"bottom",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1});case 18:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},mounted:function(){var e=this;return b(f().mark((function t(){var r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/admin/sub-category/list");case 2:r=t.sent,n=r.data,e.subcategories=n;case 5:case"end":return t.stop()}}),t)})))()}};const V=(0,r(3744).Z)(E,[["render",function(e,t,r,h,f,k){var b=(0,n.resolveComponent)("Errors");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[a,(0,n.createVNode)(b,{errors:f.errors},null,8,["errors"]),(0,n.createElementVNode)("form",{method:"post",onSubmit:t[4]||(t[4]=(0,n.withModifiers)((function(){return k.create&&k.create.apply(k,arguments)}),["prevent"]))},[(0,n.createElementVNode)("div",s,[c,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[0]||(t[0]=function(e){return f.event.title=e}),placeholder:"Название события"},null,512),[[n.vModelText,f.event.title]])]),(0,n.createElementVNode)("div",l,[i,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.event.slug=e}),placeholder:"Slug события"},null,512),[[n.vModelText,f.event.slug]])]),(0,n.createElementVNode)("div",u,[d,(0,n.withDirectives)((0,n.createElementVNode)("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.event.subcategory_id=e}),class:"aui-select"},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(f.subcategories,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{value:e.id,key:e.id},(0,n.toDisplayString)(e.title),9,m)})),128))],512),[[n.vModelSelect,f.event.subcategory_id]])]),(0,n.createElementVNode)("div",p,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"checkbox",class:"aui-checkbox",id:"event-active","onUpdate:modelValue":t[3]||(t[3]=function(e){return f.event.active=e})},null,512),[[n.vModelCheckbox,f.event.active]]),v]),g],32)])}]])},7634:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1385),o={key:0},a={key:0,class:"aui-errors"},s={key:0},c={key:1};const l={props:["errors"],mounted:function(){}};const i=(0,r(3744).Z)(l,[["render",function(e,t,r,l,i,u){return r.errors?((0,n.openBlock)(),(0,n.createElementBlock)("div",o,[r.errors.message.length||r.errors.list.length?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[r.errors.message.length?((0,n.openBlock)(),(0,n.createElementBlock)("p",s,(0,n.toDisplayString)(r.errors.message),1)):(0,n.createCommentVNode)("",!0),r.errors.list?((0,n.openBlock)(),(0,n.createElementBlock)("ul",c,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.errors.list,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("li",null,(0,n.toDisplayString)(e[0]),1)})),256))])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)}]])}}]);