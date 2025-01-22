import React, { useEffect, useState } from "react";
import "./TechStack.css";

const TechStack = ({ hoverText: initialHoverText, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState("");

  const handleMouseEnter = () => {
    setHoverText(initialHoverText || "");
  };

  const handleMouseLeave = () => {
    setHoverText("");
  };

  return (
    <>
      <div
        className="relative hover-container "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {children}
        <p
          id="hoverText"
          style={{
            position: "absolute",
            top: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            visibility: hoverText ? "visible" : "hidden",
            transition: "all 0.3s ease-in-out",
            textWrap: "nowrap",
            backgroundColor: "black",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "0.875rem",
            fontWeight: "bold",
          }}>
          {hoverText}
        </p>
      </div>
    </>
  );
};

export default TechStack;
