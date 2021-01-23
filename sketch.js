var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score=0;
var particle=null;
var turn=0;
var PLAY=1;
var END=0;
var gamestate=PLAY;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 fill("white");
 text("1000",15,700);
 fill("white");
 text("1000",740,700)
 for(var a=0; a<=1;a++){
  fill("white")
  text("100",a*80+95,700)
 }
 fill("white")
 text("300",255,700)
 fill("white")
 text("100",335,700)
 fill("white")
 text("300",415,700)
 fill("white")
 text("300",490,700)
 for(var a=0; a<=1;a++){
  fill("white")
  text("500",a*80+570,700)
 }
 if(turn>=6){
   gamestate=END;
   text("Gameover",400,400)
 }
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles[turn]!=null){
     particles[turn].display();
    if(particles[turn].y>720){
      score=score+100
      turn=turn+1
    }
  }
}
function mousePressed(){
  if(gamestate===PLAY){
    particle=new Particle(mouseX, 10,10);
    particles.push(particle)
  }
}