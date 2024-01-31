
// setTimeout has different properties than Promise
// 


console.log("1"); //! 1

setTimeout(() => console.log("2"), 0);//!last  // last of order putting this code to task queue
Promise.resolve()
    .then(() => console.log("3")); //!before last // also added to the task queue


console.log("4");

// EVENT LOOP in the browser


// Call Stack always one
// MessageQueue ==> TaskQueue in a different browsers have different amounts
//  Tasks from the same TaskQueue are executed in order they arrived
//  Task of the same type should go to the same TaskQueue
//  Rendering Pipeline runs 60 times per second or every 16 ms 
    
 // Rendering Pipeline executed when one task from TaskQueue is executed

 // ================  MicroTask  =========== 

//1.run when call Stack is empty
//2.executed before rendering pipeline 
//3. If there are multiply microtasks in the Microtask Queue, all of them must be executed before Rendering Pipeline can run
//

// 1) when call stack is empty execute MicroTask (Promises, queueMicrotask())
// 2) After MicroTask is empty execute TaskQueue (SetTimeout, fetch, onClick)
 
// if need put to the MicroTask use or Promise or queueMicrotask()
