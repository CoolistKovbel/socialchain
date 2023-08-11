"use client"

import React, { useState } from 'react';
import Web3 from 'web3';

const SignInPage = () => {
    console.log(Web3)
    const [accountAddress, setAccountAddress] = useState<string | null>(null);
    
    const connectToMetamask = async () => {
        try {
          if (typeof window.ethereum !== 'undefined') {
            const ethereum = window.ethereum;
            const web3 = new Web3(ethereum);
    
            // Request account access
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    
            if (accounts.length > 0) {
              setAccountAddress(accounts[0]);
              console.log(accounts[0])
            }
          } else {
            console.error('MetaMask is not available.');
          }
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      };

    return (
        <div>
            <h2>Welcome back...</h2>
            <div>
                <button onClick={connectToMetamask }>Metamask Sign-In</button>
            </div>
            <div>
                <h3>Sign In</h3>
                <form>
                    <label htmlFor="email">
                        <span>email: </span>
                        <input type="email" placeholder="Enter Email" id="email" />
                        <p>remeber username</p>
                    </label>
                    <label htmlFor="password">
                        <span>password: </span>
                        <input type="password" placeholder="password" id="password" />
                    </label>
                    <button>Sign In</button>
                </form>
            </div>

        </div>
    )
}

export default SignInPage