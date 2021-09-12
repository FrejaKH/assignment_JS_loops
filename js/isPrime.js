// Task: Write a function isPrime(p) that returns true if p is prime, and false otherwise

function isPrime (p) {

    // Et for-loop som kører igennem tal fra 2 til tallet mindre end parameteren. 
    // Hvis en parameter giver modulus 0 imens den kører igennem for-loopet, vil tallet ikke være et primtal, idet der ikke er noget overskud tilbage
    // Hvis for-loopet er kørt helt igennem, og modulus ikke giver 0 på noget tidpunkt, må det betyde, at det er et primtal, da der ikke er noget tal der går op i parameteren
    for (i = 2; i < p; i++) {

    if (p % i === 0) {
        return false;
    }
    }
    return true;
}

console.log(isPrime(13));