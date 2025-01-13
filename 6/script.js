// TODO: Set item in localStorage
localStorage.setItem("name","Hui");

// TODO: Get item from localStorage
const name = localStorage.getItem("name");

// TODO: Remove item from localStorage
localStorage.removeItem("name");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const user = {name: "Bobby", age: 10};
localStorage.setItem("user", JSON.stringify(user));

// TODO: Get an object from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));

// TODO: Set item in sessionStorage
sessionStorage.setItem("animal","cat");

// TODO: Get item from sessionStorage
const animal = sessionStorage.getItem("animal");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("animal");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const pet = {animal: "dog", name: "Pipi"};
sessionStorage.setItem("pet", JSON.stringify(pet));

// TODO: Get an object from sessionStorage
const storedPet = JSON.parse(sessionStorage.getItem("pet"));
console.log(storedPet.animal);
console.log(storedPet.name);
