

const num1 = 1
const num24 = 24
const num678 = 678
const wynik = num1 + num24 + num678
console.log(wynik)

const imie = 'Jan'
const nazwisko = 'ź'
const imieinazwisko = imie + nazwisko
const duzelitery = imie.toUpperCase() + ' ' + nazwisko.toUpperCase()
console.log(duzelitery)


const malelitery = imie.toLowerCase() + ' ' + nazwisko.toLowerCase()
console.log(malelitery)

const tablica = [12 , "Roman" , imieinazwisko]
console.log(tablica)
console.log(tablica[1])
const imie1 = "Alex"
const imie2 = "Alicja"
const imie3 = "Anastazja"
const imie4 = "Bartosz"
const imie5 = "Barbara"
const imie6 = "Barabasz"
const imie7 = "Celsjusz"
const imie8 = "Celion"
const imie9 = "Curp"
const imie10 = "Dawid"
const imie11 = "Diana"
const imie12 = "Dobrawa"
const imie13 = "Eliasz"
const imie14 = "Ela"
const imie15 = "Eluwiusz"
const imie16 = "Fabiam"
const imie17 = "Filopantrop"
const imie18 = "Gabriel"
const imie19 = "Gabriela"
const imie20 = "Hania"
const imie21 = "Hindus"
const imie22 = "Oskar"
const imie23 = "Piotr"
const imie24 = "Łukasz"
const imie25 = "Radosław"
const imie26 = "Jaro"
const imie27 = "Patryk"
const imie28 = "Natalia"
const imie29 = "Róża"
const imie30 = "Marta"

const tablicaimion = [imie1 , imie2 , imie3 , imie4 , imie5 , imie6 , imie7 , imie8 , imie9 , imie10 , imie11 , imie12 , imie13 , imie14 , imie15 , imie16 , imie17 , imie18 , imie19 , imie20 , imie21 , imie22 , imie23 , imie24 , imie25 , imie26 , imie27 , imie28 , imie29 , imie30]

console.log("Imię numer 1" , tablicaimion[0])
console.log("Imię numer 2" , tablicaimion[1])
console.log("Imię numer 3" , tablicaimion[2])
console.log("Imię numer 4" , tablicaimion[3])
console.log("Imię numer 5" , tablicaimion[4])
console.log("Imię numer 6" , tablicaimion[5])
console.log("Imię numer 7" , tablicaimion[6])
console.log("Imię numer 8" , tablicaimion[7])
console.log("Imię numer 9" , tablicaimion[8])
console.log("Imię numer 10" , tablicaimion[9])
console.log("Imię numer 11" , tablicaimion[10])
console.log("Imię numer 12" , tablicaimion[11])
console.log("Imię numer 13" , tablicaimion[12])
console.log("Imię numer 14" , tablicaimion[13])
console.log("Imię numer 15" , tablicaimion[14])
console.log("Imię numer 16" , tablicaimion[15])
console.log("Imię numer 17" , tablicaimion[16])
console.log("Imię numer 18" , tablicaimion[17])
console.log("Imię numer 19" , tablicaimion[18])
console.log("Imię numer 20" , tablicaimion[19])
console.log("Imię numer 21" , tablicaimion[20])
console.log("Imię numer 22" , tablicaimion[21])
console.log("Imię numer 23" , tablicaimion[22])
console.log("Imię numer 24" , tablicaimion[23])
console.log("Imię numer 25" , tablicaimion[24])
console.log("Imię numer 26" , tablicaimion[25])
console.log("Imię numer 27" , tablicaimion[26])
console.log("Imię numer 28" , tablicaimion[27])
console.log("Imię numer 29" , tablicaimion[28])
console.log("Imię numer 30" , tablicaimion[29])


  tablicaimion.forEach(item => {
    console.log("Stare" , item) 
    console.log("Nowe" , "Henryk")
})

const noweImiona = tablicaimion.map(item => item = "henryk")
console.log(noweImiona)


const oskar = tablicaimion.find(item => {
    if (item === "oskar") {
        return item
    }
})
console.log("find" , oskar)

const tablicaLiczb = new Array(1, 2, 3, 8, 9, 87, 855, 55)
console.log(tablicaLiczb)

const wiekszeOdJeden = 
tablicaLiczb.every(item => item > 1)
console.log(wiekszeOdJeden)


tablicaLiczb.push(666)
console.log(tablicaLiczb)

const liczbyDo99 = new Array()
for(let i = 1; i < 101; i++) {
    liczbyDo99.push(i)
}
console.log(liczbyDo99)

const imionaDo99 = new Array()
for(let i = 0; i < 100; i++) {
    imionaDo99.push("Jan" + i)
}
console.log(imionaDo99)

const liczbyParzyste = new Array()
for(let i = 0; i < 200; i++) {
    if(i % 2 === 0 && i > 0) {
        liczbyParzyste.push(i)
    }
}
console.log(liczbyParzyste)

let indexLiczby88 = liczbyDo99 
liczbyDo99.forEach((item, index) => {
    if (item === 88) {
        indexLiczby88 = index
    }
})
console.log(indexLiczby88, liczbyDo99[indexLiczby88])

const liczbyOd1Do1000 = new Array()
for(let i = 1; i < 1000; i++) {
    if(i % 2 !== 0) {
        liczbyOd1Do1000.push(i)
    }
}
console.log(liczbyOd1Do1000)