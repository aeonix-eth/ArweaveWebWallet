var me=Object.defineProperty,fe=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var X=(e,a,n)=>a in e?me(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,Y=(e,a)=>{for(var n in a||(a={}))he.call(a,n)&&X(e,n,a[n]);if(G)for(var n of G(a))xe.call(a,n)&&X(e,n,a[n]);return e},K=(e,a)=>fe(e,pe(a));import{a3 as z,e as g,d as S,a6 as ge,ai as ye,g as E,o as t,c as l,x as m,y as V,G as p,a1 as O,a8 as A,q as we,u as c,P as N,X as H,Y as j,a as o,F as y,p as T,z as w,V as I,D as $e,E as ke,T as Q,a2 as M,t as be}from"./vendor.9ddd0f99.js";import{_ as $,j as Ie,k as J,d as Z,W as L,l as P,m as Ve,I as ee,h as Ce,n as Se,T as ze,o as te,p as ae,q as se,r as ne,s as Te,t as le,v as oe,w as ie}from"./index.ed9699a8.js";const Be={class:"margin fade-list-item",key:"margin1"},Ee={class:"margin fade-list-item",key:"margin2"},Me=z({props:{modelValue:null,options:null},emits:["update:modelValue"],setup(e,{emit:a}){const n=e,s=g({get(){return n.modelValue},set(v){a("update:modelValue",v)}}),d=S(null),i=g(()=>{var v;return((v=d.value)==null?void 0:v.children)?Array(...d.value.children).filter(r=>!r.classList.contains("margin")):[]}),u=g(()=>{var v;return{"--position":((v=n.options)==null?void 0:v.position)||"start"}}),k=v=>{var h,x;if(s.value==null)return;const r=Math.max(s.value||0,0);(x=i.value[r])==null||x.scrollIntoView({behavior:v?"instant":"smooth",block:"start",inline:((h=n.options)==null?void 0:h.position)||"start"})};return ge(async()=>{await ye(),await Ie(()=>i.value.length),setTimeout(()=>k(n.options.immediate)),E(s,()=>k())}),(v,r)=>(t(),l("div",{ref_key:"root",ref:d,class:"carousel flex-row no-scrollbar",style:we(c(u))},[m(A,{name:"fade-list"},{default:V(()=>{var h,x;return[((h=e.options)==null?void 0:h.overscroll)?(t(),l("div",Be)):p("",!0),O(v.$slots,"default",{},void 0,!0),((x=e.options)==null?void 0:x.overscroll)?(t(),l("div",Ee)):p("",!0)]}),_:3})],4))}});var de=$(Me,[["__scopeId","data-v-30fca4b5"]]);const ce=e=>(H("data-v-7b045f16"),e=e(),j(),e),Le={class:"wallet-selector"},We=ce(()=>o("div",{class:"exit-background"},null,-1)),Ne=ce(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1)),Pe=[We,Ne],Ae=z({props:{modelValue:String,default:String,exit:Boolean,active:Boolean},emits:["update:modelValue","selectWallet","exit"],setup(e,{emit:a}){const n=e,s=g({get(){return n.modelValue||n.default},set(i){a("update:modelValue",i)}}),d=g(()=>{var i;return(i=J(s.value))==null?void 0:i.key});return(i,u)=>(t(),l("div",Le,[c(s)?(t(),l("button",{key:0,type:"button",onClick:u[0]||(u[0]=k=>i.$emit("selectWallet")),class:N(["tab",{active:e.active}])},[m(Z,{address:c(d)},null,8,["address"])],2)):p("",!0),e.exit?(t(),l("button",{key:1,class:"exit",type:"button",onClick:u[1]||(u[1]=k=>i.$emit("exit"))},Pe)):p("",!0)]))}});var He=$(Ae,[["__scopeId","data-v-7b045f16"]]);const je={class:"wallet-tabs"},De=["onClick"],Fe=z({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const n=e,s=g({get(){return n.modelValue},set(d){a("update:modelValue",d)}});return(d,i)=>(t(),l("div",je,[m(de,{modelValue:void 0,"onUpdate:modelValue":i[0]||(i[0]=u=>undefined=u),options:{position:"start",overscroll:!1}},{default:V(()=>[(t(!0),l(y,null,T(c(L),u=>(t(),l("button",{key:u.id,type:"button",onClick:k=>s.value=u.id,class:N(["tab",{active:u.id==c(s)}])},[m(Z,{address:u.key},null,8,["address"])],10,De))),128))]),_:1})]))}});var ue=$(Fe,[["__scopeId","data-v-312899e0"]]);const Ue={class:"icon-background"},qe={props:["icon","img"],setup(e){return(a,n)=>(t(),l("div",Ue,[e.img?(t(),w(P,{key:0,class:"page-logo",icon:e.img},null,8,["icon"])):(t(),w(P,{key:1,class:"page-logo placeholder",icon:e.icon},null,8,["icon"]))]))}};var re=$(qe,[["__scopeId","data-v-7bef1ba0"]]);const ve=e=>(H("data-v-9a5c4e1a"),e=e(),j(),e),Re=ve(()=>o("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"},null,-1)),Ge=ve(()=>o("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},null,-1)),Xe=[Re,Ge],Ye={props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const n=e,s=g({get(){return n.modelValue},set(d){a("update:modelValue",d)}});return(d,i)=>(t(),l("button",{type:"button",class:"expand",onClick:i[0]||(i[0]=u=>s.value=!c(s))},[(t(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:N({expanded:c(s)})},Xe,2))]))}};var Ke=$(Ye,[["__scopeId","data-v-9a5c4e1a"]]);const Oe={class:"actions-list flex-row"},Qe=["onClick"],Je={props:["actions"],setup(e){return(a,n)=>(t(),l("div",Oe,[(t(!0),l(y,null,T(e.actions,s=>(t(),l("button",{key:s.name,onClick:s.run,type:"button",class:"action flex-row"},[m(P,{icon:s.icon},null,8,["icon"]),o("div",null,I(s.name),1)],8,Qe))),128))]))}};var D=$(Je,[["__scopeId","data-v-99d382fa"]]);const Ze={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFF"},et=o("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),tt=o("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"},null,-1),at=[et,tt];function st(e,a){return t(),l("svg",Ze,at)}var nt={render:st};const lt={class:"flex-row"},ot={class:"flex-row",style:{flex:"1 1 0"}},it={class:"content"},dt={class:"title"},ct={class:"secondary-text"},ut={props:["data"],setup(e){return(a,n)=>(t(),l("div",{class:N(["notification",{expanded:e.data.expanded}])},[o("div",lt,[o("div",ot,[m(re,{icon:e.data.icon||c(nt),img:e.data.img},null,8,["icon","img"]),o("div",it,[e.data.expanded?(t(),w(Ve,{key:0,class:"secondary-text",timestamp:e.data.timestamp},null,8,["timestamp"])):p("",!0),o("div",dt,I(e.data.title),1),o("div",ct,[O(a.$slots,"default",{},void 0,!0)]),e.data.expanded?(t(),w(D,{key:1,actions:e.data.actions},null,8,["actions"])):p("",!0)])]),m(Ke,{modelValue:e.data.expanded,"onUpdate:modelValue":n[0]||(n[0]=s=>e.data.expanded=s)},null,8,["modelValue"])])],2))}};var rt=$(ut,[["__scopeId","data-v-7ece1c50"]]);const vt={class:"tx-card-extension"},_t={key:0,class:"flex-row",style:{"justify-content":"space-between"}},mt={key:0},ft={key:1},pt={key:1,class:"tags secondary-text"},ht={props:["tx"],setup(e){return g(()=>ee.breakpoints.verticalLayout),(a,n)=>(t(),l("div",vt,[e.tx.tags.length||e.tx.data_size?(t(),l("div",_t,[e.tx.tags.length?(t(),l("div",mt,"Tags:")):p("",!0),e.tx.data_size?(t(),l("div",ft,"Data: "+I(c(Ce)(e.tx.data_size)),1)):p("",!0)])):p("",!0),e.tx.tags.length?(t(),l("ul",pt,[(t(!0),l(y,null,T(e.tx.tags,s=>(t(),l("li",null,I(s.name+" | "+s.value),1))),256))])):p("",!0)]))}};var xt=$(ht,[["__scopeId","data-v-5ae3361a"]]);const gt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},yt=o("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),wt=o("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1),$t=[yt,wt];function kt(e,a){return t(),l("svg",gt,$t)}var _e={render:kt};const bt={class:"permission-card"},It=M(" Share the public key "),Vt=M(" Share the arweave config "),Ct=M(" Sign data "),St=M(" Decrypt data "),zt=z({props:{messageEntry:null},setup(e){const a=e,n=S(null),s=g(()=>{var v,r,h,x;if(((v=n.value)==null?void 0:v.method)!=="signTransaction")return;const u=(h=(r=n.value)==null?void 0:r.params)==null?void 0:h[0],k=(x=u.tags)==null?void 0:x.map(({name:C,value:B})=>({name:window.atob(C),value:window.atob(B)}));return K(Y({},u),{tags:k})});E(()=>a.messageEntry,async()=>{n.value=await Se(a.messageEntry)},{immediate:!0});const d=[{name:"Accept",icon:_e,run:()=>a.messageEntry.status="accepted"},{name:"Reject",icon:te,run:()=>a.messageEntry.status="rejected"}],i=[{name:"Pending",icon:ae,run:()=>{}}];return(u,k)=>{var v,r,h,x,C;return $e((t(),l("div",bt,[((v=n.value)==null?void 0:v.method)==="signTransaction"?(t(),l(y,{key:0},[m(ze,{tx:c(s)},null,8,["tx"]),m(xt,{tx:c(s)},null,8,["tx"])],64)):((r=n.value)==null?void 0:r.method)==="getPublicKey"?(t(),l(y,{key:1},[It],64)):((h=n.value)==null?void 0:h.method)==="getArweaveConfig"?(t(),l(y,{key:2},[Vt],64)):((x=n.value)==null?void 0:x.method)==="sign"?(t(),l(y,{key:3},[Ct],64)):((C=n.value)==null?void 0:C.method)==="decrypt"?(t(),l(y,{key:4},[St],64)):p("",!0),m(Q,{name:"fade",mode:"out-in"},{default:V(()=>[e.messageEntry.status?(t(),w(D,{key:1,actions:i})):(t(),w(D,{key:0,actions:d}))]),_:1})],512)),[[ke,n.value]])}}});var Tt=$(zt,[["__scopeId","data-v-0e1a76fc"]]);const Bt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#fff"},Et=o("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Mt=o("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1),Lt=[Et,Mt];function Wt(e,a){return t(),l("svg",Bt,Lt)}var Nt={render:Wt};const Pt=e=>(H("data-v-2e87065b"),e=e(),j(),e),At={class:"connection-card flex-column no-scrollbar"},Ht={class:"flex-row"},jt=["disabled"],Dt={style:{"min-width":"0"}},Ft={class:"ellipsis"},Ut={class:"secondary-text ellipsis"},qt={class:"flex-column",style:{flex:"1 1 0"}},Rt={class:"container"},Gt={class:"container-scroll"},Xt={key:0},Yt={class:"box status fade-list-item",key:"0"},Kt={key:1},Ot=Pt(()=>o("div",{class:"box status fade-list-item",key:"0"},"WIP",-1)),Qt=z({props:{state:null},setup(e){var U;const a=e,n=(U=L.value[0])==null?void 0:U.id;g(()=>L.value.map(_=>_.key));const s=S(a.state.walletId||n);g(()=>J(n));const d=[{name:"Requests",color:"var(--orange)"},{name:"Permissions",color:"var(--green)"}],i=S(s.value?d[0].name:null);E(()=>a.state.walletId,_=>{!_||(r.value=!1,s.value=_,i.value=d[0].name)});const u=()=>a.state.walletId=!1,k=()=>{r.value=!1,a.state.walletId=s.value+""},v=()=>{!a.state.walletId||(r.value=!1,s.value=a.state.walletId)},r=S(!a.state.walletId),h=()=>{var _;if(!r.value){r.value=!0;return}s.value=a.state.walletId||((_=L.value[0])==null?void 0:_.id),r.value=!1},x=g(()=>{var f;const _=a.state.walletId?`Switch to ${s.value}`:`Connect to ${((f=a.state.appInfo)==null?void 0:f.name)||a.state.origin} from the account ${s.value}`;return{title:a.state.walletId?"Switch":"Connect",timestamp:Date.now(),actions:[{name:"Connect",icon:_e,run:k},{name:a.state.walletId?"Cancel":"Switch",icon:te,run:a.state.walletId?v:h}],expanded:!0,content:_}}),C=g(()=>{var _;return s.value!==a.state.walletId?[]:(_=a.state.messageQueue)==null?void 0:_.filter(f=>!f.fulfilled)});be(ee.breakpoints,"verticalLayout");const B=S(null),F=(_,f)=>_>f?B.value="slide-left":B.value="slide-right";return E(()=>d.findIndex(_=>_.name===i.value),F),E(()=>L.value.findIndex(_=>_.id===s.value),F),(_,f)=>{var q,R;return t(),l("div",At,[o("div",Ht,[o("button",{type:"button",class:"info flex-row",onClick:f[0]||(f[0]=(...b)=>c(se)&&c(se)(...b)),disabled:!c(ne)(e.state.origin,e.state.session)},[m(re,{img:(q=e.state.appInfo)==null?void 0:q.logo,icon:c(ae)},null,8,["img","icon"]),o("div",Dt,[o("div",Ft,I(((R=e.state.appInfo)==null?void 0:R.name)||"Connector"),1),o("div",Ut,I(e.state.origin),1)]),c(ne)(e.state.origin,e.state.session)?(t(),w(P,{key:0,icon:c(Nt)},null,8,["icon"])):p("",!0)],8,jt),m(He,{modelValue:e.state.walletId,"onUpdate:modelValue":f[1]||(f[1]=b=>e.state.walletId=b),default:c(n),exit:!0,active:!r.value,onSelectWallet:h,onExit:u},null,8,["modelValue","default","active"])]),o("div",qt,[m(Te,{tabs:d,modelValue:i.value,"onUpdate:modelValue":f[2]||(f[2]=b=>i.value=b),disabled:!s.value},null,8,["modelValue","disabled"]),o("div",Rt,[o("div",Gt,[m(Q,{name:B.value,mode:"out-in"},{default:V(()=>[(t(),l("div",{key:(s.value||"")+i.value,class:"content"},[i.value==="Requests"?(t(),l("div",Xt,[m(A,{name:"fade-list"},{default:V(()=>{var b;return[r.value?(t(),w(ue,{modelValue:s.value,"onUpdate:modelValue":f[3]||(f[3]=W=>s.value=W),class:"box fade-list-item",key:"0"},null,8,["modelValue"])):p("",!0),((b=c(C))==null?void 0:b.length)===0&&e.state.walletId&&e.state.walletId===s.value?(t(),l("div",Yt,"Connected")):p("",!0),s.value!==e.state.walletId?(t(),w(rt,{data:c(x),class:"box fade-list-item",key:"1"},{default:V(()=>[M(I(c(x).content),1)]),_:1},8,["data"])):p("",!0),(t(!0),l(y,null,T(c(C),W=>(t(),w(Tt,{key:W.uuid,messageEntry:W,style:{padding:"var(--spacing)"},class:"box flex-column fade-list-item"},null,8,["messageEntry"]))),128))]}),_:1})])):i.value==="Permissions"?(t(),l("div",Kt,[m(A,{name:"fade-list"},{default:V(()=>[r.value?(t(),w(ue,{modelValue:s.value,"onUpdate:modelValue":f[4]||(f[4]=b=>s.value=b),class:"box fade-list-item",key:"0"},null,8,["modelValue"])):p("",!0),Ot]),_:1})])):p("",!0)]))]),_:1},8,["name"])])])])])}}});var Jt=$(Qt,[["__scopeId","data-v-2e87065b"]]);const Zt={class:"connect flex-column"},ea={class:"bottom-info secondary-text",style:{opacity:"0.0","pointer-events":"none"}},ta=z({setup(e){const a=S(le.value.findIndex(n=>n.origin===oe.origin&&n.session===oe.session));return(n,s)=>(t(),l("div",Zt,[m(de,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=d=>a.value=d),options:{position:"start",overscroll:!0},class:"connectors"},{default:V(()=>[(t(!0),l(y,null,T(c(le),d=>(t(),l("div",{key:d.session,class:"connection-card-container fade-list-item"},[m(Jt,{state:d,class:"box"},null,8,["state"])]))),128))]),_:1},8,["modelValue"]),o("div",ea,[o("div",null,"All Channels "+I(Object.keys(c(ie)).length),1),(t(!0),l(y,null,T(c(ie),(d,i)=>(t(),l("div",{key:i},I(d),1))),128))])]))}});var la=$(ta,[["__scopeId","data-v-5775c0fe"]]);export{la as default};
//# sourceMappingURL=Connect.5b234b79.js.map
