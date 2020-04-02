const cells = document.querySelectorAll('tr:not(:first-of-type) td:not(:first-of-type)');

const button = document.getElementById('clear');

const score = document.getElementById('score');
const total_pct = document.getElementById('total_pct');

let count_correct = 0;
const total = 144;

button.addEventListener('click', function(e) {
  count_correct = 0;
  score.innerHTML = 0;
  total_pct.innerHTML = 0;
  for (let i=0; i<cells.length; i++) {
    cells[i].style.backgroundColor = '#fff';
  }
});

for (let i=0; i<cells.length; i++) {
 
  cells[i].addEventListener('click', function(e) {

    if (!this.dataset.response) {
      this.style.backgroundColor = '#9AFF95';
      this.dataset.response = 'correct';
      count_correct +=1;
    } else if (this.dataset.response === 'correct') {
      this.dataset.response = 'incorrect';
      this.style.backgroundColor = 'tomato';
      count_correct -=1;
    } else if (this.dataset.response === 'incorrect') {
      delete this.dataset.response;
      this.style.backgroundColor = '#fff';
    }
    score.innerHTML = count_correct;
    total_pct.innerHTML = ((count_correct / total) * 100).toFixed(2);
  });
}