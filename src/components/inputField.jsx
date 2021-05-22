import React from "react";

export function InputField({value, placeholder, onValueChange, type = "text", label}) {
    return (
        <div className={"login_input_field_container"}>
            <label className={"login_input_label center"}>
                <h5 className={"login_input_description"}>{label}:{" "}</h5>
                <input className={"login_input"}
                       type={type}
                       value={value}
                       placeholder={placeholder}
                       onChange={(e) => onValueChange(e.target.value)}
                />
            </label>
        </div>
    );
}