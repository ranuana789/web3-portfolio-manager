import React from "react";
import axios from "axios";
import { Table } from "@web3uikit/core";
import { Reload } from "@web3uikit/icons"



function NativeTokens({ wallet, chain, nativeBalance, setNativeBalance, nativeValue, setNativeValue  }) {
 
   async function getNativeBalance() {
    const response = await axios.get("http://localhost:8080/nativeBalance", {
      params: {
        address: wallet,
        chain: chain,
      },
    });
    console.log(response.data.balance);
    if (response.data.balance && response.data.usd) {
      setNativeBalance((Number(response.data.balance) / 1e18).toFixed(3));
      setNativeValue(((Number(response.data.balance) / 1e18) * Number(response.data.usd)).toFixed(2));
    }
  }

  return (
    <>
      <div className="tabHeading">Native Balance <Reload onClick={getNativeBalance}/></div>
      {
        <Table
            pageSize={1}
            noPagination={true}
            style={{width:"900px"}}
            columnsConfig="300px 300px 250px"
            data={[["Native", nativeBalance, `$${nativeValue}`]]}
            header={[
              <span>Currency</span>,
              <span>Balance</span>,
              <span>Value</span>,
            ]}
        />

      }
    </>
  );
  return (
    <>
      <h1>Fetch Tokens</h1>
      <p>
        <button onClick={getNativeBalance}>Fetch Balance</button>
        <br />
        <span>
          Native Balance: {nativeBalance}, (${nativeValue})
        </span>
      </p>
    </>
  );
}




export default NativeTokens; 
