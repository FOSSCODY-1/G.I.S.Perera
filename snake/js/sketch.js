var snake1;
var snack;
var score = 0;


function  updateScore(score) {
    document.getElementById("score").innerHTML = (score);
}

function setup() {
  createCanvas(600,600);
  snake1 = new Snake();
  frameRate(5);
  findLocation();

}

function draw() {
strokeWeight(10);
  background(60,179,113);
    noStroke();
  snake1.death();
  snake1.move();
    snake1.update();
  if(snake1.eat(snack)){
      score++;
      updateScore(score);
      console.log(score);
      findLocation();

  }

  fill(154,205,50);
  rect(snack.x,snack.y,Scale,Scale);
}


function findLocation() {

    var colums = floor(width/Scale);
    var row = floor(height/Scale);
    snack = createVector(floor(random(colums)),floor(random(row)));
    snack.mult(Scale);
}


