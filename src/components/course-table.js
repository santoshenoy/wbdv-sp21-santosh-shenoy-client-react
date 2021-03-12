import React from "react";
import CourseRow from "./course-row";
import { Link } from 'react-router-dom';

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
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
                                    <th scope="col"></th>
                                    <th scope="col">
                                        <button type="button"><i className="fa fa-folder"></i></button>
                                        <Link to="/courses/grid"
                                              className="btn">
                                            <i className="fas fa-th fa-lg float-right wbdv-button wbdv-grid-layout"/>
                                        </Link>
                                        <button type="button"
                                                className="btn wbdv-header wbdv-sort">
                                            <i className="fas fa-lg fa-sort-numeric-down float-right"/>
                                        </button>

                                    </th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                this.props.courses.map((course) =>
                                <CourseRow
                                    updateCourse={this.props.updateCourse}
                                    deleteCourse={this.props.deleteCourse}
                                    key={course._id}
                                    course={course}
                                    title={course.title}
                                    owned_by={course.owned_by}
                                    last_modified={course.last_modified}
                                />)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }