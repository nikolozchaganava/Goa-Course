import React from "react";

const ListItems = () => {
    const list = ['Home', 'About', 'Contact', 'Gallery', 'Login'];
    return(
        <ul className="w-fit flex gap-10 items-center">
            {list.map((item, index) => (
                <a href="#" key={index}>
                    <li className="text-white flex cursor-pointer text-[1.5rem]">
                        {item === 'Login' ? (
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl w-[7rem] hover:(bg-gradient-to-l transition-[.5s])">{item}</button>
                        ) : (
                            item
                        )}
                    </li>
                </a>
            ))}
        </ul>
    )
}   

export default ListItems;