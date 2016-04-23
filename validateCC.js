// SOLUTION 1: BRUTE FORCE

function validate(n){
  var nArray = n.toString().split("");
  for (var j = 0; j < nArray.length; j++) {
    nArray[j] = parseInt(nArray[j]);
  }
  
  var x = nArray.length % 2;
  for (var i = x; i < nArray.length; i+=2) {
    var temp = nArray[i] * 2;
    if (temp > 9) {
      temp = temp - 9;
    }
    nArray[i] = temp;
  }
  
  var sum = nArray.reduce(function(prev, curr, index, arr) {
    return prev + curr;
  });
  
  return sum % 10 === 0;
  
}

// SOLUTION 2

function validate(n){
  var sum = 0;

  while (n > 0) {
    var a = n % 10;
    n = Math.floor(n / 10);
    
    var b = (n % 10) * 2;
    n = Math.floor(n / 10);
    
    if (b > 9) {
      b -= 9;
    }
    
    sum += a + b;
  }
  
  return sum % 10 == 0;
}
