// Finish this function stub so it returns true if num is even and false 
// otherwise. 🤔
function even(num) {
  return num % 2 === 0; // What's the difference between == and ===? 🤔
}


/* 

What will we see in the browser's console if we do these statements? 🤔

[1, 3, 4, 7].find(even)
[5, 4, 6].find(even)
[1, 3].find(even)
[].find(even)
["I", "gotta", "bad", "feeling"].find(even)

*/

// So what does find do? 🤔
// What kind of argument do you have to give it? 🤔
// What kind of thing does that argument have to return? 🤔

/* 

Complete the following, so that find will return the first odd number. 
Use an anonymous function as the callback. 🤔
  
let shoeSizes = [4, 5, 6, 7, 8, 9];
let firstOddShoeSize = shoeSizes.find(some anonymous function);

This would work:

shoesizes.find(function(shoeSize) {
  return shoeSize % 2 === 1;
})

If you wanted to try arrow syntax:

shoesizes.find(shoeSize => shoeSize % 2 === 1)

*/

// -------------------------------------------------------

const hats = [
  {
    type: "top",
    adjective: "ostentatious",
  },
  {
    type: "beret",
    adjective: "brooding",
  },
  {
    type: "fedora",
    adjective: "adventurous",
  },
];

/* 

How would you find an "adventurous" hat? 🤔
Use a function declaration. 
Test out your function first with different adjectives.

function adventurous(hat) {
  return hat.adjective === "adventurous";
}

let advHat = hats.find(adventurous);

*/

/* 

How would you find a hat whose type starts with "b"? 🤔
(Hint: JS strings have a startsWith method.) 
Practice using an anonymous function. 

let bHat = hats.find(??);

*/
