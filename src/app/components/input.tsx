import React from "react";
import { InputProps } from "../types/inputType";

const InputText: React.FC<InputProps> = ({ type, onChange, placeholder, className, id }) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} className={className} id={id} />
    )
}

export default InputText;