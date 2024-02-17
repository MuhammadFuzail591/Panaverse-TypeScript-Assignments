// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let Magicians:string[]=['Tickola','MR Beans','Gippy'];

function PrintArray(list:string[]):void{
    console.log(`--------------MAGICIANS NAMES--------------`);
    for(let name in list){
        console.log(list[name]);
    }
}

//Calling Function
PrintArray(Magicians);