if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>l(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.1be76605.js",revision:null},{url:"assets/AddWallet.c2a5d005.css",revision:null},{url:"assets/Connect.4ca43dda.css",revision:null},{url:"assets/Connect.5b234b79.js",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.b0ba9a91.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.6a659eeb.js",revision:null},{url:"assets/Explore.2ddbea52.css",revision:null},{url:"assets/Explore.aa3baff5.js",revision:null},{url:"assets/index.4b0b140d.css",revision:null},{url:"assets/index.ed9699a8.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.3ff30bd4.js",revision:null},{url:"assets/Select.vue_vue_type_style_index_0_scoped_true_lang.bf3f0ca8.css",revision:null},{url:"assets/Settings.ab08cb78.js",revision:null},{url:"assets/Settings.bbf43144.css",revision:null},{url:"assets/Tx.b0292f7b.js",revision:null},{url:"assets/Tx.cde8ee74.css",revision:null},{url:"assets/vendor.9ddd0f99.js",revision:null},{url:"assets/WalletOptions.1ceac5d9.js",revision:null},{url:"assets/WalletOptions.682b1252.css",revision:null},{url:"assets/Welcome.b0da1a4e.css",revision:null},{url:"assets/Welcome.c972ead5.js",revision:null},{url:"index.html",revision:"217aa8a77cd9422f581d2be7a4c9bb57"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
