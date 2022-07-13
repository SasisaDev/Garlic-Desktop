import Object from "./Object"
import Channel from "./Channel";
import { GarlicAPI } from "./Garlic";
import Account from "./Account";

export default class Guild extends Object{
    Channels: Set<Channel>;
    Name: string;
    Icon: string;

    constructor(id: string, init: boolean = true) {
        super(id);

        if(init) {
            fetch(GarlicAPI + `/guild/${this.GetID()}?token=${Account.GetToken()}`)
            .then((response)=>{
                response.json().then((json)=>{
                    this.Name = json.name;
                    this.Icon = json.icon;
                })
            })
        }
    }

    GetChannel(id: string): Channel {
        return null;
    }

    GetChannels(): Channel[] {
        return null;
    }

    async LoadChannels() {
        fetch(GarlicAPI + `/guild/${this.GetID()}?token=${Account.GetToken()}`)
        .then((response)=>{
            response.json().then((json)=>{
                for(let i = 0; i < json.channels.length; i++) {
                    this.Channels.add(new Channel(json.channels[i]));
                }
            })
        })
    }

    async UnloadChannels() {
        this.Channels.clear();
    }
}