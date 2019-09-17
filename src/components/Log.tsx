import React, { FC, useState, useEffect, useRef } from "react";

const Log: FC<{ items?: any[] }> = ({ items = [] }) => {
  let [open, setOpen] = useState(false);
  let log = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (log.current !== null) {
      log.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  }, [items]);

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: "inset var(--shadow-color) 0px 2px var(--shadow-blur)",
        overflow: "scroll",
        opacity: 0.9,
        height: open ? "200px" : "40px",
        cursor: "pointer",
        backgroundColor: "var(--blue-900)",
        fontFamily: "var(--font-family--code)",
        color: "var(--blue-100)",
        fontSize: "var(--font-size-small)",
        whiteSpace: "pre-wrap",
        padding: "0 12px"
      }}
      onClick={() => setOpen(!open)}
    >
      {["", ...items].join("\n")}
      <div ref={log} style={{ height: "12px" }}></div>
    </div>
  );
};

export default Log;
