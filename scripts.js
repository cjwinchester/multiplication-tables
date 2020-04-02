const cells = document.querySelectorAll('tr:not(:first-of-type) td:not(:first-of-type)');

const score = document.getElementById('score');
const total_pct = document.getElementById('total_pct');

let count_correct = 0;
const total = 144;

for (let i=0; i<cells.length; i++) {  
 
  cells[i].addEventListener('click', function(e) {
    if (this.dataset.checked === 'x') {
      this.dataset.checked = '';
      this.style.background = '#fff';
      count_correct -=1;
    } else {
      this.dataset.checked = 'x';
      this.style.background = '#9AFF95';
      count_correct +=1;
    }
    score.innerHTML = count_correct;
    total_pct.innerHTML = ((count_correct / total) * 100).toFixed(2);
  });
}