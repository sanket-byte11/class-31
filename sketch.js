//examples of different detatypes in javascript
// number datatype
var num = 50; 
console.log(num);

// string datatype
var name1=" My name is Aachal";
console.log(name1);

//Boolean (true , false)
var bool= true;
console.log(bool);

// undefined
var obj;
console.log(obj);

//null
var obj=null;
console.log(obj);


//array
var arr=[1,2,3,4];   // index 0 ,1,2,3
console.log(arr);

console.log(arr[0]);
console.log(arr[3]);

var arr1= [ name1 , num , bool];
console.log(arr1);
console.log(arr1.length);
        //    0      1     2
var arr3 =[[2,5,8],[6,4],[1,9]];
    //      0  1 2   0 1   0 1
console.log(arr3);

//arr3[2]=[1,9]
//arr3[0]=[2,3,8]
//arr3[0].length=3;
console.log(arr3[1][1]);

arr3.push(50);    //addition to the end
console.log(arr3);

arr3.pop()
console.log(arr3);

arr3.pop()   // deletion from the end
console.log(arr3);

var arr4 =[];
console.log(arr4);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}