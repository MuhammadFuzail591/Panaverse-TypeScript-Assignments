//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 //and make a list that stores several examples. Use your list to print a series of statements
 //about these items, such as “I would like to own a Honda motorcycle.”

let Str:string[]=["Civic","City","BR-V","Saloon"];
let Nmb:number=0;
for(Nmb;Nmb<Str.length;Nmb++){
    console.log(`Honda proudly presents new model of ${Str[Nmb]}`);
}