import React, {useState} from 'react'

const HeadingWidget = (
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
                    </select>
                    <br/>

                    <input value={widget.text}
                           onChange={(e) =>
                               setCachedItem({
                                   ...cachedItem,
                                   text: e.target.value
                               })}
                           value={cachedItem.text}
                           className="form-control"/>
                    <br/>

                    <select value={cachedItem.size}
                            onChange={(e) => {
                                setCachedItem({
                                    ...cachedItem,
                                    size: parseInt(e.target.value)
                                })
                            }}

                            className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>

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

                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right my-fa-edit float-right"></i>
                </>
            }
        </>
    )
}

export default HeadingWidget