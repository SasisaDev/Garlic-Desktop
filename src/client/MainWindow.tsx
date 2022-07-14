import React, {useEffect} from "react"
import { Provider, useSelector } from "react-redux"
import { ScreenView } from "./Application/Redux/Slice"
import { reduxStore } from "./Application/Redux/Store"
import AuthBody from "./Components/AuthBody"

import GuildBody from "./Components/GuildBody"

import "./main.scss"

function ControlButton(props: React.PropsWithChildren<{control}>)
{
    useEffect(()=>{

    }, [])
    
    return <div className={"ControlButton btn" + props.control} onClick={()=>{(window as any).HandleControl(props.control)}}>
        {props.children}
    </div>
}

function Header()
{
    return (
    <div className="AppHeader">
        <div className="Logo">
            <p className="HeaderLogoText">GARLIC</p>
        </div>
        <div className="ControlButtons">
            <ControlButton control={0}>X</ControlButton>
            <ControlButton control={1}>-</ControlButton>
            <ControlButton control={2}>_</ControlButton>
        </div>
    </div>
    )
}

function Body()
{
    const Screen = useSelector(state => (state as any).garlic.screen);

    return (
    <div className="AppBody">
        { (Screen == ScreenView.Guilds) ?
            <GuildBody /> 
        : (Screen == ScreenView.Auth) ?
           <AuthBody />
        : (Screen == ScreenView.Settings) ?
            <h2 />
        : null
        }
    </div>
    )
}

export default function MainWindow()
{
    return (
        <Provider store={reduxStore}>
            <div className="MainWindowBody">
                <Header />
                <Body />
            </div>
        </Provider>
    )
}