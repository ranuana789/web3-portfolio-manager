import React from "react";
import "../App.css"
import {Input, Select, CryptoLogos} from '@web3uikit/core'

function WalletInputs({ chain, wallet, setChain, setWallet}) {
  return (
    <>
      <div className="header">
        <div className="title">
        <h1>Zapper</h1>
        </div>
        <div className="walletInputs">
            <Input
               id="Wallet"
               label="Wallet Address"
               labelBgColor="rgb(33, 33, 38)"
               value={wallet}
               style={{height: "50px"}}
               onChange={(e) => setWallet(e.target.value)}
            />

            <Select 
              defaultOptionIndex={0}
              id="Chain"
              onChange={(e) => setChain(e.value)}
              options={[
                {
                    id: "eth",
                    label: "Ethereum",
                    value: "0x1",
                    prefix: <CryptoLogos chain ="ethereum"/>
                },
                {
                    id: "matic",
                    label: "Polygon",
                    value: "0x89",
                    prefix: <CryptoLogos chain ="polygon"/>
                },
              ]}
            />

        </div>
      </div>
    </>
  );
}

export default WalletInputs;