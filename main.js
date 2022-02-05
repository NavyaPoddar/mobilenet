function setup() {
  canvas = createCanvas(600,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mobnet= ml5.imageClassifier("MobileNet" , modelloaded);
}

function modelloaded(){
  console.log("model has loaded");
}

function draw(){
  image(video,0,0,600,400);
  mobnet.classify(video , getresults);
}

resultname="";

function getresults(error,results){

  if (error) {
    console.error(error);
  } 
  
  else {
    console.log(results);
    confidence = results[0].confidence;
    resultname = results[0].label;

    if(confidence > 0.5) {
      document.getElementById("object_confidence").innerHTML = confidence;
      document.getElementById("object_name").innerHTML = resultname;
    }
    
  }
}
