// 重新抽籤事件
function back() {
    document.getElementById("lots").classList.remove("d-none");
    document.getElementById("toss_title").classList.add("d-none");
    document.getElementById("toss-images").classList.add("d-none");
    document.getElementById("back").classList.add("d-none");
}

// 籤筒 click 事件
function click_lickbox() {
    // 隱藏描述
    document.getElementById("description").classList.add("d-none");
    // 顯示抽到的籤號
    document.getElementById("step_2").classList.remove("d-none");
    // 亂數的速度
    var int = self.setInterval(draw_straws, 50);

    // 取得籤筒圖片 Dom
    var img = document.getElementById("lots");
    var rotate_1 = self.setInterval(function () {
        img.style.transform = 'rotate(20deg)';
    }, 250);
    var rotate_2 = self.setInterval(function () {
        img.style.transform = 'rotate(-20deg)';
    }, 230);

    setTimeout(function () {
        clearInterval(int);
        clearInterval(rotate_1);
        clearInterval(rotate_2);
    }, 2000);

    setTimeout(function () {
        toss_move();
    }, 2500);
}

// 抽籤亂數 cb
function draw_straws() {
    var x = document.getElementById("number");
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

// 顯示 "進行擲筊" 按鈕 cb
function toss_move() {
    var toss = document.getElementById("toss");
    toss.classList.remove("d-none");
}

// 擲筊 onclick 事件
function click_toss() {

    document.getElementById("toss-images").classList.remove("d-none");
    document.getElementById("step_2").classList.add("d-none");
    document.getElementById("lots").classList.add("d-none");

    var toss_1 = document.getElementById("toss_1");
    var toss_2 = document.getElementById("toss_2");

    toss_1.classList.remove("d-none");
    toss_2.classList.remove("d-none");

    var toss = self.setInterval(toss_image, 50);

    setTimeout(function () {
        clearInterval(toss);
        // 取得 toss_1 圖片檔名
        var fullPath_1 = document.getElementById("toss_1").src;
        var filename_1 = fullPath_1.replace(/^.*[\\\/]/, '');

        // 取得 toss_2 圖片檔名
        var fullPath_2 = document.getElementById("toss_2").src;
        var filename_2 = fullPath_2.replace(/^.*[\\\/]/, '');

        // 聖筊
        if (filename_1 == "1.png" && filename_2 == "4.png") {
            document.getElementById("toss_title").classList.remove("d-none");
            document.getElementById("toss-consult").textContent = "聖筊";
            document.getElementById("toss-description").textContent = "求籤成功，請領取籤詩";

            // 出現觀看籤詩及說明連結
            var num = document.getElementById("number").textContent;
            var view = document.getElementById("view");
            view.classList.remove("d-none");
            view.href = num + ".html";
        }
        // 聖筊
        else if (filename_1 == "2.png" && filename_2 == "3.png") {
            document.getElementById("toss_title").classList.remove("d-none");
            document.getElementById("toss-consult").textContent = "聖筊";
            document.getElementById("toss-description").textContent = "求籤成功，請領取籤詩";

            // 出現觀看籤詩及說明連結
            var num = document.getElementById("number").textContent;
            var view = document.getElementById("view");
            view.classList.remove("d-none");
            view.href = num + ".html";
        }
        // 笑筊
        else if (filename_1 == "1.png" && filename_2 == "3.png") {
            document.getElementById("toss_title").classList.remove("d-none");
            document.getElementById("toss-consult").textContent = "笑筊";
            document.getElementById("back").classList.remove("d-none");
        }
        // 陰筊
        else if (filename_1 == "2.png" && filename_2 == "4.png") {
            document.getElementById("toss_title").classList.remove("d-none");
            document.getElementById("toss-consult").textContent = "陰筊";
            document.getElementById("back").classList.remove("d-none");
        }
    }, 2500);
}

// 亂數擲筊
function toss_image() {
    var toss_1 = document.getElementById("toss_1");
    var toss_2 = document.getElementById("toss_2");

    var toss_1_src = Math.floor((Math.random() * 2) + 1);
    var toss_2_src = Math.floor((Math.random() * (4 - 3 + 1)) + 3);

    toss_1.src = "images/" + toss_1_src + ".png";
    toss_2.src = "images/" + toss_2_src + ".png";
}