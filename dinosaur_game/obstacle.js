"use strict";
class Obstacle {
    constructor(_x) {
        this.x = 0;
        this.height = 20;
        this.offCanvas = false;
        this.x = _x;
    }
    move(_moveSpeed) {
        this.x -= _moveSpeed;
        if (this.x < -50) {
            this.offCanvas = true;
        }
    }
    draw(_ctx) {
        _ctx.fillStyle = "black";
        _ctx.fillRect(this.x, _ctx.canvas.height - this.height, 30, this.height);
    }
}
