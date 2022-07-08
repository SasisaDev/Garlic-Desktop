import React from "react"

import "./Guild.scss"

import GuildObject from "../../../../Application/Guild"

export default function Guild({guild, onClick=()=>{}}) {

    function LoadGuild() {
        
    }

    return (
        <div className="Guild" onClick={ LoadGuild }>
            {
            //<img className="Guild" src={icon}></img>
            }
        </div>
    )
} 