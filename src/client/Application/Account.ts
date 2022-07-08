import Object from "./Object"
import Guild from "./Guild";
import Friend from "./Friend";

export default class Account extends Object{
    private AccessToken: string;
    Username: string;

    Guilds: Guild[] = [];
    Friends: Friend[] = [];

    FetchAccount() {
        
    }
}