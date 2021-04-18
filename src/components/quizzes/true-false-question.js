import React, {useState} from 'react'
//import './quizzes.style.client.css'

const TrueFalseQuestion = ({question}) => {

    const [currAnswer, setCurrAnswer] = useState("")
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

    const correctAnswer = question.correct

    const choices = ["true", "false"]

    return (
        <div className="jo-quiz-question-spacing">
            <h4>
                {question.question}
                <span className="float-right">
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
                                    ${isCorrectAnswer !== null && correctAnswer === choice ? "list-group-item-success": ""}
                                    ${isCorrectAnswer !== null && currAnswer === choice && correctAnswer !== choice ? "list-group-item-danger": ""}`
                                }>
                            <input type="radio"
                                   name={question._id}
                                   id={`${question._id}_${ndx}`}
                                   onChange={() => {
                                       setCurrAnswer(choice)
                                       setIsCorrectAnswer(null)
                                   }}/>
                            <label for={`${question._id}_${ndx}`}>{choice.toUpperCase()}</label>
                            <span className="float-right">
                                {
                                    isCorrectAnswer !== null && correctAnswer === choice &&
                                    <i className="fas fa-check"></i>
                                }
                                {
                                    isCorrectAnswer !== null && currAnswer === choice && correctAnswer !== choice &&
                                    <i className="fas fa-times"></i>
                                }
                            </span>
                        </li>
                    )
                }
            </ul>
            <br/>
            <p>Your answer: {currAnswer}</p>
            <button className={"btn btn-success"}
                    onClick={() => {currAnswer === correctAnswer ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)}}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion