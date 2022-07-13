import Object from "./Object"
import Guild from "./Guild";
import Friend from "./Friend";

import { GarlicAPI } from "./Garlic";

export default class Account extends Object{
    private static AccessToken: string;
    static GetToken(): string {return Account.AccessToken}

    Username: string;

    Guilds: Guild[] = [];
    Friends: Friend[] = [];

    constructor(id: string, access_token: string) {
        super(id);
        Account.AccessToken = access_token;

        // Fetch Account

        fetch(GarlicAPI + `/user/${id}?token=${access_token}`)
            .then((response)=>{
                response.json().then((json)=>{
                    // Load guilds
                    for(let i = 0; i < json.guilds.length; i++) {
                        let guild: Guild = new Guild(json.guilds[i]);
                        this.Guilds.push(guild);
                    }

                    // Load Friends
                    for(let i = 0; i < json.friends.length; i++) {
                        let friend: Friend = new Friend(json.friends[i]);
                        this.Friends.push(friend);
                    }
                })
            })
    }

    AddGuild(GuildID: string) {

    }

    RemoveGuild(GuildID: string) {

    }

    GetGuild(GuildID: string): Guild {
        let ret: Guild = null;
        
        this.Guilds.forEach(guild => {
            if(guild.GetID() === GuildID) {
                ret = guild;
            }
        })

        return ret;
    }
}