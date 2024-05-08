(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/";let a="";const i=new URLSearchParams({key:"43757696-1a32682a4096c08080d446579",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});function p(o){return fetch(`${m}?${o}`).then(t=>{if(!t.ok)throw new Error("Не вдалося виконати запит до API Pixabay");return t.json()}).catch(t=>{throw console.error("Помилка при отриманні зображень:",t),t})}function h(o){o.preventDefault();const t=o.currentTarget;a=t.elements.query.value,i.set("q",a),l.classList.remove("is-hidden"),p(i).then(g).catch(L).finally(()=>{t.reset(),l.classList.add("is-hidden")})}const d=document.querySelector(".gallery"),y=document.querySelector(".form"),l=document.querySelector(".loader");y.addEventListener("submit",h);function g(o){d.innerHTML="",o.hits.forEach(t=>{const{webformatURL:n,tags:c,likes:e,views:r,comments:s,downloads:u}=t,f=`<div class="card">
            <div class="card-img-top">
                <img src="${n}" alt="${c}">
            </div>
            <div class="card-body">
                <p class="card-text">Likes: ${e}</p>
                <p class="card-text">Views: ${r}</p>
                <p class="card-text">Comments: ${s}</p>
                <p class="card-text">Downloads: ${u}</p>
            </div>
        </div>`;d.insertAdjacentHTML("beforeend",f)})}function L(o){alert(o)}
//# sourceMappingURL=commonHelpers.js.map
