// Intentional Error: If you haven’t received an array index error in one of your programs yet,
//try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.

let Arr:number[]=[1,2,3,4,5];
for(let i:number=0;i<=7;i++){
    console.log(Arr[i]);
    //It is showing "undefined" on index 5,6,7
}

//Fixing error
    //Now it will print as usuall
    console.log(`The Array is:[${Arr}]`);