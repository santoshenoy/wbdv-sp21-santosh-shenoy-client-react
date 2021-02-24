import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) =>
    <div className="container">
        <h1>
            Course Editor
            <Link to='/courses/table'>
                <i className='fas fa-arrow-left float-left'></i>
            </Link>
            <i onClick={()=>history.goBack()}  className='fas fa-times float-right yz-exit-editor-icon'></i>
        </h1>
        <div className="row">
            <div className="col-4">
                <ul className="list-group" id="leftSideList">
                    <li className="list-group-item list-group-item-primary">
                        Module1
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item active list-group-item-primary">
                        Module2
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item list-group-item-primary">
                        Module3
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item list-group-item-primary">
                        Module4
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item list-group-item-primary">
                        Module5
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item list-group-item-primary">
                        Module6
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item list-group-item-primary">
                        Module7
                        <i className="far fa-trash-alt float-right"></i>
                    </li>
                    <li className="list-group-item list-group-item-primary"><i
                        className="fas fa-plus float-right"></i></li>
                </ul>
            </div>

            <div className="col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page"
                           href="#">Lesson1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Lesson2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Lesson3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1"
                           aria-disabled="true">Lesson4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"><i
                            className="fas fa-plus"></i></a>
                    </li>
                </ul>
                <br/>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Topic
                            4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"><i
                            className="fas fa-plus"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


export default CourseEditor