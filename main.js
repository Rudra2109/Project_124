function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    
}

function modelLoaded() {
    console.log('PoseNet Is Initializad!');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(result);
    }
}
function draw() {
    background('#969A97');
}
    


