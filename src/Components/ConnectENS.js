import React, { Component } from 'react'
import Typography from '@mui/material/Typography';

// import Connect from './Connect';

import MainButton from './Buttons';

export default class ConnectENS extends Component {
  render() {
    return (
      <div style={{padding: 5}}>
          <Typography align='center' variant='h3' component={"h2"}>
            Connect ENS
          </Typography>
          <br/><br/><br/>
      </div>
    )
  }
}
