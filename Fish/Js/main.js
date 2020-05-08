var can1;
var can2;
var canWidth;
var canHeight;

var mx = 0;
var my = 0;

var ctx1;
var ctx2;

var lastTime;//上一帧的时间
var deltaTime;//两帧之间时间差     通过时间差控制移动速度以此实现无力的平滑移动

var backgroundPic = new Image();

var ane;

var fruit;

var data;

var wave;

var halo;

var dust;
var dustPic = [];

var mom;
var momTails = [];
var momEyes = [];
var momBodyOra = [];
var momBodyBlue = [];

var baby;
var babyTails = [];
var babyEyes = [];
var babyFades = [];

document.body.onload = game;
function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    //获得canvas context
    can1 = document.getElementById("canvas1");//在前 fishes，dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");//在后 background,ane,fruits
    ctx2 = can2.getContext("2d");
    can1.addEventListener('mousemove', onMouseMove, false);
    backgroundPic.src = "../Img/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();
    data = new dataObj();

    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    ctx1.font = "30px Verdana";
    ctx1.textAlign = 'center';

    //小鱼尾巴
    for (var i = 0; i < 8; i++) {
        babyTails[i] = new Image();
        babyTails[i].src = "../Img/bigTail" + i + ".png";
    }

    for (var i = 0; i < 2; i++) {
        babyEyes[i] = new Image();
        babyEyes[i].src = "../Img/babyEye" + i + ".png";
    }

    for (var i = 0; i < 20; i++) {
        babyFades[i] = new Image();
        babyFades[i].src = "../Img/babyFade" + i + ".png";
    }

    for (var i = 0; i < 8; i++) {
        momTails[i] = new Image();
        momTails[i].src = "../Img/bigTail" + i + ".png";
    }

    for (var i = 0; i < 2; i++) {
        momEyes[i] = new Image();
        momEyes[i].src = "../Img/bigEye" + i + ".png";
    }

    for (var i = 0; i <8; i++) {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "../Img/bigSwim" + i + ".png";
        momBodyBlue[i].src = "../Img/bigSwimBlue" + i + ".png";
    }

    dust = new dustObj();
    for (var i = 0; i < 7; i++) {
        dustPic[i] = new Image();
        dustPic[i].src = "../Img/dust" + i + ".png";
    }
    dust.init();

}

function gameloop() {
    window.requestAnimationFrame(gameloop);//setInterval , setTimeout()
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) {
        deltaTime = 40;
    }
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    //canvas1在canvas2上面，每一帧都覆盖子啊canvas2上，会导致线条加粗，所以在绘制canvas1时应该清空前一帧
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    momFruitsCollision();
    momBabyCollision();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}

function onMouseMove(e) {
    if (!data.gameOver) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX === undefined ? e.layerX : e.offsetX;
            my = e.offsetY === undefined ? e.layerY : e.offsetY;
        }
    }
}