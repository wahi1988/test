
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bgImg;
var Nameplate, nameImg;
var stand;

function preload(){
  bgImg = loadImage("bg.png");
  nameImg = loadImage("NameCard.png")
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(300, 650, 50)
	bob2 = new Bob(350, 650, 50)
  bob3 = new Bob(400, 650, 50)
	bob4 = new Bob(450, 650, 50)
	bob5 = new Bob(500, 650, 50)

	roof = new Roof(400, 210, 400, 20)

	rope1 = new Rope(bob1.body,{x:300, y:210});
	rope2 = new Rope(bob2.body,{x:350, y:210});
	rope3 = new Rope(bob3.body,{x:400, y:210});
	rope4 = new Rope(bob4.body,{x:450, y:210});
  rope5 = new Rope(bob5.body,{x:500, y:210});
  
  Nameplate = createSprite(500, 675, 200, 30);
  Nameplate.addImage(nameImg);
  Nameplate.scale = 0.5

  stand = new Stand(400, 210, 400, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();

  roof.display();

  bob4.display();
  bob5.display();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-80, y:0});
  }
}