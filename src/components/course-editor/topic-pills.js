import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"
import "./course-editor.css"

const TopicPills = (
    {
        createTopic,
        deleteTopic,
        updateTopic,
        topics = [],
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return (
        <div>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                active={topic._id === topicId}
                                item={topic}/>
                        </li>
                    )
                }
                &nbsp;
                <li>
                    <a onClick={() => createTopic(lessonId)}
                       className="btn btn-success float-right">Add Topic</a>
                </li>
            </ul>
        </div>)
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}
const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(topic => dispatch({
                    type: "CREATE_TOPIC",
                    topic
                }))
        },
        deleteTopic: (topic) =>
            topicService.deleteTopic(topic._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topic
                })),
        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                })),
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics
                }))
        }
    }
}

export default connect(stpm, dtpm)(TopicPills)