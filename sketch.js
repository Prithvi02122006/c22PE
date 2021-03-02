//PHYSICS ENGINE
//namespacing
const World=Matter.World //creat aphysics world
const Engine=Matter.Engine //run the world
const Bodies=Matter.Bodies
var object,ground,ball;
function setup() {
  createCanvas(400,400);
  //create PE and world using PE
  engine=Engine.create()
  world=engine.world
  var op={
    isStatic:true //fixed
  }
  ground=Bodies.rectangle(200,390,200,50,op) //create object in memory
  var op1 = {
    restitution:1.0
  }
  ball = Bodies.circle(200,100,20,op1)

  World.add(world,ground)
  World.add(world,ball)
  console.log(ground)


}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,200,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}