(()=>{var P=function(e){return new Promise(t=>{var r=document.createElement("script");r.src=e,r.onload=()=>{t()},document.head.appendChild(r)})},T=function(e){return new Promise(t=>{var r=document.createElement("link");r.href=e,r.type="text/css",r.rel="stylesheet",r.onload=()=>{t()},document.head.appendChild(r)})};var I=function(e){for(var t=function(s){for(var i=s.childNodes,o=i.length,m=[],l,h,d,c,p=0;p<o;p++)l=i[p],l.nodeType===1&&(h=l.children[0],d=h.getAttribute("data-size").split("x"),c={src:h.getAttribute("href"),w:parseInt(d[0],10),h:parseInt(d[1],10)},l.children.length>1&&(c.title=l.children[1].innerHTML),h.children.length>0&&(c.msrc=h.children[0].getAttribute("src")),c.el=l,m.push(c));return m},r=function s(i,o){return i&&(o(i)?i:s(i.parentNode,o))},n=function(s){s=s||window.event,s.preventDefault?s.preventDefault():s.returnValue=!1;var i=s.target||s.srcElement,o=r(i,function(b){return b.tagName&&b.tagName.toUpperCase()==="FIGURE"});if(!!o){for(var m=o.parentNode,l=o.parentNode.childNodes,h=l.length,d=0,c,p=0;p<h;p++)if(l[p].nodeType===1){if(l[p]===o){c=d;break}d++}return c>=0&&y(c,m),!1}},a=function(){var s=window.location.hash.substring(1),i={};if(s.length<5)return i;for(var o=s.split("&"),m=0;m<o.length;m++)if(!!o[m]){var l=o[m].split("=");l.length<2||(i[l[0]]=l[1])}return i.gid&&(i.gid=parseInt(i.gid,10)),i},y=function(s,i,o,m){var l=document.querySelectorAll(".pswp")[0],h,d,c;if(c=t(i),d={galleryUID:i.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(b){var L=c[b].el.getElementsByTagName("img")[0],N=window.pageYOffset||document.documentElement.scrollTop,S=L.getBoundingClientRect();return{x:S.left,y:S.top+N,w:S.width}}},m)if(d.galleryPIDs){for(var p=0;p<c.length;p++)if(c[p].pid==s){d.index=p;break}}else d.index=parseInt(s,10)-1;else d.index=parseInt(s,10);isNaN(d.index)||(o&&(d.showAnimationDuration=0),h=new PhotoSwipe(l,PhotoSwipeUI_Default,c,d),h.init())},u=document.querySelectorAll(e),g=0,w=u.length;g<w;g++)u[g].setAttribute("data-pswp-uid",g+1),u[g].onclick=n;var v=a();v.pid&&v.gid&&y(v.pid,u[v.gid-1],!0,!0)};function x(e){let t=document.createElement("div");t.className="gallery";let r=e[0].parentNode,n=e[0];r.insertBefore(t,n);for(let a=0;a<e.length;++a){let y=e[a].querySelector("img").width,u=e[a].querySelector("img").height;e[a].style.flexGrow=`${y*100/u}`,e[a].style.flexBasis=`${y*240/u}px`,t.appendChild(e[a])}}function M(){let e=[P("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe.min.js"),P("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe-ui-default.min.js"),T("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe.min.css"),T("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/default-skin/default-skin.min.css")];return Promise.all(e)}function E(e){let t=document.querySelector(e).querySelectorAll("figure");if(t.length){let r=[t[0]];for(let n=1;n<t.length;++n)t[n].previousElementSibling===r[r.length-1]?r.push(t[n]):(x(r),r=[t[n]]);r.length>0&&x(r),M().then(()=>{document.querySelector(".pswp").style.removeProperty("display"),I(`${e} .gallery`)})}}var f={};if(localStorage.hasOwnProperty("StackColorsCache"))try{f=JSON.parse(localStorage.getItem("StackColorsCache"))}catch(e){f={}}async function k(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!f.hasOwnProperty(e)||f[e].hash!==t){let n=await Vibrant.from(r).getPalette();f[e]={hash:t,Vibrant:{hex:n.Vibrant.hex,rgb:n.Vibrant.rgb,bodyTextColor:n.Vibrant.bodyTextColor},DarkMuted:{hex:n.DarkMuted.hex,rgb:n.DarkMuted.rgb,bodyTextColor:n.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(f))}return f[e]}var A=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},V=(e,t=500)=>window.getComputedStyle(e).display==="none"?q(e,t):A(e,t);function C(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),V(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}var D={init:()=>{C(),document.querySelector(".article-content")&&E(".article-content"),document.querySelectorAll(".color-tag").forEach(async t=>{let r=t.getAttribute("data-image"),n=t.getAttribute("data-key"),a=t.getAttribute("data-hash"),y=await k(n,a,r);t.style.color=y.Vibrant.bodyTextColor,t.style.background=y.Vibrant.hex});let e=document.querySelector(".article-list--tile");e&&new IntersectionObserver(async(r,n)=>{r.forEach(a=>{if(!a.isIntersecting)return;n.unobserve(a.target),a.target.querySelectorAll("article.has-image").forEach(async u=>{let g=u.querySelector("img"),w=g.src,v=g.getAttribute("data-key"),s=g.getAttribute("data-hash"),i=u.querySelector(".article-details"),o=await k(v,s,w);i.style.background=`
                        linear-gradient(0deg, 
                            rgba(${o.DarkMuted.rgb[0]}, ${o.DarkMuted.rgb[1]}, ${o.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${o.Vibrant.rgb[0]}, ${o.Vibrant.rgb[1]}, ${o.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(e)}};window.addEventListener("load",()=>{setTimeout(function(){D.init()},0)});window.Stack=D;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
