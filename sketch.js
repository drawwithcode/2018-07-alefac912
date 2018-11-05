// Global variables
var video;
var w = 720;
var h = 480;
var inc = 0;
var button;

function preload() {

}

function setup() {
  // Canvas
  createCanvas(windowWidth, windowHeight);
  background(255);
  // Declaration of the density of the pixels
  pixelDensity(1);
  // Title
  fill('blue');
  textFont('Karla');
  textSize(40);
  textStyle(BOLD);
  text('Slitscan', 20, 50);
  // Text
  fill(0);
  textSize(20);
  textStyle(NORMAL);
  text('Move your head in front of the camera and save the result, if you want :)', 20, 80);
  // Webcam input
  video = createCapture(VIDEO);
  video.size(w, h);
  // Save button
  button = createButton('Save Picture');
  button.position((width / 2) - (w / 2), (height / 2) + (h / 2) + 20);
  button.mousePressed(savePic);
}


function draw() {
  // Slitscan video position variables
  var x = (width / 2) - (w / 2);
  var y = (height / 2) - (h / 2);
  // Slitscan
  copy(video, w / 2, 0, 1, h, x + inc, y, 1, h);
  inc++;
  if (inc > w) {
    inc = 0;
  }
}

// Save picture function
function savePic() {
  saveCanvas('slitScan', 'jpg');
}
