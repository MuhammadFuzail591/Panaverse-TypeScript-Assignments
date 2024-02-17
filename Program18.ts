//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let Arr:string[]=["Islamabad","Palestine","Oxford Uni","Mohanjodaro","Tesla Industry"];
console.log(`___________________________________________________________________________`);
//Printing in original order
console.log(`Array in original order: [${Arr}]`);
console.log(`___________________________________________________________________________`);
//Printing in Alphabetical order
console.log(`Array in Alphabetical order:[${Arr.slice(0,5).sort()}]`);
console.log(`___________________________________________________________________________`);
//Again printing array
console.log(`Again printing array to show that it is still in original order:[${Arr}]`);
console.log(`___________________________________________________________________________`);
//Printing in reverse alphabetical order
console.log(`Array in reverse Alphabetical order:[${Arr.slice(0,5).sort().reverse()}] `);
console.log(`___________________________________________________________________________`);
//Again printing array
console.log(`Again printing array to show that it is still in original order:[${Arr}]`);
console.log(`___________________________________________________________________________`);
//Reversing original array
console.log(`Reversing order of array:[${Arr.reverse()}]`);
console.log(`___________________________________________________________________________`);
//Again reversing reversed array to show it will be equal to original again
console.log(`Reversing the Reversed order of array:[${Arr.reverse()}]`);
console.log(`___________________________________________________________________________`);
//Sorting Array
Arr.sort();
console.log(`Sorted Array:[${Arr}]`);
console.log(`___________________________________________________________________________`);
//Reverse sorting Array
Arr.reverse();
console.log(`Reverse Sorted Array:[${Arr}]`);
console.log(`___________________________________________________________________________`);


