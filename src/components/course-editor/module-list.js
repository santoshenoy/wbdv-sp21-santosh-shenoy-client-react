import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
//import "../../index.css"

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

                <ul className="list-group ">

                {
                    myModules.map(module =>
                        <li className={`list-group-item list-group-item ${module._id === moduleId}`} style={{color: "orange"}}>
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