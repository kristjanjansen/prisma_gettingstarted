import React, { FC } from "react";

const CardButton: FC<{
  title?: any;
  subtitle?: any;
  icon?: any;
  children?: any;
  selected?: boolean;
  onClick?: Function;
}> = ({
  title = null,
  subtitle = null,
  icon = null,
  children = null,
  selected = false,
  onClick = () => null
}) => (
  <div
    style={{
      borderRadius: "6px",
      boxShadow: "var(--shadow-color) 0px 2px var(--shadow-blur)",
      height: "100%",
      display: "flex",
      padding: "16px",
      border: `2px solid ${selected ? "var(--blue-500)" : "white"}`,
      backgroundColor: selected ? "var(--blue-100)" : "white"
    }}
    onClick={() => onClick()}
  >
    {icon && <div style={{ marginRight: "16px" }}>{icon}</div>}
    <div>
      <div style={{}}>{title}</div>
      <div
        style={{
          fontSize: "var(--font-size-medium)",
          opacity: 0.5
        }}
      >
        {subtitle}
      </div>
    </div>
  </div>
);

export default CardButton;