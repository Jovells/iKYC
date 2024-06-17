import React from 'react'
import { FC } from 'react'

interface Props{
    text:string
    className?:string
}

const Button:FC<Props> = ({text, className}) => {
    return (
        <button className={`bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg ${className}`}>
            {text}
        </button>
    )
}

export default Button