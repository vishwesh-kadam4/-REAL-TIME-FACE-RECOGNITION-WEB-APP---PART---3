function preload() {

}

function setup() {
    canvas = createCanvas(400, 400)
    canvas.position(799, 300)
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/34gS_GUTL/model.json",modelload)
}
function modelload(){
    console.log("load")
  }
  function draw(){
    image(video,0,0,400,400)
  
    classifier.classify(video,gotreslut)
  
    
  
  }
  
  
  function gotreslut(error,result){
    if(error){
      console.error(error)
    }
    else{
      console.log(result)
      document.getElementById("correct_Object").innerHTML=result[0].label;
      document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
  }