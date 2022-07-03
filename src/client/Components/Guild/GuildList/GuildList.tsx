import React from "react"

import "./GuildList.scss"
import Guild from "./Guild/Guild"

export default function GuildList() {
    return (
        <div className="GuildListBody">
            <div className="GuildListButtonPlace">
                <Guild icon="Assets/Friends.png"/>
            </div>
            <div className="Separator" />
            <div className="GuildListList">

                <Guild icon="Assets/Create.png"/>
            </div>
        </div>
    )
} 