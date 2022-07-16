import React, { InputHTMLAttributes, useEffect } from "react"

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
import GarlicApplication, { GarlicAPI } from "../API/Garlic"

export default function AuthBody() {

    const dispatch = useDispatch();

    useEffect(()=> {
        var cookie = ((window as any).electron.GetCookie());
        var login = (cookie.login);
        var password = (cookie.password);

        if(login && password) {
            AttemptLogin(login, password);
        }
    }, [])

    function AttemptLogin(login?, password?) {
        if(!login || !password) {
            login = (document.getElementById("loginInput") as HTMLInputElement).value;
            password = (document.getElementById("passwordInput") as HTMLInputElement).value;
        }

        ((window as any).Application as GarlicApplication).FetchAccount(login, password).then(acc => {
            if(!acc) {
                
                return;
            }
            (window as any).Account = acc;
            (window as any).electron.SetCookie({login: login, password: password});
        });
    }

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
                    <InputField text="email" id="loginInput"/>
                    <InputField text="password" id="passwordInput"/>
                    <h5 className="AuthTextHyperlink Remark">Recover password</h5>
                </div>
                <Button className="AuthButton">Login</Button>
                <h5 className="AuthText Remark">You may not have an account. <h5 className="AuthTextHyperlink">Register</h5></h5>
                <h5 className="AuthTextHyperlink Remark" onClick={()=>{dispatch(SetScreen(ScreenView.Guilds))}}>Offline</h5>
            </div>
        </div>
    )
}