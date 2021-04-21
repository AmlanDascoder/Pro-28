class Slingshot{
    constructor(bodyA, bodyB) {
        var options={
            bodyA:bodyB,
            bodyB:bodyB,
            stiffness = 0.04,
            length = 5,


        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}