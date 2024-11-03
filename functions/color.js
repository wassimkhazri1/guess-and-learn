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
    },
    {
        "image":"./img/colors/turquoise.png",
        "name" : "turquoise",
        "voice":"./img/audiocolor/turquoise.mp3"
    },
    {
        "image":"./img/colors/silver.png",
        "name" : "silver",
        "voice":"./img/audiocolor/silver.mp3"
    },
    {
        "image":"./img/colors/gold.png",
        "name" : "gold",
        "voice":"./img/audiocolor/gold.mp3"
    },
    {
        "image":"./img/colors/strypit.png",
        "name" : "strypit",
        "voice":"./img/audiocolor/strypit.mp3"
    },
    {
        "image":"./img/colors/skyblue.png",
        "name" : "skyblue",
        "voice":"./img/audiocolor/skyblue.mp3"
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
		var $color = $('<a  href="#clickedColorDiv" class="column color btn" id="' + index + '" onclick="colorfunc(this.id)" style="background-color: ' + this.array[index] + ';  display:inline-block"></a>');
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
		var $color = $('<div class="column"><img id="'+index+'" onclick="playAudioColor(this.id)" style="background-color : white" class=" imggame animal" src="'+colorsArray[index]["image"]+'" alt="Colors"></div>');
		var $text = $('<h2 class="animalname">'+colorsArray[index]["name"]+'</h2>');
	    $color.append($text);
		$colors.prepend($color);
		index--;
	}
	$('#div4').append($colors);
}

var colorarray = [1,2,3,4];
var colorId = undefined;
function colorfunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var clength = colorsArray.length - 1;
	colorId = Math.floor(Math.random() * clength);
	var arr = [colorsArray[colorId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres couleurs dans le tableau newarr
	 for (var i = 0; i < colorsArray.length; i++) {
	 	newarr.push(colorsArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(colorId, 1);  // Retirer la couleur sélectionnée du tableau newarr
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
	var $color1 = $('<div class=" column"><img id="'+colorId+'"onclick="playAudioColor(this.id)" style="background-color : white" class=" imggame animal" src="'+colorsArray[colorId]["image"]+'" alt="Colors" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($color1);   ////////////  à revoir
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $color = $('<button class="btn-space" id="' + index + '" onclick="colorguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		colorarray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($color);
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameColor.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function colorguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $colors =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (colorsArray[colorId]["name"] === colorarray[id]) {
        const applauseSound = new Audio('audio/applause.mp3');
		applauseSound.play(); // Joue le son d'applaudissements
        generateConfetti();
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
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
var myGameColor = new Game('Colors', colorarray, colorfunc);