if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>l(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-f250d166"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.1a0a4267.css",revision:null},{url:"assets/AddWallet.1afdb2c2.js",revision:null},{url:"assets/bundle.cd81762e.js",revision:null},{url:"assets/Connect.b310a612.js",revision:null},{url:"assets/Connect.b8d6befd.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.95a96b59.js",revision:null},{url:"assets/download.eeb50609.js",revision:null},{url:"assets/EditWallet.4f6f52c1.js",revision:null},{url:"assets/EditWallet.d495a3c8.css",revision:null},{url:"assets/Explore.0e73c773.css",revision:null},{url:"assets/Explore.6697282a.js",revision:null},{url:"assets/index.00852680.js",revision:null},{url:"assets/index.d5cba55b.css",revision:null},{url:"assets/launch.539728ed.js",revision:null},{url:"assets/ListContainer.40d36b38.js",revision:null},{url:"assets/ListContainer.600be381.css",revision:null},{url:"assets/OverlayPrompt.06051262.css",revision:null},{url:"assets/OverlayPrompt.37a9c11d.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.e8d7dd6f.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/ProfilePreview.ed267738.js",revision:null},{url:"assets/Settings.48e77603.js",revision:null},{url:"assets/Settings.c6132df3.css",revision:null},{url:"assets/Tx.6428aad9.css",revision:null},{url:"assets/Tx.a0129dac.js",revision:null},{url:"assets/vendor.5a757be3.js",revision:null},{url:"assets/WalletOptions.b275c07f.css",revision:null},{url:"assets/WalletOptions.f1aee5aa.js",revision:null},{url:"assets/Welcome.9791306e.css",revision:null},{url:"assets/Welcome.e704b779.js",revision:null},{url:"assets/y.39d662dc.js",revision:null},{url:"index.html",revision:"9734cb9edc7308f74a77e010f6241574"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
