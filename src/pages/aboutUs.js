import React from "react";
import MainNavBar from "../components/navigation/mainNavbar";
import backgroundImage from "../assets/img/background1.png"
import "../stylesheets/css/homePage/jquery.mCustomScrollbar.min.css";
import "../stylesheets/css/homePage/style.css"
import "../stylesheets/css/homePage/responsive.css"
import "../stylesheets/css/homePage/style.css";
import pcPhoto from "../assets/img/homePage/pc.png"
import banner from "../assets/img/homePage/banner.jpg"
import bann from "../assets/img/homePage/bann_img.png"
import logo from "../assets/img/homePage/logo.png"
import btn from "../assets/img/homePage/btn.png"
import solusan from "../assets/img/homePage/solusan.png"
import phone from "../assets/img/homePage/call.png"
import gmail from "../assets/img/homePage/gmail.png"

import "../stylesheets/css/main-navbar.css";
import "../stylesheets/css/home-page.css";

import { MDBBtn } from "mdb-react-ui-kit";

function launchCampaign() {
    return (
        <div className='home-page'>
            <MainNavBar></MainNavBar>
            <section class="banner_main">
                <div class="container-fluid">
                    <div class="row d_flex">
                        <div class="col-md-7">
                            <div class="text-bg">
                                <div class="padding_lert">
                                    <i><img src={btn} alt="#" /></i>
                                    <h1>More Than a Solution  <br></br>A Catalyst For Change</h1>
                                    <a href="Javascript:void(0)">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 bah">
                            <div class="bann_img">
                                <figure><img src={bann} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end banner*/}
            {/*service*/}
            <div id="services" class="service">
                <div class="container-fluid">
                    <div class="row d_flex">
                        <div class="col-md-5">
                            <div class="service_img">
                                <figure><img src={pcPhoto} alt="#" /></figure>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="titlepage">
                                <h2>Full service digital capbilities From end to end workflow</h2>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</span>
                                <a class="read_more" href="Javascript:void(0)">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end service*/}
            {/*solutions=*/}
            <div class="solutions">
                <div class="container">
                    <div class="row d_flex">
                        <div class="col-md-7">
                            <div class="titlepage">
                                <h2>Solutions for every <br></br>Specific need</h2>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</span>
                                <a class="read_more" href="Javascript:void(0)">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="solutions_img">
                                <figure><img src={solusan} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end solutions*/}
            {/*work*/}
            <div id="work" class="work">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>See More Our Work</h2>
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a istribution of letters, content here', making it look like readable English. Many desktop publishing packages </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="our_work">
                                <figure><img src="images/work1.jpg" alt="#" /></figure>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="our_work">
                                <figure><img src="images/work2.jpg" alt="#" /></figure>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="our_work">
                                <figure><img src="images/work3.jpg" alt="#" /></figure>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="our_work">
                                <figure><img src="images/work4.jpg" alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end work*/}
            {/*footer*/}
            <footer>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="multipurpose">
                                    <h3>Let’s  <br></br>Talk<br></br> Business</h3>
                                </div>
                            </div>
                            <div class="col-md-7 sm_none">
                                <div class="contac_detel">
                                    <ul>
                                        <li><img src={phone} alt="#" />+91 1234567890</li>
                                        <li><a href="Javascript:void(0)"> <img src={gmail} alt="#" />demo@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="multipurpose">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div class="col-md-7 sm_show">
                                <div class="contac_detel">
                                    <ul>
                                        <li><img src={phone} alt="#" />+91 1234567890</li>
                                        <li><a href="Javascript:void(0)"> <img src={gmail} alt="#" />demo@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Copyright 2020 All Right Reserved By<a href="https://html.design/"> Free Html Templates</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default launchCampaign;
