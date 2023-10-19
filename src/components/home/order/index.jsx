import React, { useEffect, useState } from "react";
import OrderInfo from "./orderInfo";
import ProductList from "./productList";
import { CommonMargin } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, setOrderDetails } from "../../../redux";
import { getOrders } from "../../../api";
import StatusUpdateModal from "./statusUpdateModal";
import EditModal from "./editModal";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const [rejectedProduct, setRejectedProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(false);
  const { order_details } = useSelector(selectOrder);

  const fetchData = async () => {
    try {
      const res = await getOrders();
      dispatch(setOrderDetails(res));
    } catch (error) {
      dispatch(setOrderDetails(null));
    }
  };

  const handleStatusUpdate = ({ product_id, status }) => {
    const updatedProducts = order_details?.products?.map((product) =>
      product?.id === product_id ? { ...product, status } : { ...product }
    );
    dispatch(
      setOrderDetails({ ...order_details, products: [...updatedProducts] })
    );

    // ::TODO:: We can hit a API to update the same in Database
    // It was skipped as of now so that once refresh we get default order
  };

  const handleReject = ({ product_id, status }) => {
    handleStatusUpdate({ product_id, status });
    setRejectedProduct(null);
  };
  const handleEdit = (updatedProduct) => {
    const updatedProducts = order_details?.products?.map((product) =>
      product?.id === updatedProduct?.id
        ? { ...updatedProduct }
        : { ...product }
    );
    dispatch(
      setOrderDetails({ ...order_details, products: [...updatedProducts] })
    );
    setEditProduct(null);

    // ::TODO:: We can hit a API to update the same in Database
    // It was skipped as of now so that once refresh we get default order
  };

  useEffect(() => {
    // fetchData();
    const timeout = setTimeout(() => {
      console.log("first");
      dispatch(
        setOrderDetails({
          id: "order_32457ABC",
          order_id: "Order32457ABC",
          supplier: "East coast fruits & vegetables",
          shipping_date: "Thu, Feb 10",
          total: "15,028.3",
          department: "300-444-678",
          status: "pending",
          products: [
            {
              id: 1,
              product_name: "Chicken breast",
              imgurl: "https://i.postimg.cc/064t8qVk/apple.png",
              brand: "Hermel Black",
              price: 60.7,
              quantity: 0,
            },
            {
              id: 2,
              product_name: "Chicken leg piece",
              imgurl: "https://i.postimg.cc/vgkfgYnB/avocado.jpg",
              brand: "Hermel Black",
              price: 60.7,
              quantity: 15,
            },
            {
              id: 3,
              product_name: "Chicken tandoori",
              imgurl: "https://i.postimg.cc/vgkfgYnB/avocado.jpg",
              brand: "Hermel Black",
              price: 60.7,
              quantity: 15,
            },
            {
              id: 4,
              product_name: "Something else",
              imgurl: "https://i.postimg.cc/vgkfgYnB/avocado.jpg",
              brand: "Hermel Black",
              price: 60.7,
              quantity: 0,
              discounted_price: 70,
            },
          ],
        })
      );
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="order-details-wrapper">
      <CommonMargin>
        <OrderInfo details={order_details} />
        <ProductList
          details={order_details}
          onApproval={handleStatusUpdate}
          onReject={setRejectedProduct}
          onEdit={setEditProduct}
        />
        {rejectedProduct && (
          <StatusUpdateModal
            product={rejectedProduct}
            onClose={() => setRejectedProduct(null)}
            onUpdate={handleReject}
          />
        )}
        {editProduct && (
          <EditModal
            product={editProduct}
            onClose={() => setEditProduct(null)}
            onUpdate={handleEdit}
          />
        )}
      </CommonMargin>
    </div>
  );
};

export default OrderDetails;

