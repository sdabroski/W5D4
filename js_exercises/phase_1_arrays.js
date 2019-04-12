"use strict";

Array.prototype.uniq = function(){

  let arr = [];

  this.forEach((ele) => { 
    if(!arr.includes(ele)) {
      arr.push(ele);
    }
  })

  return arr;
}

Array.prototype.twoSum = function () {
  let arr = [];

  for (let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++)
    if(this[i] + this[j] === 0) {
      arr.push([i, j]);
    }
  }

  return arr;
}

Array.prototype.transpose = function () {
  let arr = [];
  
  for(let i = 0; i < this[0].length; i++) {
    let row = [];
    for(let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    arr.push(row);
  }

  return arr;
}
