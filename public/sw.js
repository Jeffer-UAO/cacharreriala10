if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),o={module:{uri:n},exports:i,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CcK-19LoZTDrDPVDdvfdy/_buildManifest.js",revision:"60c22c00865a312fa605619b78e7ca94"},{url:"/_next/static/CcK-19LoZTDrDPVDdvfdy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-3f54f3805f2a22d0.js",revision:"3f54f3805f2a22d0"},{url:"/_next/static/chunks/102-2e9cffa2ba2d226e.js",revision:"2e9cffa2ba2d226e"},{url:"/_next/static/chunks/1a48c3c1-744c20fee819d706.js",revision:"744c20fee819d706"},{url:"/_next/static/chunks/252f366e-a7960b41ec688962.js",revision:"a7960b41ec688962"},{url:"/_next/static/chunks/709-08637a681865b05f.js",revision:"08637a681865b05f"},{url:"/_next/static/chunks/95b64a6e-40c8a72d1257eef9.js",revision:"40c8a72d1257eef9"},{url:"/_next/static/chunks/c31f1870-fe7ba0483da782ec.js",revision:"fe7ba0483da782ec"},{url:"/_next/static/chunks/d0447323-2fdbaea8a3e71ee4.js",revision:"2fdbaea8a3e71ee4"},{url:"/_next/static/chunks/d7eeaac4-2a2f723d4f172fd2.js",revision:"2a2f723d4f172fd2"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-1cb174da82364de6.js",revision:"1cb174da82364de6"},{url:"/_next/static/chunks/pages/%5Bproduct%5D-63d1c376509cbec2.js",revision:"63d1c376509cbec2"},{url:"/_next/static/chunks/pages/%5Bproduct%5D/product-1a784e947ac23770.js",revision:"1a784e947ac23770"},{url:"/_next/static/chunks/pages/_app-7df11ff91c739e9e.js",revision:"7df11ff91c739e9e"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-8833ad82c054477b.js",revision:"8833ad82c054477b"},{url:"/_next/static/chunks/pages/about/about-796a6d0f09c6be10.js",revision:"796a6d0f09c6be10"},{url:"/_next/static/chunks/pages/cart-3c5084205cb8d192.js",revision:"3c5084205cb8d192"},{url:"/_next/static/chunks/pages/cart/cart-5967804044e0bb50.js",revision:"5967804044e0bb50"},{url:"/_next/static/chunks/pages/contact-6f1a8f8b364828a2.js",revision:"6f1a8f8b364828a2"},{url:"/_next/static/chunks/pages/contact/contact-087c0796410be437.js",revision:"087c0796410be437"},{url:"/_next/static/chunks/pages/featured-eae44638708417f1.js",revision:"eae44638708417f1"},{url:"/_next/static/chunks/pages/featured/featured-f5f64848e5da807f.js",revision:"f5f64848e5da807f"},{url:"/_next/static/chunks/pages/home-5a8ed576c533757c.js",revision:"5a8ed576c533757c"},{url:"/_next/static/chunks/pages/home/home-21d008d7e9558446.js",revision:"21d008d7e9558446"},{url:"/_next/static/chunks/pages/index-55c024e287db7f11.js",revision:"55c024e287db7f11"},{url:"/_next/static/chunks/pages/ofert-c536b2dab11f6ea5.js",revision:"c536b2dab11f6ea5"},{url:"/_next/static/chunks/pages/ofert/ofert-608ce67b35a0458f.js",revision:"608ce67b35a0458f"},{url:"/_next/static/chunks/pages/products/%5Bcategory%5D-32ad9fd79abece01.js",revision:"32ad9fd79abece01"},{url:"/_next/static/chunks/pages/products/%5Bcategory%5D/category-d1986f2a179c7b15.js",revision:"d1986f2a179c7b15"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-38cee4c0e358b1a3.js",revision:"38cee4c0e358b1a3"},{url:"/_next/static/css/746ef7e76039b416.css",revision:"746ef7e76039b416"},{url:"/_next/static/css/ebfc14021fe2a370.css",revision:"ebfc14021fe2a370"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"2c21410939ce624dfb1e1a42eaf97338"},{url:"/icon-512x512.png",revision:"41528a7b6c5e473db30d861d5e9ae3f5"},{url:"/image/Image_not_available.png",revision:"474a68367a7061443c7ba75929a4b3a2"},{url:"/image/logoc10.png",revision:"d21db6464a12e2f3f725b64e18c9b721"},{url:"/manifest.json",revision:"c303cb3634e96ed2410712ef5982f37b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
