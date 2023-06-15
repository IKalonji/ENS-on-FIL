import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Confetti from 'react-confetti';

export default class AllStepsDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfetti: false
    };
  }

  componentDidMount() {
    this.startConfettiTimer();
  }

  startConfettiTimer() {
    this.setState({ showConfetti: true });
    setTimeout(() => {
      this.setState({ showConfetti: false });
    }, 5000); // Confetti will be shown for 9 seconds
  }

  render() {
    return (
      <div>
        <Typography align="center" variant="h3" component="h2">
          All Steps Done
        </Typography>
        {this.state.showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}
      </div>
    );
  }
}