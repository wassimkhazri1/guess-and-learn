var fruitsArray =[
    {
        "image" : "./img/fruits/apple.png",
        "name" : "apple",
        "voice" : "./img/audiofruit/apple.mp3"
    },
    {
        "image" : "./img/fruits/banana.png",
        "name" : "banana",
        "voice" : "./img/audiofruit/banana.mp3"
    },
    {
        "image" : "./img/fruits/cherry.png",
        "name" : "cherry",
        "voice": "./img/audiofruit/cherry.mp3"
    },
    {
        "image" : "./img/fruits/grapes.png",
        "name" : "grapes",
        "voice" : "./img/audiofruit/grapes.mp3"
    },
    {
        "image" : "./img/fruits/lemon.png",
        "name" : "lemon",
        "voice" : "./img/audiofruit/lemon.mp3"
    },
    {
        "image" : "./img/fruits/orange.png",
        "name" : "orange",
        "voice" : "./img/audiofruit/orange.mp3"
    },
    {
        "image" : "./img/fruits/pear.png",
        "name" : "pear",
        "voice" : "./img/audiofruit/pear.mp3"
    },
    {
        "image" : "./img/fruits/pineapple.png",
        "name" : "pineapple",
        "voice" : "./img/audiofruit/pineapple.mp3"
    },
    {
        "image" : "./img/fruits/plum.png",
        "name" : "plum",
        "voice" : "./img/audiofruit/plum.mp3"
    },
    {
        "image" : "./img/fruits/strawberry.png",
        "name" : "strawberry",
        "voice" : "./img/audiofruit/strawberry.mp3"
    }
    ];
    function playAudioFruit(i) {
        var url = fruitsArray[i]["voice"];
        console.log('hello');
        new Audio(url).play();
      }
      function displayFruits(){
        $('#div4').html('');
        var $title = $('<h1 class = "titleh2">Pick a fruit and learn how to spell its name</h1>')
        $('#div4').append($title);
        var $fruits =  $('<div id="colors" class="row animalslist"></div>');
        var index = fruitsArray.length - 1;
        while(index >= 0){
            //var audio = colorsArray[index]["voice"];
            //console.log(audio);
            var $fruit = $('<div class=" column"><img id="'+index+'" onclick="playAudioFruit(this.id)" style="background-color : white" class=" imggame animal" src="'+fruitsArray[index]["image"]+'" alt="Colors" ></div>');
            // var $animal = $('<div class=" column"><img id="'+index+'"onclick="playAudioFruit(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
            var $text = $('<h2 class="animalname">'+fruitsArray[index]["name"]+'</h2>');
            $fruit.append($text);
            $fruits.prepend($fruit);
            //$fruits.append($fruit);
            index--;
        }
    
        $('#div4').append($fruits);
    
    }  