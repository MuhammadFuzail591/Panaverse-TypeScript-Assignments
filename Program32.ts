// 32. Checking Usernames: Do the following to create a program that simulates how
//websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two 
//of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let CurrentUsers:string[]=['Ahmad','Prince','Fuzail','Waqar','Saad'];
let NewUsers:string[]=['Junaid','Khalid','Saad','Prince','Kabeer'];

for(let i:number=0;i<NewUsers.length;i++){
    let Nmb:number=0;
    for(let j:number=0;j<CurrentUsers.length;j++){
        if(NewUsers[i]==CurrentUsers[j]){
            console.log(`${NewUsers[i]}..!!UserName is already taken!! Try after making changes in your UserName`);
            Nmb=1;
            break; 
        }
    }
    if(Nmb==0){
        console.log(`${NewUsers[i]} UserName is available`);
    }
}
