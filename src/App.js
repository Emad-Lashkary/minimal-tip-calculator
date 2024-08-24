import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="header">Tip calculator</header>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const totalTipPercentage = (myTip + friendTip) / 2 / 100;
  const totalTip = totalTipPercentage * bill;
  const totalPrice = bill + totalTip;

  function handleReset() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
        margin: "0 auto",
        maxWidth: "480px",
        border: "solid 1px",
        gap: "5px",
        backgroundColor: "white",
      }}
    >
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage Tip={myTip} onSetTip={setMyTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage Tip={friendTip} onSetTip={setFriendTip}>
        and how your friend service ?
      </SelectPercentage>
      <OutPut bill={bill} totalTip={totalTip} totalPrice={totalPrice} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="input">
      <label>How much was the bill</label>
      <input
        type="text"
        placeholder="bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, tip, onSetTip }) {
  return (
    <div className="input">
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (no tip)</option>
        <option value="5">That was Good (5%)</option>
        <option value="10">That was Nice (10%)</option>
        <option value="20">That was Amazing(20%)</option>
      </select>
    </div>
  );
}
function OutPut({ totalPrice, bill, totalTip }) {
  return (
    <h3>
      You Pay {totalPrice}$ ({bill}$ + {totalTip}$ tip)
    </h3>
  );
}

function Reset({ handleReset }) {
  return (
    <button className="button" onClick={handleReset}>
      Reset
    </button>
  );
}
