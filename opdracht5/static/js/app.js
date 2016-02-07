(function(){ // IIFE: Alles blijft nu binnen de SCOPE van deze functie.
	'use strict'; // Zorgt ervoor dat je niet slordig kan zijn met je code.

	var app = { // Object var die begint met {}. Heeft altijd een key en value.
		init:function() {  // Method: een functie in een object.
			routes.init();
            console.log("initialized"); //this verwijst naar het object waar het inzit (var = app).
		}
	};

	var routes = {
		init:function() {
			window.addEventListener("hashchange", function(HashChangeEvent) {
                
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
                document.getElementById("list").className = "show";
                document.getElementById("home").className = "hide";
			}
            else if(newHash === '#page1'){
            	document.getElementById("home").className = "show";
                document.getElementById("list").className = "hide";
            }
            else {

			}
		}
	}
	app.init();
}());

// Closeure zorgt ervoor dat alles binnen een bepaalde scope niet erbuiten aangesproken kan worden.
// Constructor functie die begint met een hoofdletter.
// variable hoisting, variabele wordt bovenaan in de scope aangemaakt,