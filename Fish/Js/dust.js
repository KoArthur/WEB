var dustObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];//振幅
    this.imgNum = [];
    this.angle;
};

dustObj.prototype.num = 30;

dustObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = Math.random() * 15 + 20;
        this.imgNum[i] = Math.floor(Math.random() * 7);//归一，返回整数部分舍去小数部分
    }
    this.angle = 0;
};

dustObj.prototype.draw = function () {
    ctx1.save();
    this.angle = (this.angle + deltaTime * 0.0005) % (Math.PI * 2);
    var sinAngle = Math.sin(this.angle);
    for (var i = 0; i < this.num; i++) {
        ctx1.drawImage(dustPic[this.imgNum[i]], this.x[i] + this.amp[i] * sinAngle, this.y[i]);
    }
    ctx1.restore();
};