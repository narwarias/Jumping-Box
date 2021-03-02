var canvas;
var music;
var box;
var green;
var blue;
var pink;
var red;

function preload(){
    // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    green=createSprite(50,390,80,10);
    green.shapeColor="green";
    
    blue=createSprite(350,390,80,10);
    blue.shapeColor=("blue")
    
    pink=createSprite(250,390,80,10);
    pink.shapeColor=("pink")
    
    
    red=createSprite(150,390,80,10);
    red.shapeColor=("red")

red=createSprite(150,390,80,10);
red.shapeColor=("red")
    //create box sprite and give velocity

box=createSprite(random(20,750),200,20,20);
box.velocityX=2;
box.velocityY=-2;
box.shapeColor=("white");

}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);


    // //add condition to check if box touching surface and make it box
    if(green.isTouching(box)&& box.bounceoff(green)){

        box.shapeColor=("green");
    }

    if(blue.isTouching(box)&& box.bounceoff(blue)){

        box.shapeColor=("blue");
    }

    if(pink.isTouching(box)&& box.bounceoff(pink)){

        box.shapeColor=("pink");
    }
    if(red.isTouching(box)&& box.bounceoff(red)){

        box.shapeColor=("red");}
    drawSprites();
}
