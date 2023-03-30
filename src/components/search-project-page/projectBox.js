import React from 'react'
import projectboxphotos from "../../assets/img/projectboxphotos.jpg"
import "../../stylesheets/css/project-box.css"
import fundmateLogo from "../../assets/img/Fundmate logo.png"
import tunisiaFlag from "../../assets/img/Flag_of_Tunisia.png"

function projectBox() {
    return (
        <div className='project-box'>
            <div >
                <img className="project-img" src={projectboxphotos}></img>
            </div>
            <div className="main-project-info"> 
                <h2>FundMate</h2>
                <div id="country-div">
                    <h4 style={{color:"gray"}}>Tunisia</h4>
                    <img style={{width: "25px", height:"25px",  borderRadius:"50%"}} src={tunisiaFlag}></img>
                </div>
                
                <p>Empowering Entrepreneurs and unlocking innovation. More than a solution, a Catalyst for Change</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"75px", height:"75px", backgroundColor: "white", borderRadius:"5px", position:"absolute", right: "7px", top: "30vh"}} className="logo-div">
                <img style={{width: "70px", height:"70px",  borderRadius:"5px"}} src={fundmateLogo}></img>
            </div>
            <div className='additional-project-info'>
                <div style={{backgroundColor:"#e5e1e1"}} className='project-categories'>
                    <div className='category'>
                        Technology
                    </div>
                    <div className='category'>
                        Finance
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projectBox