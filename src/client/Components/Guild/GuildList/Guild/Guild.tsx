import React, { useCallback, useEffect } from "react"

import "./Guild.scss"

import GuildObject from "../../../../API/Guild"
import { useDispatch, useSelector } from "react-redux";
import { SwitchViewMode, SetCurrentGuild, ViewMode } from "../../../../Application/Redux/Slice";

export default function Guild({guild, onClick=()=>{}}) {
    const globalGuild = useSelector(state => (state as any).garlic.currentGuild);
    const dispatch = useDispatch();
    const setGlobalGuild = useCallback(()=>{dispatch(SetCurrentGuild((guild as GuildObject).GetID()));}, [dispatch]);

    function LoadGuild() {
        if(guild && typeof guild !== 'string') {
            setGlobalGuild();
            console.log(guild);
            console.log(globalGuild);
            if((guild as GuildObject).GetID() !== "Friends") {
                dispatch(SwitchViewMode(ViewMode.Guilds))
            } else {
                dispatch(SwitchViewMode(ViewMode.Friends))
            }
        }
    }

    useEffect(()=>{
        console.log(globalGuild)
    }, [globalGuild])

    return (
        <div className={"Guild " + ((typeof guild === 'string') ? guild : ((guild as GuildObject) ? ((globalGuild === (guild as GuildObject).GetID()) ? " Active" : "") : ""))} onClick={ LoadGuild }>
            {
            //<img className="Guild" src={icon}></img>
            }
        </div>
    )
} 