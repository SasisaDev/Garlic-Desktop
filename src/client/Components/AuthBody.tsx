import React from "react"

import GuildList from "./Guild/GuildList/GuildList"
import Selector from "./Guild/Selector/Selector"
import Messenger from "./Guild/Messenger/Messenger"

import { ViewMode } from "../Application/Redux/Slice"

import {useSelector} from "react-redux"
import {reduxStore} from "../Application/Redux/Store"

import "./AuthBody.scss"
import InputField from "./General/InputField/InputField"
import Button from "./General/Button/Button"

export default function AuthBody() {
    return (
        <div className="AuthBody">
            <div className="AuthPopupBody">
                <h2 className="AuthText">Welcome to Garlic!</h2>
                <h5 className="AuthText">This project was created for education!</h5>
                <h5 className="AuthText">If you want it to grow, you may vote in {<h5 className="AuthTextHyperlink">issue</h5>} on {<h5 className="AuthTextHyperlink">SasisaDev/Garlic-Desktop</h5>}</h5>
                <div className="AuthInputs">
                    <InputField text="email"/>
                    <InputField text="password"/>
                </div>
                <Button className="AuthButton">Login</Button>
            </div>
        </div>
    )
}