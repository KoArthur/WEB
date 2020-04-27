var className = "tooltip-box";

var getDocId = function (id) {
    return document.getElementById(id);
};

function showTooltip(obj, id, html, width, height, left, top) {
    if (document.getElementById(id) == null) {
        var tooltipBox = document.createElement("div");
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;
        tooltipBox.style.width = width ? width + "px" : "auto";
        tooltipBox.style.height = height ? height + "px" : "auto";
        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";
        tooltipBox.style.zIndex = 10;
        var offLeft = obj.offsetLeft + left;
        var offTop = obj.offsetTop + top;
        tooltipBox.style.left = offLeft + "px";
        tooltipBox.style.top = offTop + "px";
        obj.appendChild(tooltipBox);
        obj.onmouseout = function () {
            setTimeout(function () {
                getDocId(id).style.display = "none";
            }, 500);
        };
    }else {
        document.getElementById(id).style.display = "block";
    }
}

var gc = getDocId("gameCenter");
var lv = getDocId("live");
var ct = getDocId("cartoon");
var a = getDocId("app");
var login = getDocId("login");
var ctb = getDocId("contribute");
var mct = getDocId("menu-cartoon");
var ms = getDocId("music");
var dc = getDocId("dance");
var tcl = getDocId("technology");
var lf = getDocId("life");
var vg = getDocId("vogue");
var rc = getDocId("recreation");
var mv = getDocId("movie");
var fl = getDocId("film");
var ch = getDocId("china");
var gm = getDocId("game");
var dg = getDocId("digital");
var gch = getDocId("guichu");
var ys = getDocId("yingshi");
var zb = getDocId("zhibo");

gc.onmousemove = function () {
    var geek = '<iframe src = "../Html/gameCenterTip.html" style="border: 0; width: 675px; height: 255px"></iframe>';
    showTooltip(this, "gc", geek, 666, 258, -40, 40);
};
lv.onmousemove = function () {
    var geek = '<iframe src = "../Html/liveTip.html" style="border: 0; width: 530px; height: 280px"></iframe>';
    showTooltip(this, "lv", geek, 530, 280, -40, 40);
};
ct.onmousemove = function () {
    var geek = '<iframe src = "../Html/cartoonTip.html" style="border: 0; width: 665px; height: 245px"></iframe>';
    showTooltip(this, "ct", geek, 665, 245, -40, 40);
};
a.onmousemove = function () {
    var geek = '<iframe src = "../Html/appTip.html" style="border: 0; width: 150px; height: 180px"></iframe>';
    showTooltip(this, "a", geek, 150, 180, -30, 40);
};
login.onmousemove = function () {
    var geek = '<iframe src = "../Html/logTip.html" style="border: 0; width: 540px; height: 375px"></iframe>';
    showTooltip(this, "in", geek, 540, 385, -400, 40);
};
ctb.onmousemove = function () {
    var geek = '<iframe src = "../Html/contributeTip.html" style="border: 0; width: 360px; height: 70px"></iframe>';
    showTooltip(this, "ctb", geek, 360, 70, -250, 60);
};
mct.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/cartoonTip.html" style="border: 0; width: 170px; height: 120px"></iframe>';
    showTooltip(this, "mct", geek, 170, 120, -60, -130);
};
ms.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/musicTip.html" style="border: 0; width: 280px; height: 120px"></iframe>';
    showTooltip(this, "ms", geek, 280, 120, -60, -130);
};
dc.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/danceTip.html" style="border: 0; width: 160px; height: 120px"></iframe>';
    showTooltip(this, "dc", geek, 160, 120, -60, -130);
};
tcl.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/technologyTip.html" style="border: 0; width: 160px; height: 120px"></iframe>';
    showTooltip(this, "tcl", geek, 160, 120, -60, -130);
};
lf.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/lifeTip.html" style="border: 0; width: 140px; height: 120px"></iframe>';
    showTooltip(this, "lf", geek, 140, 120, -60, -130);
};
vg.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/vogueTip.html" style="border: 0; width: 120px; height: 120px"></iframe>';
    showTooltip(this, "vg", geek, 120, 120, -60, -130);
};
rc.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/recreationTip.html" style="border: 0; width: 80px; height: 90px"></iframe>';
    showTooltip(this, "rc", geek, 80, 90, -60, -100);
};
mv.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/movieTip.html" style="border: 0; width: 80px; height: 90px"></iframe>';
    showTooltip(this, "mv", geek, 80, 90, -60, -100);
};
fl.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/filmTip.html" style="border: 0; width: 170px; height: 120px"></iframe>';
    showTooltip(this, "fl", geek, 170, 120, -60, 40);
};
ch.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/chinaTip.html" style="border: 0; width: 200px; height: 120px"></iframe>';
    showTooltip(this, "ch", geek, 200, 120, -60, 40);
};
gm.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/gameTip.html" style="border: 0; width: 270px; height: 120px"></iframe>';
    showTooltip(this, "gm", geek, 270, 120, -60, 40);
};
dg.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/digitalTip.html" style="border: 0; width: 80px; height: 120px"></iframe>';
    showTooltip(this, "dg", geek, 80, 120, -60, 40);
};
gch.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/guichuTip.html" style="border: 0; width: 120px; height: 120px"></iframe>';
    showTooltip(this, "gch", geek, 120, 120, -60, 40);
};
ys.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/yingshiTip.html" style="border: 0; width: 90px; height: 120px"></iframe>';
    showTooltip(this, "ys", geek, 90, 120, -60, 40);
};
zb.onmousemove = function () {
    var geek = '<iframe src = "../Html/menuTip/liveTip.html" style="border: 0; width: 120px; height: 120px"></iframe>';
    showTooltip(this, "zb", geek, 120, 120, -60, 40);
};