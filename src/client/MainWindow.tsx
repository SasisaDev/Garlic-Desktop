import React from "react"

import GuildBody from "./Components/GuildBody"

import "./main.scss"

function Header()
{
    return (
    <div className="AppHeader">

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
        <div className="MainWindowBody">
            <Header />
            <Body />
        </div>
    )
}