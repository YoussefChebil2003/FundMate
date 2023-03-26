import React from "react";
import '../../stylesheets/css/search-page.css'

const searchBox = () => {
    return (
    <div class='container mt-4'>
        <div class='row d-flex justify-content-center'>
            <div class='col-md-9'>
            <div class='card p-4 mt-3'>
                <h3 class='heading mt-5 text-center'>Hi! How can we help You?</h3>
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
                <div class='row mt-4 g-1 px-4 mb-5'>
                {' '}
                <div class='col-md-2'>
                    {' '}
                    <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                    <img src='https://i.imgur.com/Mb8kaPV.png' width='50' />{' '}
                    <div class='text-center mg-text'>
                        {' '}
                        <span class='mg-text'>Account</span>{' '}
                    </div>{' '}
                    </div>{' '}
                </div>{' '}
                <div class='col-md-2'>
                    {' '}
                    <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                    <img src='https://i.imgur.com/ueLEPGq.png' width='50' />{' '}
                    <div class='text-center mg-text'>
                        {' '}
                        <span class='mg-text'>Payments</span>{' '}
                    </div>{' '}
                    </div>{' '}
                </div>{' '}
                <div class='col-md-2'>
                    {' '}
                    <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                    <img src='https://i.imgur.com/tmqv0Eq.png' width='50' />{' '}
                    <div class='text-center mg-text'>
                        {' '}
                        <span class='mg-text'>Delivery</span>{' '}
                    </div>{' '}
                    </div>{' '}
                </div>{' '}
                <div class='col-md-2'>
                    {' '}
                    <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                    <img src='https://i.imgur.com/D0Sm15i.png' width='50' />{' '}
                    <div class='text-center mg-text'>
                        {' '}
                        <span class='mg-text'>Product</span>{' '}
                    </div>{' '}
                    </div>{' '}
                </div>{' '}
                <div class='col-md-2'>
                    {' '}
                    <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                    <img src='https://i.imgur.com/Z7BJ8Po.png' width='50' />{' '}
                    <div class='text-center mg-text'>
                        {' '}
                        <span class='mg-text'>Return</span>{' '}
                    </div>{' '}
                    </div>{' '}
                </div>{' '}
                <div class='col-md-2'>
                    {' '}
                    <div class='card-inner p-3 d-flex flex-column align-items-center'>
                    {' '}
                    <img src='https://i.imgur.com/YLsQrn3.png' width='50' />{' '}
                    <div class='text-center mg-text'>
                        {' '}
                        <span class='mg-text'>Guarantee</span>{' '}
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