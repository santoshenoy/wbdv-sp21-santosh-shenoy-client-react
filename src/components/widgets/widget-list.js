import React, {useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../actions/widget-actions";
import {connect} from 'react-redux'

const WidgetList = (
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    })  => {
    const {topicId} = useParams();

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div>
            <a className= "btn btn-success float-right" onClick={() => createWidget(topicId)}>Add New Widget</a>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {widget.type === "HEADING" &&
                            <HeadingWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                            }
                            {widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                            }
                            {widget.type === "LIST" &&
                            <ListWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                            }
                            {widget.type === "IMAGE" &&
                            <ImageWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
        deleteWidget: (item) => widgetActions.deleteWidget(dispatch, item),
        updateWidget: (widget) => widgetActions.updateWidget(dispatch, widget),
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
    }
}
export default connect(stpm, dtpm)(WidgetList)