import React, {useEffect} from "react"
import { Provider } from "react-redux"
import { reduxStore } from "./Application/Redux/Store"

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
    return (
    <div className="AppBody">
        <GuildBody />
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