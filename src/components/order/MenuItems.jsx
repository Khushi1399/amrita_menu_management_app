import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = (props) => (
    <div>
        {/* <p>Current Price: <strong>{props.price}</strong></p> */}
        {props.children.map(item => (
            <MenuItem key ={item.id} 
            label={item.itemName}
            price = {item.itemPrice}
            quantity = {item.itemQuantity}
            added ={() => props.itemAdded(item)} 
            removed ={() => props.itemRemoved(item)}
            // disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default MenuItems;