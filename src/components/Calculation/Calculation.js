import React, { useContext } from "react";
import { ContextApi } from "../../App";

const Calculation = () => {
  //--useContextApi --//
  const [playerAdd] = useContext(ContextApi);

  //--Total Players Ouction Cost Calculation --//
  const totalPlayerOctionCost = playerAdd.reduce((totalCost, element) => {
    const number = parseInt(element.salary);
    const totalSalary = totalCost + number;
    return totalSalary;
  }, 0);

  // --Budget Calculation --//
  const maxBudget = 20;
  let moneyLeft = maxBudget - totalPlayerOctionCost;
  let budgetMessage = "";
  if (moneyLeft >= 0) {
    budgetMessage = "Continue Bying!";
  } else {
    budgetMessage = "Opps!Your Budget is Over!";
  }
  return (
    <>
      <div className="player-oction" style={{ textAlign: "center" }}>
        <p>Total Player Added : {playerAdd.length}</p>
        <p>Total Budget : {maxBudget} Cores</p>
        <p>Total Player Buying Prize : {totalPlayerOctionCost}</p>
        <hr />
        <p>Money Left : {moneyLeft} Cores</p>
        <p style={{ fontSize: "1.5rem", color: "navy" }}>{budgetMessage}</p>
      </div>
    </>
  );
};

export default Calculation;
