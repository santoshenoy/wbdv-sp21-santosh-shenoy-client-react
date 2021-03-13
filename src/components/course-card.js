import React, {useState} from "react";
import image from "../images/bootstrap-logo.png";
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, updateCourse}) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }
        return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <figure
                    className={`figure border rounded px-2 ${editing ? 'wbdv-highlight'
                        : ''}`}>

                    <span className="d-block mb-4 h-100 wbdv-clickable">

                    <img
                        src={image}
                        className="card-img-top" alt="..."/>
                    </span>

                    <figcaption className="figure-caption text-left">
                        {!editing && <Link to={`/courses/grid/edit/${course._id}`} className="">
                            <i className="fa fa-book mr-3 text-primary"></i>{course.title}</Link>}
                        {editing && <input type="text" onChange={(event) => setTitle(
                            event.target.value)}
                                           value={title}/>}
                        <div>

                        </div>
                        <span>
                            <div> </div>
                            {!editing && <button className="btn pl-0" onClick={() => {
                                setEditing(true);
                                setTitle(course.title)
                            }}> <i className='fas fa-edit'/></button>}
                            &nbsp;

                        {!editing && <button className="btn pl-0" onClick={() => deleteCourse(course)}>
                                        <i className="fas fa-trash"/></button>}
                            {editing && <button className="btn pl-0" onClick={() => saveTitle()}>
                                           <i className="fas fa-check"/></button>}
                        </span>
                    </figcaption>
                </figure>
            </div>
        );

}

export default CourseCard;