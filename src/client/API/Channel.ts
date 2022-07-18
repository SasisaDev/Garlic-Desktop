import Object from "./Object"
import Message from "./Message";
import { GarlicAPI } from "./Garlic";
import Account from "./Account";
import Guild from "./Guild";

const quicksort = {
    Partition: (values: {current: Message[]}, l: number, r: number): number => {
        let x = values.current[r].Date;
        let less = l;

        for(let i = l; i < r; ++i) {
            if(values.current[i].Date <= x) {
                [values.current[i], values.current[less]] = [values.current[less], values.current[i]];
                ++less;
            }
        }
        [values.current[less], values.current[r]] = [values.current[r], values.current[less]];
        return less;
    },
    QuickSortImpl: (values: {current: Message[]}, l: number, r: number) => {
        if(l < r) {
            let q = quicksort.Partition(values, l, r);
            quicksort.QuickSortImpl(values, l, q-1);
        }
    },
    QuickSort: (values: {current: Message[]}) => {
        if(values.current) {
            quicksort.QuickSortImpl(values, (values.current.length-1)/2, values.current.length-1);
        }
    }
}

export default class Channel extends Object{
    LoadedMessages: Set<Message>;
    PinnedMessages: Set<Message>;
    Description: string;

    Category: Category;

    ParentGuild: Guild;

    SendMessage(msg: string) {
        
    }

    GetMessage(id: string): Message {
        return null;
    }

    GetMessages(range: {begin: number, end: number}) : Message[] {
        return null;
    }

    LoadMessagesByRange(range: number) {
        let oldestMessage = this.LoadedMessages[0];
        
        fetch(GarlicAPI + `/guild/${this.ParentGuild.GetID()}/channel/${this.GetID()}/message?token=${Account.GetToken()}&message=${oldestMessage.GetID()}&range=${range}`)
        .then((response)=>{
            response.json().then((json)=>{
                for(let i = 0; i < json.messages.length; i++) {
                    this.LoadedMessages.add(new Message(json.message[i]));
                }

                const filteredMessages = [...this.LoadedMessages];
                quicksort.QuickSort({current: filteredMessages});

                //Build Row
                let lastAccount: Account = null;
                for(let i = filteredMessages.length-1; i >= 0; i--) {
                    if(i < filteredMessages.length-1) {
                        if(filteredMessages[i].Account === lastAccount) {
                            if(filteredMessages[i+1].InRow < 8) {
                                filteredMessages[i].InRow = filteredMessages[i+1].InRow + 1;
                            } else {
                                filteredMessages[i].InRow = 0;
                            }
                        }
                    }
                    lastAccount = filteredMessages[i].Account;
                }
                
                this.LoadedMessages = new Set(filteredMessages);
            })
        })
    }

    LoadMessagesByTime(range: {begin: Date, end: Date}) {
    }

    UnloadMessages() {
        this.LoadedMessages.clear();
    }
}