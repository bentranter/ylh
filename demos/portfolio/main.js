(function() {
  'use strict';

  var button = document.getElementById('copyEmail');
  var copyEmail = new ZeroClipboard(button);
  var message = document.getElementById('message');

  copyEmail.on('ready', function(e) {
    console.log('Ready to copy');
    copyEmail.on('aftercopy', function(e) {
      message.classList.remove('hide');
      window.setTimeout(function() {
        message.classList.add('hide-transition');
      }, 1000);
      window.setTimeout(function() {
        message.classList.add('hide');
        message.classList.remove('hide-transition');
      }, 3000);
      console.log('Copied!');
    });
  });
})();