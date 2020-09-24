const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ball,ground

function preload()
{
    
}

function setup() {
    createCanvas(1500, 600);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    ball = new PAPER(70,200,20);
    ground = new GROUND(750,580,1500,10);
    dustbin = new DUSTBIN(1100,570,100,10);
    dustbin2 = new DUSTBIN(1050,530,10,100);
    dustbin3 = new DUSTBIN(1150,530,10,100);


    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);

    ground.display();
    dustbin.display();
    dustbin2.display();
    dustbin3.display();
    ball.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
