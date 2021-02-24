import React from "react";
import CourseTable from "../components/course-table";
import CourseGrid from "../components/course-grid";
import {createCourse, deleteCourse, findAllCourses, updateCourse} from "../services/course-service"
import CourseEditor from "../components/course-editor/course-editor";
import {Link, Redirect, Route} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';


class CourseManager extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: '',
        courses: []
    };

    loadAllCourses = async () => {
        const allCourses = await findAllCourses();
        this.setState({
            courses: allCourses
        })
    };
    componentDidMount = async () => {
        document.title = 'Course Manager | Whiteboard';
        await this.loadAllCourses();
    };

    updateCourse = async (courseId, course) => {
        await updateCourse(courseId, course);
        await this.loadAllCourses();
    };

    deleteCourse = async (deletedCourse) => {
        await deleteCourse(deletedCourse._id);
        await this.loadAllCourses();
    };

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    };

    addCourse = async (newCourseName) => {
        if (newCourseName !== '') {
            const newCourse = {
                title: newCourseName,
                last_modified: this.formatDate(new Date(Date.now())),
                owned_by: 'me'
            };
            await createCourse(newCourse);
            await this.loadAllCourses();
        }
    };

    updateInput = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })

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

    render() {
        return (
            <div>

                <Route path={'/courses/table'}>
                    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                        <div className="col-1" style={{color: 'white'}}>
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <a className="navbar-brand" href="#">Course Manager</a>
                        <div>
                            <input className="form-control mr-sm-2" type="text" placeholder="New Course Title" className=" form-control mr-sm-2 wbdv-field wbdv-new-course"
                                   onChange={this.updateInput}
                                   value={this.state.newCourseTitle}
                                   onKeyPress={(event) => {
                                       if (event.key === 'Enter') {
                                           this.props.add(this.state.newCourseTitle);
                                           this.state.newCourseTitle = ''
                                       }
                                   }}/>
                        </div>
                        <div className="col-1" style={{color: '#ff0000'}}>
                            <button className="btn btn-success ml-2" type="submit" onClick={() => {
                                this.addCourse(this.state.newCourseTitle)
                                this.state.newCourseTitle = ''
                            }}>Add</button>
                        </div>
                    </nav>
                    <CourseTable courses={this.state.courses} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} formatDate={this.formatDate}/>
                </Route>
                <Route path={'/courses/grid'}>
                    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                        <div className="col-1" style={{color: 'white'}}>
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <a className="navbar-brand" href="#">Course Manager</a>
                        <div>
                            <input className="form-control mr-sm-2" type="text" placeholder="New Course Title" className=" form-control mr-sm-2 wbdv-field wbdv-new-course"
                                   onChange={this.updateInput}
                                   value={this.state.newCourseTitle}
                                   onKeyPress={(event) => {
                                       if (event.key === 'Enter') {
                                           this.props.add(this.state.newCourseTitle);
                                           this.state.newCourseTitle = ''
                                       }
                                   }}/>
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
                    <CourseGrid courses={this.state.courses} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} formatDate={this.formatDate}/>
                </Route>

                <div class="float-right"><button type="button"
                        class="btn btn-danger btn-circle btn-xl"
                                                 onClick={() => {
                                                     this.addCourse(this.state.newCourseTitle)
                                                     this.state.newCourseTitle = ''
                                                 }}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button></div>

                <Route path={'/courses/editor'} render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager