const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (arr.length===0){
    return 0;
  }
  arr = arr.reduce(function(a, b) {
    return a.concat(b);
  });
  let res = 0;
  arr.forEach(element => {
    if(element ==="^^"){
      res+=1;
    }
  });
  return res;
  // remove line with error and write your code here
};
