import React from "react";
import "../style/Icon.css";

function Icon({ OptionIcon }) {
  return (
    <div className="icon">
      {OptionIcon && <OptionIcon fontSize="small"/>}
    </div>
  );
}

export default Icon;
