
class Dinosaur{
    color:string="yellow";
    x:number=0.1; //fraction
    y:number=0; //number
    yVel:number=0;
    height:number=55;
    jumpHeight:number=1;

    frame:number=0;
    lastFrame:number=4;
    frameCountdown:number=40;


    constructor(_color:string){
        this.color=_color;
    }


    draw(_ctx:CanvasRenderingContext2D){
        _ctx.fillStyle=this.color;
        //_ctx.fillRect(this.x*_ctx.canvas.width,_ctx.canvas.height-this.y-this.height,35,this.height);
        let id:string="anim"+this.frame
        _ctx.drawImage(<HTMLImageElement>document.getElementById(id), this.x * _ctx.canvas.width, _ctx.canvas.height - this.y - this.height,80,this.height);

        this.frameCountdown--;
        if (this.frameCountdown<=0){
            this.frame++;
            this.frameCountdown=30;
            if (this.frame>this.lastFrame){
                this.frame=0;
            }
        }
    }

    jump(){
        this.jumpHeight = 0.3 * 0.2 * window.innerHeight-5;
        this.yVel=this.jumpHeight;
        console.log("jump");
    }
}