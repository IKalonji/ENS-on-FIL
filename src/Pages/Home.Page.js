// HomePage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { QRInfomationModel } from '../Models/QrModel';

import { StateSingleton } from '../AppState/state.store';

class HomePage extends Component {
  buttonClicked = () => {
    const stateSingleton = new StateSingleton();
    console.log('button was clicked');
    console.log(stateSingleton.networkText);

    const textFieldValue = document.getElementById('f1-address').value;
    if (textFieldValue === 'zaden' || textFieldValue === 'just testing') {
      stateSingleton.fOneWallet = textFieldValue;

      QRInfomationModel.push(textFieldValue)
      window.location.href = '/ens-link';

    } else {
      alert('F1 Address needed');
      stateSingleton.fOneWallet = textFieldValue;
      console.log("wallet: ", stateSingleton.fOneWallet)
    }

  };
  

  render() {
    return (
      <>
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h1" component="h1" gutterBottom style={{ fontFamily: 'Rockwell' }}>
            ENSonFIL
          </Typography>
          <span style={{ display: 'flex' }}>
            <TextField id="f1-address" label="F1 Address" variant="outlined" fullWidth style={{ flex: '1' }} />
            <div id="spacer" style={{ width: '10px' }}></div>
            <Button variant="contained" onClick={this.buttonClicked}>
              Get started
            </Button>
          </span>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Line of text appropriate for an Ethereum name service on Filecoin.
          </Typography>
        </Container>
      </>
    );
  }
}

export default HomePage;
