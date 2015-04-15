(function() {
  'use strict';

  // My latest obsession: object caching
  var button = document.getElementById('openContact');
  var form = document.getElementById('contact');
  var showMore = document.getElementById('showMore');
  var more = document.getElementById('more');

  // Listen to those damn clicky clicks
  button.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.toggle('hide');
  });

  showMore.addEventListener('click', function(e) {
    e.preventDefault();
    more.classList.toggle('hide');
  });
})();