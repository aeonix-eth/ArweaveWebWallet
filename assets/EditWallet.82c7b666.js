import{W as p}from"./WalletOptions.e95c5b9a.js";import{_ as i,E as _}from"./index.015bb176.js";import{j as u,f as n,F as m,h as f,K as W,L as w,o as s,p as h,g as v}from"./vendor.63a715e4.js";const b={components:{WalletOptions:p},computed:{wallets(){const e=this.$route.query.wallet,l=Array.isArray(e)?e:[e],t=[];for(const o of l){const a=_(o);a&&t.push(a)}return t}}},y=e=>(W("data-v-a45b7b1a"),e=e(),w(),e),j={class:"edit-wallet"},x=y(()=>v("h2",null,"Edit New Wallets",-1));function B(e,l,t,o,a,c){const d=u("WalletOptions");return s(),n("div",j,[x,(s(!0),n(m,null,f(c.wallets,r=>(s(),h(d,{class:"wallet-options card",key:r.id,wallet:r},null,8,["wallet"]))),128))])}var g=i(b,[["render",B],["__scopeId","data-v-a45b7b1a"]]);export{g as default};
