var shapesArray = [
    {
        "image":"./img/shape/circle.png",
        "name" : "circle"
    },
    {
        "image":"./img/shape/cone.png",
        "name" : "cone"
    },
    {
        "image":"./img/shape/cube.png",
        "name" : "cube"
    },
    {
        "image":"./img/shape/cylinder.png",
        "name" : "cylinder"
    },
    {
        "image":"./img/shape/decagon.png",
        "name" : "decagon"
    },
    {
        "image":"./img/shape/ellipse.png",
        "name" : "ellipse"
    },
    {
        "image":"./img/shape/heart.png",
        "name" : "heart"
    },
    {
        "image":"./img/shape/heptagon.png",
        "name" : "heptagon"
    },
    {
        "image":"./img/shape/hexagon.png",
        "name" : "hexagon"
    },
    {
        "image":"./img/shape/octagon.png",
        "name" : "octagon"
    },
    {
        "image":"./img/shape/parallelogram.png",
        "name" : "parallelogram"
    },
    {
        "image":"./img/shape/pentagon.png",
        "name" : "pentagon"
    },
    {
        "image":"./img/shape/reclangularprism.png",
        "name" : "reclangularprism"
    },
    {
        "image":"./img/shape/rectangle.png",
        "name" : "rectangle"
    },
    {
        "image":"./img/shape/rhombus.png",
        "name" : "rhombus"
    },
    {
        "image":"./img/shape/righttriangle.png",
        "name" : "righttriangle"
    },
    {
        "image":"./img/shape/square.png",
        "name" : "square"
    },
    {
        "image":"./img/shape/star.png",
        "name" : "star"
    },
    {
        "image":"./img/shape/trapezoid.png",
        "name" : "trapezoid"
    },
    {
        "image":"./img/shape/triangle.png",
        "name" : "triangle"
    },
    {
        "image":"./img/shape/circle.png",
        "name" : "circle"
    }
];
function displayShapes(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a shape and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $shapes =  $('<div id="colors" class="row animalslist"></div>');
	var index = shapesArray.length - 1;
    while(index >= 0){
		//var audio = colorsArray[index]["voice"];
		//console.log(audio);
		var $shape = $('<div class=" column"><img id="'+index+'" style="background-color : white" class=" imggame animal" src="'+shapesArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+shapesArray[index]["name"]+'</h2>');
		$shape.append($text);
		$shapes.prepend($shape);
		//$shapes.append($shape);
		index--;
	}

	$('#div4').append($shapes);

}