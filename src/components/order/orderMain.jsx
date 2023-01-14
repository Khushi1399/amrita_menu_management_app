import React, { useEffect, useState } from "react";
import useOrder from "../hooks/useOrder";
import PaymentMain from "../payment/paymentMain";
import SelectCanteen from "../selectCanteen/selectCanteen";
import CartModal from "./CartModal";
import OrderTable from "./orderTable";

const OrderMain = () => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectCanteen, setSelectCanteen] = useState(false);
  //   let menuList = Object.values(menus).filter((canteen) => {
  //     return canteen;
  //   });
  const types = ["mains", "drinks", "snacks", "chaat"];
  const userData = JSON.parse(localStorage.getItem("USER"));

  const { ordList } = useOrder();

  useEffect(() => {
    setItems([]);
  }, []);

  const addItem = (item) => {
    // const itemPresent = ordList.some(x =>x.id===item.id);
    let index = ordList[0].findIndex((obj) => obj.id === item.id);
    let index1 = items.findIndex((obj) => obj.id === item.id);
    ordList[0][index].itemQuantity += 1;
    ordList[0][index].totalCost =
      ordList[0][index].itemQuantity * ordList[0][index].itemPrice;

    if (index >= 0) {
      setItems((current) => [...current, ordList[0][index]]);
    }

    if (index1 >= 0) {
      let newList = [...items];
      newList[index1] = ordList[0][index];
      setItems(newList);
    }

    setAmount(amount + item.itemPrice);
    console.log(items);
  };

  console.log("items", items);

  const removeItem = (item) => {
    let index = ordList[0].findIndex((obj) => obj.id === item.id);
    let index1 = items.findIndex((obj) => obj.id === item.id);
    if (ordList[0][index].itemQuantity > 0) {
      ordList[0][index].itemQuantity -= 1;
      ordList[0][index].totalCost =
        ordList[0][index].totalCost -
        ordList[0][index].itemQuantity * ordList[0][index].itemPrice;
      let newList = [...items];
      newList[index1] = ordList[0][index];
      if (ordList[0][index].itemQuantity === 0) {
        newList.splice(index1, 1);
      }
      setItems(newList);
      // setItems(current => [...current, ordList[0][index]]);
      setAmount(amount - item.itemPrice);
    }
    console.log(items);
  };

  const clearCart = () => {
    setAmount(0);
    setItems([]);
    ordList = ordList[0].map((item) => (item.itemQuantity = 0));
  };

  const viewCart = () => {
    // console.log(items);
    setCartOpen((prev) => !prev);
  };

  const openPayment = () => {
    setPaymentOpen((prev) => !prev);
  };

  const changeCanteen = () => {
    setSelectCanteen((prev) => !prev);
  };

  return (
    <div>
      {cartOpen && <CartModal amount={amount} items={items} close={viewCart} />}
      {selectCanteen ? (
        <SelectCanteen />
      ) : paymentOpen ? (
        <PaymentMain openPayment={openPayment} items={items} amount={amount} />
      ) : (
        <div>
          <div className="flex flex-row pt-5">
            <label className="text-2xl font-bold text-pink-400 pl-3 uppercase">
              {`Order from Canteen, ${userData.username}`}
            </label>
            <div className="flex flex-row gap-7 pl-8">
              <button
                onClick={changeCanteen}
                className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                CHANGE CANTEEN
              </button>
              <button
                onClick={clearCart}
                className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                CLEAR SELECTION
              </button>
              <button
                onClick={viewCart}
                className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                VIEW SELECTION
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4">
            {types.map((type) => (
              <OrderTable
                key={type}
                type={type}
                menu={ordList}
                addItem={addItem}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5 justify-end">
            <label className="animate-pulse text-2xl font-bold text-purple-600">
              AMOUNT : {amount}
            </label>
            <button
              className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              onClick={openPayment}
              disabled={items.length > 0 ? false : true}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderMain;
