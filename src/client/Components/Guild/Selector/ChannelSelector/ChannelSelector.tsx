import React, { useEffect } from "react"
import Guild from "../../../../API/Guild"

import "./ChannelSelector.scss"

function Channel(channel) {
    return <div className="ChannelSelectorChannel">

    </div>
}

export default function ChannelSelector({guild}) {

    return <div className="ChannelSelectorBody">
        {[...(guild as Guild).Channels].map(obj => (Channel(obj)))}
    </div>
}