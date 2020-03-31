// VARIABILI
var vectorSurname = [
    'Bianchi',
    'Rossi',
    'Duzioni',
    'Balsano',
    'Verdi'];

var surname = '';

var elencoCognomiOrdinati = document.getElementById('lista-cognomi-ordinati');

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

    // ORDINO IL VETTORE IN MANIERA ALFABETICA CON LA FUNZIONE ESISTENTE

    vectorSurname.sort();

    // CREO VARIABILE DI APPOGGIO PER MEMORIZZARE OGNI SIGNOLO VALORE CONTENUTO NELL'ARRAY

    var daStampare = '';
    // RICERCA DELLA POSIZIONE DELL'ULTIMO VALORE DI SURNAME INSERITO ALL'INTERNO DEL VETTORE
    var posizione = vectorSurname.indexOf(surname);
    // CREO UN CICLO PER LEGGERE FINO ALL'ULTIMO ELEMENTO DELL'ARRAY E MEMORIZZARLO ALL'INTERNO DELLA VARIABILE

    for (var i = 0; i < vectorSurname.length; i++) {
        daStampare += "<li>" + vectorSurname[i] + "</li>";
        console.log(daStampare);
    }

    //PRINT DEGLI ELEMENTI DEL VETTORE ORDINATO

    elencoCognomiOrdinati.innerHTML = daStampare;
   

    // PULIZIA DEL CAMPO INPUT
    surname = document.getElementById('cognome').value = '';

    
    
}
);




