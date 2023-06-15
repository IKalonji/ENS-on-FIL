// import React, { Component } from 'react'

// import { StateSingleton } from '../AppState/state.store'
// import MainButton from './Buttons'

// export default class Connect extends Component {

//   render() {
//     const ConnectMetamask = StateSingleton.connectToMetaMask()
//     return (
//       <div>

//         <MainButton Variant={"contained"} ButtonIsClicked={ConnectMetamask} buttonText={"Connect metamask"}/>

//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import { StateSingleton } from '../AppState/state.store';
import MainButton from './Buttons';

export default class Connect extends Component {
  handleConnectMetamask = async () => {
    const singletonInstance = new StateSingleton();
    await singletonInstance.connectToMetaMask();
    // Additional logic after connecting to MetaMask
  };

  render() {
    return (
      <div>
        <MainButton
          variant="contained"
          ButtonIsClicked={this.handleConnectMetamask}
          buttonText="Connect metamask"
        />
      </div>
    );
  }
}
