//this file will interact with ethrium wallet

import Web3 from "web3";
const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        const provider = new Web3.providers.HttpProvider("http://0.0.00:8545");
        const web3 = new Web3(provider);
        resolve(web3);
      }
    });
  });
};

export default getWeb3;
