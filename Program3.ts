//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//uppercase, and titlecase.

let PersonName:string="muHammad FuzAil";
console.log(`Original Value: ${PersonName}`);
console.log(`Lowercase: ${PersonName.toLowerCase()}`);
console.log(`Uppercase: ${PersonName.toUpperCase()}`);
console.log(`Titlecase: ${titleCase(PersonName)}`);

//Function for TitleCase
function titleCase(str:any) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
