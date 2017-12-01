import React, { Component } from 'react';
import Bar from './bar';
import BackgroundPic from './backgroundPic';

class LandingPage extends Component {
  render() {
    return (
      <BackgroundPic>
        <Bar 
          placeHolder={'Start typing..'}
          buttonText={'GO'}
          />
      </BackgroundPic>
    );
  }
}

export default LandingPage;