export class Stripe {
    user:string
    constructor(user:string){
        this.user = user
    }

    makePayment(amount:number){
        console.log("makeing pyament for stipe",amount)
    }
}
