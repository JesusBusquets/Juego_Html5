// constructor function object general
    function MobileObject(x, y , angle, v, a, size) {
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.v = v;
      this.radius = size / 2;
      this.size = size;
      this.accX = a * Math.cos(this.angle);
      this.accY = a * Math.sin(this.angle);


      this.setSpeed = function (v) {
        this.speedX =  v * Math.cos(this.angle) ;
        this.speedY =  v * Math.sin(this.angle) ;
      };

      this.setSpeed(v);

      this.accelerate = function (a) {
        var accX = a * Math.cos(this.angle) ;
        var accY = a * Math.sin(this.angle) ;
        this.speedX += calcDistanceToMove(delta, accX);
        this.speedY += calcDistanceToMove(delta, accY);
      };

      this.move = function () {
        var incrSpeedX = calcDistanceToMove(delta, accX);
        var incrSpeedY = calcDistanceToMove(delta, accY);
        this.x += calcDistanceToMove(delta, speedX + calcDistanceToMove(delta, incrSpeedX)/2); // aproximation
        this.y += calcDistanceToMove(delta, speedY + calcDistanceToMove(delta, incrSpeedY)/2);
        this.speedX += incrSpeedX;
        this.speedY += incrSpeedY;
      };
    };


// constructor function for balls
    function Ball(x, y, angle, v, diameter, color) {
        MobileObject.call(this,x, y, angle, v, 10, diameter)  ;

        //        if (color)
        //        this.color = color;
        //        else

        this.color = color;

        this.draw = function (ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
            //this.color = 'black';
        };

        this.move = function () {
            // add horizontal increment to the x pos
            // add vertical increment to the y pos

            var incX = this.v * Math.cos(this.angle);
            var incY = this.v * Math.sin(this.angle);

            this.x += calcDistanceToMove(delta, incX);
            this.y += calcDistanceToMove(delta, incY);
        };
    }
