if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>l(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.c2a5d005.css",revision:null},{url:"assets/AddWallet.c7857fcb.js",revision:null},{url:"assets/Connect.2fce7a32.js",revision:null},{url:"assets/Connect.e86b06b3.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.18bcbf23.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.56b99ac2.js",revision:null},{url:"assets/Explore.2ddbea52.css",revision:null},{url:"assets/Explore.543e62af.js",revision:null},{url:"assets/index.72ba2f49.js",revision:null},{url:"assets/index.ca8b9ab8.css",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.bc01ff36.js",revision:null},{url:"assets/Select.vue_vue_type_style_index_0_scoped_true_lang.2ccd0db8.css",revision:null},{url:"assets/Settings.ba5e6bad.js",revision:null},{url:"assets/Settings.bbf43144.css",revision:null},{url:"assets/Tx.3c36ba6f.css",revision:null},{url:"assets/Tx.8b3c227e.js",revision:null},{url:"assets/vendor.ff995856.js",revision:null},{url:"assets/WalletOptions.014a6eec.js",revision:null},{url:"assets/WalletOptions.682b1252.css",revision:null},{url:"assets/Welcome.32a58146.js",revision:null},{url:"assets/Welcome.b0da1a4e.css",revision:null},{url:"index.html",revision:"4b476bea898d572415e40029e0af8d50"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
