import React from "react";

const InputProps = ()=> {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type: string;
}

const Input = ({
    id, onChange, value, label,type
}) => {
    return(
        <input
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        placeholder={label}/>
    )
}
export default Input;