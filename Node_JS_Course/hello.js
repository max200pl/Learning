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

/** NODE JS
 * global
 * process
 * module
 * __filename
 * require()
*/
