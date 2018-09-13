// Add your functions and code here
var kittens = ["Ralph", "Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyAppendKitten(name){
kittens.unshift(name)
return kittens
}

function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}

function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name){
  var 
}

