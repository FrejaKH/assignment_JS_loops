
// Flip a coin n times

console.log('Flip a coin n times')
let number = Number(prompt("Enter a number"));
console.log(number);

let heads = 0;
let tails = 0;

console.log('heads\ttails');

// Et for-loop som kører så mange gange, som det antal der bliver tastet i prompten
for (let i = 0; i < number; i++) {

    // Angiver et tilfældigt tal mellem 1 og 2
    let flip = Math.random();
    flip = Math.floor(flip*2+1);

    // if-statement, hvor 1 lægges til variablen, som har den samme værdi, som det tilfældige tal mellem 1 og 6 der fås fra koden ovenfor  
    
    if (flip === 1) {
        heads++
    } else {
        tails++
    }

}
// Her console.logges værdierne af de angivne variabler
console.log(`${heads}` + '\t' + '\t' + `${tails}`);


// Role a dice n times

console.log('Roll a dice n times')
let number2 = Number(prompt("Enter another number"));
console.log(number2);

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

console.log('ones\ttwos\tthrees\tfours\tfives\tsixes');

for (let roll = 0; roll < number2; roll++) {

    // Angiver et tilfældigt tal mellem 1 og 6
    let eye = Math.random();
    eye = Math.floor(eye*6+1);

    // if-statement, hvor 1 lægges til variablen, som har den samme værdi, som det tilfældige tal mellem 1 og 6 der fås fra koden ovenfor  
    if (eye === 1) {
        ones++
    } else if (eye === 2) {
        twos++
    } else if (eye === 3) {
        threes++
    } else if (eye === 4) {
        fours++
    } else if (eye === 5) {
        fives++
    } else if (eye === 6) {
        sixes++
    }

}
// Her console.logges værdierne af de angivne variabler
console.log(`${ones}` + '\t' + '\t' + `${twos}` + '\t' + '\t' + `${threes}` + '\t' + '\t' + `${fours}` + '\t' + '\t' + `${fives}` + '\t' + '\t' + `${sixes}`);