import React from "react";
import anonymousIcon from "../../assets/icon/profile-picWhite.png";
import YoussefPhoto from "../../assets/img/Youssef Chebil photo.jpg"
import "../../stylesheets/css/main-navbar.css"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

class Person{
    constructor(fullName, profession, bio, imgSrc){
        this.fullName= fullName;
        this.profession= profession;
        this.bio= bio;
        this.imgSrc= imgSrc;
    }
}

class MainNavBar extends React.Component{
    Youssef = new Person("Youssef Chebil", "Full Stack Developer", "Lorem ipsum text", YoussefPhoto);
    Anonymous = new Person("","","", anonymousIcon)
    state={
        Person: this.Anonymous,
        shows:false,
    };
    render(){
        return (
            <>
                <div className="navbar" light bgColor='light'>
                    <div className="left-nav">
                        <Link to="/">
                            <h1>FundMate</h1>
                        </Link>
                    </div>
                    
                    <ul className="page-options">
                        <li><Link id="link-nav" to='/search'>Marketplace</Link></li>
                        <li><Link id="link-nav" to='/launch-campaign'>Launch Campaign</Link></li>
                        <li><Link id="link-nav" to='/about'>About Us</Link></li>
                    </ul>

                    <div className="auth-div">
                        <div className="auth-info">
                            <Link to='/profile'>
                                <img className="profile-img" src={this.state.Person.imgSrc}></img>
                                    <h3>{this.state.Person.fullName}</h3>
                            </Link>
                        </div> 
                        <div className="nav-btns-div">
                            <Link to='/login'>
                                <button id="login-btn" className="nav-btn">Login</button>
                            </Link>
                            <Link to='/sign-up'>
                                <button className="nav-btn" id="sign-up-btn" >Sign Up</button>
                            </Link>
                        </div>
                    </div>            
                </div>
        </>
        )
        
    }
}

export default MainNavBar;     