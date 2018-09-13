// Add your functions and code here

var kittens = ["Ralph", "Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyAppendKitten(name){
kittens.unshift(0)
return kittens
}
