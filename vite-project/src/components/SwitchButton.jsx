import React, { useState } from "react";
import './switch.css'; // Stil dosyası

const SwitchButton = () => {
  const [switchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="customSwitch"
        className="switchCustom"
        checked={switchOn}
        onChange={handleSwitchChange}
      />
      <label htmlFor="customSwitch" className="switchContainer">
        <div>Monthly</div>
        <div>Yearly</div>
      </label>
    </div>
  );
};

export default SwitchButton;
