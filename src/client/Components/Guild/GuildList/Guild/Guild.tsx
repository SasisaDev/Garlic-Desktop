import React, { useCallback, useEffect } from "react"

import "./Guild.scss"

import GuildObject from "../../../../API/Guild"
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentGuild } from "../../../../Application/Redux/Slice";

export default function Guild({guild, onClick=()=>{}}) {
    const globalGuild = useSelector(state => (state as any).garlic.guild);
    const dispatch = useDispatch();
    const setGlobalGuild = useCallback(()=>{dispatch(SetCurrentGuild((guild as GuildObject).GetID()));}, [dispatch]);

    function LoadGuild() {
        if(guild) {
            setGlobalGuild();
            console.log(guild);
            console.log(globalGuild);
            if((guild as GuildObject).GetID() !== "Friends") {

            }
        }
    }

    useEffect(()=>{
        console.log(globalGuild)
    }, [globalGuild])

    return (
        <div className={"Guild " + ((guild as GuildObject) ? ((globalGuild === (guild as GuildObject).GetID()) ? "Active" : "") : "")} onClick={ LoadGuild }>
            {
            //<img className="Guild" src={icon}></img>
            }
        </div>
    )
} 