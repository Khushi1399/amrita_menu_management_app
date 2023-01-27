import React from "react";

const CanteenSpecial = (props) => {
  return (
    <div className="h-40 bg-gray-100 border border-2 hover:bg-gray-200 mr-10 mb-10 border-slate-200 p-3 overflow-y-scroll pr-20">
      <ol>
        {props?.list?.map((item) => {
          return <li key={item.id}>{item.itemName}</li>;
        })}
      </ol>
    </div>
  );
};

export default CanteenSpecial;
