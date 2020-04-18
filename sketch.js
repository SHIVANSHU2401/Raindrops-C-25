const World = Matter.Engine;
const Bodies = Matter.Bodies;

var raindrops;

function setup() {
  var canvas = createCanvas(400,400);

  raindrops = new Raindrops(200,20050,50);
}

function draw() {
  background(0);  
  console.log(raindrops);

  raindrops.display();

  drawSprites();
}