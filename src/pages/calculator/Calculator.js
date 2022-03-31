import React from "react";
import { Calc as CALCULATOR } from "../../components/calc";
import { navbar as NAV } from "../../components/navbar";

const Calculator = () => {
  return (
    <>
      <NAV />
      <div className="container py-5">
        <CALCULATOR />
      </div>
    </>
  );
};

export default Calculator;
