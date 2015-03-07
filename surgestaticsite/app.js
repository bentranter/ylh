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

  function toggleRight() {

    var rightSection = document.getElementById('rightSection');
    var middleSection = document.getElementById('middleSection');
    var toggleButton = document.getElementById('toggleRight');

    rightSection.classList.toggle('hide');
    middleSection.classList.toggle('col-12');
    toggleButton.classList.toggle('icon-active');
  }

  function toggleLeft() {

    var leftSection = document.getElementById('sidebar');
    var middleSection = document.getElementById('main');
    var toggleButton = document.getElementById('toggleLeft');

    leftSection.classList.toggle('hide');
    middleSection.classList.toggle('sidebar-offset');
    toggleButton.classList.toggle('icon-active');
  }

  document.getElementById('toggleRight').addEventListener('click', toggleRight);
  document.getElementById('toggleLeft').addEventListener('click', toggleLeft);

})();