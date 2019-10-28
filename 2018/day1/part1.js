var myArray = document.querySelector("pre").innerText.split("\n");
var i = myArray.length
while (i-- > 0) {
	x += Number(myArray[i])
}
console.log(x);
