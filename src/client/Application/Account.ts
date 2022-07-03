
import Guild from "./Guild";
import Friend from "./Friend";

export default class Account {
    private AccessToken: string;
    Username: string;

    Guilds: Guild[] = [];
    Friends: Friend[] = [];
}