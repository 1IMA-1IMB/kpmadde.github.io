let sauer= 100; 

function tellenensau(){
    sauer=sauer-1;
    console.log(sauer);
}



// oppgave 1b
function tellNoenSauer(antall){
    sauer = sauer - antall; 
    console.log( "Du har " + sauer + " sauer igjen å telle før du sovner ")
}

//oppgave1c

function MistetTellingen(){
  sauer = 100  
}

tellNoenSauer(2)

MistetTellingen()
console.log(sauer)