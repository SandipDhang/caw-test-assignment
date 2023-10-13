import React from "react";
import Button from "../button";
import { XIcon } from "../icons";

const Modal = ({ children, onClose, className }) => {
  return (
    <div className={`r-modal ${className || ""}`}>
      <div className="modal-content">
        <Button
          variant="no-style"
          text={<XIcon />}
          className="close-btn"
          onClick={onClose}
        />

        {children}
      </div>
    </div>
  );
};

export default Modal;

