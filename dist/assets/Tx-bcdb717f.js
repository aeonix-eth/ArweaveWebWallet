import{d as P,r as L,c as d,o as n,a as f,w as u,b as s,n as G,u as t,_ as te,e as U,A as T,f as ae,g as B,h as i,i as c,j as k,B as se,L as W,t as m,k as C,l as _,m as ne,v as oe,p as le,q,s as re,x as K,y as S,z as ie,C as de,T as N,V as F,D as ce,E as V,I as ue,F as _e,G as E,H as J,J as pe,K as M,M as D,N as ve,O as he,P as me,Q as ye,R as fe,S as Q,U as z,W as ge,X as xe,Y as be,Z as ke,$ as we}from"./index-803f6fda.js";const Ie={class:"frame-scroller"},Se=["src"],Te=P({__name:"Img",props:["src"],emits:["load","error"],setup(p,{emit:o}){const v=L(null),a=L(null),e=L(null),g=l=>a.value=l.contentRect.width/l.contentRect.height,w=()=>{e.value=v.value&&v.value.naturalWidth/v.value.naturalHeight,o("load")},b=d(()=>a.value&&e.value&&a.value<e.value),r=d(()=>a.value&&e.value&&a.value>=e.value);return(l,h)=>(n(),f(te,{onResize:g,class:G(["img",{x:t(b),y:t(r)}])},{default:u(()=>[s("div",Ie,[s("img",{ref_key:"imgRef",ref:v,src:p.src,onLoad:w,onError:h[0]||(h[0]=A=>o("error"))},null,40,Se)])]),_:1},8,["class"]))}});const Ce=U(Te,[["__scopeId","data-v-51318ac7"]]),Le={key:"json",class:"selector data-container min-height box"},Ae={key:1,class:"raw"},De={key:2,class:"selector"},Re=P({__name:"Selector",props:["tx"],setup(p){const o=p;re(r=>({"2c6aa702":g.value}));const v=d(()=>T.gatewayURL+o.tx.id),a=d(()=>"https://arcode.studio/#/"+o.tx.id+"?theme=dark-blue&hideToolbar=true"),e=ae({handler:void 0,payload:void 0,loaded:!1,error:!1,intent:!1}),g=L(void 0);B(()=>o.tx.id,()=>{e.handler=void 0,e.payload=void 0,e.loaded=!1,e.error=!1,e.intent=!1,g.value="pre-wrap",w()},{immediate:!0}),B(()=>e.intent,()=>e.intent&&w());async function w(){if(!o.tx||o.tx.data?.size==="0"||o.tx.data?.size==null)return;const r=K(o.tx.tags);if(r["Bundle-Version"])return e.loaded=!0,e.handler={is:S(ie),attrs:{query:de({bundledIn:o.tx.id}),component:S(N),componentProps:{options:{space:!0}},class:["column"]},containerAttrs:{class:["data-container","column-container","padding"]}};if(r["Content-Type"]==="application/x.arweave-manifest+json"||r["Content-Type"]==="text/html"||r["Content-Type"]==="application/pdf")return e.handler={is:"iframe",attrs:{src:v.value,class:["hover"]},containerAttrs:{class:["iframe-container","fixed-height"]}};if(r["Content-Type"]?.split("/")[0]==="video")return e.loaded=!0,e.handler={is:S(F),attrs:{tx:o.tx},containerAttrs:{class:["iframe-container"]}};if(r["Content-Type"]?.split("/")[0]==="audio")return e.loaded=!0,e.handler={is:S(F),attrs:{tx:o.tx},containerAttrs:{class:["iframe-container"]}};if(o.tx.data.size>104857600&&!e.intent)return e.handler="intent";if(r["Content-Type"]?.split("/")[0]==="image")return e.handler={is:S(Ce),attrs:{src:v.value},containerAttrs:{class:["img-container"]}};if(r["App-Name"]==="SmartWeaveContract"||r["App-Name"]==="SmartWeaveContractSource")return e.handler={is:"iframe",attrs:{src:a.value},containerAttrs:{class:["iframe-container","fixed-height"]}};e.handler="raw";try{r["Content-Type"]==="application/gzip"&&(e.payload??=await b(o.tx.id))}catch(l){console.error(l)}if(e.payload??=await ce(o.tx.id).catch(()=>{}),e.payload?.[0]==="{"||e.payload?.[0]==="[")try{e.payload=JSON.stringify(JSON.parse(e.payload),null,2),g.value="pre"}catch{}e.loaded=!0}async function b(r){let l;try{l??=(await V.api.get(r,{responseType:"blob"})).data}catch{}try{l??=new Blob([await V.transactions.getData(r,{decode:!0})])}catch{}const h=new DecompressionStream("gzip"),A=l.stream().pipeThrough(h);return(await new Response(A).blob()).text()}return(r,l)=>(n(),f(C,null,{default:u(()=>[e.handler==="intent"?(n(),i("div",{key:0,onClick:l[0]||(l[0]=h=>e.intent=!0),class:"selector data-container min-height box",style:{display:"flex","justify-content":"center","padding-top":"5em"}},[c(se,{icon:t(ue).download},{default:u(()=>[k("Load large file")]),_:1},8,["icon"])])):e.handler==="raw"?(n(),i("div",Le,[c(C,null,{default:u(()=>[!e.loaded&&!e.error?(n(),f(W,{key:0,class:"loader"})):(n(),i("pre",Ae,m(e.payload),1))]),_:1})])):e.handler?(n(),i("div",De,[c(C,null,{default:u(()=>[!e.loaded&&!e.error?(n(),f(W,{key:0,class:"loader"})):_("",!0)]),_:1}),c(C,null,{default:u(()=>[ne(s("div",q(e.handler.containerAttrs,{class:"box"}),[(n(),f(le(e.handler.is),q(e.handler.attrs,{onLoad:l[1]||(l[1]=h=>e.loaded=!0),onError:l[2]||(l[2]=h=>{e.error=!0,t(_e).error("Failed to load")})}),null,16))],16),[[oe,e.loaded]])]),_:1})])):_("",!0)]),_:1}))}});const $e=U(Re,[["__scopeId","data-v-ba4030a6"]]),x=p=>(be("data-v-15ef31ba"),p=p(),ke(),p),ze={key:0,style:{position:"relative",width:"100%","min-height":"var(--current-vh)",color:"var(--element-secondary)"}},Be={key:0},Ne={key:1},Ve={class:"meta flex-column"},Pe={class:"box",style:{padding:"0"}},Ue={key:1,class:"spacer"},je={key:2,class:"divider"},He=x(()=>s("h3",null,"Transaction",-1)),Oe={class:"flex-column"},We={key:0},qe=["href"],Fe={key:1},Ee=["href"],Je={class:"secondary-text"},Me={key:3},Qe=x(()=>s("h3",null,"Bundle",-1)),Ge={class:"flex-column"},Ke={class:"secondary-text"},Xe={key:4},Ye=x(()=>s("h3",null,"Pending",-1)),Ze={key:5},et=x(()=>s("h3",null,"Block",-1)),tt={key:0,class:"secondary-text"},at=x(()=>s("div",{class:"spacer"},null,-1)),st={class:"secondary-text"},nt=x(()=>s("h3",null,"Data",-1)),ot={key:0,style:{background:"var(--background)"}},lt=x(()=>s("h3",{style:{"margin-bottom":"0",padding:"var(--spacing) 0 0 var(--spacing)"}},"Tags",-1)),rt=P({__name:"Tx",props:{txId:null},setup(p){const o=p,v=E(J(o,"txId")),a=v.state,e=v.queryStatus,g=d(()=>a.value?.bundledIn?.id),b=E(g).state,r=d(()=>T.gatewayURL&&new URL(T.gatewayURL).hostname),l=d(()=>a.value?.bundledIn?.id||o.txId),h=pe({name:"single tx status",params:l,query:async y=>(await V.transactions.getStatus(y)).status,completed:y=>!l.value||a.value?.block||y&&y!==404,seconds:30}).state,A=d(()=>a.value?.owner&&M(a.value?.owner.address)),j=d(()=>a.value?.recipient&&M(a.value?.recipient)),R=d(()=>K(a.value?.tags||[])["Content-Type"]),H=d(()=>a.value?.data?.size!=="0"),X=d(()=>!a.value?.block),Y=d(()=>{if(!a.value?.block)return"";const y=new Date(a.value?.block.timestamp*1e3);return y.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})+" "+y.toLocaleTimeString()}),O=d(()=>D.value?.height&&a.value?.block?.height&&D.value?.height-a.value?.block?.height+1),Z=J(ve.breakpoints,"verticalContent"),$=L(0);return B(a,(y,I)=>{if(I){if(I?.bundledIn?.id===o.txId)return $.value=-1;$.value=1}}),(y,I)=>(n(),f(C,{vector:$.value,axis:"x"},{default:u(()=>[t(a)?(n(),f(me,{key:p.txId},ye({left:u(()=>[s("div",Ve,[s("div",Pe,[s("div",{class:"box-padding flex-column",style:fe([t(a).tags.length&&"padding-bottom: 0"])},[c(N,{tx:t(a),options:{half:!0}},null,8,["tx"]),t(a).recipient?(n(),f(Q,{key:0,wallet:t(j)},null,8,["wallet"])):_("",!0),t(a).recipient?(n(),i("div",Ue)):_("",!0),t(a).recipient?(n(),i("div",je)):_("",!0),c(Q,{wallet:t(A)},null,8,["wallet"]),s("div",null,[He,s("div",Oe,[t(H)?(n(),i("div",We,[s("a",{href:t(T).gatewayURL+t(a).id,target:"_blank"},m(t(r)),9,qe)])):_("",!0),t(R)==="application/x.arweave-manifest+json"?(n(),i("div",Fe,[s("a",{href:t(T).gatewayURL+"raw/"+t(a).id,target:"_blank"},"Manifest",8,Ee)])):_("",!0),s("div",Je,[c(z,{tx:t(a).id},{default:u(()=>[k("ID: ")]),_:1},8,["tx"])])])]),t(a).bundledIn?.id?(n(),i("div",Me,[Qe,s("div",Ge,[t(b)?(n(),f(N,{key:0,tx:t(b),options:{space:!0}},null,8,["tx"])):_("",!0),s("div",Ke,[c(z,{tx:t(a).bundledIn?.id},{default:u(()=>[k("ID: ")]),_:1},8,["tx"])])])])):_("",!0),t(X)?(n(),i("div",Xe,[Ye,s("div",null,"Status: "+m(t(h)?t(h):"..."),1)])):(n(),i("div",Ze,[et,s("div",null,[k(" Height: "+m(t(a).block.height)+" ",1),t(D)?.height?(n(),i("span",tt,"/ "+m(t(D).height)+" ("+m(t(O))+" confirmation"+m(t(O)>1?"s":"")+")",1)):_("",!0)]),s("div",null,m(t(Y)),1),at,s("div",st,[c(z,{block:t(a).block.id},{default:u(()=>[k("ID: ")]),_:1},8,["block"])])])),s("div",null,[nt,s("div",null,"Size: "+m(t(we)(t(a).data.size)),1),s("div",null,[k(" Fee: "),c(ge,{ar:t(a).fee.ar},null,8,["ar"])])])],4),t(a).tags.length?(n(),i("div",ot,[lt,c(xe,{modelValue:t(a).tags,"onUpdate:modelValue":I[0]||(I[0]=ee=>t(a).tags=ee),disabled:""},null,8,["modelValue"])])):_("",!0)])])]),_:2},[t(a)&&t(H)?{name:"right",fn:u(()=>[c($e,{tx:t(a),class:G({inline:!t(Z)})},null,8,["tx","class"])]),key:"0"}:void 0]),1024)):(n(),i("div",ze,[c(he,{options:{icon:"loader"},class:"box"},{default:u(()=>[t(e).error?(n(),i("h2",Be,m(t(e).error),1)):(n(),i("h2",Ne,"Loading"))]),_:1})]))]),_:1},8,["vector"]))}});const dt=U(rt,[["__scopeId","data-v-15ef31ba"]]);export{dt as default};
//# sourceMappingURL=Tx-bcdb717f.js.map
