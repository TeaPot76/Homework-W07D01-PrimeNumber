const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function(){
   const callback = (event) => {
    const number = event.detail;
   const checkNumber = this.numberIsPrime(number);
   PubSub.publish('number-result', checkNumber);
 };

  PubSub.subscribe('number', callback);

};

PrimeChecker.prototype.numberIsPrime = function(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        console.log('not prime')
        return false;
    }
  }
  console.log('prime')
  console.log(number)
  return true;
};

module.exports = PrimeChecker;
