var arr = [];
while(arr.length < 10)
{
var r = Math.floor(Math.random() *  100) + 1;
if (arr.indexOf(r) === -1) arr.push(r);
}
document.getElementById("a").innerHTML = arr;
arr.sort(function(a, b){return a - b});
console.log(arr);
document.getElementById("b").innerHTML = arr;


