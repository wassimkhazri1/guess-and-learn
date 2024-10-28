var bodyPartsArray =[
    {
        "image" : "./img/body/arm.png",
        "name" : "arm",
        "voice" : "./img/audiobody/arm.mp3"
    },
    {
        "image" : "./img/body/back.png",
        "name" : "back",
        "voice" : "./img/audiobody/back.mp3"
    },
    {
        "image" : "./img/body/chin.png",
        "name" : "chin",
        "voice" : "./img/audiobody/chin.mp3"
    },
    {
        "image" : "./img/body/ear.png",
        "name" : "ear",
        "voice" : "./img/audiobody/ear.mp3"
    },
    {
        "image" : "./img/body/eye.png",
        "name" : "eye",
        "voice" : "./img/audiobody/eye.mp3"
    },
    {
        "image" : "./img/body/face.png",
        "name" : "face",
        "voice" : "./img/audiobody/face.mp3"
    },
    {
        "image" : "./img/body/finger.png",
        "name" : "finger",
        "voice" : "./img/audiobody/finger.mp3"
    },
    {
        "image" : "./img/body/foot.png",
        "name" : "foot",
        "voice" : "./img/audiobody/foot.mp3"
    },
    {
        "image" : "./img/body/forehead.png",
        "name" : "forehead",
        "voice" : "./img/audiobody/forehead.mp3"
    },
    {
        "image" : "./img/body/hair.png",
        "name" : "hair",
        "voice" : "./img/audiobody/hair.mp3"
    },
    {
        "image" : "./img/body/hand.png",
        "name" : "hand",
        "voice" : "./img/audiobody/hand.mp3"
    },
    {
        "image" : "./img/body/head.png",
        "name" : "head",
        "voice" : "./img/audiobody/head.mp3"
    },
    {
        "image" : "./img/body/leg.png",
        "name" : "leg",
        "voice" : "./img/audiobody/leg.mp3"
    },
    {
        "image" : "./img/body/mouth.png",
        "name" : "mouth",
        "voice" : "./img/audiobody/mouth.mp3"
    },
    {
        "image" : "./img/body/nose.png",
        "name" : "nose",
        "voice" : "./img/audiobody/nose.mp3"
    },
    {
        "image" : "./img/body/stomach.png",
        "name" : "stomach",
        "voice" : "./img/audiobody/stomach.mp3"
    },
    {
        "image" : "./img/body/teeth.png",
        "name" : "teeth",
        "voice" : "./img/audiobody/teeth.mp3"
    },
    {
        "image" : "./img/body/throat.png",
        "name" : "throat",
        "voice" : "./img/audiobody/throat.mp3"
    },
    {
        "image" : "./img/body/toes.png",
        "name" : "toes",
        "voice" : "./img/audiobody/toes.mp3"
    },
    {
        "image" : "./img/body/tongue.png",
        "name" : "tongue",
        "voice" : "./img/audiobody/tongue.mp3"
    }
];
function playAudioBody(i) {
	var url = bodyPartsArray[i]["voice"];
	console.log('hello');
	new Audio(url).play();
  }
  function displayBody(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a clothe and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $bodyParts =  $('<div id="colors" class="row animalslist"></div>');
	var index = bodyPartsArray.length - 1;
    while(index >= 0){
		//var audio = clothesArray[index]["voice"];
		//console.log(audio);
		var $bodyPart = $('<div class=" column"><img id="'+index+'" onclick="playAudioBody(this.id)" style="background-color : white" class=" imggame animal" src="'+bodyPartsArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+bodyPartsArray[index]["name"]+'</h2>');
		$bodyPart.append($text);
		$bodyParts.prepend($bodyPart);
		//$bodyParts.append($bodyPart);
		index--;
	}

	$('#div4').append($bodyParts);

}  
var bodyarray = [1,2,3,4];
var bodyId = undefined;
function bodyfunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var blength = bodyPartsArray.length - 1;
	bodyId = Math.floor(Math.random() * blength);
	var arr = [bodyPartsArray[bodyId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < bodyPartsArray.length; i++) {
	 	newarr.push(bodyPartsArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(bodyId, 1);  // Retirer la couleur sélectionnée du tableau newarr
	 console.log(newarr);
	// Ajouter des couleurs aléatoires de newarr dans arr jusqu'à ce qu'il y ait 4 éléments
	for (var i = newarr.length - 1; arr.length < 4; i--) {
		var index = Math.floor(Math.random() * i);
		arr.push(newarr[index]);
		newarr.splice(index, 1);
	};
	console.log(arr);
	$('.answer').remove();
	var $div4 = $('#div4');  // Div où le bouton cliqué sera ajouté
	var index = arr.length - 1;
	var $body1 = $('<div class=" column"><img id="'+bodyId+'"onclick="playAudioBody(this.id)" style="background-color : white" class=" imggame animal" src="'+bodyPartsArray[bodyId]["image"]+'" alt="BodyParts" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($body1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $body = $('<button class="btn-space" id="' + index + '" onclick="bodyguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		bodyarray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($body); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameBody.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function bodyguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $bodyParts =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (bodyPartsArray[bodyId]["name"] === bodyarray[id]) {
		generateConfetti();
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($bodyParts);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameBody = new Game('BodyParts', bodyarray, bodyfunc);
