let message: string = "Hellssadado";
console.log(message);

let regexp: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];
let set = new Set([1, 2, 3]);

// Tuples 

let tuple: [number, number] = [0, 0]
// Aliases
type Point = { x: number, y: number }
let center: Point = {
    x: 0, y: 0
}

const point: Point = { x: 0, y: 0 };
// point = { x: 0, y: 0};

type Add = (...values: number[]) => number;
let add: Add;
add = function (...values: number[]): number {
    return values.length
}

//======== Classes typing

class Animal {
    private _name: string // can't get name 
    protected _surName: string // can get name 

    constructor(name: string) {
        this._name = name;
        this._surName = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this._name}: ${distanceInMeters}`);
    }
}

let cat = new Animal("Cat");
cat.move(10)
// cat.name = "Dog"; ERROR private field

// Classes Generic

class Queue1<T> {
    private data: Array<T> = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); };
}

let queue: Queue1<number> = new Queue1();







