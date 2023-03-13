function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 125 );

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('poseNet is initialized!');
}


function draw() {
    background('#ff0000');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
