window.addEventListener("load", function() {
    let icon = document.querySelector(".icon");
    icon.style.left = "10px";
    icon.style.top = "20px";

    //사용자가 화면을 클릭하면 클릭한 위치로 선물아이콘이 스르륵 이동하도록
    //1.클릭한 곳의 좌표값 얻기
    // document.querySelector("body").on = function(){
    //     console.log("sd");
    // }
    document.addEventListener("click", function(e) {
        //클릭한 위치의 좌표를 저장할 변수 만들기
        var xPos = e.clientX;
        var yPos = e.clientY;
        console.log(xPos, yPos);
        //2.현재 아이콘이 있는 위치값
        let iconPosX = parseInt(icon.style.left);
        let iconPosY = parseInt(icon.style.top);
        console.log(iconPosX, iconPosY);
        //3.이동할 거리 계산하기
        let moveX = xPos - iconPosX;
        let moveY = yPos - iconPosY;
        console.log(moveX, moveY);
        //4.스르륵 이동
        // 짠
        // icon.style.left = xPos + "px";
        // icon.style.top = yPos + "px";
        setInterval(function() {
            if ((moveX > 0 && iconPosX < xPos) || (moveX < 0 && iconPosX > xPos)) {
                iconPosX += moveX * 0.1;
                iconPosY += moveY * 0.1;
                icon.style.left = iconPosX + "px";
                icon.style.top = iconPosY + "px";
            }
        }, 100)
    })
})