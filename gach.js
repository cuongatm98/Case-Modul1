var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bar = {
    width: 80,
    height: 5,
    x: 0,
    y: canvas.height - 10,
    speed: 3,
    chuyentrai: false,
    chuyenphai: false
}
var chisogach = {
    setx: 10,
    sety: 10,
    width: 20,
    magin2:3,
    magin1:1,
    height: 8,
    hang: 7,
    cot: 25

};
var arrgach = [];

    for (let i = 0; i < chisogach.hang; i++) {
        for (let j = 0; j < chisogach.cot; j++) {
            arrgach.push({
                x: chisogach.setx + j * (chisogach.width + chisogach.magin1),
                y: chisogach.sety + i * (chisogach.height + chisogach.magin2),
                trangthaigach : false
            });
        }
    }
function vegach() {
    arrgach.forEach(function (b) {
        if (!b.trangthaigach) {
            ctx.beginPath()
            ctx.rect(b.x, b.y, chisogach.width, chisogach.height);
            ctx.fillStyle = '#19f124'
            ctx.fill()
            ctx.closePath()
        }
    })
}

function vethanhbar() {
    ctx.beginPath()
    ctx.rect(bar.x, bar.y, bar.width, bar.height)
    ctx.fillStyle = "#bd20e2";
    ctx.fill();
    ctx.closePath()
}
document.addEventListener("keydown", function (event) {
    if (event.keyCode== 37) {
        bar.chuyentrai = true
    } else if (event.keyCode == 39) {
        bar.chuyenphai = true
    }
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bar.chuyentrai = false
    } else if (event.keyCode == 39) {
        bar.chuyenphai = false
    }
});
