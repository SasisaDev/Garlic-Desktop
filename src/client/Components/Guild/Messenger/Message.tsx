import React from "react"

import "./Messenger.scss"
import MessageObject from "../../../Application/Message"

export default function Message(message: MessageObject) {
    return (
        <div className="MessageBody">
            <div className="MessageAvatar">
                
            </div>
            <div className="MessageTextBody">

            </div>
            <div className="MessageControlsBody">

            </div>
        </div>
    )
}