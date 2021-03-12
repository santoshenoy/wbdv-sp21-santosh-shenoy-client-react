import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../index.css"

const EditableItem = (
    {
        to = "/somewhere/to/go",
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : ''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit float-right my-fa-edit"></i>
                </>
            }

            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check my-fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times my-fa-times"></i>
                </>
            }
        </>
    )
}

export default EditableItem