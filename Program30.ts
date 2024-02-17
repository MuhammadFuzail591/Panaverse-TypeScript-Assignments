//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in
//to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let UserNames:string[]=["Admin","Ali","Junaid","Hamza","Shahid"];
for(let i:number=0;i<UserNames.length;i++){
    if(UserNames[i]=='Admin'){
        console.log(`Hi...!! Admin, would you like to see traffic on system..??`);
    }
    else{
        console.log(`Hi..!! ${UserNames[i]} We are pleased to see you again..`);
    }

}