
function range(start, end){
  if(start === end) return [start];
  if(start > end) return [];

  return [start].concat(range(start + 1, end));
}


function sumRec(arr){
  if(arr.length === 0) return 0;
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp){
  if(exp === 0) return 1;
  return base * exponent(base, exp - 1);
}

let isOdd = (num) => !! (num % 2);

function exponent2(base, exp){
  if (exp === 0) return 1;
  if (exp === 1) return base;

  if (isOdd(exp)) {
    return base * exponent2(base, ((exp - 1) / 2) ^ 2);
  }
  else {
    return exponent2(base, exp / 2) ^ 2;
  }
}

console.log(sumRec([2, 3, 4]));
console.log(exponent(3, 3));
console.log(exponent2(2, 2));

