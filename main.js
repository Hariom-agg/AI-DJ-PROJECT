
song1_status = "";
song2_status = "";
song1 = "";
song2 = "";
leftWrist_X = "";
leftWrist_Y = "";
score_leftWrist = "";
score_rightWrist = "";
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
         score_leftWrist = results[0].pose.keypoints[9].score;
         score_rightWrist = results[0].pose.keypoints[10].score;
         console.log("score_leftWrist = " + score_leftWrist);
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

    fill("#FF0000");
    stroke("#FF0000");

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    if(score_rightWrist > 0.2)
    {
        circle(rightWrist_X,rightWrist_Y,20);

         song2.stop();

         if(song1_status == false)
         {
             song1.play();
             document.getElementById("head_name").innerHTML = "Playing song1";
         }
    }

    if(score_leftWrist > 0.2)
    {
        circle(leftWrist_X,leftWrist_Y,20);

         song1.stop();

         if(song2_status == false)
         {
             song2.play();
             document.getElementById("head_name").innerHTML = "Playing song2";
         }
    }
    
}