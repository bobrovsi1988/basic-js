const CustomError = require("../extensions/custom-error");
//let res=[];
const chainMaker = {
  
  res:[],
  getLength() {
    return this.res.length;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
     this.res.push(`( ${value} )`);
     return this;
  // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(this.res[position-1] === undefined){
      this.res=[];
      throw new Error("jkasdj");
    }
    this.res.splice(position-1, 1);
    return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.res =this.res.reverse();
    return this;
  //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let a =this.res.join("~~");
    this.res = [];
    return a;
    
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  
  
};

module.exports = chainMaker;
