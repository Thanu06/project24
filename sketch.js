var bin1,bin2,bin3;
var paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	engine = Engine.create();
	world = engine.world;

	ground=new Ground (windowWidth/2, 650, windowWidth, 10);
	ground.height=20;
	ground.width=windowWidth;


	
	paper=new Paper(width/2-400,100);
	World.add(world, paper);

	bin1=new Bin (1000,height-45,20,200);
	bin1.height=20;
	bin1.width=200;

	bin2=new Bin (900,height-95,20,100);
	bin2.height=100;
	bin2.width=20;

	bin3=new Bin (1100,height-95,20,100);
	bin3.height=100;
	bin3.width=20;


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  keyPressed();
  ground.debug=true;
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



