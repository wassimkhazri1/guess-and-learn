var bodyArray =[
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
	var url = bodyArray[i]["voice"];
	console.log('hello');
	new Audio(url).play();
  }
  function displayBody(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a clothe and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $bodyParts =  $('<div id="colors" class="row animalslist"></div>');
	var index = bodyArray.length - 1;
    while(index >= 0){
		//var audio = clothesArray[index]["voice"];
		//console.log(audio);
		var $bodyPart = $('<div class=" column"><img id="'+index+'" onclick="playAudioBody(this.id)" style="background-color : white" class=" imggame animal" src="'+bodyArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+bodyArray[index]["name"]+'</h2>');
		$bodyPart.append($text);
		$bodyParts.prepend($bodyPart);
		//$bodyParts.append($bodyPart);
		index--;
	}

	$('#div4').append($bodyParts);

}  