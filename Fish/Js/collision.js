//大鱼和过时的距离，小于一定值判定吃掉
function momFruitsCollision() {
    if (!data.gameOver) {
        for (var i = 0; i < fruit.num; i++) {
            if (fruit.alive[i]) {
                //计算距离
                var len = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if (len < 900) {
                    fruit.dead(i);
                    data.fruitNumber++;
                    mom.momBodyCount++;
                    if (mom.momBodyCount > 7) {
                        mom.momBodyCount = 7;
                    }
                    if (fruit.fruitType[i] === "blue") {
                        data.blue = 2;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }
}

function momBabyCollision() {
    if (data.fruitNumber > 0 && !data.gameOver) {
        var len = calLength2(mom.x, mom.y, baby.x, baby.y);
        if (len < 900) {
            baby.babyFadeCount = 0;
            mom.momBodyCount = 0;
            data.addScore();
            halo.born(baby.x, baby.y);
        }
    }
}