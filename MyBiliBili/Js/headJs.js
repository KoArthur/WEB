function changeHref() {
    var keyword = document.getElementById("keyword");
    var destination = document.getElementById("destination");
    var string = keyword.value;
    destination.href = "https://search.bilibili.com/all?keyword=" + string + "&from_source=nav_search_new";
    // 此处若将keyword.value直接进行字符串相加不会得到想要的结果，因为keyword.value不是字符串
}