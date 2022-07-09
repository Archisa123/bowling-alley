var ball
var pin1,pin2,pin3,pin4,pin5,pin6,pin7
var base
var life=4
var gameState="start"
var score=0 

function preload(){
  ball=loadImage("ball.png")
  pin1=loadImage("pin 1.png")
  pin2=loadImage("pin 2.png")
  pin3=loadImage("pin 3.png")
  pin4=loadImage("pin 4.png")
  pin5=loadImage("pin 5.png")
  pin6=loadImage("pin 6.png")
  pin7=loadImage("pin 7.png")
  base=loadImage("bowling base.png")
  left=loadAnimation("left fallen.png","left ground.png")
  right=loadAnimation("right fallen.png","right ground.png")
  left.looping=false
  right.looping=false
} 
function setup() {
  createCanvas(900,800)
  p1=createSprite(400,320)
  
  p1.addImage(pin1)
  p1.scale=0.5
  p1.addAnimation("lef",left)

  p2=createSprite(500,320)
  p2.addImage(pin2)
  p2.scale=0.5  
  p2.addAnimation("righ",right)

  p3=createSprite(420,360)
  p3.addImage(pin3)
  p3.scale=0.5  
  p3.addAnimation("lef",left)

  p4=createSprite(480,360)
  p4.addImage(pin4)
  p4.scale=0.2 
  p4.addAnimation("righ",right,)

  p5=createSprite(450,380)
  p5.addImage(pin5)
  p5.scale=0.2
  p5.addAnimation("righ",right)
  

  b=createSprite(502,650)
  b.addImage(ball)
  b.scale=0.4
  b.debug=true
  b.setCollider("circle",0,0,50)


}


function draw() {
  background(base)

  if (gameState == "start") {
    textSize(25)
    fill("black")
    text("press space bar to serve",320,520);
    b.velocityY=0
    b.velocityX=0
  }
 
  if (keyDown(RIGHT_ARROW)&&b.x<650){
    b.x=b.x+4
    console.log(b.x)
  }

  if (keyDown(LEFT_ARROW)&&b.x>254){
    b.x=b.x-4
    console.log(b.x)
  }

  if (keyDown("space")&&gameState=="start"){
    b.velocityY=-6
    life=life-1
    gameState="play"
  
  }

  if (b.bounceOff(p5)){
    b.scale=0.2
    p5.changeAnimation("righ")
    p5.velocityY=6
    score=score+1
    setTimeout(function(){p5.destroy()},500)
   
    

  }
  if (b.bounceOff(p4)){
    b.scale=0.2
    p4.changeAnimation("righ")
    p4.velocityY=6
    score=score+1
    setTimeout(function(){p4.destroy()},500)


  }
  if (b.bounceOff(p3)){
    b.scale=0.2
    p3.changeAnimation("lef")
    p3.velocityY=6
    score=score+1
    setTimeout(function(){p3.destroy()},500)
    


  }
  if (b.bounceOff(p2)){
    b.scale=0.2
    p2.changeAnimation("righ")
    p2.scale=0.2
    p2.velocityY=6
    score=score+1
    setTimeout(function(){p2.destroy()},500)

  }
  if (b.bounceOff(p1)){
    b.scale=0.2
    p1.changeAnimation("lef")
    p1.velocityY=6
    score=score+1
    setTimeout(function(){p1.destroy()},500)

  }
  if (b.y<380&&gameState=="play"){ 
    b.y=650
    b.x=502
    b.velocityY=0
    gameState="start"
  }
  if (b.y>800&&gameState=="play"){
    b.y=650
    b.x=502
    b.velocityY=0
    gameState="start"
  }
  
  if (life==0){
    gameState="end"
    textSize(60)
    fill("black")
    text("!GameOver!",300,600)
    
    fill("black")
    text("Press R to start over",250,320)
  }
   if (keyDown("r")&&gameState=="end"){
    gameState="start"
    score=0
    life=3
    b.destroy()
    p1.destroy()
    p2.destroy()
    p3.destroy()
    p4.destroy()
    p5.destroy()
    reset()
   }
  

  drawSprites()
  textSize(30)
  fill("black")
  if(life>0)
  text("life: "+(life-1),600,100)
  text("score: "+score,600,150)
}  
function reset(){
  p1=createSprite(400,320)
  
  p1.addImage(pin1)
  p1.scale=0.5
  p1.addAnimation("lef",left)

  p2=createSprite(500,320)
  p2.addImage(pin2)
  p2.scale=0.5  
  p2.addAnimation("righ",right)

  p3=createSprite(420,360)
  p3.addImage(pin3)
  p3.scale=0.5  
  p3.addAnimation("lef",left)

  p4=createSprite(480,360)
  p4.addImage(pin4)
  p4.scale=0.2 
  p4.addAnimation("righ",right,)

  p5=createSprite(450,380)
  p5.addImage(pin5)
  p5.scale=0.2
  p5.addAnimation("righ",right)
  

  b=createSprite(502,650)
  b.addImage(ball)
  b.scale=0.4
  b.debug=true
  b.setCollider("circle",0,0,50)

}