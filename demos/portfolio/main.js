(function() {
  'use strict';

  var button = document.getElementById('copyEmail');
  var copyEmail = new ZeroClipboard(button);
  var message = document.getElementById('message');

  copyEmail.on('ready', function(e) {
    console.log('Ready to copy');
    copyEmail.on('aftercopy', function(e) {
      message.classList.toggle('hide');
      setTimeout(function() {
        message.classList.toggle('hide');
      }, 3000);
      console.log('Copied!');
    });
  });
})();