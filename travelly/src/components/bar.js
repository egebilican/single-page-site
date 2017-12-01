import React from 'react';

const Bar = props => {
    return (
      <div style={styles.containerStyle}>
        <form style={{ display: 'flex', flex:1 ,maxWidth: '500px', height:'40px'}}>
          <input 
            style={styles.inputStyle} 
            placeholder={props.placeHolder}
            />
          <button style={styles.buttonStyle}>
            {props.buttonText}
          </button>
        </form>
      </div>
    )
  }


const styles = {
  containerStyle: {
    padding: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row'    
  },
  inputStyle: {
    flex: 10,
  },
  buttonStyle: {
    flex: 4,
    backgroundColor: 'rgb(259,79,50)',
    border: '0px',
    color: 'rgb(255,255,255)',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: 600
    
  }
};

export default Bar;
