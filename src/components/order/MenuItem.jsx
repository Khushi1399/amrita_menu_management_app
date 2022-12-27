import React from 'react';
// import { useState } from 'react';

const MenuItem = (props) => {
    // const [count, setCount] = useState(0);
    // const [add,setAdd] = useState(false);
    
    // const handleIncrement = ()=>{
    //     setCount(count+1);
    //     // setAdd(true);
    // }

    // const handleDecrement = ()=>{
    //     if(count>0){
    //         setCount(count-1);
    //         return count;
    //     }
    // }

    return (
            <div className='grid grid-cols-3 mb-3'>
            <label className='text-emerald-900'>{props.label}</label>
            <label className='text-emerald-900'>Rs. {props.price}</label>
            <div>
                <button onClick={props.removed}
                    className="shadow bg-zinc-200 hover:bg-zinc-300 hover:text-red-600 focus:shadow-outline focus:outline-none pl-2 pr-2 mr-2 rounded-full font-bold">
                    -</button>
                <label className='text-emerald-900 ml-2 mr-2'>{props.quantity}</label>
                <button onClick={props.added}
                    className="shadow bg-zinc-200 hover:bg-zinc-300 hover:text-red-600 focus:shadow-outline focus:outline-none pl-2 pr-2 ml-2 rounded-full font-bold">
                    +</button>
            </div>
        </div>
    );
}

export default MenuItem;