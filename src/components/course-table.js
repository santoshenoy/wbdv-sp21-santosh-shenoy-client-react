import React from "react";
import CourseRow from "./course-row";
import { Link } from 'react-router-dom';

const CourseTable = ({courses, deleteCourse, updateCourse, formatDate, history}) =>
    <div className="container-fluid ">
        <div className="row justify-content-center">
            <div className="col">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col" className="wbdv-header wbdv-title">Title</th>
                            <th className="d-none d-md-table-cell wbdv-header wbdv-owner"
                                scope="col">Owned
                                By
                            </th>
                            <th className="d-none d-md-table-cell wbdv-header wbdv-last-modified"
                                scope="col">Last Modified
                            </th>
                            <th scope="col"> </th>
                            <th scope="col">
                                <button type="button"><i className="fa fa-folder"></i></button>
                                <Link to="/courses/grid"
                                                    className="btn">
                                <i className="fas fa-th fa-lg float-right wbdv-button wbdv-grid-layout"/>
                            </Link><button type="button"
                                                    className="btn wbdv-header wbdv-sort">
                                <i className="fas fa-lg fa-sort-numeric-down float-right"/>
                            </button>

                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            courses.map(function(course) {
                                return <CourseRow
                                    history={history}
                                    updateCourse={updateCourse}
                                    deleteCourse={deleteCourse}
                                    key={course._id}
                                    course={course}
                                    formatDate={formatDate}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
export default CourseTable