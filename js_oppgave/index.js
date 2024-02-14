//oppgave1 

let navn = "Madeleine Samartinean";
let alder = 17; 
let message = " velkommen til ditt JS-program *navn*! Du er *alder* år gammel!";

message = message.replace("*navn*", navn);
message = message.replace("*alder*", alder);

console.log(navn); 
console.log(alder);
console.log(message);

//oppgave2a 
function Oppgave_2(tekst,tall){
 let navn = "Madeleine Samartinean";
let alder = 17; 
let message = "velkommen til ditt JS-program *navn*! Du er *alder* år gammel!";

message = message.replace("*navn*", navn);
message = message.replace("*alder*", alder);


console.log(message);


}


//oppgave3
// Funksjon for å konvertere gallons til liter
function gallons_til_liter(mengde) {
    let liter = mengde * 3.78541; 
    console.log(mengde + " gallons tilsvarer " + liter + " liter.");
}

// Funksjon for å konvertere ounces til liter
function ounces_til_liter(mengde) {
    let liter = mengde * 0.0295735; 
    console.log(mengde + " ounces tilsvarer " + liter + " liter.");
}

// Funksjon for å konvertere cups til liter
function cups_til_liter(mengde) {
    let liter = mengde * 0.236588; 
    console.log(mengde + " cups tilsvarer " + liter + " liter.");
}

// Funksjon for å konvertere spiseskjeer til liter
function spiseskjeer_til_liter(mengde) {
    let liter = mengde * 0.0147868; 
    console.log(mengde + " spiseskjeer tilsvarer " + liter + " liter.");
}

// Kall funksjonene med eksempler
gallons_til_liter(2); 
ounces_til_liter(10); 
cups_til_liter(5);   
spiseskjeer_til_liter(3); 







