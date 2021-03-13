import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to = "/somewhere/to/go",
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
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
                        onChange={(event) =>
                            setCachedItem({
                                ...cachedItem,
                                title: event.target.value
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