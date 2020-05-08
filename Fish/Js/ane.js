var aneObj = function () {//画海葵 使用贝加尔曲线画海葵的摇摆
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.angle = 0;
    this.amp = [];//振幅
};
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 15.5 + Math.random() * 20;//random返回[0,1)
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
};
aneObj.prototype.draw = function () {
    this.angle = (this.angle + deltaTime * 0.0005) % (Math.PI * 2);
    var sinAlpha = Math.sin(this.angle);
    ctx2.save();//save()与restore()告诉画布在这两个之间的样式定义只在两个之间起作用
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 15;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#3b154e";
    for (var i = 0; i < this.num; i++) {
        //开始绘制  起始点 ，去哪，线条样式绘制，线条样式，线条宽度,线段结尾样式,给绘制东西的透明度
        //beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
        // ctx2.globalAlpha = Math.random();//一闪一闪的
        this.headx[i] = this.rootx[i] + sinAlpha * this.amp[i];
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};