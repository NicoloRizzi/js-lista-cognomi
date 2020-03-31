// VARIABILI
var vectorSurname = [
    'Bianchi',
    'Rossi',
    'Duzioni',
    'Balsano',
    'Verdi'];
var surname = '';

// GENERO UNA VARIABILE PER PUNTARE AL BOTTONE

var btnAggiungi = document.getElementById('aggiungi');


// ASSEGNO ALLA VARIABILE DI GESTIRE L'EVENTO DEL CLICK

btnAggiungi.addEventListener('click',
function() {
    // ACQUISISCO IL VALORE CONTENUTO NELLA INPUT
    surname = document.getElementById('cognome').value;
    console.log('Acquisizione del valore nel campo input: ' + surname);

    // AGGIUNGO L'ELEMENTO AL VETTORE

    vectorSurname.push(surname);
    console.log(vectorSurname);

    

}
)

