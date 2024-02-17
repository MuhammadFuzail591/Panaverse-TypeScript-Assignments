//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.


//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
console.log(`==============USING TASK#14==============`);
let Guests:string[]=["Fuzail","Junaid","Uzair","Ali"];
//Declaring variable to store length of array, which means number of guests
let NumOfGuests:number=Guests.length;
console.log(`=============NUM OF GUEST(S)============`);
console.log(`I'm Inviting total ${NumOfGuests} Guests to my party`);
for(let n:number=0;n<Guests.length;n++){
    console.log(`----------------------------------`);
    console.log(`============INVITATION============`);
    console.log(`----------------------------------`);
    console.log(`Hi..!! ${Guests[n]} You are invited to our party..We will be waiting for you`);
}