// Add your functions and code here

var kittens = ["Ralph", "Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyAppendKitten(name){
kittens.unshift("Ralph")
return kittens
}
