(function() {
  'use strict';

  // My latest obsession: object caching
  var button = document.getElementById('openContact');
  var form = document.getElementById('contact');

  // Listen to those damn clicky clicks
  button.addEventListener('click', function() {
    form.classList.toggle('hide');
  });
})();