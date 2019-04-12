Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {
  let arr = [];
  this.myEach((ele) => {
    arr.push(callback(ele));
  })
  return arr;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let acc;
  let array;

  if(arguments.length > 1){
    acc = initialValue;
    array = this.slice();
  } 
  else {
    acc = this[0];
    array = this.slice(1);
  }

  array.myEach( function(ele){
    acc = callback(acc, ele);
  });
  return acc;
}
