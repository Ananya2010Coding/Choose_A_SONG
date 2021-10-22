song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video , 0 , 0 , 600 , 500);
   
//left wrist//
    if(scoreLEFTwrist > 0 && scoreLEFTwrist < 100){
        document.getElementById("name").innerHTML = "Bad Habits";
        console.log("Bad habits playing");
        song2.play();
    }
    else if(scoreLEFTwrist > 100 && scoreLEFTwrist < 200){
        document.getElementById("name").innerHTML = "Bad Habits";
        console.log("Bad habits playing");
        song2.play();
    }
    else if(scoreLEFTwrist > 200 && scoreLEFTwrist < 300){
        document.getElementById("name").innerHTML = "Bad Habits";
        console.log("Bad habits playing");
        song2.play();
    }
    else if(scoreLEFTwrist > 300 && scoreLEFTwrist < 400){
        document.getElementById("name").innerHTML = "Bad Habits";
        console.log("Bad habits playing");
        song2.play();
    }
    else if(scoreLEFTwrist > 400 && scoreLEFTwrist < 500){
        document.getElementById("name").innerHTML = "Bad Habits";
        console.log("Bad habits playing");
        song2.play();
    }

//right wrist//
    if(scoreRIGHTwrist > 0 && scoreRIGHTwrist < 100){
        document.getElementById("name").innerHTML = "Levitating";
        console.log("Bad habits playing");
        song1.play();
    }
    else if(scoreRIGHTwrist > 100 && scoreRIGHTwrist < 200){
        document.getElementById("name").innerHTML = "Levitating";
        console.log("Bad habits playing");
        song1.play();
    }
    else if(scoreRIGHTwrist > 200 && scoreRIGHTwrist < 300){
        document.getElementById("name").innerHTML = "Levitating";
        console.log("Levitating playing");
        song1.play();
    }
    else if(scoreRIGHTwrist > 300 && scoreRIGHTwrist < 400){
        document.getElementById("name").innerHTML = "Levitating";
        console.log("Levitating playing");
        song1.play();
    }
    else if(scoreRIGHTwrist > 400 && scoreRIGHTwrist < 500){
        document.getElementById("name").innerHTML = "Levitating";
        console.log("Levitating playing");
        song1.play();
    }
}

function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreLEFTwrist = results[0].pose.keypoints[9].score;
        console.log("Score left Wrist = "+scoreLEFTwrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x = "+leftWristX + "left wrist y = "+leftWristY);

        scoreRIGHTwrist = results[0].pose.keypoints[10].score;
        console.log("Score right Wrist = "+scoreRIGHTwrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x = "+rightWristX + "right wrist y = "+rightWristY)
    }
}

scoreLEFTwrist = 0;
scoreRIGHTwrist = 0;