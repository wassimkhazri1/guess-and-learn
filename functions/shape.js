var shapesArray = [
    {
        "image":"./img/shape/circle.png",
        "name" : "circle",
        "voice" :"./img/audioshape/circle.mp3"
    },
    {
        "image":"./img/shape/cone.png",
        "name" : "cone",
        "voice" :"./img/audioshape/cone.mp3"
    },
    {
        "image":"./img/shape/cube.png",
        "name" : "cube",
        "voice" :"./img/audioshape/cube.mp3"
    },
    {
        "image":"./img/shape/cylinder.png",
        "name" : "cylinder",
        "voice" :"./img/audioshape/cylinder.mp3"
    },
    {
        "image":"./img/shape/decagon.png",
        "name" : "decagon",
        "voice" :"./img/audioshape/decagon.mp3"
    },
    {
        "image":"./img/shape/ellipse.png",
        "name" : "ellipse",
        "voice" :"./img/audioshape/ellipse.mp3"
    },
    {
        "image":"./img/shape/heart.png",
        "name" : "heart",
        "voice" :"./img/audioshape/heart.mp3"
    },
    {
        "image":"./img/shape/heptagon.png",
        "name" : "heptagon",
        "voice" :"./img/audioshape/heptagon.mp3"
    },
    {
        "image":"./img/shape/hexagon.png",
        "name" : "hexagon",
        "voice" :"./img/audioshape/hexagon.mp3"
    },
    {
        "image":"./img/shape/octagon.png",
        "name" : "octagon",
        "voice" :"./img/audioshape/octagon.mp3"
    },
    {
        "image":"./img/shape/parallelogram.png",
        "name" : "parallelogram",
        "voice" :"./img/audioshape/parallelogram.mp3"
    },
    {
        "image":"./img/shape/pentagon.png",
        "name" : "pentagon",
        "voice" :"./img/audioshape/pentagon.mp3"
    },
    {
        "image":"./img/shape/reclangularprism.png",
        "name" : "reclangularprism",
        "voice" :"./img/audioshape/reclangularprism.mp3"
    },
    {
        "image":"./img/shape/rectangle.png",
        "name" : "rectangle",
        "voice" :"./img/audioshape/rectangle.mp3"
    },
    {
        "image":"./img/shape/rhombus.png",
        "name" : "rhombus",
        "voice" :"./img/audioshape/rhombus.mp3"
    },
    {
        "image":"./img/shape/righttriangle.png",
        "name" : "righttriangle",
        "voice" :"./img/audioshape/righttriangle.mp3"
    },
    {
        "image":"./img/shape/square.png",
        "name" : "square",
        "voice" :"./img/audioshape/square.mp3"
    },
    {
        "image":"./img/shape/star.png",
        "name" : "star",
        "voice" :"./img/audioshape/star.mp3"
    },
    {
        "image":"./img/shape/trapezoid.png",
        "name" : "trapezoid",
        "voice" :"./img/audioshape/trapezoid.mp3"
    },
    {
        "image":"./img/shape/triangle.png",
        "name" : "triangle",
        "voice" :"./img/audioshape/triangle.mp3"
    }
];
function playAudioShape(i){
	var url = shapesArray[i]["voice"];
	new Audio(url).play();
  }
function displayShapes(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a shape and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $shapes =  $('<div id="colors" class="row animalslist"></div>');
	var index = shapesArray.length - 1;
    while(index >= 0){
		//var audio = colorsArray[index]["voice"];
		//console.log(audio);
		var $shape = $('<div class=" column"><img id="'+index+'" onclick="playAudioShape(this.id)" style="background-color : white" class=" imggame animal" src="'+shapesArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+shapesArray[index]["name"]+'</h2>');
		$shape.append($text);
		$shapes.prepend($shape);
		//$shapes.append($shape);
		index--;
	}
    // var $text = $('<h1 class="titleh2 p1"><br><br>under construction</h1>');
	// $('#div4').append($text);
	$('#div4').append($shapes);

}

var shapearray = [1,2,3,4];
var shapeId = undefined;
function shapefunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var slength = shapesArray.length - 1;
	shapeId = Math.floor(Math.random() * slength);
	var arr = [shapesArray[shapeId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < shapesArray.length; i++) {
	 	newarr.push(shapesArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(shapeId, 1);  // Retirer la couleur sélectionnée du tableau newarr
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
	var $shape1 = $('<div class="column"><img id="'+shapeId+'"onclick="playAudioShape(this.id)" style="background-color : white" class=" imggame animal" src="'+shapesArray[shapeId]["image"]+'" alt="Shapes" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($shape1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $shape = $('<button class="btn-space" id="' + index + '" onclick="shapeguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		shapearray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1); 
		$div4.append($shape); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameShape.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function shapeguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $shapes =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (shapesArray[shapeId]["name"] === shapearray[id]) {
		generateConfetti();
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($shapes);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameShape = new Game('Shapes', shapearray, shapefunc);
