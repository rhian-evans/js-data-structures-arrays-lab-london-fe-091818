// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift (name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  return [...drivers, (name)]
}
  
function prependDriver(name) {
  return [(name), ...drivers]
}

function removeLastDriver(name) {
drivers.slice(0,1);
  return drivers.length-1
}

function removeFirstDriver(n) {
  drivers.splice()
  const newDrivers = drivers.splice(0,2)
  return newDrivers
}

function removeLastDriver(n) {
  drivers.splice()
  const newDrivers = drivers.splice(0,1)
  return [drivers.length] 
}
