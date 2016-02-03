(function(){
	'use strict';

	var app = {
		init:function() {
			routes.init();
		}
	};

	var routes = {
		init:function() {
			window.addEventListener("hashchange", function(HashChangeEvent){
				console.log(HashChangeEvent);
			}, false);			
		}
	};

	var sections = {
		toggle: function (route) {
			if(route === 'lijst') {

			} else {

			}
		}
	}

	app.init();
}());