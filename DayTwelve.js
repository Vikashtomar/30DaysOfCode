// Challenge 12
// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
//  "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
 
function myclock(){
    let dt = new Date();
    let hours = ('0' + dt.getHours()).slice(-2);
    let minutes = ('0' + dt.getMinutes()).slice(-2);
    let seconds = ('0' + dt.getSeconds()).slice(-2);
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(() => {
    myclock();
}, 1000);

