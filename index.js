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

  request.open('Get', "http://www.news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body");

  button.addEventListener('click', function() {
    this.style.display = 'none';
    request.send();
  })
})
