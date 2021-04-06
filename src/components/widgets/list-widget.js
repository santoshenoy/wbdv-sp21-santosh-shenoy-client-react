import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        deleteWidget,
        updateWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)
    return (
        <>
            {
                editing &&
                <>
                    <select value={cachedItem.type}
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    type: e.target.value
                                })}
                            className="form-control">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                    </select>
                    <br/>
                    <div>
                        <input onChange={(e) => {
                            setCachedItem({
                                ...cachedItem,
                                widgetOrder: e.target.checked ? 1 : 0
                            })
                            widget.widgetOrder = e.target.checked ? 1 : 0
                        }}
                               checked={!!widget.widgetOrder}
                               type="checkbox"/> Ordered
                        <br/>
                        List Items
                        <textarea
                            onChange={(e) => {
                                setCachedItem({
                                    ...cachedItem,
                                    text: e.target.value
                                })
                                widget.text = e.target.value
                            }}
                            rows={10}
                            value={widget.text}
                            placeholder={"Enter one list item per line."}
                            className="form-control">

                    </textarea>
                    </div>
                    <i onClick={() =>
                        deleteWidget(widget)}
                       className="fas fa-times my-fa-times float-right pr-2"></i>

                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(cachedItem)
                    }}
                       className="fas fa-check my-fa-check float-right pr-2"></i>

                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.widgetOrder === 1 &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !(widget.widgetOrder === 1) &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right my-fa-edit float-right"></i>
                </>

            }
        </>
    )
}


export default ListWidget