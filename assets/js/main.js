// lev 1_1 

// In dieser Übung werden wir forEach() lernen.

// Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.

// Verwende die Liste aus dem Kommentar.
// Sortiere getraenke vorher alphabetisch.

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

let myDrinks = getraenke.sort();

// let myDrinks = getraenke.map((elt) => {
//     console.log("working?");
//     return elt.sort();
// })

// myDrinks();
// document.write(myDrinks);
console.log(myDrinks);

// lev1_2: map()

// let upperDrinks = getraenke.map();

let upperDrinks = getraenke.map((elt) => {
    return elt.toUpperCase();
})

console.log(upperDrinks);

// FUNKTIONIERT !!!!!!!!!!

// lev1_3: map()

// Schreibe eine Funktion, die jeden Wert aus dem Array (siehe Kommentarbereich) mit 2 multipliziert und das Ergebnis sortiert.

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];  

let multiply = array.map((elt) => {
    console.log("workinggg?");
    //jeden Wert mit 2 multiplizieren
    return elt * 2;
    //Ergebnis sortieren
})

console.log(multiply);

console.log(multiply.sort((a,b) => a-b));

// FUNKTIONIERT1!!!!!!!!!!!


// multiply();

// lev1_4: map()

// Schreibe eine Funktion, mit Hilfe von map(), die jede Temperatur in einem Array von Fahrenheit in Celsius umwandelt.
// Verwende die mathematische Formel zum Berechnen.
// Verwende das Array im Kommentarbereich.
// Überprüfe das Ergebnis in der Konsole.

// Assets
// map()
// return
// toFixed() || Math.round()
// celsius = (℉ - 32) / 1.8


let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let formel = fahrenheit.map = (elt) => {
    return ((elt - 32) / 1.8);
}

// lev1_5: forEach()

// Verwende die Variable checkNumber und forEach(). Wenn sich die Zahl durch 3 teilen lässt, dann soll zu ihr 100 addiert werden.
// Verwende den Code aus dem Kommentarbereich.
// Verwenden ein if Statement, um zu überprüfen, ob die Zahl durch 3 teilbar ist.
// Wenn ja, addiere 100 zu dieser Zahl hinzu.
// Gib das Resultat in der Konsole aus.

let checkNumber2 = checkNumber.forEach((num) => {
    // return 
    if ((num % 3) == 0) {
        // wenn durch 3 teilbar und Restwert 0, dann +100 hinzufügen
        console.log(checkNumber2+100);
    } else {
        // wenn nicht
        console.log("nicht durch 3 teilbar");
    }
})

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];  