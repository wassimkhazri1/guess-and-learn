var clothesArray = [
    {
        "image":"./img/clothes/blouse.png",
        "name" : "blouse",
        "voice":"./img/audioclothes/blouse.mp3"
    },
    {
        "image":"./img/clothes/coat.png",
        "name" : "coat",
        "voice":"./img/audioclothes/coat.mp3"
    },
    {
        "image":"./img/clothes/dress.png",
        "name" : "dress",
        "voice":"./img/audioclothes/dress.mp3"
    },
    {
        "image":"./img/clothes/hat.png",
        "name" : "hat",
        "voice":"./img/audioclothes/hat.mp3"
    },
    {
        "image":"./img/clothes/jacket.png",
        "name" : "jacket",
        "voice":"./img/audioclothes/jacket.mp3"
    },
    {
        "image":"./img/clothes/jeans.png",
        "name" : "jeans",
        "voice":"./img/audioclothes/jeans.mp3"
    },
    {
        "image":"./img/clothes/pullover.png",
        "name" : "pullover",
        "voice":"./img/audioclothes/pullover.mp3"
    },
    {
        "image":"./img/clothes/sandals.png",
        "name" : "sandals",
        "voice":"./img/audioclothes/sandals.mp3"
    },
    {
        "image":"./img/clothes/shirt.png",
        "name" : "shirt",
        "voice":"./img/audioclothes/shirt.mp3"
    },
    {
        "image":"./img/clothes/shoes.png",
        "name" : "shoes",
        "voice":"./img/audioclothes/shoes.mp3"
    },
    {
        "image":"./img/clothes/shorts.png",
        "name" : "shorts",
        "voice":"./img/audioclothes/shorts.mp3"
    },
    {
        "image":"./img/clothes/skirt.png",
        "name" : "skirt",
        "voice":"./img/audioclothes/skirt.mp3"
    },
    {
        "image":"./img/clothes/socks.png",
        "name" : "socks",
        "voice":"./img/audioclothes/socks.mp3"
    },
    {
        "image":"./img/clothes/sweatshirt.png",
        "name" : "sweatshirt",
        "voice":"./img/audioclothes/sweatshirt.mp3"
    },
    {
        "image":"./img/clothes/swimsuit.png",
        "name" : "swimsuit",
        "voice":"./img/audioclothes/swimsuit.mp3"
    },
    {
        "image":"./img/clothes/tshirt.png",
        "name" : "tshirt",
        "voice":"./img/audioclothes/tshirt.mp3"
    },
    {
        "image":"./img/clothes/tie.png",
        "name" : "tie",
        "voice":"./img/audioclothes/tie.mp3"
    },
    {
        "image":"./img/clothes/tracksuit.png",
        "name" : "tracksuit",
        "voice":"./img/audioclothes/tracksuit.mp3"
    },
    {
        "image":"./img/clothes/trainers.png",
        "name" : "trainers",
        "voice":"./img/audioclothes/trainers.mp3"
    },
    {
        "image":"./img/clothes/trousers.png",
        "name" : "trousers",
        "voice":"./img/audioclothes/trousers.mp3"
    }
];
function playAudioClothe(i) {
	var url = clothesArray[i]["voice"];
	console.log('hello');
	new Audio(url).play();
  }
function displayClothes(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a clothe and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $clothes =  $('<div id="colors" class="row animalslist"></div>');
	var index = clothesArray.length - 1;
    while(index >= 0){
		//var audio = clothesArray[index]["voice"];
		//console.log(audio);
		var $clothe = $('<div class=" column"><img id="'+index+'" onclick="playAudioClothe(this.id)" style="background-color : white" class=" imggame animal" src="'+clothesArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+clothesArray[index]["name"]+'</h2>');
		$clothe.append($text);
		$clothes.prepend($clothe);
		//$clothes.append($clothe);
		index--;
	}

	$('#div4').append($clothes);

}

var clothearray = [1,2,3,4];
var clotheId = undefined;
function clothefunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var clength = clothesArray.length - 1;
	clotheId = Math.floor(Math.random() * clength);
	var arr = [clothesArray[clotheId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < clothesArray.length; i++) {
	 	newarr.push(clothesArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(clotheId, 1);  // Retirer la couleur sélectionnée du tableau newarr
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
	var $clothe1 = $('<div class=" column"><img id="'+clotheId+'"onclick="playAudioClothe(this.id)" style="background-color : white" class=" imggame animal" src="'+clothesArray[clotheId]["image"]+'" alt="Clothes" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($clothe1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $clothe = $('<button class="btn-space" id="' + index + '" onclick="clotheguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		clothearray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($clothe); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameClothe.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function clotheguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $clothes =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (clothesArray[clotheId]["name"] === clothearray[id]) {
        const applauseSound = new Audio('audio/applause.mp3');
		applauseSound.play(); // Joue le son d'applaudissements
        generateConfetti();
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($clothes);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameClothe = new Game('Clothes', clothearray, clothefunc);