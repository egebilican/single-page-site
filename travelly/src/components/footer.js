import React from 'react';

const Footer = () => {
  return (
    <div style={styles.bgStyle}>
      <div style={styles.footerContainer}>
        Copyright © 2014 Travelly. All Rights Reserved. Designed for Despreneur
        <div style={{display:'flex'}}>
          <div style={styles.buttonStyle}>HOME</div>
          <div style={styles.buttonStyle}>ABOUT</div>          
          <div style={styles.buttonStyle}>BLOG</div>
          <div style={styles.buttonStyle}>PRESS</div>
          <div style={styles.buttonStyle}>CONTACT</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bgStyle: {
    backgroundColor: 'rgb(238,238,238)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70px'
  },
  footerContainer: {
    maxWidth: '1000px',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Open Sans',
    fontSize: 14
  },
  buttonStyle: {
    paddingLeft: 10,
    fontFamily: 'Montserrat',
    fontWeight:700
  }
};

export default Footer;
