if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const f=e=>c(e,r),n={module:{uri:r},exports:d,require:f};s[r]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(i(...e),d)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.c2a5d005.css",revision:"dded523f085df36b91666b4d69680ab9"},{url:"assets/AddWallet.ef009d2e.js",revision:"029e1766184340e812314a68fd563ea6"},{url:"assets/Connect.c2cfc70c.js",revision:"af91596b458db429787e046263b789e8"},{url:"assets/Connect.ea795ab9.css",revision:"3be6f02b9ce2e3585f7c66d55c540983"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/Connector.ec1dcc8c.js",revision:"888037a870b2b016cc0c59907fba5c61"},{url:"assets/EditWallet.246706cc.css",revision:"76ec6e426ea440ec6c54a1299594928b"},{url:"assets/EditWallet.9405f663.js",revision:"32bf64df2524818de7f3a92f735aa90f"},{url:"assets/index.31818782.css",revision:"c35226c21a005f97bb9a84a0b0e74330"},{url:"assets/index.b3530c1e.js",revision:"405969aa93f45c258dc625095963dd51"},{url:"assets/Profile.0eb83949.js",revision:"694b143c1619f33eb96d52122e6f6af4"},{url:"assets/Profile.25b0bf5c.css",revision:"a53982ab33c03441468f800646471006"},{url:"assets/Settings.383f4e5d.js",revision:"30745c416e53e15a712bcc176c52eef6"},{url:"assets/Settings.f236df29.css",revision:"b79af4e0f620c08fb59c009693c5103a"},{url:"assets/Tx.ae5c38d9.js",revision:"7ab2d1512b510c43347f0f962100947e"},{url:"assets/Tx.b589d40b.css",revision:"f63afdd415dd69030c79e6c5d8b316a2"},{url:"assets/vendor.4798f9ea.js",revision:"278760d52ecdc787920b3e11ec75c712"},{url:"assets/WalletOptions.682b1252.css",revision:"0da43bdc858b3a405e601f0432ec45a2"},{url:"assets/WalletOptions.e46b44a6.js",revision:"3a05d1742f9fd28802efbd1f04d724f1"},{url:"assets/Welcome.0409668a.js",revision:"8756efa95a7f90d98c6895db861c2bc8"},{url:"assets/Welcome.b0da1a4e.css",revision:"5c444f092429ccd47b56c40d41c863cd"},{url:"index.html",revision:"f1d130cb7359d413a4f9e9d3eceb4977"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
