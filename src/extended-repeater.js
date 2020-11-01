const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  if(!(options.separator)){
    options.separator="+";
  }
  if(!(options.repeatTimes)){
    options.repeatTimes=1;
  }
  if(!(options.additionRepeatTimes)){
    options.additionRepeatTimes=1;
  }
  if(options.addition===null){
    options.addition="null";
  }
 let arr=[];
 let addstr=[];

 for(let j=0;j<options.additionRepeatTimes;j++){
   addstr.push(options.addition);
 }
 let strinadd=addstr.join(options.additionSeparator);
 let strin=str+strinadd;
 for(let i=0;i<options.repeatTimes;i++){
   arr.push(strin);   
   }
   return arr.join(options.separator);



 }
 
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  