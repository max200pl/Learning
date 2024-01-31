"use strict";
// Code goes here!
const names = []; //string[] 
/**
 * 1) Generic type its connected type  to another type
 * 2) Generic type allow get type for example data.split(" ")
 */
// Another generic type is Promise type
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This done!");
    }, 200);
});
promise.then(data => {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "123" }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = "Got no values.";
    if (element.length === 1) {
        descriptionText = "Got 1 element ";
    }
    else if (element.length > 1) {
        descriptionText = "Got" + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Hi there!", "Could"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "max" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Many");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objectStorage = new DataStorage();
const objName = { name: "Max" };
// objectStorage.addItem({ name: "Max" })  //this example don't work because hove different objects
// objectStorage.removeItem({ name: "Max" }); //this example don't work
objectStorage.addItem(objName);
objectStorage.removeItem(objName);
function createCurseGoal(title, description, date) {
    let courseGoal = {}; // пока пустой но потом будет иметь тип 
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;
    return courseGoal;
}
const nameCal = ['Max', "Anna"];
// name.push("Manu") // can't manipulate data from this array
