class Short {
    constructor(bodyA, point) {
        this.point = point;
        this.bodyA = bodyA;
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.string = Constraint.create(options);
    }

    attachTostr(body) {
        this.string.bodyA = body;
    }

    removeFromStr() {
        this.string.bodyA = null;
    }
};