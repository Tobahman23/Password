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

var use = document.getElementById("user"); //skapar variabler för alla inputs
var ema = document.getElementById("emaill");
var pas = document.getElementById("pass");
var repe = document.getElementById("rep");
var sub = document.getElementById("sube");
let bol = new Boolean(false); //skapar bool
var che = document.getElementById("chec");
var com = 0; //skapar variabler för att kolla om något blir fel i inmatningen
var chec = 0;
var ech = 0;
function validera() //huvudfunktionen 
{
checkwords(pas); //anropar funktioner som ska konfirmera ifall allt är korrekt
checkwords(repe);
comparing(pas, repe);
emailcheck(ema);
if (bol == true && che.checked == true) //körs ifall inget är fel
{
location.href= 'indexus.html'; 
}
else { //annars körs denna som kollar vad exakt som är fel och säger till användaren vad som är fel
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

function comparing(c, d) //funktion för att jämföra lösenord så det repeterade lösenordet är lika
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

function checkwords(e) //funktion för att kolla så att lösenordet är mer än 6 karaktärer
{
if (e.length > 6 )
{
bol(true);
}
else {
    bol(false);
    chec = 1;
}
}

function emailcheck(f) //kollar ifall ett snabel a finns med i mailen för att validera att det är en mail
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