if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),o={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-f250d166"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.46968552.js",revision:null},{url:"assets/AddWallet.77239082.css",revision:null},{url:"assets/bundle.cd81762e.js",revision:null},{url:"assets/Connect.6cb8a049.js",revision:null},{url:"assets/Connect.91e0c71b.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.afe1dae8.js",revision:null},{url:"assets/download.21c4877b.js",revision:null},{url:"assets/EditWallet.0dd9746d.css",revision:null},{url:"assets/EditWallet.273378f5.js",revision:null},{url:"assets/Explore.0e73c773.css",revision:null},{url:"assets/Explore.1e46a631.js",revision:null},{url:"assets/index.209cee57.css",revision:null},{url:"assets/index.9e8384e6.js",revision:null},{url:"assets/launch.ad24a2b4.js",revision:null},{url:"assets/ListContainer.4b14b76f.js",revision:null},{url:"assets/ListContainer.600be381.css",revision:null},{url:"assets/OverlayPrompt.06051262.css",revision:null},{url:"assets/OverlayPrompt.a4cf96fa.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.8db10287.js",revision:null},{url:"assets/ProfilePreview.22a15b81.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/qr-scanner-worker.min.56d417f3.js",revision:null},{url:"assets/Settings.76282bfe.css",revision:null},{url:"assets/Settings.8b293bd2.js",revision:null},{url:"assets/Tx.881e3009.css",revision:null},{url:"assets/Tx.9a92fce2.js",revision:null},{url:"assets/vendor.2b37955d.js",revision:null},{url:"assets/WalletOptions.95212a77.js",revision:null},{url:"assets/WalletOptions.b275c07f.css",revision:null},{url:"assets/Welcome.007796cd.js",revision:null},{url:"assets/Welcome.9a129f00.css",revision:null},{url:"assets/y.2e906f79.js",revision:null},{url:"index.html",revision:"ed1b52edeb435c79bb3a7f9a0819b53b"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
