(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-145b9b70"],{"30de":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n=Object(c["withScopeId"])("data-v-5449cd46");Object(c["pushScopeId"])("data-v-5449cd46");var r={class:"meta"},o=Object(c["createVNode"])("h3",null,"ID",-1),l={key:0},d=Object(c["createVNode"])("br",null,null,-1),i=Object(c["createVNode"])("h3",null,"Block",-1),u=Object(c["createVNode"])("br",null,null,-1),b=Object(c["createVNode"])("h3",null,"Data",-1),s=Object(c["createVNode"])("br",null,null,-1),v=Object(c["createVNode"])("h3",null,"Transaction",-1),p=Object(c["createVNode"])("br",null,null,-1),j=Object(c["createVNode"])("h3",null,"Tags",-1),O={style:{background:"var(--background2)"}},m=Object(c["createVNode"])("br",null,null,-1),f={key:"iframe",class:"frame-container"},g={key:"img",class:"frame-container"},h={key:"json",class:"card-container"},k={class:"raw card"},y={key:"raw",class:"card-container"},x={class:"raw card"};Object(c["popScopeId"])();var N=n((function(e,t,a,N,w,V){var S=Object(c["resolveComponent"])("InputGrid"),D=Object(c["resolveComponent"])("FoldingLayout");return N.tx?(Object(c["openBlock"])(),Object(c["createBlock"])(D,{key:0},Object(c["createSlots"])({left:n((function(){return[Object(c["createVNode"])("div",r,[o,Object(c["createVNode"])("div",null,Object(c["toDisplayString"])(N.tx.id),1),N.tx.data.size>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",l,"Link")):Object(c["createCommentVNode"])("",!0),d,i,Object(c["createVNode"])("div",null,Object(c["toDisplayString"])(N.isPending?"Pending":N.tx.block.id),1),Object(c["createVNode"])("div",null,Object(c["toDisplayString"])(N.date),1),u,b,Object(c["createVNode"])("div",null,"Data size "+Object(c["toDisplayString"])(N.humanFileSize(N.tx.data.size)),1),Object(c["createVNode"])("div",null,"Fee "+Object(c["toDisplayString"])(N.tx.fee.ar)+" AR",1),s,v,Object(c["createVNode"])("div",null,"owner.address "+Object(c["toDisplayString"])(N.tx.owner.address),1),Object(c["createVNode"])("div",null,"quantity.ar "+Object(c["toDisplayString"])(N.tx.quantity.ar),1),Object(c["createVNode"])("div",null,"recipient "+Object(c["toDisplayString"])(N.tx.recipient),1),p,j,Object(c["createVNode"])("div",O,[Object(c["createVNode"])(S,{schema:N.buildTagsSchema(N.tx.tags)},null,8,["schema"])]),m])]})),_:2},[N.data.handler?{name:"right",fn:n((function(){return[Object(c["createVNode"])(c["Transition"],{name:N.verticalContent?"slide-up":"slide-left",appear:""},{default:n((function(){return["iframe"===N.data.handler?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])("div",f,[Object(c["createVNode"])("iframe",{class:"iframe",src:N.ArweaveStore.gatewayURL+N.tx.id,onLoad:t[1]||(t[1]=function(e){return N.data.loaded=!0})},null,40,["src"])],512)),[[c["vShow"],N.data.loaded]]):"img"===N.data.handler?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])("div",g,[Object(c["createVNode"])("img",{class:"img",src:N.ArweaveStore.gatewayURL+N.tx.id,onLoad:t[2]||(t[2]=function(e){return N.data.loaded=!0})},null,40,["src"])],512)),[[c["vShow"],N.data.loaded]]):"json"===N.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[Object(c["createVNode"])("pre",k,Object(c["toDisplayString"])(N.data.payload),1)])):"raw"===N.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("div",y,[Object(c["createVNode"])("div",x,Object(c["toDisplayString"])(N.data.payload),1)])):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["name"])]}))}:void 0]),1024)):Object(c["createCommentVNode"])("",!0)})),w=a("b85c"),V=a("1da1"),S=(a("96cf"),a("ac1f"),a("1276"),a("b0c0"),a("b680"),a("c4bb")),D=a("9d5f"),B=a("319a"),I=a("1205"),L={components:{FoldingLayout:S["a"],InputGrid:D["a"]},props:{txId:String},setup:function(e){var t=Object(c["ref"])(null),n=Object(c["reactive"])({payload:null,handler:null,loaded:!1}),r=Object(c["computed"])((function(){var e;return"0"!==(null===(e=t.value.data)||void 0===e?void 0:e.size)})),o=Object(c["computed"])((function(){return!t.value.block})),l=Object(c["computed"])((function(){if(o.value)return"";var e=new Date(1e3*t.value.block.timestamp);return e.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})+" "+e.toLocaleTimeString()})),d=Object(c["computed"])((function(){return I["a"].breakpoints.verticalContent}));Object(c["watch"])((function(){return e.txId}),Object(V["a"])(regeneratorRuntime.mark((function a(){var c,o,l,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(B["e"])(e.txId);case 2:if(t.value=a.sent,t.value){a.next=5;break}return a.abrupt("return");case 5:if(n.handler=null,n.loaded=!1,r.value){a.next=11;break}return a.abrupt("return");case 11:if("text/html"!==(null===(c=t.value.data)||void 0===c?void 0:c.type)&&"application/pdf"!==(null===(o=t.value.data)||void 0===o?void 0:o.type)){a.next=15;break}n.handler="iframe",a.next=38;break;case 15:if("image"!==(null===(l=t.value.data)||void 0===l||null===(d=l.type)||void 0===d?void 0:d.split("/")[0])){a.next=19;break}n.handler="img",a.next=38;break;case 19:return console.log("getting data"),a.prev=20,a.next=23,B["a"].transactions.getData(e.txId,{decode:!0,string:!0});case 23:if(n.payload=a.sent,a.prev=24,n.payload=JSON.stringify(JSON.parse(n.payload),null,2),"{"===n.payload[0]){a.next=28;break}throw"";case 28:n.handler="json",a.next=34;break;case 31:a.prev=31,a.t0=a["catch"](24),n.handler="raw";case 34:a.next=38;break;case 36:a.prev=36,a.t1=a["catch"](20);case 38:case"end":return a.stop()}}),a,null,[[20,36],[24,31]])}))),{immediate:!0});var i=function(){console.log("loaded"),n.loaded=!0},u=function(e){var t,c=[],n=Object(w["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;c.push({items:[{name:"Tag",value:r.name,attrs:{disabled:!0},icon:a("765c")},{name:"Value",value:r.value,attrs:{disabled:!0}}]})}}catch(o){n.e(o)}finally{n.f()}return c},b=function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]};return{ArweaveStore:B["b"],tx:t,data:n,loaded:i,isData:r,isPending:o,date:l,verticalContent:d,buildTagsSchema:u,humanFileSize:b}}};a("bb2c");L.render=N,L.__scopeId="data-v-5449cd46";t["default"]=L},"6fec":function(e,t,a){},bb2c:function(e,t,a){"use strict";a("6fec")}}]);
//# sourceMappingURL=chunk-145b9b70.66b6e0d7.js.map