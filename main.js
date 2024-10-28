//import { colorsArr,animalsArray,fruitsArray,colorsArray,shapesArray } from './database.js'; 	
function add() {
	$('.answer').remove();
	var $div = $('#div4');
	var $numbers =  $('<div class="answer container"></div>');
	if( $('#1').val() == result ){
		// Crée l'élément audio pour le son d'applaudissements
		const applauseSound = new Audio('audio/applause.mp3');
		applauseSound.play(); // Joue le son d'applaudissements
		generateCircles();
		generateConfetti();	

	}else{
		// Crée l'élément audio pour le son fail
		const failSound = new Audio('audio/fail.mp3');
		failSound.play(); // Joue le son d'applaudissements
	}
	$div.append($numbers);	
}

function generateAnimation(type) {
    const container = document.getElementById('animationContainer');
    
    for (let i = 0; i < 30; i++) { // Crée 30 éléments aléatoires (étoiles/fleurs)
        let starFlower = document.createElement('div');
        starFlower.classList.add(type === 'star' ? 'star' : 'flower'); // Choix entre étoile ou fleur

        // Position aléatoire sur l'écran
        starFlower.style.top = Math.random() * 100 + "vh";
        starFlower.style.left = Math.random() * 100 + "vw";
        starFlower.style.animationDelay = Math.random() * 2 + 's'; // Décalage de l'animation

        // Ajoute l'élément dans le container
        container.appendChild(starFlower);

        // Supprime l'élément après l'animation (environ 4s)
        setTimeout(() => {
            starFlower.remove();
        }, 4000);
    }

    // Supprime le container après quelques secondes (5 secondes ici)
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

function generateConfetti() {
    const container = document.getElementById('animationContainer');

	    // Crée l'élément audio pour le son d'applaudissements
		const applauseSound = new Audio('audio/applause.mp3');
		applauseSound.play(); // Joue le son d'applaudissements
        generateCircles();
    for (let i = 0; i < 50; i++) { // 50 confettis
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random colors
        confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
        confetti.style.top = Math.random() * 50 + 'vh'; 
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 1 + 's';
        
        if (container) {
            container.appendChild(confetti);
        } else {
            console.error("Element 'container' not found in the DOM");
        }
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 3500);
}

function generateCircles() {
    const container = document.getElementById('animationContainer');
    
    for (let i = 0; i < 10; i++) { // 10 cercles
        let circle = document.createElement('div');
        circle.classList.add('circle');
        
        circle.style.top = Math.random() * 100 + 'vh';
        circle.style.left = Math.random() * 100 + 'vw';
        circle.style.background = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.7)`;
        
        container.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 1000);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 3500);
}