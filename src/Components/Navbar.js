import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { StateSingleton } from '../AppState/state.store';

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleState: false,
    };
    this.network = "Calibration testnet";
    this.stateSingleton = new StateSingleton();
  }

  handleToggle = () => {
    console.log('clicked');
    const { toggleState } = this.state;
    this.setState({ toggleState: !toggleState });
    this.stateSingleton.setNetworkText(!toggleState);
  };

  render() {
    const { toggleState } = this.state;
    console.log(this.stateSingleton.networkText);
    console.log(toggleState);

    return (
      <AppBar position="static">
        <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant="h6" style={{ flexGrow: 0 }}>
            ENSonFIL
          </Typography>
        </Link>
 
          <span style={{ flexGrow: 3 }}>
            <Typography style={{ flex: 'end' }}>
              {this.stateSingleton.networkText}
              <Switch
                checked={toggleState}
                onChange={this.handleToggle}
                inputProps={{ 'aria-label': 'Toggle Calibration testnet/MainNet' }}
                color="default"
              />
            </Typography>
            <div id='spacer' style={{ width: '10px' }}></div>
          </span>
        </Toolbar>
      </AppBar>
    );
  }
}
