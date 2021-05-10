class Tree {
    constructor(x, y, width, height) {
       var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("tree.png")

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      image(this.image, 800, 200, 400, 400);
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      imageMode(CENTER);

      noFill();
      noStroke();
      
     rect(0, 0, this.width, this.height);

      pop();
    }
  };