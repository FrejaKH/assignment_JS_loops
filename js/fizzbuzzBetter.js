/* Task: modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those) */


// Funktion der logger tallene fra 1-100
// Hvis et tal kan divideres med både 3 og 5, logger den 'FizzBuzz' til consolen i stedet for selve tallet
// Hvis et tal kan divideres med 3, logger den 'Fizz' til consolen i stedet for selve tallet
// Hvis et tal kan divideres med 5, men ikke med 3, logger den 'Buzz' til consolen i stedet for hele tallet


console.log('This is FizzBuzzBetter')

    for (let i = 1; i <= 100; i++){
        

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');

        } else if (i % 5 === 0 && !(i % 3 === 0)) {
            console.log('Buzz');

            
        } else if (i % 3 === 0) {
            console.log('Fizz');            

        } else {

            console.log(i);
        }

    }