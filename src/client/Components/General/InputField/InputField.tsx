import React from "react"

import "./InputField.scss"

export default function InputField({text, style = {}}) {
    return (
        <div className="FieldBody" style={style}>
            <h5 className="FieldText">{text}</h5>
            <input className="InputField"></input>
        </div>
    )
}