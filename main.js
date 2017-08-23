
function printCats(cats) {
	var catString = ``;
	for (var i = 0; i < cats.length; i++){

	catString += `<div class="cat-card">`;
	catString +=   `<h2>${cats[i].name}</h2>`;
	catString +=   `<img class="cat" src="${cats[i].url}">`;
	catString += `</div>`;
	
	}	
	showCrappyCats(catString);
}

function showCrappyCats(strang) {
	var catContainer = document.getElementById('kat-koral');
	catContainer.innerHTML += strang; 
}

// printCats(cats);

function executeThisCodeAfterFileLoads() {
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	printCats(data.cats);
}

function executeThisCodeAfterFileLoads2() {
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	printCats(data.dogs);
}

function executeThisCodeIfFileErrors() {
	console.log("shit broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "dogs.json");
myRequest2.send();


