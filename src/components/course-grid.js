import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className="container">
        <div className="row text-center">

            {
                courses.map((course, ndx) =>
                    <CourseCard key={course._id}
                                course={course}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse}/>
            )
            }
        </div>
    </div>

export default CourseGrid