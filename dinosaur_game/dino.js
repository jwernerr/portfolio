"use strict";
class Dinosaur {
    constructor(_color) {
        this.color = "yellow";
        this.x = 0.1; //fraction
        this.y = 0; //number
        this.yVel = 0;
        this.height = 55;
        this.jumpHeight = 1;
        this.frame = 0;
        this.lastFrame = 4;
        this.frameCountdown = 40;
        this.color = _color;
    }
    draw(_ctx) {
        _ctx.fillStyle = this.color;
        //_ctx.fillRect(this.x*_ctx.canvas.width,_ctx.canvas.height-this.y-this.height,35,this.height);
        let id = "anim" + this.frame;
        _ctx.drawImage(document.getElementById(id), this.x * _ctx.canvas.width, _ctx.canvas.height - this.y - this.height, 80, this.height);
        this.frameCountdown--;
        if (this.frameCountdown <= 0) {
            this.frame++;
            this.frameCountdown = 30;
            if (this.frame > this.lastFrame) {
                this.frame = 0;
            }
        }
    }
    jump() {
        this.jumpHeight = 0.3 * 0.2 * window.innerHeight - 5;
        this.yVel = this.jumpHeight;
        console.log("jump");
    }
}
