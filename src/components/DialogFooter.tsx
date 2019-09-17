import React, { FC } from "react";
import Button from "./Button";
import LightButton from "./LightButton";

const DialogFooter: FC<{
  onPrev?: Function;
  onNext?: Function;
  disabled?: boolean;
}> = ({ onPrev = () => null, onNext = () => null, disabled = false }) => (
  <div
    style={{
      background: "var(--main-background)",
      padding: "16px"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        opacity: disabled ? 0.5 : 1
      }}
    >
      <LightButton onClick={() => onPrev()}>← Back</LightButton>
      <Button onClick={() => onNext()}>Next →</Button>
    </div>
  </div>
);

export default DialogFooter;
