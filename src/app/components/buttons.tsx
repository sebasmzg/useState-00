'use client'
import React from "react";
import { ButtonProps } from "../types/buttonType";


const Button: React.FC<ButtonProps> = ({onClick, label, className}) => {
    return (
        <button onClick={onClick} className={className}>{label}</button>
    )
}

export default Button;