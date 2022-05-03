import React from "react";

const SidebarOption = ({ text, Icon, active }) =>{
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;