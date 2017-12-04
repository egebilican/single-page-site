import React, { Component } from 'react';
import Box from './box';

class TopDestinations extends Component {
  render() {
    return (
      <div style={styles.bgStyle}>
        <div style={styles.destinatonContainerStyle}>
          <div style={styles.headerStyle}>
            <h3>TOP DESTINATIONS</h3>
            <h4 style={styles.headerDescStyle}>
              Some of the top destinations for your next summer adventure.
            </h4>
          </div>
          <div style={styles.boxContainerStyle}>
            <Box
              picUrl="http://i.hurimg.com/i/hurriyet/75/590x332/55eb48c9f018fbb8f8b74584.jpg"
              header="KIREMITHANE"
              price='$500'
            >
              Koln Kalk sokaklarda penceresiz kaldim, eski okul gangstalardan
              enerjimi aldim.
            </Box>
            <Box
              picUrl="http://d.haberciniz.biz/other/polis-cincinde-cinayet-zanlisi-aradi-ankara-20100302A0203111-01.jpg"
              header="CINCIN"
              price='$600'
              
            >
              Koln Kalk sokaklarda penceresiz kaldim, eski okul gangstalardan
              enerjimi aldim.
            </Box>
            <Box
              picUrl="http://www.cagdasses.com/images/posts/201408/1334_720x400.jpg"
              header="BAGCILAR"
              price='$50'
              
            >
              Koln Kalk sokaklarda penceresiz kaldim, eski okul gangstalardan
              enerjimi aldim.
            </Box>
            <Box
              picUrl="http://i.dailymail.co.uk/i/pix/2013/05/13/article-0-19C3078D000005DC-894_634x378.jpg"
              header="COMPTON"
              price='$350'
              
            >
              Koln Kalk sokaklarda penceresiz kaldim, eski okul gangstalardan
              enerjimi aldim.
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    textSize: 30,
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    paddingTop: '60px',
    color: 'rgb(50,50,50)',
    fontWeight: '500'
  },
  headerDescStyle: {
    fontFamily: 'Open Sans',
    color: 'rgb(139,139,139)',
    fontSize: 15,
    fontWeight: 400
  },
  boxContainerStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  destinatonContainerStyle: {
    maxWidth: '1000px',
    justifyContent: 'center',
    flex: 1
  },
  bgStyle: {
    backgroundColor: 'rgb(238,238,238)',
    width: '100vw',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '70px'
  }
};

export default TopDestinations;
