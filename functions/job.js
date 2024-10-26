var jobsArray = [
    {
        "image" : "./img/jobs/chef.png",
        "name" : "chef",
        "voice" :"./img/audiojob/chef.mp3"
    },
    {
        "image" : "./img/jobs/doctor.png",
        "name" : "doctor",
        "voice" :"./img/audiojob/doctor.mp3"
    },
    {
        "image" : "./img/jobs/farmer.png",
        "name" : "farmer",
        "voice" :"./img/audiojob/farmer.mp3"
    },
    {
        "image" : "./img/jobs/fireman.png",
        "name" : "fireman",
        "voice" :"./img/audiojob/fireman.mp3"
    },
    {
        "image" : "./img/jobs/footballer.png",
        "name" : "footballer",
        "voice" :"./img/audiojob/footballer.mp3"
    },
    {
        "image" : "./img/jobs/hairdresser.png",
        "name" : "haidresser",
        "voice" :"./img/audiojob/hairdresser.mp3"
    },
    {
        "image" : "./img/jobs/mechanic.png",
        "name" : "mechanic",
        "voice" :"./img/audiojob/mechanic.mp3"
    },
    {
        "image" : "./img/jobs/policeman.png",
        "name" : "policeman",
        "voice" :"./img/audiojob/policeman.mp3"
    },
    {
        "image" : "./img/jobs/teacher.png",
        "name" : "teacher",
        "voice" :"./img/audiojob/teacher.mp3"
    },
    {
        "image" : "./img/jobs/waitress.png",
        "name" : "waitress",
        "voice" :"./img/audiojob/waitress.mp3"
    }
];
function playAudioJob(i){
	var url = jobsArray[i]["voice"];
	new Audio(url).play();
  }

  function displayJob(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a job and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $jobs =  $('<div id="colors" class="row animalslist"></div>');
	var index = jobsArray.length - 1;
    while(index >= 0){
		//var audio = jobArray[index]["voice"];
		///console.log(audio);
		var $job = $('<div class=" column"><img id="'+index+'" onclick="playAudioJob(this.id)" style="background-color : white" class=" imggame animal" src="'+jobsArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+jobsArray[index]["name"]+'</h2>');
		$job.append($text);
		$jobs.prepend($job);
		//$jobs.append($job);
		index--;
	}

	$('#div4').append($jobs);

}  

var jobarray = [1,2,3,4];
var jobId = undefined;
function jobfunc() {
	$('#div4').html('');  // Vider le div 'colorsguess' avant d'ajouter de nouveaux boutons
	var jlength = jobsArray.length - 1;
	jobId = Math.floor(Math.random() * jlength);
	var arr = [jobsArray[jobId]["name"]];  // Le bouton cliqué est ajouté en premier dans le tableau arr
	 var newarr = [];
	
	 //Ajout des autres clothe dans le tableau newarr
	 for (var i = 0; i < jobsArray.length; i++) {
	 	newarr.push(jobsArray[i]["name"]);
	 };
	  console.log(arr);
	  console.log(newarr);
	 newarr.splice(jobId, 1);  // Retirer la couleur sélectionnée du tableau newarr
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
	var $job1 = $('<div class=" column"><img id="'+jobId+'"onclick="playAudioJob(this.id)" style="background-color : white" class=" imggame animal" src="'+jobsArray[jobId]["image"]+'" alt="Jobs" ></div>');
	while (index >= 0) {
		if(index == 0){
			$div4.prepend($job1);
		}
		var i = Math.floor(Math.random() * (index + 1));
		var $job = $('<button class="btn-space" id="' + index + '" onclick="jobguess(this.id)"><h1>' + arr[i] + '</h1></button>');
		jobarray[index] = arr[i];  // Stocker la couleur dans le tableau colorsarray
		arr.splice(i, 1);  // Retirer l'élément ajouté du tableau arr
		$div4.append($job); // ajouter le bouton au div4
		index--;
	}
	var $b1 = $('<a href="#div4"><button class="guess btn1" onclick="myGameJob.displayGame()"><h1>Play</h1></button></a>');
	var $b2 = $('<a href="index.html"><button class="guess btn2"><h1>Exit</h1></button></a>');
	$div4.prepend($b1);
	$div4.prepend($b2);
}
function jobguess(id) {
	$('.answer').remove();
	var $div = $('#div4');
	 var $jobs =  $('<div id="animationContainer"></div>');
	// Logique pour vérifier la réponse
	if (jobsArray[jobId]["name"] === jobarray[id]) {
		generateConfetti();
	} else {
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/basarszlk.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}	

	$div.append($jobs);
}
function Game(name,array,displayGame) {
	var instance={};
	instance.name = name;
	instance.array = array;
	instance.displayGame = displayGame;
	return instance;
};
var myGameJob = new Game('Jobs', jobarray, jobfunc);
