$(function () {
    var urlxxx = document.getElementById("Article");
    $.ajax({
        type: "get",
        url: urlxxx.innerText,
        dataType: "text",
        async: true
    }).done(function (data) {
        $("#one").html(data.replace(/\r\n/ig, '</br>'));//替换回车行成换行符
        var converter = new showdown.Converter();
        var htmls = converter.makeHtml(data);
        document.getElementById("main").innerText = "";
        $("#main").append(htmls);
    });

});

