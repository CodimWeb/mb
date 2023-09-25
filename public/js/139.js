"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{2139:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var n=t(1385),o={class:"max-w-screen-md mx-auto text-gray-900"},s={class:"flex justify-center"},i={class:"flex-1"},c={class:"border w-auto"},a=(0,n._)("div",{class:"border p-4 font-semibold"},"Verify your email !",-1),u={class:"p-4 bg-white"},l={class:"my-1 py-2 sm:w-8/12 md:w-10/12 md:p-4 w-full mx-auto flex justify-center items-center mt-3 sm:mt-0"},d={key:0,class:"flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600"};var w=t(7757),h=t.n(w),f=t(3724),m=t(4716),p=t(6367),v=t(9304);function g(e,r,t,n,o,s,i){try{var c=e[s](i),a=c.value}catch(e){return void t(e)}c.done?r(a):Promise.resolve(a).then(n,o)}const k={components:{XIcon:f.b0D,Errors:m.Z,Success:p.Z,CircleSvg:v.Z},props:{id:{required:!0},hash:{required:!0}},data:function(){return{errors:null,success:"",busy:!1}},methods:{verify:function(){var e,r=this;return(e=h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.busy=!0,r.errors=null,r.success="",e.next=5,r.$store.dispatch("verifyEmail",{id:r.id,hash:r.hash}).then((function(e){r.success=e.data.message?e.data.message+" Redirecting ...":" Redirecting ...",setTimeout((function(){r.$router.push({name:"home"})}),1e3)})).catch((function(e){r.errors="internal error ! plzase try again later ."}));case 5:r.busy=!1;case 6:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var s=e.apply(r,t);function i(e){g(s,n,o,i,c,"next",e)}function c(e){g(s,n,o,i,c,"throw",e)}i(void 0)}))})()},resend:function(){var e=this;this.errors=null,this.success="",this.$store.dispatch("verifyResend",{id:this.id}).then((function(r){e.success=r.data.message+" Redirecting ...",setTimeout((function(){e.$router.push({name:"home"})}),1e3)})).catch((function(r){e.errors="internal error ! plzase try again later .",setTimeout((function(){e.$router.push({name:"home"})}),1e3)}))}}};const x=(0,t(3744).Z)(k,[["render",function(e,r,t,w,h,f){var m=(0,n.up)("success"),p=(0,n.up)("errors"),v=(0,n.up)("circle-svg");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",s,[(0,n._)("div",i,[(0,n._)("div",c,[a,(0,n._)("div",u,[h.success?((0,n.wg)(),(0,n.j4)(m,{key:0,content:h.success,onClose:r[0]||(r[0]=function(e){return h.success=null})},null,8,["content"])):(0,n.kq)("",!0),h.errors?((0,n.wg)(),(0,n.j4)(p,{key:1,content:h.errors,onClose:r[1]||(r[1]=function(e){return h.errors=null})},null,8,["content"])):(0,n.kq)("",!0),(0,n._)("div",l,[h.busy?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(v,{class:"w-6 h-6"})])):((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:r[2]||(r[2]=function(r){return e.error?f.resend():f.verify()}),class:(0,n.C_)("p-3 rounded-sm text-white"+(e.error?" bg-red-400 text-white hover:bg-red-600":" bg-blue-500 hover:bg-blue-600"))},(0,n.zw)(e.error?"Oops ! Resend ?":"Click to Verify"),3))])])])])])])}]])},9304:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(1385),o=["width","height","viewBox","stroke"],s=[(0,n.uE)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".8" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];const i={props:{stroke:{type:String,default:"#fff"},w:{type:Number,default:38},h:{type:Number,default:38}},computed:{viewBox:function(){return"0 0 "+this.w+" "+this.h}}};const c=(0,t(3744).Z)(i,[["render",function(e,r,t,i,c,a){return(0,n.wg)(),(0,n.iD)("svg",{width:t.w,height:t.h,viewBox:a.viewBox,xmlns:"http://www.w3.org/2000/svg",stroke:t.stroke},s,8,o)}]])},4716:(e,r,t)=>{t.d(r,{Z:()=>u});var n=t(1385),o={class:"flex items-start border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto bg-red-100 border border-red-100 text-red-500",role:"alert shadow"},s={key:0,class:"block sm:inline w-full text-center"},i={key:1,class:"block sm:inline w-full text-center"},c={class:"text-sm"};const a={components:{XIcon:t(7751).b0D},props:{type:{type:String,default:"success"},content:{type:Object,default:"hello !"}}};const u=(0,t(3744).Z)(a,[["render",function(e,r,t,a,u,l){var d=(0,n.up)("XIcon");return(0,n.wg)(),(0,n.iD)("div",o,[t.content.errors?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("ul",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.content.errors,(function(e){return(0,n.wg)(),(0,n.iD)("li",{key:e.index},(0,n.zw)(e[0]),1)})),128))])])):((0,n.wg)(),(0,n.iD)("span",s,(0,n.zw)(t.content.message),1)),(0,n._)("span",{onClick:r[0]||(r[0]=function(r){return e.$emit("close")}),class:""},[(0,n.Wm)(d,{class:"h-5 w-5 font-bold cursor-pointer"})])])}]])},6367:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(1385),o={class:"flex items-start border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto bg-green-100 border border-green-100 text-green-500",role:"alert shadow"},s={class:"block sm:inline w-full text-center"};const i={components:{XIcon:t(7751).b0D},props:{content:{type:String,default:"hello !"}}};const c=(0,t(3744).Z)(i,[["render",function(e,r,t,i,c,a){var u=(0,n.up)("XIcon");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("span",s,(0,n.zw)(t.content),1),(0,n._)("span",{onClick:r[0]||(r[0]=function(r){return e.$emit("close")}),class:""},[(0,n.Wm)(u,{class:"h-5 w-5 font-bold cursor-pointer"})])])}]])},7751:(e,r,t)=>{t.d(r,{v4q:()=>o,IEm:()=>s,_m8:()=>i,R0g:()=>c,tBG:()=>a,b0D:()=>u});var n=t(1385);function o(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])}function s(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}function i(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}function c(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})])}function a(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}function u(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}},3724:(e,r,t)=>{t.d(r,{b0D:()=>o});var n=t(1385);function o(e,r){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])}}}]);