let numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

console.log("Array originale: " + numeri);

// --- 1. ORDINAMENTO DECRESCENTE (con cicli for classici) ---
let decrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

for (let i = 0; i < decrescente.length; i++) {
    for (let j = 0; j < decrescente.length - 1; j++) {
        // Se il numero a sinistra è PIÙ PICCOLO del successivo, li scambiamo
        if (decrescente[j] < decrescente[j + 1]) {
            let temp = decrescente[j];
            decrescente[j] = decrescente[j + 1];
            decrescente[j + 1] = temp;
        }
    }
}

console.log("Risultato decrescente: " + decrescente);


// --- 2. ORDINAMENTO CRESCENTE (VARIANTE) ---
let crescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

for (let i = 0; i < crescente.length; i++) {
    for (let j = 0; j < crescente.length - 1; j++) {
        // Se il numero a sinistra è PIÙ GRANDE del successivo, li scambiamo
        if (crescente[j] > crescente[j + 1]) {
            let temp = crescente[j];
            crescente[j] = crescente[j + 1];
            crescente[j + 1] = temp;
        }
    }
}

console.log("Risultato crescente: " + crescente);