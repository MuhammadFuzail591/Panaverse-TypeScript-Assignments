// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let Magicians:string[]=['Tickola','MR Beans','Gippy'];

function make_great(list:string[]):void{
    for(let i:number=0;i<list.length;i++){
        list[i]='The Great '+ list[i];
    }
}

function ShowMagicians(list:string[]):void{
    console.log(`--------------MAGICIANS NAMES--------------`);
    for(let i:number=0;i<list.length;i++){
        console.log(list[i]);
    }
}

make_great(Magicians);

//Calling Function
ShowMagicians(Magicians);