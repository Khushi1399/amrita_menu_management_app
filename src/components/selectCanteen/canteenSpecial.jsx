import React from "react";

const CanteenSpecial = (props) => {
  return (
    <div className="bg-gray-100 border border-2 hover:bg-gray-200 mr-10 mb-10 border-slate-200 p-3">
      <label className="font-black tracking-wide text-pink-400 ">
        {props.children}
      </label>
      <ol>
        {props.list.map((item) => {
          return <li key={item.id}>{item.itemName}</li>;
        })}
      </ol>
    </div>
  );
};

export default CanteenSpecial;
