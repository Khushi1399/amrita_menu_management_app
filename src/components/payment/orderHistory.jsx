import React from "react";
import history from "../../local-json/orderHistory.json";
import HistoryModal from "./historyModal";

const OrderHistory = () => {

    let orders = Object.values(history)
    const dates = [...new Set(orders[0].map(item => item.creationDateTime))]
    let orderList = []
    for (let i = 0; i < dates.length; i++) {
        orderList.push(orders[0].filter(item => item.creationDateTime === dates[i]))
    }

    return (
        <div>
            <label className="text-2xl font-bold text-pink-900">ORDER HISTORY</label>
            {dates.map(date => orders[0].filter(item => item.creationDateTime === date))
                .map(list => <HistoryModal items={list} date={list[0].creationDateTime}></HistoryModal>)}
            <button className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5">
                BACK</button>
        </div>
    )
}

export default OrderHistory