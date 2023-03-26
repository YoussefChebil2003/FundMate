import SearchBox from '../components/search-project-page/searchBox';
import '../stylesheets/css/search-page.css'
import React from 'react';
import MainNavBar from '../components/navigation/mainNavbar';

function searchHome() {
    return (
        <div className='search-page'>
            <MainNavBar></MainNavBar>
            <SearchBox></SearchBox>
        </div>
        
    );
}

export default searchHome;
