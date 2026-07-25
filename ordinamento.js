let numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

console.log("--- ORDINAMENTO DECRESCENTE ---");

// Usiamo la parola chiave "function" classica, senza frecce o scorciatoie
numeri.sort(function(a, b) {
    // Se il primo numero è più piccolo del secondo, lo spostiamo indietro (restituendo 1)
    if (a < b) {
        return 1;
    } 
    // Se il primo numero è più grande, lo portiamo avanti (restituendo -1)
    else if (a > b) {
        return -1;
    } 
    // Se sono uguali, li lasciamo fermi (restituendo 0)
    else {
        return 0;
    }
});

console.log("Risultato decrescente: " + numeri);


console.log("--- ORDINAMENTO CRESCENTE (VARIANTE) ---");

// Per la variante, invertiamo semplicemente i segni di maggiore e minore negli if
numeri.sort(function(a, b) {
    if (a > b) {
        return 1;
    } 
    else if (a < b) {
        return -1;
    } 
    else {
        return 0;
    }
});

console.log("Risultato crescente: " + numeri);