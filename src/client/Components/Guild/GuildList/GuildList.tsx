import React from "react"

import "./GuildList.scss"
import Guild from "./Guild/Guild"

export default function GuildList() {
    return (
        <div className="GuildListBody">
            <div className="GuildListButtonPlace">
                <Guild guild={(window as any).FriendsGuild}/>
            </div>
            <div className="Separator" />
            {

            }
            <div className="GuildListList">
                
                <Guild guild={'AddServer'}/>
            </div>
        </div>
    )
} 