import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import "./course-editor.css"

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return(
        <div>
                <ul className="list-group">

                {
                    myModules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`} style={{}} >
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={true}
                                item={module}
                                />
                        </li>
                    )
                }
                <li className="list-group-item">
                    <a className= "btn btn-success float-right" onClick={() => createModule(courseId)}>Add Module</a>
                </li>
            </ul>
        </div>
        )}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            dispatch({type: "FIND_LESSONS_FOR_MODULE", lessons: []});
            dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: []});

            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)