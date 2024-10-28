var fruitsArray =[
    {
        "image" : "./img/fruits/apple.png",
        "name" : "apple",
        "voice" : "./img/audiofruit/apple.mp3"
    },
    {
        "image" : "./img/fruits/banana.png",
        "name" : "banana",
        "voice" : "./img/audiofruit/banana.mp3"
    },
    {
        "image" : "./img/fruits/cherry.png",
        "name" : "cherry",
        "voice": "./img/audiofruit/cherry.mp3"
    },
    {
        "image" : "./img/fruits/grapes.png",
        "name" : "grapes",
        "voice" : "./img/audiofruit/grapes.mp3"
    },
    {
        "image" : "./img/fruits/lemon.png",
        "name" : "lemon",
        "voice" : "./img/audiofruit/lemon.mp3"
    },
    {
        "image" : "./img/fruits/orange.png",
        "name" : "orange",
        "voice" : "./img/audiofruit/orange.mp3"
    },
    {
        "image" : "./img/fruits/pear.png",
        "name" : "pear",
        "voice" : "./img/audiofruit/pear.mp3"
    },
    {
        "image" : "./img/fruits/pineapple.png",
        "name" : "pineapple",
        "voice" : "./img/audiofruit/pineapple.mp3"
    },
    {
        "image" : "./img/fruits/plum.png",
        "name" : "plum",
        "voice" : "./img/audiofruit/plum.mp3"
    },
    {
        "image" : "./img/fruits/strawberry.png",
        "name" : "strawberry",
        "voice" : "./img/audiofruit/strawberry.mp3"
    }
    ];
    function playAudioFruit(i) {
        var url = fruitsArray[i]["voice"];
        console.log('hello');
        new Audio(url).play();
      }
      function displayFruits(){
        $('#div4').html('');
        var $title = $('<h1 class = "titleh2">Pick a fruit and learn how to spell its name</h1>')
        $('#div4').append($title);
        var $fruits =  $('<div id="colors" class="row animalslist"></div>');
        var index = fruitsArray.length - 1;
        while(index >= 0){
            //var audio = colorsArray[index]["voice"];
            //console.log(audio);
            var $fruit = $('<div class=" column"><img id="'+index+'" onclick="playAudioFruit(this.id)" style="background-color : white" class=" imggame animal" src="'+fruitsArray[index]["image"]+'" alt="Colors" ></div>');
            // var $animal = $('<div class=" column"><img id="'+index+'"onclick="playAudioFruit(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
            var $text = $('<h2 class="animalname">'+fruitsArray[index]["name"]+'</h2>');
            $fruit.append($text);
            $fruits.prepend($fruit);
            //$fruits.append($fruit);
            index--;
        }
    
        $('#div4').append($fruits);
    
    }
var fruitarray = [1,2,3,4];
var jobId = undefined;
function fruitfunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var flength = jobsArray.length - 1;
	fruitId = Math.floor(Math.random() * flength);
	var arr = [fruitsArray[fruitId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < fruitsArray.length; i++) {
	 	newarr.push(fruitsArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(fruitId, 1);  // Retirer la couleur sélectionnée du tableau newarr
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
	var $fruit1 = $('<div class=" column"><img id="'+fruitId+'"onclick="playAudioFruit(this.id)" style="background-color : white" class=" imggame animal" src="'+fruitsArray[fruitId]["image"]+'" alt="Fruits" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($fruit1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $fruit = $('<button class="btn-space" id="' + index + '" onclick="fruitguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		fruitarray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($fruit); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameFruit.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function fruitguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $fruits =  $('<div id="animationContainer"></div>');
	
	if (fruitsArray[fruitId]["name"] === fruitarray[id]) {
		generateConfetti();
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($fruits);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameFruit = new Game('Fruits', fruitarray, fruitfunc);  
    