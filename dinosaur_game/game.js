"use strict";
class Game {
    constructor(_canvas) {
        this.autoplay = true;
        this.colors = [];
        this.obstacles = [];
        this.obsCoundown = 0;
        this.gravity = -9.81;
        this.moveSpeed = 1.1;
        let r = document.querySelector(':root');
        for (let i = 0; i < 7; i++) {
            let varName = "--color" + i;
            this.colors.push(getComputedStyle(r).getPropertyValue(varName));
        }
        this.canvas = _canvas;
        this.ctx = _canvas.getContext("2d");
        this.dino = new Dinosaur(this.colors[3]);
    }
    update() {
        this.simulate();
        this.draw();
    }
    simulate() {
        //dino gravity sim
        this.dino.yVel += this.gravity * 0.07;
        this.dino.y += this.dino.yVel * 0.07;
        //dino floor collision
        if (this.dino.y < 0) {
            this.dino.yVel = 0;
            this.dino.y = 0;
        }
        //add obstacles if needed
        this.spawnObstacles();
        //obstacles movement
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].move(this.moveSpeed);
            //remove off canvas obstaclesa
            if (this.obstacles[i].offCanvas) {
                this.obstacles.splice(i, 1);
                i--;
            }
        }
    }
    draw() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.fillStyle = this.colors[1];
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.dino.draw(this.ctx);
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw(this.ctx);
        }
    }
    jump() {
        //check if dino is on floor
        //check if dino will be on floor soon
        if (this.dino.y < 10) {
            this.dino.jump();
        }
    }
    spawnObstacles() {
        this.obsCoundown--;
        if (this.obsCoundown <= 0) {
            console.log("new obs");
            this.obstacles.push(new Obstacle(this.ctx.canvas.width));
            this.obsCoundown = 400 + Math.random() * 100;
        }
    }
}
