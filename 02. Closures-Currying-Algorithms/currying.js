/*
Currying

sum(1)(2)(3)


function sum(a :number){
    console.log({a});
    return function(b : number){
        console.log({a,b});
        return function(c : number){
            console.log({a,b,c});
             return undefined
            return a + b +c;
        }
    }
}

console.log(sum(3)(4)(5));


sum(1)('b')([1,2,3])

*/
/*
OUTPUT
   { a: 1 }
   { a: 1, b: 'b' }
   { a: 1, b: 'b', c: [ 1, 2, 3 ] }
*/
//Currying in practices
//Burada EDV hesablanmasi ucun funksiya yazirig ve curryingden istifade edilir
function calcEDV1(percent) {
    return function (price) {
        return (price * percent) / 100;
    };
}
var calc2 = calcEDV1(18);
console.log(calc(1000));
console.log(calc(100));
