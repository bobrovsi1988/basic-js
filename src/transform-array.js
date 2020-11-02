const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res=new Array();
  let j=-1;
  if(!(Array.isArray(arr))){
    throw new Error("sadasd");
  }
  for(let i =0;i<arr.length ;i++){

    switch(arr[i]){
      case "--discard-next":
        if(!(arr[i+1]===undefined)){
          j = i;
          i++;}
      
      break;
      case "--discard-prev":
        if(!(arr[i-1]===undefined)){
          if(!(j===i-2)){res.pop();}
          
        }
      
      break;
      case "--double-next":
        if(!(arr[i+1]===undefined)){
         // j=i;
          res.push(arr[i+1]);}
        
        break;
      case "--double-prev":
        if(!(arr[i-1]===undefined)){
          if(!(j===i-2)){res.push(arr[i-1]);}}
        
        break;
        default:
         // console.log(res);
         res.push(arr[i]);
          break;
    }
   
  }
  console.log(arr);
  return res;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

