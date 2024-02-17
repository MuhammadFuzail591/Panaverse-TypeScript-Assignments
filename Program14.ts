//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let Guests:string[]=["Fuzail","Junaid","Uzair","Ali"];

for(let n:number=0;n<Guests.length;n++){
    console.log(`----------------------------------`);
    console.log(`============INVITATION============`);
    console.log(`----------------------------------`);
    console.log(`Hi..!! ${Guests[n]} You are invited to our party..We will be waiting for you`);
}