class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.baseImg = loadImage("./assets/cannonBase.png");
    this.cannonImg = loadImage("./assets/cannon.png");
  }
  show(){
    push()
    imageMode(CENTER);
    image(this.cannonImg,this.x,this.y,this.width,this.height);
    image(this.baseImg,170,170,200,100);
    pop()
  }
}
