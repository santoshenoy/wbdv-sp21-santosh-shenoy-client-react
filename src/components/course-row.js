import React, {useState} from "react";
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        last_modified,
        title,
        owned_by
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
        return (
            <tr className={`wbdv-row wbdv-course`}>
                <td className="align-middle wbdv-row wbdv-title">
                    {!editing && <Link to={`/courses/table/edit/${course._id}`} className="">
                        <i className="fa fa-book mr-3 text-primary"></i>
                        {title}
                    </Link> }
                    {editing && <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/> }
                </td>

                <td>
                    <Link to={`/courses/${course._id}/quizzes`}>
                        Quizzes
                    </Link>
                </td>

                <td className="align-middle d-none d-md-table-cell wbdv-row wbdv-owner">
                    {owned_by}
                </td>
                <td className="align-middle d-none d-md-table-cell wbdv-row wbdv-modified-date">
                    {last_modified}
                </td>
                <td className="align-middle wbdv-row wbdv-button wbdv-delete">
                    {!editing &&
                    <button className="btn"
                            onClick={() => deleteCourse(course)}>
                        <i className="fas fa-trash text-danger"/>
                    </button>}
                </td>

                {!editing &&
                <td className="align-middle wbdv-row wbdv-button wbdv-edit">
                    <button className="btn"
                            onClick={() => setEditing(true)}>
                        <i className="fas fa-edit text-primary"/></button>
                </td>
                }

                {editing &&
                <td className="align-middle wbdv-row wbdv-button">
                    <button className="btn"
                            onClick={saveCourse}>
                        <i className="fas fa-check text-primary"/>
                    </button>
                </td>
                }
            </tr>
        )
}

export default CourseRow