// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


// ... is rest parameter to make function able to get any additional arguments with type and value
function CarInfo(Manufacturer:string,Model:string, ...optional:[string,any][]):object{
    let Car:object={
        "Manufacturer":Manufacturer,
        "Model":Model
    };
    for(let item in optional){
        Car[optional[item][0]]=optional[item][1];
    }
    return Car;
    }

console.log(CarInfo("Suzuki","Mehran",["color","White"],["Engine","VXR"]));

console.log(CarInfo("Toyota","Corolla",["color","Red"],["Engine","VVT-I"],["Year",2019]));