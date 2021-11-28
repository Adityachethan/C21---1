var background,trex,stones,biker,gameover;
var backgroundImg,trexImg,stonesImg,bikerImg,gameoverImg,trexImg2,bikerfallenImg;
var stonesGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
//var gameState = END;

function preload(){
 trexImg = loadImage("trex_1.png")
 backgroundImg = loadImage("background_1.png")
 stonesImg = loadImage("stones-.png")
 gameoverImg = loadImage("gameOver.png")
 bikerImg = loadImage("bike-.png")
 trexImg2 = loadImage("trex-2.png")
 bikerfallenImg = loadImage("biker_fallen.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight) 


 background = createSprite(windowWidth/2,windowHeight/2);
 background.addImage(backgroundImg);
 background.scale = 3;
 background.velocityX = -3

 biker = createSprite(40,height-100,10,10);
 biker.addImage(bikerImg);
 biker.scale = 0.5;

 trex = createSprite(40,height-100,30,30);
 trex.addImage(trexImg)
 trex.scale=1

 gameover = createSprite(width/2,height/2);
 gameover.addImage(gameoverImg)


 

 meteorGroup = createGroup()
}

function draw() {

    if(gameState === PLAY){

    spawnstones();
    biker.x = World.mouseX
    gameover.visible = false
    if(background.x > width){
        background.x = width/2
    }
    
    if(stonesGroup.isTouching(biker)){
        gameState = END
       
    }  
         
    }

    if(gameState === END){
        gameover.visible = true
        biker.addImage(bikerfallenImg)
        trex.addImage(trexImg2)
    }
    
    drawSprites();

    
 
}
function spawnstones(){
    if(frameCount % 250 === 0 ){
    stones = createSprite(Math.round(random(30,width-50),30, 10, 10));
    stones.addImage(stonesImg);
    stones.velocityX = -4  ;
    stones.lifetime=300;
    stonesGroup.add(stones) ;
    }
}