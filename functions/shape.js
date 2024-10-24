var shapesArray = [
    {
        "image":"./img/shape/circle.png"
    },
    {
        "image":"./img/shape/cone.png"
    },
    {
        "image":"./img/shape/cube.png"
    },
    {
        "image":"./img/shape/cylinder.png"
    },
    {
        "image":"./img/shape/decagon.png"
    },
    {
        "image":"./img/shape/ellipse.png"
    },
    {
        "image":"./img/shape/heart.png"
    },
    {
        "image":"./img/shape/heptagon.png"
    },
    {
        "image":"./img/shape/hexagon.png"
    },
    {
        "image":"./img/shape/octagon.png"
    },
    {
        "image":"./img/shape/parallelogram.png"
    },
    {
        "image":"./img/shape/pentagon.png"
    },
    {
        "image":"./img/shape/reclangularprism.png"
    },
    {
        "image":"./img/shape/rectangle.png"
    },
    {
        "image":"./img/shape/rhombus.png"
    },
    {
        "image":"./img/shape/righttriangle.png"
    },
    {
        "image":"./img/shape/square.png"
    },
    {
        "image":"./img/shape/star.png"
    },
    {
        "image":"./img/shape/trapezoid.png"
    },
    {
        "image":"./img/shape/triangle.png"
    },
    {
        "image":"./img/shape/circle.png"
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