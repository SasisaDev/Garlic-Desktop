import Object from "./Object"
import Message from "./Message";

export default class Channel extends Object{
    LoadedMessages: Set<Message>;
    PinnedMessages: Set<Message>;
    Description: string;

    SendMessage(msg: string) {
        
    }

    GetMessage(id: string): Message {
        return null;
    }

    GetMessages(range: {begin: number, end: number}) : Message[] {
        return null;
    }

    FetchMessagesByRange(range: {begin: number, end: number}) : Message[] {
        return null;
    }

    FetchMessagesByTime(range: {begin: Date, end: Date}) : Message[] {
        return null;
    }
}