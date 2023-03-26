import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import LaunchCampaign from './pages/launchCampaign';
import SearchHome from './pages/searchHome'
import SignUpPage from './pages/signUpPage';
import ProfilePage from './pages/ProfilePage';

import CampaignStep2 from './components/start-campaign/campaignStep2'
import CampaignStep3 from './components/start-campaign/campaignStep3'
import CampaignStep4 from './components/start-campaign/campaignStep4'
import CampaignStep5 from './components/start-campaign/campaignStep5'
import VerifyingBP from './components/start-campaign/verifyingBP';
import FinalizeCampaign from './components/start-campaign/finalizeCampaign';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/sign-up",
    element: <SignUpPage/>,
  },
  {
    path: "/launch-campaign",
    element: <LaunchCampaign/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },{
    path: "/search",
    element: <SearchHome/>,
  },
  {/*----------------------------- to be changed ----------------------------------*/}
  ,{
    path: "/campaign-step2",
    element: <CampaignStep2/>,
  },
  ,{
    path: "/campaign-step3",
    element: <CampaignStep3/>,
  },
  ,{
    path: "/campaign-step4",
    element: <CampaignStep4/>,
  },
  ,{
    path: "/campaign-step5",
    element: <CampaignStep5/>,
  },
  ,{
    path: "/campaign-step5/verifying",
    element: <VerifyingBP/>,
  },
  ,{
    path: "/campaign-finalization",
    element: <FinalizeCampaign/>,
  },
  
  

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


reportWebVitals();
