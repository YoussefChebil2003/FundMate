import React from "react";
import anonymousIcon from "../../assets/icon/anonymous.png";
import YoussefPhoto from "../../assets/img/Youssef Chebil photo.jpg"
import "../../stylesheets/css/main-navbar.css"
import { MDBBtn } from "mdb-react-ui-kit";
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
    handleClick=()=>{
        if (this.state.shows == false)
            this.setState({Person: this.Youssef, shows: true})
        else    
            this.setState({Person: this.Anonymous, shows: false})
    }
    render(){
        return (
            <div className="navbar">
                <div className="left-nav">
                    <Link to="/">
                        <h1>FundMate</h1>
                    </Link>
                </div>
                <div className="right-nav">
                    <ul className="page-options">
                        <li><Link to='/search'>Search</Link></li>
                        <li><Link to='/launch-campaign'>Launch Campaign</Link></li>
                        <li><Link to=''>About Us</Link></li>
                    </ul>
                    <div className="auth-info">
                        <Link to='/profile'>
                            <img style={{borderRadius: "50%", height: "50px", width:"50px"}} src={this.state.Person.imgSrc}></img>
                            <h3>{this.state.Person.fullName}</h3>
                        </Link>
                        <div className="toggle-profile">
                            <h2>Profession: {this.state.Person.profession}</h2>
                            <p>Bio: {this.state.Person.bio}</p>
                        </div>
                        <Link to=''>
                            <MDBBtn style={{height: "7.5vh"}} onClick={this.handleClick}>Login</MDBBtn>
                        </Link>
                        <Link to='/sign-up'>
                            <MDBBtn style={{height: "7.5vh"}} >Sign Up</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div> 
        )
        
    }
}

export default MainNavBar;