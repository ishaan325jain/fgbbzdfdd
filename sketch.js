
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var bin1,bin2,bin3,ground,paper;

function setup() {
	createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	paper = new Paper(200,303,20,20);

	bin1 = new Bin(375,325,50,100);
	bin2 = new Bin(475,325,50,100);
	bin3 = new Bin(425,350,150,50);

	ground  = new Ground(400,380,800,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  bin1.display();
  bin2.display();
  bin3.display();

  ground.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.body.applyForce(paper,paper.body.position,{x:85,y:-85});
	}
}

