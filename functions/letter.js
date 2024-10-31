var lettersArray = [
    {
        "image" : "./img/letters/a.png",
        "name" : "a",
        "voice" :"./img/audioletter/a.mp3"
    },
    {
        "image" : "./img/letters/b.png",
        "name" : "b",
        "voice" :"./img/audioletter/b.mp3"
    },
    {
        "image" : "./img/letters/c.png",
        "name" : "c",
        "voice" :"./img/audioletter/c.mp3"
    },
    {
        "image" : "./img/letters/d.png",
        "name" : "d",
        "voice" :"./img/audioletter/d.mp3"
    },
    {
        "image" : "./img/letters/e.png",
        "name" : "e",
        "voice" :"./img/audioletter/e.mp3"
    },
    {
        "image" : "./img/letters/f.png",
        "name" : "f",
        "voice" :"./img/audioletter/f.mp3"
    },
    {
        "image" : "./img/letters/g.png",
        "name" : "g",
        "voice" :"./img/audioletter/g.mp3"
    },
    {
        "image" : "./img/letters/h.png",
        "name" : "h",
        "voice" :"./img/audioletter/h.mp3"
    },
    {
        "image" : "./img/letters/i.png",
        "name" : "i",
        "voice" :"./img/audioletter/i.mp3"
    },
    {
        "image" : "./img/letters/j.png",
        "name" : "j",
        "voice" :"./img/audioletter/j.mp3"
    },
    {
        "image" : "./img/letters/k.png",
        "name" : "k",
        "voice" :"./img/audioletter/k.mp3"
    },
    {
        "image" : "./img/letters/l.png",
        "name" : "l",
        "voice" :"./img/audioletter/l.mp3"
    },
    {
        "image" : "./img/letters/m.png",
        "name" : "m",
        "voice" :"./img/audioletter/m.mp3"
    },
    {
        "image" : "./img/letters/n.png",
        "name" : "n",
        "voice" :"./img/audioletter/n.mp3"
    },
    {
        "image" : "./img/letters/o.png",
        "name" : "o",
        "voice" :"./img/audioletter/o.mp3"
    },
    {
        "image" : "./img/letters/p.png",
        "name" : "p",
        "voice" :"./img/audioletter/p.mp3"
    },
    {
        "image" : "./img/letters/q.png",
        "name" : "q",
        "voice" :"./img/audioletter/q.mp3"
    },
    {
        "image" : "./img/letters/r.png",
        "name" : "r",
        "voice" :"./img/audioletter/r.mp3"
    },
    {
        "image" : "./img/letters/s.png",
        "name" : "s",
        "voice" :"./img/audioletter/s.mp3"
    },
    {
        "image" : "./img/letters/t.png",
        "name" : "t",
        "voice" :"./img/audioletter/t.mp3"
    },
    {
        "image" : "./img/letters/u.png",
        "name" : "u",
        "voice" :"./img/audioletter/u.mp3"
    },
    {
        "image" : "./img/letters/v.png",
        "name" : "v",
        "voice" :"./img/audioletter/v.mp3"
    },
    {
        "image" : "./img/letters/w.png",
        "name" : "w",
        "voice" :"./img/audioletter/w.mp3"
    },
    {
        "image" : "./img/letters/x.png",
        "name" : "x",
        "voice" :"./img/audioletter/x.mp3"
    },
    {
        "image" : "./img/letters/y.png",
        "name" : "y",
        "voice" :"./img/audioletter/y.mp3"
    },
    {
        "image" : "./img/letters/z.png",
        "name" : "z",
        "voice" :"./img/audioletter/z.mp3"
    }
];
function playAudioLetter(i){
	var url = lettersArray[i]["voice"];
	new Audio(url).play();
  }

  function displayLetter(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a letter and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $letters =  $('<div id="colors" class="row animalslist"></div>');
	var index = lettersArray.length - 1;
    while(index >= 0){
		var $letter = $('<div class=" column"><img id="'+index+'" onclick="playAudioLetter(this.id)" style="background-color : white" class=" imggame animal" src="'+lettersArray[index]["image"]+'" alt="Letters" ></div>');
		var $text = $('<h2 class="animalname">'+lettersArray[index]["name"]+'</h2>');
		$letter.append($text);
		$letters.prepend($letter);
		index--;
	}

	$('#div4').append($letters);

}  

var letterarray = [1,2,3,4];
var letterId = undefined;
function letterfunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var llength = lettersArray.length - 1;
	letterId = Math.floor(Math.random() * llength);
	var arr = [lettersArray[letterId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < lettersArray.length; i++) {
	 	newarr.push(lettersArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(letterId, 1);  // Retirer la couleur sélectionnée du tableau newarr
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
	var $letter1 = $('<div class=" column"><img id="'+letterId+'"onclick="playAudioLetter(this.id)" style="background-color : white" class=" imggame animal" src="./img/letters/click.png" alt="Letters" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($letter1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $letter = $('<button class="btn-space" id="' + index + '" onclick="letterguess(this.id)"><h1>' + arr[i].toUpperCase().fontsize("72") + '</h1></button>');
		letterarray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($letter); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameLetter.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function letterguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $letters =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (lettersArray[letterId]["name"] === letterarray[id]) {
		generateConfetti();
	} else {
		
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($letters);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameLetter = new Game('Letters', letterarray, letterfunc);
