const API_KEY = "Aw6KSGUh9yHFlHc450TWoJT8TyQDZEpu";

let filter = {
  numRecords: 10,
  startYear: "2012",
  endYear: "2019",
  term: "election"
};
let filterString = "";

let queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
  filterString +
  "&api-key=" +
  API_KEY;

function getFilterString() {
  if (filter.startYear !== "") {
    filterString += "&begin_date=" + filter.startYear + "0101";
  }
  if (filter.endYear !== "") {
    filterString += "&end_date=" + filter.startYear + "0101";
  }
  if (filter.term !== "") {
    filterString += "&fq=" + filter.term;
  }
}

getFilterString();

$.ajax({
  url: queryURL,
  method: "GET"
})
  // execute this function after observable returned
  .then(function(response) {
    console.log(response);
  });
