import './styles.css';
import postScore from './modules/postScore.js';
import getScore from './modules/getScore.js';

const addBtn = document.querySelector('#add-btn');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refresh = document.querySelector('#refresh_btn');

addBtn.addEventListener('click', () => {
  if (name && score) {
    postScore(name.value, score.value);
    name.value = '';
    score.value = '';
  }
});

refresh.addEventListener('click', getScore);
window.addEventListener('load', getScore);