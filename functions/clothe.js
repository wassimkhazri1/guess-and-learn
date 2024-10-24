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
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+clothesArray[index]["name"]+'</h2>');
		$clothe.append($text);
		$clothes.prepend($clothe);
		//$clothes.append($clothe);
		index--;
	}

	$('#div4').append($clothes);

}