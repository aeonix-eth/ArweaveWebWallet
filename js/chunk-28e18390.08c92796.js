(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e18390"],{"022f":function(e,t,c){},1429:function(e,t,c){"use strict";c("022f")},"188e":function(e,t,c){"use strict";var o=c("7a23"),n=Object(o["withScopeId"])("data-v-7d0b2afb");Object(o["pushScopeId"])("data-v-7d0b2afb");var a={class:"wallet-options"},r={class:"left"},l={class:"profile-info"},s=Object(o["createTextVNode"])(" Username "),d={class:"content"},u={class:"bottom"};Object(o["popScopeId"])();var i=n((function(e,t,c,n,i,b){var p=Object(o["resolveComponent"])("AddressIcon"),j=Object(o["resolveComponent"])("Address");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])(p,{class:"profile",address:c.wallet.key},null,8,["address"]),Object(o["createVNode"])("div",l,[s,Object(o["createVNode"])(j,{class:"address",address:c.wallet.key},null,8,["address"])])]),Object(o["createVNode"])("div",d,[Object(o["createVNode"])("div",u,[c.wallet.jwk?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,onClick:t[1]||(t[1]=function(e){return n.downloadWallet(c.wallet)})},"Download")):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",{onClick:t[2]||(t[2]=function(e){return n.deleteWallet(c.wallet)})},"Delete")])])])})),b=c("cff5"),p=c("3f0a"),j=c("32c4"),v={components:{AddressIcon:b["a"],Address:p["a"]},props:["wallet"],setup:function(){return{deleteWallet:j["c"],downloadWallet:j["d"]}}};c("1429");v.render=i,v.__scopeId="data-v-7d0b2afb";t["a"]=v},2532:function(e,t,c){"use strict";var o=c("23e7"),n=c("5a34"),a=c("1d80"),r=c("577e"),l=c("ab13");o({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~r(a(this)).indexOf(r(n(e)),arguments.length>1?arguments[1]:void 0)}})},"26d3":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=Object(o["withScopeId"])("data-v-43ed1cbc");Object(o["pushScopeId"])("data-v-43ed1cbc");var a={class:"settings"},r={class:"column"},l=Object(o["createVNode"])("h2",null,"Wallet Settings",-1),s={class:"flex-column"},d=Object(o["createVNode"])("h2",null,"App Settings",-1),u={class:"group"},i=Object(o["createVNode"])("p",null,"Gateway",-1),b={class:"flex-row"},p={class:"group"},j=Object(o["createVNode"])("p",null,"Currency",-1);Object(o["popScopeId"])();var v=n((function(e,t,v,O,f,m){var w=Object(o["resolveComponent"])("WalletOptions"),k=Object(o["resolveComponent"])("Button"),g=Object(o["resolveComponent"])("Input"),y=Object(o["resolveComponent"])("Select");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",r,[l,Object(o["createVNode"])("div",s,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(O.ArweaveStore.wallets,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(w,{class:"wallet-options",key:e.id,wallet:e},null,8,["wallet"])})),128)),O.ArweaveStore.wallets.length?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(k,{key:0,style:{"font-size":"1.5em",background:"var(--background3)"},onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"AddWallet"})}),icon:"+"}))]),d,Object(o["createVNode"])("div",u,[i,Object(o["createVNode"])("div",b,[Object(o["createVNode"])(g,{modelValue:O.gateway,"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.gateway=e}),placeholder:O.ArweaveStore.gatewayURL,icon:c("983b"),style:{flex:"1 1 0"}},null,8,["modelValue","placeholder","icon"]),Object(o["createVNode"])(k,{onClick:t[3]||(t[3]=function(e){return O.setGateway()})},{default:n((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(O.gateway?"Submit":"Reset"),1)]})),_:1})])]),Object(o["createVNode"])("div",p,[j,Object(o["createVNode"])(y,{modelValue:O.ArweaveStore.conversion.settings,"onUpdate:modelValue":t[4]||(t[4]=function(e){return O.ArweaveStore.conversion.settings=e}),options:O.options,icon:O.currencySymbol},null,8,["modelValue","options","icon"])])])])})),O=(c("caad"),c("2532"),c("ac1f"),c("5319"),c("188e")),f=c("55ae"),m=c("3d15"),w=Object(o["withScopeId"])("data-v-2a58305e"),k=w((function(e,t,c,n,a,r){var l=Object(o["resolveComponent"])("Icon");return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:["select input-box",{focus:n.focus}]},[c.icon?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,icon:c.icon,style:{left:"0"}},null,8,["icon"])):Object(o["createCommentVNode"])("",!0),Object(o["withDirectives"])(Object(o["createVNode"])("select",{class:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.model=e}),placeholder:c.placeholder,onFocus:t[2]||(t[2]=function(e){return n.focus=!0}),onBlur:t[3]||(t[3]=function(e){return n.focus=!1})},[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.options,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{key:e,value:e.value},Object(o["toDisplayString"])(e.text),9,["value"])})),128))],40,["placeholder"]),[[o["vModelSelect"],n.model]]),Object(o["createVNode"])(l,{icon:"⥥",style:{right:"0"}})],2)})),g=c("c4f8"),y={components:{Icon:g["a"]},props:["modelValue","options","icon","placeholder"],setup:function(e,t){var c=t.emit,n=Object(o["computed"])({get:function(){return e.modelValue},set:function(e){c("update:modelValue",e)}}),a=Object(o["ref"])(!1);return{model:n,focus:a}}};c("399b");y.render=k,y.__scopeId="data-v-2a58305e";var V=y,h=c("5f06"),N=c("319a"),S=c("bc3a"),B=c.n(S),I={components:{WalletOptions:O["a"],Input:f["a"],InputAr:m["a"],Select:V,Button:h["a"],Icon:g["a"]},setup:function(){var e=Object(o["ref"])(""),t=function(){e.value?Object(N["j"])(e.value):Object(N["j"])(),localStorage.setItem("gateway",e.value)},c=Object(o["reactive"])([]);B.a.get("https://raw.githubusercontent.com/redstone-finance/redstone-app/main/src/assets/data/tokens.json").then((function(e){var t=e.data,o=" Redstone Finance";for(var n in c.push({value:{currency:"USD",provider:"redstone"},text:"USD"+o}),t){var a;null!==(a=t[n].tags)&&void 0!==a&&a.includes("currencies")&&c.push({value:{currency:n,provider:"redstone"},text:n+o})}}));var n=Object(o["computed"])((function(){return new Intl.NumberFormat(navigator.languages,{style:"currency",currency:N["b"].conversion.settings.currency}).format(0).replace(/[\w\d\.\,\s]/g,"")||"$"})),a=Object(o["ref"])("");return{ArweaveStore:N["b"],gateway:e,setGateway:t,options:c,amount:a,currencySymbol:n}}};c("8901");I.render=v,I.__scopeId="data-v-43ed1cbc";t["default"]=I},"2d34":function(e,t,c){},"399b":function(e,t,c){"use strict";c("b082")},"5a34":function(e,t,c){var o=c("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},8901:function(e,t,c){"use strict";c("2d34")},ab13:function(e,t,c){var o=c("b622"),n=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[n]=!1,"/./"[e](t)}catch(o){}}return!1}},b082:function(e,t,c){},caad:function(e,t,c){"use strict";var o=c("23e7"),n=c("4d64").includes,a=c("44d2");o({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-28e18390.08c92796.js.map