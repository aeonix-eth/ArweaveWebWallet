import{W as p}from"./WalletOptions.8c7357f4.js";import{_ as i,y as _}from"./index.141ab8ab.js";import{j as u,f as n,F as f,h as m,z as W,B as w,o as s,p as b,g as h}from"./vendor.035b7bf8.js";const v={components:{WalletOptions:p},computed:{wallets(){const e=this.$route.query.wallet,l=Array.isArray(e)?e:[e],t=[];for(const o of l){const a=_(o);a&&t.push(a)}return t}}},y=e=>(W("data-v-a45b7b1a"),e=e(),w(),e),B={class:"edit-wallet"},j=y(()=>h("h2",null,"Edit New Wallets",-1));function x(e,l,t,o,a,c){const d=u("WalletOptions");return s(),n("div",B,[j,(s(!0),n(f,null,m(c.wallets,r=>(s(),b(d,{class:"wallet-options card",key:r.id,wallet:r},null,8,["wallet"]))),128))])}var k=i(v,[["render",x],["__scopeId","data-v-a45b7b1a"]]);export{k as default};
