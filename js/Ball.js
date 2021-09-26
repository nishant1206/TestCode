class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        var options = {
            restitution: 0.9,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        var tbp = this.body.position;
        push();
        imageMode(CENTER);
        translate(tbp.x, tbp.y);
        rotate(this.body.angle);
        image(ball_image, 0, 0, this.r, this.r);
        pop();
    }
};