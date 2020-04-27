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
            getDocId(id).style.display = "none";
        };
    }else {
        document.getElementById(id).style.display = "block";
    }
}

var lg = getDocId("language");

lg.onmousemove = function () {
    var geek = '<iframe src = "../Html/languageTip.html" style="border: 0; width: 200px; height: 80px"></iframe>';
    showTooltip(this, "lg", geek, 200, 80, -200, -20);
};

