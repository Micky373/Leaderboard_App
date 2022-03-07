const scoreClass = document.querySelector('.score');
let template = '';
export default function deliverArray(arrayToBeDisplayed) {
    arrayToBeDisplayed.forEach((element) => {
        template += `<div class = "score_list"><li>${element.user}:${element.score}</li></div>`;
    });
    scoreClass.innerHTML = template;
    template = '';
}
