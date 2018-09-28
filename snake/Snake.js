const Scale = 100;

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.tail = [];
    this.total = 0;




    this.death = function () {
        for(var i = 0 ; i< this.tail.length;i++){
            var position = this.tail[i];
            var Distance = dist(this.x,this.y,position.x,position.y);
            if(Distance < 1){
                console.log("call death");
                total = 0 ;
                this.tail = [];
            }
        }
    }
    this.move = function () {
        if(this.total === this.tail.length){
            for(var i = 0; i< this.tail.length-1;i++){
                this.tail[i] = this.tail[i+1];
            }
        }

        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xSpeed*Scale;
        this.y = this.y + this.ySpeed*Scale;

        this.x = constrain(this.x,0,width-Scale);
        this.y = constrain(this.y,0,height-Scale);
    }
    this.dir = function (x,y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
    this.update = function () {
        fill(255);
        for(var i = 0;i < this.tail.length;i++){
            rect(this.tail[i].x,this.tail[i].y,Scale,Scale);
        }
        fill(255);
        rect(this.x,this.y,Scale,Scale);
    }
    
    this.eat = function (position) {

        var distance = dist(this.x,this.y,position.x,position.y);

        if(distance < 1){
            this.total++;
            return true;
        }else {
            return false;
        }

        
    }
}