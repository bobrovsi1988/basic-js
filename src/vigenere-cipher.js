const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode){
    this.mode = mode;
  }
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res=0;
    
    let output = [str.length];
  
    function tgtrimm(str){var ars = str.replace(/[^A-Z]/gi,'').replace(/\s+/gi,', '); return ars;}
    let str2 =tgtrimm(str);
    
      for(let i=0;i<str2.length;i++){
       
          res = (((str2.charCodeAt(i)-65) + (key.charCodeAt(i % key.length)-65)) % 26);
        
        output[i] = String.fromCharCode(res+65);
      
    }
     
   
  
    for(let i=0;i<str.length;i++){
      if(!(/[A-Z]/i.test(str[i]))){
       //console.log('xxx'+ str[i]);
        output.splice(i, 0, str[i]);
      }
    
  }
  if(this.mode===false){
    output=output.reverse();
  }
    return output.join('');
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt(str, key) {
  
    str = str.toUpperCase();
    
    key = key.toUpperCase();
    let res=0;
    
    let output = [str.length];
    function tgtrimm(str){var ars = str.replace(/[^A-Z]/gi,'').replace(/\s+/gi,', '); return ars;}
   let str2 =tgtrimm(str);
    for(let i=0;i<str2.length;i++){
      if (str2.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
        res = ((str2.charCodeAt(i)-65) - (key.charCodeAt(i % key.length)-65)) + 26;
      } else {
        console.log(str2.charCodeAt(i)-65);
        res = ((str2.charCodeAt(i)-65) - (key.charCodeAt(i % key.length)-65)) % 26;
      }
      //console.log("res  "+res);
      output[i] = String.fromCharCode(res+65);
    }
    for(let i=0;i<str.length;i++){
      if(!(/[A-Z]/i.test(str[i]))){
       //console.log('xxx'+ str[i]);
        output.splice(i, 0, str[i]);
      }
    
  }
  
    //console.log(output);
    if(this.mode===false){
      output=output.reverse();
    }
    return output.join('');
  
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
