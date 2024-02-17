// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


//Rest Parameter Syntax ...list to accept variable number of arguments
function make_sandwich(...list: string[]):void {
    console.log(`================================`);
    console.log("Sandwich order:");
    for (let item of list) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss");
make_sandwich("Peanut Butter", "Jelly");