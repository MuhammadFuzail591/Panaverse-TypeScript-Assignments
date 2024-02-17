// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let UserNames:string[]=[];
if(UserNames.length==0){
    console.log(`List is empty...We need to find some Users...!!!`);
}
for(let i:number=0;i<UserNames.length;i++){
   
    if(UserNames[i]=='Admin'){
        console.log(`Hi...!! Admin, would you like to see traffic on system..??`);
    }
    else{
        console.log(`Hi..!! ${UserNames[i]} We are pleased to see you again..`);
    }

}