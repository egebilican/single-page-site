import React from 'react';

const Box = props => {
  const renderImages = () => {};
  if( props.picUrl) {
  return (
    <div style={styles.boxStyle}>
      <img style={styles.picStyle} src={props.picUrl} alt="destination image" />
      <div style={styles.textOverPic}>{props.price} </div>
      <div style={styles.textStyle}>
        <div style={styles.headerStyle}>{props.header}</div>
        {props.children}
      </div>
    </div>
  )}
  return (
    <div style={styles.boxStyle}>
    <div style={styles.textStyle2}>
      <div style={styles.headerStyle}>{props.header}</div>
      {props.children}
    </div>
  </div>
  )
};

const styles = {
  boxStyle: {
    flexBasis: '240px',
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'Column',
    marginBottom: '20px',
    padding:0,
    zIndex: 0,
    position: 'relative'
    
  },
  textOverPic: {
    position:'absolute',
    right: '15px',
    top: '175px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 12
  },
  picStyle: {
    width: '100%',
    maxWidth: '240px',
    height:'200px',
    flexGrow: 0,
    zIndex: 0

  },
  textStyle: {
    backgroundColor: 'rgb(255,255,255)',
    width: '100%',
    maxWidth: '200px',
    flexGrow: 0,
    minHeight: '100px',
    textAlign: 'left',
    fontFamily: 'Open Sans',
    padding: '20px',
    zIndex: 0
  },
  textStyle2: {
    backgroundColor: 'rgb(255,255,255)',
    width: '100%',
    maxWidth: '200px',
    flexGrow: 0,
    minHeight: '100px',
    textAlign: 'left',
    fontFamily: 'Open Sans',
  },
  headerStyle: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    paddingBottom: '20px',
    fontSize:'14px'
  }
};

export default Box;
