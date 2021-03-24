import React, {useState} from 'react'

const ParagraphWidget = (
    {
        widget,
        deleteWidget,
        updateWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)
    return(
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

                    <textarea
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                text: e.target.value
                            })}
                        value={cachedItem.text}
                        className="form-control"></textarea>

                    <i onClick={() =>
                        deleteWidget(widget)}
                       className="fas fa-times my-fa-times float-right pr-2"></i>

                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(cachedItem)}}
                       className="fas fa-check my-fa-check float-right pr-2"></i>

                </>
            }
            {
                !editing &&
                <>
                    <p>
                        {widget.text}
                    </p>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right my-fa-edit float-right"></i>
                </>

            }
        </>
    )
}

export default ParagraphWidget