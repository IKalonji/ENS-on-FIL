import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

import { QRInfomationModel } from '../Models/QrModel';

import { StateSingleton } from '../AppState/state.store';

export default class SendFIL extends Component {
  render() {
    const stateSingleton = new StateSingleton();
    
    return (
      <div>
        <Typography align="center" variant="h3" component="h2">
          SendFIL
        </Typography>
        <Typography align="center" variant="h6" component="p">
          Send 0.005 FIL to
        </Typography>
        <Typography align="center" variant="h6" component="p">
          F1 Address: {QRInfomationModel}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://filecoin.io/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=https://filecoin.io/&size=200x200"
              alt="QR Code"
            />
          </a>
        </div>
      </div>
    );
  }
}
