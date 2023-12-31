console.log('/==/ Esercizi aggiuntivi (facoltativi) per D4 /==/')

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = function (n) {
    const x = giveMeRandom(n)
    let sum = 0
    for (let i=0; i<x.length; i++) {
        if (x[i] > 5) {
            console.log('E1a) Ho trovato un numero > 5:', x[i])
            sum += x[i]
        } else if (x[i] <= 5) {
            console.log('E1a) Ho trovato un valore <= 5:', x[i])
        }
    }
    return sum
}
console.log('E1b) La somma dei valori > 5 è:', checkArray(5))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    {
        name: 'pane',
        price: 1,
        id: '001',
        quantity: 2
    },
    {
        name: 'acqua',
        price: 2,
        id: '002',
        quantity: 1
    },
    {
        name: 'dentifricio',
        price: 2.50,
        id: '003',
        quantity: 1
    },
    {
        name: 'petfood',
        price: 3,
        id: '004',
        quantity: 1
    }
]

const shoppingCartTotal = function () {
    let total = 0
    for (let i=0; i<shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity
    }
    return total
}
console.log('E2) Il totale del carrello è', shoppingCartTotal() + '€')

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function (n, id) {
    for (let i=0; i<shoppingCart.length; i++) {
        if (shoppingCart[i].id === id) {
            return shoppingCart[i].quantity += n
        }
    }
}
console.log('E3a) Aggiungo altro pane (5):', addToShoppingCart(5, '001'))
console.log('E3b) Aggiungo altre casse d\'acqua (10):', addToShoppingCart(10, '002'))
console.log('E3c) Aggiungo altro dentifricio (7):', addToShoppingCart(7, '003'))
console.log('E3d) Aggiungo altro petfood (8):', addToShoppingCart(8, '004'))
console.log('E3e) Carrello della spesa aggiornato:', shoppingCart)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function () {
    const prices = []
    for (let i=0; i<shoppingCart.length; i++) {
        prices.push(shoppingCart[i].price)
    }
    for (let i=0; i<prices.length; i++) {
        if (prices[i] === Math.max(...prices)) {
            return shoppingCart[i].name
        }
    }
}
console.log('E4) L\'oggetto più costoso del carrello è:', maxShoppingCart())

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function () {
    return shoppingCart[shoppingCart.length - 1]
}
console.log('E5) L\'ultimo oggetto del carrello è:', latestShoppingCart())

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (n) {
    if (n < 0 || n > 9) {
        return console.log('E6a) Errore: inserire un numero intero tra 0 e 9.')
    } else if (n >= 0 && n <= 9) {
        let i = 0
        let sum = 0
        while (i < 3) {
            let x = Math.floor(Math.random() * 10)
            if (x > n || x === 9) {
                sum += x
                i++
                console.log('E6a) Numero maggiore di ' + n + ' trovato: ' + x + '. Streak: ' + i)
            } else if (x < n) {
                console.log('E6a) Numero < di ' + n + ' trovato: ' + x + '. Reset.')
                sum = 0
                i = 0
            }
        }
        return sum
    }
}
console.log('E6b) Valore di loopUntil(3)', loopUntil(3))

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const average = function (n1, n2, n3, n4) {
    const numbers = [n1, n2, n3, n4]
    let sum = 0
    if (typeof numbers[numbers.length-1] !== 'number') {
        numbers.pop()
    }
    for (let i=0; i<numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            numbers.splice(i, 1)
        }
        sum += numbers[i]
    }
    return sum / numbers.length
}
console.log('E7) Dati i numeri: 2, 4, 6, 8, la loro media aritmetica è:', average(2, 4, 6, 8))
console.log('E7) Dati i numeri: 2, 4, 6, ciaone, la loro media aritmetica è:', average(2, 4, 6, 'ciaone'))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function (string1, string2, string3) {
    const strings = [string1, string2, string3]
    const elementLength = []
    for (let i=0; i<strings.length; i++) {
        elementLength.push(strings[i].length)
    }
    for (let i=0; i<strings.length; i++) {
        if (elementLength[i] === Math.max(...elementLength)) {
            return strings[i]
        }
    }
}
console.log('E8) Date tre stringhe: ciao; buongiorno; ciaone; la più lunga è:', longest('ciao', 'buongiorno', 'ciaone'))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (emailContent) {
    if (emailContent.search('SPAM') !== -1 || emailContent.search('SCAM') !== -1) {
        return false
    } else {
        return true
    }
}
console.log('E9) Questa mail NON è spam:', antiSpam('questo non è SPAM lo giuro compra le mie azioni fasulle'))
console.log('E9) Questa mail NON è spam:', antiSpam('ti sei iscritto a ServizioACaso, complimenti!'))
console.log('E9) Questa mail NON è spam:', antiSpam('ciao sono un principe nigeriano caduto in disgrazia, mandami 1000€ e ti restituisco 1 milione tra una settimana! non è SCAM lo giuro'))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const daysPassed = function (year, month, day) {
    const minute = 1000 * 60
    const hour = minute * 60
    const days = hour * 24
    const date = new Date("'"+year+"-"+month+"-"+day+"'")
    const present = new Date()
    const milliseconds = present.getTime() - date.getTime()
    return Math.round(milliseconds / days)
}
console.log('E10) Giorni passati dalla data 2023-10-21:', daysPassed(2023, 10, 21))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const matrixGenerator = function (x, y) {
    const matrix = []
    for (let i=0; i<x; i++) {
        const values = []
        for (let j=0; j<y; j++) {
            values.push(""+i+""+j+"")
        }
        matrix.push(values)
    }
    return matrix
}
console.log('E11a) Matrice 3x2:', matrixGenerator(3, 2))
console.log('E11b) Matrice 5x7:', matrixGenerator(5, 7))