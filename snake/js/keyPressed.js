function keyPressed(){
    if(keyCode === UP_ARROW){
        snake1.dir(0,-1);
        console.log("up");

    }else if(keyCode === DOWN_ARROW){
        snake1.dir(0,1);
        console.log("down");

    }else if(keyCode === RIGHT_ARROW){
        snake1.dir(1,0);
        console.log("right");

    }else if(keyCode === LEFT_ARROW){
        snake1.dir(-1,0);
        console.log("left");

    }
}