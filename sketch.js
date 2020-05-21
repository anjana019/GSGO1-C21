var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(50, 90);
  weight =random(400,1500);
  car = createSprite(50,200,20,20); 
  wall=createSprite(1500, 200, 60, height/2);
  car.velocityX = speed;
  wall.shapecolor="gray";
}

function draw() {
  background(0);  
  if(wall.x - car.x < (car.width+car.width)/2);{
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/22509;
    if(deformation>180){
      car.shapecolor = color(225,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapecolor=color(230,230,0);
    }
    if (deformation<100){
      car.shapecolor=color(0,225,0);
    }
  }
  drawSprites();
}