import './styles.css';
import Score from './modules/scoreClass.js';

const score1 = new Score('Player 1', 100);
const score2 = new Score('Player 2', 50);
const score3 = new Score('Player 3', 40);
const score4 = new Score('Player 4', 30);
const score5 = new Score('Player 5', 20);
const score6 = new Score('Player 6', 15);
const score7 = new Score('Player 7', 10);

const Scores = [score1, score2, score3, score4, score5, score6, score7];

const scoreClass = document.querySelector('.score');
let template = '';

Scores.forEach((element) => {
  template += `<div class = "score_list"<li>${element.name}:${element.score}</li></div>`;
});

scoreClass.innerHTML = template;