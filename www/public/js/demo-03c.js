// How could we sort these alphabetically? 🤔
const sports = ["basketball", "hockey", "curling", "archery"];

// Notice that sports has been CHANGED - this means
// sort() MUTATES the array that calls it.
// This has repercussions.
//
// If you wanted to keep the original array
// and return a sorted copy, what would you do? 🤔
// Look into this on your own time. There's been
// a recent addition to the array methods that is
// one way to perform this task, but there are
// more traditional methods as well....

// How could we sort THESE alphabetically? 🤔
const colourNames = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "Unicorn",
];

// Crud. That _almost_ worked. What's going on? 🤔
// How do we fix it? 🤔
// Hint: Strings in JS have a localeCompare() method....

// Once you've got the colours fixed...how
// would you sort them in REVERSE alphabetical order? 🤔

// How could we sort these in ASCENDING numerical order? 🤔
// You're going to need a comparator function, I'm afraid.
// On the bright side, it's a one-liner!
// I'll get you started:

/*
function compare(shoeSizeA, shoeSizeB) {
  return ???? - ????;
}

*/



const shoeSizes = [8, 12, 6.5, 11, 16, 9, 8];

// shoeSizes.sort(compare);

// Great. Now sort them in DESCENDING numerical order. 🤔
// Just flip the math!

const adventurers = [
  {
    name: "Jampa",
    class: "Barbarian",
    level: 5,
    hp: 174,
    armour: {
      AC: 4,
      type: "Just a loincloth. Yikes.",
    },
  },
  {
    name: "Flame of the Evading Desert",
    class: "Rogue",
    level: 6,
    hp: 52,
    armour: {
      AC: 2,
      type: "Armour of SneakySneaky",
    },
  },
  {
    name: "Zog Mothra",
    class: "Wizard",
    level: 3,
    hp: 11,
    armour: {
      type: "Wizards don't deign to use armour. Now go away.",
      AC: 8,
    },
  },
  {
    name: "Jassan",
    class: "Wizard",
    level: 5,
    hp: 23,
    armour: {
      type: "A fluffy bathrobe.",
      AC: 7,
    },
  },
];

// 🤔 How would you sort these by level ASCENDING?
// 🤔 How would you sort these by HP DESCENDING?
// 🤔 How would you sort these by class name DESCENDING?
// 🤔 How would you sort these by ac ASCENDING?
