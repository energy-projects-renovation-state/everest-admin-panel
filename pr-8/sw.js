if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let o={};const l=e=>s(e,t),d={module:{uri:t},exports:o,require:l};n[t]=Promise.all(i.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DTG3DD6X.js",revision:null},{url:"assets/index-jqGI1nnn.css",revision:null},{url:"index.html",revision:"b28488cd16db11f6e7f09a0eb1656e46"},{url:"registerSW.js",revision:"8fa8e7f0ec491d9a15a78b2d4518e09a"},{url:"manifest.webmanifest",revision:"237d05c74907948ec26775fbbaad93d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
