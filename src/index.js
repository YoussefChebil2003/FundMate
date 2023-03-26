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
  Router,
} from "react-router-dom";

import LaunchCampaign from './pages/launchCampaign';
import SearchHome from './pages/searchHome'
import SignUpPage from './pages/signUpPage';
import ProfilePage from './pages/ProfilePage';

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

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


reportWebVitals();
