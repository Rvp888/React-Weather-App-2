
import React from "react";

const SingleCardComponents = ( {item, className, onClick} ) => {

    return (
        <>
            <li key={item.moonrise} className={className} onClick={onClick}>
                
            </li>
        </>
    )
}