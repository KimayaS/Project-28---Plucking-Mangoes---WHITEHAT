
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground
var tree
var boy
var mango1, mango2, mango3, mango4, mango5, mango6, mango7
var stone


function preload()
{
	boyimage = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600, 590, 1200, 50);

 /* var render = Render.create({ 
    element: document.body,
    engine: engine, options: {
      width: 1300, height: 600, wireframes: false
    }
  })
*/
	tree = new Tree(1000, 400, 10, 10);
	mango1 = new Mango(876, 338, 30);
	mango2 = new Mango(1000, 250, 30);
	mango3 = new Mango(1000, 320, 30);
	mango4 = new Mango(940, 311, 30);
	mango5 = new Mango(1060, 300, 30);
	mango6 = new Mango(1140, 350, 30);
	mango7 = new Mango(1040, 370, 30);
	stone = new Stone(240, 330, 35);
  slingshot = new SlingShot(stone.body, {x:235, y:440})

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  text(mouseX+","+mouseY, 20, 30);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingshot.display();

  image(boyimage, 200, 360, 200, 300);
  
  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stone.body);
  } 
}

function detectcollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body, false);
    }
}