(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);A&&A(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var A=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"1fd0":function(t,e,n){"use strict";var a=n("9c27"),o=n.n(a);o.a},2188:function(t,e,n){"use strict";var a=n("f8ca"),o=n.n(a);o.a},"308f":function(t,e,n){},"334e":function(t,e,n){"use strict";var a=n("308f"),o=n.n(a);o.a},"359c":function(t,e){t.exports="data:image/png;base64,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"},"45ea":function(t,e,n){"use strict";var a=n("ba12"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar",{attrs:{lang:t.lang},on:{english:t.english,portuguese:t.portuguese}}),t.lang?n("router-view",{attrs:{lang:t.lang}}):t._e()],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("transition",{attrs:{name:"modal"}},[t.showModal?n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-body"},[t._t("body",[n("div",{staticStyle:{display:"inline !important","margin-bottom":"25px",cursor:"pointer"}},[n("a",{on:{click:function(e){return e.stopPropagation(),t.english()}}},[t._v("🇺🇸")]),t._v("    "),n("a",{on:{click:function(e){return e.stopPropagation(),t.portuguese()}}},[t._v("🇧🇷")])])])],2),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])]):t._e()]),t.showModal?t._e():n("div",[n("div",{staticClass:"name"},[n("div",{on:{click:function(e){return e.stopPropagation(),t.goTo("/")}}},[t._v("\n      Felipe Ribeiro\n      ")]),n("br"),n("div",[n("a",{on:{click:function(e){return e.stopPropagation(),t.$emit("english")}}},[t._v("🇺🇸")]),t._v(" · "),n("a",{on:{click:function(e){return e.stopPropagation(),t.$emit("portuguese")}}},[t._v("🇧🇷")])])]),n("div",[n("ul",[n("li",["eng"==t.lang?n("a",{on:{click:function(e){return e.stopPropagation(),t.goTo("/work")}}},[t._v("Work")]):t._e()]),n("li",["pt"==t.lang?n("a",{on:{click:function(e){return e.stopPropagation(),t.goTo("/work")}}},[t._v("Trabalho")]):t._e()]),n("li",[t._v(" · ")]),n("li",["eng"==t.lang?n("a",{on:{click:function(e){return e.stopPropagation(),t.goTo("/talk")}}},[t._v("Hello")]):t._e()]),n("li",["pt"==t.lang?n("a",{on:{click:function(e){return e.stopPropagation(),t.goTo("/talk")}}},[t._v("Olá")]):t._e()])])])])],1)},r=[],l={name:"NavBar",data:function(){return{showModal:!1}},props:{lang:String},created:function(){localStorage.lang?this.showModal=!1:this.showModal=!0},methods:{english:function(){this.showModal=!1,this.$emit("english")},portuguese:function(){this.showModal=!1,this.$emit("portuguese")},goTo:function(t){this.$router.push(t)}}},c=l,A=(n("1fd0"),n("2877")),u=Object(A["a"])(c,s,r,!1,null,"280ad2c0",null),p=u.exports,g={name:"app",data:function(){return{showModal:!1,lang:null}},methods:{english:function(){this.lang="eng",localStorage.lang=this.lang},portuguese:function(){this.lang="pt",localStorage.lang=this.lang}},mounted:function(){localStorage.lang&&(this.lang=localStorage.lang)},components:{NavBar:p}},h=g,f=(n("034f"),Object(A["a"])(h,o,i,!1,null,null,null)),v=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"container"},["eng"==t.lang?n("h3",[t._v("\n      Hi, I am a web developer working with javascript, react native and vuejs\n    ")]):t._e(),"pt"==t.lang?n("h3",[t._v("\n      Oi, trabalho com desenvolvimento web usando javascript, react native e vuejs\n    ")]):t._e(),n("br"),"eng"==t.lang?n("h3",[t._v("\n      You can check out some of my "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("/work")}}},[t._v("work")])]):t._e(),"pt"==t.lang?n("h3",[t._v("\n      Você pode ver alguns dos meus "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("/work")}}},[t._v("trabalhos")])]):t._e(),n("br"),"eng"==t.lang?n("h3",[t._v("\n      Or we can "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("/talk")}}},[t._v("talk")])]):t._e(),"pt"==t.lang?n("h3",[t._v("\n      Ou podemos "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("/talk")}}},[t._v("conversar")])]):t._e()])])},P=[],m={name:"Home",data:function(){return{}},props:{lang:String},methods:{goTo:function(t){this.$router.push(t)}}},w=m,B=(n("334e"),Object(A["a"])(w,d,P,!1,null,"4deb2ffa",null)),_=B.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"main",staticClass:"hello"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title"},[t._v("Phone to Chrome")]),"eng"==t.lang?n("h3",[t._v("Share texts and links between your phone and your pc")]):t._e(),"pt"==t.lang?n("h3",[t._v("Compartilhe texto e links entre seu celular e seu pc")]):t._e(),"eng"==t.lang?n("h3",[t._v("React Native app reads a QR code on "),n("a",{staticClass:"link",attrs:{href:"https://ctop.site/"}},[t._v("ctop.site")]),t._v(" or the "),n("a",{staticClass:"link",attrs:{href:"https://chrome.google.com/webstore/detail/chrome-to-phone/hobhnejpjknnhojomhmppgdalddofend"}},[t._v("extension")]),t._v("   and a chat is created")]):t._e(),"pt"==t.lang?n("h3",[t._v("React Native app lê código QR em "),n("a",{staticClass:"link",attrs:{href:"https://ctop.site/"}},[t._v("ctop.site")]),t._v(" ou na "),n("a",{staticClass:"link",attrs:{href:"https://chrome.google.com/webstore/detail/chrome-to-phone/hobhnejpjknnhojomhmppgdalddofend"}},[t._v("extensão")]),t._v("  e um chat é criado")]):t._e(),t._m(0),t._m(1),n("h3",{staticClass:"title"},[t._v("Santri Sistemas")]),"eng"==t.lang?n("h3",[t._v("Dashboard for a legacy system using Vuejs")]):t._e(),"pt"==t.lang?n("h3",[t._v("Dashboard para um sistema legacy usando o framework Vuejs")]):t._e(),t._m(2),n("h3",{staticClass:"title"},[t._v("Santri Sistemas")]),"eng"==t.lang?n("h3",[t._v("React Native app with authentication and backend in Java")]):t._e(),"pt"==t.lang?n("h3",[t._v("React Native app com autenticação e backend feito em Java")]):t._e(),t._m(3),n("br"),"eng"==t.lang?n("h3",[t._v("Let's\n      "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("talk")}}},[t._v("talk")])]):t._e(),"pt"==t.lang?n("h3",[t._v("Vamos \n      "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("talk")}}},[t._v("conversar")])]):t._e()])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("a",{attrs:{href:"https://github.com/ribas14/phone-to-chrome",target:"blank"}},[a("img",{staticStyle:{width:"50px",float:"right"},attrs:{src:n("359c"),alt:"Snow"}})])]),a("div",{staticClass:"column"},[a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.felri.phonetochrome",target:"blank"}},[a("img",{staticStyle:{width:"50px"},attrs:{src:n("f510"),alt:"Snow"}})])]),a("div",{staticClass:"column"},[a("a",{attrs:{href:"https://ctop.site/",target:"blank"}},[a("img",{staticStyle:{width:"50px",float:"left"},attrs:{src:n("6929"),alt:"Snow"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("div",{staticStyle:{width:"100%",height:"0px",position:"relative","padding-bottom":"200.000%"}},[n("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden"},attrs:{src:"https://streamable.com/s/dsr8r/hqekjx",frameborder:"0",width:"100%",height:"100%",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("div",{staticStyle:{width:"100%",height:"0px",position:"relative","padding-bottom":"51.095%"}},[n("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden"},attrs:{src:"https://streamable.com/s/gkre8/lwekca",frameborder:"0",width:"100%",height:"100%",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("div",{staticStyle:{width:"100%",height:"0px",position:"relative","padding-bottom":"177.345%"}},[n("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden"},attrs:{src:"https://streamable.com/s/ukymp/kjoard",frameborder:"0",width:"100%",height:"100%",allowfullscreen:""}})])])}],D={name:"Work",data:function(){return{heigth:480}},mounted:function(){this.heigth=window.innerHeight},props:{lang:String},methods:{goTo:function(t){this.$router.push(t)}}},C=D,j=(n("2188"),Object(A["a"])(C,k,b,!1,null,"6774d2bc",null)),y=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"container"},["eng"==t.lang?n("h3",[t._v("\n      You can find me on "),n("a",{staticClass:"link",attrs:{href:"https://www.linkedin.com/in/frcm/",target:"blank"}},[t._v("Linkedin")]),t._v(" or check out my "),n("a",{staticClass:"link",attrs:{href:"https://github.com/ribas14",target:"blank"}},[t._v("Github")])]):t._e(),"pt"==t.lang?n("h3",[t._v("\n      Você pode me achar no "),n("a",{staticClass:"link",attrs:{href:"https://www.linkedin.com/in/frcm/",target:"blank"}},[t._v("Linkedin")]),t._v(" ou dar uma olhada no meu "),n("a",{staticClass:"link",attrs:{href:"https://github.com/ribas14",target:"blank"}},[t._v("Github")])]):t._e(),n("br"),"eng"==t.lang?n("h3",{staticStyle:{"text-align":"center"}},[t._v("\n      Want to talk? Send me an email at  "),n("a",{staticClass:"link email",attrs:{hre:"mailto:felipercmelo@gmail.com"}},[t._v("felipercmelo@gmail.com")])]):t._e(),"pt"==t.lang?n("h3",{staticStyle:{"text-align":"center"}},[t._v("\n      Quer conversar? Envie um email para  "),n("a",{staticClass:"link email",attrs:{hre:"mailto:felipercmelo@gmail.com"}},[t._v("felipercmelo@gmail.com")])]):t._e(),n("br")])])},O=[],M={name:"Talk",data:function(){return{}},props:{lang:String},methods:{goTo:function(t){this.$router.push(t)}}},Q=M,S=(n("45ea"),Object(A["a"])(Q,x,O,!1,null,"00c4b5d0",null)),H=S.exports,I=n("8c4f");a["a"].use(I["a"]),a["a"].config.productionTip=!1;var E=new I["a"]({mode:"history",routes:[{path:"/",component:_},{path:"/talk",component:H},{path:"/work",component:y}]});new a["a"]({router:E,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,n){},6929:function(t,e,n){t.exports=n.p+"img/site.20787027.webp"},"9c27":function(t,e,n){},ba12:function(t,e,n){},f510:function(t,e,n){t.exports=n.p+"img/google_play.38d62731.png"},f8ca:function(t,e,n){}});
//# sourceMappingURL=app.956cfde6.js.map