
class Dinosaur{
    color:string="yellow";
    x:number=0.1; //fraction
    y:number=0; //number
    yVel:number=0;
    height:number=55;
    width:number=80;
    jumpHeight:number=1;

    frame:number=0;
    lastFrame:number=4;
    frameCountdown:number=40;


    constructor(_color:string){
        this.color=_color;
    }


    draw(_ctx:CanvasRenderingContext2D):void{
        _ctx.fillStyle=this.color;
        //_ctx.fillRect(this.x*_ctx.canvas.width,_ctx.canvas.height-this.y-this.height,35,this.height);
        let id:string="anim"+this.frame
        _ctx.drawImage(<HTMLImageElement>document.getElementById(id), this.x * _ctx.canvas.width, _ctx.canvas.height - this.y - this.height,this.width,this.height);

        this.frameCountdown--;
        if (this.frameCountdown<=0){
            this.frame++;
            this.frameCountdown=30;
            if (this.frame>this.lastFrame){
                this.frame=0;
            }
        }

        this.drawJumpCurve(_ctx);
    }

    jump():void{
        this.getJumpHeight();
        this.yVel=this.jumpHeight;
        console.log("jump");
    }

    getJumpHeight():number{
        this.jumpHeight = 0.3 * 0.2 * window.innerHeight - 5;
        return this.jumpHeight;
    }

    drawJumpCurve(_ctx:CanvasRenderingContext2D):void{
        let startX: number = this.x * _ctx.canvas.width + this.width;
        _ctx.beginPath();
        _ctx.strokeStyle="pink";
        _ctx.moveTo(startX,_ctx.canvas.height)
        let g=9.81
        let t:number=this.jumpHeight/g
        _ctx.lineTo(startX+1.2*t,_ctx.canvas.height-(0+this.jumpHeight*t-1/2*g*t*t));
        _ctx.closePath();
        _ctx.stroke();
        
    }
}