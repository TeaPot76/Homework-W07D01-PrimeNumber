const PrimeChecker = require('./models/prime_checker.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView(); // MODIFIED
  formView.bindEvents(); // NEW

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

const resultView = new ResultView();
resultView.bindEvents();

});
