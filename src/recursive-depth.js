const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.res =1;
    this.a=1;
  }
  calculateDepth( arr ) {
    
    function arup(arr2){
      let arg=[];
      arr2.forEach(element => {
        if(Array.isArray(element)){
     
          arg.push(...element);
        }else{
          // arg.push(element);
        }
        
      });
      return arg;
    }
   // console.log(arr.some(element => Array.isArray(element)));
    if(
      arr.some(element =>Array.isArray(element))){
      this.res++;
      arr=arup(arr);
      this.calculateDepth(arr);
    }else{
      this.a =this.res;
    this.res =1;
    }
    
    return this.a;
    
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}