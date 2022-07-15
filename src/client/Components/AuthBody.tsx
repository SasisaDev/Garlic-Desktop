import React from "react"

import GuildList from "./Guild/GuildList/GuildList"
import Selector from "./Guild/Selector/Selector"
import Messenger from "./Guild/Messenger/Messenger"

import { ScreenView, ViewMode } from "../Application/Redux/Slice"

import {useDispatch, useSelector} from "react-redux"
import {reduxStore} from "../Application/Redux/Store"

import "./AuthBody.scss"
import InputField from "./General/InputField/InputField"
import Button from "./General/Button/Button"

import { SetScreen } from "../Application/Redux/Slice"

export default function AuthBody() {

    const dispatch = useDispatch();

    function OpenURL(url) {
        (window as any).electron.openExternalURL(url);
    }
    return (
        <div className="AuthBody">
            <div className="AuthPopupBody">
                <h2 className="AuthText">Welcome to Garlic!</h2>
                <h5 className="AuthText">This project was created for education!</h5>
                <h5 className="AuthText">If you want it to grow, you may vote in 
                    {<h5 className="AuthTextHyperlink" onClick={()=>{OpenURL("https://github.com/SasisaDev/Garlic-Desktop")}}> issue</h5>} on 
                    {<h5 className="AuthTextHyperlink" onClick={()=>{OpenURL("https://github.com/SasisaDev/Garlic-Desktop")}}> SasisaDev/Garlic-Desktop</h5>}
                </h5>
                <div className="AuthInputs">
                    <InputField text="email"/>
                    <InputField text="password"/>
                    <h5 className="AuthTextHyperlink Remark">Recover password</h5>
                </div>
                <Button className="AuthButton">Login</Button>
                <h5 className="AuthText Remark">You may not have an account. <h5 className="AuthTextHyperlink">Register</h5></h5>
                <h5 className="AuthTextHyperlink Remark" onClick={()=>{dispatch(SetScreen(ScreenView.Guilds))}}>Offline</h5>
            </div>
        </div>
    )
}