/* Task: Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead */

// Funktion der logger tallene fra 1-100
// Hvis et tal kan divideres med 3, logger den 'Fizz' til consolen i stedet for selve tallet
// Hvis et tal kan divideres med 5, men ikke med 3, logger den 'Buzz' til consolen i stedet for hele tallet

console.log('This is FizzBuzz');

    for (let i = 1; i <= 100; i++){
        

        if (i % 3 === 0) {
            console.log('Fizz');

        } else if (i % 5 === 0 && !(i % 3 === 0)) {
            console.log('Buzz');
            
        } else {
            console.log(i);
        }

    }

