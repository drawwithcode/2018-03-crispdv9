function preload() {
  // put preload code here
}
var colorList = ['#66D7D1', '#F4F1BB', '#EaF2E3', '#FF637D'];


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES);
  background(255)

  for (var x = 50; x < width; x += 50) {
    for (var y = 50; y < height; y += 50) {
      stroke(255)
      var r = random();
      if (r > 0.3) {
        var index = floor(random() * colorList.length);
        var colorHex = colorList[index];
        fill(color(colorHex));
        noStroke()
        arc(x, y, 50, 50, 0, 90, PIE)
      } else {
        noFill();
      }
      noStroke()
      arc(x, y, 50, 50, 90, 180, PIE)
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      arc(x, y, 50, 50, 180, 270, PIE)
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      noStroke()
      arc(x, y, 50, 50, 270, 360, PIE)

    }
  }
  for (var x = 50; x < width; x += 50) {
    for (var y = 50; y < height; y += 50) {
      noStroke();
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(255);
      noStroke()
      ellipse(x, y, 30);
    }
  }
  for (var x = 50; x < width; x += 50) {
    for (var y = 50; y < height; y += 50) {
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(colorList[3]);
      noStroke();
      rect(x, y, 10, 10);
    }
  }
  for (var x = 50; x < width; x += 50) {
    for (var y = 50; y < height; y += 50) {
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(colorList[2]);
      noStroke();
      rect(x, y, -10, -10);
    }
  }
  for (var x = 50; x < width; x += 50) {
    for (var y = 50; y < height; y += 50) {
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(colorList[1]);
      noStroke();
      rect(x, y, 10, -10);
    }
  }
  for (var x = 50; x < width; x += 50) {
    for (var y = 50; y < height; y += 50) {
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(colorList[0]);
      noStroke();
      rect(x, y, -10, 10);
    }
  }

}
var iterator = 0;

function draw() {
  // iterator ++;
  // var x = iterator;
  // var y = noise(iterator/200) * height;
  // stroke(0)
  // fill('blue')
  // ellipse(x, y, 1000);
  for (var x = 25; x < width; x += 50) {
    for (var y = 25; y < height; y += 50) {
      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      noStroke();
      ellipse(x, y, 10);
    }
  }


}
