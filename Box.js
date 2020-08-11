class Box{
  constructor(x,y,width,height){
   var options={
   resitution:0.5,
   friction:5
}
this.image=loadImage("Image/BALL_IMAGE_SEPERATE");
this.body = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world, this.body);


  }
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(10);
    fill(233, 30, 99);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    image(this.image,this.width,this.height);
    pop();
  }

}