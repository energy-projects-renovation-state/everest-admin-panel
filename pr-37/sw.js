if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>s(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Djqmutf9.css",revision:null},{url:"index.html",revision:"2a5c1e1120c4f9a400c12d5de2f0f987"},{url:"registerSW.js",revision:"63fa6303bbc92fe1f234bd2d3a2cb50e"},{url:"manifest.webmanifest",revision:"2f2202c968c9bc44ce3d47b143bcc16a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));