import React, { useMemo, useState } from "react";
import {
  Button,
  CheckColorIcon,
  CheckIcon,
  PrinterIcon,
  SearchIcon,
  XIcon,
  XOrangeColorIcon,
  XRedColorIcon,
} from "../../common";
import DataTable from "../../common/table";
import { productStatus } from "../../../constants";

const ProductList = ({ details, onApproval, onReject, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const columns = useMemo(
    () => [
      {
        width: "8%",
        render: (row) => (
          <div className="order-img">
            <img src={row?.imgurl} alt="" />
          </div>
        ),
      },
      {
        label: "Product name",
        width: "22%",
        render: (row) => <p className="order-text">{row?.product_name}</p>,
      },
      {
        label: "Brand",
        width: "10%",
        render: (row) => <p className="order-text">{row?.brand}</p>,
      },
      {
        label: "Price",
        width: "10%",
        render: (row) => (
          <p className="order-text">
            ${row?.price}
            <span className="opacity"> / 6 *1LB</span>
          </p>
        ),
      },
      {
        label: "Quantity",
        width: "10%",
        render: (row) => (
          <p className="order-text">
            {row?.quantity}
            <span className="opacity"> x 6 *1LB</span>
          </p>
        ),
      },
      {
        label: "Total",
        width: "10%",
        render: (row) => (
          <p className="order-text">${row?.quantity * row?.price}</p>
        ),
      },
      {
        label: "Status",
        width: "30%",
        render: (row) => (
          <div className="order-status">
            <div className="order-status-text">
              {row?.status && (
                <p style={{ "--color": productStatus[row?.status]?.color }}>
                  {productStatus[row?.status]?.label}
                </p>
              )}
            </div>
            <div className="order-status-actions">
              <Button
                variant="no-style"
                text={
                  row?.status === productStatus.APPROVED.value ? (
                    <CheckColorIcon />
                  ) : (
                    <CheckIcon />
                  )
                }
                className="status-action-btn"
                onClick={() =>
                  onApproval({
                    product_id: row.id,
                    status: productStatus.APPROVED.value,
                  })
                }
              />
              <Button
                variant="no-style"
                text={
                  row?.status === productStatus.MISSING.value ? (
                    <XOrangeColorIcon />
                  ) : row?.status === productStatus.MISSING_URGENT.value ? (
                    <XRedColorIcon />
                  ) : (
                    <XIcon />
                  )
                }
                className="status-action-btn"
                onClick={() => onReject(row)}
              />
              <Button
                text={"Edit"}
                variant="no-style"
                className="status-action-btn"
                onClick={() => onEdit(row)}
              />
            </div>
          </div>
        ),
      },
    ],
    [details]
  );

  return (
    <div className="order-products-wrapper">
      <div className="product-header">
        <div className="product-header-search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon />
          </div>
        </div>
        <div className="product-header-action">
          <Button text="Add item" />
          <PrinterIcon />
        </div>
      </div>

      <div className="product-table-wrapper">
        <DataTable
          columns={columns}
          data={details?.products?.filter((i) =>
            i?.product_name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
          )}
        />
      </div>
    </div>
  );
};

export default ProductList;

