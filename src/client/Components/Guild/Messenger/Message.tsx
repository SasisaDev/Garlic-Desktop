import React from "react"

import "./Message.scss"
import MessageObject from "../../../API/Message"

export default function Message({message, row = 0}) {
    return (
        <div className={"MessageBody " + ((row == 0) ? "Extended" : "")}>
            <div className="MessageElement MessageAvatar">
                {(row == 0) ? <img /> : null}
            </div>
            <div className={"MessageElement MessageTextBody"}>
                {(row == 0) ? <h5 className="MessageTextName"></h5> : null}
                <h5 className="MessageTextContent"></h5>
            </div>
            <div className="MessageElement MessageControlsBody">
                <div className="MessageButton"></div>
                <div className="MessageButton"></div>
                <div className="MessageButton"></div>
            </div>
        </div>
    )
}