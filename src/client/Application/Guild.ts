import Object from "./Object"
import Channel from "./Channel";

export default class Guild extends Object{
    Channels: Set<Channel>;

    GetChannel(id: string): Channel {
        return null;
    }

    GetChannels(): Channel[] {
        return null;
    }
}