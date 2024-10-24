var jobArray = [
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
	var url = jobArray[i]["voice"];
	new Audio(url).play();
  }

  function displayJob(){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a job and learn how to spell its name</h1>')
	$('#div4').append($title);
	var $jobs =  $('<div id="colors" class="row animalslist"></div>');
	var index = jobArray.length - 1;
    while(index >= 0){
		//var audio = jobArray[index]["voice"];
		///console.log(audio);
		var $job = $('<div class=" column"><img id="'+index+'" onclick="playAudioJob(this.id)" style="background-color : white" class=" imggame animal" src="'+jobArray[index]["image"]+'" alt="Colors" ></div>');
		// var $animal = $('<div class=" column"><img id="'+index+'"/*onclick="playAudio(this.id)" style="background-color : white" class=" imggame animal" src="'+animalsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+jobArray[index]["name"]+'</h2>');
		$job.append($text);
		$jobs.prepend($job);
		//$jobs.append($job);
		index--;
	}

	$('#div4').append($jobs);

}  
