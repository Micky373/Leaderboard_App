import deliverArray from './deliverArray.js';

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5fnWrqyXm0Y5iMiMMw2U/scores/');
  const dataObj = await response.json();
  const dataArr = dataObj.result;
  dataArr.sort((a, b) => b.score - a.score);
  deliverArray(dataArr);
};

export default getScore;