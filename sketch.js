function preload(){
  // put preload code here
}
var colorList=['#66D7D1','#F4F1BB','#EaF2E3','#FF637D'];


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES);
  background('255')

  //uno

}
function draw() {

  for(var x=50; x<width; x+=50){
    for(var y=50; y <height;y+=50){
      stroke(255)
      var r =random();
      if(r>0.5){
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  fill(color(colorHex));
  arc(x,y,50,50,0,90,PIE)
    }  else {
      noFill();
    }
      arc(x,y,50,50,180,270,PIE)

    }
  }
}
