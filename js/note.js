var pdf = "../pdf.js/web/viewer.html?file=../../pdf/" + DATE_NOW + ".pdf";
$('#pdf-place').append("<embed id= 'pdf' src='" + pdf + "' id='audio_file'>");
document.getElementById("link").href = $('#pdf').attr("src");
document.title = "[Note] - " + DATE_NOW + " - 张颖捷";
document.getElementById("title").innerText = DATE_NOW;
document.getElementById("prev").innerText = DATE_PREV;
document.getElementById("prev_link").href = "../note/" + DATE_PREV + ".html";
document.getElementById("next").innerText = DATE_NEXT;
document.getElementById("next_link").href = "../note/" + DATE_NEXT + ".html";

function change() {
    var viewer = "../pdf.js/web/viewer.html?file=../";
    var parent = $('#pdf').parent();
    var src = $('#pdf').attr("src");
    if (src.indexOf(viewer) !== -1) {
        src = $('#pdf').attr("src").replace(viewer, "");
    } else {
        src = viewer + $('#pdf').attr("src");
    }
    var newElement = "<embed id= 'pdf' src='" + src + "' id='audio_file'>";

    $('#pdf').remove();
    document.getElementById("link").href = src;
    parent.append(newElement);
}
