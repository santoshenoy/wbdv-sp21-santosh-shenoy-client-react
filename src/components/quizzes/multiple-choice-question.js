import React, {useState} from 'react'
//import './quizzes.style.client.css'

const MultipleChoiceQuestion = ({question}) => {

    const [currAnswer, setCurrAnswer] = useState("")
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    const choices = question.choices

    const correctAnswer = question.correct

    console.log(`${correctAnswer}, ${currAnswer}, ${isCorrectAnswer}`)

    return (
        <div className="jo-quiz-question-spacing">
            <h4>
                {question.question}
                <span className="float-right jo-question-title-icons">
                    {
                        isCorrectAnswer !== null && isCorrectAnswer &&
                        <i className="fas fa-check jo-color-green"></i>
                    }
                    {
                        isCorrectAnswer !== null && !isCorrectAnswer &&
                        <i className="fas fa-times jo-color-red"></i>
                    }
                </span>
            </h4>
            <ul className="list-group">
                {
                    choices.map((choice, ndx) =>
                        <li className=
                                {
                                    `list-group-item 
                                    ${isCorrectAnswer !== null && choice === correctAnswer ? "list-group-item-success": ""}
                                    ${isCorrectAnswer !== null && choice === currAnswer && choice !== correctAnswer ? "list-group-item-danger" : ""}`
                                }>
                            <input type="radio"
                                   name={question._id}
                                   id={`${question._id}_${ndx}`}
                                   onChange={() => {
                                       setCurrAnswer(choice)
                                       setIsCorrectAnswer(null)
                                   }}/>
                            <label for={`${question._id}_${ndx}`}>{choice}</label>
                            <span className="float-right">
                                {
                                    isCorrectAnswer !== null && choice === correctAnswer &&
                                    <i className="fas fa-check"></i>
                                }
                                {
                                    isCorrectAnswer !== null && choice === currAnswer && choice !== correctAnswer &&
                                    <i className="fas fa-times"></i>
                                }
                            </span>
                        </li>
                    )
                }
            </ul>
            <br/>
            <p>Your answer: {currAnswer}</p>
            <button className="btn btn-success"
                    onClick={() => {currAnswer === correctAnswer ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)}}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion