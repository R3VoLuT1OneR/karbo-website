(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{377:function(t,e,r){var content=r(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("5f31a62a",content,!0,{sourceMap:!1})},390:function(t,e,r){"use strict";r(377)},391:function(t,e,r){var o=r(60)(!1);o.push([t.i,".usage[data-v-4685fe50]{background:linear-gradient(180deg,#f6f8fc,#f6f8fc 49.51%,#fff)}@media(max-width:768px){.usage[data-v-4685fe50]{padding-left:6.25vw;padding-right:6.25vw}}.usage>div>main>ul>li[data-v-4685fe50]{cursor:pointer}.usage>div>main>ul>li.active[data-v-4685fe50]{--bg-opacity:1;background-color:#4585fb;background-color:rgba(69,133,251,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.usage>div>main>ul>li[data-v-4685fe50]:not(:last-child){border-right:1px solid #dfe4ea}.usage>div>main>section>.usage-group[data-v-4685fe50]{transition:left .4s ease-out,height .4s ease-out}.usage>div>main>section>.usage-group>a[data-v-4685fe50]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-radius:.5rem;box-shadow:0 1px 7px rgba(0,0,0,.1)}.usage>div>main>section>.usage-group .external[data-v-4685fe50]{min-width:1rem}@media(max-width:768px){.usage>div>main>section[data-v-4685fe50]{margin-left:-6.25vw;margin-right:-6.25vw}}@media(max-width:768px)and (max-width:768px){.usage>div>main>section>.usage-group[data-v-4685fe50]{padding-left:6.25vw;padding-right:6.25vw}}",""]),t.exports=o},398:function(t,e,r){"use strict";r.r(e);r(76);var o=r(33),n=r(34),c=r(44),l=r(45),f=r(22),d=r(9),v=(r(26),r(8),r(50),r(27),r(35),r(18));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).activeGroup=0,t}return Object(n.a)(r,[{key:"listGroups",get:function(){return[{label:"Exchange",list:[{icon:"usage/btc-trade",title:"BTC Trade UA",subtitle:"Duis aute irure in reprenderit invas id voluptate velit esse cillum adipiscing.",href:"https://btc-trade.com.ua/stock/krb_uah"},{icon:"usage/richamster",title:"Richamster",subtitle:"Duis aute irure in reprenderit invas id voluptate velit esse cillum adipiscing.",href:"https://richamster.com/"},{icon:"usage/tradeogre",title:"TradeOgre",subtitle:"Peer-to-peer digital asset trading platform.",href:"https://tradeogre.com/exchange/BTC-KRB"},{icon:"usage/occe",title:"OCCE",subtitle:"Peer-to-peer digital asset trading platform.",href:"https://www.occe.io/exchange/krb_btc"},{icon:"usage/karbo24",title:"Karbo24",subtitle:"Peer-to-peer digital asset trading platform.",href:"https://karbo24.io/"},{icon:"usage/crex24",title:"Crex24",subtitle:"Peer-to-peer digital asset trading platform.",href:"https://crex24.com/exchange/KRB-BTC"}]}]}},{key:"activeGroupList",get:function(){return this.listGroups[this.activeGroup].list}},{key:"setActiveGroup",value:function(t){this.activeGroup=t;var e=this.$refs["tab-".concat(t)];if(e&&Array.isArray(e)&&e[0]){var r=e[0];this.$scrollTo(r,300,{container:this.tabsElement,offset:(this.tabsElement.offsetWidth-r.offsetWidth)/-2,x:!0,y:!1}),this.updateGroupDisplay(t)}}},{key:"updateGroupDisplay",value:function(t){var e=this,r=Array.from(this.groups.children);this.groups.style.height="".concat(r[this.activeGroup].offsetHeight,"px"),r.forEach((function(r,i){r.style.left="".concat(e.groups.offsetWidth*(i-t),"px")}))}}]),r}(v.Vue);m([Object(v.Ref)()],x.prototype,"groups",void 0),m([Object(v.Ref)("tabs")],x.prototype,"tabsElement",void 0);var y=x=m([v.Component],x),w=(r(390),r(28)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"usage py-12",attrs:{id:"usage"}},[r("div",{staticClass:"xl:container md:px-10 lg:px-12 xl:px-32"},[r("header",[r("span",{staticClass:"uppercase font-mono text-orange text-sm font-bold tracking-widest"},[t._v("\n        "+t._s(t.$t("usage.label"))+"\n      ")]),t._v(" "),r("h2",{staticClass:"text-4xl font-extrabold mt-3 md:text-5xl"},[t._v("\n        "+t._s(t.$t("usage.title"))+"\n      ")]),t._v(" "),r("p",{staticClass:"text-xl text-grey-mid max-w-3xl"},[t._v("\n        "+t._s(t.$t("usage.description"))+"\n      ")])]),t._v(" "),r("main",{staticClass:"usage-list w-full mt-10"},[r("section",{ref:"groups",staticClass:"mt-12 overflow-hidden relative -m-2 p-2"},[r("div",{staticClass:"usage-group grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3"},t._l(t.listGroups[0].list,(function(e,o){var title=e.title,n=e.subtitle,c=e.icon,l=e.href;return r("a",{key:o,staticClass:"py-6 px-5 last:mb-4 hover-scale",attrs:{href:l,"aria-label":title,target:"_blank",rel:"noopener"}},[r("SvgIcon",{staticClass:"w-16 h-16",attrs:{name:c}}),t._v(" "),r("main",[r("h3",{staticClass:"text-2xl font-extrabold mt-2"},[t._v(t._s(title))]),t._v(" "),r("p",{staticClass:"text-grey-dark"},[t._v(t._s(n))])])],1)})),0)])])])])}),[],!1,null,"4685fe50",null);e.default=component.exports}}]);
//# sourceMappingURL=67d58b8.js.map