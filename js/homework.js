var link1 = "../note/" + DATE_NOW + ".html";
var link2 = "../homework/" + DATE_PREV + ".html";
var link3 = "../homework/" + DATE_NEXT + ".html";
var link4 = "../_posts/" + MD + ".mymd";


document.title = "[Homework] - " + DATE_NOW + " - 张颖捷";
document.getElementById("title").innerText = DATE_NOW;
document.getElementById("description").innerText = DATE_NOW;
document.getElementById("here").href = link1;
document.getElementById("post").href = link4;
document.getElementById("Article").innerText = link4;
document.getElementById("prev").innerText = DATE_PREV;
document.getElementById("prev_link").href = link2;
document.getElementById("next").innerText = DATE_NEXT;
document.getElementById("next_link").href = link3;
