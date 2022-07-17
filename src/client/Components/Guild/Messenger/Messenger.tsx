import React from "react"

import Message from "./Message"

import "./Messenger.scss"

export default function Messenger({channel}) {

    function AutoGrow() {
        let element = (document.getElementById("inputChannel") as HTMLTextAreaElement);

        element.style.height = "28px";
        element.style.height = ((document.getElementById("inputChannel") as HTMLTextAreaElement).scrollHeight)+"px";
    }

    return (
        <div className="MessengerBody">
            <div className="MessengerMessages">
                <Message message={null} row={1}></Message>
                <Message message={null}></Message>
            </div>
            <div className="MessengerInputBody">
                <textarea className="MessengerInput" id="inputChannel" onInput={AutoGrow}></textarea>
                <div className="MessengerInputSend">{'>'}</div>
            </div>
        </div>
    )
}