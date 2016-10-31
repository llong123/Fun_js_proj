var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//canvas.addEventListener("click", getClickPosition, false);

var amount = 800;
var stars = [amount];

var map = function(n, start1, stop1, start2, stop2) {
  return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};
/*
function getClickPosition(e){
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    
    stars.push(new star(xPosition, yPosition));
    
    console.log(xPosition +" "+ yPosition);
}
*/

function star(x, y){
    
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    
    this.x = plusOrMinus * Math.random() * canvas.width + 1,
    this.y = plusOrMinus * Math.random() * canvas.height + 1,
    this.z = canvas.width,
    this.size = 3,
    this.dx = map(this.x/this.z,0,100,0,canvas.width),
    this.dy = map(this.y/this.z,0,100,0,canvas.height)
    
    //this.dx = Math.random() * 10 * plusOrMinus,
    //this.dy = Math.random() * 10 * plusOrMinus;
    
};
function createStars(){
    for(var j = 0; j < amount; j++){
        stars[j] = new star(); 
    }
}

function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fill();
}

function newCoor(){
    for(var j = 0; j < stars.length; j++){
        stars[j].x += stars[j].dx;
        stars[j].y += stars[j].dy;
        /*
        if(stars[j].x >= canvas.width || stars[j].x <= 0){
            stars[j].dx *= -1;
            stars[j].size += 0.5;
        }else if(stars[j].y >= canvas.height || stars[j].y <= 0){
            stars[j].dy *= -1;
            stars[j].size += .5;
        }
        
        if(stars[j].size >= 10){
            stars[j].size = Math.random() * 3 + 1;
            }
        */
    }
}

function draw(){
    ctx.fillStyle = "white";
    for(var i = 0; i < stars.length; i++){
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].size, 0, Math.PI*2, 1);
        ctx.fill();
    }
}

function move(){
    clearScreen();
    newCoor();
    draw();
    
}


createStars();
setInterval(move,50);




