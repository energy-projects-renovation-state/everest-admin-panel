if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),f={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BGE-7pGI.css",revision:null},{url:"index.html",revision:"3cc7e178640d5c9b34cdb249eff45b19"},{url:"registerSW.js",revision:"f089b2da03c5e006c36b56df2be5fe88"},{url:"manifest.webmanifest",revision:"9dfd38282463fa1ad8f37f10d1721d8a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
