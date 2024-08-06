import{S as m,i as n}from"./assets/vendor-96ed78f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="8362380-caaef8a54ecf306e81d153d22",p=o=>{const t=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},g=o=>o.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:f})=>`
            <li>
                <a href="${s}">
                    <img class="gallery__image" src="${t}" alt="${i}" />
                </a>
                <div class="gallery__info">
                    <div class="gallery__likes gallery__info__item">
                        <p class="fas fa-heart">Likes</p>
                        <span>${e}</span>
                    </div>
                    <div class="gallery__views gallery__info__item">
                        <p class="fas fa-eye">Views</p>
                        <span>${r}</span>
                    </div>
                    <div class="gallery__comments gallery__info__item">
                        <p class="fas fa-comment">Comments</p>
                        <span>${a}</span>
                    </div>
                    <div class="gallery__downloads gallery__info__item">
                        <p class="fas fa-download">Downloads</p>
                        <span>${f}</span>
                    </div>
                </div>
            </li>
        `).join(""),l=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",h);function h(o){o.preventDefault();const t=o.currentTarget.elements.user_query.value.trim();if(t===""){n.error({title:"Error",message:"Please enter something to search.",position:"topRight"}),l.reset();return}c.innerHTML="",d.classList.remove("is-hidden"),p(t).then(({hits:s})=>{if(s.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=g(s),y.refresh()}).catch(()=>{n.error({title:"Error",message:"Failed to load images.",position:"topRight"})}).finally(()=>{d.classList.add("is-hidden")}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
