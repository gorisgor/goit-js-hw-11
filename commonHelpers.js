(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const i=document.querySelector(".request"),a=document.querySelector(".submit-btn"),l="43757696-1a32682a4096c08080d446579",f="https://pixabay.com/api/",d=new URLSearchParams({key:l,q:"dogs",image_type:"photo",orientation:"horizontal",safesearch:!0}),m=m(`${f}${d}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()});i.addEventListener("input",p);let s=0;function p(r){r.preventDefault(),s=i.value}a.addEventListener("click",h);function h(r){r.preventDefault(),searchParams.q=s,console.log(s),fetch()}
//# sourceMappingURL=commonHelpers.js.map
