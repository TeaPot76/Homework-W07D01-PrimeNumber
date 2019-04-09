const PubSub = require('../helpers/pub_sub.js')
const FormView = function(){

};

FormView.prototype.bindEvents = function() {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => { // NEW
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
     PubSub.publish('number', inputtedNumber)

  });
};

module.exports = FormView;
