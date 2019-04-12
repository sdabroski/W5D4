function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}!`;
}





// Testing
jeremy = new Cat("jeremy", "Stefan");
stacy = new Cat("stacy", "Yucho");

console.log(jeremy.cuteStatement());
console.log(stacy.cuteStatement());

jeremy.cuteStatement = function () {
  return `Everyone loves ${this.name}!`;
}

console.log(jeremy.cuteStatement());
console.log(stacy.cuteStatement());

Cat.prototype.meow = function() {
  return "General meowing sounds";
}

jeremy.meow = function() {
  return "Jeremy meowing sounds";
}

console.log(jeremy.meow());
console.log(stacy.meow());
