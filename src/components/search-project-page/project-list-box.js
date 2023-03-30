import React from 'react'
import ProjectBox from './projectBox'
import "../../stylesheets/css/project-box.css"
import arrowbtn from "../../assets/icon/arrowbtn.png"
import { Link } from 'react-router-dom'

function ProjectListBox() {
    return (
    <div className='project-list-box'>
        <div className='col'>
            <div className="project-funding-service-div">
                <h5 style={{fontWeight:"bold", fontSize:"28px"}}>Donations</h5>
                <Link id="see-more-link" to=''>
                    <p>See More</p>
                    <img id="arrow-icon" src={arrowbtn}></img>
                </Link>
            </div>
            <div className='row'>
                <ProjectBox id="project-box"></ProjectBox>
                <ProjectBox id="project-box"></ProjectBox>
                <ProjectBox id="project-box"></ProjectBox>
            </div>
            <div className="project-funding-service-div">
                <h5 style={{fontWeight:"bold", fontSize:"28px"}}>Investments</h5>
                <div>
                    <Link id="see-more-link" to=''>
                        <p>See More</p>
                        <img id="arrow-icon" src={arrowbtn}></img>
                    </Link>
                </div>
                
            </div>
            <div className='row'>
                <ProjectBox id="project-box"></ProjectBox>
                <ProjectBox id="project-box"></ProjectBox>
                <ProjectBox id="project-box"></ProjectBox>
            </div>
            <div className='row'>
                <ProjectBox id="project-box"></ProjectBox>
                <ProjectBox id="project-box"></ProjectBox>
                <ProjectBox id="project-box"></ProjectBox>
            </div>
        </div>
        
    </div>
    )
}

export default ProjectListBox