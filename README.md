# js-2-tests
2 test tasks

## Task 1

Create a universal way to limit the number of calls of any function, no more than N time per second.
Write a function called callLimiter that accepts function A and a number N as arguments and returns another function B that limits number of calls.
In any given second A should not be called more than N times. If B is called less than N times, calls to A should occur immediately. If more than N, the rest of the calls should occur later, so that the 'less than N times per second' rule stands.
The code should run in a modern browser and shouldn't use any third-party libraries.

Usage examples:
```
element.onclick = callLimiter( handler, 3 );
---------
var limitedLog = callLimiter( console.log, 10 );
for(i=0; i< 100; ++i) {
limitedLog( ‘i=’, i );
}
```

## Task 2

A number array X is given.
Create array Y where
`Y[n] == <product of all numbers from X except X[n]>`

Use of the division operator is prohibited.
Don't take integer overflow into account.
The aim is to produce an efficient algorithm, i.e. use as little multiplications as possible.
