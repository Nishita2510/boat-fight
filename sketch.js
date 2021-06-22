const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg;
var shark,sharkImg;
var barrel,barrel2,barrelImg;
var ship,shipImg;
var pirate1 ,pirateImg1;
var pirate2,pirateImg2;
var pirate3,pirateImg3;
var pc1,pc1Img;
var pc2,pc2Img;
var replay,replayImg;
var boat1,boat1Img;
var boat2,boat2Img;

function preload(){
bgImg = loadImage("images/ocean.jpg");

shipImg = loadImage("images/ship1.png");
boat1Img = loadImage("images/boat.png");
boat2Img = loadImage("images/duckRing.png");

sharkImg = loadImage("images/shark.png");
barrelImg = loadImage("images/barrel.png");
ballImg = loadImage("images/tennisBall.png");

pirateImg1 = loadImage("images/pirate1.png");
pirateImg2 = loadImage("images/pirate2.png");
pirateImg3 = loadImage("images/pirate3.png");

pc1Img = loadImage("images/tyler.png");
replayImg = loadImage("images/replay.png");

}

function setup() {
  //createEdgeSprite(edges)
  createCanvas(1500,600);
  engine = Engine.create();

  //for creating sharks
  shark=createSprite(20, 540, 50, 50);
  shark.addImage(sharkImg)
  shark.scale=0.7;
  //shark.velocityX=5

  //to create barrel
  barrel=createSprite(910,435,50,50)
  barrel.addImage(barrelImg)
  barrel.scale=0.78

  barrel2=createSprite(770,435,50,50)
  barrel2.addImage(barrelImg)
  barrel2.scale=0.78

  //to create pirate ship
  ship=createSprite(1150,320,50,50)
  ship.addImage(shipImg)
  ship.scale=0.8

  boat1 = createSprite(150,450,50,50)
  boat1.addImage(boat2Img)

  boat2 = createSprite(300,450,50,50)
  boat2.addImage(boat1Img)

  //for pirates
  pirate1 = createSprite(800,340,50,50);
  pirate1.addImage(pirateImg1);
  pirate1.scale=1.5

  pirate2 = createSprite(870,315,50,50);
  pirate2.addImage(pirateImg2);
  pirate2.scale=1.5

  pirate3 = createSprite(890,260,50,50);
  pirate3.addImage(pirateImg3);
  pirate3.scale=1.5 

  //pc 
  //tyler = createSprite(342,425,50,50);
  //tyler.addImage(pc1Img)

  

 // ball = new Ball(300,300,40,40)
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  //if(shark.isTouching(rightEdge)){
   // shark.velocityX=-5
  //}  
  drawSprites();
}