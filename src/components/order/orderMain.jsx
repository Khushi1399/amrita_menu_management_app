import React from "react";
import { useState } from "react";
import OrderTable from "./orderTable";
import menus from "../../local-json/mbamenu.json"
import CartModal from "./CartModal";
import PaymentMain from "../payment/paymentMain";
import SelectCanteen from "../selectCanteen/selectCanteen";

const OrderMain = () => {
    const [items, setItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [selectCanteen, setSelectCanteen] = useState(false);
    let menuList = Object.values(menus).filter(canteen => { return canteen })
    const types = ["mains", "drinks", "snacks", "chaat"]

    const addItem = (item) => {
        // const itemPresent = menuList.some(x =>x.id===item.id);
        let index = menuList[0].findIndex((obj => obj.id === item.id));
        let index1 = items.findIndex((obj => obj.id === item.id));
        menuList[0][index].itemQuantity += 1;
        if (index >= 0) {
            setItems(current => [...current, menuList[0][index]]);
        }
        if (index1 >= 0) {
            let newList = [...items]
            newList[index1] = menuList[0][index]
            setItems(newList)
        }
        setAmount(amount + item.itemPrice);
        console.log(items);
    }

    const removeItem = (item) => {
        let index = menuList[0].findIndex((obj => obj.id === item.id));
        let index1 = items.findIndex((obj => obj.id === item.id));
        if (menuList[0][index].itemQuantity > 0) {
            menuList[0][index].itemQuantity -= 1;
            let newList = [...items]
            newList[index1] = menuList[0][index]
            if (menuList[0][index].itemQuantity === 0) {
                newList.splice(index1, 1)
            }
            setItems(newList)
            // setItems(current => [...current, menuList[0][index]]);
            setAmount(amount - item.itemPrice);
        }
        console.log(items);
    }

    const clearCart = () => {
        setAmount(0)
        setItems([])
        menuList = menuList[0].map(item => item.itemQuantity = 0)
    }

    const viewCart = () => {
        // console.log(items);
        setCartOpen(prev => !prev)
    }

    const openPayment = () => {
        setPaymentOpen(prev => !prev) 
    }

    const changeCanteen = () => {
        setSelectCanteen(prev => !prev)
    }

    return (
        <div>
            {cartOpen && <CartModal amount={amount} items={items} close={viewCart} />}
            {selectCanteen ? <SelectCanteen /> :
                paymentOpen ? <PaymentMain openPayment={openPayment} items={items} amount={amount} /> :
                    <div>
                        <div className="flex flex-row pt-5">
                            <label className="text-2xl font-bold text-pink-400">Order from Canteen, "----User---"</label>
                            <div className="flex flex-row gap-7">
                                <button onClick={changeCanteen} className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                    CHANGE CANTEEN</button>
                                <button onClick={clearCart} className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                    CLEAR SELECTION</button>
                                <button onClick={viewCart} className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                    VIEW SELECTION</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-4">
                            {
                                types.map(type => <OrderTable key={type} type={type} menu={menuList} addItem={addItem} removeItem={removeItem}></OrderTable>)
                            }
                        </div>
                        <div className="flex flex-col gap-5 justify-end">
                            <label className="animate-pulse text-2xl font-bold text-purple-600">AMOUNT : {amount}</label>
                            <button className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                onClick={openPayment}>
                                ORDER NOW</button>
                        </div>
                    </div>
            }

        </div>
    );
}

export default OrderMain;