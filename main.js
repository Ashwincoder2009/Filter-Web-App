noseX=0;
noseY=0;
function preload(){
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,350,350);
image(mustache,noseX,noseY,30,30);
}
function TakeSnapshot(){
save("Old_me.png");
}
function modelLoaded(){
console.log("poseNet is initialized");
}
function gotPoses(result){
if(result.length>0){
console.log(result)
noseX=result[0].pose.nose.x-10;
noseY=result[0].pose.nose.y;
console.log("nose x="+noseX);
console.log("nose y="+noseY);
}
}