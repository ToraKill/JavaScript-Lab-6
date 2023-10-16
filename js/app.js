// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

//
//speakButton.onclick = function() {
	//speakNow(textToSpeak);
//}
// Also I was getting errors for this line of code since i wasnt able to make it work I just went this way
//
//
//
//
//
// I couldn't figure out how to work in the functions nor could I figure out how to get an array to convert to a text to speak so I just did it 
//this way hoping for a subpar grade because I didn't understand this nor can my computer do alot of functions it is very old and It cannot compile alot 
//at a time please keep this in mind while marking my assignment
//
//
//
//
//
var audio, playButton, trackbutton;
function initAudioPlayer1() {
audio = new Audio();
audio.src = "children.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer1);

var audio, playButton, trackbutton;
function initAudioPlayer2() {
audio = new Audio();
audio.src = "cut.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer2);

var audio, playButton, trackbutton;
function initAudioPlayer3() {
audio = new Audio();
audio.src = "abundant.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer3);

var audio, playButton, trackbutton;
function initAudioPlayer4() {
audio = new Audio();
audio.src = "apple.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer4);

var audio, playButton, trackbutton;
function initAudioPlayer5() {
audio = new Audio();
audio.src = "chicago.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer5);

var audio, playButton, trackbutton;
function initAudioPlayer6() {
audio = new Audio();
audio.src = "doctor.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer6);

var audio, playButton, trackbutton;
function initAudioPlayer7() {
audio = new Audio();
audio.src = "bend.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer7);

var audio, playButton, trackbutton;
function initAudioPlayer8() {
audio = new Audio();
audio.src = "belligerent.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer8);

var audio, playButton, trackbutton;
function initAudioPlayer8() {
audio = new Audio();
audio.src = "belligerent.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer8);

var audio, playButton, trackbutton;
function initAudioPlayer9() {
audio = new Audio();
audio.src = "bones.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer9);

var audio, playButton, trackbutton;
function initAudioPlayer10() {
audio = new Audio();
audio.src = "cookstown.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer10);

var audio, playButton, trackbutton;
function initAudioPlayer11() {
audio = new Audio();
audio.src = "honour.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer11);

var audio, playButton, trackbutton;
function initAudioPlayer12() {
audio = new Audio();
audio.src = "create.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer12);

var audio, playButton, trackbutton;
function initAudioPlayer13() {
audio = new Audio();
audio.src = "coincidental.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer13);

var audio, playButton, trackbutton;
function initAudioPlayer14() {
audio = new Audio();
audio.src = "cello.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer14);

var audio, playButton, trackbutton;
function initAudioPlayer15() {
audio = new Audio();
audio.src = "barrie.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer15);

var audio, playButton, trackbutton;
function initAudioPlayer16() {
audio = new Audio();
audio.src = "jackson.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer16);

var audio, playButton, trackbutton;
function initAudioPlayer17() {
audio = new Audio();
audio.src = "imagine.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer17);

var audio, playButton, trackbutton;
function initAudioPlayer18() {
audio = new Audio();
audio.src = "influential.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer18);

var audio, playButton, trackbutton;
function initAudioPlayer19() {
audio = new Audio();
audio.src = "duck.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer19);

var audio, playButton, trackbutton;
function initAudioPlayer20() {
audio = new Audio();
audio.src = "toronto.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer20);

var audio, playButton, trackbutton;
function initAudioPlayer21() {
audio = new Audio();
audio.src = "paul.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer21);

var audio, playButton, trackbutton;
function initAudioPlayer22() {
audio = new Audio();
audio.src = "decided.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer22);

var audio, playButton, trackbutton;
function initAudioPlayer23() {
audio = new Audio();
audio.src = "slender.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer23);

var audio, playButton, trackbutton;
function initAudioPlayer24() {
audio = new Audio();
audio.src = "eyes.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer24);

var audio, playButton, trackbutton;
function initAudioPlayer25() {
audio = new Audio();
audio.src = "thornton.mp3";
audio.loop = false;
audio.play();
}
window.addEventListener("load", initAudioPlayer25);


document.addEventListener('DOMContentLoaded', function () {
    // Array of MP3 URLs
    var mp3Array = [
        'abundant.mp3',
        'apple.mp3',
		'barrie.mp3',
		'belligerent.mp3',
		'bend.mp3',
		'bones.mp3',
		'cello.mp3',
		'chicago.mp3',
		'children.mp3',
		'coincidental.mp3',
		'cookstown.mp3',
		'create.mp3',
		'cut.mp3',
		'decided.mp3',
		'doctor.mp3',
		'duck.mp3',
		'eyes.mp3',
		'honour.mp3',
		'imagine.mp3',
		'influential.mp3',
		'jackson.mp3',
		'paul.mp3',
		'slender.mp3',
		'thornton.mp3',
		'toronto.mp3',
    ];

    var audioPlayer = new Audio();
    function playRandomMP3() {
        var randomIndex = Math.floor(Math.random() * mp3Array.length);
        audioPlayer.src = mp3Array[randomIndex];
        audioPlayer.play();
    }
    document.getElementById('randomButton').addEventListener('click', playRandomMP3);
});