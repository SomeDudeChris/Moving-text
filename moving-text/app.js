// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

let font;
let vehicles = [];

let titles = [];

function preload() {
  font = loadFont('Barlow-Black.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight*4);
  background(255);

  let points = font.textToPoints('Chris Murphy', windowWidth/5, windowHeight/2, 192, {
    sampleFactor: 0.25
  });

  let points2 = font.textToPoints('Code', 2*windowWidth /5, windowHeight/2, 192, {
    sampleFactor: 0.25
  });

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

window.onscroll = function() {transition()};



function transition() {
  if (document.documentElement.scrollTop > windowHeight) {
    console.log('Hello');

    for (let i = 0; i < posints2.length; i++) {
      
    }
  }
}