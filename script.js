const SIZES = {
    SMALL:{
        price: 50,
        calories: 20
    },
    MIDDLE:{
        price:75,
        calories:30
    },
    BIG:{
        price:100,
        calories:40
    }
}

const TOPPINGS = {
    CHEESE:{
        price:10,
        calories:20
    },
    SALAD:{
        price:20,
        calories:5
    },
    POTATO:{
        price:15,
        calories:10
    },
    SEASONING:{
        price:15,
        calories:0
    },
    MAYONNAISE:{
        price:20,
        calories:5
    }
       

}

function CreateHamburger(size){
    this.burgerSize = size
    this.toppings = [];
}

CreateHamburger.prototype.appendTopping = function(toping){
    this.toppings.push(toping)
}

CreateHamburger.prototype.getPrice = function(){
    return this.toppings.reduce((acc,el) => {
        return (acc+=el.price)
    }, this.burgerSize.price)
}

CreateHamburger.prototype.getCalories = function(){
    return this.toppings.reduce((acc, el) => {
       return (acc+=el.calories)
    },this.burgerSize.calories)
}
///////////////////////////////////////// I made it with CLASS method////////////////////////////

// class CreateHamburger {
//     constructor(size){
//         this.burgerSize = size
//         this.toppings = [];
//     }
//     appendTopping (toping){
//             this.toppings.push(toping)
//     }
//     getPrice(){
//         return this.toppings.reduce((acc,el) => {
//            return acc+=el.price
//         }, this.burgerSize.price)
//     }
//     getCalories(){
//         return this.toppings.reduce((acc, el) => {
//             return acc+=el.calories
//         },this.burgerSize.calories)
//     }
// }

const bigBurger = new CreateHamburger(SIZES.BIG)

bigBurger.appendTopping(TOPPINGS.MAYONNAISE)
bigBurger.appendTopping(TOPPINGS.SEASONING)
bigBurger.appendTopping(TOPPINGS.SALAD)
bigBurger.appendTopping(TOPPINGS.CHEESE)

const totalPrice = bigBurger.getPrice()
const totalCalories = bigBurger.getCalories()

console.log('Price of this hamburger',totalPrice)
console.log('Calories in this hamburger',totalCalories)
