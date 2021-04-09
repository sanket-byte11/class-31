class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var position=[this.body.position.x,this.body.position.y] 
    this.trajectory.push(position);           
   
    /* posistion= [210,45];
    trajectory=[[210,45]];
    position=[215,43];
    trajectory= [[210,45],[215,43],[216,40]];
    */

    for(var i=0; i<this.trajectory.length; i++)  {           // i++  means i=i+1
    image (this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
     
    }
  }
}
