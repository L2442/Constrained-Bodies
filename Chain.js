class Chain{
    constructor(b1, b2){
        var Options = {
            bodyA : b1,
            bodyB: b2, 
            length : 10,
            stiffness : 0.04
            }
        this.chain = Constraint.create(Options);
       World.add(world,this.chain);   
    }
    display(){
        var bodyA = this.chain.bodyA.position;
        var bodyB = this.chain.bodyB.position;

    line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
    }
}

//chain1 = new Chain(bird.body,constrainedLog.body);
//chain2 = new Chain(pig1.body,log1.body);