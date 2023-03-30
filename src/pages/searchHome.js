import SearchBox from '../components/search-project-page/searchBox';
import React from 'react';
import MainNavBar from '../components/navigation/mainNavbar';
import spiral1 from "../assets/img/spiral1copy.png"
import spiral2 from "../assets/img/spiral2copy.png"
import ProjectListBox from '../components/search-project-page/project-list-box';
import '../stylesheets/css/search-page.css'

function searchHome() {
    return (
        <>
        <MainNavBar></MainNavBar>
        <div className='search-page'>
            <div className="top-div">
                <img src={spiral1} className='spiral1-img'></img>
                <SearchBox></SearchBox>
                <img src={spiral2} className='spiral2-img'></img>
            </div>
            <div className='bottom-div'>
                <ProjectListBox></ProjectListBox>
            </div>            
        </div>
        </>
        
    );
}

export default searchHome;
