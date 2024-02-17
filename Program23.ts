//23. Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test. Your code
//should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log(`_______________== OPERATOR_______________`);
let Vehicle:string="4 wheel";
console.log(`Is Vehicle=='4 wheel'? I predict True`);
console.log(Vehicle=='4 wheel');

console.log(`_______________!= OPERATOR_______________`);
let Nmb1:number=20;
console.log(`Is Number != 20..? I predict False`);
console.log(Nmb1!=20);

console.log(`_______________< OPERATOR_______________`);
let Nmb2:number=30;
console.log(`Is Number < 50..? I predict True`);
console.log(Nmb2<50);

console.log(`_______________> OPERATOR_______________`);
let Nmb3:number=20;
console.log(`Is Number > 20..? I predict False`);
console.log(Nmb1>20);

console.log(`_______________<= OPERATOR_______________`);
let Nmb4:number=20;
console.log(`Is Number <= 20..? I predict True`);
console.log(Nmb1<=20);

console.log(`_______________=== OPERATOR_______________`);
let Str1:string="First String";
//=== is Strict equality operator which returns true if both values are equal and of same datatype
console.log(`Is Str1==="First String"..? Ipredict True`);
console.log(Str1==="First String");

console.log(`_______________!== OPERATOR_______________`);
let Str2:string="Second String";
//!== is Strict inequality operator which returns true if both values are not equal and or of different datatype
console.log(`Is Str2!=="First String"..? Ipredict True`);
console.log(Str2!=="First String");

console.log(`_______________=== OPERATOR_______________`);
let Str3:string="123";
let Nmb5:number=123;
console.log(`Is Str3===Nmb5..? Ipredict False`);
console.log(Str3 === Nmb5);

console.log(`_______________!== OPERATOR_______________`);
let Str4:string="123";
let Nmb6:number=123;
console.log(`Is Str3!==Nmb5..? Ipredict True`);
console.log(Str3 !== Nmb5);
console.log(`_______________>= OPERATOR_______________`);
let Nmb7:number=80;
console.log(`Is Number >= 100..? I predict False`);
console.log(Nmb7>=100);