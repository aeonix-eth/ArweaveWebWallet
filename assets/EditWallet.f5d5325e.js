import{W as p}from"./WalletOptions.5deff26f.js";import{_ as i,z as _}from"./index.3d7ab313.js";import{j as u,f as n,F as f,h as m,z as W,B as w,o as s,p as h,g as v}from"./vendor.035b7bf8.js";const b={components:{WalletOptions:p},computed:{wallets(){const e=this.$route.query.wallet,l=Array.isArray(e)?e:[e],t=[];for(const o of l){const a=_(o);a&&t.push(a)}return t}}},y=e=>(W("data-v-a45b7b1a"),e=e(),w(),e),B={class:"edit-wallet"},j=y(()=>v("h2",null,"Edit New Wallets",-1));function x(e,l,t,o,a,c){const d=u("WalletOptions");return s(),n("div",B,[j,(s(!0),n(f,null,m(c.wallets,r=>(s(),h(d,{class:"wallet-options card",key:r.id,wallet:r},null,8,["wallet"]))),128))])}var k=i(b,[["render",x],["__scopeId","data-v-a45b7b1a"]]);export{k as default};
