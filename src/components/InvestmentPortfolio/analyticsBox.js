
import { MDBCol, MDBRow} from 'mdb-react-ui-kit'
import React from 'react'
import "../../stylesheets/css/profile.css"
import revenueIcon from "../../assets/icon/revenueIconWhite.png"
import investmentIcon from "../../assets/icon/investmenticonWhite.png"
import donationIcon from "../../assets/icon/donationIconWhite.png"

const analyticsBox = props => {
    if(props.boxPerRow == "4"){
        return (
            <div class="w3-row-padding w3-margin-bottom">
                <div class="w3-quarter">
                    <div style={{width:"200px", height:"150px"}} class="w3-container w3-red w3-padding-16">
                        <div class="w3-left"><img id="analytics-box-icon" src={donationIcon}/></div>
                        <div class="w3-right">
                            <h3>10</h3>
                        </div>
                        <div class="w3-clear"></div>
                        <h4>N° Donations</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div style={{width:"200px", height:"150px"}} class="w3-container w3-blue w3-padding-16">
                        <div class="w3-left"><img id="analytics-box-icon" src={investmentIcon}/></div>
                        <div class="w3-right">
                            <h3>15</h3>
                        </div>
                        <div class="w3-clear"></div>
                        <h4>N° Investment</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div style={{width:"200px", height:"150px"}} class="w3-container w3-teal w3-padding-16">
                        <div class="w3-left"><img id="analytics-box-icon" src={revenueIcon}/></div>
                        <div class="w3-right">
                            <h3>$23,000</h3>
                        </div>
                        <div class="w3-clear"></div>
                        <h4>Revenue</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div style={{width:"200px", height:"150px"}} class="w3-container w3-orange w3-text-white w3-padding-16">
                        <div class="w3-left"><i id="analytics-box-icon" class="fa fa-users w3-xxxlarge"></i></div>
                        <div class="w3-right">
                            <h3>50%</h3>
                        </div>
                        <div class="w3-clear"></div>
                        <h4>Investor Score</h4>
                    </div>
                </div>
            </div>
    )}
    else if (props.boxPerRow=="2"){
        return(
            <div style={{display:"flex", flexDirection:"column"}}>
                <div id="mdb-col-analytics-box">
                    <div id="mdb-row-analytics-box">

                        <div id="info-boxes" class="w3-container w3-red w3-padding-16">
                            <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>52</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Donations</h4>
                        </div>


                        <div id="info-boxes" class="w3-container w3-blue w3-padding-16">
                            <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>99</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Investment</h4>
                        </div>

                    </div>
                    <div id="mdb-row-analytics-box">

                        <div id="info-boxes" class="w3-container w3-teal w3-padding-16">
                            <div class="w3-left"><i class="fa fa-share-alt w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>23</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Revenue</h4>
                        </div>


                        <div id="info-boxes" class="w3-container w3-orange w3-text-white w3-padding-16">
                            <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
                            <div class="w3-right">
                                <h3>50</h3>
                            </div>
                            <div class="w3-clear"></div>
                            <h4>Investor Score</h4>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
        
}

export default analyticsBox

