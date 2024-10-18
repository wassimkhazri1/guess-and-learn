
var colorsArr = ["red","blue","green","white", "black","purple","pink","yellow"];

// when player choses game, we initiate a game instance, with the game name and array of options and function to display the choices

function colors() {


	$('#div4').html('');
	var $title = $('<h1 class = "titleh1">Pick a color and guess its name</h1>')
	$('#div4').append($title);
    var $colorguess =  $('<div id="colorsguess" class="row"></div>');
	var $colors =  $('<div id="colors" class="row"></div>');
	var index = this.array.length - 1;
    while(index >= 0){
		var $color = $('<button  class="column color" id="'+ index +'" onclick="colorfunc(this.id)" style="background-color: ' + this.array[index] +'"></button>');
		$colors.append($color);
		index--;
	}
	$colors.append($colorguess);
	$('#div4').append($colors);
}

var animalsArray = [
	{
		"image":"./imgs/ant.png",
		"name":"ant",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_ant_word.mp3"
	},
		
	{
		"image":"./imgs/bear.png",
		"name":"bear",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_bear_word.mp3"
    },
    {
		"image":"./imgs/bee.png",
		"name":"bee",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_bee_word.mp3"
    },
    {
		"image":"./imgs/bird.png",
		"name":"bird",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_bird_word.mp3"
	},
	{
		"image":"./imgs/butterfly.png",
		"name":"butterfly",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_butterfly_word.mp3"
	},
	{
		"image":"./imgs/camel.png",
		"name":"camel",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_camel_word.mp3"
	},
	{
		"image":"./imgs/cat.png",
		"name":"cat",
		"voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_cat_word.mp3"
	},
	{
		"image":"./imgs/caterpillar.png",
		"name":"caterpillar","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_caterpillar_word.mp3"},{"image":"./imgs/chicken.png","name":"chicken","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_chicken_word.mp3"},{"image":"./imgs/cow.png","name":"cow","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_cow_word.mp3"},{"image":"./imgs/crab.png","name":"crab","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_crab_word.mp3"},{"image":"./imgs/crocodile.png","name":"crocodile","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_crocodile_word.mp3"},{"image":"./imgs/deer.png","name":"deer","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_deer_word.mp3"},{"image":"./imgs/dog.png","name":"dog","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_dog_word.mp3"},{"image":"./imgs/donkey.png","name":"donkey","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_donkey_word.mp3"},{"image":"./imgs/duck.png","name":"duck","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_duck_word.mp3"},{"image":"./imgs/elephant.png","name":"elephant","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_elephant_word.mp3"},{"image":"./imgs/fish.png","name":"fish","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_fish_word.mp3"},{"image":"./imgs/frog.png","name":"frog","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_frog_word.mp3"},{"image":"./imgs/giraffe.png","name":"giraffe","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_giraffe_word.mp3"},{"image":"./imgs/goat.png","name":"goat","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_goat_word.mp3"},{"image":"./imgs/hamster.png","name":"hamster","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_hamster_word.mp3"},{"image":"./imgs/hedgehog.png","name":"hedgehog","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_hedgehog_word.mp3"},{"image":"./imgs/horse.png","name":"horse","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_horse_word.mp3"},{"image":"./imgs/jellyfish.png","name":"jellyfish","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_jellyfish_word.mp3"},{"image":"./imgs/ladybird.png","name":"ladybird","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_ladybird_word.mp3"},{"image":"./imgs/sheep.png","name":"sheep","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_sheep_word.mp3"},{"image":"./imgs/lion.png","name":"lion","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_lion_word.mp3"},{"image":"./imgs/mole.png","name":"mole","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_mole_word.mp3"},{"image":"./imgs/monkey.png","name":"monkey","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_monkey_word.mp3"},{"image":"./imgs/mouse.png","name":"mouse","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_mouse_word.mp3"},{"image":"./imgs/octopus.png","name":"octopus","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_octopus_word.mp3"},{"image":"./imgs/owl.png","name":"owl","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_owl_word.mp3"},{"image":"./imgs/panda.png","name":"panda","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_panda_word.mp3"},{"image":"./imgs/penguin.png","name":"penguin","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_penguin_word.mp3"},{"image":"./imgs/pig.png","name":"pig","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_pig_word.mp3"},{"image":"./imgs/pony.png","name":"pony","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_pony_word.mp3"},{"image":"./imgs/rabbit.png","name":"rabbit","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_rabbit_word.mp3"},{"image":"./imgs/seahorse.png","name":"seahorse","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_seahorse_word.mp3"},{"image":"./imgs/snake.png","name":"snake","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_snake_word.mp3"},{"image":"./imgs/spider.png","name":"spider","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_spider_word.mp3"},{"image":"./imgs/starfish.png","name":"starfish","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_starfish_word.mp3"},{"image":"./imgs/stingray.png","name":"stingray","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_stingray_word.mp3"},{"image":"./imgs/tiger.png","name":"tiger","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_tiger_word.mp3"},{"image":"./imgs/turkey.png","name":"turkey","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_turkey_word.mp3"},{"image":"./imgs/turtle.png","name":"turtle","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_turtle_word.mp3"},{"image":"./imgs/unicorn.png","name":"unicorn","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_unicorn_word.mp3"},{"image":"./imgs/whale.png","name":"whale","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_whale_word.mp3"},{"image":"./imgs/worm.png","name":"worm","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_worm_word.mp3"},{"image":"./imgs/zebra.png","name":"zebra","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_zebra_word.mp3"},{"image":"./imgs/pigeon.png","name":"pigeon","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_pigeon_word.mp3"},{"image":"./imgs/dinosaur.png","name":"dinosaur","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_dinosaur_word.mp3"},{"image":"./imgs/dragon.png","name":"dragon","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_dragon_word.mp3"},{"image":"./imgs/kangaroo.png","name":"kangaroo","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_kangaroo_word.mp3"},{"image":"./imgs/clownfish.png","name":"clownfish","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_clownfish_word.mp3"},{"image":"./imgs/rhinoceros.png","name":"rhinoceros","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_rhinoceros_word.mp3"},{"image":"./imgs/toad.png","name":"toad","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_toad_word.mp3"},{"image":"./imgs/puppy.png","name":"puppy","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_puppy_word.mp3"},{"image":"./imgs/hippo.png","name":"hippo","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_hippo_word.mp3"},{"image":"./imgs/rat.png","name":"rat","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_rat_word.mp3"},{"image":"./imgs/ostrich.png","name":"ostrich","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_ostrich_word.mp3"},{"image":"./imgs/peacock.png","name":"peacock","voice":"https://sound-wall.s3-eu-west-1.amazonaws.com/en_peacock_word.mp3"}];

