var cats = [
  {
  name: "Fluffy", 
  color: "Green", 
  url: "https://metrouk2.files.wordpress.com/2015/01/ad_156114103-e1420794396375.jpg?w=748&h=505&crop=1"
  },
  {
  name: "Spooky", 
  color: "Blue", 
  url: "https://i.pinimg.com/736x/05/c9/8a/05c98ad9c99a38282675c2f904c1468a--turkish-angora-cat-angora-cats.jpg"
  },
  {
  name: "Idiot", 
  color: "Purple", 
  url: "https://i.amz.mshcdn.com/hRwKG_QIxWn6trBBUzHh924EoYo=/950x534/filters:quality(90)/2016%2F01%2F07%2F0a%2Fsmurfthekit.861f3.jpg"
  },
];

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