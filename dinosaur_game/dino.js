"use strict";
class Dinosaur {
    constructor(_color) {
        this.color = "yellow";
        this.x = 0.1; //fraction
        this.y = 0; //number
        this.yVel = 0;
        this.height = 55;
        this.width = 80;
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
        _ctx.drawImage(document.getElementById(id), this.x * _ctx.canvas.width, _ctx.canvas.height - this.y - this.height, this.width, this.height);
        this.frameCountdown--;
        if (this.frameCountdown <= 0) {
            this.frame++;
            this.frameCountdown = 30;
            if (this.frame > this.lastFrame) {
                this.frame = 0;
            }
        }
        this.drawJumpCurve(_ctx);
    }
    jump() {
        this.getJumpHeight();
        this.yVel = this.jumpHeight;
        console.log("jump");
    }
    getJumpHeight() {
        this.jumpHeight = 0.3 * 0.2 * window.innerHeight - 5;
        return this.jumpHeight;
    }
    drawJumpCurve(_ctx) {
        let startX = this.x * _ctx.canvas.width + this.width;
        _ctx.beginPath();
        _ctx.strokeStyle = "pink";
        _ctx.moveTo(startX, _ctx.canvas.height);
        let g = 9.81;
        let t = this.jumpHeight / g;
        _ctx.lineTo(startX + 1.2 * t, _ctx.canvas.height - (0 + this.jumpHeight * t - 1 / 2 * g * t * t));
        _ctx.closePath();
        _ctx.stroke();
    }
}
