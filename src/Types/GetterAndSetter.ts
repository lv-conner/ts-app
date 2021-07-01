let passcode = "secret passcode";

export class Employee {
    constructor(name:string){
        this._fullName = name;
    }
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

export class Computer{
    private _card:string;
    constructor(initCard:string){
        this._card = initCard;
    }
    get Card():string{
        return this._card;
    }
    set Card(value:string){
        if(value.indexOf("card") > -1){
            this._card = value;
        }else{
            console.log("Not Contain Card Str");
        }
    }

}