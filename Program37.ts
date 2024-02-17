// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size:string="Large",text:string="I love TypeScript"){
    console.log(`Size of Shirt is ${size}`);
    console.log(`Text to be printed on shirt: ${text}`);
}
//Calling function
console.log(`_____________DEFAULT MESSAGE_____________`);
make_shirt();//Print default values

console.log(`_____________MEDIUM SIZE_____________`);
make_shirt('Medium');//Print default message with Medium size

console.log(`_____________OTHER MESSAGE_____________`);
make_shirt('Small','Never Give Up');//Print different size and different text