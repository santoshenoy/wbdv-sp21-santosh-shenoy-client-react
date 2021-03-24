import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"
export const CLEAR_WIDGETS = "CLEAR_WIDGETS"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
        .then(actualWidget => dispatch({
            type: CREATE_WIDGET,
            widget: actualWidget
        }))
}
export const deleteWidget = (dispatch, item) =>
    widgetService.deleteWidget(item.id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widgetToDelete: item
        }))
export const updateWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget
        }))
export const findWidgetsForTopic = (dispatch, topicId) =>
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))

const widgetActions = {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}

export default widgetActions;