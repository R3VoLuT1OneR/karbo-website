(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{371:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("3efa1773",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n(371)},373:function(t,e,n){var r=n(60)(!1);r.push([t.i,".max-w-256px[data-v-b68640b2]{max-width:256px}.dropdown[data-v-b68640b2]{position:relative}.dropdown>header>.button[data-v-b68640b2]{padding-left:2.5em;padding-right:0}.dropdown>header>.button>span[data-v-b68640b2]:first-child{padding-right:2.5em}.dropdown>header>.button .arrow[data-v-b68640b2]{display:flex;align-items:center;justify-content:center;--bg-opacity:1;background-color:#0b52d2;background-color:rgba(11,82,210,var(--bg-opacity));width:3em;height:3em}.dropdown>header>.button .arrow[data-v-b68640b2]  .icon{transition:transform .3s ease-in-out}.dropdown>main[data-v-b68640b2]{display:none;position:absolute;border-radius:.25rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));top:100%;left:0;right:0;box-shadow:0 1px 6px rgba(0,0,0,.14)}.dropdown>main[data-v-b68640b2] >a .icon{--text-opacity:1;color:#8e9eb8;color:rgba(142,158,184,var(--text-opacity))}.dropdown>main[data-v-b68640b2] >a:last-child>.icon{transform:rotate(90deg)}.dropdown>main[data-v-b68640b2] >a:hover,.dropdown>main[data-v-b68640b2] >a:hover .icon{--text-opacity:1;color:#4585fb;color:rgba(69,133,251,var(--text-opacity))}.dropdown.open>header>.button[data-v-b68640b2]{--bg-opacity:1;background-color:#0b52d2;background-color:rgba(11,82,210,var(--bg-opacity))}.dropdown.open>header>.button>.arrow[data-v-b68640b2]  .icon{transform:rotate(180deg)}.dropdown.open>main[data-v-b68640b2]{display:block}",""]),t.exports=r},374:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("13e26678",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n.r(e);var r=n(33),o=n(34),c=n(44),l=n(45),d=n(22),h=n(9),f=(n(26),n(8),n(76),n(18)),m=n(109),v=n.n(m),w=n(136);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=x(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).open=!1,t}return Object(o.a)(n,[{key:"wallets",get:function(){var t=this.$accessor.wallets.karbo[w.WalletType.Spring].details;return[{icon:"windows",label:this.$i18n.t("wallets.windows"),href:t.windows.href},{icon:"linux",label:this.$i18n.t("wallets.linux"),href:t.ubuntu.href},{icon:"apple",label:this.$i18n.t("wallets.macos"),href:t.macos.href},{icon:"android",href:this.$accessor.wallets.mobile.android,label:this.$i18n.t("wallets.android")},{label:this.$i18n.t("wallets.web"),icon:"web",href:this.$accessor.wallets.web}]}}]),n}(f.Vue),O=_=y([Object(f.Component)({directives:{ClickOutside:v.a}})],_),j=(n(372),n(28)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{open:t.open},on:{mouseleave:function(e){t.open=!1}}},[n("header",{staticClass:"pb-3"},[n("nuxt-link",{staticClass:"button rounded border-r bg-blue-dark text-white hover:no-underline font-semibold",attrs:{to:t.localeRoute({hash:"#download"})},nativeOn:{mouseover:function(e){t.open=!0}}},[n("span",[t._v(t._s(t.$t("hero.downloadButton.title")))]),t._v(" "),n("span",{staticClass:"arrow rounded-r"},[n("SvgIcon",{staticClass:"text-white w-3 h-3",attrs:{name:"arrow-down"}})],1)])],1),t._v(" "),t.open?n("main",{staticClass:"pt-2"},[t._l(t.wallets,(function(e,i){var label=e.label,r=e.icon,o=e.href;return n("a",{key:i,staticClass:"flex items-center py-2 px-4 hover:no-underline text-sm hover:text-blue-mid",attrs:{href:o}},[n("SvgIcon",{staticClass:"w-5 h-5 mr-2",attrs:{name:"wallets/"+r}}),t._v(" "),n("span",[t._v(t._s(label))])],1)})),t._v(" "),n("nuxt-link",{staticClass:"flex items-center border-t border-grey-light hover:no-underline text-sm py-4 px-4 mt-2",attrs:{to:t.localeRoute({hash:"#download"})}},[n("SvgIcon",{staticClass:"w-4 h-4 mr-2 -rotate-90",attrs:{name:"arrow-right"}}),t._v(" "),n("span",[t._v("\n        "+t._s(t.$t("hero.downloadButton.wallets.all"))+"\n      ")])],1)],2):t._e()])}),[],!1,null,"b68640b2",null);e.default=component.exports},380:function(t,e,n){t.exports=n.p+"img/main_illustration.bf3c2bd.svg"},381:function(t,e,n){"use strict";n(374)},382:function(t,e,n){var r=n(60)(!1);r.push([t.i,'.hero[data-v-78ca05d4]{background:linear-gradient(180deg,#fff,#f6f8fc)}.hero>main>header>section>h2[data-v-78ca05d4]{font-size:2.875rem;line-height:3.625rem}.hero>main>header>section>h2[data-v-78ca05d4]  .vue-typer .custom.char{color:#1a63e9!important}.hero>main>header>section>h2[data-v-78ca05d4]  .vue-typer .custom.caret{background-color:transparent}.hero>main>header>section>h2[data-v-78ca05d4]  .vue-typer .custom.caret:empty:before{content:"_"}.hero>main>header>section>h3[data-v-78ca05d4]{font-size:1.5rem;line-height:2.25rem}@media(max-width:768px){.hero>main[data-v-78ca05d4]{padding-left:6.25vw;padding-right:6.25vw}}@media (min-width:768px){.hero>main>header>section>h2[data-v-78ca05d4]{font-size:3.5rem;line-height:4rem}.hero>main>header>section>h3[data-v-78ca05d4]{font-size:1.75rem;line-height:2.625rem}.hero>main>header>aside[data-v-78ca05d4]{min-width:320px}}@media (min-width:1024px){.hero>main>header>section>h2[data-v-78ca05d4]{font-size:3.75rem;line-height:4.25rem}.hero>main>header>section>h3[data-v-78ca05d4]{font-size:1.875rem;line-height:2.75rem}.hero>main>header>aside[data-v-78ca05d4]{min-width:410px}}',""]),t.exports=r},395:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"flex items-center"},[e("img",{staticClass:"hidden md:block w-full",attrs:{width:"322",height:"287",src:n(380),alt:"Karbo"}})])}],o=(n(76),n(4)),c=n(33),l=n(34),d=n(44),h=n(45),f=n(22),m=n(9),v=(n(46),n(26),n(8),n(27),n(29),n(18)),w=n(379);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var y,_=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(d.a)(n,t);var e=x(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"githubLink",get:function(){return"https://github.com/Karbovanets/karbo"}}]),n}(v.Vue);O=_([Object(v.Component)({components:{VueTyper:(y=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.e(20).then(n.t.bind(null,416,7));case 3:t.t0=t.sent.VueTyper,t.next=7;break;case 6:t.t0={};case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)}))),function(){return y.apply(this,arguments)}),DownloadDropdown:w.default}})],O);var j=O,k=(n(381),n(28)),component=Object(k.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero"},[n("main",{staticClass:"py-12 md:py-16 xl:container md:px-10 lg:px-12 xl:px-32 md:pr-8 lg:pr-16 xl:pr-40"},[n("header",{staticClass:"flex justify-between"},[n("section",[n("h2",{staticClass:"text-5xl font-extrabold"},[n("client-only",[n("vue-typer",{attrs:{text:t.$t("hero.title.line1"),"initial-action":"erasing"}})],1),n("br"),t._v(" "),n("span",[t._v("\n            "+t._s(t.$t("hero.title.line2"))+"\n          ")])],1),t._v(" "),n("h3",{staticClass:"text-2xl text-grey-mid font-light font-mono leading-9 mt-4 mb-8"},[n("span",{domProps:{innerHTML:t._s(t.$t("hero.subtitle"))}})])]),t._v(" "),t._m(0)]),t._v(" "),n("footer",{staticClass:"mt-6 md:mt-0 xl:-mt-20 md:flex"},[n("DownloadDropdown"),t._v(" "),n("a",{staticClass:"flex items-center font-mono font-medium hover:no-underline sm:mt-6 md:mt-0 md:ml-8 h-12",attrs:{href:t.githubLink,rel:"noopener",target:"_blank"}},[n("SvgIcon",{staticClass:"h-8 w-8",attrs:{name:"github"}}),t._v(" "),n("span",{staticClass:"ml-3 mr-2"},[t._v(t._s(t.$t("hero.githubContribution")))]),t._v(" "),n("SvgIcon",{staticClass:"h-4 w-4",attrs:{name:"arrow-right"}})],1)],1)])])}),r,!1,null,"78ca05d4",null);e.default=component.exports}}]);
//# sourceMappingURL=f7f1448.js.map