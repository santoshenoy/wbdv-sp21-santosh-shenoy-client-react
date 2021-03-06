import React, {useEffect, useState} from 'react'

import "./course-editor.css"

import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service";
import WidgetList from "../widgets/widget-list";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId} = useParams();
    const [courseTitle, setCourseTitle] = useState("")
    useEffect(() => {
        courseService.findCourseById(courseId).then(
            (course) => setCourseTitle(course.title))
    }, [])

    return (
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-primary">
                    <div className="container">
                        <button type="button"><Link to={`/courses/${layout}`}>  <i className='fa fa-arrow-circle-left'></i></Link></button>
                        <div className="col-4"><h3>{courseTitle}</h3></div>
                        <div className="col-8 ">

                        </div>
                    </div>
                </nav>

                <div className="container modules_layout">
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <ModuleList/>
                        </div>
                        <div className="col-8 bg-light">
                        <div className="row pills-layout">
                            <div className="col-8">
                            <LessonTabs/>
                            <br/>
                            <TopicPills/>
                                <br/>
                                <WidgetList/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </Provider>)
}

export default CourseEditor
