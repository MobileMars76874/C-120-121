function preload(){
}

function setup(){
canvas = createCanvas(300, 300);
canvas.position();
Video = createCapture(VIDEO);
Video.hide();

console.log("ml5 version is : " + ml5.version);

classifier = ml5.imageClassifier("Mobilenet", model_loaded);
}

function model_loaded(){
console.log("Model Loaded!");
}
function draw(){
image(Video, 0, 0, 300, 300);

img = document.getElementById("Video");
classifier.classify(img, getresults);
}

function getresults(error, results){
if(error){
console.log("error");
}
else{
console.log(results);
document.getElementById("oj").innerHTML = results[0].label;
document.getElementById("ac").innerHTML = results[0].confidence;
var synth = window.speechSynthesis;
speak_oj = results[0].label;
utter_it = new SpeechSynthesisUtterance(speak_oj);
speak(utter_it);
}
}




