import './App.css';
import React from 'react';
import SearchBox from './components/search-project-page/searchBox';
import SignUpPage from './pages/signUpPage';
import LaunchCampaign from './pages/launchCampaign';
import MainNavBar from './components/navigation/mainNavbar';
import AboutUs from './pages/aboutUs'
import Analytics from './components/InvestmentPortfolio/analytics';
import HomePage from './pages/homePage/homePage';
import ProjectListBox from './components/search-project-page/project-list-box';


function App() {
  return (
    <React.Fragment>
      <MainNavBar></MainNavBar>
      
      <HomePage></HomePage>
      {/*<Analytics></Analytics>*/}
      {/*<AboutUs></AboutUs>*/}
      {/*<SearchBox></SearchBox>*/}
      {/*<SignUpPage></SignUpPage>*/}
      {/*<LaunchCampaign></LaunchCampaign>*/}
    </React.Fragment>

  );
}

export default App;
