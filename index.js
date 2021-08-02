var gameover = false;

function draw() {
    if (!gameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        vegach()
        veBong()
        vethanhbar()

        if (bar.chuyentrai) {
            bar.x -= bar.speed
        } else if (bar.chuyenphai) {
            bar.x += bar.speed
        }
        if (bar.x < 0) {
            bar.x = 0
        } else if (bar.x > canvas.width - bar.width) {
            bar.x = canvas.width - bar.width
        }
        vachamcanh()
        vachamvoithanhbar()
        bongvachamvoigach()
        toado()
        //     endgam = false;
        if (bong.y >= canvas.height - 10) {
            gameover = true
        }

        requestAnimationFrame(draw);
    }else {
        gameoverr()
    }
}

draw()