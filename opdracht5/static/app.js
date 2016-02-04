(function(){ // IIFE: Alles blijft nu binnen de SCOPE van deze functie.
	'use strict'; // Zorgt ervoor dat je niet slordig kan zijn met je code.

	var app = {
		init:function() {  // Method: een functie in een object.
			routes.init();
            console.log("initialized")
		}
	};

	var routes = {
		init:function() {
			window.addEventListener("hashchange", function(HashChangeEvent){
                
				var hashLocationNew = HashChangeEvent.newURL.search("#");
                var hashLocationOld = HashChangeEvent.oldURL.search("#");
                var newHash = HashChangeEvent.newURL.substr(hashLocationNew);
                var oldHash = HashChangeEvent.oldURL.substr(hashLocationOld);
                
                sections.toggle(newHash, oldHash);
			}, false);			
		}
	};

	var sections = {
		toggle: function (newHash, oldHash) {
			if(newHash === '#page2') {
                document.getElementById("list").style.display = "block";
                document.getElementById("home").style.display = "none";
			}
            else if(newHash === '#page1'){
                document.getElementById("home").style.display = "block";
                document.getElementById("list").style.display = "none";
            }
            else {

			}
		}
	}
	app.init();
}());