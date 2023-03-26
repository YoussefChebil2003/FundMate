import './App.css';
import React from 'react';
import SearchBox from './components/search-project-page/searchBox';
import SignUpPage from './pages/signUpPage';
import LaunchCampaign from './pages/launchCampaign';
import MainNavBar from './components/navigation/mainNavbar';

function App() {
  return (
    <React.Fragment>
      <MainNavBar></MainNavBar>
      {/*<SearchBox></SearchBox>*/}
      {/*<SignUpPage></SignUpPage>*/}
      {/*<LaunchCampaign></LaunchCampaign>*/}
    </React.Fragment>

  );
}

export default App;
