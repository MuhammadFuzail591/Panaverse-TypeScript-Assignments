// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

let Animals:string[]=["Lion","Tiger","Wolf"];
console.log(`___________NAMES OF ANIMALS___________`);
//Printing Names of Animals
for(let i:number=0;i<Animals.length;i++){
    console.log(Animals[i]);
}

console.log(`___________1st MODIFICATION___________`);
//Printing Lines for each animal
for(let i:number=0;i<Animals.length;i++){
    console.log(`${Animals[i]} is carnivorous`);
}
console.log(`___________CARNIVOROUS ANIMALS___________`);
console.log(`Carnivorous mammals include tigers, lions, cheetahs, etc. Black eagles, kites,\n and hawks are carnivorous birds. Alligators, crocodiles, snakes,\n and komodo dragons are some of the carnivorous reptiles.`);

