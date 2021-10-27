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

function validera()
{
var pas = document.getElementById("exampleInputPassword1");
var repe = document.getElementById("exampleInputPassword2");
const userd = document.getElementById("formGroupExampleInput");
var checkbx = document.getElementById("exampleCheck1");
var ema = document.getElementById("exampleInputEmail1");
console.log(userd.value);
if(userd.value == ""){
    alert("You need to enter the username");
}
else if(pas.value != repe.value)
{
alert("You need to repeat the same password");
}
else if(pas.value.length <= 5)
{
alert("Your password needs to be 6 or more characters");
}
else if (checkbx.checked == false)
{
alert("You need to agree to the terms of use");
}
else if(ema.value.indexOf("@"))
{
alert("You need to write a valid email");
}
else{
    window.location.assign("indexus.html");
}

return false;
}