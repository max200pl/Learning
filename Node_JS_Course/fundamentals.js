const mission = process.argv[2]

if (mission === "learn") {
    console.log('Time to write some code');
} else {
    console.log(`Is ${mission} really more fun?`);
}

// type node ->
// - process -> bunch different information about the process
// - process.argv -> C:\My_project\ReduxCourse\Node_JS_Course> node hello.js learn
// - global

// global.console.log("hello")

/** MODUlES NODE JS
 * global
 * process
 * module
 * __filename
 * require() ->> takes js file execution and return this code
*/

/**                                        Node JS Api:             C++
 *                                       * fs -> file system       node.js
 *                     V8                * http -> request         bindings         libuv
 *    JS   >>>>>    JS ENGINE   >>>>>>   * path -> path files
 *                                       * crypto -> secure
 *
*/


/** Non blocking functions -> CPU delegated -> hard drive or other devices
 *  1. setTimeout(function, 1000)
 *  2. request
 *  3. read file
*/


/** Multi-Treading, Process, Treads
 * 1. JS have one single tread
 * 2. libuv have multiple treads C++ and other languages operating system also
 *
*/

/**              --  <  -- --<   -  -  --< -  -    --<  -  -
 Libuv          |       Tread Pool      Asynchronous I/O        |
 *                    ↔️  |  |  |          File System           |
 *        EVENT LOOP  ↔️  |  |  |                                |
 *                    ↔️  |  |  |    -->   network   --->     System
 */


/** Callback queues
 *      ⬆️
 *  callback one
 *  callback two
 *  callback three
 *      ⬆️
 */

/**
 *   setTimeout ->
 *   setInterval ->
 *   setImmediate -> to be executed as soon as possible on the event loop
 */


/**
 *     timers      -------------------------------------------------------------    ⬅️
 *       ⬇️
 *     i/o callbacks (input/output callbacks (if finished reading files))
 *       ⬇️                                                                         🔄 EVENT LOOP
 *     setImmediate  (execute after i/o callbacks)
 *       ⬇️
 *     close callbacks (close file, net connection close) ---------------------     ➡️
 */


/** What is node the best
 *  1. Created services
 *  2. Take data from database
 *  3. Streaming video like a Netflix
 *  4. Created modern web a plications
 */


/** The observer Pattern
 *  1. Observers subscribe to event from Subject
 *
 *  For example:
 *    Chat client cant represent using observer pattern
 *
 *  Node EVENTS
 *  1. callback function using for subscribe
 *  2. Events module in Node.js
 *  3. const EventEmitter = require('events')
 *  4. Process events object is an instance of "EventEmitter"
 */

const EventEmitter = require('events')
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
// celebrity.on("race win", () => {
//     console.log('Congratulations! You are the best!');
// })

celebrity.on("race", (result) => {
    if (result === "win") {
        console.log('Congratulations! You are the best!');
    }
})

// Subscribe to celebrity for Observer 2
celebrity.on("race win", () => {
    console.log('Boo I could have better than that!');
})

process.on('exit', (code) => { // Trigger when program finished execution
    console.log("Process exit event with code: ", code);
})

celebrity.emit("race", "win");
celebrity.emit("race win");