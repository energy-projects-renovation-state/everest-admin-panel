if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),u={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C9yDEg91.js",revision:null},{url:"assets/index-ctQ-VIkN.css",revision:null},{url:"index.html",revision:"637829f88ad82bcc278b4909039bf429"},{url:"registerSW.js",revision:"3fb0068e8a97642a47746bfcb5ed08d2"},{url:"manifest.webmanifest",revision:"efa42d924e7c9ebe040942a5ea7f1890"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
