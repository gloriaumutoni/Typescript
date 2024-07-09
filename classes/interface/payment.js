export class Payment {
    // readonly client:string
    // private detail:string
    //  public amount:number
    // constructor(a:string,b:string,c:number){
    //     this.client=a
    //     this.detail=b
    //     this.amount=c
    // }
    // a shorter way to do it
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} will ${this.detail} $${this.amount}`;
    }
}
