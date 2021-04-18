import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quizzes-service"

const Quizzes = () => {

    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((fetchedQuizzes) => {
                setQuizzes(fetchedQuizzes)
            })
    })

    return (
        <div className={"container-fluid"}>
            <h2>Quizzes</h2>
            <div className={"list-group quiz-list"}>
                {
                    quizzes.map((quiz) => {
                        return (
                            <div className={"list-group-item"}>
                                <div className={"row"}>
                                    <div className={"col-8"}>
                                        <Link
                                            to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                        >
                                            {quiz.title}
                                        </Link>
                                    </div>
                                    <div className={"col"}>
                                        <Link
                                            to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                        >
                                            <button className={"btn btn-primary float-right"}>Start</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Quizzes