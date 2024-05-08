(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="https://pixabay.com/ai/";let n="";const i=new URLSearchParams({key:"43757696-1a32682a4096c08080d446579",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});function p(s){return fetch(`${m}?${s}`).then(t=>{if(!t.ok)throw new Error("Не вдалося виконати запит до API Pixabay");return t.json()}).catch(t=>{throw console.error("Помилка при отриманні зображень:",t),t})}function h(s){s.preventDefault();const t=s.currentTarget;n=t.elements.query.value,n!==""?(i.set("q",n),d.classList.remove("is-hidden"),p(i).then(g).catch(L).finally(()=>{t.reset(),d.classList.add("is-hidden")})):alert("Plese type your request")}const l=document.querySelector(".gallery"),y=document.querySelector(".form"),d=document.querySelector(".loader");y.addEventListener("submit",h);function g(s){l.innerHTML="",s.hits.forEach(t=>{const{webformatURL:a,tags:c,likes:e,views:r,comments:o,downloads:u}=t,f=`<div class="card">
            <div class="card-img-top">
                <img src="${a}" alt="${c}">
            </div>
            <div class="card-body">
                <p class="card-text">Likes: ${e}</p>
                <p class="card-text">Views: ${r}</p>
                <p class="card-text">Comments: ${o}</p>
                <p class="card-text">Downloads: ${u}</p>
            </div>
        </div>`;l.insertAdjacentHTML("beforeend",f)})}function L(s){alert(s)}
//# sourceMappingURL=commonHelpers.js.map
