import React from "react";
import '../../stylesheets/css/search-page.css'
import educationIcon from "../../assets/icon/education.png"
import technologyIcon from "../../assets/icon/technology.png"
import healthcareIcon from "../../assets/icon/healthcare.png"
import financeIcon from "../../assets/icon/finance icon.png"
import agricultureIcon from "../../assets/icon/agriculture.png"

const searchBox = () => {
    return (
    <div id="search-container" class='container mt-4'>
        <div class='row d-flex justify-content-center'>
            <div class='col-md-9'>
                <div class='card p-4 mt-3'>
                    <h3 class='heading mt-5 text-center'>Search For Businesses</h3>
                    <div class='d-flex justify-content-center px-5'>
                        <div class='search'>
                                <input
                                type='text'
                                class='search-input'
                                placeholder='Search...'
                                name=''
                                />
                                <a href='#' class='search-icon'>
                                <i class='fa fa-search'></i>
                                </a>
                        </div>
                    </div>{' '}
                <div id="category-icons-row" class='row mt-4 g-1 px-4 mb-5'>
                    {' '}
                    <div class='col-md-2'>
                    {' '}
                        <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                            <img src={technologyIcon} width='50' />{' '}
                            <div class='text-center mg-text'>
                                <span class='mg-text'>Technology</span>{' '}
                            </div>
                        </div>
                    </div>{' '}
                    <div class='col-md-2'>
                        {' '}
                        <div class='card-inner p-3 d-flex flex-column align-items-center'>
                        {' '}
                        <img src={healthcareIcon} width='50' />{' '}
                        <div class='text-center mg-text'>
                            {' '}
                            <span class='mg-text'>Health Care</span>{' '}
                        </div>{' '}
                        </div>{' '}
                    </div>{' '}
                    <div class='col-md-2'>
                        {' '}
                        <div class='card-inner p-3 d-flex flex-column align-items-center'>
                        {' '}
                        <img src={financeIcon} width='50' />{' '}
                        <div class='text-center mg-text'>
                            {' '}
                            <span class='mg-text'>Finance</span>{' '}
                        </div>{' '}
                        </div>{' '}
                    </div>{' '}
                    <div class='col-md-2'>
                        {' '}
                        <div class='card-inner p-3 d-flex flex-column align-items-center'>
                        {' '}
                        <img src={educationIcon} width='50' />{' '}
                        <div class='text-center mg-text'>
                            {' '}
                            <span class='mg-text'>Education</span>{' '}
                        </div>{' '}
                        </div>{' '}
                    </div>{' '}
                    {/* <div class='col-md-2'>
                        {' '}
                        <div class='card-inner p-3 d-flex flex-column align-items-center'>
                        {' '}
                        <img src='https://i.imgur.com/Z7BJ8Po.png' width='50' />{' '}
                        <div class='text-center mg-text'>
                            {' '}
                            <span class='mg-text'>Construction</span>{' '}
                        </div>{' '}
                        </div>{' '}
                    </div>{' '} */}
                    <div class='col-md-2'>
                        {' '}
                        <div class='card-inner p-3 d-flex flex-column align-items-center'>
                        {' '}
                        <img src={agricultureIcon} width='50' />{' '}
                        <div class='text-center mg-text'>
                            {' '}
                            <span class='mg-text'>Agriculture</span>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
                </div>{' '}
            </div>{' '}
            </div>{' '}
        </div>{' '}
    </div>
    );
}

export default searchBox;