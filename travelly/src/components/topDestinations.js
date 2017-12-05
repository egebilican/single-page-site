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
              picUrl="https://www.gapyear.com/images/content/11.07.18-bcp_ft_australia-3_17191420.jpg"
              header="AUSTRALIA"
              price='$1095'
            >
              Become inspired to travel to Australia. Discover fantastic things to do & places to go.
            </Box>
            <Box
              picUrl="https://www.nationalgeographic.com/content/dam/science/photos/000/247/24713.jpg"
              header="ANCIENT SOUTH AMERICA"
              price='$1295'
              
            >
            Become inspired to travel to South America. Discover fantastic things to do & places to go.
            
            </Box>
            <Box
              picUrl="https://ww5.cityofpasadena.net/economicdevelopment/wp-content/uploads/sites/2/2016/04/pasadena-sunset.jpg"
              header="MODERN NORTH AMERICA"
              price='$695'
              
            >
            Become inspired to travel to North America. Discover fantastic things to do & places to go.
            
            </Box>
            <Box
              picUrl="http://nec-fotografie.de/wp-content/uploads/2016/01/hamburg-skyline-panorma-logo.jpg"
              header="CLASSIC EUROPE"
              price='$295'
              
            >
            Become inspired to travel to Europe. Discover fantastic things to do & places to go.
            
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
