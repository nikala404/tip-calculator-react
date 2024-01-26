import { useState } from "react";

export default function TipArea({
  children,
  handleTipClick,
  currentTip,
  onTipChange,
  submitted,
}) {
  const [tip, setTip] = useState();

  function handleTipChange(e) {
    const value = e.target.valueAsNumber;
    setTip(value);
    onTipChange(value);
  }

  return (
    <div id="tip-cards">
      <div
        onClick={() => {
          handleTipClick(currentTip === children ? null : children);
        }}
        className="tip-card"
        style={{
          backgroundColor: currentTip === children ? "#26C2AE" : undefined,
          cursor: "pointer",
        }}
      >
        {children + "%"}
      </div>
    </div>
  );
}
