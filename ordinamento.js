// Dichiariamo l'array di partenza fornito dalla traccia
let numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

console.log("Array originale:", numeri);

// ==========================================
// ESERCIZIO BASE: Ordine Decrescente
// ==========================================
// Usiamo [...numeri] per creare una COPIA dell'array, così non roviniamo l'originale.
// Poi applichiamo sort() passandogli una funzione di confronto matematica.
let ordineDecrescente = [...numeri].sort(function(a, b) {
    return b - a; // Se il risultato è positivo, 'b' viene messo prima di 'a'
});

console.log("Ordine Decrescente:", ordineDecrescente);


// ==========================================
// VARIANTE: Ordine Crescente
// ==========================================
// Stessa logica, ma invertiamo la sottrazione matematica.
let ordineCrescente = [...numeri].sort(function(a, b) {
    return a - b; // Se il risultato è negativo, 'a' viene messo prima di 'b'
});

console.log("Ordine Crescente:", ordineCrescente);