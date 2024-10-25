import React from "react";
import { navigation } from "../constants";

const Header = () => {
    return (
        <header>
            <ul className="nav">
                {navigation.map((item, index) => {
                    <a href={item.href} key={index}><li>{item.name}</li></a>
                })}
            </ul>
        </header>
    )
}

export default Header;