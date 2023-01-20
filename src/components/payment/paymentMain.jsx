import React from "react";
import { useState, useEffect } from "react";
import useOrder from "../hooks/useOrder";
import Timer from "./timer";

const PaymentMain = (props) => {
  const [timerVal, setTimerVal] = useState("10:00");

  const [timer, setTimer] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [showBalance, setShowBalance] = useState(false);
  const [warning, setWarning] = useState(false);

  const { placeOrder, delOrder } = useOrder();

  const handlePayment = () => {
    placeOrder(props.items);
    startTimer();
  };

  const startTimer = () => {
    // setTimer(true)
    if (props.amount < amount) {
      setAmount(amount - props.amount);
      setTimer(true);
    } else {
      setShowBalance(true);
      setWarning(true);
    }
  };

  useEffect(() => {
    timerVal === "00:00" && delOrder();
  }, [timerVal]);

  const shouldShowBalance = () => {
    setShowBalance((prev) => !prev);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div>
      {timer && <Timer timer={timerVal} setTimer={setTimerVal} />}
      <div className="text-sm text-gray-500 shadow-md pl-10 mt-5 w-90 mb-5">
        <h2 className="block uppercase tracking-wide text-pink-700 text-2xl font-bold mb-4">
          YOUR ORDER
        </h2>
        {/* {console.log(props.items)} */}
        {props.items.length > 0 ? (
          props.items.map((item) => (
            <div key={item.id} className="grid grid-cols-4 capitalize">
              <label className="pr-6 text-black-900">{item.itemName}</label>
              <label>x{item.itemQuantity}</label>
              <label>{item.itemPrice}</label>
              <label>{item.itemQuantity * item.itemPrice}</label>
            </div>
          ))
        ) : (
          <label className="text-lg text-bold font-medium leading-6 text-gray-900">
            You have not selected any items.
          </label>
        )}
        {props.items.length > 0 && (
          <label className="text-lg font-bold font-medium leading-6 text-pink-900">
            Amount :
            <label className="text-lg text-bold font-medium leading-6 text-gray-900">
              {props.amount}
            </label>
          </label>
        )}
      </div>
      {showBalance && (
        <label className="text-lg text-bold text-l font-medium leading-6 text-emerald-900 text-center pt-5">
          Your balance is Rs. {amount}
        </label>
      )}
      {warning && (
        <label className="text-lg text-bold text-l font-medium leading-6 text-pink-500 text-center pt-5">
          . You do not have sufficient balance. Please Recharge.!!
        </label>
      )}
      <div>
        <button
          className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5"
          onClick={props.openPayment}
          disabled={timer}
        >
          EDIT ORDER
        </button>
        <button
          className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5"
          onClick={shouldShowBalance}
        >
          CHECK BALANCE
        </button>
        <button
          className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5"
          onClick={handlePayment}
          disabled={timer || props.items.length <= 0}
        >
          MAKE PAYMENT
        </button>
        <button
          className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5"
          onClick={refreshPage}
        >
          CANCEL ORDER
        </button>
      </div>
      {timer && (
        <label className="text-lg text-bold text-l font-medium leading-6 text-red-600 text-center pt-5">
          Your order has been placed. HURRY NOW TO CONFIRM YOUR ORDER
        </label>
      )}
    </div>
  );
};

export default PaymentMain;
