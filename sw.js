if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.892cd3cb.js",revision:"ca9ec0823d8a6060be33f50c1b33c34f"},{url:"assets/AddWallet.997ae7b9.css",revision:"fc79194c6fbd928ef3f05b1adfaffec0"},{url:"assets/Connect.0d11bf36.css",revision:"2090e93ef96f32d30ca1dbce58d4603a"},{url:"assets/Connect.ac5410f8.js",revision:"709aa88df82590ce76bd3ae723f6e44d"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/Connector.1c1e27f1.js",revision:"c916f65c79f33743aebf2c115bfb8456"},{url:"assets/EditWallet.a71f87a5.css",revision:"11ec783e7bc9297bb166ea309ee99533"},{url:"assets/EditWallet.c89c59c9.js",revision:"29849fb67e4b7c8a21b5188afec0bf31"},{url:"assets/index.915f49af.js",revision:"a57d7b7b7dd5661c4aa4c210285066f2"},{url:"assets/index.d983d904.css",revision:"46f7cc82a4359f272e2266a22a4d5aee"},{url:"assets/Profile.25b0bf5c.css",revision:"a53982ab33c03441468f800646471006"},{url:"assets/Profile.7a4aa624.js",revision:"9d941f2accbc51fff5895298c196d6c1"},{url:"assets/Settings.636ae118.css",revision:"67266d5677f55510a28411068b18616b"},{url:"assets/Settings.916c7451.js",revision:"3650f1ecd2ab946a1b961d46538da683"},{url:"assets/Tx.3d3ba689.js",revision:"d7907148122ce8923ec721a601ab37a3"},{url:"assets/Tx.b589d40b.css",revision:"f63afdd415dd69030c79e6c5d8b316a2"},{url:"assets/vendor.9d5857d8.js",revision:"d94e5e560cac76ec1a4e06cd814d9258"},{url:"assets/WalletOptions.7f1df898.js",revision:"c51ac53bd8ae9f5b1e32ecc0b314ada1"},{url:"assets/WalletOptions.edb07641.css",revision:"fa3105da956989c46f5cbbe5cc6ba8e9"},{url:"assets/Welcome.8aabfd63.css",revision:"7e78c15d85c065ca7b3d8058498d42f0"},{url:"assets/Welcome.ea5591b6.js",revision:"040b49ec41974f733e6e55b580ecd485"},{url:"index.html",revision:"fbfff40fb125791cd60a16b0da93d88a"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
