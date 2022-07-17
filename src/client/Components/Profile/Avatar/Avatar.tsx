import React, { useEffect } from "react"


export default function Avatar(url) {
    const style = {
        "borderRadius": "64px"
    }

    return (
        <img style={style} src={url}/>
    )
}