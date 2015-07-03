var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'AAPL Stock',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

// Construct URL

var URL = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20%28%22AAPL%22%29%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched stock data!");

    // Extract data
    var quote = data.query.results.quote.Ask;

    // Show to user
    card.subtitle(quote);
    card.body("From Yahoo Finance");
  },
  function(error) {
    // Failure!
    card.body('Failed fetching stock data: ' + error);
  }
);
