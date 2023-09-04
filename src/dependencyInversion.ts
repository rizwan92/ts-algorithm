import {Stripe} from './stripe'

export class Store {
    stripe: Stripe
    constructor(user:string){
        this.stripe = new Stripe(user)
    }

    purchaseBike (){
        this.stripe.makePayment(200)
    }

    purchaseHelmet(){
        this.stripe.makePayment(50)
    }
}

