var vegetablesArray = [
    {
        "image" : "./img/vegetables/beans.png",
        "name" : "beans",
        "voice" :"./img/audiovegetable/beans.mp3"
    },
    {
        "image" : "./img/vegetables/cabbage.png",
        "name" : "cabbage",
        "voice" :"./img/audiovegetable/cabbage.mp3"
    },
    {
        "image" : "./img/vegetables/carrots.png",
        "name" : "carrots",
        "voice" :"./img/audiovegetable/carrots.mp3"
    },
    {
        "image" : "./img/vegetables/cucumber.png",
        "name" : "cucumber",
        "voice" :"./img/audiovegetable/cucumber.mp3"
    },
    {
        "image" : "./img/vegetables/garlic.png",
        "name" : "garlic",
        "voice" :"./img/audiovegetable/garlic.mp3"
    },
    {
        "image" : "./img/vegetables/leeks.png",
        "name" : "leeks",
        "voice" :"./img/audiovegetable/leeks.mp3"
    },
    {
        "image" : "./img/vegetables/onions.png",
        "name" : "onions",
        "voice" :"./img/audiovegetable/onions.mp3"
    },
    {
        "image" : "./img/vegetables/peas.png",
        "name" : "peas",
        "voice" :"./img/audiovegetable/peas.mp3"
    },
    {
        "image" : "./img/vegetables/potatoes.png",
        "name" : "potatoes",
        "voice" :"./img/audiovegetable/potatoes.mp3"
    },
    {
        "image" : "./img/vegetables/tomatoes.png",
        "name" : "tomatoes",
        "voice" :"./img/audiovegetable/tomatoes.mp3"
    },
    {
        "image" : "./img/vegetables/chili.png",
        "name" : "chili",
        "voice" :"./img/audiovegetable/chili.mp3"
    },
    {
        "image" : "./img/vegetables/pumpkin.png",
        "name" : "pumpkin",
        "voice" :"./img/audiovegetable/pumpkin.mp3"
    },
    {
        "image" : "./img/vegetables/mushroom.png",
        "name" : "mushroom",
        "voice" :"./img/audiovegetable/mushroom.mp3"
    },
    {
        "image" : "./img/vegetables/radish.png",
        "name" : "radish",
        "voice" :"./img/audiovegetable/radish.mp3"
    },
    {
        "image" : "./img/vegetables/cauliflower.png",
        "name" : "cauliflower",
        "voice" :"./img/audiovegetable/cauliflower.mp3"
    },
    {
        "image" : "./img/vegetables/beetroot.png",
        "name" : "beetroot",
        "voice" :"./img/audiovegetable/beetroot.mp3"
    }

];
function playAudioVegetable(i){
	var url = vegetablesArray[i]["voice"];
	new Audio(url).play();
  }
  
  function displayVegetables(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a vegetable and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $vegetables =  $('<div id="colors" class="row animalslist"></div>');
	var index = vegetablesArray.length - 1;
    while(index >= 0){
		//var audio = jobArray[index]["voice"];
		
		var $vegetable = $('<div class="column"><img id="'+index+'" onclick="playAudioVegetable(this.id)" style="background-color : white" class=" imggame animal" src="'+vegetablesArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+vegetablesArray[index]["name"]+'</h2>');
		$vegetable.append($text);
		$vegetables.prepend($vegetable);
		//$vegetables.append($vegetable);
		index--;
	}

	$('#div4').append($vegetables);

}
var vegetablearray = [1,2,3,4];
var vegetableId = undefined;
function vegetablefunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var vlength = vegetablesArray.length - 1;
	vegetableId = Math.floor(Math.random() * vlength);
	var arr = [vegetablesArray[vegetableId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < vegetablesArray.length; i++) {
	 	newarr.push(vegetablesArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(vegetableId, 1);  // Retirer la couleur sélectionnée du tableau newarr
	 console.log(newarr);
	// Ajouter des couleurs aléatoires de newarr dans arr jusqu'à ce qu'il y ait 4 éléments
	for (var i = newarr.length - 1; arr.length < 4; i--) {
		var index = Math.floor(Math.random() * i);
		arr.push(newarr[index]);
		newarr.splice(index, 1);
	};
	console.log(arr);
	$('.answer').remove();  // Retirer les anciennes réponses si elles existent
	var $div4 = $('#div4');  // Div où le bouton cliqué sera ajouté
	var index = arr.length - 1;
	var $vegetable1 = $('<div class=" column"><img id="'+vegetableId+'"onclick="playAudioVegetable(this.id)" style="background-color : white" class=" imggame animal" src="'+vegetablesArray[vegetableId]["image"]+'" alt="Vegetables" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($vegetable1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $vegetable = $('<button class="btn-space" id="' + index + '" onclick="vegetableguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		vegetablearray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($vegetable); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameVegetable.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function vegetableguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $vegetables =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (vegetablesArray[vegetableId]["name"] === vegetablearray[id]) {
        const applauseSound = new Audio('audio/applause.mp3');
		applauseSound.play(); // Joue le son d'applaudissements
        generateConfetti();
	} else {
		
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($vegetables);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameVegetable = new Game('Vegetables', vegetablearray, vegetablefunc);
