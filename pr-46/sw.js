if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const l=e=>s(e,r),u={module:{uri:r},exports:o,require:l};i[r]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2ihdGtUu.css",revision:null},{url:"assets/index-CDSKQEoE.js",revision:null},{url:"index.html",revision:"331551439331358408eac9f5905442fc"},{url:"registerSW.js",revision:"1c193141e97a72e7c44d34e548965044"},{url:"manifest.webmanifest",revision:"0df0b16c2b3bba822b5cb9d41322a45a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
