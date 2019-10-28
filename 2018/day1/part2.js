var myArray = document.querySelector("pre").innerText.split("\n");
var x = 0;
var myFrequencies = [];
var isFounded = false;
while (!isFounded) {
    i = 0
    while (i < myArray.length - 1) {
        myFrequencies.push(x);
        //console.log("before: " + x);
        x += Number(myArray[i])
        //console.log("after: " + x);


        if (myFrequencies.indexOf(x) != -1) {
            console.log("hello " + x);
            isFounded = true;
            break;
        }
        i++
    }
}
