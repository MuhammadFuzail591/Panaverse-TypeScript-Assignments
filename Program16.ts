let Guests:string[]=["Fuzail","Junaid","Uzair","Ali"];
// console.log(`Our list before making changes is:[${Guests}]`);
// let UnableGuest:string=Guests[1];
// let NewGuest:string="A.Raheem";
// console.log(`${UnableGuest} is not able to come....`);
// Guests.splice(1,1,NewGuest);

// console.log(`Our new list after making changes: [${Guests}]`);


console.log(`-------------CONGRATS-------------`);
console.log(`=====We Have Found more space=====`);
console.log(`Our Existing list was: [${Guests}]`);

//Adding at first of Array
Guests.splice(0,0,"Kamran");
//Adding at middle of Array
Guests.splice(2,0,"Asfand Yar");
//Adding at end of Array
Guests.push("A.Raheem");

console.log(`Our new Guest list is: [${Guests}]`);

for(let n:number=0;n<Guests.length;n++){
    console.log(`----------------------------------`);
    console.log(`============INVITATION============`);
    console.log(`----------------------------------`);
    console.log(`Hi..!! ${Guests[n]} You are invited to our party..We will be waiting for you`);
}