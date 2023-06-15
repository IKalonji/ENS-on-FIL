import MetaMaskSDK from '@metamask/sdk';
import { ethers }from 'ethers'

export class StateSingleton{

    ENS = "";
    wallet = "";
    fOneWallet = "";
    network = 0;
    networkText = "Calibration testnet";
    MMSDK = new MetaMaskSDK();
    ethereum = this.MMSDK.getProvider();
    provider = new ethers.BrowserProvider()
    // resolver = this.provider.resolveName("zaden.eth")
    // adress = this.provider.resolveName()
    

    constructor(){
        console.log("resolve: ",this.resolver);
        if (typeof StateSingleton.instance === 'object') {
            console.log("instance returned");
            return StateSingleton.instance;
        }
        StateSingleton.instance = this;

        console.log("instance created");
    }

    getNetworkText() {
        return this.networkText;
    }

    setNetworkText(state) {
        this.networkText = state ? "Filecoin Mainnet" : "Calibration testnet";
        console.log("state in singleton: ", this.networkText);
    }

    async connectToMetaMask() {
        try {
          const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
          alert(`Connected to: ${accounts[0]}`);
          this.walletAddress = accounts[0];
          this.walletConnected = true;
          return true;
        } catch (error) {
          alert("Could not connect to wallet.");
          console.log(error);
          return false;
        }
        
      }
}