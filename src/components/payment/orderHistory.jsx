import React from "react";
import history from "../../local-json/orderHistory.json";
import useOrderHistory from "../hooks/useOrderHistory";
import HistoryModal from "./historyModal";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const { ordList = {} } = useOrderHistory();
  const navigate = useNavigate();

  let orders = Object.values(ordList);
  const dates = [...new Set(orders[1]?.map((item) => item.creationDateTime))];
  let orderList = [];
  for (let i = 0; i < dates.length; i++) {
    orderList.push(
      orders[1].filter((item) => item.creationDateTime === dates[i])
    );
  }

  return (
    <div>
      <label className="text-2xl font-bold text-pink-900">ORDER HISTORY</label>
      {dates
        .map((date) =>
          orders[1].filter((item) => item.creationDateTime === date)
        )
        ?.map((list) => (
          <HistoryModal
            items={list}
            date={list[0].creationDateTime}
          ></HistoryModal>
        ))}
      <button
        className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5"
        onClick={() => navigate("/select")}
      >
        BACK
      </button>
    </div>
  );
};

export default OrderHistory;
