if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),d={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BX33eRcg.css",revision:null},{url:"assets/index-DHZ2QMF1.js",revision:null},{url:"index.html",revision:"fd9ee2232de98cdbda4c103ac66ec4ec"},{url:"registerSW.js",revision:"4d85ca69c2bfc583f11384c2ac6dacf1"},{url:"manifest.webmanifest",revision:"7774c6e57182da391d2eb33d494c7174"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
