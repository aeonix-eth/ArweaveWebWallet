if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),o={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.6e32db23.js",revision:null},{url:"assets/AddWallet.77239082.css",revision:null},{url:"assets/bundle.d091f5e0.js",revision:null},{url:"assets/Connect.8aa31fa2.css",revision:null},{url:"assets/Connect.c50f0576.js",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.fc8386ea.js",revision:null},{url:"assets/download.4e743962.js",revision:null},{url:"assets/EditWallet.0dd9746d.css",revision:null},{url:"assets/EditWallet.4f230fff.js",revision:null},{url:"assets/Explore.26d6e7c9.css",revision:null},{url:"assets/Explore.69477851.js",revision:null},{url:"assets/index.3a600d79.js",revision:null},{url:"assets/index.c195282d.css",revision:null},{url:"assets/launch.ea10db10.js",revision:null},{url:"assets/ListContainer.30639f52.css",revision:null},{url:"assets/ListContainer.8692c32b.js",revision:null},{url:"assets/OverlayPrompt.10f04a43.js",revision:null},{url:"assets/OverlayPrompt.315942fb.css",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.ad570831.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/ProfilePreview.e8b32c5b.js",revision:null},{url:"assets/qr-scanner-worker.min.56d417f3.js",revision:null},{url:"assets/Settings.618c3278.js",revision:null},{url:"assets/Settings.70ea681d.css",revision:null},{url:"assets/Tx.9a49f19e.js",revision:null},{url:"assets/Tx.9bc032e8.css",revision:null},{url:"assets/vendor.ab2b0310.js",revision:null},{url:"assets/WalletOptions.b275c07f.css",revision:null},{url:"assets/WalletOptions.bdb16528.js",revision:null},{url:"assets/Welcome.8151eb27.js",revision:null},{url:"assets/Welcome.9a129f00.css",revision:null},{url:"assets/y.af0657cc.js",revision:null},{url:"index.html",revision:"696d1f957708ab477f21c18df5b8e825"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"aa748ca769aa42816b4c589f3f1bf97d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
