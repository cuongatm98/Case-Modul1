var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bong = {
    x: 20,
    y: 350,
    dx: 2,
    dy: 2,
    radius: 5
}
var count=0;
var gamewin = false;
var tonggach=chisogach.hang*chisogach.cot
function veBong() {
    ctx.beginPath();
    ctx.arc(bong.x, bong.y, bong.radius, 0, Math.PI * 2)
    ctx.stroke();
    ctx.fillStyle = '#006cf0'
    ctx.fill()

    ctx.closePath()
}
function vachamvoithanhbar() {
    if (bong.x + bong.radius>= bar.x+bong.radius && bong.x + bong.radius <= bar.x + bar.width &&
        bong.y+bong.radius >= canvas.height - bar.height - 5) {
        bong.dy = -bong.dy;
    }
}
function gameoverr() {
    if (gamewin){
        alert("GAME WIN")
    }else {
        alert("GAME OVER")
    }
}
function bongvachamvoigach() {
    arrgach.forEach(function (b) {
        if (!b.trangthaigach){
            if (bong.x >= b.x && bong.x <= b.x + chisogach.width &&
                bong.y + 10 >= b.y && bong.y - 10 <= b.y + chisogach.height) {
                bong.dy = -bong.dy
                b.trangthaigach = true
                count+=1
                document.getElementById("score").innerHTML = count
                if (count>=tonggach){
                    gamewin=true
                    gameover=true
                }

            }
        }
    })
}
function toado() {
    bong.x += bong.dx
    bong.y += bong.dy
}
function vachamcanh() {
    if (bong.x <= 10 || bong.x >= canvas.width - 10) {
        bong.dx = -bong.dx;
    }
    if (bong.y <= 10) {
        bong.dy = -bong.dy;
    }
}