import React, { Component } from 'react';
import LandingPage from './components/landingPage'
import TopDestinations from './components/topDestinations'
import BeforeYouLeave from './components/beforeYouLeave';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div style={{padding:0, margin:0, display:'flex', flexDirection:'column', }}>
      <LandingPage />
      <TopDestinations />
      <BeforeYouLeave />     
      <Footer />
      </div>
    );
  }
}

export default App;
