if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),l={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-pJQns1R0.css",revision:null},{url:"index.html",revision:"388934000501b9e32ed05f8005734721"},{url:"registerSW.js",revision:"f3bc500f064fca2f0394f4634c80fbcf"},{url:"manifest.webmanifest",revision:"3ed063e4f51ef99778df58a03b8e1379"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
