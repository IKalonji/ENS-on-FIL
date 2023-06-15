// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CircularProgress from '@mui/material/CircularProgress';

// import ConnectENS from './ConnectENS';
// import SendFIL from './SendFIL';
// import AllStepsDone from './AllStepsDone';
// import { StateSingleton } from '../AppState/state.store';

// const steps = ['Connect to ENS', 'Send FIL', 'Done'];

// class StepperComponent extends Component {
//   state = {
//     activeStep: 0,
//     isConnectedToMetaMask: false,
//     loading: false,
//   };

//   handleConnectMetaMask = async () => {
//     const singletonInstance = new StateSingleton();
//     const isConnected = await singletonInstance.connectToMetaMask();

//     if (isConnected) {
//       this.setState({
//         isConnectedToMetaMask: true,
//         activeStep: 1,
//       });
//     }
//   };

//   handleNext = () => {
//     const { activeStep } = this.state;

//     if (activeStep === 1) {
//       this.setState({ loading: true });
//       setTimeout(() => {
//         this.setState({ loading: false, activeStep: activeStep + 1 });
//       }, 10000);
//     } else {
//       this.setState((prevState) => ({
//         activeStep: prevState.activeStep + 1,
//       }));
//     }
//   };

//   renderStepContent = (step) => {
//     const { loading } = this.state;

//     const renderLoading = (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
//         <CircularProgress size={60} thickness={5} />
//         <Box sx={{ ml: 2 }}>
//           <Typography variant="body1">Loading: 0%</Typography>
//         </Box>
//       </Box>
//     );

//     switch (step) {
//       case 0:
//         return loading ? renderLoading : <ConnectENS handleConnectMetaMask={this.handleConnectMetaMask} />;
//       case 1:
//         return loading ? renderLoading : <SendFIL />;
//       case 2:
//         return <AllStepsDone />;
//       default:
//         return null;
//     }
//   };

//   render() {
//     const { activeStep, isConnectedToMetaMask } = this.state;

//     return (
//       <Box sx={{ width: '100%', padding: 3 }}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map((label, index) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         {this.renderStepContent(activeStep)}

//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//           {activeStep === 0 && !isConnectedToMetaMask && (
//             <Button variant="contained" color="primary" onClick={this.handleConnectMetaMask}>
//               Connect MetaMask
//             </Button>
//           )}

//           {activeStep !== 0 && (
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={this.handleNext}
//               disabled={activeStep === steps.length - 1}
//             >
//               Finished
//             </Button>
//           )}
//         </Box>
//       </Box>
//     );
//   }
// }

// export default StepperComponent;


import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import ConnectENS from './ConnectENS';
import SendFIL from './SendFIL';
import AllStepsDone from './AllStepsDone';
import { StateSingleton } from '../AppState/state.store';

const steps = ['Connect to ENS', 'Send FIL', 'Done'];

class StepperComponent extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      isConnectedToMetaMask: false,
      loading: false, // Added loading state
    };
  }

  handleConnectMetaMask = async () => {
    const singletonInstance = new StateSingleton();
    const isConnected = await singletonInstance.connectToMetaMask();

    if (isConnected) {
      this.setState({
        isConnectedToMetaMask: true,
        activeStep: 1, // Move to step two
      });
    }
  };

  handleNextWithLoader = () => {
    this.setState({ loading: true }); // Start the loader

    // Simulate a 10-second delay before moving to the next step
    setTimeout(() => {
      this.setState((prevState) => ({
        activeStep: prevState.activeStep + 1,
        loading: false, // Stop the loader
      }));
    }, 10000);
  };

  handleNext = () => {
    this.handleNextWithLoader();
  };

  renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ConnectENS handleConnectMetaMask={this.handleConnectMetaMask} />;
      case 1:
        return <SendFIL />;
      case 2:
        return <AllStepsDone />;
      default:
        return null;
    }
  };

  render() {
    const { activeStep, isConnectedToMetaMask, loading } = this.state;

    return (
      <Box sx={{ width: '100%', padding: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {loading ? ( // Display the loader and progress label if loading is true
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
            <CircularProgress size={60} thickness={5} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1">
                Loading: {Math.round((activeStep / (steps.length - 1)) * 100)}%
              </Typography>
            </Box>
          </Box>
        ) : (
          // Render the step content
          this.renderStepContent(activeStep)
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {activeStep === 0 && !isConnectedToMetaMask && (
            <Button variant="contained" color="primary" onClick={this.handleConnectMetaMask}>
              Connect MetaMask
            </Button>
          )}

          {activeStep !== 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    );
  }
}

export default StepperComponent;
