Peter_pan_song= "";
Harry_potter_theme_song= "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    //poseNet.on('pose',gotPoses);
}

function preload()
{
    Peter_pan_song = loadSound("music.mp3")
    Harry_potter_theme_song = loadSound("music2.mp3")
}

function draw() {
    image(video,0,0,600,530);
}

function modeLoaded(){
    console.log("PoseNet Is Initialized");
}
