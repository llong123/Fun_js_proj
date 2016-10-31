
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";
ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.shadowBlur = 15;
ctx.shadowColor = "red";

function degToRad(degrees){
    var rad = Math.PI/180;
    return degrees * rad;
}

function EngToFin(){
    
    var viikkopaivat = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];
    var kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu",
                        "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu",
                        "Marraskuu", "Joulukuu"];
    
    var now = new Date();
    var viikkopv =now.getDay();
    var paiva = now.getDate();
    var kuukausi = now.getMonth();
    var vuosi = now.getFullYear();
    
    return viikkopaivat[viikkopv] + " " + paiva + ". " + kuukaudet[kuukausi] + " " + vuosi; 
}

function renderTime(){
    
    var now = new Date();
    var date = EngToFin();
    //var date = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours() * (360/12);
    var minutes = now.getMinutes() * (360/60);
    var seconds = now.getSeconds() * (360/60);
    var miliseconds = now.getMilliseconds() * (360/1000/60);
    
    //Background
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    //Hours
    ctx.beginPath();
    ctx.arc(450, 300, 250, degToRad(-90) , degToRad(hours - 90), 0);
    ctx.stroke();
    
    //Minutes
    ctx.beginPath();
    ctx.arc(450, 300, 220, degToRad(-90) , degToRad(minutes - 90), 0);
    ctx.stroke();
    
    //Seconds
    ctx.beginPath();
    ctx.arc(450, 300, 190, degToRad(-90) , degToRad((seconds + miliseconds)- 90), 0);
    ctx.stroke();

    //Date
    ctx.font = "25px Helvetica";
    ctx.fillText(date,350,canvas.height/2);
    
    //Time
    ctx.fillText(time,400, 240);
    
}

setInterval(renderTime,40);