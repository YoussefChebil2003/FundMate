import React from "react";
import CampaignStep1 from "../components/start-campaign/campaignStep1"
import CampaignStep2 from "../components/start-campaign/campaignStep2"
import CampaignStep3 from "../components/start-campaign/campaignStep3"
import CampaignStep4 from "../components/start-campaign/campaignStep4Donators"
import CampaignStep5 from "../components/start-campaign/campaignStep4Donators"
import VerifyingBP from "../components/start-campaign/verifyingBP"
import FinalizeCampaign from "../components/start-campaign/finalizeCampaign"
import MainNavBar from "../components/navigation/mainNavbar";

import "../stylesheets/css/main-navbar.css"
import spiral1 from "../assets/img/spiral1copy.png"
import spiral2 from "../assets/img/spiral2copy.png"
import "../stylesheets/css/campaign.css"

function launchCampaign() {
    return (
        <>
            <MainNavBar></MainNavBar>
            <div className='launch-campaign-page'>
                <img src={spiral1} className='spiral1-img'></img>
                <CampaignStep1></CampaignStep1>
                <img src={spiral2} className='spiral2-img'></img>
                {/*<CampaignStep2></CampaignStep2>*/}
                {/*<CampaignStep3></CampaignStep3>*/}
                {/*<CampaignStep4></CampaignStep4>*/}
                {/*<CampaignStep5></CampaignStep5>*/}
                {/*<VerifyinBP></VerifyinBP>*/}
                {/*<FinalizeCampaign></FinalizeCampaign>*/}
            </div>
        </>
        
        
    );
}

export default launchCampaign;
