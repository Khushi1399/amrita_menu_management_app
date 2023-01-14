import React from "react";

const PaymentMain = (props) => {
  let amount = 0;

  props.items.map(
    (item) => (amount = amount + item.itemQuantity * item.itemPrice)
  );

  const displayCanteen = (item) => {
    const i =
      item == "itC"
        ? "IT Canteen"
        : item == "mainC"
        ? "Main Canteen"
        : "MBA Canteen";
    return i;
  };

  return (
    <div className="text-sm text-gray-500 shadow-md pl-10 mt-5 w-90">
      <h2 className="block uppercase tracking-wide text-pink-400 text-2xl font-bold mb-4">
        {props.date}
      </h2>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <div key={item.id} className="grid grid-cols-5">
            <label className="pr-6 text-black-900 capitalize">
              {item.itemName}
            </label>
            <label>x{item.itemQuantity}</label>
            <label>{item.itemPrice}</label>
            <label>{displayCanteen(item.canteenName)}</label>
            <label>{item.itemQuantity * item.itemPrice}</label>
          </div>
        ))
      ) : (
        <label className="text-lg text-bold font-medium leading-6 text-gray-900">
          You have not ordered any items.
        </label>
      )}
      {props.items.length > 0 && (
        <label className="text-lg font-bold font-medium leading-6 text-pink-900">
          Amount :
          <label className="text-lg text-bold font-medium leading-6 text-gray-900">
            {amount}
          </label>
        </label>
      )}
    </div>
  );
};

export default PaymentMain;
