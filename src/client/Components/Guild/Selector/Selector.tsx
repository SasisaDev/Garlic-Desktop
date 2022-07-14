import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Account from "../../../API/Account"
import Guild from "../../../API/Guild"
import { ViewMode } from "../../../Application/Redux/Slice"
import ChannelSelector from "./ChannelSelector/ChannelSelector"

import "./Selector.scss"

function GuildSelector() {
    const guildID = useSelector(state => (state as any).garlic.currentGuild)

    const [guild, setGuild] = useState<Guild>(null);

    useEffect(()=>{
        if((window as any).Account) {
            setGuild(((window as any).Account as Account).GetGuild(guildID));
        }
    }, [guildID])

    return (
        <div className="ChildSelectorBody">
            <div className="GuildHeader">

            </div>
            <ChannelSelector guild={guild}/>
        </div>
    )
} 

function FriendSelector() {
    return (
        <div className="ChildSelectorBody">

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
            <GuildSelector/>
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