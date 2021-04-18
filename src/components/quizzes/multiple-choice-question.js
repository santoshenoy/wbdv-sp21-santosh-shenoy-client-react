import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {

    const [currentAnswer, setCurrentAnswer] = useState("")
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    const choices = question.choices

    const correctAnswer = question.correct

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
                                    ${isCorrectAnswer !== null && choice === currentAnswer && choice !== correctAnswer ? "list-group-item-danger" : ""}`
                                }>
                            <input type="radio"
                                   name={question._id}
                                   id={`${question._id}_${ndx}`}
                                   onChange={() => {
                                       setCurrentAnswer(choice)
                                       setIsCorrectAnswer(null)
                                   }}/>
                            <label for={`${question._id}_${ndx}`}>{choice}</label>
                            <span className="float-right">
                                {
                                    isCorrectAnswer !== null && choice === correctAnswer &&
                                    <i className="fas fa-check"></i>
                                }
                                {
                                    isCorrectAnswer !== null && choice === currentAnswer && choice !== correctAnswer &&
                                    <i className="fas fa-times"></i>
                                }
                            </span>
                        </li>
                    )
                }
            </ul>
            <br/>
            <p>Your answer: {currentAnswer}</p>
            <button className="btn btn-success"
                    onClick={() => {currentAnswer === correctAnswer ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)}}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion