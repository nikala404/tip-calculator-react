import { useState } from "react";
import "./App.css";
import MoneyInput from "./components/MoneyInput.jsx";
import TipArea from "./components/TipArea.jsx";
import PeopleArea from "./components/PeopleArea.jsx";
import RightSideSpan from "./components/RightSideSpan.jsx";
import CustomTip from "./components/CustomTip.jsx";

function App() {
  const initialTipState = null;
  const initialMoneyState = 0.0;
  const initialPersonState = 0;
  const initialCustomTipState = null;

  const [tip, setCurrentTip] = useState(initialTipState);
  const [money, setMoney] = useState(initialMoneyState);
  const [person, setPerson] = useState(initialPersonState);
  const [customTip, setCustomTip] = useState(initialCustomTipState);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setCurrentTip(initialTipState);
    setMoney(initialMoneyState);
    setPerson(initialPersonState);
    setCustomTip(initialCustomTipState);
    window.location.reload();

    setClicked(!clicked);
  }

  function handleCustomTip(value) {
    setCustomTip(value);
  }

  function handlePersonChange(value) {
    setPerson(value);
  }

  function handleMoneyChange(value) {
    setMoney(value);
  }

  function handleTipClick(children) {
    setCurrentTip(children);
  }

  const tips = [5, 10, 15, 25, 50];
  const calculateTipTotal =
    customTip > 0 ? (money / 100) * customTip : (money / 100) * tip;

  const roundedTipTotal = parseFloat(calculateTipTotal.toFixed(3));
  const calculateTipPerPerson = calculateTipTotal / person;
  const roundedTipPerPerson = parseFloat(calculateTipPerPerson.toFixed(3));

  return (
    <>
      <main>
        <div id="parent-div">
          <div id="container">
            <div id="left-side-div">
              <MoneyInput onMoneyChange={handleMoneyChange} />

              <div id="tip-area">
                <p>Select Tip %</p>
                <div id="tip-cards">
                  {tips.map((children) => (
                    <TipArea
                      children={children}
                      handleTipClick={handleTipClick}
                      currentTip={tip}
                      key={children}
                    />
                  ))}

                  <CustomTip
                    onCustomTipChange={(value) => {
                      handleCustomTip(value);
                    }}
                  />
                </div>
              </div>

              <PeopleArea onPersonChange={handlePersonChange} />
            </div>
            <div id="right-side-div">
              <div id="tip-amount">
                <RightSideSpan
                  id={"div-tip-amount"}
                  children={"Tip Amount"}
                  claculatedTip={roundedTipTotal + "$"}
                />

                <RightSideSpan
                  id={"div-total-amount"}
                  children={"Total"}
                  claculatedTip={roundedTipPerPerson + "$"}
                />
              </div>
              <button onClick={handleClick}>RESET</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
