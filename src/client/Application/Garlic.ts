import Account from "./Account";
import MD5 from "crypto-js/md5"

export const GarlicAPI = "localhost";

export default class GarlicApplication {
    static Token: string;

    constructor(token: string) {
        GarlicApplication.Token = token;
    }

    async FetchAccount(name, password) : Promise<Account> { 
        return fetch(GarlicAPI + `/oauth2?token=${GarlicApplication.Token}
                            &username=${name} 
                            &password=${MD5(password).toString()}`)
            .then( (response) => {
                return response.json().then((json)=>{
                    return new Account(json.account_id, json.access_token);
                });
            });
    }
}