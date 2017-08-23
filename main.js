
function printCats() {
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
	catContainer.innerHTML = strang; 
}

printCats(cats);