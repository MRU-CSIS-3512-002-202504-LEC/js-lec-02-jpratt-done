let foods = {
  "Royal Canin": {
    type: "dry",
    cost: "$$$",
  },
  "Friskies Turkey & Duck": {
    type: "wet",
    cost: "$",
  },
  houseplants: {
    type: "forbidden, but don't care",
    cost: "$$",
  },
};

let cats = [
  {
    name: "Prrfect",
    weight: 3,
  },
  {
    name: "Akebono",
    weight: 100,
    food: foods["Royal Canin"],
  },
  {
    name: "Ms. Mrrp",
    weight: 12,
    food: foods["houseplants"],
  },
  {
    name: "Nermal",
    weight: 10,
    food: foods["Friskies Turkey & Duck"],
  },
];

/* 

How would you find all the cats that are "heavy" (let's say strictly over 10)? 🤔 
Try with a function declaration, then with an anonymous function, then with 
arrow syntax.

function heavy(cat) {
  return cat.weight > 10;
}

let heavy = cats.filter(heavy);

--- or ---

let heavy = cats.filter(function(cat) {
  return cat.weight > 10;
})

--- or ---

let heavy = cats.filter(cat => cat.weight > 10)



*/

// 🛑 DETOUR: write a loop that prints out the
//  NAME of those cats and the COST of their food.
//  if the cat doesn't have any food, print out "N/A" for
// that cat. 🤔

/*

A start:

for (cat of cats) {
  let name = cat.????;
  let foodCost = cat.food ? cat.food.cost : ????? ;
  console.log(`${name}'s food costs ${foodCost}.`);
}


*/



/* How would you find all the cats that have weights 
   between 2 and 11 (inclusive on both ends)? 
   Use an anonymous function. 🤔 

let catsInRange = something using filter 

*/

/* 🛑 DETOUR: So are the results COPIES or not? Let's find out!

  Add a property "meowTone" to the first result 
  in catsInRange with a value "imperious".
  
  Now look in the original cats array.
  
  What do you see? 🤔
  What does this mean? 🤔

*/

/* 

Find all cats who don't have a food property. 
Use a function declaration. 🤔 
⭐ Hint: Use undefined to help you here.

let noFoodCats = something using filter 

*/
