import React from "react";

const NavigationItem = (props) => {
    return (
        <li className="NavigationItem hover:text-sky-400">
            <a href={props.link}>
                {props.children}
            </a>
        </li>
    );
};

export default NavigationItem;

// className={props.active ? classes.active : null}