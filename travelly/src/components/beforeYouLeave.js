import React, { Component } from 'react';
import Box from './box';
import Bar from './bar';

class BeforeYouLeave extends Component {
  render() {
    return (
      <div style={styles.bgStyle}>
        <div style={styles.innerContainerStyle}>
          <div style={styles.headerStyle}>Before You Leave</div>
          <div style={styles.boxContainerStyle}>
            <Box header="VISA&DOCUMENTS">
              There are some things you should take care of before going to your
              next adventure. We will help you to get required visas and
              documents needed.
            </Box>
            <Box header="ACCOMODATION">
              There are some things you should take care of before going to your
              next adventure. We will help you to get required visas and
              documents needed.
            </Box>
            <Box header="TRANSPORTATION">
              There are some things you should take care of before going to your
              next adventure. We will help you to get required visas and
              documents needed.
            </Box>
          </div>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat',
              fontWeight: '900'
            }}
          >
            GET HOTTEST DEALS TO YOUR INBOX
          </p>
          <Bar placeHolder={'E-mail adress'} buttonText={'Subscribe'} />
        </div>
      </div>
    );
  }
}

const styles = {
  bgStyle: {
    backgroundColor: 'rgb(255,255,255)',
    width: '100vw',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '70px',
    paddingTop: '70px'
  },
  headerStyle: {
    fontFamily: 'Open Sans',
    fontSize: 52,
    fontWeight:300,
    paddingBottom:'70px'


  },
  innerContainerStyle: {
    maxWidth: '1000px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  boxContainerStyle: {
    display: 'flex',
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
};
export default BeforeYouLeave;
