import{i as f,S as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="43757696-1a32682a4096c08080d446579";function g(o){const r=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function y(o,r){if(o.total!==0){const s=o.hits.map(a=>{const{webformatURL:e,largeImageURL:t,tags:i,likes:c,views:l,comments:u,downloads:d}=a;return`<li class="card">
        <a class="gallery-link" href="${t}">
          <img src="${e}" alt="${i}">
        </a>
        <div class="card-body">
          <p class="card-text">Likes: ${c}</p>
          <p class="card-text">Views: ${l}</p>
          <p class="card-text">Comments: ${u}</p>
          <p class="card-text">Downloads: ${d}</p>
        </div>
      </li>`}).join("");r.innerHTML=s}else r.innerHTML="",f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#b52222",position:"topCenter",progressBar:!1})}const L=document.querySelector(".gallery"),b=document.querySelector(".form"),n=document.querySelector(".loader");b.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget,s=r.elements.query.value;s.trim()!==""&&(n.classList.remove("is-hidden"),g(s).then(a=>y(a,L)).catch(a=>alert(a)).finally(()=>{r.reset(),n.classList.add("is-hidden"),v()}))}function v(){new m(".gallery a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
