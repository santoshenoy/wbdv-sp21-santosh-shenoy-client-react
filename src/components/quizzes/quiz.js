import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";


const Quiz = () => {
    const {quizId} = useParams()

    const [quizTitle, setQuizTitle] = useState("")
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(-1)
    const [submitted, setSubmitted] = useState(false)

    const submitQuiz = () => {
        quizService.submitQuiz(quizId, questions)
            .then(scoredQuiz => {
                setScore(scoredQuiz.score)
            })
        setSubmitted(true)
    }

    useEffect(() => {
        quizService.findQuizById(quizId)
            .then(quiz => setQuizTitle(quiz.title))
        questionService.findQuestionsForQuiz(quizId)
            .then(returnedQs => setQuestions(returnedQs))
    }, [])

    return (
        <div>
            <h2>
                {quizTitle}
            </h2>
            <div>
                {
                    questions.map(q =>
                        <div>
                            {
                                q.type === "TRUE_FALSE" &&
                                <TrueFalseQuestion question={q} setQuestions={setQuestions} allQuestions={questions}
                                                    />
                            }
                            {
                                q.type === "MULTIPLE_CHOICE" &&
                                <>
                                    <MultipleChoiceQuestion question={q} setQuestions={setQuestions} allQuestions={questions}
                                                            />
                                </>
                            }
                        </div>
                    )
                }
            </div>
            <button
                className={"btn btn-primary btn-block"}
                onClick={() => submitQuiz()}
            >Submit</button>
        </div>

    )
}

export default Quiz