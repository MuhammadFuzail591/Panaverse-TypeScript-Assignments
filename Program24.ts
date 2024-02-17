//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
//try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
console.log(`___________Equality OPERATOR___________`);
let Str1:string="First String";
let Str2:string="Second String";
console.log(`Is Str1==Str2...?I predict False`);
console.log(Str1==Str2);
console.log(`__________InEquality OPERATOR__________`);
let Str3:string="String";
let Str4:string="String";
console.log(`Is Str1==Str2...?I predict True`);
console.log(Str3==Str4);
console.log(`_____USING .toLowerCase() Function_____`);
console.log(`Is Str1.toLowerCase()=="first string"..? I predict True`);
console.log(Str1.toLowerCase()=="first string");
console.log(`======OPERATIONS WITH NUMBERS======`);
let Nmb1:number=10;
let Nmb2:number=20;
console.log(`Is Nmb1==Nmb2...?I predict False`);
console.log(Nmb1==Nmb2);

console.log(`Is Nmb1!=Nmb2...?I predict True`);
console.log(Nmb1!=Nmb2);


console.log(`Is Nmb1==Nmb2...?I predict False`);
console.log(Nmb1>Nmb2);

console.log(`Is Nmb1==Nmb2...?I predict True`);
console.log(Nmb1<Nmb2);

console.log(`Is Nmb1>=Nmb2...?I predict False`);
console.log(Nmb1>=Nmb2);


console.log(`Is Nmb1<=Nmb2...?I predict True`);
console.log(Nmb1<=Nmb2);

console.log(`=====USING "AND" & "OR" OPERATOR=====`);
//&& operator returns false if any one of two operands is false
console.log(`(Nmb1==Nmb2) && (Nmb1<Nmb2) I predict It will be False`);
console.log((Nmb1==Nmb2) && (Nmb1<Nmb2));
//|| operator returns true if any one of both operands in true
console.log(`(Nmb1==Nmb2) || (Nmb1<Nmb2) I predict It will be True`);
console.log((Nmb1==Nmb2) || (Nmb1<Nmb2));

console.log(`=====CHECK ITEM IS INCLUDED OR NOT=====`);
let Str:string[]=["Fuzail","Uzair","Ali","Ahmad"];
console.log(`The string is:[${Str}]`);
console.log(`Is Fuzail included in this string named "Str"...?I predict it will be True`);
console.log(Str.includes("Fuzail"));

console.log(`Is Akbar included in this string named "Str"...?I predict it will be False`);
console.log(Str.includes("Akbar"));