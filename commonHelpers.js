import{i as f,S as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",p="43757696-1a32682a4096c08080d446579";function g(o){const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{throw r})}function y(o,s){if(o.total!==0){const r=o.hits.map(a=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:c,views:l,comments:u,downloads:d}=a;return`<li class="card">
        <a class="gallery-link" href="${t}">
          <img src="${e}" alt="${n}">
        </a>
        <div class="card-body">
          <p class="card-text">Likes: ${c}</p>
          <p class="card-text">Views: ${l}</p>
          <p class="card-text">Comments: ${u}</p>
          <p class="card-text">Downloads: ${d}</p>
        </div>
      </li>`}).join("");s.innerHTML=r}else s.innerHTML="",f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#b52222",position:"topCenter",progressBar:!1})}const L=document.querySelector(".gallery"),b=document.querySelector(".form"),i=document.querySelector(".loader");b.addEventListener("submit",w);function w(o){o.preventDefault();const s=o.currentTarget,r=s.elements.query.value;r.trim()!==""&&(i.classList.remove("is-hidden"),g(r).then(a=>y(a,L)).catch(v).finally(()=>{s.reset(),i.classList.add("is-hidden"),x()}))}function v(o){alert(o)}function x(){new m(".gallery a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
