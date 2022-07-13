
export default class Object {
    private ID: string;

    constructor(id: string) {
        this.ID = id;
    }

    GetID(): string {
        return this.ID;
    }
}