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

 //skapar variabler för alla inputs
const ema = document.getElementById("exampleInputEmail1");
const sub = document.getElementById("sube");
let bol = new Boolean(false); //skapar bool
const che = document.getElementById("exampleCheck1");
var com = 0; //skapar variabler för att kolla om något blir fel i inmatningen
var chec = 0;  //skapar variabler för att kolla om något blir fel i inmatningen 
var ech = 0; //skapar variabler för att kolla om något blir fel i inmatningen
function validera() //huvudfunktionen 
{
    var pas = document.getElementById("exampleInputPassword1");
    var repe = document.getElementById("exampleInputPassword2");
    const userd = document.getElementById("formGroupExampleInput");
    comparing(pas.value, repe.value)
if (bol == false && che.checked == true) //körs ifall inget är fel
{
location.href= 'indexus.html'; 
}
else { //annars körs denna som kollar vad exakt som är fel och säger till användaren vad som är fel
if (com = 1)
{
    document.getElementById("a").innerHTML = "You need to have the same password twice and include 6 or more characters!";
}
else if (che.checked == false)
{
    document.getElementById("a").innerHTML = "You need to agree to the terms!";
}
else {
    console.log("Error");
}
}
}

function comparing(c, d) //funktion för att jämföra lösenord så det repeterade lösenordet är lika
{
if (c == d && c.length>=6)
{
bol = true;
}
else 
{
bol = false;
com = 1;
}
}
//tog bort emailchecken i js då den inte funka så bra och jag har en fungerande i html