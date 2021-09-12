// Task: Write an iterative function powi(r, e) that calculates the e-th power of r, r**e

function powi (r,e) {

    for (e = 1; e <= 10; e++) {

        let power = r**e;
       console.log(power);
    }
}
console.log(powi(2));




// Task: Write an iterative function facti(n) that calculates n!

console.log('Calculate n!');

// Dette er samme kode fra opgaven ved recursion - er ikke sikker på, hvad forskellen skal være?
let naturalNumber = Number(prompt("Write a natural number"));
console.log(naturalNumber);

let n = Math.round(naturalNumber)
console.log(n);

let f = 1;

for (n; n >= 1; n--) {
    
    f = f*n;
}

console.log(f);


