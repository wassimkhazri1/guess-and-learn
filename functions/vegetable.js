var VegetablesArray = [
    {
        "image" : "./img/vegetables/beans.png",
        "name" : "beans",
        "voice" :"./img/audiovegetable/beans.mp3"
    },
    {
        "image" : "./img/vegetables/cabbage.png",
        "name" : "cabbage",
        "voice" :"./img/audiovegetable/cabbage.mp3"
    },
    {
        "image" : "./img/vegetables/carrots.png",
        "name" : "carrots",
        "voice" :"./img/audiovegetable/carrots.mp3"
    },
    {
        "image" : "./img/vegetables/cucumber.png",
        "name" : "cucumber",
        "voice" :"./img/audiovegetable/cucumber.mp3"
    },
    {
        "image" : "./img/vegetables/garlic.png",
        "name" : "garlic",
        "voice" :"./img/audiovegetable/garlic.mp3"
    },
    {
        "image" : "./img/vegetables/leeks.png",
        "name" : "leeks",
        "voice" :"./img/audiovegetable/leeks.mp3"
    },
    {
        "image" : "./img/vegetables/onions.png",
        "name" : "onions",
        "voice" :"./img/audiovegetable/onions.mp3"
    },
    {
        "image" : "./img/vegetables/peas.png",
        "name" : "peas",
        "voice" :"./img/audiovegetable/peas.mp3"
    },
    {
        "image" : "./img/vegetables/potatoes.png",
        "name" : "potatoes",
        "voice" :"./img/audiovegetable/potatoes.mp3"
    },
    {
        "image" : "./img/vegetables/tomatoes.png",
        "name" : "tomatoes",
        "voice" :"./img/audiovegetable/tomatoes.mp3"
    }
];
function playAudioVegetable(i){
	var url = VegetablesArray[i]["voice"];
	new Audio(url).play();
  }
  
  function displayVegetables(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a job and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $vegetables =  $('<div id="colors" class="row animalslist"></div>');
	var index = VegetablesArray.length - 1;
    while(index >= 0){
		//var audio = jobArray[index]["voice"];
		///console.log(audio);
		var $vegetable = $('<div class="column"><img id="'+index+'" onclick="playAudioVegetable(this.id)" style="background-color : white" class=" imggame animal" src="'+VegetablesArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+VegetablesArray[index]["name"]+'</h2>');
		$vegetable.append($text);
		$vegetables.prepend($vegetable);
		//$vegetables.append($vegetable);
		index--;
	}

	$('#div4').append($vegetables);

}