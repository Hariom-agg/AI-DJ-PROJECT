

song1 = "";
song2 = "";
leftWrist_X = "";
leftWrist_Y = "";
rightWrist_X = "";
rightWrist_Y = "";

function preload()
{
    song1 = loadSound("cali-1171.mp3");
    song2 = loadSound("melody-of-nature-main-6672.mp3");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}


function gotResult(results)
{
     if(results.length > 0)
     {
         console.log(results);
         leftWrist_X = results[0].pose.leftWrist.x;
         leftWrist_Y = results[0].pose.leftWrist.y;
         console.log("leftWrist_X = " + leftWrist_X + "leftWrist_Y = " + leftWrist_Y);

         console.log(results);
         rightWrist_X = results[0].pose.rightWrist.x;
         rightWrist_Y = results[0].pose.rightWrist.y;
         console.log("rightWrist_X = " + rightWrist_X + "rightWrist_Y = " + rightWrist_Y);

     }
}


function draw()
{
    image(video, 0, 0, 500, 400);
}