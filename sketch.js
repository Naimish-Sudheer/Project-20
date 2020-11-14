var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 50, 200);
  wall.shapeColor="grey";
  car = createSprite(100, 200, 50, 50);
  car.shapeColor="black"
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX = speed
}

function draw() {
  background(11,255,255);  
  if (car.isTouching(wall)){
    car.velocityX=0
    var deformation = (0.5*weight*speed*speed)/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
  }
  drawSprites();
}