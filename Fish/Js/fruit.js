var fruitObj = function () {
    this.alive = [];//果实是否使用
    this.orange = new Image();//黄色果实
    this.blue = new Image();//蓝色果实
    this.x = [];//果实的xx坐标
    this.y = [];//果实的y坐标
    this.l = [];//果实大小
    this.spd = [];//果实成长和上升速度
    this.fruitType = [];
    this.currentAneID = [];
    this.moveX = [];
};

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;
        this.fruitType[i] = "";
        this.currentAneID[i] = 0;
    }
    this.orange.src = "../Img/fruit.png";
    this.blue.src = "../Img/blue.png";
};

fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            if (this.l[i] < 15) {
                this.l[i] += this.spd[i] * deltaTime;
                this.x[i] = ane.headx[this.currentAneID[i]];
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;
                this.x[i] += deltaTime * this.moveX[i] * 0.02;
            }
            if (this.fruitType[i] === "blue") {
                ctx2.drawImage(this.blue, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            }else {
                ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            }
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
};

fruitObj.prototype.born = function (i) {
    var aneId = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.headx[aneId];
    this.y[i] = ane.heady[aneId];
    this.currentAneID[i] = aneId;
    this.l[i] = 0;
    this.alive[i] = true;
    this.moveX[i] = Math.random() - 0.5;
    var ran = Math.random();
    if (ran < 0.2) {
        this.fruitType[i] = "blue";
    } else {
        this.fruitType[i] = "orange";
    }
};

fruitObj.prototype.update = function () {
    var num = 0;
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            num++;
        }
    }
};

fruitObj.prototype.dead = function (i) {
    fruit.alive[i] = false;
};

function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            num += 1;
        }
    }
    if (num < 15) {
        sendFruit();
        return;
    }
}

function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            return;
        }
    }
}
