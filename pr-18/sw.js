if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>s(e,r),l={module:{uri:r},exports:o,require:c};i[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-I5wMRV6W.css",revision:null},{url:"index.html",revision:"e91d70e5c192e679f4dc80de1b19dace"},{url:"registerSW.js",revision:"b056554c6c1597ce05aa649bc369129e"},{url:"manifest.webmanifest",revision:"8ba9a02a18edcaff823762e6bf469daa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));