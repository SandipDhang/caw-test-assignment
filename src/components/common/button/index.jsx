import React from "react";

const Button = ({ text, onClick, variant, className }) => {
  switch (variant) {
    case "filled":
      return (
        <button className={`r-btn filled ${className || ""}`} onClick={onClick}>
          {text}
        </button>
      );

    case "no-style":
      return (
        <button
          className={`r-btn no-style ${className || ""}`}
          onClick={onClick}
        >
          {text}
        </button>
      );

    default:
      return (
        <button
          className={`r-btn outlined ${className || ""}`}
          onClick={onClick}
        >
          {text}
        </button>
      );
  }
};

export default Button;

