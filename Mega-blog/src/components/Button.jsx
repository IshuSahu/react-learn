import React from "react";
// this is how we use common Btn for all the pages
export default function Button({
    //Parameter it will accept
    children, // all the text will be pass here will display
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props // all the other props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
