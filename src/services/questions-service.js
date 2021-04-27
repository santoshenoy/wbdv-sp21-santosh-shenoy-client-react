const QUIZZES_URL = 'https://tranquil-ravine-58378.herokuapp.com/api/quizzes'

const findQuestionsForQuiz = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}

export default api