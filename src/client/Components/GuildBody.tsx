import React from "react"

import GuildList from "./Guild/GuildList/GuildList"
import Selector from "./Guild/Selector/Selector"
import Messenger from "./Guild/Messenger/Messenger"

import "./GuildBody.scss"

export default function GuildBody() {

    return (
        <div className="GuildBody">
            <GuildList />
            <Selector />
            <Messenger />
        </div>
    )
}