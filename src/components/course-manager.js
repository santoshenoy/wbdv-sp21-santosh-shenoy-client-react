import React, {useState} from 'react'
import CourseTable from "../components/course-table";
import CourseGrid from "../components/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import CourseService, {findAllCourses} from "../services/course-service"
import QuizzesList from "./quizzes/quizzes";
import Quiz from "./quizzes/quiz";

class CourseManager extends React.Component {
    state = {
        courses: [],
        courseTitle: ''
    }

    setTitle(title) {
        this.setState(
            {courseTitle: title}
        )
    }

    componentDidMount = () =>
        CourseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: this.state.courseTitle,
            owned_by: "me",
            last_modified: this.formatDate(new Date(Date.now()))
        }
        this.setTitle('');
        CourseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [month, day, year].join('/');
    };

    updateCourse = (course) => {
        CourseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    deleteCourse = (courseToDelete) => {
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return (
            <div>
                <Route path="/courses/table" exact={true}>
                    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                        <div className="col-1" style={{color: 'white'}}>
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <a className="navbar-brand" href="#">Course Manager</a>

                        <div>
                            <input className="form-control mr-sm-2" type="text" placeholder="New Course Title" className=" form-control mr-sm-2 wbdv-field wbdv-new-course"
                                   onChange={(event) => this.setTitle(event.target.value)}
                                   placeholder="New Course Title"
                                   value={this.state.courseTitle}/>
                        </div>
                        <div className="col-1" style={{color: '#ff0000'}}>
                            <button className="btn btn-success ml-2" type="submit" onClick={() => {
                                this.addCourse(this.state.newCourseTitle)
                                this.state.newCourseTitle = ''
                            }}>Add</button>
                        </div>

                    </nav>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                    <div className="float-right">
                        <button type="button"
                                className="btn btn-danger btn-circle btn-xl"
                                onClick={this.addCourse}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </Route>

                <Route path="/courses/grid" exact={true}>
                    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                        <div className="col-1" style={{color: 'white'}}>
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <a className="navbar-brand" href="#">Course Manager</a>

                        <div>
                            <input className="form-control mr-sm-2" type="text" placeholder="New Course Title" className=" form-control mr-sm-2 wbdv-field wbdv-new-course"
                                   onChange={(event) => this.setTitle(event.target.value)}
                                   placeholder="New Course Title"
                                   value={this.state.courseTitle}/>
                        </div>
                        <div className="col-1" style={{color: '#ff0000'}}>
                            <button className="btn btn-success ml-2" type="submit" onClick={() => {
                                this.addCourse(this.state.newCourseTitle)
                                this.state.newCourseTitle = ''
                            }}>Add</button>
                        </div>
                    </nav>
                    <div className="row yz-sticky-nav-bar">
                        <div className="col-1" id="hamburger">
                        </div>
                        <div className="col-3 d-none d-lg-block yz-name">
                        </div>
                        <div className="col-1 yz-space-taker"></div>
                        <div className="col-6">
                        </div>
                        <div className="col-1" id="plus-icon1">
                            <button type="button"><i className="fa fa-folder"></i></button>
                            <Link to="/courses/table"
                                  className="btn">
                                <i className="fas fa-th fa-lg float-right wbdv-button wbdv-grid-layout"/>
                            </Link><button type="button"
                                           className="btn wbdv-header wbdv-sort">
                            <i className="fas fa-lg fa-sort-numeric-down float-right"/>
                        </button>
                        </div>
                    </div>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                    <div className="float-right">
                        <button type="button"
                                className="btn btn-danger btn-circle btn-xl"
                                onClick={this.addCourse}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </Route>


                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>

                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>

            </div>
        )
    }
}

export default CourseManager

