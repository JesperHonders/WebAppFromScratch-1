(function(){ // IIFE: Alles blijft nu binnen de SCOPE van deze functie.
	'use strict'; // Zorgt ervoor dat je niet slordig kan zijn met je code.

	var app = { // Object var die begint met {}. Heeft altijd een key en value.
		init:function() {  // Method: een functie in een object.
			routes.init();
            console.log("initialized"); //this verwijst naar het object waar het inzit (var = app).
		}
	};

	var routes = { // Deze code is vele male minder complex
        init: function () {
            window.addEventListener("hashchange", function (HashChangeEvent) {
                var hash = location.hash
                sections.toggle(hash);
            }, false);
        }
    };

	var sections = {
		toggle: function (hash) {
            var content = select.all('.content')
            for (var i = 0; i < content.length; i++) {
                content[i].classList.add("none")
            }
            select.one(hash).classList.remove("none")
        }
	}
	app.init();
}());

// Closeure zorgt ervoor dat alles binnen een bepaalde scope niet erbuiten aangesproken kan worden.
// Constructor functie die begint met een hoofdletter.
// variable hoisting, variabele wordt bovenaan in de scope aangemaakt,
