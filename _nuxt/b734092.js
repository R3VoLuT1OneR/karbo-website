(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{371:function(t,e,o){var content=o(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("3efa1773",content,!0,{sourceMap:!1})},372:function(t,e,o){"use strict";o(371)},373:function(t,e,o){var n=o(60)(!1);n.push([t.i,".max-w-256px[data-v-b68640b2]{max-width:256px}.dropdown[data-v-b68640b2]{position:relative}.dropdown>header>.button[data-v-b68640b2]{padding-left:2.5em;padding-right:0}.dropdown>header>.button>span[data-v-b68640b2]:first-child{padding-right:2.5em}.dropdown>header>.button .arrow[data-v-b68640b2]{display:flex;align-items:center;justify-content:center;--bg-opacity:1;background-color:#0b52d2;background-color:rgba(11,82,210,var(--bg-opacity));width:3em;height:3em}.dropdown>header>.button .arrow[data-v-b68640b2]  .icon{transition:transform .3s ease-in-out}.dropdown>main[data-v-b68640b2]{display:none;position:absolute;border-radius:.25rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));top:100%;left:0;right:0;box-shadow:0 1px 6px rgba(0,0,0,.14)}.dropdown>main[data-v-b68640b2] >a .icon{--text-opacity:1;color:#8e9eb8;color:rgba(142,158,184,var(--text-opacity))}.dropdown>main[data-v-b68640b2] >a:last-child>.icon{transform:rotate(90deg)}.dropdown>main[data-v-b68640b2] >a:hover,.dropdown>main[data-v-b68640b2] >a:hover .icon{--text-opacity:1;color:#4585fb;color:rgba(69,133,251,var(--text-opacity))}.dropdown.open>header>.button[data-v-b68640b2]{--bg-opacity:1;background-color:#0b52d2;background-color:rgba(11,82,210,var(--bg-opacity))}.dropdown.open>header>.button>.arrow[data-v-b68640b2]  .icon{transform:rotate(180deg)}.dropdown.open>main[data-v-b68640b2]{display:block}",""]),t.exports=n},379:function(t,e,o){"use strict";o.r(e);var n=o(33),r=o(34),l=o(44),c=o(45),d=o(22),f=o(9),h=(o(26),o(8),o(76),o(18)),w=o(109),v=o.n(w),m=o(136);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(c.a)(this,o)}}var x=function(t,e,o,desc){var n,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(r<3?n(l):r>3?n(e,o,l):n(e,o))||l);return r>3&&l&&Object.defineProperty(e,o,l),l},_=function(t){Object(l.a)(o,t);var e=y(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).open=!1,t}return Object(r.a)(o,[{key:"wallets",get:function(){var t=this.$accessor.wallets.karbo[m.WalletType.Spring].details;return[{icon:"windows",label:this.$i18n.t("wallets.windows"),href:t.windows.href},{icon:"linux",label:this.$i18n.t("wallets.linux"),href:t.ubuntu.href},{icon:"apple",label:this.$i18n.t("wallets.macos"),href:t.macos.href},{icon:"android",href:this.$accessor.wallets.mobile.android,label:this.$i18n.t("wallets.android")},{label:this.$i18n.t("wallets.web"),icon:"web",href:this.$accessor.wallets.web}]}}]),o}(h.Vue),k=_=x([Object(h.Component)({directives:{ClickOutside:v.a}})],_),O=(o(372),o(28)),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dropdown",class:{open:t.open},on:{mouseleave:function(e){t.open=!1}}},[o("header",{staticClass:"pb-3"},[o("nuxt-link",{staticClass:"button rounded border-r bg-blue-dark text-white hover:no-underline font-semibold",attrs:{to:t.localeRoute({hash:"#download"})},nativeOn:{mouseover:function(e){t.open=!0}}},[o("span",[t._v(t._s(t.$t("hero.downloadButton.title")))]),t._v(" "),o("span",{staticClass:"arrow rounded-r"},[o("SvgIcon",{staticClass:"text-white w-3 h-3",attrs:{name:"arrow-down"}})],1)])],1),t._v(" "),t.open?o("main",{staticClass:"pt-2"},[t._l(t.wallets,(function(e,i){var label=e.label,n=e.icon,r=e.href;return o("a",{key:i,staticClass:"flex items-center py-2 px-4 hover:no-underline text-sm hover:text-blue-mid",attrs:{href:r}},[o("SvgIcon",{staticClass:"w-5 h-5 mr-2",attrs:{name:"wallets/"+n}}),t._v(" "),o("span",[t._v(t._s(label))])],1)})),t._v(" "),o("nuxt-link",{staticClass:"flex items-center border-t border-grey-light hover:no-underline text-sm py-4 px-4 mt-2",attrs:{to:t.localeRoute({hash:"#download"})}},[o("SvgIcon",{staticClass:"w-4 h-4 mr-2 -rotate-90",attrs:{name:"arrow-right"}}),t._v(" "),o("span",[t._v("\n        "+t._s(t.$t("hero.downloadButton.wallets.all"))+"\n      ")])],1)],2):t._e()])}),[],!1,null,"b68640b2",null);e.default=component.exports}}]);
//# sourceMappingURL=b734092.js.map