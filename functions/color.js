var colorsArray = [
    {
        "image":"./img/colors/black.png",
        "name" : "black",
        "voice":"./img/audiocolor/black.mp3"
    },
    {
        "image":"./img/colors/blue.png",
        "name" : "blue",
        "voice":"./img/audiocolor/blue.mp3"
    },
    {
        "image":"./img/colors/brown.png",
        "name" : "brown",
        "voice":"./img/audiocolor/brown.mp3"
    },
    {
        "image":"./img/colors/gray.png",
        "name" : "gray",
        "voice":"./img/audiocolor/grey.mp3"
    },
    {
        "image":"./img/colors/green.png",
        "name" : "green",
        "voice":"./img/audiocolor/green.mp3"
    },
    {
        "image":"./img/colors/magenta.png",
        "name" : "magenta",
        "voice":"./img/audiocolor/magenta.mp3"
    },
    {
        "image":"./img/colors/orange.png",
        "name" : "orange",
        "voice":"./img/audiocolor/orange.mp3"
    },
    {
        "image":"./img/colors/pink.png",
        "name" : "pink",
        "voice":"./img/audiocolor/pink.mp3"
    },
    {
        "image":"./img/colors/purple.png",
        "name" : "purple",
        "voice":"./img/audiocolor/purple.mp3"
    },
    {
        "image":"./img/colors/red.png",
        "name" : "red",
        "voice":"./img/audiocolor/red.mp3"
    },
    {
        "image":"./img/colors/white.png",
        "name" : "white",
        "voice":"./img/audiocolor/white.mp3"
    },
    {
        "image":"./img/colors/yellow.png",
        "name" : "yellow",
        "voice":"./img/audiocolor/yellow.mp3"
    }

];
var colorsArr = ["red","blue","green","white", "black","purple","pink","yellow"];
// Fonction colors
function colors() { 
    // Retirer le div #clickedColorDiv avant l'exécution de la fonction
    // $('#clickedColorDiv').remove();

    // Effacer le contenu de #div4
    $('#div4').html('');

    // Ajouter un titre
    var $title = $('<h1 class="titleh1">Pick a color and guess its name</h1>');
    $('#div4').append($title);

    // Créer les éléments pour deviner les couleurs
    var $colorguess = $('<div id="colorsguess" class="row"></div>');
    var $colors = $('<div id="colors" class="row"></div>');

    // Boucler sur les couleurs et les ajouter
    var index = colorsArr.length - 1;
    while (index >= 0) {
        var $color = $('<button class="column color" id="' + index + '" onclick="colorfunc(this.id)" style="background-color: ' + this.array[index] + '"></button>');
        $colors.append($color);
        index--;
    }

    // Ajouter le div colorsguess à colors et l'ajouter à div4
    $colors.append($colorguess);
    $('#div4').append($colors);
}
function playAudioColor(i) {
	var url = colorsArray[i]["voice"];
	console.log('hello');
	new Audio(url).play();
  }
  function displayColors(){
	$('#clickedColorDiv').remove();
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a color and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $colors =  $('<div id="colors" class="row animalslist"></div>');
	var index = colorsArray.length - 1;
    while(index >= 0){
		var audio = colorsArray[index]["voice"];
		///console.log(audio);
		var $color = $('<div class=" column"><img id="'+index+'" onclick="playAudioColor(this.id)" style="background-color : white" class=" imggame animal" src="'+colorsArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+colorsArray[index]["name"]+'</h2>');
	    $color.append($text);
		$colors.prepend($color);
		//$colors.append($color);
		index--;
	}
	$('#div4').append($colors);
}

var colorsarray = [1,2,3,4];
var colorId = undefined;
function colorfunc(id) {
	$('#clickedColorDiv').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	colorId = id;
	var arr = [colorsArr[id]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	var newarr = [];
	
	// Ajout des autres couleurs dans le tableau newarr
	for (var i = 0; i < colorsArr.length; i++) {
		newarr.push(colorsArr[i]);
	};
	
	newarr.splice(id, 1);  // Retirer la couleur sélectionnée du tableau newarr
	
	// Ajouter des couleurs aléatoires de newarr dans arr jusqu'à ce qu'il y ait 4 éléments
	for (var i = newarr.length - 1; arr.length < 4; i--) {
		var index = Math.floor(Math.random() * i);
		arr.push(newarr[index]);
		newarr.splice(index, 1);
	};
	
	$('#colorsguess').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	$('.answer').remove();  // Retirer les anciennes réponses si elles existent
	var $colors = $('#colorsguess');
	var $clickedColorDiv = $('#clickedColorDiv');  // Div où le bouton cliqué sera ajouté
	var index = arr.length - 1;
	var $color1 = $('<button  class="column color1" id="'+ colorId +'" style="background-color: ' + colorsArr[colorId] +'"></button>');
	while (index >= 0) {
		if(index == 0){
			$('#clickedColorDiv').append($color1);   ////////////  à revoir
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $color = $('<button class="column colorguess imggame" id="' + index + '" onclick="colorguess(this.id)">' + arr[i] + '</button>');
		colorsarray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		// Ajouter le bouton à la div appropriée
		if (index === id) {
			$clickedColorDiv.append($color);  // Ajouter le bouton cliqué dans clickedColorDiv
			
		} else {
			$colors.append($color);  // Ajouter les autres boutons dans colorsguess
		}
		
		index--;
	}
	//$clickedColorDiv.append($color1);
	 var $b1 = $('<button class="guess" onclick="myGame.displayGame()">Play</button>');
	 var $b2 = $('<a href="index.html"><button class="guess">Exit</button></a>');
	 $('#clickedColorDiv').prepend($b1);
	 $('#clickedColorDiv').prepend($b2);
	//$('#clickedColorDiv').append($color1);
	$('#clickedColorDiv').append($colors);  
	// $('#clickedColorDiv').append($b1);
	// $('#clickedColorDiv').append($b2);  
}
function colorguess(id) {
	//$('#clickedColorDiv').remove();
	$('.answer').remove();
	var $div = $('#div4');
	// var $colors =  $('<div class="answer container" id="animationContainer"></div>');
	 var $colors =  $('<div id="animationContainer"></div>');

	// Logique pour vérifier la réponse
	if (colorsArr[colorId] === colorsarray[id]) {
		//add();  //contain  generateConfetti and generateCircles functions
		generateConfetti();
		//generateCircles(); a été deja appelée dans generateConfetti
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/basarszlk.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($colors);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGame = new Game('Colors', colorsArr, colors);