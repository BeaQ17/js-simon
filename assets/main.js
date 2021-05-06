//Un alert() espone 5 numeri generati casualmente.
//->Intervallo di scelta 1-100
var fiveNums = [];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (i=0; i<5; i++){
    var numero = randomNum(1, 100);
    
    if (!fiveNums.includes(numero)){
        fiveNums.push(numero);
    }

}

alert("Memorizza questi numeri: " + fiveNums);

console.log(fiveNums);

//Da lì parte un timer di 30 secondi.
//->3 secondi per il test
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, 
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var lista_utente = [];

setTimeout(timer, 3000);
function timer() {
    alert("Tempo scaduto!");
    

    for (i=0; i<5; i++){
        var numsUtente = Number(prompt("Inserisci i numeri che ricordi uno alla volta:"));
        if (fiveNums.includes(numsUtente)){
            lista_utente.push(numsUtente);
            document.getElementById("total").innerHTML = "Hai ricordato " + lista_utente.length + " numeri";
            document.getElementById("final").innerHTML = "E sono " + lista_utente;
        }
    
    }
}

console.log(lista_utente);



