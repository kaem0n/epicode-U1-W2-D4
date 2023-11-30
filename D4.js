console.log('/==/ Esercizi JS U1-W2-D4 (https://github.com/kaem0n/epicode-U1-W2-D4) /==/')

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2 = 1) {
    return l1 * l2
}
console.log('1) Dati l1 = 2 e l2 = 3, l\'area del rettangolo è:', area(2, 3))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2 = 0) {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}
console.log('2) Dati n1 = 3 ed n2 = 3, il risultato è:', crazySum(3, 3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n) {
    if ((n - 19) > 19) {
        return (n - 19) * 3
    } else {
        return n - 19
    }
}
console.log('3) Dati n = 39 e 19, il risultato è:', crazyDiff(39))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log('4a) Dato n = 101, il risultato della funzione è:', boundary(101))
console.log('4b) Dato n = 90, il risultato della funzione è:', boundary(90))
console.log('4c) Dato n = 400, il risultato della funzione è:', boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
    if (string.indexOf('EPICODE') === 0) {
        return 'Questa è una stringa'
    } else {
        return 'EPICODE Questa è una stringa'
    }
}
console.log('5a) Se string = EPICODE, il risultato della funzione è:', epify('EPICODE'))
console.log('5b) Se string = ciaone , il risultato della funzione è:', epify('ciaone'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
    if (n & 3 || n & 7) {
        return true
    } else {
        return false
    }
}
console.log('6a) Se n = 6, n è divisibile per 3 o per 7:', check3and7(6))
console.log('6a) Se n = 14, n è divisibile per 3 o per 7:', check3and7(14))
console.log('6a) Se n = 16, n è divisibile per 3 o per 6:', check3and7(16))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
    const stringArray = string.split("")
    stringArray.reverse()
    string = stringArray.join('')
    return string
}
console.log('7) Data una stringa "bioparco", il risultato della funzione è:', reverseString('bioparco'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
    const stringArray = string.split('')
    stringArray[0] = stringArray[0].toUpperCase()
    for (let i=0; i<stringArray.length; i++) {
        if (stringArray[i] === ' ') {
            stringArray[i+1] = stringArray[i+1].toUpperCase()
        }
    }
    string = stringArray.join('')
    return string
}
console.log('8) Se string = "sopra la panca la capra canta", diventa:', upperFirst('sopra la panca la capra canta'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
    return string.slice(1, string.length - 1)
}
console.log('9) Se string = albero, diventa:', cutString('albero'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
    const nArray = []
    for (let i=0; i<n; i++) {
        nArray[i] = Math.floor(Math.random() * 11)
    }
    return nArray
}
console.log('10a) Nuovo array creato (n = 50):', giveMeRandom(50))
console.log('10b) Nuovo array creato (n = 16):', giveMeRandom(16))