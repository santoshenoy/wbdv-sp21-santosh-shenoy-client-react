import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, CLEAR_WIDGETS} from "../actions/widget-actions"

const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }

        case DELETE_WIDGET:
            const newState1 = {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.widgetToDelete.id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case CLEAR_WIDGETS:
            return {
                widgets: []
            }
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer