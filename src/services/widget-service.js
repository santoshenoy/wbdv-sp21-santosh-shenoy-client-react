const URL = "https://santoshshenoytirthahalli.herokuapp.com/api/";

export const createWidget = (topicId, widget) =>
    fetch(`${URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${URL}/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${URL}/topics/${topicId}/widgets`)
        .then(response => response.json())


const api = {
    createWidget,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic
};

export default api;