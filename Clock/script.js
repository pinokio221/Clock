
window.onload = function() {
    setInterval(fSec, 1000);
    var clock_block = document.querySelector("#time");
    
function fSec() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    s++;
    clock_block.innerHTML = h + ":" + m + ":" +s; // time table
    
    document.querySelector("#seconds").style.transform = "rotate("+s*6+"deg)"; // sec
    document.querySelector("#minutes").style.transform = "rotate("+m*6+"deg)"; // min m * 6 = 1 min is the 6 degrees.
    document.querySelector("#hours").style.transform = "rotate("+h*30+"deg)"; // hours
    }
}
setInterval(fSec, 100);
