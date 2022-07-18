import React from "react"
import Channel from "../../../API/Channel";

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
                <Message message={null}></Message>
                <Message message={null}></Message>
                {
                    ((channel as Channel) ?
                    [...(channel as Channel).LoadedMessages].map(obj => (
                        <Message message={obj}/>
                        )
                    ) : null)
                }
            </div>
            <div className="MessengerInputBody">
                <textarea className="MessengerInput" id="inputChannel" onInput={AutoGrow}></textarea>
                <div className="MessengerInputSend">{'>'}</div>
            </div>
        </div>
    )
}