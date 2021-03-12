import React, {useState} from "react";
//import thumbnail from "./static/grid_thumbnail.svg";
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
                    <span className="d-block mb-4 h-100 wbdv-clickable"
                          onClick={() => this.props.history.push(`/course/${course._id}`)}>
                        <img className="img-fluid" src={image}
                             width="150" alt='course thumbnail'/>

                    </span>
                    <figcaption className="figure-caption text-left">
                        {!editing && <Link to={`/courses/grid/edit/${course._id}`} className="">
                            <i className="fa fa-book mr-3 text-primary"></i>
                            {course.title}
                        </Link> }
                        {editing && <input value={course.title}
                               onKeyPress={(event) => {
                                   if (event.key === 'Enter') {
                                       this.saveCourse();
                                   }
                               }}
                               onChange={(e) =>
                                   this.setState(
                                       {
                                           course: {
                                               ...course,
                                               title: e.target.value,
                                               last_modified: this.props.formatDate(
                                                   new Date(Date.now()))
                                           }
                                       })}
                               onClick={ ()=>{
                                   if(editing === false) {
                                       this.props.history.push(`/course/${course._id}`);
                                   }
                               }}
                               type='text' className={this.state.editing ? 'form-control'
                            : 'form-control-plaintext wbdv-clickable wbdv-cut-text'}
                               readOnly={!editing}/>}
                        <span>
                            <div></div>

                            {!editing &&
                            <button className="btn pl-0"
                                    onClick={() => deleteCourse(course)}>
                                <i className="fas fa-trash text-danger"/>
                            </button>}
                            {!editing &&
                            <button className="btn pl-0"
                                    onClick={() => this.setState({editing: true})}>
                                <i className="fas fa-edit text-primary"/></button>
                            }
                            {editing &&
                            <button className="btn pl-0"
                                    onClick={saveTitle()}>
                                <i className="fas fa-check text-primary"/>
                            </button>}
                            </span>
                    </figcaption>
                </figure>
            </div>
        );

}

export default CourseCard;