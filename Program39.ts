// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_country(city:string='Lahore',country:string='Pakistan'):string{
    return city+','+country;
}

let Result:string=city_country();
console.log(Result);
let Result1:string=city_country('Istanbul','Turkey');
console.log(Result1);
let Result2:string=city_country('Mumbai','India');
console.log(Result2);

