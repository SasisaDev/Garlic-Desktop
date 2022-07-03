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
                    <div className="UserAvatarIcon" />
                </div>
                <div className="UserState">
                    <h6 className="Text">Name</h6>
                    <h6 className="Text">Status</h6>
                </div>
                <div className="UserFunctionals">

                </div>
            </div>
        </div>
    )
}