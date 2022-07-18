import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import CategoryObject from "../../../../API/Category"
import Guild from "../../../../API/Guild"

import "./ChannelSelector.scss"

function Channel({channel}) {
    return <div className="ChannelSelectorChannel">

    </div>
}

function Category({category}) {
    return <div className="ChannelSelectorCategory">

    </div>
}

export default function ChannelSelector({guild}) {
    const dispatch = useDispatch();

    return <div className="ChannelSelectorBody">
        {[...(guild as Guild).Channels].map(obj => (<Channel channel={obj} />))}
        {[...(guild as Guild).Categories].map((cat: CategoryObject) => (<Category category={cat}/>))}
    </div>
}