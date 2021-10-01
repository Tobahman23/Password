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
var com = 0;
var chec = 0;
var ech = 0;
if (sub.clicked == true)
{
checkwords(pas);
checkwords(repe);
comparing(pas, repe);
emailcheck(ema);
if (bol == true && che.checked == true)
{
window.location.href="indexus.html";
}
else {
if (com = 1)
{
    document.getElementById("a").innerHTML = "You need to have the same password twice!";
}
else if (chec = 1)
{
    document.getElementById("a").innerHTML = "You need to agree to the terms!";
}
else if (ech = 1)
{
document.getElementById("a").innerHTML = "You nede to write a correct email adress!";
}
}
}

function comparing(c, d)
{
if (c == d)
{
bol(true);
}
else 
{
bol(false);
com = 1;
}
}

function checkwords(e)
{
if (e.length >= 6 )
{
bol(true);
}
else {
    bol(false);
    chec = 1;
}
}

function emailcheck(f)
{
if (f.indexOf('@') == -1)
{
bol(true);
}
else {
    bol(false);
    ech = 1;
}
}