import React, { useState } from "react"

import "./Message.scss"
import MessageObject from "../../../API/Message"
import useHover from "../../Hooks/useHover";

export default function Message({message, row = 0}) {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    return (
        <div className={"MessageBody " + ((row == 0) ? "Extended" : "")} ref={hoverRef}>
            <div className={"MessageElement MessageAvatar " + ((row == 0) ? "Extended" : "")}>
                {(row == 0) ? <img /> : null}
            </div>
            <div className={"MessageElement MessageTextBody"}>
                {(row == 0) ? <h5 className="MessageTextName"></h5> : null}
                <h5 className="MessageTextContent">Loram ipsum dolar sit amet Loram ipsum dolar sit amet Loram ipsum dolar sit amet Loram ipsum dolar sit amet Loram ipsum dolar sit amet</h5>
            </div>
            <div className={"MessageElement MessageControlsBody " + ((isHovered) ? "Hovered" : "")}>
                <div className="MessageButton"></div>
                <div className="MessageButton"></div>
                <div className="MessageButton"></div>
            </div>
        </div>
    )
}