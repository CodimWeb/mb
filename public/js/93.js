"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93],{5093:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(1385),r={class:"flex-column auth-page"},s={class:"flex-column auth-page__container"},a={class:"auth-page__header"},c=["textContent"],l={key:0,class:"auth-page__success"},i=["textContent"],u=["textContent"];var m=n(7757),p=n.n(m),d=n(9669),f=n.n(d);function h(e,t,n,o,r,s,a){try{var c=e[s](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}const g={components:{Errors:n(9792).Z},data:function(){return{email:"",filled:{email:!1},busy:!1,errors:null,success_message:""}},methods:{checkFilled:function(e){"email"===e&&(this.filled.email=this.email.length>0)},recover:function(){var e,t=this;return(e=p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.busy=!0,t.errors=null,t.success_message="",e.next=5,f().post("/api/forgot-password",{email:t.email}).then((function(e){t.success_message=t.$t("We have sent the password recovery instructions to your Email")})).catch((function(e){t.errors=e.response.data}));case 5:t.busy=!1;case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var s=e.apply(t,n);function a(e){h(s,o,r,a,c,"next",e)}function c(e){h(s,o,r,a,c,"throw",e)}a(void 0)}))})()}}};const v=(0,n(3744).Z)(g,[["render",function(e,t,n,m,p,d){var f=(0,o.resolveComponent)("Errors");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("h1",{class:"h3_semibold auth-page__heading",textContent:(0,o.toDisplayString)(e.$t("Password Recovery"))},null,8,c)]),p.success_message.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",l,(0,o.toDisplayString)(p.success_message),1)):(0,o.createCommentVNode)("",!0),p.errors?((0,o.openBlock)(),(0,o.createBlock)(f,{key:1,type:"danger",content:p.errors,onClose:t[0]||(t[0]=function(e){return p.errors=null})},null,8,["content"])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return d.recover&&d.recover.apply(d,arguments)}),["prevent"])),class:"auth-page__form"},[(0,o.createElementVNode)("div",{class:"input-auth-group",onClick:t[3]||(t[3]=function(t){return e.$refs.email.focus()})},[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:(0,o.normalizeClass)({"input-auth":!0,"auth-page__input":!0,"input-auth--filled":p.filled.email}),ref:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.email=e}),autocomplete:"off",onFocusout:t[2]||(t[2]=function(e){return d.checkFilled("email")})},null,34),[[o.vModelText,p.email]]),(0,o.createElementVNode)("div",{class:"input-auth-name",textContent:(0,o.toDisplayString)(e.$t("Your e-mail"))},null,8,i)]),(0,o.createElementVNode)("button",{class:"betting-button betting-button-big auth-page__button",textContent:(0,o.toDisplayString)(e.$t("Recover Password"))},null,8,u)],32)])])}]])},9792:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(1385),r={class:"t1_regular auth-pages-error"},s={key:0},a={key:1};const c={props:{type:{type:String,default:"success"},content:{type:Object,default:""}}};const l=(0,n(3744).Z)(c,[["render",function(e,t,n,c,l,i){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[n.content.errors?((0,o.openBlock)(),(0,o.createElementBlock)("ul",a,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.content.errors,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.index},(0,o.toDisplayString)(e[0]),1)})),128))])):((0,o.openBlock)(),(0,o.createElementBlock)("span",s,(0,o.toDisplayString)(n.content.message),1)),(0,o.createElementVNode)("div",{class:"auth-pages-error__close",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})})])}]])}}]);