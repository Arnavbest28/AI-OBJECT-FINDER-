var img1 = "";
var status = "";
var objects = [];
var objectDetector1 = "";
var name=document.getElementById("input");
var ans = "";


function preload() {
}

function setup() {
    canvas = createCanvas(600, 400)
    canvas.center();

    objectDetector1 = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementsByClassName('status').innerHTML = "Status=>> Object Is Detecting";

    video = createCapture(VIDEO);
    video.hide();
    video.size(600, 400);
}

function modelLoaded() {

    console.log("Cocossd Model Is Loaded");
    status = true;
    objectDetector1.detect(video, gotResult);
}




function draw() {
    image(video, 0, 0, 600, 400);

    
    }




function gotResult(error, results) {

    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}