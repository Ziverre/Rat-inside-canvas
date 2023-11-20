//The Main Class
class Sprite {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.images = {};
        this.playable = !0;
        this.edible = !1;
        this.rollable = !1;
        this.draggable = !0;
        spriteList.push(this);
    }
    
    init() {
    
    }
    
    loadImage(name, src) {
        let img = new Image();
        img.isReady = !1;
        img.src = src;
        this.images[name] = img;
        img.addEventListener("load", ()=>{
            img.isReady = !0;
        });
    }
    
    render() {
        
    }
    
    update() {
        //let individual sprites take care of this.
    }
    
    test(...args) {
        console.log(args);
    };
}

//Classes which game sprites are based on

class PetSprite extends Sprite {

    init(a) {
        this.fullness = 50;
        this.energy = 50;
        this.boredom = 50;
        this.threatened = 0;
        this.speed = 0;
        this.dir = 0; //clockwise, faces right by default
        this.focus;
        this.goals = Goal.getClone();
        Goal.sortList(this); 
        this.goal;
        this.plan;
        this.action;
    }
    
    render() {
        this.x += round(cos(this.dir)*this.speed);
        this.y += round(sin(this.dir)*this.speed);
        ctx.beginPath();
        ctx.moveTo(this.x+15,this.y);
        for(let r = 1; r < 3; r++){
            ctx.lineTo(cos(r*pi/1.5)*15 + this.x, sin(r*pi/1.5)*15 + this.y);
        }
        ctx.fillStyle = "#997755";
        ctx.fill();
    }
    
    update(){
        
    }
}

class ToySprite extends Sprite {
     
     render() {
         if (!this.images["index"].isReady) return;
         ctx.drawImage(this.images["index"], round(this.x), round(this.y));
     }
}

//Custom defined classes based on the classes above

class MouseSprite extends PetSprite {
}

class BowlSprite extends ToySprite {

    init(){
        this.edible = !0;
        this.loadImage("index", "assets/bowl.png");
    }
}

class BallSprite extends ToySprite {

    init(){
        this.loadImage("index", "assets/ball.png");
    }
}

class CheeseSprite extends ToySprite {

    init(){
        this.loadImage("index", "assets/cheese.png");
    }
}
