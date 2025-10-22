

// The following is a function __________. 🤔 (fill in the blank)
// The thing after the return is called a
// template ________.  🤔  (2 possible answers)
let friendlyGreeting = function (name) {
  return `Hi there, ${name}!`;
};

// Do the following logs in the browser console.
// Predict what each one will output before hitting return. 🤔
// console.log(typeof friendlyGreeting);
// console.log(typeof friendlyGreeting()); <-- I don't see any argument here. Is that a problem? 🤔

// This is a function __________. 🤔
function unfriendlyGreeting() {
  return "<grunt>";
}

// What is greeting in the following function? 🤔
// I'm looking for something other than "parameter"....
function greet(greeting, name) {
  console.log(greeting(name));
}

// What problem does using `type="module"` cause if we
// want to play in the console? 
// What are we doing here to alleviate that? 🤔

window.friendlyGreeting = friendlyGreeting;
window.unfriendlyGreeting = unfriendlyGreeting;
window.greet = greet;

// Call/Invoke greet in the browser's console a few different ways.
// Predict what each will do before hitting enter. 🤔
// greet(friendlyGreeting, "Miko")
// greet(friendlyGreeting)
// greet(unfriendlyGreeting)
// greet(unfriendlyGreeting, "Terry")
/*
Yes, the following sucks to read. Welcome to JS. 🥲
greet(function (name) {
  return `${name}! It's ${name}!`;
}, "Waldo");
*/
