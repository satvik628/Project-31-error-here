const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground;
var divisionsHeight=300;

var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(600,1000);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

   ground = new Ground(300,height,800,20);

   for(k=0;k<=width;k=k+80){

    divisions.push(new Division(k,height-divisionsHeight/2,10,divisionsHeight));
    
      }

  for(var j=40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j=40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  for(var j=15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,475))
  }
   

  
}

function draw() {
  background(0); 
  
  
  
  drawSprites();

  ground.display();

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-30, width/2+30 ), 10,10));
    
    for(var s = 0; s <random(width/2-30, width/2+30) ; i++ ){
      particles[s].display();
    }
  }

  
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for(var i = 0; i < plinkos.length ; i++ ){
    plinkos[i].display();
  }

  }


