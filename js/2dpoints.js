// 2d point object
var Value2D = function(x,y){
  this.x = x;
  this.y = y;
};

Value2D.prototype.fromPolar = function(r,angle){
  this.x = r * Math.cos(angle);
  this.y = r * Math.sin(angle);
}
