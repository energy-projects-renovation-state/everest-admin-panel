if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),c={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-egZ4b3YL.css",revision:null},{url:"index.html",revision:"da8c099888fde0d84b81123ccfecd411"},{url:"registerSW.js",revision:"8fa8e7f0ec491d9a15a78b2d4518e09a"},{url:"manifest.webmanifest",revision:"237d05c74907948ec26775fbbaad93d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));