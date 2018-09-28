var message = "Welcome";
var msgCount = 0;
var timer1 = setInterval("textFunc()", 150);

textFunc = () => {
    document.getElementById("Welcome").innerHTML = message.substring(0, msgCount);

    if (msgCount === message.length) {
        clearInterval(timer1);
        setInterval(200);
    } else {
        msgCount++;
    }
}
