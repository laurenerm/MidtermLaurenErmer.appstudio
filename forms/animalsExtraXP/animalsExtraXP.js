
let animals= ['dog', 'cat', 'horse', 'mouse', 'pig', 'cow', 'ferret', 'lizard', 'frog']
for (i = 0; i < 2; i++) {
let newAnimal= prompt('What animal would you like to add?')
animals.push(newAnimal.toLowerCase())
alert(`The last animal is ${animals.slice(-1)}`)
}
