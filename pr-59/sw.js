if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BquuHG-u.js",revision:null},{url:"assets/index-CHsCLJC5.css",revision:null},{url:"index.html",revision:"8f1dfd54b3953689e9b3d14e6578686d"},{url:"registerSW.js",revision:"7884d86fdebccb574cc993327e41e108"},{url:"manifest.webmanifest",revision:"77d773954d207e24499a37562879f77a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
