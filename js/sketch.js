const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ball_ob, ball_image;
var ground;
var background_img;
var database;
var basket_img, basket;
var str;
var firstPos;

var database = firebase.database()

var gameState = database.ref("gameState").on("value", (data) => {
    gameState = data.val();
});

var Players = database.ref("Players");

function preload() {
    ball_image = loadImage("images/ball_img.png");
    background_img = loadImage("images/bg.jpg");
    basket_img = loadImage("images/Basket_img.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();
    ball_ob = new Ball(300, 300, 100);
    ground = new Ground(windowWidth / 2, windowHeight, windowWidth, 80);
    firstPos = [ball_ob.body.position.x, ball_ob.body.position.y];
    str = new Short(ball_ob.body, { x: firstPos[0], y: firstPos[1] });
    // basket = createSprite(200, 200);
    // basket.addImage(basket_img);
}

function draw() {
    if (gameState != "init"){
    background(background_img);
    Engine.update(engine);
    ball_ob.display();
    }
    // ground.display();
    if (gameState == "init"){
        form = new Form();
        form.display();
    }
}

function mouseDragged() {
    if (gameState == "play") {
        Matter.Body.setPosition(ball_ob.body, { x: mouseX, y: mouseY });
        Matter.Body.applyForce(ball_ob.body, ball_ob.body.position, { x: 0.1, y: -0.1 });
    }
}

function mouseReleased() {
    str.removeFromStr();
    gameState = "fly";
}

function keyPressed() {
    if (keyCode === 32) {
        str.attachTostr(ball_ob.body);
        gameState = "play";
    }
}