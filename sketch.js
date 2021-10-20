
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(900, 800);

	var ball_opitions={
		isSatatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(x,0, y,0, x,0.05, y,0.3);

	groundObj=new ground(width/2,670,width,20);
	lefthSide = new ground(1100,600,20,120);
	rightSide = new ground(390,600,20,120)


	Engine.run(engine);

	function keyPressed() {
		if (keyCode === UP_ARROW) {
			Matter.Bodies.applyForce(ball,{ x:0,y,0},{x:0.05,y:0.3});
			Matter.Bodies.applyForce(ball,{x:0,y,0},{x:0,y:-0.053});
		}
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



