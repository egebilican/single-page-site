import React, { Component } from 'react';
import Bar from './bar';
import BackgroundPic from './backgroundPic';

class LandingPage extends Component {
  render() {
    return (
      <BackgroundPic mainText={'Where will you go next?'}>
        <Bar 
          placeHolder={'Start typing..'}
          buttonText={'GO'}
          />
      </BackgroundPic>
    );
  }
}

export default LandingPage;