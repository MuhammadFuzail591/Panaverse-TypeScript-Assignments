// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point,
//just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

//____________________________________________________________________________________________
//First Program....
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//uppercase, and titlecase.

//Variable Declared
var PersonName="muHammad FuzAil";
console.log("_________________________________________________");
console.log("==================First Program==================");
//Statement for Original string
console.log(`Original Value: ${PersonName}`);
//Statement for string in lower case..
console.log(`Lowercase: ${PersonName.toLowerCase()}`);
//Statement for string in Upper Case..
console.log(`Uppercase: ${PersonName.toUpperCase()}`);
//Statement for string in Title Case..
console.log(`Titlecase: ${TitleCase(PersonName)}`);

//Function for TitleCase
function TitleCase(str:any) {
    //split function is used to split the string completely like "Muhammad" and "Fuzail" separated.
    //.toLowerCase function convert whole string into lower case.
    str = str.toLowerCase().split(' ');
    //for loop run again and again untill the total length of string is met
    for (var i = 0; i < str.length; i++) {
        //.slice function returns the string from specified index
        //In this case it starts from 2nd word of each string and return whole string except 1st character
        //.charAt(0) returns the 1st character of string and .toUpperCase will convert it into upper case
        //+ operator will concatenate both 1st character and the string returned by .slice() function.
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
//____________________________________________________________________________________________
//2nd Program....
////6. Stripping Names: Store a person’s name, and include some whitespace characters at the
//beginning and end of the name. Make sure you use each character combination, "\t" and
//"\n", at least once. Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.


console.log("_________________________________________________");
console.log("=================Second Program==================");
//Declaring a variable of type string in which I stored my name along with some white spaces.
//Carriage return, new line, tab and space etc. all are called white spaces.
//  \n means 'newline' and \t means 'tab'.
let Name:string="\n\t   Muhammad Fuzail  \t \n";
//Following statement will print my name along with white spaces declared by me in the variable's name.
console.log(`Original:${Name}`);
//Following statement will print my name only by ignoring white spaces used by me with the name.
//This is due to '.trim' function. It eliminates all the white spaces before or after the original string.
console.log(`Stripped:${Name.trim()}`);