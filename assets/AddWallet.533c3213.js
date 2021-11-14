import{_ as L,q as B,r as A,m as P,f as S,L as F,t as T,u as V,v as W,w as j,x as q,y as E,z as N,C as D}from"./index.015bb176.js";import{J as U,d as m,r as z,e as G,j as g,f,g as o,k as b,p as d,l as c,T as M,K as O,L as J,o as n,P as p,Q as v,t as I,F as K,h as H}from"./vendor.63a715e4.js";const Q={components:{InputAddress:B,InputData:A,Button:P,Icon:S},setup(){const l=U(),a=m(""),w=m(""),e=s=>s.match(/^[a-z0-9_-]{0,43}$/i),t=z({}),k=G(()=>a.value.trim().split(/\s+/g).length>=12),_=m(!1),i=m(!1),u=m(null),r=async()=>{_.value=!0,a.value=await V();const s=W(a.value);setTimeout(async()=>u.value=await s,1e4)},C=()=>{l.push({name:"EditWallet",query:{wallet:u.value.id}})},h=async()=>{i.value=!0;const s=W(a.value);t.enabled=!0,t.icon="loader",t.message="Importing",t.actions=[],l.push({name:"EditWallet",query:{wallet:(await s).id}})};return{passphraseInput:a,targetInput:w,maskAddress:e,popup:t,isPassphrase:k,create:r,importLedger:async()=>{const s=await E(D);l.push({name:"EditWallet",query:{wallet:s.id}})},supportsWebUSB:()=>!!window.navigator.usb,importAddressOnlyAction:{icon:N,run:()=>{}},isCreatingWallet:_,isGeneratingWallet:i,createdWallet:u,goToCreatedWallet:C,importPassphrase:h,confirmPassphrase:async()=>{if(await j(a.value))return h();t.enabled=!0,t.icon="",t.message="This passphrase is not valid, do you want to import it anyway?",t.actions=[{name:"Back",action:()=>t.enabled=!1},{name:"Import Passphrase",action:()=>h()}]},importFile:async s=>{if(!s)return;const x=await q(JSON.parse(await s[0].text()));l.push({name:"EditWallet",query:{wallet:x.id}})},LogoArweave:F,LogoLedger:T}}},y=l=>(O("data-v-4aa28824"),l=l(),J(),l),R={class:"add-wallet flex-column"},X={class:"card"},Y=y(()=>o("h2",{style:{display:"flex","justify-content":"space-between"}},[o("span",null,"Passphrase"),o("span",null,"Key file")],-1)),Z={class:"flex-column"},$=y(()=>o("div",null,null,-1)),ee=p("Create new wallet"),ae=p("Import passphrase"),te={style:{flex:"1 1 auto",display:"flex","flex-direction":"column","align-items":"center","justify-content":"space-evenly","margin-bottom":"var(--spacing)"}},se={class:"actions-container flex-row"},oe={class:"card"},ne=y(()=>o("h2",null,"Hardware",-1)),le=p("Ledger"),ie=p("Ledger not supported for this browser");function re(l,a,w,e,t,k){const _=g("InputData"),i=g("Button"),u=g("Icon");return n(),f("div",R,[o("div",X,[Y,o("div",Z,[b(_,{modelValue:e.passphraseInput,"onUpdate:modelValue":a[0]||(a[0]=r=>e.passphraseInput=r),onFiles:e.importFile,disabled:e.isCreatingWallet,placeholder:"Import passphrase or key file"},null,8,["modelValue","onFiles","disabled"]),$,!e.isCreatingWallet&&!e.passphraseInput.length?(n(),d(i,{key:0,onClick:a[1]||(a[1]=r=>e.create()),disabled:e.passphraseInput.length&&!e.isPassphrase,icon:e.LogoArweave},{default:c(()=>[ee]),_:1},8,["disabled","icon"])):e.isCreatingWallet?(n(),d(i,{key:1,disabled:!e.createdWallet,onClick:e.goToCreatedWallet,icon:e.createdWallet?"":"loader"},{default:c(()=>[p(v(e.createdWallet?"Passphrase saved? Click here to proceed":"Generating, write down the passphrase"),1)]),_:1},8,["disabled","onClick","icon"])):(n(),d(i,{key:2,disabled:!e.isPassphrase||e.isGeneratingWallet,onClick:e.confirmPassphrase},{default:c(()=>[ae]),_:1},8,["disabled","onClick"]))]),b(M,{name:"fade-fast",mode:"in-out"},{default:c(()=>[e.popup.enabled?(n(),f("div",{key:e.popup.message,class:"overlay flex-column"},[o("div",te,[e.popup.icon?(n(),d(u,{key:0,icon:e.popup.icon,style:{"font-size":"2em"}},null,8,["icon"])):I("",!0),p(" "+v(e.popup.message),1)]),o("div",se,[(n(!0),f(K,null,H(e.popup.actions,r=>(n(),d(i,{key:r.name,onClick:r.action},{default:c(()=>[p(v(r.name),1)]),_:2},1032,["onClick"]))),128))])])):I("",!0)]),_:1})]),o("div",oe,[ne,e.supportsWebUSB()?(n(),d(i,{key:0,onClick:a[2]||(a[2]=r=>e.importLedger()),icon:e.LogoLedger},{default:c(()=>[le]),_:1},8,["icon"])):(n(),d(i,{key:1,disabled:"",icon:e.LogoLedger},{default:c(()=>[ie]),_:1},8,["icon"]))])])}var ge=L(Q,[["render",re],["__scopeId","data-v-4aa28824"]]);export{ge as default};
