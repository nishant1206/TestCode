class Ground {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        // translate(pos.x, pos.y);
        rotate(this.body.angle);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
};