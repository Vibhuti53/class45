var bg, bg_image;
var player ,player_img, shooting_img;
var edges;

function preload(){
    bg_image = loadImage("assets/bg.jpeg");
    player_img = loadImage("assets/shooter_2.png");
    shooting_img = loadImage("assets/shooter_3.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //adding backgroundimage
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    bg.addImage(bg_image);
    bg.scale = 1.1;

    //creating player sprite
    player = createSprite(displayWidth-1150,displayHeight-300,50,50);
    player.addImage(player_img);
    player.scale = 0.3;
    player.debug = true;
    player.setCollider("rectangle",0,0,300,300);

}

function draw() {


    if(keyDown("UP_ARROW") || touches.length>0){
        player.y = player.y-30;
    }
    if(keyDown("DOWN_ARROW") || touches.length>0){
        player.y = player.y+30;
    }
    if(keyWentDown("space")){
        player.addImage(shooting_img);
    }
    if(keyWentUp("space")){
        player.addImage(player_img);
    }

    edges = createEdgeSprites();
    player.collide(edges);
    

    drawSprites();
 
  
}
