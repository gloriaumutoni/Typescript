import { HasFormetter } from './hasFormeter.js'
export class Payment implements HasFormetter{
    // readonly client:string
    // private detail:string
    //  public amount:number
    // constructor(a:string,b:string,c:number){
    //     this.client=a
    //     this.detail=b
    //     this.amount=c
    // }
     
    // a shorter way to do it
    constructor(
        readonly client:string,
        private detail:string,
        public amount:number 
    ){}
    
    format(){
        return `${this.client} will ${this.detail} $${this.amount}`
    }
    }