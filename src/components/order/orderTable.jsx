import React from "react";
import MenuItems from "./MenuItems";

const OrderTable = (props) => {
    // let filterMenu = props.menu.map(item => item.filter(i => i.category === props.type))
    // console.log(filterMenu);
    return (
        <div className="shadow-md pl-10 mt-5">
            <h2 className="block uppercase tracking-wide text-pink-700 text-2xl font-bold mb-4">{props.type.toUpperCase()}</h2>
            {
                props.menu.map(item => item.filter(i => i.category === props.type))
                    .map(item => <MenuItems key={props.type} itemAdded={props.addItem} itemRemoved={props.removeItem}>
                        {item}</MenuItems>)
            }
        </div>
    );
} 

export default OrderTable;