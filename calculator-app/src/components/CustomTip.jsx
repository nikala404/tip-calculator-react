import { useState } from "react";

export default function CustomTip({ onCustomTipChange, clickOnCustom }) {
  const [customTip, setCustomTip] = useState();
  function handleChange(e) {
    const value = e.target.value;
    setCustomTip(value);
    onCustomTipChange(value);
  }
  return (
    <>
      <div id="custom-tip">
        <input
          type="text"
          id="inputs"
          value={customTip}
          placeholder="Custom"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
