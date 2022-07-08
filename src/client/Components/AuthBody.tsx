import React from "react"

import GuildList from "./Guild/GuildList/GuildList"
import Selector from "./Guild/Selector/Selector"
import Messenger from "./Guild/Messenger/Messenger"

import { ViewMode } from "../Application/Redux/Slice"

import {useSelector} from "react-redux"
import {reduxStore} from "../Application/Redux/Store"

import "./AuthBody.scss"

export default function AuthBody() {
    return (
        <div className="AuthBody">

        </div>
    )
}