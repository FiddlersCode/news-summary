'use strict';
document.addEventListener("DOMContentLoaded", function(event) {


  var button = document.getElementById("request");
  var news = document.getElementById("news");
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      news.style.bord = '1px solid #e8e8e8';
      if(request.status === 200) {
        news.innerHTML = request.responseText;
      } else {
        news.innerHTML = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
      }
    }
  }

  request.open('Get', "http://www.news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2017-05-25&section=environment");
  // request.open('Get', "http://content.guardianapis.com/search?from-date=2017-05-25&section=environment&api-key=c4ac6b5-61f8-4064-9df4-55c72e6eea98")

  button.addEventListener('click', function() {
    this.style.display = 'none';
    request.send();
  })
})
