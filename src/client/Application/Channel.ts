import Message from "./Message";

export default class Channel {
    private ID: string;

    SendMessage(msg: string) {

    }

    GetMessage(id: string): Message {
        return null;
    }

    GetMessages(range: {begin: number, end: number}) : Message[] {
        return null;
    }
}