import{_ as y,O as R,A as k,a as N,F as O,b as T,c as W,I as G,B as P,d as V,h as H,g as U,e as E}from"./index.311b3e2b.js";import{d as w,e as h,j as m,o as r,p as L,l as p,g as a,G as A,a as S,f as i,r as J,s as z,v as B,k as v,K as x,t as f,E as D,a6 as M,R as b,F as j,M as q,N as K}from"./vendor.fe3b959d.js";const Q={components:{Observer:R},props:["src"],setup(s,{emit:t}){const d=w(null),e=w(null),o=w(null),_=u=>{console.log(u),e.value=u.width/u.height},c=()=>{o.value=d.value.naturalWidth/d.value.naturalHeight,t("load")},l=h(()=>e.value&&o.value&&e.value<o.value),n=h(()=>e.value&&o.value&&e.value>=o.value);return{x:l,y:n,resize:_,load:c,imgRef:d}}},X={class:"frame-scroller"},Y=["src"];function Z(s,t,d,e,o,_){const c=m("Observer");return r(),L(c,{observe:"resize",onResize:e.resize,class:A(["img",{x:e.x,y:e.y}])},{default:p(()=>[a("div",X,[a("img",{ref:"imgRef",src:d.src,onLoad:t[0]||(t[0]=(...l)=>e.load&&e.load(...l))},null,40,Y)])]),_:1},8,["onResize","class"])}var $=y(Q,[["render",Z],["__scopeId","data-v-729c6e3c"]]);const ee={props:["tx"],setup(s){S(()=>s.tx,t=>{console.log(t),!!t},{immediate:!0})}},te={class:"smart-weave"};function ae(s,t,d,e,o,_){return r(),i("div",te," SmartWeave Contract ")}var se=y(ee,[["render",ae]]);const ne={components:{Img:$,SmartWeave:se},props:["tx"],setup(s){const t=J({handler:null,loaded:!1,payload:null}),d=h(()=>k.gatewayURL+s.tx.id);return S(()=>s.tx,async()=>{var e,o,_,c,l,n;if(!!s.tx&&(t.handler=null,t.loaded=!1,((e=s.tx.data)==null?void 0:e.size)!=="0"))if(((o=s.tx.data)==null?void 0:o.type)==="application/x.arweave-manifest+json"||((_=s.tx.data)==null?void 0:_.type)==="text/html"||((c=s.tx.data)==null?void 0:c.type)==="application/pdf")t.handler="iframe";else if(((n=(l=s.tx.data)==null?void 0:l.type)==null?void 0:n.split("/")[0])==="image")t.handler="img";else{t.handler="raw";try{if(t.payload=await N.transactions.getData(s.tx.id,{decode:!0,string:!0}),t.payload[0]==="{")try{t.payload=JSON.stringify(JSON.parse(t.payload),null,2),t.handler="json"}catch{}}catch{}}},{immediate:!0}),{gatewayLink:d,data:t}}},oe={key:"iframe",class:"selector iframe-container box"},re=["src"],de={key:"img",class:"selector img-container box"},ce={key:"smartweave",class:"selector"},le={key:"json",class:"selector data-container box"},ie={class:"raw"};function _e(s,t,d,e,o,_){const c=m("Img"),l=m("SmartWeave");return e.data.handler==="iframe"?z((r(),i("div",oe,[a("iframe",{class:"iframe",src:e.gatewayLink,onLoad:t[0]||(t[0]=n=>e.data.loaded=!0)},null,40,re)],512)),[[B,e.data.loaded]]):e.data.handler==="img"?z((r(),i("div",de,[v(c,{src:e.gatewayLink,onLoad:t[1]||(t[1]=n=>e.data.loaded=!0)},null,8,["src"])],512)),[[B,e.data.loaded]]):e.data.handler==="smartweave"?(r(),i("div",ce,[v(l,{tx:d.tx},null,8,["tx"])])):e.data.handler==="json"||e.data.handler==="raw"?(r(),i("div",le,[a("pre",ie,x(e.data.payload),1)])):f("",!0)}var ve=y(ne,[["render",_e],["__scopeId","data-v-ee87589c"]]);const me={components:{Selector:ve,FoldingLayout:O,Address:T,AddressIcon:W,InputGrid:G},props:{txId:String},setup(s){const t=h(()=>k.txs[s.txId]),d=h(()=>{var n;return((n=t.value.data)==null?void 0:n.size)!=="0"}),e=h(()=>!t.value.block),o=h(()=>{if(e.value)return"";const n=new Date(t.value.block.timestamp*1e3);return n.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})+" "+n.toLocaleTimeString()}),_=D(P,"currentHeight"),c=h(()=>{const n=[];for(const u of t.value.tags)n.push({items:[{name:"",value:u.name,attrs:{disabled:!0}},{name:"",value:u.value,attrs:{disabled:!0}}]});return n});S(()=>s.txId,async()=>{U(s.txId),E()},{immediate:!0});const l=D(V.breakpoints,"verticalContent");return{ArweaveStore:k,tx:t,currentBlock:_,isData:d,isPending:e,date:o,tagsSchema:c,verticalContent:l,humanFileSize:H}}},g=s=>(q("data-v-06300d12"),s=s(),K(),s),ue={class:"meta flex-column"},he={class:"card"},xe={class:"row flex-row"},fe={class:"item",style:{"font-size":"1.5em"}},ge={class:"row flex-row"},ye={class:"item"},ke={class:"row flex-row"},we={class:"item"},pe=g(()=>a("h3",null,"Properties",-1)),Se={class:"card flex-column"},be=g(()=>a("h3",null,"ID",-1)),Ie={class:"ellipsis"},Le={key:0},Ae=["href"],ze={key:1},Be=["href"],De={key:0},je=g(()=>a("h3",null,"Pending",-1)),Ce=[je],Fe={key:1},Re=g(()=>a("h3",null,"Block",-1)),Ne={class:"ellipsis"},Oe=g(()=>a("h3",null,"Data",-1)),Te=b(" Fee "),We=g(()=>a("h3",null,"Tags",-1)),Ge={style:{background:"var(--background2)","border-radius":"var(--border-radius)"}},Pe={key:1};function Ve(s,t,d,e,o,_){const c=m("Amount"),l=m("AddressIcon"),n=m("Address"),u=m("InputGrid"),C=m("Selector"),F=m("FoldingLayout");return e.tx?(r(),L(F,{key:0},M({left:p(()=>{var I;return[a("div",ue,[a("div",he,[a("div",xe,[a("div",fe,[v(c,{ar:e.tx.quantity.ar},null,8,["ar"])])]),a("div",ge,[a("div",ye,[v(l,{address:e.tx.owner.address},null,8,["address"]),v(n,{class:"secondary-text",address:e.tx.owner.address},null,8,["address"])])]),a("div",ke,[a("div",we,[v(l,{address:e.tx.recipient},null,8,["address"]),v(n,{class:"secondary-text",address:e.tx.recipient},null,8,["address"])])])]),pe,a("div",Se,[a("div",null,[be,a("div",Ie,x(e.tx.id),1),e.isData?(r(),i("div",Le,[a("a",{href:e.ArweaveStore.gatewayURL+e.tx.id,target:"_blank"},"Link",8,Ae)])):f("",!0),((I=e.tx.data)==null?void 0:I.type)==="application/x.arweave-manifest+json"?(r(),i("div",ze,[a("a",{href:e.ArweaveStore.gatewayURL+"tx/"+e.tx.id+"/data.json",target:"_blank"},"Manifest",8,Be)])):f("",!0)]),e.isPending?(r(),i("div",De,Ce)):(r(),i("div",Fe,[Re,a("div",Ne,x(e.tx.block.id),1),a("span",null,[b(x(e.tx.block.height)+" ",1),e.currentBlock?(r(),i(j,{key:0},[b("/ "+x(e.currentBlock),1)],64)):f("",!0)]),a("div",null,x(e.date),1)])),a("div",null,[Oe,a("div",null,"Data size "+x(e.humanFileSize(e.tx.data.size)),1),a("div",null,[Te,v(c,{ar:e.tx.fee.ar},null,8,["ar"])])])]),e.tagsSchema.length?(r(),i(j,{key:0},[We,a("div",Ge,[v(u,{schema:e.tagsSchema,disabled:""},null,8,["schema"])])],64)):f("",!0),e.verticalContent?(r(),i("br",Pe)):f("",!0)])]}),_:2},[e.isData?{name:"right",fn:p(()=>[v(C,{tx:e.tx,class:A({inline:!e.verticalContent})},null,8,["tx","class"])])}:void 0]),1024)):f("",!0)}var Ee=y(me,[["render",Ve],["__scopeId","data-v-06300d12"]]);export{Ee as default};
