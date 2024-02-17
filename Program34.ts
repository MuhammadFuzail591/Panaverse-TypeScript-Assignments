// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

let Pizzas:string[]=["Fajita","Bar B Que","Pepperoni"];

//Printing Names of my favourite pizzas
console.log(`____________FAVOURITE PIZZAS____________`);
for(let i:number=0;i<Pizzas.length;i++){
    console.log(Pizzas[i]);
}

//Printing Single line for every pizza
console.log(`____________AFTER MODIFICATION____________`);
for(let i:number=0;i<Pizzas.length;i++){
    console.log(`One of my Favourite Pizza flavours is ${Pizzas[i]}.`);
}

//Printing some description 
console.log(`____________PRINTING LINES____________`);
console.log(`Pizza is one of the most cheap and tasty food.\nThere are many flavours availabe but I like three flavours more which are described above.\nFor me...PIZZA can replace my meal .........I Really Love Pizza......... `);