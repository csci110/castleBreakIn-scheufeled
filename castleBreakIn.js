 import { game, Sprite } from "./sgc/sgc.js";
 
 game.setBackground("grass.png");
 
 class Wall extends Sprite {
    constructor(x, y, name, image) {
       super(); 
         this.name = "A spooky castle wall";
         this.x = x;
         this.y = y;
         this.setImage(image);
         this.accelerateOnBounce = false;
        
    }   
}

new Wall(0, 0, "A spooky castle wall", "castle.png");

let leftwall = new Wall();
    leftwall.x = 0;
    leftwall.y = 200;
    leftwall.name = "Left side wall";
    leftwall.setImage("wall.png");

let rightwall = new Wall();
    rightwall.x = game.displayWidth - 48;
    rightwall.y = 200;
    rightwall.name = "right side wall";
    rightwall.setImage("wall.png");
    
class Princess extends Sprite {
    constructor() {
        super();
        this.name = "Princess Ann";
        this.setImage("ann.png");
        this.width = 48;
        this.height = 48;
        this.x = game.displayWidth;
        this.y = game.displayHeight;
        this.speedWhenWalking = 150;
        this.lives = 3;
        this.accelerateOnBounce = false;
    
    }
}

