var numbersArray = [
    {
        "image" : "./img/numbers/zero.png",
        "name" : "zero",
        "voice" :""
    },
    {
        "image" : "./img/numbers/one.png",
        "name" : "one",
        "voice" :"./img/audionumber/1.mp3"
    },
    {
        "image" : "./img/numbers/tow.png",
        "name" : "tow",
        "voice" :"./img/audionumber/2.mp3"
    },
    {
        "image" : "./img/numbers/three.png",
        "name" : "three",
        "voice" :"./img/audionumber/3.mp3"
    },
    {
        "image" : "./img/numbers/four.png",
        "name" : "four",
        "voice" :"./img/audionumber/4.mp3"
    },
    {
        "image" : "./img/numbers/five.png",
        "name" : "five",
        "voice" :"./img/audionumber/5.mp3"
    },
    {
        "image" : "./img/numbers/six.png",
        "name" : "six",
        "voice" :"./img/audionumber/6.mp3"
    },
    {
        "image" : "./img/numbers/seven.png",
        "name" : "seven",
        "voice" :"./img/audionumber/7.mp3"
    },
    {
        "image" : "./img/numbers/eight.png",
        "name" : "eight",
        "voice" :"./img/audionumber/8.mp3"
    },
    {
        "image" : "./img/numbers/nine.png",
        "name" : "nine",
        "voice" :"./img/audionumber/9.mp3"
    },
    {
        "image" : "./img/numbers/ten.png",
        "name" : "ten",
        "voice" :"./img/audionumber/10.mp3"
    },
    {
        "image" : "./img/numbers/eleven.png",
        "name" : "eleven",
        "voice" :"./img/audionumber/11.mp3"
    },
    {
        "image" : "./img/numbers/twelve.png",
        "name" : "twelve",
        "voice" :"./img/audionumber/12.mp3"
    },
    {
        "image" : "./img/numbers/therteen.png",
        "name" : "therteen",
        "voice" :"./img/audionumber/13.mp3"
    },
    {
        "image" : "./img/numbers/fourteen.png",
        "name" : "fourteen",
        "voice" :"./img/audionumber/14.mp3"
    },
    {
        "image" : "./img/numbers/fifteen.png",
        "name" : "fifteen",
        "voice" :"./img/audionumber/15.mp3"
    },
    {
        "image" : "./img/numbers/sixteen.png",
        "name" : "sixteen",
        "voice" :"./img/audionumber/16.mp3"
    },
    {
        "image" : "./img/numbers/seventeen.png",
        "name" : "seventeen",
        "voice" :"./img/audionumber/17.mp3"
    },
    {
        "image" : "./img/numbers/eighteen.png",
        "name" : "eighteen",
        "voice" :"./img/audionumber/18.mp3"
    },

    {
        "image" : "./img/numbers/nineteen.png",
        "name" : "nineteen",
        "voice" :"./img/audionumber/19.mp3"
    },
    {
        "image" : "./img/numbers/twenty.png",
        "name" : "twenty",
        "voice" :"./img/audionumber/20.mp3"
    },
    {
        "image" : "./img/numbers/thirty.png",
        "name" : "thirty",
        "voice" :"./img/audionumber/30.mp3"
    },
    {
        "image" : "./img/numbers/forty.png",
        "name" : "forty",
        "voice" :"./img/audionumber/40.mp3"
    },
    {
        "image" : "./img/numbers/fifty.png",
        "name" : "fifty",
        "voice" :"./img/audionumber/50.mp3"
    },
    {
        "image" : "./img/numbers/sixty.png",
        "name" : "sixty",
        "voice" :"./img/audionumber/60.mp3"
    },
    {
        "image" : "./img/numbers/seventy.png",
        "name" : "seventy",
        "voice" :"./img/audionumber/70.mp3"
    },
    {
        "image" : "./img/numbers/eighty.png",
        "name" : "eighty",
        "voice" :"./img/audionumber/80.mp3"
    },

    {
        "image" : "./img/numbers/ninety.png",
        "name" : "ninety",
        "voice" :"./img/audionumber/90.mp3"
    },
    {
        "image" : "./img/numbers/onehundred.png",
        "name" : "one hundred",
        "voice" :"./img/audionumber/100.mp3"
    }
];
var arr = [0];
function playAudioNumber(i){
	var url = numbersArray[i]["voice"];
	new Audio(url).play();
  }
  function redirectToIndex() {
    window.location.href = 'index.html';
}  
  function displayNumbers(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a number and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $numbers =  $('<div id="colors" class="row animalslist"></div>');
	var index = numbersArray.length - 1;
    while(index >= 0){
	    var $number = $('<div class=" column"><img id="'+index+'"onclick="playAudioNumber(this.id)" style="background-color : white" class=" imggame animal" src="'+numbersArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+numbersArray[index]["name"]+'</h2>');
		$number.append($text);
		$numbers.prepend($number);
		index--;
	}

	$('#div4').append($numbers);

}
function number(){
    $('#div4').html('');
	var $title = $('<h1 class = "titleh3">select operation to start play</h1>')
	$('#div4').append($title);
    // à revoir le code 
    var $b1 = $(`
      <h20><select onchange="numbers(this.value)" class="guess1 btn2" style="font-size: 22px">
            <option value="">Choose</option>
            <option value="plus">Addition(+)</option>
            <option value="multiple">Multiplication(*)</option>
            <option value="soustraction">Subtraction(-)</option>
        </select></h20>
    `);
    var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$('#div4').prepend($b1);
	$('#div4').prepend($b2);  

}

