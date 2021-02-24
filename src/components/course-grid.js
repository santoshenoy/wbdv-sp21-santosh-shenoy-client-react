import React from "react";
import CourseCard from "./course-card";

const CourseGrid = ({courses, deleteCourse, updateCourse, formatDate, history}) =>
    <div className="container">
        <div className="row text-center">
            {
                courses.map(function (course) {
                    return <CourseCard
                        history = {history}
                        deleteCourse={deleteCourse}
                        updateCourse = {updateCourse}
                        key={course._id}
                        course={course}
                        formatDate={formatDate}/>
                })
            }
        </div>
    </div>;

export default CourseGrid