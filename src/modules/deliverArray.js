const scoreClass = document.querySelector('.score');
let template = '';
export default function deliverArray(arrayToBeDisplayed) {
  arrayToBeDisplayed.forEach((element, index) => {
    template += `<div class = "score_list" id = "score-${index}"><li>${element.user}:${element.score}</li></div>`;
  });
  scoreClass.innerHTML = template;
  template = '';
}
