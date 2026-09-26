import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center gap-4 mt-10">
    <h1 class="text-2xl font-bold text-blue-500">カウンター</h1>
    <p id="count" class="text-4xl font-bold">0</p>
    <div class="flex gap-3">
      <button id="btn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">増やす</button>
      <button id="minusBtn" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">減らす</button>
      <button id="resetBtn" class="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors">リセット</button>
    </div>
  </div>
`;

const countEl = document.querySelector('#count');
const btn = document.querySelector('#btn');
const minusBtn = document.querySelector('#minusBtn');
const resetBtn = document.querySelector('#resetBtn');
let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

minusBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});