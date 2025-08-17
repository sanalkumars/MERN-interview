console.log("hello we are learning String in JS");

//  function for conveting items in to string

let str1 = String(120)
console.log("str1",str1,120);

// converting an object to string using string function
let obj ={ name :"sanal"}
console.log("obj",obj);
const str2 = String(obj)
console.log("str2",str2);
// converting an object to string using JSON.stringify function
const str3 = JSON.stringify(obj)
console.log("str3",str3);