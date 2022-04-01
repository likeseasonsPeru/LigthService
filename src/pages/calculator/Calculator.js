import React from "react";
import { Calc as CALCULATOR } from "../../components/calc";
import { navbar as NAV } from "../../components/navbar";
import { Receipt } from "../../components/receipt";

const Calculator = () => {
  return (
    <>
      <NAV />
      <div className="container py-3">
        <CALCULATOR />
        <Receipt />
      </div>
    </>
  );
};

export default Calculator;
