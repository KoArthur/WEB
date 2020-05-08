//大鱼🐟
var momObj = function () {
    this.x;
    this.y;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.angle;

    this.momTailTimer = 0;
    this.momTailCount = 0;
    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;
    this.momBodyCount = 0;
};

momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.bigEye.src = "../Img/bigEye0.png";
    this.bigBody.src = "../Img/bigSwim0.png";
    this.bigTail.src = "../Img/bigTail0.png";
    this.angle = 0;
};

momObj.prototype.draw = function () {
    //lerp x,y
    this.x = lerpDistance(mx, this.x, 0.99);
    this.y = lerpDistance(my, this.y, 0.99);
    //delta angle
    //Math.anta2(Y,X)
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.9);

    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50) {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }

    this.momEyeTimer += deltaTime;
    if (this.momEyeTimer > this.momEyeInterval) {
        this.momEyeTimer %= this.momEyeInterval;
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        if (this.momEyeCount === 0) {
            this.momEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.momEyeInterval = 200;
        }
    }

    if (data.blue === 1) {
        this.bigBody = momBodyOra[this.momBodyCount];
    } else {
        this.bigBody = momBodyBlue[this.momBodyCount];
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);//转移原点至大鱼中点
    ctx1.rotate(this.angle);//画布旋转，必须在translate后面执行
    this.bigTail = momTails[this.momTailCount];
    this.bigEye = momEyes[this.momEyeCount];
    ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
    ctx1.restore();
};