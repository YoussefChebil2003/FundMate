import './App.css';
import React from 'react';
import SearchBox from './components/search-project-page/searchBox';
import SignUpPage from './pages/signUpPage';
import LaunchCampaign from './pages/launchCampaign';
import MainNavBar from './components/navigation/mainNavbar';
import HomePage from './pages/homePage'

function App() {
  return (
    <React.Fragment>
      <MainNavBar></MainNavBar>
      <HomePage></HomePage>
      {/*<SearchBox></SearchBox>*/}
      {/*<SignUpPage></SignUpPage>*/}
      {/*<LaunchCampaign></LaunchCampaign>*/}
    </React.Fragment>

  );
}

export default App;
