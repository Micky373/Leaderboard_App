const postScore = async (userInput, scoreInput) => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5fnWrqyXm0Y5iMiMMw2U/scores/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: userInput,
            score: scoreInput,
        }),
    });
};

export default postScore;