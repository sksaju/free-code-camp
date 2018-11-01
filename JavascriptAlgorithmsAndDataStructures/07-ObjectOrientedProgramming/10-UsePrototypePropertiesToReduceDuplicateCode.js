function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 2;


// Add your code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);