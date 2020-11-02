const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.res =1;
  }
  calculateDepth( arr ) {
    arr.flat();
    
    arr.forEach(element => {
     if(Array.isArray(element)){
       this.res++;
       
       this.calculateDepth(arr.flat());
     }
     
   })
    return this.res;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}