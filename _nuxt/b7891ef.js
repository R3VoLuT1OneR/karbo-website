(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{376:function(e,t,o){var content=o(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(61).default)("07f0609e",content,!0,{sourceMap:!1})},385:function(e,t,o){e.exports=o.p+"img/wallets.e20971a.svg"},386:function(e,t,o){var n=o(3),l=o(247).values;n({target:"Object",stat:!0},{values:function(e){return l(e)}})},387:function(e,t,o){(function(t){e.exports=function(){"use strict";function e(e,t){var o=window.matchMedia(e);t(o.matches);var i=function(){return t(o.matches)};return o.addListener(i),function(){return o.removeListener(i)}}function o(e,t){return r[e]!==t&&(r[e]=t,s(e,t),!0)}var n="undefined"!=typeof navigator&&"undefined"!=typeof window;if(n&&"undefined"!=typeof nw)try{nw.Window.get()}catch(e){n=!1}var i=!n,l=n?navigator.userAgent:void 0,r={gui:n,terminal:i,registerQuery:e};r.node=void 0!==t&&!!t.versions&&!!t.versions.node,r.pwa=r.gui&&window.matchMedia("(display-mode: standalone)").matches&&null!==document.head.querySelector('[rel="manifest"]'),r.uwp="undefined"!=typeof Windows&&"undefined"!=typeof MSApp,r.nwjs=!(!r.node||!t.versions.nw),r.electron=!(!r.node||!t.versions.electron),r.cordova=!(!r.gui||!window.cordova),r.packaged=r.uwp||r.nwjs||r.electron||r.cordova,r.web=!r.node&&!r.packaged,r.browser=r.web,r.website=r.web&&!r.pwa,r.worker=!r.gui&&"undefined"!=typeof self&&void 0!==self.importScripts,r.serviceWorker=r.worker&&!!navigator.serviceWorker.controller||!1,r.android=!!r.gui&&l.includes("Android"),r.chromeos=!!r.gui&&l.includes("CrOS"),r.tizen=!!r.gui&&l.includes("Tizen"),r.ios=r.gui&&/iPad|iPhone|iPod/.test(l)&&!window.MSStream||!1,r.linuxBased=r.android||r.tizen,r.windows=r.node?"win32"===t.platform:l.includes("Windows"),r.macos=r.node?"darwin"===t.platform:l.includes("Macintosh"),r.linux=r.node?"linux"===t.platform:l.includes("Linux")&&!r.linuxBased&&!r.macos,r.edgeHtml=r.gui&&l.includes("Edge/"),r.edgeChromium=r.gui&&l.includes("Edg/"),r.edgeAndroid=r.gui&&l.includes("EdgA/"),r.edgeIos=r.gui&&l.includes("EdgiOS/"),r.chromeIos=r.gui&&l.includes("CriOS/"),r.firefoxIos=r.gui&&l.includes("FxiOS/"),r.edge=r.edgeHtml||r.edgeChromium||r.edgeAndroid||r.edgeIos,r.samsungBrowser=r.gui&&l.includes("SamsungBrowser/"),r.opera=r.gui&&(l.includes("Opera")||l.includes("OPR/")),r.firefox=r.gui&&(l.includes("Firefox")||r.firefoxIos),r.chrome=r.gui&&(l.includes("Chrome")||r.chromeIos)&&!r.edge&&!r.opera&&!r.samsungBrowser,r.safari=r.gui&&l.includes("Safari")&&!r.chrome&&!r.edge&&!r.firefox&&!r.opera&&!r.samsungBrowser||r.edgeIos||r.chromeIos||r.firefoxIos,r.ie=r.trident=r.gui&&l.includes("Trident"),r.blink=r.chrome&&!r.chromeIos||r.edgeChromium||r.edgeAndroid||r.samsungBrowser,r.webkit=r.blink||r.safari,r.gecko=r.firefox&&!r.firefoxIos&&!r.webkit&&!r.safari;var c={};r.on=function(e,t){c[e]=c[e]||new Set,c[e].add(t)},r.off=r.removeListener=function(e,t){c[e]&&c[e].delete(t)};var s=r.emit=function(e,t){c[e]&&c[e].forEach((function(e){return e(t)}))};if(r.gui){r.pixelRatio=parseFloat(window.devicePixelRatio.toFixed(2)),r.gameconsole=l.includes("Xbox")||l.includes("PlayStation");var a=0;if(window.addEventListener("gamepadconnected",(function(e){return a++})),window.addEventListener("gamepaddisconnected",(function(e){return a--})),r.gameconsole)r.gamepad=!0,r.mouse=!0,r.touch=!1,r.tv=!0,r.battery=!1,r.phone=r.tablet=r.hybrid=r.laptop=r.desktop=!1,r.formfactor="gameconsole";else{var d=function(){o("tv","tv"===r.formfactor),o("phone","phone"===r.formfactor),o("tablet","tablet"===r.formfactor),o("hybrid","hybrid"===r.formfactor),o("laptop","laptop"===r.formfactor),o("desktop","desktop"===r.formfactor)},u=function(){var e=Math.min(window.screen.width,window.screen.height);return r.tv?"tv":r.touch&&e<600?"phone":r.touch&&!r.mouse?"tablet":r.touch&&r.mouse?"hybrid":r.battery?"laptop":"desktop"};r.touch=navigator.maxTouchPoints>0,r.tv=l.includes("TV"),a=navigator.getGamepads?Array.from(navigator.getGamepads()).filter((function(e){return null!=e})).length:0,r.gamepad=a>0,e("(orientation: portrait)",(function(e){r.portrait=e,r.landscape=!e,r.orientation=e?"portrait":"landscape",s("portrait",r.portrait),s("landscape",r.landscape),s("orientation",r.orientation)})),e("(any-pointer: coarse)",(function(e){o("touch",e),o("formfactor",u())&&d()})),e("(hover: hover)",(function(e){o("mouse",e),o("input",e?"mouse":"touch"),o("formfactor",u())&&d()}))}}return r.csp=r.uwp||!1,r.nwjs?r.dev="sdk"===t.versions["nw-flavor"]:r.electron?r.dev=t.execPath.replace(/\\/g,"/").includes("node_modules/electron/"):r.uwp?r.dev=Windows.ApplicationModel.Package.current.isDevelopmentMode:r.node?r.dev=!1:r.dev=void 0,r}()}).call(this,o(171))},388:function(e,t,o){"use strict";o(376)},389:function(e,t,o){var n=o(60)(!1);n.push([e.i,"@media(max-width:768px){.download[data-v-b55ece8a]{padding-left:6.25vw;padding-right:6.25vw}}.download>section>main>ul[data-v-b55ece8a]::-webkit-scrollbar{width:3px;height:3px}.download>section>main>ul[data-v-b55ece8a]::-webkit-scrollbar-track{--bg-opacity:1;background-color:#dfe4ea;background-color:rgba(223,228,234,var(--bg-opacity))}.download>section>main>ul[data-v-b55ece8a]::-webkit-scrollbar-thumb{--bg-opacity:1;background-color:#4585fb;background-color:rgba(69,133,251,var(--bg-opacity))}.download>section>main>ul>li[data-v-b55ece8a]{--text-opacity:1;color:#586881;color:rgba(88,104,129,var(--text-opacity))}.download>section>main>ul>li>figure[data-v-b55ece8a]{--bg-opacity:1;background-color:#e5eefe;background-color:rgba(229,238,254,var(--bg-opacity));transition:all .15s ease-in}.download>section>main>ul>li>figure>.icon[data-v-b55ece8a]{--text-opacity:1;color:#90b5fb;color:rgba(144,181,251,var(--text-opacity))}.download>section>main>ul>li.active[data-v-b55ece8a]{--text-opacity:1;color:#082840;color:rgba(8,40,64,var(--text-opacity))}.download>section>main>ul>li.active>figure[data-v-b55ece8a]{--bg-opacity:1;background-color:#4585fb;background-color:rgba(69,133,251,var(--bg-opacity))}.download>section>main>ul>li.active>figure>.icon[data-v-b55ece8a]{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.download>section>main>ul>li:hover>figure[data-v-b55ece8a]{transform:scale(1.2)}.download>section>main>.wallets[data-v-b55ece8a]{transition:height .4s ease-out}.download>section>main>.wallets[data-v-b55ece8a]::-webkit-scrollbar{width:3px;height:3px}.download>section>main>.wallets[data-v-b55ece8a]::-webkit-scrollbar-track{--bg-opacity:1;background-color:#dfe4ea;background-color:rgba(223,228,234,var(--bg-opacity))}.download>section>main>.wallets[data-v-b55ece8a]::-webkit-scrollbar-thumb{--bg-opacity:1;background-color:#4585fb;background-color:rgba(69,133,251,var(--bg-opacity))}.download>section>main>.wallets .wallets-group[data-v-b55ece8a]{transition:left .4s ease-out}.download>section>main>.wallets .wallet .tag[data-v-b55ece8a]{font-size:10px;letter-spacing:.5px}@media (min-width:768px){.download>section>main>.wallets[data-v-b55ece8a]{max-height:24rem}}@media(max-width:768px){.download>section>main[data-v-b55ece8a]{margin-left:-6.25vw;margin-right:-6.25vw}.download>section>main>ul[data-v-b55ece8a]{padding-bottom:1rem}.download>section>main>ul>li[data-v-b55ece8a]:first-child{margin-left:6.25vw}.download>section>main>.wallets>.wallets-group[data-v-b55ece8a]{padding-left:6.25vw;padding-right:6.25vw}}",""]),e.exports=n},397:function(e,t,o){"use strict";o.r(t);o(76);var n=o(17),l=o(33),r=o(34),c=o(44),d=o(45),f=o(22),w=o(9),m=(o(26),o(8),o(386),o(50),o(27),o(89),o(35),o(387)),v=o(18),h=o(136);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(f.a)(e);if(t){var l=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,l)}else o=n.apply(this,arguments);return Object(d.a)(this,o)}}var x,k=function(e,t,o,desc){var n,l=arguments.length,r=l<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(w.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(r=(l<3?n(r):l>3?n(t,o,r):n(t,o))||r);return l>3&&r&&Object.defineProperty(t,o,r),r};!function(e){e.Mobile="mobile",e.Web="web"}(x||(x={}));var _=function(e){Object(c.a)(o,e);var t=y(o);function o(){var e;return Object(l.a)(this,o),(e=t.apply(this,arguments)).active=h.WalletOS.Windows,e}return Object(r.a)(o,[{key:"karbo",get:function(){return this.$accessor.wallets.karbo}},{key:"tabs",get:function(){var e;return e={},Object(n.a)(e,h.WalletOS.Windows,{icon:"wallets/windows",label:this.$t("download.tabs.windows"),wallets:[{tag:"official",type:h.WalletType.Classic,download:this.karbo.classic.details.windows.href,source:this.karbo.classic.source},{tag:"alternative",type:h.WalletType.Lite,download:this.karbo.lite.details.windows.href,source:this.karbo.lite.source},{tag:"official",type:h.WalletType.CLI,download:this.karbo.cli.details.windows.href,source:this.karbo.cli.source}]}),Object(n.a)(e,h.WalletOS.MacOS,{icon:"wallets/apple",label:this.$t("download.tabs.macos"),wallets:[{tag:"official",type:h.WalletType.Classic,download:this.karbo.classic.details.macos.href,source:this.karbo.classic.source},{tag:"alternative",type:h.WalletType.Lite,download:this.karbo.lite.details.macos.href,source:this.karbo.lite.source},{tag:"official",type:h.WalletType.CLI,download:this.karbo.cli.details.macos.href,source:this.karbo.cli.source}]}),Object(n.a)(e,h.WalletOS.Ubuntu,{icon:"wallets/linux",label:this.$t("download.tabs.linux"),wallets:[{tag:"official",type:h.WalletType.Classic,download:this.karbo.classic.details.macos.href,source:this.karbo.classic.source},{tag:"alternative",type:h.WalletType.Lite,download:this.karbo.lite.details.macos.href,source:this.karbo.lite.source},{tag:"official",type:h.WalletType.CLI,download:this.karbo.cli.details.macos.href,source:this.karbo.cli.source}]}),Object(n.a)(e,x.Mobile,{icon:"wallets/mobile",label:this.$t("download.tabs.mobile"),wallets:[{tag:"official",type:"android",icon:"wallets/android",link:this.$accessor.wallets.mobile.android}]}),Object(n.a)(e,x.Web,{icon:"wallets/web",label:this.$t("download.tabs.web"),wallets:[{tag:"custodial",type:"web",link:this.$accessor.wallets.web}]}),e}},{key:"mounted",value:function(){var e=this;this.setActiveTab(m.windows?h.WalletOS.Windows:m.android||m.ios||m.phone||m.tablet?x.Mobile:m.macos?h.WalletOS.MacOS:m.linux||m.linuxBased?h.WalletOS.Ubuntu:h.WalletOS.Windows);var t=function(){e.updateGroupDisplay(e.active)};window.addEventListener("resize",t),this.$once("unmounted",(function(){return window.removeEventListener("resize",t)}))}},{key:"setActiveTab",value:function(e){this.active=e;var t=this.$refs["tab-".concat(e)];if(t&&Array.isArray(t)&&t[0]){var o=t[0];this.$scrollTo(o,300,{container:this.tabsElement,offset:(this.tabsElement.offsetWidth-o.offsetWidth)/-2,x:!0,y:!1}),this.updateGroupDisplay(e)}}},{key:"updateGroupDisplay",value:function(e){var t=this,o=Object.values(this.tabs).indexOf(this.tabs[e]),n=Array.from(this.walletsElement.children);setTimeout((function(){t.walletsElement.style.height="".concat(n[o].offsetHeight,"px")}),100),n.forEach((function(e,i){e.style.left="".concat(t.walletsElement.offsetWidth*(i-o),"px")}))}}]),o}(v.Vue);k([Object(v.Ref)("wallets")],_.prototype,"walletsElement",void 0),k([Object(v.Ref)("tabs")],_.prototype,"tabsElement",void 0);var O=_=k([v.Component],_),C=(o(388),o(28)),component=Object(C.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"download md:flex items-start xl:container py-12 md:pb-32 md:px-10 lg:px-12 xl:px-32",attrs:{id:"download"}},[n("aside",{staticClass:"hidden lg:flex justify-center w-5/12 pr-12 lg:pt-16 xl:w-6/12"},[n("img",{staticClass:"w-full xl:w-2/3",attrs:{width:"230",height:"265",src:o(385),alt:e.$t("download.karboWallet")}})]),e._v(" "),n("section",{staticClass:"md:w-full lg:w-7/12 xl:w-6/12"},[n("header",[n("span",{staticClass:"uppercase font-mono text-orange text-sm font-bold tracking-widest"},[e._v("\n        "+e._s(e.$t("download.label"))+"\n      ")]),e._v(" "),n("h2",{staticClass:"text-4xl font-extrabold mt-3 md:text-5xl"},[e._v("\n        "+e._s(e.$t("download.title"))+"\n      ")])]),e._v(" "),n("main",[n("ul",{ref:"tabs",staticClass:"flex py-8 overflow-x-auto"},[e._l(e.tabs,(function(t,o){var l=t.icon,label=t.label;return n("li",{key:o,ref:"tab-"+o,refInFor:!0,staticClass:"flex flex-col items-center justify-center w-24 cursor-pointer text-center last:mr-0",class:{active:e.active===o,"mr-12":o!==Object.keys(e.tabs).pop(),"mr-4":o===Object.keys(e.tabs).pop()&&"sm"===e.$accessor.tailwind.viewSize},on:{click:function(t){return e.setActiveTab(o)}}},[n("figure",{staticClass:"flex justify-center items-center w-12 h-12 rounded-full mb-2"},[n("SvgIcon",{staticClass:"w-6 h-6",attrs:{name:l}})],1),e._v(" "),n("span",[e._v(e._s(label))])])})),e._v(" "),e._m(0)],2),e._v(" "),n("section",{ref:"wallets",staticClass:"wallets overflow-x-hidden relative md:overflow-y-auto"},e._l(Object.values(e.tabs),(function(t,i){var o=t.wallets;return n("div",{key:i,staticClass:"wallets-group absolute w-full md:pr-4"},e._l(o,(function(t,o){var l=t.tag,r=t.type,c=t.download,link=t.link,source=t.source,d=t.icon;return n("article",{key:o,staticClass:"wallet px-6 py-5 rounded-lg bg-blue-airy mt-8"},[n("span",{staticClass:"tag py-2 px-3 bg-navy-dark uppercase text-white font-mono font-bold text-sm tracking-widest",class:{"bg-navy-dark":"official"===l,"bg-greenish":"alternative"===l,"bg-green":"custodial"===l}},[e._v("\n              "+e._s(l)+"\n            ")]),e._v(" "),n("h3",{staticClass:"mt-4 font-extrabold text-2xl"},[d?n("SvgIcon",{staticClass:"inline-block text-grey w-6 h-6 mr-1",attrs:{name:d}}):e._e(),e._v("\n              "+e._s(e.$t("download.wallets."+r+".title"))+"\n            ")],1),e._v(" "),n("p",{staticClass:"text-grey-dark mt-3"},[e._v("\n              "+e._s(e.$t("download.wallets."+r+".description"))+"\n            ")]),e._v(" "),n("div",{staticClass:"flex flex-wrap-reverse justify-between"},[c?n("a",{staticClass:"button rounded-full bg-blue-dark text-white font-semibold px-6 mt-4 hover:bg-blue-darkest md:text-xs",attrs:{href:c}},[n("SvgIcon",{staticClass:"mr-2 w-4 h-4",attrs:{name:"download"}}),e._v(" "),n("span",[e._v("Download")])],1):e._e(),e._v(" "),link?n("a",{staticClass:"button rounded-full bg-blue-dark text-white font-semibold px-6 mt-4 hover:bg-blue-darkest md:text-xs",attrs:{href:link,rel:"noopener",target:"_blank"}},[n("span",[e._v("Open")]),e._v(" "),n("SvgIcon",{staticClass:"ml-2 w-4 h-4 md:w-3 md:h-3",attrs:{name:"external"}})],1):e._e(),e._v(" "),source?n("a",{staticClass:"button rounded-full font-mono font-medium text-xs mt-4",attrs:{href:source,rel:"noopener",target:"_blank"}},[n("SvgIcon",{staticClass:"mr-2 w-6 h-6 text-denim-dark",attrs:{name:"github"}}),e._v(" "),n("span",{staticClass:"text-blue-dark"},[e._v("Source Code")])],1):e._e()])])})),0)})),0)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"md:hidden"},[t("span",{staticClass:"block w-1"})])}],!1,null,"b55ece8a",null);t.default=component.exports}}]);
//# sourceMappingURL=b7891ef.js.map