import Account from "./Account";
import Channel from "./Channel";
import { GarlicAPI } from "./Garlic";
import Message from "./Message";
import Object from "./Object"

export default class Friend extends Object {
    Username: string;
    Motd: string;
    FriendChannel: Channel;

    constructor(id: string) {
        super(id);

        fetch(GarlicAPI + `/user/${this.GetID()}?token=${Account.GetToken()}`)
        .then((response)=>{
            response.json().then((json)=>{
                this.Username = json.username;
                this.Motd = json.motd;
                if(json.channel) {
                    this.FriendChannel = new Channel(json.channel);
                }
            })
        })
    }

    GetChannel(): Channel {
        return this.FriendChannel;
    }
}