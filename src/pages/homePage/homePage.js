import React from 'react';

import MainNavBar from '../../components/navigation/mainNavbar';

import "../../stylesheets/css/home-page.css"
import spiral1 from "../../assets/img/spiral1copy.png"
import spiral2 from "../../assets/img/spiral2copy.png"
import businessSilhouettes from "../../assets/img/businessSilhouettes.png"
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <React.Fragment>
            <div className="welcome-div">
                <img src={spiral1} className='spiral1-img'></img>
                <div className='welcome-content'>
                    <div className='top-welcome'>   
                        <img style={{width: "400px", height: "400px"}} src={businessSilhouettes}></img>
                        <h1>Empowering Entrepreneurs <br></br> & <br></br> Unlocking Innovation</h1>
                    </div>
                    <h4>The Ultimate African Crowdfunding Wesbite. <br></br> For Entrepreneurs, Investors & Donators</h4>
                    <div className='welcome-btns'>
                        <Link to="/search">
                            <button>Marketplace</button>
                        </Link>
                        <Link to="/launch-campaign">
                            <button>Fundraising</button>
                        </Link>
                    </div>
                </div>
                <img src={spiral2} className='spiral2-img'></img>
            </div>
            
            {/*<Analytics></Analytics>*/}
            {/*<HomePage></HomePage>*/}
            {/*<SearchBox></SearchBox>*/}
            {/*<SignUpPage></SignUpPage>*/}
            {/*<LaunchCampaign></LaunchCampaign>*/}
        </React.Fragment>

    );
}

export default HomePage;
