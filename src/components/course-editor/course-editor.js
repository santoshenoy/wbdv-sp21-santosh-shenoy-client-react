import React from 'react'
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';


const CourseEditor = ({history}) =>
    <div>
    <nav className="navbar navbar-expand-md navbar-light bg-primary">
        <div className="container">
            <button type="button"><i onClick={()=>history.goBack()}  className='fa fa-arrow-circle-left'></i></button>
            <div className="col-4"><h3>CS5610 - WebDev</h3></div>
            <div className="col-8 ">
                <ul className="nav nav-tabs">
                    <li className="nav-item" style={{backgroundColor: "black"}}>
                        <a className="nav-link " aria-current="page" href="#" style={{color: "white"}}> Build </a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: "black"}}>
                        <a className="nav-link active" href="#" style={{color: "black"}}>Pages</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: "black"}}>
                        <a className="nav-link" href="#" style={{color: "white"}}>Themes</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: "black"}}>
                        <a className="nav-link" href="#" style={{color: "white"}}>Store</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: "black"}}>
                        <a className="nav-link" href="#" style={{color: "white"}}>Apps</a>
                    </li>
                    <li className="nav-item" style={{backgroundColor: "black"}}>
                        <a className="nav-link" href="#" style={{color: "white"}}>Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container modules_layout">
        <br/>
        <div className="row ">
            <div className="col-4">
                <ul className="list-group ">
                    <li className="list-group-item list-group-item-dark active">Module 1 - JQUERY<i
                        className="float-right fa fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark">Module 2 - REACT<i
                        className="float-right fa fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark">Module 3 - REDUX <i
                        className="float-right fa fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark">Module 4 - NATIVE <i
                        className="float-right fas fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark">Module 5 - ANGULAR <i
                        className="float-right fas fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark">Module 6 - NODE <i
                        className="float-right fas fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark">Module 7 - MONGO <i
                        className="float-right fas fa-times"></i></li>
                    <li className="list-group-item list-group-item-dark"><a className="btn btn-success float-right"
                                                                            href="#"> Add Module</a></li>
                </ul>
            </div>
            <div className="col-8 bg-light">
                <div className="row pills-layout">
                    <div className="col-8">
                        <a className="btn btn-primary"> Topic 1 </a>
                        &nbsp;
                        <a className="btn btn-primary active"> Topic 2 </a>
                        &nbsp;
                        <a className="btn btn-primary"> Topic 3 </a>
                        &nbsp;
                        <a className="btn btn-primary"> Topic 4 </a>
                        &nbsp;
                        <a className="btn btn-success" href="#">+</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


export default CourseEditor