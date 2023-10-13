import React from "react";
import { Button, Modal } from "../../common";
import { productStatus } from "../../../constants";

const StatusUpdateModal = ({ onClose, product, onUpdate }) => {
  return (
    <Modal onClose={onClose} className="status-modal">
      <h1>Missing product</h1>
      <p>Is "{product?.product_name?.substring(0, 7)} ..." urgent?</p>
      <div className="status-btn-wrapper">
        <Button
          variant={"outlined"}
          text="No"
          className="status-btn"
          onClick={() =>
            onUpdate({
              product_id: product?.id,
              status: productStatus.MISSING.value,
            })
          }
        />
        <Button
          variant={"filled"}
          text="Yes"
          className="status-btn"
          onClick={() =>
            onUpdate({
              product_id: product?.id,
              status: productStatus.MISSING_URGENT.value,
            })
          }
        />
      </div>
    </Modal>
  );
};

export default StatusUpdateModal;

