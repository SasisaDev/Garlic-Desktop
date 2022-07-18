import Object from "./Object"

import Account from "./Account"

export default class Message extends Object{
    Account: Account;
    Message: string;
    GuildID: string;
    Date: number;
    InRow: number;
}