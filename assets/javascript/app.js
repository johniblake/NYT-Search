const API_KEY = "Aw6KSGUh9yHFlHc450TWoJT8TyQDZEpu";

let filter = {
  numRecords: 10,
  startYear: "2012",
  endYear: "",
  term: "election"
};

function displayResults(response) {
  let resultsContainer = $("<div>");
  resultsContainer.attr("id", "results");
  let results = response.response.docs;

  for (let i = 0; i < numRecords; i++) {
    let article = results[i];
    let title = article.headline.main;
    let byline = article.byline.original;
    let pubDate = article.pub_date;
    let url = article.web_url;
    let artivleDiv = $("<div>");
  }
}

function getFilterString() {
  let filterString = "";
  if (filter.startYear !== "") {
    filterString = filterString + "&begin_date=" + filter.startYear + "0101";
  }
  if (filter.endYear !== "") {
    filterString = filterString + "&end_date=" + filter.endYear + "0101";
  }
  if (filter.term !== "") {
    filterString = filterString + "&q=" + filter.term;
  }
  return filterString;
}
$(document).ready(function() {
  $("#search").on("click", query);
});

function query() {
  filter.term = $("#term").val();
  filter.startYear = $("#start-year").val();
  filter.endYear = $("#end-year").val();

  let filterString = getFilterString();
  console.log("QUERY STRING: " + filterString);

  let queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
    filterString +
    "&sort=relevance&api-key=" +
    API_KEY;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // execute this function after observable returned
    .then(function(response) {
      console.log(response);
      displayResults(response);
    });
}
