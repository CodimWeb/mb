"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3054],{3054:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(1385),r={class:"admin-dashboard__100 admin-game-create"},o=(0,a.createElementVNode)("div",{class:"admin-dashboard__heading"},[(0,a.createElementVNode)("h1",null,"Добавить игру")],-1),l={class:"aui-preset-col-2"},c={class:"aui-form-group"},i=(0,a.createElementVNode)("p",null,"Название игры",-1),d={class:"aui-col-2"},s={class:"aui-form-group"},u=(0,a.createElementVNode)("p",null,"Название кандидата 1",-1),m={class:"aui-form-group"},p=(0,a.createElementVNode)("p",null,"Название кандидата 2",-1),v={class:"aui-col-3"},V={class:"aui-form-group"},g=(0,a.createElementVNode)("p",null,"Коэффициент для кандидата 1",-1),E={class:"aui-form-group"},f=(0,a.createElementVNode)("p",null,"Коэффициент для кандидата 2",-1),N={class:"aui-form-group"},h=(0,a.createElementVNode)("p",null,"Коэффициент для ничьи",-1),k={class:"aui-form-group"},_=(0,a.createElementVNode)("p",null,"Выберите событие",-1),w=["value"],y={class:"aui-form-group"},x=(0,a.createElementVNode)("p",null,"Дата и время начала",-1),B=(0,a.createElementVNode)("div",{class:"aui-form-group"},[(0,a.createElementVNode)("p",null," "),(0,a.createElementVNode)("button",{type:"submit",class:"aui-button aui-button__100"},"Сохранить")],-1);var b=n(7757),D=n.n(b);function M(e,t,n,a,r,o,l){try{var c=e[o](l),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,r)}function U(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function l(e){M(o,a,r,l,c,"next",e)}function c(e){M(o,a,r,l,c,"throw",e)}l(void 0)}))}}const C={components:{Errors:n(7634).Z},data:function(){return{game:{id:0,title:"",candidate_1_name:"",candidate_2_name:"",event_id:0,candidate_1:1,candidate_2:1,draw:1,date_start:null},events:[],errors:{message:"",list:[]}}},methods:{create:function(){var e=this;return U(D().mark((function t(){var n,a,r;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.errors.list=[],t.prev=1,t.next=4,axios.post("/api/admin/game/create",e.game);case 4:n=t.sent,e.game=n.data,t.next=14;break;case 8:t.prev=8,t.t0=t.catch(1),a=t.t0.response.data.errors,r=t.t0.response.data.message,a&&(e.errors.list=a),r&&r.length&&(e.errors.message=r);case 14:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},mounted:function(){var e=this;return U(D().mark((function t(){var n,a;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/admin/event/list");case 2:n=t.sent,a=n.data,e.events=a;case 5:case"end":return t.stop()}}),t)})))()}};const T=(0,n(3744).Z)(C,[["render",function(e,t,n,b,D,M){var U=(0,a.resolveComponent)("Errors");return(0,a.openBlock)(),(0,a.createElementBlock)("div",r,[o,(0,a.createVNode)(U,{errors:D.errors},null,8,["errors"]),(0,a.createElementVNode)("form",{method:"post",onSubmit:t[8]||(t[8]=(0,a.withModifiers)((function(){return M.create&&M.create.apply(M,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",null,[(0,a.createElementVNode)("div",c,[i,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[0]||(t[0]=function(e){return D.game.title=e}),placeholder:"Название игры"},null,512),[[a.vModelText,D.game.title]])]),(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("div",s,[u,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[1]||(t[1]=function(e){return D.game.candidate_1_name=e}),placeholder:"Название кандидата 1"},null,512),[[a.vModelText,D.game.candidate_1_name]])]),(0,a.createElementVNode)("div",m,[p,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",class:"aui-input","onUpdate:modelValue":t[2]||(t[2]=function(e){return D.game.candidate_2_name=e}),placeholder:"Название кандидата 2"},null,512),[[a.vModelText,D.game.candidate_2_name]])])]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("div",V,[g,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"number",step:"0.01",min:"1",class:"aui-input","onUpdate:modelValue":t[3]||(t[3]=function(e){return D.game.candidate_1=e}),placeholder:"Коэффициент для кандидата 1"},null,512),[[a.vModelText,D.game.candidate_1]])]),(0,a.createElementVNode)("div",E,[f,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"number",step:"0.01",min:"1",class:"aui-input","onUpdate:modelValue":t[4]||(t[4]=function(e){return D.game.candidate_2=e}),placeholder:"Коэффициент для кандидата 2"},null,512),[[a.vModelText,D.game.candidate_2]])]),(0,a.createElementVNode)("div",N,[h,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"number",step:"0.01",min:"1",class:"aui-input","onUpdate:modelValue":t[5]||(t[5]=function(e){return D.game.draw=e}),placeholder:"Коэффициент для ничьи"},null,512),[[a.vModelText,D.game.draw]])])])]),(0,a.createElementVNode)("div",null,[(0,a.createElementVNode)("div",k,[_,(0,a.withDirectives)((0,a.createElementVNode)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return D.game.event_id=e}),class:"aui-select"},[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(D.events,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("option",{key:e.id,value:e.id},(0,a.toDisplayString)(e.title),9,w)})),128))],512),[[a.vModelSelect,D.game.event_id]])]),(0,a.createElementVNode)("div",y,[x,(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"datetime-local","onUpdate:modelValue":t[7]||(t[7]=function(e){return D.game.date_start=e}),class:"aui-input"},null,512),[[a.vModelText,D.game.date_start]])]),B])])],32)])}]])},7634:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(1385),r={key:0},o={key:0,class:"aui-errors"},l={key:0},c={key:1};const i={props:["errors"],mounted:function(){}};const d=(0,n(3744).Z)(i,[["render",function(e,t,n,i,d,s){return n.errors?((0,a.openBlock)(),(0,a.createElementBlock)("div",r,[n.errors.message.length||n.errors.list.length?((0,a.openBlock)(),(0,a.createElementBlock)("div",o,[n.errors.message.length?((0,a.openBlock)(),(0,a.createElementBlock)("p",l,(0,a.toDisplayString)(n.errors.message),1)):(0,a.createCommentVNode)("",!0),n.errors.list?((0,a.openBlock)(),(0,a.createElementBlock)("ul",c,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.errors.list,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("li",null,(0,a.toDisplayString)(e[0]),1)})),256))])):(0,a.createCommentVNode)("",!0)])):(0,a.createCommentVNode)("",!0)])):(0,a.createCommentVNode)("",!0)}]])}}]);