import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { ViewMode } from "../../../Application/Redux/Slice"

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
    const viewMode = useSelector(state => (state as any).garlic.viewMode)

    useEffect(()=>
    {
        console.log(viewMode)
    })

    return (
        <div className="SelectorBody">
            {
            (viewMode == ViewMode.Guilds) ?
            (
            <GuildSelector />
            ) : (
            <FriendSelector />
            )
            }
            <div className="UserBody">
                <div className="UserAvatar">
                    <div className="UserAvatarIcon" />
                </div>
                <div className="UserState">
                    <h6 className="Text Name">Name</h6>
                    <h6 className="Text">😀 Status</h6>
                </div>
                <div className="UserFunctionals">

                </div>
            </div>
        </div>
    )
}