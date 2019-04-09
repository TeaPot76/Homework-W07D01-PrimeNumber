
const WordCounter = require('../models/prime_checker.js')
const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('number-result', (event)=>{
    const checkNumber = event.detail;
    this.displayResult(checkNumber);

  });

};



ResultView.prototype.displayResult = function (checkNumber) { // NEW
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `It is ${checkNumber} that typed number is prime number.`;
};

module.exports = ResultView;
