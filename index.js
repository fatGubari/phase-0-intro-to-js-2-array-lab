// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


destructivelyAppendCat("Ralph")
function destructivelyAppendCat(name){
    return cats.push(name);
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
destructivelyPrependCat("Bob")
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
destructivelyRemoveLastCat();
function destructivelyRemoveLastCat(){
    return cats.pop();
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat(){
    return cats.shift();
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
appendCat("Broom")
function appendCat(name){
    let new_cats = cats.slice();
    new_cats.push(name)
    return new_cats
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
prependCat("Arnold")
function prependCat(name){
    let new_cats = cats.slice();
    new_cats.unshift(name)
  return new_cats
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
removeLastCat()
function removeLastCat(){
    let new_cats = cats.slice();
    new_cats.pop();
    return new_cats
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
removeFirstCat()
function removeFirstCat(){
    let new_cats = cats.slice();
    new_cats.shift();
    return new_cats
}