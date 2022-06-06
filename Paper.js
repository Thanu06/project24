class Paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y, 5 );
        World.add(world,this.body);

    }

    display(){
        var pos =this.body.position;
        fill(255,50,185);
        rect(pos.x,pos.y);
    }
}