var numbersArray = [
    {
        "name" : "zero",
        "voice" :""
    },
    {
        "name" : "one",
        "voice" :"./img/audionumber/1.mp3"
    },
    {
        "name" : "tow",
        "voice" :"./img/audionumber/2.mp3"
    },
    {
        "name" : "three",
        "voice" :"./img/audionumber/3.mp3"
    },
    {
        "name" : "four",
        "voice" :"./img/audionumber/4.mp3"
    },
    {
        "name" : "five",
        "voice" :"./img/audionumber/5.mp3"
    },
    {
        "name" : "six",
        "voice" :"./img/audionumber/6.mp3"
    },
    {
        "name" : "seven",
        "voice" :"./img/audionumber/7.mp3"
    },
    {
        "name" : "height",
        "voice" :"./img/audionumber/8.mp3"
    },
    {
        "name" : "nine",
        "voice" :"./img/audionumber/9.mp3"
    },
    {
        "name" : "ten",
        "voice" :"./img/audionumber/10.mp3"
    },
    {
        "name" : "eleven",
        "voice" :"./img/audionumber/11.mp3"
    },
    {
        "name" : "twelve",
        "voice" :"./img/audionumber/12.mp3"
    },
    {
        "name" : "therteen",
        "voice" :"./img/audionumber/13.mp3"
    },
    {
        "name" : "fourteen",
        "voice" :"./img/audionumber/14.mp3"
    },
    {
        "name" : "fifteen",
        "voice" :"./img/audionumber/15.mp3"
    },
    {
        "name" : "sixteen",
        "voice" :"./img/audionumber/16.mp3"
    },
    {
        "name" : "seventeen",
        "voice" :"./img/audionumber/17.mp3"
    },
    {
        "name" : "heighteen",
        "voice" :"./img/audionumber/18.mp3"
    },

    {
        "name" : "nineteen",
        "voice" :"./img/audionumber/19.mp3"
    },
    {
        "name" : "twenty",
        "voice" :"./img/audionumber/20.mp3"
    },
    {
        "name" : "thirty",
        "voice" :"./img/audionumber/30.mp3"
    },
    {
        "name" : "forty",
        "voice" :"./img/audionumber/40.mp3"
    },
    {
        "name" : "fifty",
        "voice" :"./img/audionumber/50.mp3"
    },
    {
        "name" : "sixty",
        "voice" :"./img/audionumber/60.mp3"
    },
    {
        "name" : "seventy",
        "voice" :"./img/audionumber/70.mp3"
    },
    {
        "name" : "heighty",
        "voice" :"./img/audionumber/80.mp3"
    },

    {
        "name" : "ninety",
        "voice" :"./img/audionumber/90.mp3"
    },
    {
        "name" : "hundred",
        "voice" :"./img/audionumber/100.mp3"
    }
];
function playAudioNumber(i){
	var url = numbersArray[i]["voice"];
	new Audio(url).play();
  }
  function displayNumbers(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a job and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $numbers =  $('<div id="colors" class="row animalslist"></div>');
	var index = numbersArray.length - 1;
    while(index >= 0){
		//var audio = jobArray[index]["voice"];
		///console.log(audio);
		var $number = $(`<div class="column"><h1 id="${index}" onclick="playAudioNumber(this.id)" style="background-color : white" class=" imggame animal">${index}</h1></div>`);
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+numbersArray[index]["name"]+'</h2>');
		$number.append($text);
		$numbers.prepend($number);
		//$numbers.append($number);
		index--;
	}

	$('#div4').append($numbers);

}
var result = 0;
function numbers() {
	var num1= Math.floor(Math.random() * 10);
	var num2= Math.floor(Math.random() * 10);
	result = num1 + num2;
	$('#div4').html('');
	var $title = $('<h1 class = "titleh3">Enter your ansewr and click on the equal sign to get you result</h1>')
	$('#div4').append($title);
	var $numbers =  $('<div id="colors" class="row numberplus">');

		var $number = $('<img   class="column imggame animal" src="./imgs/'+num1+'.png" alt="Colors" >');
		$numbers.append($number);
		var $number = $('<img   onclick="numbers()" class="column imggame animal" src="./imgs/plus.png" alt="Colors" >');
		$numbers.append($number);
		var $number = $('<img   class="column imggame animal" src="./imgs/'+num2+'.png" alt="Colors" >');
		$numbers.append($number);
		var $number = $('<img   onclick="add()"  class="column imggame animal" src="./imgs/equal.png" alt="Colors" >');
		$numbers.append($number);
		var $input = $('<input id="1"  style="font-size: 100px" class="column imggame animal" ></div>');
		$numbers.append($input);


	$('#div4').append($numbers);

	
}