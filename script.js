const boxes = document.querySelectorAll('.box');
const checkBtn = document.getElementById('check-btn');
const cabbage = document.getElementById('cabbage');
const resultSpan = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const inputs = Array.from(boxes).map(box => box.value);
  const isValid = inputs.join('') === 'ОВОЧ';
  if (isValid) {
    resultSpan.textContent = '👍';
  } else {
    resultSpan.textContent = '😭';
  }
});