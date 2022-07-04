import React from "react"

import "./Messenger.scss"

export default function Messenger() {
    return (
        <div className="MessengerBody">
            <div className="MessengerMessages">

            </div>
            <div className="MessengerInputBody">
                <input className="MessengerInput"></input>
                <div className="MessengerInputSend">{'>'}</div>
            </div>
        </div>
    )
} 