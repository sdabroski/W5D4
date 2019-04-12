Array.prototype.bubbleSort = function() {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i++) {
      if(this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }
  return this;
}

Array.prototype.bubbleSort2 = function () {
  for(let j = 0; j <= this.length - 1; j++) {
    for (let i = 0; i <= this.length - j; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
      }
    }
  }
  return this;
}

String.prototype.substring = function() {
  let substrz = [];
  
  for(let i = 0; i < this.length; i++){
    for (let j = i + 1; j < this.length + 1; j++){
      substrz.push(this.slice(i, j));
    }
  }
  return substrz;
}