function add() {
    let input =  $('#1').val();
    $('.answer').remove();
	var $div = $('#div4');
	// var $numbers =  $('<div class="answer container"></div>');
    var $numbers =  $('<div id="animationContainer"></div>');
   // let value = Number(input);
   let value = input;
    if( value == arr[0] )
        {
		generateConfetti();	

	    }else{
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	        }
	$div.append($numbers);	
}
function numbers(value) {
	var num1= Math.floor(Math.random() * 10);
	var num2= Math.floor(Math.random() * 10);
    var result;
    switch(value){
        case "plus":
            result = num1 + num2;
            break;
        case "multiple":
            result = num1 * num2;
            break;
        case "soustraction":
            num2 = Math.floor(Math.random() * num1);
            result = num1 - num2;
            break;   
        default:
            return "Invalid operation";    

    }
    
    arr[0] = result;   // pour stocker le resultat obtenu et l'utiliser àprés dans add()
	$('#div4').html('');
	var $title = $('<h1 class = "titleh3">Enter your ansewr and click on the confirm sign to get you result</h1>')
	$('#div4').append($title);
	var $numbers =  $('<div id="colors" class="row numberplus">');

		var $number = $('<img   class="column imggame animal" src="./imgs/'+num1+'.png" alt="Numbers" >');
		$numbers.append($number);

        switch(value){
            case "plus":
                var $number = $('<img  class="column imggame animal" src="./img/numbers/plus.png" alt="Numbers" >');
                break;
            case "multiple":
                var $number = $('<img  class="column imggame animal" src="./img/numbers/multiple.png" alt="Numbers" >');
                break;
            case "soustraction":
                var $number = $('<img  class="column imggame animal" src="./img/numbers/soustraction.png" alt="Numbers" >');
                break;   
            default:
                return "Invalid operation";    
    
        }
		$numbers.append($number);

		var $number = $('<img   class="column imggame animal" src="./imgs/'+num2+'.png" alt="Numbers" >');
		$numbers.append($number);

		var $number = $('<img  class="column imggame animal" src="./img/numbers/equal.png" alt="Numbers" >');
		$numbers.append($number);

		var $input = $('<input id="1" style="font-size: 100px" class="column imggame animal" ></div>');
		$numbers.append($input);

        var $number = $('<img   onclick="add()"  class="column imggame animal" src="./img/numbers/confirm.png" alt="Numbers" >');
		$numbers.append($number);

        var $number = $('<img    class="column imggame animal" src="./img/numbers/playagain.png" alt="Numbers" >');
        $number.on("click", function() {
            numbers(value);
        });
        $numbers.append($number);

        var $number = $('<img    onclick="redirectToIndex() "class="column imggame animal" src="./img/numbers/exit.png" alt="Numbers" >');
		$numbers.append($number);

        var $number = $(`
            <h20><select onchange="numbers(this.value)" class="column imggame animal" style="background-color: rgb(231, 182, 177); font-size: 24px">
                  <option value="">Choose</option>
                  <option value="plus">Addition(+)</option>
                  <option value="multiple">Multiplication(*)</option>
                  <option value="soustraction">Subtraction(-)</option>
              </select></h20>
          `);
        $numbers.append($number);  

        $('#div4').append($numbers);

		
}