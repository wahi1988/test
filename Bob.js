class Bob {
    constructor(x, y, radius) {
      var options = {
        restitution:1, 
        friction:0.3, 
        density:0.8
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      fill("#46AED9")
      stroke("#268DB7")
      var pos = this.body.position; 
      ellipse(pos.x, pos.y, this.radius);
      fill("#EEF3F5")
      stroke("#EEF3F5")
      ellipse(pos.x+10, pos.y-10, this.radius-40);
    }
  };