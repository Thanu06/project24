class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:0.1
        }

        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        fill(255,255,0);
        rect(pos.x,pos.y,this.width,this.height);
    }
};