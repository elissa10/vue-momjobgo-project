(function(){"use strict";var t={645:function(t,e,i){i(6992),i(8674),i(9601),i(7727);var n=i(144),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("NavView"),i("HeaderView"),i("MainView"),i("FooterView")],1)},r=[],a=i(4367),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible.footer?i("v-navigation-drawer",{attrs:{app:""}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h6"},[t._v("Vue-Project")]),i("v-list-item-subtitle",[t._v(" 님 환영합니다. ")])],1)],1),i("v-divider"),i("v-list",{attrs:{dense:"",nav:""}},[t._l(t.menuList,(function(e,n){return i("v-list-item",{key:n,attrs:{to:e.path}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.meta.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),i("v-list-item",{on:{click:t.logout}},[i("v-list-item-icon",[i("v-icon",[t._v("logout")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("logout")])],1)],1)],2)],1):t._e()},u=[],l=i(629),c={data:function(){return{}},computed:(0,a.Z)({},(0,l.Se)("page",["menuList","visible"])),methods:{logout:function(){alert("미구현입니다.")}}},m=c,f=i(1001),v=i(3453),p=i.n(v),h=i(1418),d=i(24),b=i(6816),g=i(5405),_=i(1784),y=i(459),w=i(3120),x=(0,f.Z)(m,s,u,!1,null,null,null),Z=x.exports;p()(x,{VDivider:h.Z,VIcon:d.Z,VList:b.Z,VListItem:g.Z,VListItemContent:_.km,VListItemIcon:y.Z,VListItemSubtitle:_.oZ,VListItemTitle:_.V9,VNavigationDrawer:w.Z});var V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible.header?i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-title",[t._v(t._s(t.title))])],1):t._e()},j=[],C={computed:(0,a.Z)({},(0,l.Se)("page",["title","visible"]))},k=C,E=i(426),L=i(7905),O=(0,f.Z)(k,V,j,!1,null,null,null),T=O.exports;p()(O,{VAppBar:E.Z,VAppBarTitle:L.Z});var S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible.footer?i("v-footer",{attrs:{app:""}},[i("v-card",{staticClass:"text-center",attrs:{flat:"",tile:""}},[i("v-card-text",{staticClass:"black--text"},[t._v('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')])],1)],1):t._e()},P=[],$={computed:(0,a.Z)({},(0,l.Se)("page",["visible"]))},q=$,I=i(3769),A=i(7118),M=i(899),F=(0,f.Z)(q,S,P,!1,null,null,null),H=F.exports;p()(F,{VCard:I.Z,VCardText:A.ZB,VFooter:M.Z});var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{fluid:""}},[i("router-view")],1)],1)},N=[],W={},B=W,Q=i(247),R=i(7877),U=(0,f.Z)(B,D,N,!1,null,null,null),z=U.exports;p()(U,{VContainer:Q.Z,VMain:R.Z});var G={name:"App",data:function(){return{}},components:{NavView:Z,HeaderView:T,MainView:z,FooterView:H},computed:(0,a.Z)({},(0,l.Se)("page",["menuList"])),created:function(){"/"===window.location.pathname&&this.$router.push(this.menuList.home.path)}},J=G,K=i(7524),X=(0,f.Z)(J,o,r,!1,null,null,null),Y=X.exports;p()(X,{VApp:K.Z});var tt=i(5200),et=(i(1539),i(4747),i(9720),i(8345)),it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("hello-world")},nt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:i(9574),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},rt=[],at={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},st=at,ut=i(2102),lt=i(7047),ct=i(2877),mt=(0,f.Z)(st,ot,rt,!1,null,null,null),ft=mt.exports;p()(mt,{VCol:ut.Z,VContainer:Q.Z,VImg:lt.Z,VRow:ct.Z});var vt={name:"Home",components:{HelloWorld:ft}},pt=vt,ht=(0,f.Z)(pt,it,nt,!1,null,null,null),dt=ht.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("Vue 심화 프로젝트를 위한 템플릿입니다~")])])}],_t={},yt=_t,wt=(0,f.Z)(yt,bt,gt,!1,null,null,null),xt=wt.exports,Zt={namespaced:!0,state:{title:"",basePath:"",list:{home:{path:"/home",name:"home",meta:{title:"Home",icon:"home"},component:dt},about:{path:"/about",name:"about",meta:{title:"About",icon:"question_mark"},component:xt}},visible:{header:!0,navi:!0,footer:!0}},getters:{title:function(t){return t.title},basePath:function(t){return t.basePath},menuList:function(t){return t.list},visible:function(t){return t.visible}},mutations:{setTitle:function(t,e){t.title=e},setVisible:function(t,e){var i=e.key,n=e.value;t[i]=n}},actions:{setTitle:function(t,e){var i=t.commit;i("setTitle",e)},setVisible:function(t,e){var i=t.commit;i("setVisible",e)}}};n.Z.use(l.ZP);var Vt=new l.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{page:Zt}});function jt(){var t=new Array;return Object.entries(Vt.getters["page/menuList"]).forEach((function(e){var i=(0,tt.Z)(e,2),n=(i[0],i[1]);t.push(n)})),t}function Ct(){return Vt.getters["page/basePath"]}n.Z.use(et.Z);var kt=jt(),Et=new et.Z({base:Ct(),mode:"history",routes:kt});Et.beforeEach((function(t,e,i){i()})),Et.afterEach((function(t,e){Vt.dispatch("page/setTitle",t.meta.title)}));var Lt=Et,Ot=i(8498);n.Z.use(Ot.Z);var Tt=new Ot.Z({icons:{iconfont:"md"}});n.Z.config.productionTip=!1,new n.Z({router:Lt,store:Vt,vuetify:Tt,render:function(t){return t(Y)}}).$mount("#app")},9574:function(t,e,i){t.exports=i.p+"img/logo.5919a104.svg"}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,r){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],r=t[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&r||a>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[u])}))?n.splice(u--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,o,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/vue-momjobgo-project/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,a=n[0],s=n[1],u=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(u)var c=u(i)}for(e&&e(n);l<a.length;l++)r=a[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},n=self["webpackChunkvue_momjobgo_project"]=self["webpackChunkvue_momjobgo_project"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(645)}));n=i.O(n)})();
//# sourceMappingURL=app-legacy.5751e279.js.map