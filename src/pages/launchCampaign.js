import React from "react";
import CampaignStep1 from "../components/start-campaign/campaignStep1"
import CampaignStep2 from "../components/start-campaign/campaignStep2"
import CampaignStep3 from "../components/start-campaign/campaignStep3"
import CampaignStep4 from "../components/start-campaign/campaignStep4"
import CampaignStep5 from "../components/start-campaign/campaignStep4"
import VerifyingBP from "../components/start-campaign/verifyingBP"
import FinalizeCampaign from "../components/start-campaign/finalizeCampaign"
import MainNavBar from "../components/navigation/mainNavbar";

import "../stylesheets/css/main-navbar.css"

function launchCampaign() {
    return (
        <div className='sign-up-page'>
            <MainNavBar></MainNavBar>
            <CampaignStep1></CampaignStep1>
            {/*<CampaignStep2></CampaignStep2>*/}
            {/*<CampaignStep3></CampaignStep3>*/}
            {/*<CampaignStep4></CampaignStep4>*/}
            {/*<CampaignStep5></CampaignStep5>*/}
            {/*<VerifyinBP></VerifyinBP>*/}
            {/*<FinalizeCampaign></FinalizeCampaign>*/}
        </div>
        
    );
}

export default launchCampaign;
