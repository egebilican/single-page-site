import React from 'react';

const BackgroundPic = props => {
  const styles = {
    sectionStyle: {
      width: '100vw',
      height: '100vh',
      maxWidth: '100%',
      backgroundImage:
        'url("https://lonelyplanetwp.imgix.net/2016/02/Church-Imerovigli-village-Santorini_CS.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    textStyle: {
      fontSize: 52,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Open Sans'
    }
  };

  return (
    <section style={styles.sectionStyle}>
      <p style={styles.textStyle}>Where will you go next?</p>
      {props.children}
    </section>
  );
};

export default BackgroundPic;
