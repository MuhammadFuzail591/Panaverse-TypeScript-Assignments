//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.

let Guests:string[]=["Fuzail","Junaid","Uzair","Ali"];
console.log(`-------------SORRY-------------`);
console.log(`=====We Have Lost extra space=====`);
console.log(`=====Now only TWO Guests can be invited=====`);
console.log(`Our Existing list was: [${Guests}]`);
let RemovedGuest:string[]=Guests.splice(0,2);
for(let nmbr:number=0;nmbr<RemovedGuest.length;nmbr++){
    //Printing them Sorry message
    console.log(`=========SORRY=========`);
    console.log(`Hi..!! ${RemovedGuest[nmbr]} We are taking our invitation back as we are unable to attend you`);
}
console.log(`Our new Guest list is: [${Guests}]`);

for(let n:number=0;n<Guests.length;n++){
    console.log(`----------------------------------`);
    console.log(`============INVITATION============`);
    console.log(`----------------------------------`);
    console.log(`Hi..!! ${Guests[n]} You are invited to our party..We will be waiting for you`);
}
//Deleting the remaining items of array
Guests.splice(0,2);
console.log(`Now the array is empty [${Guests}]`);