if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const l=e=>n(e,r),c={module:{uri:r},exports:o,require:l};i[r]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CcnjLlhW.css",revision:null},{url:"index.html",revision:"011f27fbd227e9e4e08ba63fa6aeb7d6"},{url:"registerSW.js",revision:"1caa1ca258507a26a390a0482fb7f2c2"},{url:"manifest.webmanifest",revision:"dad468797ca48af6b60654488ba65fa2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
