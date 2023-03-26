import SearchBox from '../components/search-project-page/searchBox';
import '../stylesheets/css/search-page.css'
import React from 'react';

function searchHome() {
    return (
        <div className='search-page'>
            <SearchBox></SearchBox>
        </div>
        
    );
}

export default searchHome;
