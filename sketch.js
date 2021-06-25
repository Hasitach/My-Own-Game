var bg,bgS
var hero ,heroImage
var enemy1
var daggerI
var fireballI
var fireballG ,daggerG
var enemyG
var life=3
function preload(){
bg=loadImage("background.jpg")
enemy1=loadAnimation("enemy1.png","enemy2.png","enemy3.png","enemy4.png")
heroImage=loadAnimation("hero1.png","hero2.png","hero3.png","hero4.png","hero5.png")
daggerI=loadImage("dagger.png")
fireballI=loadImage("fireball.png")
}

function setup() {
 createCanvas (1200,800)
 bgS=createSprite(600,400,1200,800)
 bgS.addImage(bg)
 bgS.scale=1.5

 hero=createSprite(400,600,50,50)
 hero.addAnimation("walking",heroImage)

 fireballG=new Group()
 daggerG=new Group()
 enemyG=new Group()
}

function draw() {
 background("white")
 if(keyDown(RIGHT_ARROW)){
    bgS.velocityX=bgS.velocityX-1    
 }
 if(bgS.x<200){
     bgS.x=600
 }
 if(keyDown(ENTER)){
     makeFireball()
 }
 if(keyDown("space")){
     makeDagger()
 }
 if(daggerG.isTouching(enemyG)){
     daggerG.destroyEach()
     enemyG.destroyEach()
 } 
  if(fireballG.isTouching(enemyG)){
    fireballG.destroyEach()
    enemyG.destroyEach()
}
  if(enemyG.isTouching(hero)){
    life--
    if(life===0){

    }
  }
 makeEnemies();
 drawSprites();
}

function makeEnemies(){
    if(frameCount%180===0){
    var enemy=createSprite(1200,600,50,50)
    enemy.addAnimation("walking",enemy1)
    enemy.debug=false
    enemy.setCollider("rectangle",40,0,20,enemy.height)
    //enemy.velocityX =-1   
    enemy.velocityX=enemy.velocityX-3  
    enemyG.add(enemy) 
}
}
function makeFireball(){
  var fireball =createSprite(400,600,20,20)
   fireball.addImage(fireballI)
   fireball.scale=0.1
   fireball.velocityX=5
   fireballG.add(fireball)
}
function makeDagger(){
    var dagger =createSprite(400,600,20,20)
     dagger.addImage(daggerI)
     dagger.scale=0.1
     dagger.velocityX=5
     daggerG.add(dagger)
  }