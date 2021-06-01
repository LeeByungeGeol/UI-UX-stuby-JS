window.onload = function() {
    // 각 버튼에 변수로 등록하기
    var btn1 = document.querySelector(".btn1");
    var btn2 = document.querySelector(".btn2");
    var btn3 = document.querySelector(".btn3");
    var btn4 = document.querySelector(".btn4");
    var myImg = document.querySelector(".bannerImg");
    // 변경되어야할 이미지 정보를 배열에 저장하기
    var imgArr = ["main-banner1", "main-banner2", "main-banner3", "main-banner4"];


    btn1.onclick = function() {
        myImg.setAttribute("src", `images/${imgArr[0]}.jpg`);
        btn1.style.backgroundColor = "pink";
    };
    // 두번째 버튼을 클릭하면 myImg의 src정보를 imgArr의 2번째 방에 있는 이미지로 변경
    btn2.onclick = function() {
        //선택자.속성="값"
        //선택자.setAttribute("속성명",속성값);
        // myImg.src = "images/" + imgArr[1] + ".jpg";
        myImg.setAttribute("src", `images/${imgArr[1]}.jpg`);
        //javascript는 스크립트를 부르는 문서의 입장에서 이미지가 삽입되므로
        //html입장에서의 이미지 경로로 설정된다. css처럼 ../가 필요치 않다.
        btn2.style.backgroundColor = "pink";
    };
    // btn3.onclick = function() {
    //     myImg.setAttribute("src", `images/${imgArr[2]}.jpg}`);
    // }
    btn3.addEventListener("click", function() {
        myImg.setAttribute("src", `images/${imgArr[2]}.jpg`);
        this.style.backgroundColor = "pink";
    });
    btn4.onclick = function() {
        myImg.setAttribute("src", `images/${imgArr[3]}.jpg`);
        this.style.backgroundColor = "pink";
    };
    btn1.onblur = function() {
        this.style.backgroundColor = "#ddd";
    };
    btn2.onblur = function() {
        this.style.backgroundColor = "#ddd";
    };
    btn3.onblur = function() {
        this.style.backgroundColor = "#ddd";
    };
    btn4.onblur = function() {
        this.style.backgroundColor = "#ddd";
    };
};