import React, {useState} from 'react'

const ImageWidget = (
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
                    Image URL
                    <input className="form-control"
                           value={widget.src}
                           onChange={event => setEditing({
                               ...widget,
                               src: event.target.value
                           })}/>

                    Image width
                    <input className="form-control"
                           type="number"
                           value={widget.width}
                           onChange={event => setEditing({
                               ...widget,
                               width: event.target.value
                           })}/>
                    Image height
                    <input className="form-control"
                           type="number"
                           value={widget.height}
                           onChange={event => setEditing({
                               ...widget,
                               height: event.target.value
                           })}/>
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
                    <img width={widget.width}
                         height={widget.height}
                         src={widget.src}/>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right my-fa-edit float-right"></i>
                </>

            }
        </>
    )
}


export default ImageWidget