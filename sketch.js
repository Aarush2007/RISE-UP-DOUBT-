var balloon, ball;
var square1, square2, square3, square4, square5;
var obstaclesGroup; 
var circle1,circle2,circle3,circle4;
var circleGroup;
var circleImg;

function preload(){
   circleImg = loadImage("circle.png");
}

function setup(){
    var canvas = createCanvas(500,800);

    balloon = createSprite(250,700,40,40);
    push();
    ball = createSprite(250,630,20,20);
    pop();
    
    obstaclesGroup = new Group();
    circleGroup = new Group();
    spawn_squares();
    
    }


function draw(){
    background(0);

    ball.shapeColor = color(0,255,0);

    if (square1.isTouching(ball)){
        square1.velocityX = -1;
        square1.velocityY = -7;
    }

    if (square2.isTouching(ball)){
        square2.velocityX = -1;
        square2.velocityY = -7;
    }

    if (square3.isTouching(ball)){
        square3.velocityX = -1;
        square3.velocityY = -7;
    }

    if (square4.isTouching(ball)){
        square4.velocityX = 1
        square4.velocityY = -7;
    }

    if (square5.isTouching(ball)){
        square5.velocityX = 1;
        square5.velocityY = -7;
    }

    if (square6.isTouching(ball)){
        square6.velocityX = 1;
        square6.velocityY = -7;
    }
    spawn_circles();
    
    drawSprites();
}

function mouseDragged(){
    ball.x = mouseX;
    ball.y = mouseY;
}

function spawn_squares(){
   
    square1 = createSprite(40, -450, 30,30);
    square2 = createSprite(60, -400, 30,30);
    square3 = createSprite(80, -350, 30,30);
    square4 = createSprite(425, -350, 30,30);
    square5 = createSprite(435, -400, 30,30);
    square6 = createSprite(455, -450, 30,30);

    square1.velocityY = 7;
    square2.velocityY = 7;
    square3.velocityY = 7;
    square4.velocityY = 7;
    square5.velocityY = 7;
    square6.velocityY = 7;

    square1.velocityX = 1;
    square2.velocityX = 1;
    square3.velocityX = 1;
    square4.velocityX = -1;
    square5.velocityX = -1;
    square6.velocityX = -1;

    square1.lifetime = 200;
    square2.lifetime = 200;
    square3.lifetime = 200;
    square4.lifetime = 200;
    square5.lifetime = 200;
    square6.lifetime = 200;


   obstaclesGroup.add(square1);
   obstaclesGroup.add(square2);
   obstaclesGroup.add(square3);
   obstaclesGroup.add(square4);
   obstaclesGroup.add(square5);
   obstaclesGroup.add(square6);
}

function spawn_circles(){

        fill(255);
        circle1 = createSprite(50,-600,50,50);
        circle2 = createSprite(100,-600,50,50);
        circle3 = createSprite(150,-600,50,50);
        circle4 = createSprite(200,-600,50,50);
        

    circleGroup.add(circle1);
    circleGroup.add(circle2);
    circleGroup.add(circle3);
    circleGroup.add(circle4);

    circle1.addAnimation("hi",circleImg);
    circle2.addAnimation("whyerror",circleImg);
    circle3.addAnimation("whylabel",circleImg);
    circle4.addAnimation("dubuged!",circleImg);

    circleGroup.setVelocityYEach(5);
}
