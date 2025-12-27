class Obstacle{
    x:number=0;
    height:number=20;
    width=30;
    offCanvas:boolean=false;

    constructor(_x:number){
        this.x=_x;
        this.height = (0.3 * 0.2 * window.innerHeight - 5)*(0.2+Math.random()*0.7);
    }

    move(_moveSpeed:number){
        this.x-=_moveSpeed;
        if (this.x<-50){
            this.offCanvas=true;
        }
    }

    draw(_ctx:CanvasRenderingContext2D,_dino:Dinosaur){
        _ctx.fillStyle="black";
        _ctx.fillRect(this.x,_ctx.canvas.height-this.height,this.width,this.height)
        this.drawCurve(_ctx,_dino);
    }

    drawCurve(_ctx:CanvasRenderingContext2D,dino:Dinosaur){
        _ctx.strokeStyle="yellow";
        _ctx.beginPath();
        let g = -9.81*0.06;
        let t: number[]=this.quadraticFormula(-1/2*g,dino.getJumpHeight(),this.height);
        console.log(t);
        let xDino1:number=this.x-1.2*t[0];
    
        let xDino2: number = this.x +this.width- 1.2 * t[2];
        _ctx.moveTo(this.x,_ctx.canvas.height-this.height);
        _ctx.lineTo(xDino1,_ctx.canvas.height)

        _ctx.moveTo(this.x + this.width, _ctx.canvas.height - this.height);
        _ctx.lineTo(xDino2, _ctx.canvas.height)
        
        _ctx.closePath();
        _ctx.stroke();
    }

    quadraticFormula(_a: number, _b: number, _c: number): number[]{
        if((_b**2-4*_a*_c)<0){
            return [];
        }
        else{
            let x1:number=(-_b+(_b**2-4*_a*_c)**1/2)/2*_a;
            let x2: number = (-_b + (_b ** 2 - 4 * _a * _c) ** 1 / 2) / 2 * _a;

            if(x1===x2){
                return [x1];
            }
            else{
                return [x1,x2];
            }
        }
    }
}