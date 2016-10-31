var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;

var len = 50;
var clicks = 0;
var axiom = "F";
var sentence = axiom;

var rule = {
    a: "F",
    b: "FF+[+F-F-F]-[-F-F+F+F]",
    c: "FF+[+F-F-F]-[-F-F+F]"
};

function init(){
    
    
    if(clicks < 5){
        clear();
        generate();
        draw();
    }
}

function clear(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0,0,600,600)
}

function generate(){
    len *= 0.7;
    var nextSentence = "";
    for(var i = 0; i < sentence.length; i++){
        
        var current = sentence.charAt(i);
        
        if(current == rule.a){
            nextSentence+= rule.b;
        }else{
            nextSentence += current;
        }
    }
//sentence = "FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]+[+FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]-FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]-FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]]-[-FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]+FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]+FF+[+F-F-F]-[-F+F+F]FF+[+F-F-F]-[-F+F+F]+[+FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]-FF+[+F-F-F]-[-F+F+F]]-[-FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]+FF+[+F-F-F]-[-F+F+F]]]"
    sentence = nextSentence;
    clicks++;
}

function draw(){
    
    ctx.strokeStyle = "red";
    ctx.translate(w/2, h);
    
    ctx.beginPath();
    console.log(sentence.length);
    
    for(var i = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);  
        
        if(current === "F"){
            ctx.moveTo(0,0);
            ctx.lineTo(0,-len);
            ctx.translate(0,-len);
        }else if(current === "+"){
            ctx.rotate(Math.PI/6);
        }else if(current === "-"){
            ctx.rotate(-(Math.PI/6));
        }else if(current === "["){
            ctx.save();
        }else if(current === "]"){
            ctx.restore();
        }
        
    }
    ctx.stroke();
}
