//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.


let Guests:string[]=["Fuzail","Junaid","Uzair","Ali"];
console.log(`Our list before making changes is:[${Guests}]`);
let UnableGuest:string=Guests[1];
let NewGuest:string="A.Raheem";
console.log(`${UnableGuest} is not able to come....`);
Guests.splice(1,1,NewGuest);

console.log(`Our new list after making changes: [${Guests}]`);
for(let n:number=0;n<Guests.length;n++){
    console.log(`----------------------------------`);
    console.log(`============INVITATION============`);
    console.log(`----------------------------------`);
    console.log(`Hi..!! ${Guests[n]} You are invited to our party..We will be waiting for you`);
}