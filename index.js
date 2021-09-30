var arr = []; //Skapar en array
while(arr.length < 10) //Gör en loop för random nummer som placeras in i arrayen
{
var r = Math.floor(Math.random() *  100) + 1;
if (arr.indexOf(r) === -1) arr.push(r);
}
document.getElementById("a").innerHTML = arr; //Gör om h3 till arrayen
arr.sort(function(a, b){return a - b}); //Sorterar arrayen på ett enkelt sätt
console.log(arr); //Skriver ut arrayen i konsollen
document.getElementById("b").innerHTML = arr; //Gör om den andra h3 till arrayen
//klar med första uppgiften här

var use = document.getElementById("user");
var ema = document.getElementById("emaill");
var pas = document.getElementById("pass");
var repe = document.getElementById("rep");
var sub = document.getElementById("sube");
let bol = new Boolean(false);
var che = document.getElementById("chec");
if (sub.clicked == true)
{

}

function comparing(c, d)
{
if (c != d)
{
bol(true);
}
}