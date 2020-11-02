const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
  if(!(typeof(sampleActivity)==='string')){
    return false;
  }
  sampleActivity = +sampleActivity;
  if( sampleActivity<=0 ||sampleActivity>15||!(isFinite(sampleActivity))){return false;}
  let k =0.693/HALF_LIFE_PERIOD;
  let t =Math.log10(MODERN_ACTIVITY/sampleActivity);
  t /= k;
  return Math.ceil(t);
  // remove line with error and write your code here
};
