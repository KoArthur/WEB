var babyObj = function () {
    this.x;
    this.y;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
    this.angle;

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyFadeTimer = 0;
    this.babyFadeCount = 0;
};

babyObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.babyEye.src = "../Img/babyEye0.png";
    this.babyBody.src = "../Img/babyFade0.png";
    this.babyTail.src = "../Img/babyTail0.png";
    this.angle = 0;
};

babyObj.prototype.draw = function () {
    this.x = lerpDistance(mom.x, this.x, 0.99);
    this.y = lerpDistance(mom.y, this.y, 0.99);
    var deltaX = mom.x - this.x;
    var deltaY = mom.y - this.y;
    var deta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(deta, this.angle, 0.9);

    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
    }

    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if (this.babyEyeCount === 1) {
            this.babyEyeInterval = 200;
        } else {
            this.babyEyeInterval = Math.random() * 1500 + 2000;
        }
    }

    this.babyFadeTimer += deltaTime;
    if (this.babyFadeTimer > 300) {
        this.babyFadeCount = (this.babyFadeCount + 1);
        this.babyFadeTimer %= 300;
        if (this.babyFadeCount > 19) {
            this.babyFadeCount = 19;
            //game over
            data.gameOver = true;
        }
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    this.babyTail = babyTails[this.babyTailCount];
    this.babyEye = babyEyes[this.babyEyeCount];
    this.babyBody = babyFades[this.babyFadeCount];
    ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
    ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 25, -this.babyTail.height * 0.5);
    ctx1.restore();
};