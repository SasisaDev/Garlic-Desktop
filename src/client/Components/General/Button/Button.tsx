import React from "react"

import "./Button.scss"

export default function Button(props) {
    return (
            <div className={"ButtonBody " + ((props.className) ? props.className : '')} onClick={props.onClick}>{props.children}</div>
    )
}