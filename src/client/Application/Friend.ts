import Message from "./Message";
import Object from "./Object"

export default class Friend extends Object{
    Username: string;
    Motd: string;
    Messages: Set<Message>;
    
}