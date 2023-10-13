import React, { Fragment, useEffect, useState } from "react";
import { Button, DashIcon, Modal, PlusIcon } from "../../common";
import { productStatus, productUpdatereason } from "../../../constants";

const EditModal = ({ onClose, product, onUpdate }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    setProductData({ ...product });
  }, [product]);

  const getStatus = () => {
    console.log({ productData });

    if (
      product?.quantity !== productData?.quantity &&
      product?.price !== productData?.price
    ) {
      return productStatus.PRICE_QUANTITY_UPDATED.value;
    }
    if (product?.quantity !== productData?.quantity) {
      return productStatus.QUANTITY_UPDATED.value;
    }
    if (product?.price !== productData?.price) {
      return productStatus.PRICE_UPDATED.value;
    }
  };

  const updateQuantity = (type) => {
    if (type === "increase") {
      setProductData({ ...productData, quantity: productData?.quantity + 1 });
    }
    if (type === "decrease") {
      setProductData({
        ...product,
        quantity: Math.max(0, productData?.quantity - 1),
      });
    }
  };

  return (
    <Modal onClose={onClose} className="edit-modal">
      <Fragment>
        <h1 className="product-name">{productData?.product_name}</h1>
        <p className="product-brand">{productData?.brand}</p>

        <div className="product-details">
          <div className="product-img">
            <img src={product?.imgurl} alt="" />
          </div>
          <div className="product-editable-info">
            <div className="editable-info">
              <p>Price ($)</p>
              <div className="info-input">
                <input
                  className="editable-input"
                  value={productData?.price}
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
                <span>/ 6 * 1LB</span>
              </div>
            </div>
            <div className="editable-info">
              <p>Quantity</p>
              <div className="info-input">
                <Button
                  className={"info-input-control-btn"}
                  text={<PlusIcon />}
                  variant={"filled"}
                  onClick={() => updateQuantity("increase")}
                />
                <input
                  className="editable-input"
                  value={productData?.quantity}
                  onChange={(e) =>
                    setProductData({ ...productData, quantity: e.target.value })
                  }
                />
                <Button
                  className={"info-input-control-btn"}
                  text={<DashIcon />}
                  variant={"filled"}
                  onClick={() => updateQuantity("decrease")}
                />
                <span>x 6 * 1LB</span>
              </div>
            </div>
            <div className="editable-info">
              <p>Total</p>
              <h3>${productData?.price * productData?.quantity}</h3>
            </div>
          </div>
        </div>

        <div className="product-reason">
          <h1>
            Choose reason <span>(optional)</span>
          </h1>
          <div className="reasons">
            {Object.keys(productUpdatereason).map((reason) => (
              <Button
                key={reason}
                text={productUpdatereason[reason].label}
                variant={productData?.status === reason ? "filled" : "outlined"}
                className={"reason-btn"}
                onClick={() =>
                  setProductData({ ...productData, status: reason })
                }
              />
            ))}
          </div>
        </div>

        <div className="edit-action">
          <Button variant={"outlined"} text={"Cancel"} onClick={onClose} />
          <Button
            variant={"filled"}
            text={"Update"}
            onClick={() => onUpdate({ ...productData, status: getStatus() })}
          />
        </div>
      </Fragment>
    </Modal>
  );
};

export default EditModal;

