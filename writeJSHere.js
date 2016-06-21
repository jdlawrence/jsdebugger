function geoMean(arr) {
  var prod = product(arr);
  var result = Math.pow(prod, 1 / arr.length);
  return result; 
}

function product(arr) {
  return arr.reduce(function(a, b){
    return a * b;
  });
}
var prodResult = product([1,2,3,4]);

console.log(prodResult);
console.log(geoMean([2, 8, 512, 7, 37 , 7]));