import React from 'react'

function Button({ text, bgcolor, textcolor, handler = () => { }, className = "" }) {
    return (
        <button className={`${bgcolor} ${textcolor} cursor-pointer hover:scale-105
            duration-300 py-2 px-8 rounded-full relative z-10 
            ${className || 'mt-[37px]'}`}
            onClick={handler} >
            {text}
        </button >
    )
}

export default Button
