import React from "react"

import "./Selector.scss"

function GuildSelector() {
    return (
        <div className="GuildSelectorBody">

        </div>
    )
} 

function FriendSelector() {
    return (
        <div className="FriendSelectorBody">

        </div>
    )
} 

export default function Selector() {
    return (
        <div className="SelectorBody">
            <GuildSelector />
            <div className="UserBody">
                <div className="UserAvatar">

                </div>
                <div className="UserState">

                </div>
                <div className="UserFunctionals">

                </div>
            </div>
        </div>
    )
}