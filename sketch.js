var fixed, moving, a, b, c;
function setup() {
  createCanvas(displayWidth,displayHeight);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(300,200,50,50);
  moving.shapeColor="white";
  a= createSprite(700,300,50,50);
  b= createSprite(800,300,50,50);
  a.velocityX=3;
  c= createSprite(400, 700, 50, 50);
  c.velocityY=-3;
  c.shapeColor="yellow";
}

function draw() {
  background(0);  
  drawSprites();
  moving.x=mouseX;
  moving.y=mouseY;
  if(isTouching(moving, fixed))
  {
    fixed.shapeColor="blue";
    fixed.width=fixed.width+10;
  }
  else
  {
    fixed.shapeColor="grey";
  }
  if(isTouching(c,fixed))
  {
    bounceOff(c,fixed);
  }
  bounceOff(a,b);
 }
function isTouching(obj1, obj2)
{
  if(obj1.x-obj2.x<=(obj1.width+obj2.width)/2 && 
    obj2.x-obj1.x<=(obj1.width+obj2.width)/2 &&
     obj1.y-obj2.y<=(obj1.height+obj2.height)/2 && 
    obj2.y-obj1.y<=(obj1.height+obj2.height)/2)
  {
    return true;
  }
  else
  {
    return false;
  } 
}
function bounceOff(obj3, obj4)
{
  if(obj3.x-obj4.x<=(obj3.width+obj4.width)/2 && 
  obj4.x-obj3.x<=(obj3.width+obj4.width)/2)
    {
      obj3.velocityX=obj3.velocityX*-1;
    }
  if(obj3.y-obj4.y<=(obj3.height+obj4.height)/2 && 
  obj4.y-obj3.y<=(obj3.height+obj4.height)/2)
  {
    obj3.velocityY=obj3.velocityY*-1;
  }
}