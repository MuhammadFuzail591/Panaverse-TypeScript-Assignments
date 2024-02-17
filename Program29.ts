//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
//statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
//in your array, the if block should print a statement, such as You really like bananas!

let Fav_Fruits:string[]=['Orange','Mango','Banana'];
if(Fav_Fruits.includes('Mango')){
    console.log(`Mango is my most favorite fruit`);
}
if(Fav_Fruits.includes('Orange')){
    console.log(`I also like Orange`);
}
if(Fav_Fruits.includes('Strawberry')){
    console.log(`Strawberry must be available all the time for me`);
}
if(Fav_Fruits.includes('Banana')){
    console.log(`Banana must be available for me`);
}
if(Fav_Fruits.includes('Grapes')){
    console.log(`Grapes are not sour`);
}
