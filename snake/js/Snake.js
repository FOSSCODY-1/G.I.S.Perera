const Scale = 20;
let i;

class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.tail = [];
        this.total = 0;


    }

    move() {
        if(this.total === this.tail.length){
            for(i = 0; i< this.tail.length-1;i++){
                this.tail[i] = this.tail[i+1];
            }
        }

        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xSpeed*Scale;
        this.y = this.y + this.ySpeed*Scale;

        this.x = constrain(this.x,0,width-Scale);
        this.y = constrain(this.y,0,height-Scale);
    }

    death() {
        for(i = 0 ; i< this.tail.length; i++){
            let position = this.tail[i];
            let Distance = dist(this.x, this.y, position.x, position.y);
            if(Distance < 1){
                console.log("call death");

                if(this.total > high_score){
                    high_score = this.total;
                    localStorage.setItem("high_score", high_score);
                }
                alert(high_score);
                this.total = 0;
                this.tail = [];
                window.location.replace("score.html");
                noLoop();
            }
        }
    }

    update() {
        fill(51);
        for(i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x,this.tail[i].y,Scale,Scale);
        }
        fill(51);
        rect(this.x,this.y,Scale,Scale);
    }

    eat(position) {

        const distance = dist(this.x, this.y, position.x, position.y);

        if(distance < 1){
            this.total++;
            return true;
        }else {
            return false;
        }


    }

    dir(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}
