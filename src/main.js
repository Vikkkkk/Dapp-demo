import React from "react";
import { render } from "react-dom";
import getWeb3 from "./util/getWeb3";

(async function() {
  console.log("getting web3");
  const web3 = await getWeb3();
  console.log(web3);
})();

render(<div>Hello</div>, document.getElementById("root"));
