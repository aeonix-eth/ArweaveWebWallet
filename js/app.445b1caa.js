(function(e){function t(t){for(var r,c,l=t[0],s=t[1],i=t[2],u=0,d=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d2311c8":"eafb2723","chunk-4c6f028e":"b51b4539","chunk-50bd3b67":"32007804"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4c6f028e":1,"chunk-50bd3b67":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2311c8":"31d6cfe0","chunk-4c6f028e":"9ed2d77d","chunk-50bd3b67":"5a53d4f0"}[e]+".css",a=s.p+r,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var i=o[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){i=d[l],u=i.getAttribute("data-href");if(u===r||u===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ArweaveWebWallet/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=u;o.push([3,"chunk-vendors"]),n()})({0:function(e,t){},"06ad":function(e,t,n){},"076e":function(e,t,n){"use strict";n("60ee")},1:function(e,t){},10:function(e,t){},"136e":function(e,t,n){"use strict";n("b1d0")},"172e":function(e,t,n){},"1b9f":function(e,t,n){},"1f27":function(e,t,n){"use strict";n("5645")},2:function(e,t){},3:function(e,t,n){e.exports=n("56d7")},"319a":function(e,t,n){"use strict";var r=n("2909"),c=n("1da1"),a=(n("96cf"),n("d81d"),n("7db0"),n("ac1f"),n("841c"),n("95dc")),o=n.n(a),l=n("a6c5"),s=n.n(l),i=n("bc3a"),u=n.n(i),d=n("7a23");var b=o.a.init({host:"arweave.net",port:443,protocol:"https"}),p=new s.a(b),f=Object(d["reactive"])({arweave:b,currentWallet:null,wallets:[{id:0,key:"TId0Wix2KFl1gArtAT6Do1CbWU_0wneGvS5X9BfW5PE",balance:null,queries:{},queriesStatus:{}},{id:1,key:"Bf3pWqxD1qwwF2fcE9bPNyQp_5TSlAYPJ3JNMgJSj4c",balance:null,queries:{},queriesStatus:{}},{id:2,key:"vLRHFqCw1uHu75xqB4fCDW-QxpkpJxBtFD9g4QYUbfw",balance:null,queries:{},queriesStatus:{}}],currency:{limestone:null},getNewId:function(){for(var e=0;e<=this.wallets.length;e++)if(-1===this.wallets.map((function(e){return e.id})).indexOf(e))return e},getWalletById:function(e){return this.wallets.find((function(t){return t.id==e}))},getWalletByKey:function(e){return this.wallets.find((function(t){return t.key==e}))},setCurrentWallet:function(e){this.currentWallet=e,this.updateWalletBalance(e),console.log("Current wallet set to ",e)},updateWalletBalance:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.wallets.getBalance(e.key);case 2:return n=t.sent,e.balance=b.ar.winstonToAr(n),console.log("Wallet balance ",e.balance),t.abrupt("return",e.balance);case 6:case"end":return t.stop()}}),t)})))()},fetchTransactions:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var c,a,o,l,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:if(a={received:function(){return p.search().to(e.key)},sent:function(){return p.search().from(e.key)}},!(e.queries[t]&&e.queries[t].length>0)){n.next=11;break}return l=e.queries[t].length-1,s=e.queries[t][l].cursor,n.next=8,a[t]().cursor(s).find();case 8:o=n.sent,n.next=15;break;case 11:return e.queries[t]=[],n.next=14,a[t]().find();case 14:o=n.sent;case 15:return o.length<10&&(e.queriesStatus[t]||(e.queriesStatus[t]={}),e.queriesStatus[t].completed=!0),(c=e.queries[t]).push.apply(c,Object(r["a"])(o)),n.abrupt("return",e.queries[t]);case 18:case"end":return n.stop()}}),n)})))()},updateConversionRate:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.limestone.finance/prices?symbol=AR&provider=limestone");case 2:return n=t.sent,e.currency.limestone=n.data[0].value,console.log("Conversion Rate",e.currency.limestone),t.abrupt("return",e.currency.limestone);case 6:case"end":return t.stop()}}),t)})))()}});f.wallets.length>0&&(f.currentWallet=f.wallets[0]),f.updateConversionRate(),setInterval((function(){f.updateConversionRate()}),6e5);t["a"]=f},"32e0":function(e,t,n){"use strict";n("35b4")},"352d":function(e,t,n){},"35b4":function(e,t,n){},"3f0a":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["withScopeId"])("data-v-fd9740ec");Object(r["pushScopeId"])("data-v-fd9740ec");var a={class:"address-container ellipsis"},o={class:"address-tx ellipsis"};Object(r["popScopeId"])();var l=c((function(e,t,n,c,l,s){return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("span",o,[Object(r["createVNode"])("strong",null,[Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0)]),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(n.address),1)])])})),s={props:["address"]};n("94c1");s.render=l,s.__scopeId="data-v-fd9740ec";t["a"]=s},"3f88":function(e,t,n){"use strict";n("fc4c")},4:function(e,t){},"41b9":function(e,t,n){"use strict";n("7f88")},"449b":function(e,t,n){},4695:function(e,t,n){},"4cff":function(e,t,n){"use strict";n("06ad")},5:function(e,t){},"54da":function(e,t,n){"use strict";n("7177")},5645:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["withScopeId"])("data-v-e4644406"),a=c((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("Toolbar"),s=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(l,{class:"toolbar",onDrop:Object(r["withModifiers"])(o.droppedFiles,["prevent"]),onDragover:t[1]||(t[1]=Object(r["withModifiers"])((function(){}),["prevent"]))},null,8,["onDrop"]),Object(r["createVNode"])(s,{class:"main",onDrop:Object(r["withModifiers"])(o.droppedFiles,["prevent"]),onDragover:t[2]||(t[2]=Object(r["withModifiers"])((function(){}),["prevent"]))},null,8,["onDrop"])],64)})),o=n("b85c"),l=n("1da1"),s=(n("96cf"),n("4de4"),n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),i=Object(r["withScopeId"])("data-v-85b76756");Object(r["pushScopeId"])("data-v-85b76756");var u={id:"nav"},d={class:"controls"},b=Object(r["createVNode"])("img",{class:"small",src:"add_box.svg"},null,-1),p=Object(r["createVNode"])("img",{class:"small",src:"settings.svg"},null,-1);Object(r["popScopeId"])();var f=i((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("AddressIcon"),f=Object(r["resolveComponent"])("router-link"),v=Object(r["resolveComponent"])("SlickItem"),O=Object(r["resolveComponent"])("SlickList");return Object(r["openBlock"])(),Object(r["createBlock"])("div",u,[Object(r["createVNode"])(O,{class:"wallets",axis:c.axis,lockAxis:c.axis,list:c.ArweaveStore.wallets,"onUpdate:list":t[1]||(t[1]=function(e){return c.ArweaveStore.wallets=e}),pressDelay:200,helperClass:"dragging"},{default:i((function(){return[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.ArweaveStore.wallets,(function(t,n){return Object(r["openBlock"])(),Object(r["createBlock"])(v,{index:n,key:t.key,draggable:"false"},{default:i((function(){return[Object(r["createVNode"])(f,{class:["icon wallet",{active:t===c.ArweaveStore.currentWallet,"axis-x":"x"===c.axis}],to:{name:o.navTo,query:Object(s["a"])(Object(s["a"])({},e.$route.query),{},{wallet:t.id})},draggable:"false"},{default:i((function(){return[Object(r["createVNode"])(l,{class:"profile",address:t.key,draggable:"false"},null,8,["address"])]})),_:2},1032,["to","class"])]})),_:2},1032,["index"])})),128))]})),_:1},8,["axis","lockAxis","list"]),Object(r["createVNode"])("div",d,[Object(r["createVNode"])("div",{class:"icon control",onClick:t[2]||(t[2]=function(e){return o.createWallet()})},[b]),Object(r["createVNode"])(f,{class:"icon control",to:"/settings"},{default:i((function(){return[p]})),_:1})])])})),v=(n("b0c0"),n("cff5")),O=n("11b0"),j=n("319a");n("5234");function h(e){return m.apply(this,arguments)}function m(){return m=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.t0=t,e.t0){e.next=5;break}return e.next=4,j["a"].arweave.wallets.generate();case 4:e.t0=e.sent;case 5:return n=e.t0,e.next=8,j["a"].arweave.wallets.jwkToAddress(n);case 8:if(r=e.sent,!j["a"].getWalletByKey(r)){e.next=11;break}return e.abrupt("return",null);case 11:return c={id:j["a"].getNewId(),key:r,jwk:n},t||w(r,JSON.stringify(n)),j["a"].wallets.push(c),e.abrupt("return",c.id);case 15:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function w(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}var g={name:"Toolbar",components:{AddressIcon:v["a"],SlickList:O["SlickList"],SlickItem:O["SlickItem"]},setup:function(){var e=Object(r["ref"])(window.innerWidth),t=function(){return e.value=window.innerWidth};Object(r["onMounted"])((function(){return window.addEventListener("resize",t)})),Object(r["onUnmounted"])((function(){return window.removeEventListener("resize",t)}));var n=Object(r["computed"])((function(){return e.value<=600?"x":"y"}));return{ArweaveStore:j["a"],axis:n}},methods:{createWallet:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:n=t.sent,e.$router.push({name:"EditWallet",query:{wallet:n}});case 4:case"end":return t.stop()}}),t)})))()}},computed:{navTo:function(){var e;return"Wallet"===(null===(e=this.$route.matched[0])||void 0===e?void 0:e.name)?null:"Tx"}}};n("3f88");g.render=f,g.__scopeId="data-v-85b76756";var k=g,y={components:{Toolbar:k},methods:{droppedFiles:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,c,a,l,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=[],c=Object(o["a"])(e.dataTransfer.files),n.prev=2,c.s();case 4:if((a=c.n()).done){n.next=16;break}return l=a.value,n.t0=h,n.t1=JSON,n.next=10,l.text();case 10:n.t2=n.sent,n.t3=n.t1.parse.call(n.t1,n.t2),s=(0,n.t0)(n.t3),r.push(s);case 14:n.next=4;break;case 16:n.next=21;break;case 18:n.prev=18,n.t4=n["catch"](2),c.e(n.t4);case 21:return n.prev=21,c.f(),n.finish(21);case 24:return n.next=26,Promise.all(r);case 26:i=n.sent.filter((function(e){return null!==e})),i.length>0&&t.$router.push({name:"EditWallet",query:{wallet:i}});case 28:case"end":return n.stop()}}),n,null,[[2,18,21,24]])})))()}}};n("6206"),n("6fb8");y.render=a,y.__scopeId="data-v-e4644406";var x=y,S=n("6c02"),B=Object(r["withScopeId"])("data-v-7104dd05");Object(r["pushScopeId"])("data-v-7104dd05");var N={class:"container"},V={key:0,class:"wallet"};Object(r["popScopeId"])();var I=B((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("Balance"),s=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",N,[c.ArweaveStore.currentWallet?(Object(r["openBlock"])(),Object(r["createBlock"])("div",V,[Object(r["createVNode"])(l,{class:"balance",wallet:c.ArweaveStore.currentWallet},null,8,["wallet"]),Object(r["createVNode"])(s,{class:"wallet-view"})])):Object(r["createCommentVNode"])("",!0)])})),C=Object(r["withScopeId"])("data-v-393cf6d5");Object(r["pushScopeId"])("data-v-393cf6d5");var _={class:"balance"},A={class:"amounts"},T=Object(r["createVNode"])("br",null,null,-1),q={class:"info"},L={class:"actions"},W=Object(r["createTextVNode"])("Send"),D=Object(r["createTextVNode"])("Transactions"),M=Object(r["createTextVNode"])("Tokens");Object(r["popScopeId"])();var R=C((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("Ar"),i=Object(r["resolveComponent"])("LocaleCurrency"),u=Object(r["resolveComponent"])("Address"),d=Object(r["resolveComponent"])("Action");return Object(r["openBlock"])(),Object(r["createBlock"])("div",_,[Object(r["createVNode"])("div",A,[Object(r["createVNode"])(l,{class:"ar",ar:n.wallet.balance},null,8,["ar"]),T,Object(r["createVNode"])(i,{class:"currency",ar:n.wallet.balance},null,8,["ar"])]),Object(r["createVNode"])("div",q,[Object(r["createVNode"])(u,{address:n.wallet.key},null,8,["address"])]),Object(r["createVNode"])("div",L,[Object(r["createVNode"])(d,{to:{name:"Send",query:Object(s["a"])({},e.$route.query)},img:"north_east.svg"},{default:C((function(){return[W]})),_:1},8,["to"]),Object(r["createVNode"])(d,{to:{name:"Tx",query:Object(s["a"])({},e.$route.query)},img:"swap.svg"},{default:C((function(){return[D]})),_:1},8,["to"]),Object(r["createVNode"])(d,{to:{name:"Tokens",query:Object(s["a"])({},e.$route.query)},img:"cloud_circle.svg"},{default:C((function(){return[M]})),_:1},8,["to"])])])})),z=n("3f0a"),E=Object(r["withScopeId"])("data-v-4c6f871e");Object(r["pushScopeId"])("data-v-4c6f871e");var $={class:"ar"},P=Object(r["createVNode"])("span",{class:"symbol"},"AR",-1);Object(r["popScopeId"])();var F=E((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("span",$,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.amountRounded)+" ",1),P])})),H={props:["ar"],computed:{amountRounded:function(){if(!this.ar)return null;var e=3;return+(Math.round(this.ar+"e+"+e)+"e-"+e)}}};n("32e0");H.render=F,H.__scopeId="data-v-4c6f871e";var J=H,U=Object(r["withScopeId"])("data-v-1aa6efcb");Object(r["pushScopeId"])("data-v-1aa6efcb");var Q={class:"locale-currency"},K=Object(r["createVNode"])("span",{class:"symbol"},"USD",-1);Object(r["popScopeId"])();var X=U((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("span",Q,[Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(o.converted)+" ",1),K])})),Y=(n("b680"),{props:["ar"],computed:{converted:function(){if(this.ar&&j["a"].currency.limestone){var e=j["a"].currency.limestone*this.ar;return e.toFixed(2)}}}});n("4cff");Y.render=X,Y.__scopeId="data-v-1aa6efcb";var Z=Y,G=Object(r["withScopeId"])("data-v-4633838a");Object(r["pushScopeId"])("data-v-4633838a");var ee={class:"text"};Object(r["popScopeId"])();var te=G((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])(l,{class:"action"},{default:G((function(){return[Object(r["createVNode"])("img",{class:"img",src:n.img},null,8,["src"]),Object(r["createVNode"])("span",ee,[Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0)])]})),_:3})})),ne={props:["img"]};n("076e");ne.render=te,ne.__scopeId="data-v-4633838a";var re=ne,ce={components:{Address:z["a"],Ar:J,LocaleCurrency:Z,Action:re},props:["wallet"]};n("54da");ce.render=R,ce.__scopeId="data-v-393cf6d5";var ae=ce,oe={name:"Wallet",components:{Balance:ae},setup:function(){return{ArweaveStore:j["a"]}},watch:{"$route.query.wallet":{handler:function(e){if(e){var t=j["a"].getWalletById(e);t?j["a"].setCurrentWallet(t):j["a"].setCurrentWallet(j["a"].wallets[0])}},immediate:!0}}};n("136e");oe.render=I,oe.__scopeId="data-v-7104dd05";var le=oe,se=Object(r["withScopeId"])("data-v-d29b1b3e");Object(r["pushScopeId"])("data-v-d29b1b3e");var ie={class:"txs"},ue={ref:"bottom"};Object(r["popScopeId"])();var de=se((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("Tabs"),s=Object(r["resolveComponent"])("TxCard");return Object(r["openBlock"])(),Object(r["createBlock"])("div",ie,[Object(r["createVNode"])(l,{query:"view",tabs:a.tabs},null,8,["tabs"]),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.txs,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:e.id,class:"tx",tx:e},null,8,["tx"])})),128)),Object(r["withDirectives"])(Object(r["createVNode"])("div",ue,null,512),[[r["vShow"],!c.loading&&!c.completedQuery]])])})),be=Object(r["withScopeId"])("data-v-66905d4c");Object(r["pushScopeId"])("data-v-66905d4c");var pe={class:"tx-card"},fe={class:"left"},ve={key:0},Oe={class:"bottom"},je={key:1},he={class:"bottom"},me={class:"right"},we={class:"right-content"},ge={class:"right-text"},ke={key:1,class:"ellipsis"},ye=Object(r["createTextVNode"])(" / "),xe={class:"bottom ellipsis"},Se=Object(r["createVNode"])("div",{class:"margin"},null,-1),Be=Object(r["createVNode"])("div",null,"Info here",-1),Ne={key:1,class:"cloud"},Ve=Object(r["createVNode"])("img",{class:"file-type no-select",src:"cloud.svg",draggable:"false"},null,-1);Object(r["popScopeId"])();var Ie=be((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("TxIcon"),s=Object(r["resolveComponent"])("Ar"),i=Object(r["resolveComponent"])("LocaleCurrency"),u=Object(r["resolveComponent"])("Address"),d=Object(r["resolveComponent"])("AddressIcon"),b=Object(r["resolveComponent"])("MoreInfo");return Object(r["openBlock"])(),Object(r["createBlock"])("div",pe,[Object(r["createVNode"])("div",fe,[Object(r["createVNode"])(l,{class:"tx-icon",direction:o.direction,isValue:o.isValue,isData:o.isData},null,8,["direction","isValue","isData"]),o.isValue?(Object(r["openBlock"])(),Object(r["createBlock"])("div",ve,[Object(r["createVNode"])("div",null,[Object(r["createVNode"])(s,{class:"ar",ar:o.value},null,8,["ar"])]),Object(r["createVNode"])("div",Oe,[Object(r["createVNode"])(i,{ar:o.value},null,8,["ar"])])])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",je,[Object(r["createVNode"])("div",null,Object(r["toDisplayString"])(o.dataType),1),Object(r["createVNode"])("div",he,Object(r["toDisplayString"])(o.dataInfo),1)]))]),Object(r["createVNode"])("div",me,[Object(r["createVNode"])("div",we,[Object(r["createVNode"])("div",ge,[o.relativeAddress?(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:0,class:"address",address:o.relativeAddress},null,8,["address"])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",ke,[Object(r["createVNode"])(s,{ar:n.tx.node.fee.ar},null,8,["ar"]),ye,Object(r["createVNode"])(i,{ar:n.tx.node.fee.ar},null,8,["ar"])])),Object(r["createVNode"])("div",xe,Object(r["toDisplayString"])(o.date+" "+o.time),1)]),Se]),o.relativeAddress?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:o.relativeAddress,class:"no-select"},{icon:be((function(){return[Object(r["createVNode"])(d,{address:o.relativeAddress},null,8,["address"])]})),content:be((function(){return[Be]})),_:1})):(Object(r["openBlock"])(),Object(r["createBlock"])("span",Ne,[Ve]))])])})),Ce=(n("a15b"),n("ac1f"),n("1276"),Object(r["withScopeId"])("data-v-1de830e7"));Object(r["pushScopeId"])("data-v-1de830e7");var _e={key:0,class:"tx-in",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ae=Object(r["createVNode"])("rect",{x:"0",y:"0",width:"24",height:"24",style:{fill:"none","fill-rule":"nonzero"}},null,-1),Te=Object(r["createVNode"])("g",{transform:"matrix(6.12323e-17,1,-1,6.12323e-17,24,0)"},[Object(r["createVNode"])("path",{d:"M16.01,11L4,11L4,13L16.01,13L16.01,16L20,12L16.01,8L16.01,11Z",style:{"fill-rule":"nonzero"}})],-1),qe={key:1,class:"tx-out",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Le=Object(r["createVNode"])("rect",{x:"0",y:"0",width:"24",height:"24",style:{fill:"none","fill-rule":"nonzero"}},null,-1),We=Object(r["createVNode"])("g",{transform:"matrix(6.12323e-17,-1,1,6.12323e-17,0,24)"},[Object(r["createVNode"])("path",{d:"M16.01,11L4,11L4,13L16.01,13L16.01,16L20,12L16.01,8L16.01,11Z",style:{"fill-rule":"nonzero"}})],-1),De={key:2,class:"tx-data",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Me=Object(r["createVNode"])("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Re=Object(r["createVNode"])("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z"},null,-1),ze={key:3,class:"tx-data",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ee=Object(r["createVNode"])("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),$e=Object(r["createVNode"])("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"},null,-1),Pe={key:4,class:"tx-in",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Fe=Object(r["createVNode"])("g",null,[Object(r["createVNode"])("rect",{fill:"none",height:"24",width:"24"}),Object(r["createVNode"])("path",{d:"M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z"})],-1),He={key:5,class:"tx-out",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Je=Object(r["createVNode"])("g",null,[Object(r["createVNode"])("rect",{fill:"none",height:"24",width:"24"}),Object(r["createVNode"])("path",{d:"M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"})],-1);Object(r["popScopeId"])();var Ue=Ce((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("span",null,["in"!==n.direction||n.isData?"out"!==n.direction||n.isData?"in"!==n.direction||n.isValue?"out"!==n.direction||n.isValue?"in"===n.direction?(Object(r["openBlock"])(),Object(r["createBlock"])("svg",Pe,[Fe])):"out"===n.direction?(Object(r["openBlock"])(),Object(r["createBlock"])("svg",He,[Je])):Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("svg",ze,[Ee,$e])):(Object(r["openBlock"])(),Object(r["createBlock"])("svg",De,[Me,Re])):(Object(r["openBlock"])(),Object(r["createBlock"])("svg",qe,[Le,We])):(Object(r["openBlock"])(),Object(r["createBlock"])("svg",_e,[Ae,Te]))])})),Qe={props:["direction","isValue","isData"]};n("f55f");Qe.render=Ue,Qe.__scopeId="data-v-1de830e7";var Ke=Qe,Xe=Object(r["withScopeId"])("data-v-8115107e");Object(r["pushScopeId"])("data-v-8115107e");var Ye={class:"header"};Object(r["popScopeId"])();var Ze=Xe((function(e,t,n,c,a,o){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:["wrapper",{expand:a.expand}],onClick:t[2]||(t[2]=function(e){return a.expand=!a.expand})},[Object(r["createVNode"])("div",Ye,[Object(r["renderSlot"])(e.$slots,"icon",{},void 0,!0)]),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Xe((function(){return[a.expand?(Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:0,class:"content",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(){}),["stop"]))},[Object(r["renderSlot"])(e.$slots,"content",{},void 0,!0)])):Object(r["createCommentVNode"])("",!0)]})),_:3})],2)})),Ge={data:function(){return{expand:!1}}};n("c7af");Ge.render=Ze,Ge.__scopeId="data-v-8115107e";var et=Ge,tt={components:{Address:z["a"],Ar:J,TxIcon:Ke,AddressIcon:v["a"],LocaleCurrency:Z,MoreInfo:et},props:["tx"],computed:{date:function(){return new Date(1e3*this.tx.node.block.timestamp).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},time:function(){return new Date(1e3*this.tx.node.block.timestamp).toLocaleTimeString()},direction:function(){if(!j["a"].currentWallet)return null;var e=j["a"].currentWallet.key;return e===this.tx.node.recipient?"in":e===this.tx.node.owner.address?"out":null},isData:function(){return"0"!==this.tx.node.data.size},isValue:function(){return"0"!==this.tx.node.quantity.winston},relativeAddress:function(){return"in"===this.direction?this.tx.node.owner.address:"out"===this.direction?this.tx.node.recipient:null},value:function(){return this.tx.node.quantity.ar},dataType:function(){var e=this.tx.node.data.type;return e?e.split("/").join(" "):"Data"},dataInfo:function(){var e,t=Object(o["a"])(this.tx.node.tags);try{for(t.s();!(e=t.n()).done;){var n=e.value;if("Service"==n.name)return n.value}}catch(u){t.e(u)}finally{t.f()}var r,c=Object(o["a"])(this.tx.node.tags);try{for(c.s();!(r=c.n()).done;){var a=r.value;if("App-Name"==a.name)return a.value}}catch(u){c.e(u)}finally{c.f()}var l,s=Object(o["a"])(this.tx.node.tags);try{for(s.s();!(l=s.n()).done;){var i=l.value;if("User-Agent"==i.name)return i.value.split("/")[0]}}catch(u){s.e(u)}finally{s.f()}}}};n("f09d");tt.render=Ie,tt.__scopeId="data-v-66905d4c";var nt=tt,rt=n("ade3"),ct=Object(r["withScopeId"])("data-v-3cff2d79");Object(r["pushScopeId"])("data-v-3cff2d79");var at={class:"tabs"};Object(r["popScopeId"])();var ot=ct((function(e,t,n,c,a,o){var l=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",at,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(n.tabs,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])(l,{class:["tab",{active:o.isActive(t)}],key:t.name,to:{query:Object(s["a"])(Object(s["a"])({},e.$route.query),{},Object(rt["a"])({},n.query,t.name.toLowerCase()))},style:{"--color":t.color},replace:""},{default:ct((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.name),1)]})),_:2},1032,["to","style","class"])})),128))])})),lt={props:["query","tabs"],methods:{isActive:function(e){var t=this.$route.query[this.query];return t?t===e.name.toLowerCase():0===this.tabs.indexOf(e)}}};n("d692");lt.render=ot,lt.__scopeId="data-v-3cff2d79";var st=lt,it=n("a1e9"),ut=n("5c40"),dt={components:{TxCard:nt,Tabs:st},props:["wallet"],setup:function(e){var t=Object(it["m"])(!1),n=Object(it["m"])(null),r=Object(S["c"])(),c=Object(ut["n"])((function(){return r.query.view||"received"})),a=Object(ut["n"])((function(){var t;return(null===(t=e.wallet)||void 0===t?void 0:t.queries[c.value])||[]})),o=Object(ut["n"])((function(){var t,n;return null===(t=e.wallet)||void 0===t||null===(n=t.queriesStatus[c.value])||void 0===n?void 0:n.completed})),s=function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.value){n.next=2;break}return n.abrupt("return");case 2:return console.log("Queried",c.value),t.value=!0,n.next=6,j["a"].fetchTransactions(e.wallet,c.value);case 6:setTimeout((function(){return t.value=!1}),1e3);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(ut["Ob"])((function(){return r.query}),(function(){t.value=!0,setTimeout((function(){return t.value=!1}))}));var i=new IntersectionObserver((function(e){!0===e[0].isIntersecting&&s()}),{threshold:[0]});return Object(ut["X"])((function(){i.observe(n.value)})),Object(ut["T"])((function(){i.unobserve(n.value)})),{loading:t,txs:a,completedQuery:o,bottom:n}},data:function(){return{tabs:[{name:"Received",color:"#a3be8c"},{name:"Sent",color:"#bf616a"}]}}};n("41b9");dt.render=de,dt.__scopeId="data-v-d29b1b3e";var bt=dt,pt=Object(r["withScopeId"])("data-v-64333f36"),ft=pt((function(e,t,n,r,c,a){return null})),vt={};vt.render=ft,vt.__scopeId="data-v-64333f36";var Ot=vt,jt=Object(r["withScopeId"])("data-v-32480a38"),ht=jt((function(e,t,n,r,c,a){return null})),mt={};mt.render=ht,mt.__scopeId="data-v-32480a38";var wt=mt,gt=[{name:"Wallet",path:"/",component:le,children:[{name:"Tx",path:"",component:bt,props:function(){return{wallet:j["a"].currentWallet}}},{name:"Send",path:"send",component:Ot},{name:"Tokens",path:"tokens",component:wt}],beforeEnter:function(e,t,n){0==j["a"].wallets.length?n({name:"Welcome"}):n()}},{path:"/edit",name:"EditWallet",component:function(){return n.e("chunk-4c6f028e").then(n.bind(null,"1d18"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-50bd3b67").then(n.bind(null,"26d3"))}},{path:"/welcome",name:"Welcome",component:function(){return n.e("chunk-2d2311c8").then(n.bind(null,"eec5"))}}],kt=Object(S["a"])({history:Object(S["b"])(),routes:gt}),yt=kt,xt=Object(r["createApp"])(x);xt.use(yt),xt.use(O["plugin"]),xt.mount("#app")},6:function(e,t){},"60ee":function(e,t,n){},6206:function(e,t,n){"use strict";n("1b9f")},"6f83":function(e,t,n){},"6fb8":function(e,t,n){"use strict";n("dd64")},7:function(e,t){},7177:function(e,t,n){},"7f88":function(e,t,n){},8:function(e,t){},9:function(e,t){},"94c1":function(e,t,n){"use strict";n("6f83")},b1d0:function(e,t,n){},c7af:function(e,t,n){"use strict";n("172e")},cff5:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["withScopeId"])("data-v-30c381dc");Object(r["pushScopeId"])("data-v-30c381dc");var a={class:"address-icon"};Object(r["popScopeId"])();var o=c((function(e,t,n,c,o,l){return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("img",{class:"identicon",src:o.identicon,draggable:"false"},null,8,["src"]),o.url?(Object(r["openBlock"])(),Object(r["createBlock"])("img",{key:0,class:"image",src:o.url,draggable:"false"},null,8,["src"])):Object(r["createCommentVNode"])("",!0)])})),l=n("1da1"),s=(n("96cf"),n("d3b7"),n("25f0"),n("ba5f"),n("319a"),n("36f3")),i=n.n(s),u=n("81b4"),d={props:["address"],data:function(){return{url:null,identicon:null,test:!1}},watch:{address:{handler:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={background:[0,0,0,0],brightness:.6,saturation:.25,margin:0,format:"svg"},r=new u["SHA256"],c=new i.a(r.hex(t),n).toString(),this.identicon="data:image/svg+xml;base64,"+c;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}}};n("1f27");d.render=o,d.__scopeId="data-v-30c381dc";t["a"]=d},d692:function(e,t,n){"use strict";n("449b")},dd64:function(e,t,n){},f09d:function(e,t,n){"use strict";n("4695")},f55f:function(e,t,n){"use strict";n("352d")},fc4c:function(e,t,n){}});
//# sourceMappingURL=app.445b1caa.js.map