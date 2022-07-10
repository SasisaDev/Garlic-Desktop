import Object from "./Object"
import Channel from "./Channel";

export default class Guild extends Object{
    Channels: Set<Channel>;
    Name: string;
    Icon: string;

    GetChannel(id: string): Channel {
        return null;
    }

    GetChannels(): Channel[] {
        return null;
    }
}