if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>l(s,r),u={module:{uri:r},exports:t,require:o};e[r]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.8fd974a4.js",revision:null},{url:"assets/AddWallet.c2a5d005.css",revision:null},{url:"assets/Connect.0d4d865e.js",revision:null},{url:"assets/Connect.0e54168e.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.33857364.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.3e41886b.js",revision:null},{url:"assets/index.85c0d2d4.js",revision:null},{url:"assets/index.9c4785ca.css",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.e090c127.js",revision:null},{url:"assets/Settings.7e667d1b.js",revision:null},{url:"assets/Settings.f236df29.css",revision:null},{url:"assets/Tx.129125be.js",revision:null},{url:"assets/Tx.1b1bd0db.css",revision:null},{url:"assets/vendor.53d023a9.js",revision:null},{url:"assets/WalletOptions.682b1252.css",revision:null},{url:"assets/WalletOptions.bcd610f7.js",revision:null},{url:"assets/Welcome.855100be.js",revision:null},{url:"assets/Welcome.b0da1a4e.css",revision:null},{url:"index.html",revision:"c5a7956aba4c87a3e7290603f5c6f612"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
