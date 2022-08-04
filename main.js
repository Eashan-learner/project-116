mustacheX=0;
mustacheY=0;

function preload(){
mustache_m= loadImage("https://i.postimg.cc/j56BqMZ4/m.png");
}
function setup(){
Canvas=createCanvas(450,300);
Canvas.position(450,200);
video = createCapture(VIDEO);
video.size(450,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0)
    {      
        console.log(results);
        console.log("mustache x =" + results[0].pose.nose.x);
        console.log("mustache y =" + results[0].pose.nose.y);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("mustacheX = " + noseX);
        console.log("mustacheY = " + noseY);
    } 

} 
function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){

image(mustache_m, noseX-20, noseY-10, 50, 50);


}
function haha(){
    save("myFILTERapp.jpg");
}
