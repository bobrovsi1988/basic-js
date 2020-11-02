const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let res = [];
  if(!(Array.isArray(members))){
    return false;
  }
  members.forEach(element => {
    
    if(typeof element ==="string"){
      element = element.trim();
      res.push(element[0].toUpperCase());
      

    }
    
  });
  return res.sort().join("");
  // remove line with error and write your code here
};
