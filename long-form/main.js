(function() {
  'use strict';
  
	var menuBtn = document.getElementById('menuBtn');
	var menu    = document.getElementById('menu');

	menuBtn.addEventListener('click', function(){
		menu.classList.toggle('hide');
	});

	document.addEventListener('click', function(e) {
		var level = 0;
		for (var element = e.target; element; element = element.parentNode) {
			if (element.id === 'menu') {	
				return;
			}
			level++;
		}
		// This only works if you click on the button element, if you hit the svg
		// it doesn't work since the svg doesn't contain the id
		if (!menu.classList.contains('hide') && e.target.id !== 'menuBtn') {
			menu.classList.add('hide');
		}
	});

})();