function playAudio(i) {
	var url = animalsArray[i]["voice"];
	console.log('hello');
	new Audio(url).play();
  }
  var result = 0;
function animals() {


	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick an animal and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $animals =  $('<div id="colors" class="row animalslist"></div>');
	var index = animalsArray.length - 1;
    while(index >= 0){
		var audio = animalsArray[index]["voice"];
		console.log(audio);
		var $animal = $('<div class=" column"><img id="'+index+'"onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+animalsArray[index]["name"]+'</h2>');
		$animal.append($text);
		$animals.prepend($animal);
		index--;
	}

	$('#div4').append($animals);
}
function numbers() {
	var num1= Math.floor(Math.random() * 10);
	var num2= Math.floor(Math.random() * 10);
	result = num1 + num2;
	$('#div4').html('');
	var $title = $('<h1 class = "titleh3">Enter your ansewr and click on the equal sign to get you result</h1>')
	$('#div4').append($title);
	var $numbers =  $('<div id="colors" class="row numberplus"></div>');

		var $number = $('<div><img  style="background-color : #ffffff00" class="column imggame animal" src="./imgs/'+num1+'.png" alt="Colors" ></div>');
		$numbers.append($number);
		var $number = $('<div><img  style="background-color : #ffffff00" class="column imggame animal" src="./imgs/plus.png" alt="Colors" ></div>');
		$numbers.append($number);
		var $number = $('<div><img  style="background-color : #ffffff00" class="column imggame animal" src="./imgs/'+num2+'.png" alt="Colors" ></div>');
		$numbers.append($number);
		var $number = $('<div><img   onclick="add()" style="background-color : #ffffff00" class="column imggame animal" src="./imgs/equal.png" alt="Colors" ></div>');
		$numbers.append($number);
		var $input = $('<input id="1"  style="font-size: 100px" class="column imggame animal" >');
		$numbers.append($input);


	$('#div4').append($numbers);

	
}


function add() {

	$('.answer').remove();
	var $div = $('#div4');
	var $numbers =  $('<div class="answer container"></div>');
	var $text = $('<p></p>');
	var $img = $('')
	if( $('#1').val() == result ){
		$text.addClass('correct')
		$text.text("That's the correct answer :) ");
		$img =  $('<img src="imgs/correct.jpg">');

	}else{
		$text.addClass('wrong')
		$text.text("Wrong answer, try again !");
		$img =  $('<img src="imgs/wrong.jpg">');
	}
	$numbers.append($text);
	$numbers.append($img);
	$div.append($numbers);


	
}


var colorsarray = [1,2,3,4];
var colorId = undefined;
function colorfunc(id){
	colorId = id;
	var arr = [colorsArr[id]];
	var newarr =[];
	for (var i = 0; i < colorsArr.length; i++) {
		newarr.push(colorsArr[i]);
	};
	newarr.splice(id,1);
	for (var i = newarr.length - 1; arr.length < 4 ; i--) {
		var index = Math.floor(Math.random() * i);
		arr.push(newarr[index]);
		newarr.splice(index,1);
	};
	$('#colorsguess').html('');
	$('.answer').remove();
	var $colors =  $('#colorsguess');
	var index = arr.length - 1;
    while(index >= 0){
    	
    	var i= Math.floor(Math.random() * (index + 1));
		var $color = $('<button  class="column colorguess" id="'+ index +'" onclick="colorguess(this.id)" >'+ arr[i]+'</button>');
		colorsarray[index] = arr[i];
		arr.splice(i,1);
		$colors.append($color);
		
		index--;
	}
	$('#div4').append($colors);	
  	
}

function colorguess(id) {

	$('.answer').remove();
	var $div = $('#div4');
	var $colors =  $('<div class="answer container"></div>');
	var $text = $('<p></p>');
	var $img = $('')
	if( colorsArr[colorId] === colorsarray[id] ){
		$text.addClass('correct')
		$text.text("That's the correct answer :) ");
		$img =  $('<img src="imgs/correct.jpg">');

	}else{
		$text.addClass('wrong')
		$text.text("Wrong answer, try again !");
		$img =  $('<img src="imgs/wrong.jpg">');
	}
	$colors.append($text);
	$colors.append($img);
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
