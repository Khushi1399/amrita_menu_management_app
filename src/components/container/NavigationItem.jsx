import React from "react";

const NavigationItem = ({ handleClick = () => false, ...props }) => {
  return (
    <li
      className="uppercase NavigationItem hover:text-sky-400"
      onClick={handleClick}
    >
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default NavigationItem;

// className={props.active ? classes.active : null}
