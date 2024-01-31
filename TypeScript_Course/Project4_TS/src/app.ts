function Logger(logString: string) {
    return function (constructor: Function) { // execution second
        console.log(logString);
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) { // actual decorator function run first
        const hookEl = document.getElementById(hookId);
        const p = new constructor() // get {name: "Michael"}
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger("Logging - PERSON") // execute when class is defined 
@WithTemplate("<h1>My Person Object </h1>", 'app') // run first then @Logger execution
class Persona {
    name: "Michael";

    constructor() {
        console.log("Creating person...");
    }
}

const persona = new Persona();

console.log(persona);

// ----------------------------------------------------------------


function Log(target: any, propertyName: string | Symbol) {
    console.log("Property decorator!");
    console.log(target, propertyName); // target -> this constructor Poroduct, "propertyName" -> "title"

}


class Product {
    @Log
    title: string;
    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive");
        }
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}