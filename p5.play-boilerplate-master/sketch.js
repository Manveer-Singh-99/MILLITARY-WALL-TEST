var bullet,wall,wallThickness;
var damage;

function setup() {
  createCanvas(1000, 400);
  
  bullet = createSprite(100,190,50,50);
  bullet.shapeColor ="lightpink"
 
  wall = createSprite(900,200,20,300);
  wall.shapeColor ="lightpink";
  wallThickness=random(22,83)
  
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = 10;
}

function draw() {

  background("BROWN");
  drawSprites();

  fill("black");
  textSize(25);
  text("MILLITARY WALL TEST",250,50);
  
  //refer to function collide.
  collide(wall,bullet)
  
  textSize(15);
  text("Damage is : > 10 ===> wall is RED ===> Lethal",30,340);
  text("Damage is : < 10 ===> wall is Green ===> Good",30,360);
  fill("red");
  textSize(25);
  text("Damage is : "+Math.floor(damage),10,300);
}

function damages(){

   damage=(0.5 * weight * speed * speed)/(wallThickness*wallThickness*wallThickness);
  
  if(damage>10)
  {
    wall.shapeColor="red";
  }

  //if(damage=10)
  //{
    //wall.shapeColor="yellow";
  //}

  if(damage<10)
  {
    wall.shapeColor="green";
  }
  
}
function collide(object1,object2){
  if(object1.x-object2.x===object1.width/2 + object1.width/2+10)
    {
      damages();
      object1.velocityX = 0;
      object2.velocityX = 0;
     
    }
}