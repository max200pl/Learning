// Code goes here!
const names: Array<string> = []; //string[] 
/**
 * 1) Generic type its connected type  to another type
 * 2) Generic type allow get type for example data.split(" ")
 */


// Another generic type is Promise type

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This done!");
    }, 200);
})

promise.then(data => {
    data.split(" ");
})


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "123" }, { age: 30 });
console.log(mergeObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no values.";

    if (element.length === 1) {
        descriptionText = "Got 1 element ";
    } else if (element.length > 1) {
        descriptionText = "Got" + element.length + " elements";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(["Hi there!", "Could"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value: " + obj[key];
}

extractAndConvert({ name: "max" }, "name");

class DataStorage<T extends string | number | boolean | object>{
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Many");
textStorage.removeItem("Max");

console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();
const objName = { name: "Max" };

// objectStorage.addItem({ name: "Max" })  //this example don't work because hove different objects
// objectStorage.removeItem({ name: "Max" }); //this example don't work
objectStorage.addItem(objName)
objectStorage.removeItem(objName);

interface CurseGoal {
    title: string;
    description: string;
    completeUtil: Date;
}

function createCurseGoal(
    title: string, description: string, date: Date

): CurseGoal {
    let courseGoal: Partial<CurseGoal> = {}; // пока пустой но потом будет иметь тип 

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;

    return courseGoal as CurseGoal;
}

const nameCal: Readonly<string[]> = ['Max', "Anna"]
// name.push("Manu") // can't manipulate data from this array






