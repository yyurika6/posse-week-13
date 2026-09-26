(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="flex flex-col items-center gap-4 mt-10">
    <h1 class="text-2xl font-bold text-blue-500">カウンター</h1>
    <p id="count" class="text-4xl font-bold">0</p>
    <div class="flex gap-3">
      <button id="btn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">増やす</button>
      <button id="minusBtn" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">減らす</button>
      <button id="resetBtn" class="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors">リセット</button>
    </div>
  </div>
`;var e=document.querySelector(`#count`),t=document.querySelector(`#btn`),n=document.querySelector(`#minusBtn`),r=document.querySelector(`#resetBtn`),i=0;t.addEventListener(`click`,()=>{i+=1,e.textContent=i}),n.addEventListener(`click`,()=>{--i,e.textContent=i}),r.addEventListener(`click`,()=>{i=0,e.textContent=i});