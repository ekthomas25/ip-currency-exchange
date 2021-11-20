import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/CurrencyService';

function clearOutput() {
  $('.showErrors').text("");
  $('.showRate').text("");
  $('#amnt').val("");
}

$(document).ready(function() {
  $('#currencyBtn').click(function() {
    let code = $('#currency').val();
    let amount = $('#amnt').val();
    clearOutput();
    let promise = CurrencyService.getRate(code, amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if (typeof body.conversion_result !== 'number') {
        $('.showErrors').text(`Please enter a number greater than zero`);
      } else {
        $('.showRate').text(`${body.conversion_result} `);
        $('.currencyErr').hide();
      }
    }, function(error) {
      const errorType = JSON.parse(error);
      $('.showErrors').text(`There was an error processing your request. Error: ${errorType["error-type"]}`);
      if (errorType["error-type"] === "unsupported-code") {
        $('.currencyErr').show();
      }
    });
  });
});