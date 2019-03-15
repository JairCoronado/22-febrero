class Ball{
constructor(){
this.x=random(0, width);
this.y=random(0, height);
this.vel=random(5,20);
}
  mostrar(){
    ellipse(this.x,this.y,50,50);
  }
  mover(){
	this.x = this.x+vel;
	if(this.x>375){ 
	vel = vel*-1;
	}
	if(this.x<25){
	vel = vel*-1;
	}
	console.log(this.x);
  	this.y = this.y +vel;
	if(this.y>375){ 
	vel = vel*-1;
	}
	if(this.y<25){
	vel = vel*-1;
	}
	console.log(this.y);
  }

salir(){
  var res;
  if(this.y>height){
    res=true;
  }
  else{
    res=false;
  }
    return res;
  }
}
var pelota;
var x = 200;
var y = 200;
var vel = 10;
var drops=[];


function setup() {
  createCanvas(400, 400);
  for(var i=0; i<100; i++){
    drops[i] = new Ball();
  }}


function draw() {
  background(220);
 for (var i=0; 0< drops.length; i++){
   drops[i].mostrar();
   drops[i].mover();
   console.log(drops[i].salir());
   if (drops[i].salir() == true){
     drops[i].regresar();
}}}
