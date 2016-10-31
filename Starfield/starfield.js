var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("click", getClickPosition, false);

var amount = 2;
var stars = [amount];


function getClickPosition(e){
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    if(stars.length < 500){
        for(var i = 0; i < 40; i++){
            stars.push(new star(xPosition, yPosition));
        }
    }
}


function star(x, y){
    
    var xplusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var yplusOrMinus = Math.random() < 0.5 ? -1 : 1;
    
    this.x = x || Math.random() * canvas.width + 1,
    this.y = y || Math.random() * canvas.height + 1,
    this.size = Math.random() * 3 + 1, 
    this.dx = Math.random() * 10 * xplusOrMinus,
    this.dy = Math.random() * 10 * yplusOrMinus;
    
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
        
        if(stars[j].x >= canvas.width || stars[j].x <= 0){
            stars[j].dx *= -1;
            stars[j].size += .5;
            
        }else if(stars[j].y >= canvas.height || stars[j].y <= 0){
            stars[j].dy *= -1;
            stars[j].size += .5;
        }
        
        if(stars[j].size >= 6){
            
            stars.splice(j,1);
            console.log(stars.length);
        }
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




