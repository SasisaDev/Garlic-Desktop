import React, { useEffect } from "react"

import GuildList from "./Guild/GuildList/GuildList"
import Selector from "./Guild/Selector/Selector"
import Messenger from "./Guild/Messenger/Messenger"

import { ViewMode } from "../Application/Redux/Slice"

import {useSelector} from "react-redux"
import {reduxStore} from "../Application/Redux/Store"

import "./GuildBody.scss"

export default function GuildBody() {

    useEffect(()=> {

    }, [])

    return (
        <div className="GuildBody">
            <GuildList />
            <Selector />
            <Messenger channel={null}/>
        </div>
    )
}