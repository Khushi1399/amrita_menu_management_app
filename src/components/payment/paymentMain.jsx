import React from "react";

const PaymentMain = (props) => {
    return (
        <div>
            <div className="text-sm text-gray-500 shadow-md pl-10 mt-5 w-90">
            <h2 className="block uppercase tracking-wide text-pink-700 text-2xl font-bold mb-4">YOUR ORDER</h2>
            {console.log(props.items)}
                {
                    props.items.length > 0 ? props.items.map(item =>
                        <div key={item.id} className='grid grid-cols-4'>
                            <label className='pr-6 text-black-900'>{item.itemName}</label>
                            <label>x{item.itemQuantity}</label>
                            <label>{item.itemPrice}</label>
                            <label>{item.itemQuantity * item.itemPrice}</label>
                        </div>
                    ) : <label className='text-lg text-bold font-medium leading-6 text-gray-900'>You have not selected any items.</label>
                }
                {
                    props.items.length > 0 && <label className='text-lg font-bold font-medium leading-6 text-pink-900'>Amount :
                        <label className='text-lg text-bold font-medium leading-6 text-gray-900'>{props.amount}</label>
                    </label>
                }
            </div>
            <button className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5" onClick={props.openPayment}>
                EDIT ORDER</button>
                <button className="shadow bg-pink-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5">
                MAKE PAYMENT</button>
        </div>
    )
}

export default PaymentMain;