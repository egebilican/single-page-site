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
      justifyContent: 'center',
      alignItems: 'strech'
    },
    textStyle: {
      fontSize: 52,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Open Sans',
      flex: 1
    },
    navBarStyle: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Open Sans',
      fontWeight: 300,
      fontSize: 32,
      flex: 2,
      marginTop: '30px',
      marginRight:'30px',
      marginLeft:'30px'      
    },
    barStyle: {
      flex:3
    }
  };

  return (
    <section style={styles.sectionStyle}>
      <div style={styles.navBarStyle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1000px'
          }}
        >
          <div style={{ display: 'flex', color:'white' }}>
            <i class="material-icons" 
              style={{
                fontSize:'36px'
              }}>flight</i>
            travelly
          </div>
          <div>
          <i class="material-icons" style={{color:'white', fontSize: '36px'}}>reorder</i>
          </div>
        </div>
      </div>
      <p style={styles.textStyle}>{props.mainText}</p>
      <div style={styles.barStyle}>
      {props.children}
      </div>
    </section>
  );
};

export default BackgroundPic;
