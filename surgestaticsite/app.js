var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

(function() {

  'use strict';

  var converter = new Showdown.converter();

  var postMarkdown = document.getElementById('postMarkdown');

  // 'Keyup' only is recent browsers, in old ones you
  // should use 'DOMContentModified'
  postMarkdown.addEventListener('keyup', function() {

    var postHTML = converter.makeHtml(postMarkdown.value);
    document.getElementById('postHTML').innerHTML = postHTML;
  });

  function togglePreview() {

    var toggleButton = document.getElementById('togglePreview');
  }

})();