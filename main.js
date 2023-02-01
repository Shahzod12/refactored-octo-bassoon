song = "";

function preload(params)
{
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
image(video, 0, 0, 600, 500);
}

function image() {
    
}

function loadSound() {
    var = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js")
    var = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/translations/ko/translation.json")
}
}

function play() 
{
    song.play();
    image(0, 0, 600, 500);
}