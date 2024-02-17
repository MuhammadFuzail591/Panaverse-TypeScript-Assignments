// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let Magicians:string[]=['Tickola','MR Beans','Gippy'];
let GreatMagicians:string[]=[];
function make_great(list:string[]):string[]{
    for(let item of list){
        GreatMagicians.push('The Great '+ item);
    }
    return GreatMagicians;
}

function ShowMagicians(list:string[]):void{
    console.log(`---------------------------------`);
    for(let item of list){
        console.log(item);
    }
}

let GreatMag:string[]=make_great(Magicians);
//Calling Function
ShowMagicians(Magicians);
ShowMagicians(GreatMag);