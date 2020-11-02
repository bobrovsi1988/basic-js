const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  let seson =['spring', 'summer', 'autumn' , 'winter'];
  if(date === undefined){
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date && !isNaN(date.valueOf()))){
    throw new Error("THROWN");
  }
  let month = date.getMonth()+1;
  console.log(month);


    if (3 <= month && month<= 5) {
      console.log(month);
        return 'spring';
        
    }

    if (6 <= month && month<= 8) {
        return 'summer';
    }

    if (9 <= month && month<= 11) {
        return 'fall';
    }

    // Months 12, 01, 02
    return 'winter';
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
