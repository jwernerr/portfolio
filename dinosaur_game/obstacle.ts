class Obstacle{
    x:number=0;
    height:number=20;
    offCanvas:boolean=false;

    constructor(_x:number){
        this.x=_x;
    }

    move(_moveSpeed:number){
        this.x-=_moveSpeed;
        if (this.x<-50){
            this.offCanvas=true;
        }
    }

    draw(_ctx:CanvasRenderingContext2D){
        _ctx.fillStyle="black";
        _ctx.fillRect(this.x,_ctx.canvas.height-this.height,30,this.height)
    }
}