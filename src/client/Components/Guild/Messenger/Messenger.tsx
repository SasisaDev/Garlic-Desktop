import React from "react"

import Message from "./Message"

import "./Messenger.scss"

export default function Messenger({channel}) {
    return (
        <div className="MessengerBody">
            <div className="MessengerMessages">
                <Message message={null} row={1}></Message>
                <Message message={null}></Message>
            </div>
            <div className="MessengerInputBody">
                <input className="MessengerInput"></input>
                <div className="MessengerInputSend">{'>'}</div>
            </div>
        </div>
    )
}