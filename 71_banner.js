// window.onload = function() {}
window.addEventListener("load", function() {
    // 왼쪽 오른쪽 버튼 변수로
    let leftBtn = document.querySelector(".leftBtn");
    let rightBtn = document.querySelector(".rightBtn");

    // 이미지
    let myImg = document.querySelector(".bannerImg");

    // 현재 보여질 이미지가 몇번째 이미지인지를 체크할 변수 만들기
    var sNum = 1;
    // 오른쪽 버튼을 클릭하면 현재그림의 다음 그림이 myUmg로 보이도록
    // 현재 그림이 1->2, 2->3
    rightBtn.addEventListener("click", function() {

        if (sNum < 6) {
            sNum++;
        } else {
            sNum = 1;
        }
        console.log(sNum);
        myImg.setAttribute("src", `images/main-banner${sNum}.jpg`)
    })

    leftBtn.addEventListener("click", function() {

        if (1 < sNum && sNum < 7) {
            sNum--;
        } else {
            sNum = 6;
        }
        console.log(sNum);
        myImg.setAttribute("src", `images/main-banner${sNum}.jpg`);
    })

    //     leftBtn.addEventListener("click", function() {
    //         if (sNum == 1) {
    //             sNum = 7;
    //         } else {
    //             sNum--;
    //         }
    //         console.log(sNum);
    //         myImg.setAttribute("src", `images/main-banner${sNum}.jpg`)
    //     })
})